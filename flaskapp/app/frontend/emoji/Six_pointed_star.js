import React from 'react';

export default function Six_pointed_star(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <g fill="#c28fef">
        <path d="m50.3 32l9.7-16h-19.5l-8.5-14-8.5 14h-19.5l9.7 16-9.7 16h19.5l8.5 14 8.5-14h19.5l-9.7-16m.4-11l-3.5 5.9-3.6-5.9h7.1m-6.6 11l-6.6 11h-11.1l-6.6-11 6.6-11h11.1l6.6 11m-12.1-20.3l2.6 4.3h-5.1l2.5-4.3m-18.7 9.3h7.2l-3.6 5.9-3.6-5.9m0 22l3.5-5.9 3.6 5.9h-7.1m18.7 9.3l-2.6-4.3h5.1l-2.5 4.3m15.2-15.2l3.5 5.9h-7.2l3.7-5.9" />
        <ellipse cx={32} cy={32} rx="4.2" ry="4.3" />
      </g>
    </svg>
  );
}
