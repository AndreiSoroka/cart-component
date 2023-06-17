import projectInfoStyles from "./projectInfo.module.scss";
import { memo } from "react";

const LINK_LIST = [
  {
    name: "Github",
    url: "https://github.com/AndreiSoroka/cart-component/tree/master",
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

const ProjectInfo = memo(() => {
  const links = LINK_LIST.map((link) => (
    <li key={link.name}>
      <a href={link.url} target="_blank" rel="nofollow noopener">
        {link.name}
      </a>
    </li>
  ));
  return <ul className={projectInfoStyles.list}>{links}</ul>;
});

export default ProjectInfo;
