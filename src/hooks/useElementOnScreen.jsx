import { useMemo, useEffect, useCallback } from "react";

const useElementOnScreen = (
  options = { root: null, rootMargin: "0px", threshold: 0.1 },
  targetRef,
  style
) => {
  const callbackFunction = useCallback(
    (entries) => {
      let [entry] = entries;
      if (entry.isIntersecting) {
        const currentTarget = targetRef.current;
        if (currentTarget) {
          currentTarget.classList.add(style);
        }
      }
    },
    [style, targetRef]
  );

  const optionsMemo = useMemo(() => {
    return options;
  }, [options]);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, optionsMemo);
    const currentTarget = targetRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);

      return () => {
        if (currentTarget) observer.unobserve(currentTarget);
      };
    }
  }, [callbackFunction, optionsMemo, targetRef]);
};

export default useElementOnScreen;
