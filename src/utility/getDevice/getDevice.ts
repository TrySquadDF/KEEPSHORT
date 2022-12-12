function getDevice(navigator: Navigator) {
  if (navigator.userAgent.toLocaleLowerCase().match(/android|ipad|iphone/))
    return "Mobile";
  else return "PC";
}

export default getDevice;
