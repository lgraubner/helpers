export default (...fns) => x => fns.reduce((y, f) => f(y), x);
