import md5 from 'md5';

/* eslint no-console: 2 */  // --> OFF
export function consoleLog(...args) {
  if (process.env.NODE_ENV !== 'testing') {
    console.log(...args);
  }
}
/* eslint no-console: 0 */  // --> ON

export function urlize(str) {
  return `${str.replace(/[^A-Za-z0-9]/g, '_')}_${md5(str).substr(-4)}`;
}

export default {
  urlize,
};

