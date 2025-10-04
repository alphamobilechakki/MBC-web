 

// utils/StorageHelper.js

export const setGetLocalData = (key, data) => {
  if (data !== undefined && data !== null) {
    localStorage.setItem(key, typeof data === "object" ? JSON.stringify(data) : data);
  } else {
    const value = localStorage.getItem(key);
    try {
      return JSON.parse(value);  
    } catch {
      return value;
    }
  }
};

export const clearLocalData = (key) => {
  if (key) {
    localStorage.removeItem(key);
  } else {
    localStorage.clear();
  }
};
 
 