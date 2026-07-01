import { useEffect, useState } from "react";

export function useDebounce<T>(
  value: T,
  delay: number,
) {
  const [debouncedValue, setDebouncedValue] =
    useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}



// What are we building?

// Current

// Developers Page

// ↓

// 200 Developers

// After this

// Developers

// ↓

// Search Box

// ↓

// bh

// ↓

// Debounce

// ↓

// RTK Query

// ↓

// Backend

// ↓

// Results