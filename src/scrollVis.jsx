import React, { useRef, useEffect, useState } from "react";

const ScrollVisibleWrapper = ({ children }) => {
  const wrapperRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this threshold value as needed
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => {
      if (wrapperRef.current) {
        observer.unobserve(wrapperRef.current);
      }
    };
  }, []);

  return (
    <div ref={wrapperRef}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { isVisible })
      )}
    </div>
  );
};

export default ScrollVisibleWrapper;
