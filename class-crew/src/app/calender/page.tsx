


"use client";

import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Navbar from "@/components/layout/navbar/page"; 
import { BiSolidDownload } from 'react-icons/bi';

import "./calendar-custom.css";

export default function CalendarPage() {
  const [events] = useState([
    {
      title: "[중분류] 과정명",
      start: "2025-09-08",
      end: "2025-09-10",
      color: "#93c5fd",
    },
    {
      title: "[중분류] 과정명",
      start: "2025-09-09",
      end: "2025-09-11",
      color: "#86efac",
    },
    {
      title: "[중분류] 과정명",
      start: "2025-07-17",
      color: "#facc15",
    },
  ]);

  return (
    <>
    <Navbar/>
         <main className="w-[1270px] mx-auto mt-16 flex flex-col items-center mb-10">
      <div className=" w-full bg-white rounded-2xl  p-6 ">
<button className="w-[170px] h-[44px] flex items-center justify-center gap-2 text-[18px] font-semibold text-black border border-black rounded-md">
  연간일정
  <BiSolidDownload className="text-[20px]" />
</button>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          locale="ko"
          headerToolbar={{
            left: "prev",
            center: "title",
            right: "next",
          }}
          buttonText={{
            today: "오늘",
            month: "월",
            week: "주",
          }}
          events={events}
          editable={true}
          selectable={true}
          height="auto"
        />
      </div>
    </main>
    </>
  );
}
