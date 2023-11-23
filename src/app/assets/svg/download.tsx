import React from "react";

interface DownloadIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

const DownloadIcon: React.FC<DownloadIconProps> = ({ width = 16, height = 16, fill = "#FCFCFC" }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M3.5 13.3334C3.5 13.0572 3.72386 12.8334 4 12.8334L12 12.8334C12.2761 12.8334 12.5 13.0572 12.5 13.3334C12.5 13.6095 12.2761 13.8334 12 13.8334L4 13.8334C3.72386 13.8334 3.5 13.6095 3.5 13.3334Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M7.64644 2.31307C7.8417 2.11781 8.15828 2.11781 8.35354 2.31307L10.6869 4.64641C10.8821 4.84167 10.8821 5.15825 10.6869 5.35351C10.4916 5.54877 10.175 5.54877 9.97977 5.35351L8.49999 3.87373V10.6666C8.49999 10.9428 8.27613 11.1666 7.99999 11.1666C7.72385 11.1666 7.49999 10.9428 7.49999 10.6666V3.87373L6.02021 5.35351C5.82495 5.54877 5.50837 5.54877 5.3131 5.35351C5.11784 5.15825 5.11784 4.84167 5.3131 4.64641L7.64644 2.31307Z"
        fill={fill}
      />
    </svg>
  );
};

export default DownloadIcon;
