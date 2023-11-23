import React from "react";

interface ArrowDownProps {
  width?: number;
  height?: number;
  fill?: string;
}

const ArrowDown: React.FC<ArrowDownProps> = ({ width = 12, height = 7, fill = "#AA5AFA" }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.558058 0.558058C0.802136 0.313981 1.19786 0.313981 1.44194 0.558058L6 5.11612L10.5581 0.558058C10.8021 0.313981 11.1979 0.313981 11.4419 0.558058C11.686 0.802136 11.686 1.19786 11.4419 1.44194L6.44194 6.44194C6.19786 6.68602 5.80214 6.68602 5.55806 6.44194L0.558058 1.44194C0.313981 1.19786 0.313981 0.802136 0.558058 0.558058Z"
        fill={fill}
      />
    </svg>
  );
};

export default ArrowDown;
