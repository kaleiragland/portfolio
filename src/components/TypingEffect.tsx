"use client";

import { useState, useEffect } from "react";

const roles = [
  "Software Engineer",
  "Full-Stack Developer",
  "CS Grad Student",
  "Problem Solver",
];

export default function TypingEffect() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];

    if (!deleting && charIndex === current.length) {
      const pause = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(pause);
    }

    if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const speed = deleting ? 40 : 80;
    const timer = setTimeout(() => {
      setCharIndex((prev) => prev + (deleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, roleIndex]);

  return (
    <span>
      {roles[roleIndex].slice(0, charIndex)}
      <span className="animate-blink">|</span>
    </span>
  );
}
