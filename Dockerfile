FROM node:18 AS builder-packages
ENV IS_DOCKER_BUILD=1

COPY package.json yarn.lock /app/
WORKDIR /app
RUN yarn install --frozen-lockfile
RUN yarn playwright install --with-deps

FROM builder-packages AS builder-src
COPY . /app/

FROM builder-src AS check-app__type-check
RUN yarn type-check

FROM builder-src AS check-app__lint
RUN yarn lint

FROM builder-src AS check-app__stylelint
RUN yarn stylelint

FROM builder-src AS check-app__prettier
RUN yarn prettier

FROM builder-src AS builder-dist
RUN yarn build-only

FROM builder-dist AS devserver

# starting tests (Excluding unit and e2e. Because they will be run with build test reports)
COPY --from=check-app__lint /app/package.json /home/lint-package.json
COPY --from=check-app__stylelint /app/package.json /home/stylelint-package.json
COPY --from=check-app__type-check /app/package.json /home/type-check-package.json
COPY --from=check-app__prettier /app/package.json /home/prettier-package.json

ENV PORT=3000

CMD ["sh", "-c", "yarn preview -- --host --port $PORT"]
