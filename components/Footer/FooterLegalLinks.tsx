import type { FooterLegalLink } from "./types";
import { FooterLinkList } from "./FooterLinkList";

export const FooterLegalLinks = ({
  links,
}: {
  links: readonly FooterLegalLink[];
}) => {
  return (
    <FooterLinkList
      links={links}
      className="flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-center"
    />
  );
};
