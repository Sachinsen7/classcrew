// "use client";
// import { useState, FormEvent } from "react";
// import { Plus, Minus } from "lucide-react";
// import { BiSolidDownload } from "react-icons/bi";
// import { FaCaretDown } from "react-icons/fa";
// import { X } from "lucide-react";
// import Navbar from "@/components/layout/navbar/page";
// import Link from "next/link"

// export default function ClassApplication() {
//   const [_file, setFile] = useState<File | null>(null);
//   const [taxInvoice, setTaxInvoice] = useState<string>("발행");
//   const [paymentMethod, setPaymentMethod] = useState("간편결제");

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       setFile(e.target.files[0]);
//     }
//   };

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("Form submitted");
//   };

//   return (
//     <>
//       <Navbar />
//       <main className="w-[1270px] mx-auto mt-24 flex flex-col items-center mb-10">
//         <div className="w-full">
//           <div className="mb-6 mt-10">
//             <h2 className="text-[36px] font-extrabold mb-6 text-black">
//             상품정보
//             </h2>
//             <div className="flex items-center gap-4">
//               <button className="text-[22px] font-extrabold text-white bg-black  w-full py-3 rounded-md">
//                 상품명

//               </button>
//               <button className="text-[22px] font-extrabold text-black bg-[#EEEEEE] w-full py-3 rounded-md">
//                 상품명
//               </button>
//               <button className="text-[22px] font-extrabold text-black bg-[#EEEEEE] w-full py-3 rounded-md">
//                 상품명

//               </button>
//             </div>
//           </div>

//           <div className="border border-b-0.5 text-[#D9D9D9]"></div>

//           <div className="mt-15 flex gap-6">
//             {/* Left Thumbnail */}
//             <div
//               className="w-[406px] h-[320px] rounded-lg flex items-center justify-center text-white text-[32px] font-extrabold bg-cover bg-center"
//               style={{
//                 backgroundImage:
//                   "url('/simple-payment/class-application-banner.png')",
//               }}
//             >
//               썸네일
//             </div>

//             {/* Right Info */}
//             <div className="flex ml-12 flex-col my-auto gap-10 flex-1">
//               {/*   상품명 */}
//               <div className="flex items-center">
//                 <label className="w-[80px] text-[18px] font-bold text-[rgba(0,0,0,0.72)]">
//                   상품명
//                 </label>
//                 <input
//                   type="text"
//                   value="과정명 자동기입"
//                   disabled
//                   className=" h-[50px] w-[546px] px-3  rounded-sm bg-[#F3F3F3] text-[rgba(0,0,0,0.3)] text-[18px]  font-semibold"
//                 />
//               </div>

              

//               {/* 금액*/}
//               <div className="flex items-center">
//                 <label className="w-[80px] text-[18px] font-bold text-[rgba(0,0,0,0.72)]">
//                  금액
//                 </label>
//                 <div className="flex items-center w-[546px] h-[50px] gap-3 bg-[#F3F3F3] text-[rgba(0,0,0,0.3)] text-[18px] font-semibold px-8 py-2 rounded-sm">
//                   <span className="text-[#FF0000] text-[20px] font-bold">
//                     10%
//                   </span>
//                   <span className="text-[22px] font-bold text-black">
//                     135,000원
//                   </span>
//                   <span className="line-through text-[18px] text-[rgba(0,0,0,0.4)]">
//                     150,000원
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>


        
//         </div>

//         <div className="w-full mt-20">
//           {/* Title 2 */}
//           <h2 className="text-[36px] font-extrabold mb-6 text-black">
//            결제정보입력
//           </h2>

//           <div className="w-full mx-auto">
//             <div className="flex items-center py-6">
//               <span className="text-[18px] text-[rgba(0,0,0,0.72)] font-bold">
//                 총 결제금액
//               </span>
//               <span className="font-bold text-black ml-14">
//                 <span className="text-[32px]">1,440,000</span>{" "}
//                 <span className="text-[20px]">원</span>
//               </span>
//             </div>
//             <div className="border border-b-0.5 text-black"></div>

//             {/* 결제방식 선택 */}
//             <div className="flex items-center py-8">
//               <span className="text-[18px] text-[rgba(0,0,0,0.72)] font-bold">
//                 결제방식 선택
//               </span>
//               <div className="flex items-center gap-8 ml-32">
//                 <label className="flex items-center gap-2 cursor-pointer text-[18px] font-bold text-[rgba(0,0,0,0.72)]">
//                   <input
//                     type="radio"
//                     name="payment"
//                     value="간편결제"
//                     checked={paymentMethod === "간편결제"}
//                     onChange={(e) => setPaymentMethod(e.target.value)}
//                     className="accent-black w-4 h-4 text-[18px] font-bold"
//                   />
//                   간편결제
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="payment"
//                     value="카드결제"
//                     checked={paymentMethod === "카드결제"}
//                     onChange={(e) => setPaymentMethod(e.target.value)}
//                     className="accent-black w-4 h-4 text-[18px] font-bold"
//                   />
//                카드결제
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="payment"
//                     value="계좌이체"
//                     checked={paymentMethod === "계좌이체"}
//                     onChange={(e) => setPaymentMethod(e.target.value)}
//                     className="accent-black w-4 h-4 text-[18px] font-bold"
//                   />
//               계좌이체
//                 </label>
               
//                 <label>
//                   <input
//                     type="radio"
//                     name="payment"
//                     value="무통장입금"
//                     checked={paymentMethod === "무통장입금"}
//                     onChange={(e) => setPaymentMethod(e.target.value)}
//                     className="accent-black w-4 h-4 text-[18px] font-bold"
//                   />
//            무통장입금
//                 </label>
//               </div>
//             </div>
//             <div className=" mx-auto bg-white shadow rounded-lg"></div>
//             <div className="border border-b-0.5 text-black"></div>


//           </div>
//         </div>

//         <div className="w-full mt-20">
//           {/* Title 3 */}
        
//           <form className="space-y-12" onSubmit={handleSubmit}>
//             <div className="flex items-center space-x-2 text-[18px]">
//               <input
//                 type="checkbox"
//                 id="example"
//                 name="example"
//                 className="w-[22px] h-[22px] accent-black"
//               />
//               <label
//                 htmlFor="example"
//                 className="text-[rgba(0,0,0,0.51)] font-semibold ml-2"
//               >
//                 결제정보를 확인하였으며, 구매에 동의합니다.{" "}
//               </label>            
//             </div>

//             <div className="flex justify-center gap-4 pt-6">

//                 <Link href={"/payments"}>
//               <button
//                 type="submit"
//                 className="w-[375px] h-[52px] bg-black text-white text-[14px] font-semibold px-2 py-3 rounded-sm flex items-center justify-center gap-1"
//               >
//              구매
//               </button>
//               </Link>

//               <button
//                 type="button"
//                 className="w-[375px] h-[52px] text-black text-[14px] font-semibold border border-black px-2 py-3 rounded-sm flex items-center justify-center gap-1"
//               >
//                취소
//               </button>
//             </div>
//           </form>
//         </div>
//       </main>
//     </>
//   );
// }


// "use client";
// import { useState, FormEvent } from "react";
// import Navbar from "@/components/layout/navbar/page";
// import { useRouter } from "next/navigation";

// export default function ClassApplication() {
//   const [paymentMethod, setPaymentMethod] = useState("간편결제");
//   const router = useRouter();

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     // Redirect based on payment method
//     switch (paymentMethod) {
//       case "간편결제":
//         router.push("/payments/simple");
//         break;
//       case "카드결제":
//         router.push("/payments/credit-card");
//         break;
//       case "계좌이체":
//         router.push("/payments/choose-bank");
//         break;
//       case "무통장입금":
//         router.push("/payments/bank-transfer");
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <main className="w-[1270px] mx-auto mt-24 flex flex-col items-center mb-10">

//              <div className="w-full">
//           <div className="mb-6 mt-10">
//             <h2 className="text-[36px] font-extrabold mb-6 text-black">
//             상품정보
//              </h2>
//              <div className="flex items-center gap-4">
//                <button className="text-[22px] font-extrabold text-white bg-black  w-full py-3 rounded-md">
//                  상품명

//                </button>
//              <button className="text-[22px] font-extrabold text-black bg-[#EEEEEE] w-full py-3 rounded-md">
//                  상품명
//                </button>
//                <button className="text-[22px] font-extrabold text-black bg-[#EEEEEE] w-full py-3 rounded-md">
//                  상품명

//                </button>
//              </div>
//            </div>

//            <div className="border border-b-0.5 text-[#D9D9D9]"></div>

//           <div className="mt-15 flex gap-6">
//             {/* Left Thumbnail */}
//              <div
//               className="w-[406px] h-[320px] rounded-lg flex items-center justify-center text-white text-[32px] font-extrabold bg-cover bg-center"
//               style={{
//                 backgroundImage:
//                   "url('/simple-payment/class-application-banner.png')",
//               }}
//             >
//               썸네일
//             </div>

//              {/* Right Info */}
//              <div className="flex ml-12 flex-col my-auto gap-10 flex-1">
//                {/*   상품명 */}
//                <div className="flex items-center">
//                  <label className="w-[80px] text-[18px] font-bold text-[rgba(0,0,0,0.72)]">
//                    상품명
//                  </label>
//                  <input
//                   type="text"
//                   value="과정명 자동기입"
//                   disabled
//                   className=" h-[50px] w-[546px] px-3  rounded-sm bg-[#F3F3F3] text-[rgba(0,0,0,0.3)] text-[18px]  font-semibold"
//                 />
//               </div>

              

//               {/* 금액*/}
//               <div className="flex items-center">
//                 <label className="w-[80px] text-[18px] font-bold text-[rgba(0,0,0,0.72)]">
//                  금액
//                 </label>
//                 <div className="flex items-center w-[546px] h-[50px] gap-3 bg-[#F3F3F3] text-[rgba(0,0,0,0.3)] text-[18px] font-semibold px-8 py-2 rounded-sm">
//                   <span className="text-[#FF0000] text-[20px] font-bold">
//                     10%
//                   </span>
//                   <span className="text-[22px] font-bold text-black">
//                     135,000원
//                   </span>
//                   <span className="line-through text-[18px] text-[rgba(0,0,0,0.4)]">
//                     150,000원
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>


        
//         </div>

//         <div className="w-full mt-20">
//           {/* Title 2 */}
//           <h2 className="text-[36px] font-extrabold mb-6 text-black">
//            결제정보입력
//           </h2>

//           <div className="w-full mx-auto">
//             <div className="flex items-center py-6">
//               <span className="text-[18px] text-[rgba(0,0,0,0.72)] font-bold">
//                 총 결제금액
//               </span>
//               <span className="font-bold text-black ml-14">
//                 <span className="text-[32px]">1,440,000</span>{" "}
//                 <span className="text-[20px]">원</span>
//               </span>
//             </div>
//             <div className="border border-b-0.5 text-black"></div>
//             </div>
//         {/* Payment Section */}
//         <div className="w-full mt-20">
//           <h2 className="text-[36px] font-extrabold mb-6 text-black">
//             결제정보입력
//           </h2>

//           <form className="space-y-12" onSubmit={handleSubmit}>
//             {/* Payment Method Selection */}
//             <div className="flex items-center py-8">
//               <span className="text-[18px] text-[rgba(0,0,0,0.72)] font-bold">
//                 결제방식 선택
//               </span>
//               <div className="flex items-center gap-8 ml-32">
//                 <label className="flex items-center gap-2 cursor-pointer text-[18px] font-bold text-[rgba(0,0,0,0.72)]">
//                   <input
//                     type="radio"
//                     name="payment"
//                     value="간편결제"
//                     checked={paymentMethod === "간편결제"}
//                     onChange={(e) => setPaymentMethod(e.target.value)}
//                     className="accent-black w-4 h-4"
//                   />
//                   간편결제
//                 </label>
//                 <label className="flex items-center gap-2 cursor-pointer text-[18px] font-bold text-[rgba(0,0,0,0.72)]">
//                   <input
//                     type="radio"
//                     name="payment"
//                     value="카드결제"
//                     checked={paymentMethod === "카드결제"}
//                     onChange={(e) => setPaymentMethod(e.target.value)}
//                     className="accent-black w-4 h-4"
//                   />
//                   카드결제
//                 </label>
//                 <label className="flex items-center gap-2 cursor-pointer text-[18px] font-bold text-[rgba(0,0,0,0.72)]">
//                   <input
//                     type="radio"
//                     name="payment"
//                     value="계좌이체"
//                     checked={paymentMethod === "계좌이체"}
//                     onChange={(e) => setPaymentMethod(e.target.value)}
//                     className="accent-black w-4 h-4"
//                   />
//                   계좌이체
//                 </label>
//                 <label className="flex items-center gap-2 cursor-pointer text-[18px] font-bold text-[rgba(0,0,0,0.72)]">
//                   <input
//                     type="radio"
//                     name="payment"
//                     value="무통장입금"
//                     checked={paymentMethod === "무통장입금"}
//                     onChange={(e) => setPaymentMethod(e.target.value)}
//                     className="accent-black w-4 h-4"
//                   />
//                   무통장입금
//                 </label>
//               </div>
//             </div>

//             {/* Terms Checkbox */}
//             <div className="flex items-center space-x-2 text-[18px]">
//               <input
//                 type="checkbox"
//                 id="agreement"
//                 name="agreement"
//                 className="w-[22px] h-[22px] accent-black"
//                 required
//               />
//               <label
//                 htmlFor="agreement"
//                 className="text-[rgba(0,0,0,0.51)] font-semibold ml-2"
//               >
//                 결제정보를 확인하였으며, 구매에 동의합니다.
//               </label>
//             </div>

//             {/* Submit / Cancel Buttons */}
//             <div className="flex justify-center gap-4 pt-6">
//               <button
//                 type="submit"
//                 className="w-[375px] h-[52px] bg-black text-white text-[14px] font-semibold px-2 py-3 rounded-sm flex items-center justify-center gap-1"
//               >
//                 구매
//               </button>

//               <button
//                 type="button"
//                 className="w-[375px] h-[52px] text-black text-[14px] font-semibold border border-black px-2 py-3 rounded-sm flex items-center justify-center gap-1"
//               >
//                 취소
//               </button>
//             </div>
//           </form>
//         </div>
//       </main>
//     </>
//   );
// }



"use client";
import { useState, FormEvent } from "react";
import Navbar from "@/components/layout/navbar/page";
import { useRouter } from "next/navigation";

export default function ClassApplication() {
  const [paymentMethod, setPaymentMethod] = useState("간편결제");
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Basic form validation
    const agreement = (e.target as HTMLFormElement).agreement.checked;
    if (!agreement) {
      alert("구매 동의를 확인해주세요.");
      return;
    }

    // Redirect based on payment method
    switch (paymentMethod) {
      case "간편결제":
        router.push("/payments/simple");
        break;
      case "카드결제":
        router.push("/payments/credit-card");
        break;
      case "계좌이체":
        router.push("/payments/choose-bank");
        break;
      case "무통장입금":
        router.push("/payments/bank-transfer");
        break;
      default:
        break;
    }
  };

  const handleCancel = () => {
    // Redirect to home or previous page
    router.push("/");
  };

  return (
    <>
      <Navbar />
      <main className="w-[1270px] mx-auto mt-24 mb-10 flex flex-col items-center">
        <div className="w-full">
          {/* Product Information Section */}
          <section className="mb-6 mt-10">
            <h2 className="text-[36px] font-extrabold mb-6 text-black">
              상품정보
            </h2>
            <div className="flex items-center gap-4">
              {["상품명", "상품명", "상품명"].map((item, index) => (
                <button
                  key={index}
                  className={`text-[22px] font-extrabold w-full py-3 rounded-md ${
                    index === 0 ? "bg-black text-white" : "bg-[#EEEEEE] text-black"
                  }`}
                  aria-pressed={index === 0}
                >
                  {item}
                </button>
              ))}
            </div>
          </section>

          <hr className="border-t border-[#D9D9D9]" />

          <section className="mt-15 flex gap-6">
            {/* Thumbnail */}
            <div
              className="w-[406px] h-[320px] rounded-lg flex items-center justify-center text-white text-[32px] font-extrabold bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('/simple-payment/class-application-banner.png')",
              }}
              aria-label="상품 썸네일"
            >
              썸네일
            </div>

            {/* Product Info */}
            <div className="ml-12 flex flex-col my-auto gap-10 flex-1">
              <div className="flex items-center">
                <label
                  htmlFor="productName"
                  className="w-[80px] text-[18px] font-bold text-[rgba(0,0,0,0.72)]"
                >
                  상품명
                </label>
                <input
                  id="productName"
                  type="text"
                  value="과정명 자동기입"
                  disabled
                  className="h-[50px] w-[546px] px-3 rounded-sm bg-[#F3F3F3] text-[rgba(0,0,0,0.3)] text-[18px] font-semibold"
                  aria-readonly="true"
                />
              </div>

              <div className="flex items-center">
                <label className="w-[80px] text-[18px] font-bold text-[rgba(0,0,0,0.72)]">
                  금액
                </label>
                <div className="flex items-center w-[546px] h-[50px] gap-3 bg-[#F3F3F3] text-[18px] font-semibold px-8 py-2 rounded-sm">
                  <span className="text-[#FF0000] text-[20px] font-bold">
                    10%
                  </span>
                  <span className="text-[22px] font-bold text-black">
                    135,000원
                  </span>
                  <span className="line-through text-[18px] text-[rgba(0,0,0,0.4)]">
                    150,000원
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Payment Section */}
        <section className="w-full mt-20">
          <h2 className="text-[36px] font-extrabold mb-6 text-black">
            결제정보입력
          </h2>

          <div className="flex items-center py-6">
            <span className="text-[18px] text-[rgba(0,0,0,0.72)] font-bold">
              총 결제금액
            </span>
            <span className="font-bold text-black ml-14">
              <span className="text-[32px]">1,440,000</span>{" "}
              <span className="text-[20px]">원</span>
            </span>
          </div>
          <hr className="border-t border-[#D9D9D9]" />

          <form className="space-y-12 mt-10" onSubmit={handleSubmit}>
            {/* Payment Method Selection */}
            <div className="flex items-center py-8">
              <span className="text-[18px] text-[rgba(0,0,0,0.72)] font-bold">
                결제방식 선택
              </span>
              <div className="flex items-center gap-8 ml-32">
                {[
                  "간편결제",
                  "카드결제",
                  "계좌이체",
                  "무통장입금",
                ].map((method) => (
                  <label
                    key={method}
                    className="flex items-center gap-2 cursor-pointer text-[18px] font-bold text-[rgba(0,0,0,0.72)]"
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={method}
                      checked={paymentMethod === method}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="accent-black w-4 h-4"
                      aria-label={method}
                    />
                    {method}
                  </label>
                ))}
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="agreement"
                name="agreement"
                className="w-[22px] h-[22px] accent-black"
                required
                aria-required="true"
              />
              <label
                htmlFor="agreement"
                className="text-[18px] text-[rgba(0,0,0,0.51)] font-semibold"
              >
                결제정보를 확인하였으며, 구매에 동의합니다.
              </label>
            </div>

            {/* Submit / Cancel Buttons */}
            <div className="flex justify-center gap-4 pt-6">
              <button
                type="submit"
                className="w-[375px] h-[52px] bg-black text-white text-[14px] font-semibold rounded-sm flex items-center justify-center"
                aria-label="구매 확인"
              >
                구매
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="w-[375px] h-[52px] text-black text-[14px] font-semibold border border-black rounded-sm flex items-center justify-center"
                aria-label="구매 취소"
              >
                취소
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}