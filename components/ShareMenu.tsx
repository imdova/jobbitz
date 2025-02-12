"use client";
import { FaRegCopy } from "react-icons/fa6";
import { FaFacebookF, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { LuShare2 } from "react-icons/lu";

import { useEffect, useRef, useState } from "react";

const ShareMenu: React.FC<{ link: string }> = ({ link }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCopyAlert, setShowCopyAlert] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setShowCopyAlert(true);
      setTimeout(() => setShowCopyAlert(false), 3000);
      setIsMenuOpen(false);
    } catch (error: unknown) {
      console.log("🚀 ~ handleCopyLink ~ error:", error);
    }
  };
  const shareUrls = {
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(link)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(link)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      link
    )}`,
  };

  const handleShare = (platform: keyof typeof shareUrls) => {
    window.open(shareUrls[platform], "_blank");
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current) {
        // menuRef.current is now typed as HTMLDivElement or null
        if (!menuRef.current.contains(event.target as Node)) {
          // Type cast event.target
          setIsMenuOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block z-50" ref={menuRef}>
      <button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className=" rounded-full p-2 hover:bg-gray-100 duration-200 "
      >
        <LuShare2 className="w-5 h-5 text-primary" />
      </button>

      {isMenuOpen && (
        <ul className="absolute z-[999] bg-white border border-gray-200 rounded shadow-md mt-2 w-48 right-0">
          <li
            onClick={() => handleShare("whatsapp")}
            className="flex items-center gap-3 px-4 py-2 hover:bg-green-100 cursor-pointer"
          >
            <FaWhatsapp className="text-green-600" />
            WhatsApp
          </li>
          <li
            onClick={() => handleShare("telegram")}
            className="flex items-center gap-3 px-4 py-2 hover:bg-blue-100 cursor-pointer"
          >
            <FaTelegram className="text-blue-600" />
            Telegram
          </li>
          <li
            onClick={() => handleShare("facebook")}
            className="flex items-center gap-3 px-4 py-2 hover:bg-blue-100 cursor-pointer"
          >
            <FaFacebookF className="text-blue-600" />
            Facebook
          </li>
          <li
            onClick={handleCopyLink}
            className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            <FaRegCopy className="text-gray-600" />
            Copy Link
          </li>
        </ul>
      )}

      {showCopyAlert && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded">
          Link copied to clipboard!
        </div>
      )}
    </div>
  );
};

export default ShareMenu;
