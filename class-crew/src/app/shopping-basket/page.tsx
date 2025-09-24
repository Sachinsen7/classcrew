"use client";
import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import Link from 'next/link'
type Product = {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  discount: number;
  duration?: string;
};

const productsData: Product[] = [
  {
    id: 1,
    title:
      "강의명강의명강의명강의명강의명강의명강의명강의명강의명강의명강의명강의명",
    thumbnail: "/shopping-basket.png",
    price: 150000,
    discount: 15000,
    duration: "학습기간 : o개월",
  },
  {
    id: 2,
    title:
      "강의명강의명 강의명 강의명 강의명 강의명 강의명 강의명 강의명 강의명 강의명 강의명",
    thumbnail: "/shopping-basket.png",
    price: 10000,
    discount: 0,
  },
  {
    id: 3,
    title:
      "강의명 강의명 강의명 강의명 강의명 강의명 강의명 강의명 강의명 강의명 강의명 강의명",
    thumbnail: "/shopping-basket.png",
    price: 150000,
    discount: 15000,
    duration: "학습기간 : o개월",
  },
];

const CartTable: React.FC = () => {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);

  const toggleSelect = (id: number) => {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  const selectAll = () => {
    if (selectedProducts.length === productsData.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(productsData.map((p) => p.id));
    }
  };

  const totalAmount = selectedProducts.reduce((sum, id) => {
    const product = productsData.find((p) => p.id === id);
    return product ? sum + (product.price - product.discount) : sum;
  }, 0);

  return (
    <main className="w-[1270px] mt-32 flex flex-col items-center mb-30 mx-auto ">
      <div className="relative w-full">
        <Image
          src="/My page/Rectangle 23864.png"
          alt="Banner"
          width={1270}
          height={200}
          className="w-full"
        />
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[32px] font-bold">
          마이페이지
        </h1>
      </div>

      <div className="p-4 w-full ">
        <div className="flex items-center justify-between mb-8">
          <label className="flex items-center gap-2 cursor-pointer select-none text-[20px] font-bold text-black">
            <input
              type="checkbox"
              checked={selectedProducts.length === productsData.length}
              onChange={selectAll}
              className="hidden"
            />
            전체선택
          </label>

          <div className="flex items-center gap-4">
            <label className="flex items-center gap-1 text-[20px] font-medium text-black">
              <input
                type="checkbox"
                className="w-[18px] h-[18px] accent-black"
              />{" "}
              과정만 보기
            </label>
            <label className="flex items-center gap-1 text-[20px] font-medium text-black">
              <input
                type="checkbox"
                className="w-[18px] h-[18px] accent-black"
              />{" "}
              상품만 보기
            </label>
            <button className="border border-[rgba(0,0,0,0.50)] px-2 py-1 text-[20px] font-medium text-black flex  ">
              {" "}
              <X className="mt-1 w-[20px] h-[20px]" /> 선택삭제
            </button>
          </div>
        </div>

        <table className="w-full h-[59px]  ">
          <thead className="bg-[#EDEDED] pb-20">
            <tr>
              <th
                className="p-2 text-[20px] font-bold text-black cursor-pointer"
                onClick={selectAll}
              >
                <span
                  className={`w-[25px] h-[25px] rounded-full ml-2 border flex items-center justify-center
      ${
        selectedProducts.length === productsData.length
          ? "bg-black text-white"
          : selectedProducts.length > 0
          ? " text-black"
          : "bg-white"
      }`}
                >
                  {selectedProducts.length === productsData.length
                    ? "✔"
                    : selectedProducts.length > 0
                    ? "–"
                    : ""}
                </span>
              </th>
              <th className="p-2  text-[20px] font-bold text-black ">
                강의명/상품명
              </th>
              <th className="p-2  text-[20px] font-bold text-black">정가</th>
              <th className="p-2  text-[20px] font-bold text-black ">
                할인금액
              </th>
              <th className="p-2  text-[20px] font-bold text-black">
                총 결제금액
              </th>
            </tr>
          </thead>
          <tbody>
            {productsData.map((product) => {
              const isSelected = selectedProducts.includes(product.id);
              return (
                <tr
                  key={product.id}
                  className="border-b-2 border-[#D9D9D9] w-full"
                >
                  <td className="p-2  text-center">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleSelect(product.id)}
                      className="rounded-full w-[25px] h-[25px] accent-black"
                    />
                  </td>
                  <td className="  flex items-start gap-3 m-10">
                    <Image
                      src={product.thumbnail}
                      width={259}
                      height={184}
                      alt="썸네일"
                      className="w-[259px] h-[184px] object-cover"
                    />
                    <div className="">
                      <p className="w-[203px] text-[20px] font-medium ml-10 text-black">
                        {product.title}
                      </p>
                      {product.duration && (
                        <p className="text-[20px] font-medium text-xs mt-9 ml-10 text-black ">
                          {product.duration}
                        </p>
                      )}
                    </div>
                  </td>
                  <td className="p-2 text-center text-[20px] font-medium text-black">
                    {product.price.toLocaleString()}원
                  </td>
                  <td className="p-2  text-center text-[20px] font-medium text-black">
                    {product.discount.toLocaleString()}원
                  </td>
                  <td className="p-2 text-center text-[20px] font-medium text-black">
                    {(product.price - product.discount).toLocaleString()}원
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="flex justify-end items-center mt-4 gap-4">
          <span className="text-[32px] font-medium text-black">
            총 <span className="font-bold">{selectedProducts.length}</span> 개
            주문금액{" "}
            <span className=" font-bold">{totalAmount.toLocaleString()} </span>
            원
          </span>
          <Link href={"/classapplication-shoppingbasket"}>
          <button className="bg-black text-white px-4 py-2 w-[199px] h-[69px] text-[24px] font-extrabold rounded">
            주문하기
          </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default CartTable;
