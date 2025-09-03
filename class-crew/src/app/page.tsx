"use client";

import type { Course } from "@/types/course";
import { Banner, NavBar, CourseSection } from "@/components/home";
import SearchBanner from "@/components/ui/SearchBanner";
import React from "react";
import Button from "@/components/ui/Button";
import NavbarPage from "@/components/layout/navbar/page";

const newestCourses: Course[] = [
  {
    id: "1",
    tagColor: "bg-pink-100 text-pink-600",
    tagText: "리더십",
    category: "환급",
    title: "핵심을 짚는 말과 글, 비즈니스 문해력",
    description: "LEVEL UP",
    tags: ["모여듣기", "얼리버드 할인", "그룹할인"],
    date: "25.08.01~25.08.02",
    price: "₩600,000",
  },
  {
    id: "2",
    tagColor: "bg-blue-100 text-blue-600",
    tagText: "DX",
    category: "환급",
    title: "Course title",
    description: "LEVEL UP",
    tags: ["모여듣기", "얼리버드 할인", "그룹할인"],
    date: "25.08.01~25.08.02",
    price: "₩600,000",
  },
  {
    id: "3",
    tagColor: "bg-orange-100 text-orange-600",
    tagText: "비즈니스 스킬",
    category: "환급",
    title: "핵심을 짚는 말과 글, 비즈니스 문해력",
    description: "LEVEL UP",
    tags: ["모여듣기", "얼리버드 할인", "그룹할인"],
    date: "25.08.01~25.08.02",
    price: "₩600,000",
  },
  {
    id: "4",
    tagColor: "bg-green-100 text-green-600",
    tagText: "라이프 & 커리어",
    category: "환급",
    title: "Course title",
    description: "LEVEL UP",
    tags: ["모여듣기", "얼리버드 할인", "그룹할인"],
    date: "25.08.01~25.08.02",
    price: "₩600,000",
  },
];

const popularCourses: Course[] = [...newestCourses];

const allCourses: Course[] = [
  ...newestCourses,
  {
    id: "5",
    tagColor: "bg-blue-100 text-blue-600",
    tagText: "DX",
    category: "환급",
    title: "Course title",
    description: "LEVEL UP",
    tags: ["모여듣기", "얼리버드 할인", "그룹할인"],
    date: "25.08.01~25.08.02",
    price: "₩600,000",
  },
  {
    id: "6",
    tagColor: "bg-pink-100 text-pink-600",
    tagText: "리더십",
    category: "환급",
    title: "핵심을 짚는 말과 글, 비즈니스 문해력",
    description: "LEVEL UP",
    tags: ["모여듣기", "얼리버드 할인", "그룹할인"],
    date: "25.08.01~25.08.02",
    price: "₩600,000",
  },
  {
    id: "7",
    tagColor: "bg-green-100 text-green-600",
    tagText: "라이프 & 커리어",
    category: "환급",
    title: "Course title",
    description: "LEVEL UP",
    tags: ["모여듣기", "얼리버드 할인", "그룹할인"],
    date: "25.08.01~25.08.02",
    price: "₩600,000",
  },
  {
    id: "8",
    tagColor: "bg-orange-100 text-orange-600",
    tagText: "비즈니스 스킬",
    category: "환급",
    title: "핵심을 짚는 말과 글, 비즈니스 문해력",
    description: "LEVEL UP",
    tags: ["모여듣기", "얼리버드 할인", "그룹할인"],
    date: "25.08.01~25.08.02",
    price: "₩600,000",
  },
];

export default function StorePage() {
  const [theme, setTheme] = React.useState("");
  const [job, setJob] = React.useState("");
  return (
    <main className="flex flex-col items-center w-full">
      <Banner />
      <NavBar />
      <CourseSection title="NEWEST" courses={newestCourses} />
      <CourseSection title="POPULAR" courses={popularCourses} />
      <CourseSection title="ALL" courses={allCourses} />
      <Button
        label="View All"
        variant="primary"
        className="mt-4 mb-20 text-center"
      />

      <SearchBanner
        bgImage="/images/Block_with_illustration.png"
        title="추천CLASS찾기"
        buttonText="검색"
        onSearch={() => console.log("Searching with:", theme, job)}
        filters={[
          {
            label: "테마",
            value: theme,
            onChange: setTheme,
            options: [
              { label: "리더십", value: "leadership" },
              { label: "DX", value: "dx" },
            ],
          },
          {
            label: "직급/직책",
            value: job,
            onChange: setJob,
            options: [
              { label: "Manager", value: "manager" },
              { label: "Staff", value: "staff" },
            ],
          },
        ]}
      />
    </main>
  );
}
