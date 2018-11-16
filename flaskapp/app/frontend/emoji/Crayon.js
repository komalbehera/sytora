import React from 'react';

export default function Crayon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <path d="m18.3 51.7l-6.1-6.1c-.9-.9-2.2-.8-2.9.3l-6.9 11.7c-.7 1.1-.5 2.7.4 3.6.9.9 2.5 1 3.6.4l11.6-6.9c1.1-.7 1.3-2 .3-3" fill="#71ad3e" />
      <path d="m21.6 55.2c-1.2 1.2-3.1 1.1-4.3-.1l-8.4-8.4c-1.2-1.2-1.2-3.1-.1-4.3l39.5-39.5c1.2-1.2 3.1-1.1 4.3.1l8.4 8.4c1.2 1.2 1.2 3.1.1 4.3l-39.5 39.5" fill="#83bf4f" />
      <path transform="matrix(.7071-.7071.7071.7071-10.2915 33.2278)" fill="#3e4347" d="m11.5 20h46.9v18.1h-46.9z" />
      <g fill="#52c18e">
        <path transform="matrix(.7071-.7071.7071.7071 1.4299 38.0826)" d="m44.4 8.3h4.6v18.1h-4.6z" />
        <path transform="matrix(.7071-.7071.7071.7071-22.013 28.3741)" d="m20.9 31.7h4.6v18.1h-4.6z" />
        <path d="m35 29c-4.3 4.3-10.7 4.9-14.2 1.4l15.6-15.6c3.5 3.6 2.9 9.9-1.4 14.2" />
      </g>
    </svg>
  );
}
