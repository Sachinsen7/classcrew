"use client";

import Image from "next/image";
import ReusableTable from "@/components/ui/TableProps/Table";

import downloadIcon from "../../../../public/My page/symbols_download.svg";
import dropdown from "../../../../public/My page/drop-down.svg";

export default function InquiryHistory() {
  const columns = [
    { key: "no", label: "No." },
    { key: "course", label: "과정명" },
    { key: "type", label: "유형" },
    { key: "period", label: "기간" },
    { key: "status", label: "상태" },
    { key: "certificate", label: "수료증 발급" },
  ];

  const rows = [
    {
      no: 5,
      course: "[중분류] 교육 과정명",
      type: "비환급",
      period: "2025.00.00 ~ 2025.00.00",
      status: "수강예정",
      certificate: "-",
    },
    {
      no: 4,
      course: "[중분류] 교육 과정명",
      type: "비환급",
      period: "2025.00.00 ~ 2025.00.00",
      status: "수강중",
      certificate: "-",
    },
    {
      no: 3,
      course: "[중분류] 교육 과정명",
      type: "비환급",
      period: "2025.00.00 ~ 2025.00.00",
      status: "미수료",
      certificate: "-",
    },
    {
      no: 2,
      course: "[중분류] 교육 과정명",
      type: "비환급",
      period: "2025.00.00 ~ 2025.00.00",
      status: "수료",
      certificate: (
        <Image src={downloadIcon} alt="Download" width={18} height={18} />
      ),
    },
    {
      no: 1,
      course: "[중분류] 교육 과정명",
      type: "비환급",
      period: "2025.00.00 ~ 2025.00.00",
      status: "수료",
      certificate: (
        <Image src={downloadIcon} alt="Download" width={18} height={18} />
      ),
    },
  ];

  return (
    <main className="w-[1270px] mt-6 flex flex-col items-center mb-10">
      {/* Banner with heading + icons */}
      <div className="relative w-full">
        <Image
          src="/My page/banner.png"
          alt="Banner"
          width={1270}
          height={200}
          className="w-full"
        />
        {/* Heading inside banner */}
        <h1 className="absolute top-6 left-6 text-white text-xl font-semibold">
          안녕하세요, <br />
          홍길동 님 마이페이지 입니다.
        </h1>
      </div>

      {/* Tabs (full width) */}
      <nav className="flex justify-between gap-8  border-b border-gray-300 w-[1270px] mt-8">
        <button className="clpb-2 border-b-2 border-black text-[20px] font-bold cursor-pointer">
          학습현황
        </button>
        <button className="pb-2 text-[20px] font-bold cursor-pointer">
          결제관리
        </button>
        <button className="pb-2 text-[20px] font-bold cursor-pointer">
          1:1문의내역
        </button>
        <button className="pb-2 text-[20px] font-bold cursor-pointer">
          계정설정
        </button>
      </nav>

      {/* Dropdown aligned right */}
      <div className="w-full flex justify-end mt-14 pr-4">
        <span className="text-[14px] font-bold">조회기간 설정</span>
        <Image
          src={dropdown}
          alt="Dropdown"
          width={16}
          height={20}
          className="ml-1 h-[20px]"
        />
      </div>

      {/* Table (full width) */}
      {/* Table (full width with right-side icons) */}
      <div className="w-[1320px] flex mt-10 ml-10">
        {/* Table */}
        <div className="flex-1">
          <ReusableTable columns={columns} rows={rows} />
        </div>

        {/* Right-side icons */}
        <div className="flex flex-col items-center justify-center gap-4 ml-6">
          <Image
            src="/My page/up-arrow.svg"
            alt="Up Arrow"
            width={20}
            height={20}
          />
          <Image
            src="/My page/search.svg"
            alt="Search"
            width={20}
            height={20}
          />
          <Image src="/My page/chat.svg" alt="Chat" width={20} height={20} />
        </div>
      </div>
    </main>
  );
}
