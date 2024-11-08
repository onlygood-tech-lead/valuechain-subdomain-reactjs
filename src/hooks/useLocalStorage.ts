import { useState, useEffect } from "react";

function useLocalStorage<T>(key: string, initialValue: T) {
  // get stored value from local storage or use initial value
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.error(`[Error reading localStorage]:`, err);
      return initialValue;
    }
  });

  // update local storage when state changes
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (err) {
      console.error(`[Error setting localStorage value]:`, err);
    }
  }, [key, storedValue]);

  // getter method
  const getValue = (): T => storedValue;

  // setter method
  const setValue = (value: T | ((val: T) => T)): void => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
    } catch (err) {
      console.error(`[Error setting value in localStorage]:`, err);
    }
  };
  // remove method
  const removeValue = (): void => {
    try {
      localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (err) {
      console.error(`[Error removing value from localStorage]:`, err);
    }
  };

  return { getValue, setValue, removeValue };
}

export default useLocalStorage;
