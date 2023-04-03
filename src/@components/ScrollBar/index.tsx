import React, { useCallback, useEffect, useRef, useState } from "react";

import * as Styled from "./index.styles";

import type { PropsWithChildren } from "react";

const DEFAULT_THUMB_HEIGHT = 20;

const ScrollBar = ({ children }: PropsWithChildren) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const observer = useRef<ResizeObserver | null>(null);
  const [thumbHeight, setThumbHeight] = useState(DEFAULT_THUMB_HEIGHT);

  const handleResize = (ref: HTMLDivElement) => {
    const { clientHeight, scrollHeight } = ref;
    setThumbHeight(
      Math.max(
        (clientHeight / scrollHeight) * clientHeight,
        DEFAULT_THUMB_HEIGHT,
      ),
    );
  };

  const handleThumbPosition = useCallback(() => {
    if (!contentRef.current || !thumbRef.current) {
      return;
    }

    const { clientHeight, scrollTop, scrollHeight } = contentRef.current;
    let newTop = (scrollTop / scrollHeight) * clientHeight;
    newTop = Math.min(newTop, clientHeight - thumbHeight);
    const thumb = thumbRef.current;
    thumb.style.top = `${newTop}px`;
  }, []);

  useEffect(() => {
    if (contentRef.current && trackRef.current) {
      const ref = contentRef.current;
      observer.current = new ResizeObserver(() => {
        if (trackRef.current?.style) {
          trackRef.current.style.height = `${ref.clientHeight}px`;
        }
        handleResize(ref);
        ref.addEventListener("scroll", handleThumbPosition);
      });
      observer.current.observe(ref);
      return () => {
        observer.current?.unobserve(ref);
        ref.removeEventListener("scroll", handleThumbPosition);
      };
    }
  });

  return (
    <Styled.Container>
      <Styled.Content ref={contentRef}>{children}</Styled.Content>
      <Styled.Track ref={trackRef}>
        <Styled.Thumb ref={thumbRef} height={thumbHeight} />
      </Styled.Track>
    </Styled.Container>
  );
};

export default ScrollBar;
