import environmentMeta from "@/shared/const/environment.meta";

export const getError = (message?: unknown): Error => {
  if (message instanceof Error) {
    return message;
  }
  if (typeof message === "string") {
    return new Error(message);
  }
  if (typeof message === "object") {
    return new Error(JSON.stringify(message, null, 2));
  }
  return new Error("Something wrong");
};

/* istanbul ignore next */
const logger = (...args: Parameters<typeof getError>) => {
  const error = getError(...args);

  // todo: send error to server (sentry, etc)

  if (environmentMeta.MODE === "development") {
    console.error(error);
  }
};

export default logger;
