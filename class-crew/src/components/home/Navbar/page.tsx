"use client";

import { useState } from "react";

export default function NavBar() {
  const items = [
    "리더십/직급/계층",
    "비즈니스 스킬",
    "DX",
    "라이프/커리어",
    "스페셜",
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <nav className="max-w-8xl w-full bg-[var(--background)] border-b border-[var(--secondary)] py-4 mt-6">
      <ul className="flex justify-center gap-40 max-w-8xl mx-auto font-extrabold">
        {items.map((item, index) => (
          <li key={item} className="relative group">
            <a
              href="#"
              className={`text-[20px] font-bold text-[var(--text)] hover:text-[var(--primary)] transition-colors duration-150 ${
                activeIndex === index ? "text-[var(--primary)]" : ""
              }`}
              onClick={() => setActiveIndex(index)}
              aria-current={activeIndex === index ? "page" : undefined}
            >
              {item}
            </a>

            {/* underline: appears only on hover (no animation) */}
            <span
              className="absolute left-0 -bottom-1 h-1 bg-[var(--primary)] w-full hidden group-hover:block transform-origin-left transition-transform duration-300 ease-out"
              aria-hidden
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
