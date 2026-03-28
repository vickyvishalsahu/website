"use client";

import { useCallback, useEffect, useReducer, useSyncExternalStore } from "react";

interface TypewriterProps {
  texts: readonly string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

interface State {
  textIndex: number;
  charIndex: number;
  isDeleting: boolean;
  done: boolean;
}

type Action = { type: "tick"; textsLength: number; lastTextLength: number };

function reducer(state: State, action: Action): State {
  if (state.done) return state;

  const { textIndex, charIndex, isDeleting } = state;
  const { textsLength, lastTextLength } = action;

  if (isDeleting) {
    if (charIndex <= 1) {
      return { ...state, charIndex: 0, isDeleting: false, textIndex: textIndex + 1 };
    }
    return { ...state, charIndex: charIndex - 1 };
  }

  if (charIndex >= lastTextLength) {
    if (textIndex === textsLength - 1) {
      return { ...state, done: true };
    }
    return { ...state, isDeleting: true };
  }

  return { ...state, charIndex: charIndex + 1 };
}

export function Typewriter({
  texts,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
  className,
}: TypewriterProps) {
  const [state, dispatch] = useReducer(reducer, {
    textIndex: 0,
    charIndex: 0,
    isDeleting: false,
    done: false,
  });

  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const { textIndex, charIndex, isDeleting, done } = state;
  const current = texts[textIndex];

  const getDelay = useCallback(() => {
    if (!mounted || done) return null;
    if (!isDeleting && charIndex === current.length) return pauseDuration;
    return isDeleting ? deletingSpeed : typingSpeed;
  }, [mounted, done, isDeleting, charIndex, current.length, pauseDuration, deletingSpeed, typingSpeed]);

  useEffect(() => {
    const delay = getDelay();
    if (delay === null) return;

    const timeout = setTimeout(() => {
      dispatch({ type: "tick", textsLength: texts.length, lastTextLength: current.length });
    }, delay);

    return () => clearTimeout(timeout);
  }, [getDelay, texts.length, current.length]);

  const longest = texts.reduce((a, b) => (a.length > b.length ? a : b));

  return (
    <span className={`relative block ${className ?? ""}`}>
      <span className="invisible" aria-hidden="true">{longest}</span>
      <span className="absolute inset-x-0 top-0 text-center">
        {current.slice(0, charIndex)}
        {!done && <span className="animate-blink">|</span>}
      </span>
    </span>
  );
}
