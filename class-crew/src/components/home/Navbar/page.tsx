"use client";

import { useState, useRef, useEffect } from "react";
import { colors } from "@/app/colors";

export default function NavBar() {
  const items = [
    "리더십/커리어/개인",
    "비즈니스 스킬",
    "DX",
    "라이프/커리어",
    "스포츠",
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const underlineRef = useRef<HTMLDivElement>(null);
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const index = hoverIndex !== null ? hoverIndex : activeIndex;
    if (index === null || !navRefs.current[index] || !underlineRef.current) {
      if (underlineRef.current) {
        underlineRef.current.style.width = "0px";
      }
      return;
    }

    const navItem = navRefs.current[index];
    const { offsetLeft, offsetWidth } = navItem;
    underlineRef.current.style.left = `${offsetLeft}px`;
    underlineRef.current.style.width = `${offsetWidth}px`;
  }, [activeIndex, hoverIndex]);

  return (
    <nav className="max-w-8xl w-full bg-[var(--background)] border-b border-[var(--secondary)] py-4 mt-6">
      <ul className="flex justify-center gap-40 max-w-8xl mx-auto font-extrabold relative">
        {items.map((item, index) => (
          <li key={index}>
            <a
              ref={(el) => {
                navRefs.current[index] = el;
              }}
              href="#"
              className={`text-[var(--text)] hover:text-[var(--primary)] transition-colors duration-200 ${
                activeIndex === index ? "text-[var(--primary)]" : ""
              }`}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              aria-current={activeIndex === index ? "page" : undefined}
            >
              {item}
            </a>
          </li>
        ))}
        <div
          ref={underlineRef}
          className="absolute -bottom-[1px] h-1 bg-[var(--primary)] transition-all duration-300 ease-in-out"
        />
      </ul>
    </nav>
  );
}
