'use client'


import { useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";

export default function CartPanel({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-30 z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 border-b">
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-black"
            >
              <IoCloseOutline fontSize={"20px"} color="black"/>
            </button>
          </div>
          <h2 className="text-lg font-semibold">My Cart</h2>

        </div>
        <div className="p-4">Cart items will go here</div>
      </div>
    </div>
  );
}
