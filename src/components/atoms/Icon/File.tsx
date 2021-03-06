import React from "react";
import IconProps from "./icon";

function Icon({ style }: IconProps) {
  return (
    <svg
      style={style}
      viewBox="0 0 11 22"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Icons"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Rounded" transform="translate(-855.000000, -2015.000000)">
          <g id="Editor" transform="translate(100.000000, 1960.000000)">
            <g
              id="-Round-/-Editor-/-attach_file"
              transform="translate(748.000000, 54.000000)"
            >
              <g>
                <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                <path
                  d="M16.5,6.75 L16.5,17.33 C16.5,19.42 14.97,21.28 12.89,21.48 C10.5,21.71 8.5,19.84 8.5,17.5 L8.5,5.14 C8.5,3.83 9.44,2.64 10.74,2.51 C12.24,2.36 13.5,3.53 13.5,5 L13.5,15.5 C13.5,16.05 13.05,16.5 12.5,16.5 C11.95,16.5 11.5,16.05 11.5,15.5 L11.5,6.75 C11.5,6.34 11.16,6 10.75,6 C10.34,6 10,6.34 10,6.75 L10,15.36 C10,16.67 10.94,17.86 12.24,17.99 C13.74,18.14 15,16.97 15,15.5 L15,5.17 C15,3.08 13.47,1.22 11.39,1.02 C9.01,0.79 7,2.66 7,5 L7,17.27 C7,20.14 9.1,22.71 11.96,22.98 C15.25,23.28 18,20.72 18,17.5 L18,6.75 C18,6.34 17.66,6 17.25,6 C16.84,6 16.5,6.34 16.5,6.75 Z"
                  id="🔹-Icon-Color"
                  fill="#1D1D1D"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default React.memo(Icon);
