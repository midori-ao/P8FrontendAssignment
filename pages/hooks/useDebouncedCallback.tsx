import { useEffect, useRef, useCallback } from 'react';

export default <T extends (...args: any[]) => any>(callback: T, delay: number) => {
  const timerRef = useRef<NodeJS.Timeout>();
  
  const debouncedCallback = useCallback((...args: Parameters<T>) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => callback(...args), delay);
  }, [callback, delay]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);
  
  return debouncedCallback;
};