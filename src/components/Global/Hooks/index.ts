import { useState, useEffect, ReactNode } from 'react';

export const useDebounce = (value: any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState<any>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
    // eslint-disable-next-line
  }, [value]);

  return debouncedValue;
};
