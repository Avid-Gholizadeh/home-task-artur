export const setItem = (key: string, value: string) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key: string) => {
  const value = localStorage.getItem(key);

  if (value) return JSON.parse(value);
  return false;
};

export const removeItem = (key: string) => {
  if (getItem(key) === false) return false;

  localStorage.removeItem(key);
};

export const removeStorage = () => {
  localStorage.clear();
};
