import React from 'react';

export default function Snowman(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <circle cx="31.9" cy={45} r={17} fill="#d0d0d0" />
      <path d="m31.9 30c-8.3 0-15 6.7-15 15 0 8.3 6.7 15 15 15s15-6.7 15-15c0-8.3-6.7-15-15-15" fill="#fff" />
      <circle cx="31.9" cy="25.5" r={13} fill="#d0d0d0" />
      <path d="m31.9 14.5c-6.1 0-11 4.9-11 11 0 6.1 4.9 11 11 11s11-4.9 11-11c0-6-4.9-11-11-11" fill="#fff" />
      <circle cx="31.9" cy="26.4" r="2.5" fill="#ff8736" />
      <g fill="#3e4347">
        <circle cx="26.5" cy="21.8" r={2} />
        <circle cx="37.3" cy="21.8" r={2} />
      </g>
      <g fill="#94989b">
        <ellipse transform="matrix(.4226-.9063.9063.4226 7.7092 41.1541)" cx="36.2" cy="14.5" rx="2.6" ry="10.1" />
        <ellipse transform="matrix(.4226-.9063.9063.4226 18.1612 39.7774)" cx="40.3" cy="5.6" rx="1.9" ry="7.6" />
      </g>
      <path d="m39.5 7.4c-3.5-1.7-6.1-3.7-6.1-4.7l-2.3 9.2c-.3.7 1.7 2.4 4.5 3.7s5.4 1.8 5.7 1.1l5.7-7.7c-.7.7-4 0-7.5-1.6" fill="#3e4347" />
      <g fill="#89664c">
        <path d="m62 33.4l-5.8-1.7c1-1.1 2-2.1 3-3.2.3-.4.4-.9 0-1.3-.3-.3-1-.4-1.3 0-1.4 1.5-2.7 2.9-4.1 4.4v-8.4h-1.8v10.4c-1.7 1.8-3.4 3.6-5.1 5.4-.3.4-.4.9 0 1.3.3.3 1 .4 1.3 0 1.9-2 3.8-4 5.6-6 .3-.3.6-.7.9-1l6.7 1.9.6-1.8" />
        <path d="m12 33.5v-10.4h-1.8v8.4c-1.4-1.5-2.7-2.9-4.1-4.4-.3-.4-1-.3-1.3 0-.4.4-.3.9 0 1.3 1 1.1 2 2.1 3 3.2l-5.8 1.8.5 1.8 6.7-1.9c.4.4.8.8 1.2 1.3 1.8 1.9 3.6 3.8 5.4 5.7.3.4 1 .3 1.3 0 .4-.4.3-.9 0-1.3-1.7-1.9-3.4-3.7-5.1-5.5" />
      </g>
      <g fill="#3e4347">
        <path d="m30.3 46.3l-1.1-3.2 2.8-2 2.7 2-1 3.2z" />
        <path d="m30.3 56.1l-1.1-3.2 2.8-2 2.7 2-1 3.2z" />
        <path d="m31.9 34c-3.1 0-6-1.3-8.1-3.6-.4-.4-.3-1 .1-1.4.4-.4 1-.3 1.4.1 1.7 1.9 4.2 2.9 6.7 2.9 2.5 0 4.9-1.1 6.7-2.9.4-.4 1-.4 1.4-.1.4.4.4 1 .1 1.4-2.2 2.2-5.2 3.6-8.3 3.6" />
      </g>
    </svg>
  );
}
