const debounce = (func: Function, wait: number) => {
  let time: NodeJS.Timeout | string | number | undefined;

  return function () {
    clearTimeout(time);
    time = setTimeout(func, wait, arguments);
  };
};

export default debounce;
