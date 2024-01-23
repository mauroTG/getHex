import { useState } from "react";
import { ClipboardIcon } from "@heroicons/react/24/solid";

/* eslint-disable react/prop-types */
const ColorCard = ({ rgb, hex }) => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = (e) => {
    const color = e.target.innerText;
    navigator.clipboard.writeText(color);
  };

  return (
    <li
      style={{ background: rgb }}
      className="relative w-32 h-32 rounded-xl shadow-md transition duration-500 ease-out">
      <span
        className="flex flex-row gap-x-2 items-center justify-between p-2 absolute bottom-0 border-t w-full bg-zinc-800 text-white cursor-pointer hover:text-green-400 duration-300 ease-out transition"
        onClick={(e) => {
          copyToClipboard(e);
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 1000);
        }}>
        {copied ? "Copied!" : hex}
        {<ClipboardIcon className="h-5 w-5" />}
      </span>
    </li>
  );
};

export default ColorCard;
