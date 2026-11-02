import React from "react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden relative font-poppins">
      {children}
    </div>
  );
}
