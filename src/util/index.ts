import { useEffect } from "react";
export const isFalsy = (value: unknown) => (value === 0 ? false : !value);
// unknown 类似any， 但是比any更严格
export const cleanObject = (object: any) => {
  // 在函数里，改变传入的对象本身是不好的 object.name = 123
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};

export const getSessionStorage = (value: string) => {
  return sessionStorage.getItem(value);
};
