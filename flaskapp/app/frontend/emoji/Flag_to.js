import React from 'react';

export default function Flag_to(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <path d="M26,2.6C12.3,5.4,2,17.5,2,32h24V2.6z" fill="#f9f9f9" />
      <g fill="#c94747">
        <path d="M32,2c-2.1,0-4.1,0.2-6,0.6V32H2c0,16.6,13.4,30,30,30s30-13.4,30-30S48.6,2,32,2z" />
        <path d="m22 18h-5v-5h-4v5h-5v4h5v5h4v-5h5z" />
      </g>
    </svg>
  );
}
