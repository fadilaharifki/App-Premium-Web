import React from "react";

interface PenaIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

const PenaIcon: React.FC<PenaIconProps> = ({ width = 20, height = 21, fill = "#FCFCFC" }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M17.1801 7.95383C18.0751 7.05888 18.0751 5.60787 17.1801 4.71292L16.0016 3.53441C15.1066 2.63946 13.6556 2.63946 12.7607 3.53441L3.51431 12.7808C3.1338 13.1613 2.89934 13.6636 2.85198 14.1996L2.65025 16.4833C2.57037 17.3875 3.32706 18.1441 4.23125 18.0643L6.51493 17.8625C7.05095 17.8152 7.55322 17.5807 7.93372 17.2002L17.1801 7.95383ZM16.2962 5.5968C16.703 6.0036 16.703 6.66315 16.2962 7.06994L15.5048 7.86133L12.8532 5.20968L13.6446 4.41829C14.0514 4.0115 14.7109 4.0115 15.1177 4.41829L16.2962 5.5968ZM11.9693 6.09356L14.6209 8.74521L7.04984 16.3163C6.87688 16.4893 6.64858 16.5959 6.40493 16.6174L4.12125 16.8191C3.99208 16.8305 3.88399 16.7224 3.8954 16.5933L4.09713 14.3096C4.11866 14.0659 4.22523 13.8376 4.39819 13.6647L11.9693 6.09356Z"
        fill={fill}
      />
    </svg>
  );
};

export default PenaIcon;
