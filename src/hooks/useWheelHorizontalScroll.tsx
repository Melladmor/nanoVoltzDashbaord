import { useRef, useEffect } from "react";

// Custom hook: enables smooth horizontal scrolling with mouse wheel
export function useHorizontalWheelScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId: number | null = null; // requestAnimationFrame ID
    let pendingDelta = 0; // accumulate wheel deltas until flushed

    // Apply accumulated delta once per animation frame
    const flush = () => {
      if (pendingDelta !== 0) {
        el.scrollLeft += pendingDelta;
        pendingDelta = 0;
      }
      rafId = null;
    };

    // Handle wheel event (vertical delta -> horizontal scroll)
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;

      e.preventDefault(); // prevent vertical scroll
      pendingDelta += e.deltaY;

      if (!rafId) {
        rafId = requestAnimationFrame(flush);
      }
    };

    // Attach wheel listener (must be non-passive to allow preventDefault)
    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheel as any);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return ref; // assign this ref to the scrollable element
}
