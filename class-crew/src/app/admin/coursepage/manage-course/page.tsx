"use client";

import { useState } from "react";

interface EducationForm {
  id: number;
  category: string;
  process: string;
  description: string;
  hours: string;
  expenses: string;
  field: string;
  date: string;
  refund: string;
  promotions: string[];
  learningObject: string;
  pictureName: string;
}

export default function EducationPage() {
  const [category, setCategory] = useState("");
  const [process, setProcess] = useState("");
  const [description, setDescription] = useState("");
  const [hours, setHours] = useState("");
  const [expenses, setExpenses] = useState("");
  const [field, setField] = useState("");
  const [date, setDate] = useState("");
  const [refund, setRefund] = useState("Refund");
  const [promotions, setPromotions] = useState<string[]>([]);
  const [learningObject, setLearningObject] = useState("");
  const [picture, setPicture] = useState<File | null>(null);

  const [records, setRecords] = useState<EducationForm[]>([]);

  const handlePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) setPicture(f);
  };

  const handlePromotionChange = (value: string) => {
    if (promotions.includes(value)) {
      setPromotions(promotions.filter((p) => p !== value));
    } else {
      if (promotions.length < 3) {
        setPromotions([...promotions, value]);
      } else {
        alert("You can only select 3 promotions");
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !category ||
      !process ||
      !description ||
      !hours ||
      !expenses ||
      !field ||
      !date ||
      !learningObject ||
      !picture
    ) {
      alert("Please fill all fields and upload a picture");
      return;
    }

    const newRecord: EducationForm = {
      id: Date.now(),
      category,
      process,
      description,
      hours,
      expenses,
      field,
      date,
      refund,
      promotions,
      learningObject,
      pictureName: picture.name,
    };

    setRecords((prev) => [...prev, newRecord]);

    // reset form
    setCategory("");
    setProcess("");
    setDescription("");
    setHours("");
    setExpenses("");
    setField("");
    setDate("");
    setRefund("Refund");
    setPromotions([]);
    setLearningObject("");
    setPicture(null);
  };

  return (
    <div className="min-h-screen bg-white text-black p-10">
      <h1 className="text-4xl font-extrabold mb-10 text-center">
        Educational Registration
      </h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white border-2 border-black rounded-2xl shadow-lg p-8 space-y-6"
      >
        {/* Picture */}
        <div>
          <label className="block font-semibold mb-2">Register Picture</label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePictureChange}
            className="w-full border-2 border-dashed border-black rounded-xl px-4 py-3 cursor-pointer"
          />
          {picture && (
            <p className="mt-2 text-sm italic font-medium">
              Selected: {picture.name}
            </p>
          )}
        </div>

        {/* Category */}
        <div>
          <label className="block font-semibold mb-2">Set Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border-2 border-black rounded-xl px-4 py-3"
            placeholder="Enter category"
          />
        </div>

        {/* Process */}
        <div>
          <label className="block font-semibold mb-2">Process Name</label>
          <input
            type="text"
            value={process}
            onChange={(e) => setProcess(e.target.value)}
            className="w-full border-2 border-black rounded-xl px-4 py-3"
            placeholder="Enter process name"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold mb-2">Description (max 2 lines)</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={200}
            rows={2}
            className="w-full border-2 border-black rounded-xl px-4 py-3"
            placeholder="Write here..."
          />
        </div>

        {/* Hours */}
        <div>
          <label className="block font-semibold mb-2">Educational Hours</label>
          <input
            type="number"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            className="w-full border-2 border-black rounded-xl px-4 py-3"
            placeholder="Enter hours"
          />
        </div>

        {/* Expenses */}
        <div>
          <label className="block font-semibold mb-2">Educational Expenses</label>
          <input
            type="number"
            value={expenses}
            onChange={(e) => setExpenses(e.target.value)}
            className="w-full border-2 border-black rounded-xl px-4 py-3"
            placeholder="Enter expenses"
          />
        </div>

        {/* Field */}
        <div>
          <label className="block font-semibold mb-2">Educational Field</label>
          <input
            type="text"
            value={field}
            onChange={(e) => setField(e.target.value)}
            className="w-full border-2 border-black rounded-xl px-4 py-3"
            placeholder="Enter field"
          />
        </div>

        {/* Date */}
        <div>
          <label className="block font-semibold mb-2">Educational Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border-2 border-black rounded-xl px-4 py-3"
          />
        </div>

        {/* Refund */}
        <div>
          <label className="block font-semibold mb-2">Refund / Non-Refund</label>
          <select
            value={refund}
            onChange={(e) => setRefund(e.target.value)}
            className="w-full border-2 border-black rounded-xl px-4 py-3"
          >
            <option value="Refund">Refund</option>
            <option value="Non-Refund">Non-Refund</option>
          </select>
        </div>

        {/* Promotions */}
        <div>
          <label className="block font-semibold mb-2">Select 3 Promotions</label>
          <div className="flex flex-wrap gap-4">
            {["Discount", "Scholarship", "Voucher", "Gift", "Free Trial"].map(
              (promo) => (
                <label key={promo} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={promotions.includes(promo)}
                    onChange={() => handlePromotionChange(promo)}
                  />
                  <span>{promo}</span>
                </label>
              )
            )}
          </div>
        </div>

        {/* Learning Object */}
        <div>
          <label className="block font-semibold mb-2">Learning Object</label>
          <input
            type="text"
            value={learningObject}
            onChange={(e) => setLearningObject(e.target.value)}
            className="w-full border-2 border-black rounded-xl px-4 py-3"
            placeholder="Enter learning object"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-xl font-bold text-lg hover:bg-white hover:text-black hover:border-2 hover:border-black transition"
        >
          Submit
        </button>
      </form>

      {/* Records Section */}
      <div className="max-w-4xl mx-auto mt-16">
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
                <h3 className="text-xl font-bold mb-2">{r.category}</h3>
                <p className="font-medium">Process: {r.process}</p>
                <p className="font-medium">Description: {r.description}</p>
                <p>Hours: {r.hours}</p>
                <p>Expenses: ₹{r.expenses}</p>
                <p>Field: {r.field}</p>
                <p>Date: {r.date}</p>
                <p>Refund: {r.refund}</p>
                <p>Promotions: {r.promotions.join(", ")}</p>
                <p>Learning Object: {r.learningObject}</p>
                <p className="mt-2 italic">📷 {r.pictureName}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
  