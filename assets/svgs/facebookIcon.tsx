import React from "react";
import { IconProps } from "@/common/interfaces/icons-interface";

function FacebookIcon({ color }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.945 21.999V13.165H7V9.48402H9.945V6.53902C9.945 3.49602 11.871 1.99902 14.585 1.99902C15.885 1.99902 17.003 2.09602 17.329 2.13902V5.31902H15.446C13.97 5.31902 13.626 6.02202 13.626 7.05102V9.48402H17.306L16.57 13.164H13.626L13.685 21.999"
        fill="#1976D2"
      />
    </svg>
  );
}

export default FacebookIcon;
