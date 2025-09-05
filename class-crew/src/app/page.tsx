"use client";

import StorePage from "@/components/home/page";
import LearningStatus from "@/components/My page/LearningStatus/page";
import AccountForm from "@/components/My page/AccountSettings/Account_Form/page";
import ChangePassword from "@/components/My page/AccountSettings/ChangePassword/page"

function page() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <StorePage />
      <LearningStatus />
      <AccountForm/>
      <ChangePassword/>
    </div>
  );
}

export default page;
