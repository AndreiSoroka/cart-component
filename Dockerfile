FROM node:18 AS builder-packages
ENV IS_DOCKER_BUILD=1

COPY package.json yarn.lock /app/
WORKDIR /app
RUN yarn install --frozen-lockfile

FROM builder-packages AS builder-src
COPY . /app/

FROM builder-src AS check-app__test
RUN yarn test

FROM builder-src AS check-app__type-check
RUN yarn type-check

FROM builder-src AS check-app__lint
RUN yarn lint

FROM builder-src AS check-app__prettier
RUN yarn prittier

FROM builder-src AS builder-dist
RUN yarn build-only

FROM builder-dist AS devserver

# starting tests
COPY --from=check-app__test /app/package.json /home/test-package.json
COPY --from=check-app__lint /app/package.json /home/lint-package.json
COPY --from=check-app__type-check /app/package.json /home/type-check-package.json
COPY --from=check-app__type-app__prettier /app/package.json /home/prettier-package.json

CMD ["yarn", "preview", "--", "--host", "--port", "80"]
