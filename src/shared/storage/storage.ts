interface Storage {
  setItem: (key: string, value: string) => void;
  getItem: (key: string) => string | null;
  removeItem: (key: string) => void;
}

let storage: Storage;

function setItem(key: string, value: string) {
  if (typeof storage.setItem !== "function") {
    throw "Storage should implement setItem method";
  }
  storage.setItem(key, value);
}

function getItem(key: string) {
  if (typeof storage.setItem !== "function") {
    throw "Storage should implement getItem method";
  }
  return storage.getItem(key);
}

function removeItem(key: string) {
  if (typeof storage.removeItem !== "function") {
    throw "Storage should implement removeItem method";
  }
  return storage.removeItem(key);
}

export default { setItem, getItem, removeItem };

export const setStorage = (instance: Storage) => {
  storage = instance;
};

setStorage(localStorage);
