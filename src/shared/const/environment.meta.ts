const environmentMeta = {
  SSR: import.meta.env.SSR,
  CLIENT: !import.meta.env.SSR,
  PROD: import.meta.env.PROD,
  MODE: import.meta.env.MODE,
  STORYBOOK: !!import.meta.env.STORYBOOK,
};

export default environmentMeta;
