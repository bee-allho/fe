export const autoIncrement = (
  (index = 0) =>
  () =>
    index++
)();

export const infinityArray = <T>(arr: T[], startIndex: number = 0) => {
  let cursor = Math.max(startIndex, 0);
  return () => arr[cursor++ % arr.length];
};

export const noop = () => {};

export const randomRange = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

export const jsonCopy = <T>(obj: T): T => JSON.parse(JSON.stringify(obj)) as T;

export const debounce = (() => {
  const map = new Map<string, NodeJS.Timeout>();
  return (key: string, callback: () => void, delay: number = 300) => {
    if (map.has(key)) {
      clearTimeout(map.get(key));
    }
    const timeout = setTimeout(() => {
      callback();
      map.delete(key);
    }, delay);
    map.set(key, timeout);
  };
})();

export const wait = (delay: number = 3000) => new Promise((timeout) => setTimeout(timeout, delay));

// 앞뒤 공백 제거
export const trim = (str: string) => str.replace(/^\s+|\s+$/g, '');
