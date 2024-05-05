export type NavBarPropTypes = {
  navLinks: { name: string; path: string }[];
  navLinkSelected: string;
  openNavMenu: boolean;
  toggleNavMenu: (open: boolean) => void;
  changeNavLink: (pathname: string) => void;
};

export type NavBarVariantPropTypes = {
  openNavMenu: boolean;
  bgColorforNav: string;
};
