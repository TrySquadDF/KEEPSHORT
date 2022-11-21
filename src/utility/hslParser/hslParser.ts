function hslParser(hslColor: string) {
  if (hslColor.length === 0 || Boolean(hslColor.match(/hsl/)) !== true)
    return null;

  let contrastArray = hslColor.slice(4, hslColor.length - 1).split(",");
  const contrast = contrastArray.at(-1);

  if (contrast) {
    const cooficient = Number(contrast.trim().replace("%", ""));
    return cooficient ? cooficient : null;
  } else {
    return null;
  }
}

export default hslParser;
