const api = (input: RequestInfo | URL, init?: RequestInit) => {
  // add some config if you need
  return fetch(input, init).then((response) => response.json());
};
export default api;
