"use client";

import StorePage from "@/components/home/page";
import PaymentManagement from "@/components/My page/PaymentManagement/page";
import LearningStatus from "@/components/My page/LearningStatus/page";
import MyPage from "@/components/My page/page";

function page() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <StorePage />
      {/* <LearningStatus /> */}
      {/* <PaymentManagement /> */}
      <MyPage />
    </div>
  );
}

export default page;
