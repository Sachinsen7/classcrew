"use client";

import { useState } from "react";

interface LearningForm {
  id: number;
  keywords: string;
  moduleName: string;
  moduleContent: string;
}

export default function LearningPage() {
  const [keywords, setKeywords] = useState("");
  const [moduleName, setModuleName] = useState("");
  const [moduleContent, setModuleContent] = useState("");
  const [records, setRecords] = useState<LearningForm[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!keywords || !moduleName || !moduleContent) {
      alert("Please fill all fields");
      return;
    }

    const newRecord: LearningForm = {
      id: Date.now(),
      keywords,
      moduleName,
      moduleContent,
    };

    setRecords((prev) => [...prev, newRecord]);

    // reset
    setKeywords("");
    setModuleName("");
    setModuleContent("");
  };

  return (
    <div className="min-h-screen bg-white text-black p-10">
      <h1 className="text-4xl font-extrabold mb-10 text-center">
        Learning Module
      </h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white border-2 border-black rounded-2xl shadow-lg p-8 space-y-6"
      >
        {/* Learning Keywords */}
        <div>
          <label className="block font-semibold mb-2">Enter Learning Keywords</label>
          <input
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            className="w-full border-2 border-black rounded-xl px-4 py-3"
            placeholder="Enter keywords"
          />
        </div>

        {/* Module Name */}
        <div>
          <label className="block font-semibold mb-2">Module Name</label>
          <input
            type="text"
            value={moduleName}
            onChange={(e) => setModuleName(e.target.value)}
            className="w-full border-2 border-black rounded-xl px-4 py-3"
            placeholder="Enter module name"
          />
        </div>

        {/* Module Content */}
        <div>
          <label className="block font-semibold mb-2">Module Content</label>
          <textarea
            value={moduleContent}
            onChange={(e) => setModuleContent(e.target.value)}
            rows={4}
            className="w-full border-2 border-black rounded-xl px-4 py-3"
            placeholder="Write module content here..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-xl font-bold text-lg hover:bg-white hover:text-black hover:border-2 hover:border-black transition"
        >
          Submit
        </button>
      </form>

      {/* Records */}
      <div className="max-w-3xl mx-auto mt-16">
        <h2 className="text-2xl font-bold mb-6">Submitted Records</h2>
        {records.length === 0 ? (
          <p className="text-gray-500 italic">No records submitted yet.</p>
        ) : (
          <div className="space-y-6">
            {records.map((r) => (
              <div
                key={r.id}
                className="border-2 border-black rounded-xl p-6 shadow-sm hover:shadow-lg transition"
              >
                <p className="font-medium">Keywords: {r.keywords}</p>
                <p className="font-medium">Module Name: {r.moduleName}</p>
                <p className="font-medium">Module Content:</p>
                <p className="italic">{r.moduleContent}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
