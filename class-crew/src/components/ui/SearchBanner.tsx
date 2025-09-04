import React from "react";
import Image from "next/image";
import Button from "./Button";

type Option = {
  label: string;
  value: string;
};

type SearchBannerProps = {
  bgImage: string;
  title: string;
  filters: {
    label: string;
    options: Option[];
    value: string;
    onChange: (value: string) => void;
  }[];
  buttonText: string;
  onSearch: () => void;
};

export default function SearchBanner({
  bgImage,
  title,
  filters,
  buttonText,
  onSearch,
}: SearchBannerProps) {
  return (
    <div
      className="relative w-[1245px] rounded-2xl overflow-hidden p-6 flex items-center justify-between mb-20"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-white font-bold text-lg">{title}</h2>

      <div className="flex items-center gap-4">
        {filters.map((filter, idx) => (
          <div key={idx} className="flex items-center gap-2 text-white">
            <span className="font-medium">{filter.label}</span>
            <select
              value={filter.value}
              onChange={(e) => filter.onChange(e.target.value)}
              className="bg-transparent border border-white rounded-md px-3 py-2 text-sm text-white focus:outline-none"
            >
              <option value="">- 선택 -</option>
              {filter.options.map((opt) => (
                <option
                  key={opt.value}
                  value={opt.value}
                  className="text-black"
                >
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        ))}

        <Button
          label={buttonText}
          onClick={onSearch}
          variant="secondary"
          className="bg-white text-black hover:bg-gray-200"
        />
      </div>
    </div>
  );
}
