"use client";

import { useState } from "react";

export default function ProfessionalDetailsPage() {
  const [instructions, setInstructions] = useState("");
  const [career, setCareer] = useState("");
  const [field, setField] = useState("");
  const [certificate, setCertificate] = useState("");
  const [history, setHistory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!instructions || !career || !field || !certificate || !history) {
      alert("Please fill all fields");
      return;
    }

    console.log({
      instructions,
      career,
      field,
      certificate,
      history,
    });

    alert("Professional details submitted successfully ✅");

    // Reset after submission
    setInstructions("");
    setCareer("");
    setField("");
    setCertificate("");
    setHistory("");
  };

  return (
    <div className="min-h-screen bg-white text-black p-10">
      <h1 className="text-4xl font-extrabold mb-10 text-center">
        Professional Details
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white border-2 border-black rounded-2xl shadow-lg p-8 space-y-6"
      >
        <div>
          <label className="block font-semibold mb-2">Enter Instructions</label>
          <input
            type="text"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="w-full border-2 border-black rounded-xl px-4 py-3"
            placeholder="Enter instructions"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">Career Input</label>
          <input
            type="text"
            value={career}
            onChange={(e) => setCareer(e.target.value)}
            className="w-full border-2 border-black rounded-xl px-4 py-3"
            placeholder="Enter career details"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">
            Enter a Professional Field
          </label>
          <input
            type="text"
            value={field}
            onChange={(e) => setField(e.target.value)}
            className="w-full border-2 border-black rounded-xl px-4 py-3"
            placeholder="Enter professional field"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">
            Enter Certificate and Books
          </label>
          <input
            type="text"
            value={certificate}
            onChange={(e) => setCertificate(e.target.value)}
            className="w-full border-2 border-black rounded-xl px-4 py-3"
            placeholder="Enter certificates/books"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">
            Enter History of Attendance
          </label>
          <input
            type="text"
            value={history}
            onChange={(e) => setHistory(e.target.value)}
            className="w-full border-2 border-black rounded-xl px-4 py-3"
            placeholder="Enter attendance history"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-xl font-bold text-lg hover:bg-white hover:text-black hover:border-2 hover:border-black transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
