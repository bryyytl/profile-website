import type { ReactElement } from "react";
import CopywriteText from "./copywrite-text";
import GitHubNavigationActionIcon from "./github-navigation-action-icon";
import LinkedInNavigationActionIcon from "./linkedin-navigation-action-icon";

const Footer = (): ReactElement => {
  return (
    <div className="gap-4 flex items-center justify-between">
      <CopywriteText />
      <div className="gap-0.5 flex items-center justify-start">
        <GitHubNavigationActionIcon />
        <LinkedInNavigationActionIcon />
      </div>
    </div>
  );
};

export default Footer;
