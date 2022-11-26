function hslParser(hslColor: string) {
  if (hslColor.length === 0 || Boolean(hslColor.match(/hsl/)) !== true)
    return null;

  let contrastArray = hslColor.slice(4, hslColor.length - 1).split(",");
  const contrast = contrastArray.at(-1);

  if (contrastArray.length !== 3) return null;

  if (contrast) {
    const cooficient = Number(contrast.trim().replace("%", ""));
    if (cooficient > 100 || cooficient < 0) return null;
    return typeof cooficient === "number" ? cooficient : null;
  } else {
    return null;
  }
}

export default hslParser;
