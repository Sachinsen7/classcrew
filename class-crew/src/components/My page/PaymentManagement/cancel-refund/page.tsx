"use client";

import ReusableTable from "@/components/ui/TableProps/Table";
import Image from "next/image";
import dropdown from "../../../../../public/My page/drop-down.svg";

export default function CancelRefundPage() {
  const columns = [
    { key: "no", label: "No." },
    { key: "course", label: "과정명" },
    { key: "cancelDate", label: "취소/환불일" },
    { key: "fee", label: "위약금" },
    { key: "refundTotal", label: "총 환불금액" },
    { key: "status", label: "상태" },
  ];

  const rows = [
    {
      no: 1,
      course: "[중분류] 교육 과정명",
      cancelDate: "2025.00.00",
      fee: "30,000 원",
      refundTotal: "270,000 원",
      status: "환불완료",
    },
  ];

  return (
    <>
      {/* Dropdown */}
      <div className="w-[1270px] mx-auto flex justify-end mt-14 pr-4">
        <span className="text-[14px] font-bold">조회기간 설정</span>
        <Image
          src={dropdown}
          alt="Dropdown"
          width={16}
          height={20}
          className="ml-1 h-[20px]"
        />
      </div>

      {/* Table + Icons */}
      <div className="w-[1270px] mx-auto flex mt-10 items-center">
        <div className="flex-1">
          <ReusableTable columns={columns} rows={rows} />
        </div>
      </div>
    </>
  );
}
