export default (
  y,
  duration = 300,
  easing = t => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)
) => {
  const start = window.pageYOffset;
  const startTime =
    'now' in window.performance ? performance.now() : new Date().getTime();

  const docHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  );
  const windowHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.getElementsByTagName('body')[0].clientHeight;
  const destOffset = typeof y === 'number' ? y : y.offsetTop;
  const scrollOffset = Math.round(
    docHeight - destOffset < windowHeight
      ? docHeight - windowHeight
      : destOffset
  );

  if ('requestAnimationFrame' in window === false) {
    window.scroll(0, scrollOffset);
    return;
  }

  function scroll() {
    const now =
      'now' in window.performance ? performance.now() : new Date().getTime();
    const time = Math.min(1, (now - startTime) / duration);
    const timeFunction = easing(time);
    window.scroll(0, Math.ceil(timeFunction * (scrollOffset - start) + start));

    if (window.pageYOffset === scrollOffset) {
      return;
    }

    requestAnimationFrame(scroll);
  }
  requestAnimationFrame(scroll);
};
