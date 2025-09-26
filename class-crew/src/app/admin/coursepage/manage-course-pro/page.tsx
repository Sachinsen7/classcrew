"use client";

import { useState } from "react";

interface UploadedFile {
  id: number;
  type: "Promotion" | "Notice";
  fileName: string;
}

export default function UploadFilesPage() {
  const [promotionFile, setPromotionFile] = useState<File | null>(null);
  const [noticeFile, setNoticeFile] = useState<File | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  const handlePromotionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setPromotionFile(file);
  };

  const handleNoticeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setNoticeFile(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promotionFile && !noticeFile) {
      alert("Please upload at least one file");
      return;
    }

    const newFiles: UploadedFile[] = [];
    if (promotionFile) {
      newFiles.push({
        id: Date.now() + Math.random(),
        type: "Promotion",
        fileName: promotionFile.name,
      });
    }
    if (noticeFile) {
      newFiles.push({
        id: Date.now() + Math.random(),
        type: "Notice",
        fileName: noticeFile.name,
      });
    }

    setUploadedFiles((prev) => [...prev, ...newFiles]);

    // Reset inputs
    setPromotionFile(null);
    setNoticeFile(null);
  };

  return (
    <div className="min-h-screen bg-white text-black p-10">
      <h1 className="text-4xl font-extrabold mb-10 text-center">Upload Files</h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white border-2 border-black rounded-2xl shadow-lg p-8 space-y-6"
      >
        {/* Promotion File */}
        <div>
          <label className="block font-semibold mb-2">Upload Promotion File</label>
          <input
            type="file"
            onChange={handlePromotionChange}
            className="w-full border-2 border-dashed border-black rounded-xl px-4 py-3 cursor-pointer"
          />
          {promotionFile && (
            <p className="mt-2 text-sm font-medium italic">
              Selected: {promotionFile.name}
            </p>
          )}
        </div>

        {/* Notice File */}
        <div>
          <label className="block font-semibold mb-2">Upload Notice File</label>
          <input
            type="file"
            onChange={handleNoticeChange}
            className="w-full border-2 border-dashed border-black rounded-xl px-4 py-3 cursor-pointer"
          />
          {noticeFile && (
            <p className="mt-2 text-sm font-medium italic">
              Selected: {noticeFile.name}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-xl font-bold text-lg hover:bg-white hover:text-black hover:border-2 hover:border-black transition"
        >
          Submit
        </button>
      </form>

      {/* Uploaded Files Section */}
      <div className="max-w-3xl mx-auto mt-16">
        <h2 className="text-2xl font-bold mb-6">Uploaded Files</h2>
        {uploadedFiles.length === 0 ? (
          <p className="text-gray-500 italic">No files uploaded yet.</p>
        ) : (
          <div className="space-y-4">
            {uploadedFiles.map((f) => (
              <div
                key={f.id}
                className="border-2 border-black rounded-xl p-4 shadow-sm hover:shadow-lg transition"
              >
                <p className="font-medium">{f.type} File:</p>
                <p className="italic">📄 {f.fileName}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
