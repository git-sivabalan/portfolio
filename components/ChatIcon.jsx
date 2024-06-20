// components/ChatIcon.js
import React from "react";

const ChatIcon = ({ onClick }) => {
    
  return (
    <div
      onClick={onClick}
      className="fixed bottom-4 mb-5 z-50 left-4 bg-blue-500 text-white p-3 rounded-full cursor-pointer shadow-lg"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 10h.01M12 10h.01M16 10h.01M9 16h6M21 12c0 3.866-3.582 7-8 7-1.867 0-3.582-.636-4.927-1.698L3 21l1.698-4.927C3.636 15.582 3 13.867 3 12c0-4.418 3.134-8 7-8s7 3.582 7 8z"
        />
      </svg>
    </div>
  );
};

export default ChatIcon;
