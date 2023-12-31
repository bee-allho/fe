const PRE_FIX = 'KOREA-AIRPORT-';

const get = <T>(storage: Storage, key: string, defaultValue?: T): T | undefined => {
  const value = storage.getItem(`${PRE_FIX}-${key}`);
  if (value) return JSON.parse(value).value;
  return defaultValue;
};

const set = (storage: Storage, key: string, value: any) => {
  storage.setItem(`${PRE_FIX}-${key}`, JSON.stringify({ value }));
};

const remove = (storage: Storage, key: string) => storage.removeItem(`${PRE_FIX}-${key}`);

type StorageManager<T> = {
  get: (defaultValue?: T) => T | undefined;
  set: (value: T) => void;
  remove: () => void;
  isEmpty?: boolean;
};

export const getStorageManager = <T>(key: string, storageType: 'local' | 'session'): StorageManager<T> => {
  const storage = storageType == 'local' ? localStorage : sessionStorage;
  if (!(storage instanceof Storage)) throw Error(`${storageType} is not StorageType required 'local'|'session' `);
  const context = {
    get: (defaultValue?: T): T | undefined => get(storage, key, defaultValue),
    set: (value: T) => set(storage, key, value),
    remove: () => remove(storage, key),
  };
  Object.defineProperty(context, 'isEmpty', {
    get() {
      return this.get() == null;
    },
  });

  return context;
};
