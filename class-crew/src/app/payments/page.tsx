"use client";

import React from "react";
import Link from "next/link";

export default function PaymentsIndexPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-white w-[800px] rounded-2xl shadow-2xl p-10">
        <h1 className="text-2xl font-extrabold text-black mb-6">
          결제 방법 선택
        </h1>
        <div className="flex flex-col space-y-4">
          <Link className="underline text-black" href="/payments/credit-card">
            카드결제
          </Link>
          <Link className="underline text-black" href="/payments/bank-transfer">
            계좌이체
          </Link>
        </div>
      </div>
    </div>
  );
}
