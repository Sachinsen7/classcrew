"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProductPage() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [category, setCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [cost, setCost] = useState<number | "">("");
  const [discount, setDiscount] = useState<number | "">("");
  const [finalAmount, setFinalAmount] = useState<number | null>(null);

  const router = useRouter();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const calculateFinalAmount = () => {
    if (cost === "" || isNaN(Number(cost))) return;
    if (discount === "" || isNaN(Number(discount))) {
      setFinalAmount(Number(cost));
      return;
    }
    const discounted = Number(cost) - (Number(cost) * Number(discount)) / 100;
    setFinalAmount(discounted);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!category || !productName || !image || !cost) {
      alert("Please fill all required fields");
      return;
    }

    calculateFinalAmount();

    const formData = new FormData();
    formData.append("category", category);
    formData.append("productName", productName);
    formData.append("image", image);
    formData.append("cost", String(cost));
    formData.append("discount", String(discount || 0));
    formData.append("finalAmount", String(finalAmount ?? cost));

    try {
      const res = await fetch("/api/admin/product", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        alert("Product saved successfully!");
        router.refresh();
      } else {
        alert("Error while saving product");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-white text-black p-10">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold tracking-tight mb-10 text-center">
        Insert Product
      </h1>

      {/* Card Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white border-2 border-black rounded-2xl shadow-lg p-8 space-y-6 hover:shadow-2xl transition duration-300"
      >
        {/* Image Upload */}
        <div>
          <label className="block font-semibold mb-2 text-lg">
            Product Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border-2 border-dashed border-black rounded-xl px-4 py-3 cursor-pointer"
          />
          {preview && (
            <div className="mt-4 flex justify-center">
              <Image
                src={preview}
                alt="Product Preview"
                width={200}
                height={200}
                className="rounded-xl object-cover border-2 border-black shadow-md"
              />
            </div>
          )}
        </div>

        {/* Category */}
        <div>
          <label className="block font-semibold mb-2 text-lg">
            Select Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border-2 border-black rounded-xl px-4 py-3 focus:outline-none focus:ring-4 focus:ring-black/30"
          >
            <option value="">-- Select --</option>
            <option value="Books">Books</option>
            <option value="Clothes">Clothes</option>
            <option value="Electronics">Electronics</option>
          </select>
        </div>

        {/* Product Name */}
        <div>
          <label className="block font-semibold mb-2 text-lg">
            Product Name
          </label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full border-2 border-black rounded-xl px-4 py-3 focus:outline-none focus:ring-4 focus:ring-black/30"
            placeholder="Enter product name"
          />
        </div>

        {/* Cost */}
        <div>
          <label className="block font-semibold mb-2 text-lg">Cost</label>
          <input
            type="number"
            value={cost}
            onChange={(e) => setCost(Number(e.target.value))}
            className="w-full border-2 border-black rounded-xl px-4 py-3 focus:outline-none focus:ring-4 focus:ring-black/30"
            placeholder="Enter cost"
          />
        </div>

        {/* Discount */}
        <div>
          <label className="block font-semibold mb-2 text-lg">
            Discount Rate (%)
          </label>
          <input
            type="number"
            value={discount}
            onChange={(e) => setDiscount(Number(e.target.value))}
            className="w-full border-2 border-black rounded-xl px-4 py-3 focus:outline-none focus:ring-4 focus:ring-black/30"
            placeholder="Enter discount rate (optional)"
          />
        </div>

        {/* Final Amount */}
        <div className="text-center">
          <button
            type="button"
            onClick={calculateFinalAmount}
            className="bg-black text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-white hover:text-black hover:border-2 hover:border-black transition-all duration-300"
          >
            Calculate Final Amount
          </button>

          {finalAmount !== null && (
            <p className="mt-4 text-xl font-semibold">
              Final Amount: ₹{finalAmount.toFixed(2)}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-xl font-bold text-lg hover:bg-white hover:text-black hover:border-2 hover:border-black transition-all duration-300"
        >
          Save Product
        </button>

        {/* Show 6 times if no discount */}
        {discount === "" && finalAmount !== null && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="border-2 border-black rounded-xl p-4 bg-gray-50 shadow-md"
              >
                <p>
                  <strong>Category:</strong> {category || "N/A"}
                </p>
                <p>
                  <strong>Product Name:</strong> {productName || "N/A"}
                </p>
                <p>
                  <strong>Final Amount:</strong> ₹{finalAmount.toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        )}
      </form>
    </div>
  );
}
