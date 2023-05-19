const environmentMeta = {
  SSR: import.meta.env.SSR,
  CLIENT: !import.meta.env.SSR,
  PROD: import.meta.env.PROD,
  MODE: import.meta.env.MODE,
};

export default environmentMeta;
