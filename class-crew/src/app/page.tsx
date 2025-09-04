"use client";

import StorePage from "@/components/home/page";
import LearningStatus from "@/components/My page/LearningStatus/page";

function page() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <StorePage />
      <LearningStatus />
    </div>
  );
}

export default page;
