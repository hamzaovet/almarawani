"use client";

import React from "react";
import { calculateEan13CheckDigit } from "@/lib/barcode";

// Standard EAN-13 encodings (7 bits per digit)
const L_CODES = [
  "0001101", "0011001", "0010011", "0111101", "0100011",
  "0110001", "0101111", "0111011", "0110111", "0001011",
];
const G_CODES = [
  "0100111", "0110011", "0011011", "0100001", "0011101",
  "0111001", "0000101", "0010001", "0001001", "0010111",
];
const R_CODES = [
  "1110010", "1100110", "1101100", "1000010", "1011100",
  "1001110", "1010000", "1000100", "1001000", "1110100",
];

// First digit parity pattern determines whether left digits use L or G
const PARITY_PATTERNS = [
  "LLLLLL", "LLGLGG", "LLGGLG", "LLGGGL", "LGLLGG",
  "LGGLLG", "LGGGLL", "LGLGLG", "LGLGGL", "LGGLGL",
];

interface BarcodeEan13Props {
  value: string; // 12 or 13 digits
  height?: number;
  width?: number | string;
  showText?: boolean;
  className?: string;
}

export default function BarcodeEan13({
  value,
  height = 50,
  width = "100%",
  showText = true,
  className = "",
}: BarcodeEan13Props) {
  const digitsOnly = (value || "").replace(/\D/g, "");
  let fullDigits = digitsOnly;

  if (digitsOnly.length === 12) {
    fullDigits = digitsOnly + calculateEan13CheckDigit(digitsOnly);
  } else if (digitsOnly.length !== 13) {
    fullDigits = (digitsOnly + "0000000000000").slice(0, 13);
  }

  const firstDigit = parseInt(fullDigits[0], 10) || 0;
  const parity = PARITY_PATTERNS[firstDigit] || "LLLLLL";

  let bits = "101"; // Start guard

  // Left 6 digits (index 1 to 6)
  for (let i = 1; i <= 6; i++) {
    const d = parseInt(fullDigits[i], 10) || 0;
    const mode = parity[i - 1];
    bits += mode === "L" ? L_CODES[d] : G_CODES[d];
  }

  bits += "01010"; // Center guard

  // Right 6 digits (index 7 to 12)
  for (let i = 7; i <= 12; i++) {
    const d = parseInt(fullDigits[i], 10) || 0;
    bits += R_CODES[d];
  }

  bits += "101"; // End guard

  // SVG viewBox width: 95 modules + margins (total 105)
  const totalModules = bits.length; // 95
  const margin = 5;
  const viewBoxWidth = totalModules + margin * 2;
  const barHeight = showText ? height - 14 : height;

  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      <svg
        viewBox={`0 0 ${viewBoxWidth} ${barHeight}`}
        style={{ width: width, height: barHeight }}
        className="w-full"
        preserveAspectRatio="none"
      >
        <rect width={viewBoxWidth} height={barHeight} fill="#ffffff" />
        {bits.split("").map((bit, idx) => {
          if (bit === "1") {
            const isGuard =
              idx < 3 ||
              (idx >= 45 && idx < 50) ||
              idx >= 92;
            const h = isGuard ? barHeight : barHeight - 4;
            return (
              <rect
                key={idx}
                x={margin + idx}
                y={0}
                width={1}
                height={h}
                fill="#000000"
              />
            );
          }
          return null;
        })}
      </svg>
      {showText && (
        <div
          className="text-center font-mono font-bold tracking-widest text-black mt-0.5 text-[11px] leading-none"
          dir="ltr"
        >
          {fullDigits[0]} {fullDigits.slice(1, 7)} {fullDigits.slice(7, 13)}
        </div>
      )}
    </div>
  );
}
