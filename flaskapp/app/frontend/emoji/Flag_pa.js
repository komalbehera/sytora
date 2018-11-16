import React from 'react';

export default function Flag_pa(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <path d="m32 2v30h30c0-16.6-13.4-30-30-30" fill="#ed4c5c" />
      <path d="M32,62V32H2C2,48.6,15.4,62,32,62z" fill="#2a5f9e" />
      <g fill="#f9f9f9">
        <path d="m32 62v-30h30c0 16.6-13.4 30-30 30" />
        <path d="M32,2v30H2C2,15.4,15.4,2,32,2z" />
      </g>
      <path fill="#2a5f9e" d="m17 20.7l3.1 2.3-1.2-3.8 3.1-2.4h-3.8l-1.2-3.8-1.2 3.8h-3.8l3.1 2.4-1.2 3.8z" />
      <path fill="#ed4c5c" d="m47 46.7l3.1 2.3-1.2-3.8 3.1-2.4h-3.8l-1.2-3.8-1.2 3.8h-3.8l3.1 2.4-1.2 3.8z" />
    </svg>
  );
}
