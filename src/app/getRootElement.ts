const getRootElement = () => {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    throw new Error("Not found root element");
  }
  return rootElement;
};
export default getRootElement;
