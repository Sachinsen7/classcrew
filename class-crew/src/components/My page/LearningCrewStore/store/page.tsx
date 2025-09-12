import React from "react";
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <main className="w-[1270px] mx-auto mt-30 flex flex-col items-center justify-center mb-10">
      <div className="relative w-full">
        <Image
          src="/My page/Rectangle 23864.png"
          alt="Banner"
          width={1270}
          height={200}
          className="w-full"
        />
        <h1 className="absolute top-6 left-6 whitespace-pre-line text-white text-xl font-semibold">
          Learning-Crew STORE
        </h1>
        <p>나의 학습과 성장을 위한 특별한 아이템을 만나보세요.</p>
      </div>
    </main>
  );
}

export default page;
