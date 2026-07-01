import ReelCard from "../../components/reels/ReelCard";

import { ErrorState, Loader } from "../../components/common";

import { useInfiniteReels } from "../../hooks/useInfiniteReels";
import { memo } from "react";
import ReelSkeleton from "../../components/common/Skeleton/ReelSkeleton";


function Reels() {
  const {
    reels,
    loaderRef,
    loading,
    error,
  } = useInfiniteReels();

  if (loading) {
    return <ReelSkeleton/>;
  }

  if (error) {
    return (
      <ErrorState message="Unable to load reels." />
    );
  }

  return (
    <section>

      <h1>Developer Reels</h1>

      <div className="reels-grid">

        {reels.map((reel) => (
          <ReelCard
            key={reel.id}
            reel={reel}
          />
        ))}

      </div>

      <div ref={loaderRef}>
        Loading More...
      </div>

    </section>
  );
}

export default memo(Reels);// Current Flow
// Open Page

// ↓

// Page=0

// ↓

// API

// ↓

// Append

// ↓

// Render

// ↓

// Scroll

// ↓

// Observer

// ↓

// Page++

// ↓

// API

// ↓

// Append

// ↓

// Repeat
