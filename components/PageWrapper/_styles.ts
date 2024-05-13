export const commonStyles = (theme: string, wallpaperStatus: string) => ({
  pageWrapper: {
    position: "absolute",
    height: "100%",
    background: wallpaperStatus === "yes" ? `url(/image/${theme}.jpg)` : "none",
    backgroundRepeat: "none",
    backgroundSize: "cover",
    "@media screen and (max-width:550px)": {
      fontSize: "3vw",
    },
  },
});
