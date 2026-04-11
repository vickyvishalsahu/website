"use client";

import { useCallback, useEffect, useReducer, useState, useSyncExternalStore } from "react";

interface TypewriterProps {
  texts: readonly string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
  triggerOn?: "mount" | "hover";
}

interface State {
  textIndex: number;
  charIndex: number;
  isDeleting: boolean;
  done: boolean;
}

type Action =
  | { type: "tick"; textsLength: number; lastTextLength: number }
  | { type: "stop"; lastTextIndex: number; lastTextLength: number };

function reducer(state: State, action: Action): State {
  if (action.type === "stop") {
    return { textIndex: action.lastTextIndex, charIndex: action.lastTextLength, isDeleting: false, done: true };
  }
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
  triggerOn = "mount",
}: TypewriterProps) {
  const [active, setActive] = useState(triggerOn === "mount");
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
    if (!mounted || !active || done) return null;
    if (!isDeleting && charIndex === current.length) return pauseDuration;
    return isDeleting ? deletingSpeed : typingSpeed;
  }, [mounted, active, done, isDeleting, charIndex, current.length, pauseDuration, deletingSpeed, typingSpeed]);

  useEffect(() => {
    const delay = getDelay();
    if (delay === null) return;

    const timeout = setTimeout(() => {
      dispatch({ type: "tick", textsLength: texts.length, lastTextLength: current.length });
    }, delay);

    return () => clearTimeout(timeout);
  }, [getDelay, texts.length, current.length]);

  useEffect(() => {
    if (!active || done) return;
    const lastIndex = texts.length - 1;
    const handleClick = () =>
      dispatch({ type: "stop", lastTextIndex: lastIndex, lastTextLength: texts[lastIndex].length });
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [active, done, texts]);

  const longest = texts.reduce((a, b) => (a.length > b.length ? a : b));
  const showCursor = !done || !active;

  return (
    <div
      className={`relative w-full ${className ?? ""}`}
      onMouseEnter={() => setActive(true)}
    >
      <span className="invisible" aria-hidden="true">{longest}</span>
      <span className="absolute left-0 top-0">
        {active ? current.slice(0, charIndex) : texts[0]}
        {showCursor && <span className="animate-blink">|</span>}
      </span>
    </div>
  );
}
