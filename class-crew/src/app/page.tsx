"use client";

import StorePage from "@/components/home/page";
import MyPage from "@/components/My page/AccountSettings/page";

function page() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <StorePage />
      <MyPage />
    </div>
  );
}

export default page;
