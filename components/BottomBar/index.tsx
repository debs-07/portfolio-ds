"use client";

// External dependencies
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

// Internal dependencies
import MobileBottomBar from "./mobile";
import WebBottomBar from "./web";

const socials = [
  { href: "https://twitter.com/Debakanta07p", icon: <TwitterIcon /> },
  {
    href: "https://www.facebook.com/debakanta.satapathy.07",
    icon: <FacebookOutlinedIcon />,
  },
  {
    href: "https://in.linkedin.com/in/debakanta-satapathy-07",
    icon: <LinkedInIcon />,
  },
  { href: "https://github.com/debs-07", icon: <GitHubIcon /> },
];

const BottomBar = () => {
  return (
    <>
      <WebBottomBar socials={socials} />
      <MobileBottomBar socials={socials} />
    </>
  );
};

export default BottomBar;
