export const commonStyles = (theme: string, wallpaperStatus: string) => ({
  pageWrapper: {
    height: "100vh",
    background: wallpaperStatus === "yes" ? `url(/image/${theme}.jpg)` : "none",
    backgroundRepeat: "none",
    backgroundSize: "cover",
    "@media screen and (max-width:550px)": {
      fontSize: "3vw",
    },
  },
});
