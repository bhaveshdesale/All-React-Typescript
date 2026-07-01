import { useEffect, useRef, useState } from "react";

import { useGetReelsQuery } from "../services/reelApi";

import type { Reel } from "../types/reel";

const LIMIT = 10;

export function useInfiniteReels() {
  const [page, setPage] = useState(0);

  const [reels, setReels] = useState<Reel[]>([]);

  const [hasMore, setHasMore] = useState(true);

  const loaderRef = useRef<HTMLDivElement>(null);

  const {
    data,

    isLoading,

    isFetching,

    error,
  } = useGetReelsQuery({
    limit: LIMIT,

    skip: page * LIMIT,
  });

  useEffect(() => {
    if (!data) return;

    setReels((previous) => {
      const map = new Map();

      [...previous, ...data.products].forEach((item) => {
        map.set(item.id, item);
      });

      return Array.from(map.values());
    });

    if (data.products.length < LIMIT) {
      setHasMore(false);
    }
  }, [data]);

  useEffect(() => {
    if (!loaderRef.current || !hasMore || isFetching) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setPage((previous) => previous + 1);
      }
    });

    observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [hasMore, isFetching]);

  return {
    reels,

    loaderRef,

    loading: isLoading,

    error,
  };
}
