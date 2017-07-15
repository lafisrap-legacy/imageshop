import md5 from 'md5';

export function console_log() {
  if (process.env.NODE_ENV !== 'testing') {
    console.log(...arguments);
  }
}

export function urlize(str) {
  return `${str.replace(/[^A-Za-z0-9]/g, '_')}_${md5(str).substr(-4)}`;
}

export default {
  urlize,
};

