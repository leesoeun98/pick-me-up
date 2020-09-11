import React from "react";
import IconProps from "./icon";

function Icon({ style, fill }: IconProps) {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 512 512"
    >
      <g>
        <g>
          <path
            d="M459.36,100.64l-96-96C360.341,1.645,356.253-0.024,352,0H96c-26.51,0-48,21.49-48,48v416c0,26.51,21.49,48,48,48h320
			c26.51,0,48-21.49,48-48V112C464.025,107.747,462.355,103.66,459.36,100.64z M432,464c0,8.837-7.163,16-16,16H96
			c-8.837,0-16-7.163-16-16V48c0-8.837,7.163-16,16-16h240v64c0,17.673,14.327,32,32,32h64V464z"
          />
        </g>
      </g>
    </svg>
  );
}

export default React.memo(Icon);
