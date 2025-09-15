"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    title: "66일 챌린지",
    category: "진단도구",
    price: "100,000원",
    image: "/class-goal/learningStore/image1.png",
    isNew: true,
  },
  {
    id: 2,
    title: "66일 챌린지",
    category: "진단도구",
    originalPrice: "150,000원",
    percentage: "33%",
    price: "100,000원",
    image: "/class-goal/learningStore/image2.png",
  },
  {
    id: 3,
    title: "상품명",
    category: "문구류",
    price: "금액",
    image: "/class-goal/learningStore/image3.png",
  },
  {
    id: 4,
    title: "상품명",
    category: "진단도구",
    originalCost: "원가",
    // Instead of string with span, split into parts
    discount: "할인율",
    finalPrice: "최종금액",
    image: "/class-goal/learningStore/image4.png",
  },
];

function ProductGrid() {
  return (
    <main className="max-w-[1270px] mx-auto mt-30 px-4 mb-10">
      {/* Banner */}
      <div className="relative w-full">
        <Image
          src="/class-goal/learningStore/Rectangle 23864.png"
          alt="Banner"
          width={1270}
          height={200}
          className="w-full"
        />

        {/* Overlay text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-[32px] font-bold">
            Learning-Crew STORE <br />
          </h1>
          <p className="font-medium text-[25px] mt-2">
            나의 학습과 성장을 위한 특별한 아이템을 만나보세요.
          </p>
        </div>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        {products.map((product) => (
          <Link
            href={`/learning-store/product/${product.id}`}
            key={product.id}
            className="border rounded-lg bg-white shadow hover:shadow-lg transition block overflow-hidden"
          >
            {/* Image */}
            <div className="relative">
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
                className="w-full h-60 object-cover"
              />
              {product.isNew && (
                <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                  NEW
                </span>
              )}
            </div>

            {/* Content */}
            {/* Content */}
            <div className="p-5">
              {/* Category badge */}
              <span className="inline-block bg-black text-white text-xs rounded-lg px-2 py-1 mb-2">
                {product.category}
              </span>

              {/* Title */}
              <h2 className="font-bold text-[20px] text-[#000000] mb-2">
                {product.title}
              </h2>

              {/* Price logic */}
              {/* Case 1: Only price (first card, third card) */}
              {product.price && !product.percentage && !product.discount && (
                <p className="text-black text-[18px]">{product.price}</p>
              )}

              {/* Case 2: Discount with original price (second card) */}
              {product.originalPrice && product.percentage && (
                <>
                  <p className="text-gray-500 line-through text-[16px]">
                    {product.originalPrice}
                  </p>
                  <p className="text-black font-bold text-[18px] flex items-center gap-1">
                    <span className="text-red-500 mr-1">
                      {product.percentage}
                    </span>
                    {product.price}
                  </p>
                </>
              )}

              {/* Case 3: Special discount + final price (fourth card) */}
              {product.discount && product.originalCost && (
                <div className="flex flex-col text-[18px] font-bold">
                  <span className="text-gray-500 line-through">
                    {product.originalCost}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-red-500">{product.discount}</span>
                    {product.finalPrice}
                  </div>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default ProductGrid;
