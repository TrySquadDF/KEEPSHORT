function getDevice(navigator: Navigator) {
  if (navigator.userAgent.toLocaleLowerCase().match(/android|iPad|iPhone/))
    return "Mobile";
  else return "PC";
}

export default getDevice;
