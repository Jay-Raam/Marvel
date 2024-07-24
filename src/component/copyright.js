import React from "react";

const Copyright = ({ text }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="copyright py-3">
      <p className="text-center mb-2">
        &copy; {currentYear} Copyright Received By
        <a
          href="https://jayasriraam.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1"
        >
          {text}
        </a>
      </p>
      <p className="text-center text-gray-600 text-sm md:text-base">
        ©
        <a
          href="https://marvel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1"
        >
          Marvel
        </a>{" "}
        2024
      </p>
    </div>
  );
};

export default Copyright;
