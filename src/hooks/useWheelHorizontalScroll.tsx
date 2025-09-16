import { useRef, useEffect } from "react";

export function useHorizontalWheelScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId: number | null = null;
    let pendingDelta = 0;

    const flush = () => {
      if (pendingDelta !== 0) {
        el.scrollLeft += pendingDelta;
        pendingDelta = 0;
      }
      rafId = null;
    };

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;

      e.preventDefault();
      pendingDelta += e.deltaY;

      if (!rafId) {
        rafId = requestAnimationFrame(flush);
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheel as any);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return ref;
}
