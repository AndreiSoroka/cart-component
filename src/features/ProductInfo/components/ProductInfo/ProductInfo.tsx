import productInfoStyles from "./ProductInfo.module.scss";

const LINK_LIST = [
  {
    name: "Github",
    url: "https://github.com/AndreiSoroka/cart-component/tree/master/src",
  },
  {
    name: "Storybook",
    url: "/storybook/",
  },
  {
    name: "Test coverage",
    url: "/coverage/",
  },
  {
    name: "Playwright report",
    url: "/playwright-report/",
  },
];

const ProductInfo = () => {
  const links = LINK_LIST.map((link) => (
    <li key={link.name}>
      <a href={link.url} target="_blank" rel="nofollow noopener">
        {link.name}
      </a>
    </li>
  ));
  return <ul className={productInfoStyles["product-info"]}>{links}</ul>;
};

export default ProductInfo;
