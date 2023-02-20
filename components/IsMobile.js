export function isMobile() {
  let isMobile = "";
  console.log(window,window.screen)
  if (typeof screen.orientation !== 'undefined') {
    switch (screen.orientation.type) {
      case "landscape-primary":
        isMobile = false;
        break;
      case "landscape-secondary":
        isMobile = false;
        break;
      case "portrait-secondary":
        isMobile = true;
      case "portrait-primary":
        isMobile = true;
        break;
      default:
        console.log("The orientation API isn't supported in this browser :(");
    }
  }
  return isMobile;
}
