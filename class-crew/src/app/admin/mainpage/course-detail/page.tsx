"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CategoryPage() {
  const [name, setName] = useState("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [period, setPeriod] = useState("");
  const [amount, setAmount] = useState("");
  const router = useRouter();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setThumbnail(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !thumbnail || !period || !amount) {
      alert("Please fill all fields");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("thumbnail", thumbnail);
    formData.append("period", period);
    formData.append("amount", amount);

    try {
      const res = await fetch("/api/admin/category", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        alert("Category registered/modified successfully!");
        router.refresh();
      } else {
        alert("Error while saving category");
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
       Course Detail
      </h1>

      {/* Card Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white border-2 border-black rounded-2xl shadow-lg p-8 space-y-6 hover:shadow-2xl transition duration-300"
      >
        {/* Category Name */}
        <div>
          <label className="block font-semibold mb-2 text-lg">Category Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border-2 border-black rounded-xl px-4 py-3 focus:outline-none focus:ring-4 focus:ring-black/30"
            placeholder="Enter category name"
          />
        </div>

        {/* Thumbnail Upload */}
        <div>
          <label className="block font-semibold mb-2 text-lg">Thumbnail</label>
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
                alt="Thumbnail Preview"
                width={200}
                height={200}
                className="rounded-xl object-cover border-2 border-black shadow-md"
              />
            </div>
          )}
        </div>

        {/* Period */}
        <div>
          <label className="block font-semibold mb-2 text-lg">Period (months)</label>
          <input
            type="number"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="w-full border-2 border-black rounded-xl px-4 py-3 focus:outline-none focus:ring-4 focus:ring-black/30"
            placeholder="Enter validity period"
          />
        </div>

        {/* Amount */}
        <div>
          <label className="block font-semibold mb-2 text-lg">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border-2 border-black rounded-xl px-4 py-3 focus:outline-none focus:ring-4 focus:ring-black/30"
            placeholder="Enter amount"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-xl font-bold text-lg hover:bg-white hover:text-black hover:border-2 hover:border-black transition-all duration-300"
        >
          Save Category
        </button>
      </form>
    </div>
  );
}
