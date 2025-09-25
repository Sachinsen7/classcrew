"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BannerPage() {
  const [title, setTitle] = useState("");
  const [banner, setBanner] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const router = useRouter();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setBanner(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !banner) {
      alert("Please fill all fields");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("banner", banner);

    try {
      const res = await fetch("/api/admin/banner", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        alert("Banner saved successfully!");
        setTitle("");
        setBanner(null);
        setPreview(null);
        router.refresh();
      } else {
        alert("Error while saving banner");
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
    Manage Banner 
      </h1>

      {/* Banner Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white border-2 border-black rounded-2xl shadow-lg p-8 space-y-6 hover:shadow-2xl transition duration-300"
      >
        {/* Banner Title */}
        {/* <div>
          <label className="block font-semibold mb-2 text-lg">Banner Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border-2 border-black rounded-xl px-4 py-3 focus:outline-none focus:ring-4 focus:ring-black/30"
            placeholder="Enter banner title"
          />
        </div> */}

        {/* Banner Upload */}
        <div>
          <label className="block font-semibold mb-2 text-lg">Banner Image</label>
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
                alt="Banner Preview"
                width={400}
                height={200}
                className="rounded-xl object-cover border-2 border-black shadow-md"
              />
            </div>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-xl font-bold text-lg hover:bg-white hover:text-black hover:border-2 hover:border-black transition-all duration-300"
        >
          Save Banner
        </button>
      </form>
    </div>
  );
}
