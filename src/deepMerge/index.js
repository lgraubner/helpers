import isObject from '../isObject';

const mergeObject = (target, source) => {
  Object.keys(source).forEach(key => {
    if (isObject(source[key])) {
      target[key] = mergeObject(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  });

  return target;
};

const deepMerge = (target, source) => {
  if (!isObject(target) || !isObject(source)) {
    throw new Error('Can not merge non objects.');
  }

  return mergeObject(target, source);
};

export default deepMerge;
