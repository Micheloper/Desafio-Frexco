import "./Logo.css";

export const Logo = () => {
  function setTextAnimation(
    delay,
    duration,
    strokeWidth,
    timingFunction,
    strokeColor,
    repeat
  ) {
    let paths = document.querySelectorAll("path");
    let mode = repeat ? "infinite" : "forwards";
    for (let i = 0; i < paths.length; i++) {
      const path = paths[i];
      const length = path.getTotalLength();
      path.style["stroke-dashoffset"] = `${length}px`;
      path.style["stroke-dasharray"] = `${length}px`;
      path.style["stroke-width"] = `${strokeWidth}px`;
      path.style["stroke"] = `${strokeColor}`;
      path.style[
        "animation"
      ] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
      path.style["animation-delay"] = `${i * delay}s`;
    }
  }
  setTextAnimation(0.1, 3.6, 1, "linear", "#ffffff", true);
  return (
    <div className="svg-holder">
      <svg
        width="229.13"
        height="68.88"
        viewBox="0 0 529.13 68.88"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="svgGroup"
          strokeLinecap="round"
          fillRule="evenodd"
          fontSize="9pt"
          stroke="#000"
          strokeWidth="0.25mm"
          fill="none"
          style={{ stroke: "#000", strokeWidth: "0.25mm", fill: "none" }}
        >
          <path
            d="M 30.03 52.64 L 33.95 30.31 L 10.57 30.31 L 6.65 52.64 L 0 52.64 L 8.61 3.64 L 15.26 3.64 L 11.55 24.57 L 34.93 24.57 L 38.64 3.64 L 45.29 3.64 L 36.68 52.64 L 30.03 52.64 Z"
            id={1}
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 61.183 53.049 A 21.487 21.487 0 0 0 65.59 53.48 A 23.535 23.535 0 0 0 68.581 53.295 A 18.343 18.343 0 0 0 76.195 50.61 Q 80.71 47.74 83.16 42.805 Q 85.61 37.87 85.61 31.85 A 20.591 20.591 0 0 0 85.447 29.222 A 16.311 16.311 0 0 0 83.545 23.31 Q 81.48 19.6 77.7 17.5 A 16.11 16.11 0 0 0 73.147 15.831 A 21.487 21.487 0 0 0 68.74 15.4 A 23.384 23.384 0 0 0 65.618 15.603 A 18.097 18.097 0 0 0 58.17 18.27 Q 53.69 21.14 51.205 26.04 A 22.165 22.165 0 0 0 49.59 30.239 A 25.685 25.685 0 0 0 48.72 37.03 A 20.527 20.527 0 0 0 48.819 39.064 A 16.669 16.669 0 0 0 50.785 45.535 Q 52.85 49.28 56.63 51.38 A 16.11 16.11 0 0 0 61.183 53.049 Z M 65.8 47.88 A 14.26 14.26 0 0 0 69.355 47.456 A 11.156 11.156 0 0 0 72.975 45.815 Q 75.95 43.75 77.56 40.25 A 17.652 17.652 0 0 0 79.056 34.657 A 21.734 21.734 0 0 0 79.17 32.41 A 14.107 14.107 0 0 0 78.782 29.043 A 11.749 11.749 0 0 0 77.91 26.635 Q 76.65 24.08 74.27 22.54 A 9.45 9.45 0 0 0 70.724 21.182 A 12.713 12.713 0 0 0 68.53 21 A 13.87 13.87 0 0 0 64.792 21.485 A 11.363 11.363 0 0 0 61.39 23.065 A 13.341 13.341 0 0 0 56.821 28.521 A 15.784 15.784 0 0 0 56.77 28.63 A 17.652 17.652 0 0 0 55.274 34.224 A 21.734 21.734 0 0 0 55.16 36.47 A 13.677 13.677 0 0 0 55.652 40.189 A 12.098 12.098 0 0 0 56.42 42.21 Q 57.68 44.8 60.06 46.34 A 9.45 9.45 0 0 0 63.606 47.698 A 12.713 12.713 0 0 0 65.8 47.88 Z"
            id={2}
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 91.84 52.64 L 96.46 26.46 A 5.581 5.581 0 0 0 96.518 26.109 Q 96.546 25.897 96.565 25.655 A 12.154 12.154 0 0 0 96.599 24.84 A 13.53 13.53 0 0 0 96.6 24.71 A 5.361 5.361 0 0 0 96.512 23.702 Q 96.406 23.15 96.173 22.73 A 2.364 2.364 0 0 0 95.48 21.945 A 4.033 4.033 0 0 0 94.139 21.329 Q 93.578 21.181 92.918 21.149 A 7.744 7.744 0 0 0 92.54 21.14 L 94.71 16.24 A 12.38 12.38 0 0 1 96.911 16.423 Q 98.136 16.645 99.103 17.135 A 6.062 6.062 0 0 1 100.415 18.025 A 5.681 5.681 0 0 1 102.081 20.749 Q 102.348 21.675 102.398 22.787 A 11.615 11.615 0 0 1 102.41 23.31 L 102.41 24.71 A 22.042 22.042 0 0 1 103.942 21.624 Q 105.535 18.994 107.625 17.57 Q 110.81 15.4 114.87 15.4 A 17.739 17.739 0 0 1 116.103 15.441 Q 116.949 15.5 117.635 15.645 Q 118.519 15.833 119.178 16.082 A 6.37 6.37 0 0 1 119.56 16.24 L 116.76 22.4 Q 115.92 22.05 115.01 21.91 Q 114.1 21.77 112.91 21.77 A 7.646 7.646 0 0 0 109.735 22.485 A 10.709 10.709 0 0 0 107.905 23.555 Q 106.074 24.87 104.509 27.459 A 24.407 24.407 0 0 0 103.425 29.47 A 27.536 27.536 0 0 0 102.14 32.673 Q 100.997 36.079 100.17 40.81 L 98.14 52.64 L 91.84 52.64 Z"
            id={3}
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 120.89 23.03 L 121.8 17.57 L 128.24 17.57 L 131.6 6.09 L 136.43 6.09 L 134.4 17.57 L 144.48 17.57 L 143.57 23.03 L 133.42 23.03 L 130.48 40.04 A 21.532 21.532 0 0 0 130.345 40.873 A 16.994 16.994 0 0 0 130.27 41.475 Q 130.2 42.14 130.2 42.7 A 6.576 6.576 0 0 0 130.374 44.256 A 4.435 4.435 0 0 0 131.67 46.515 A 5.013 5.013 0 0 0 134.237 47.769 A 7.104 7.104 0 0 0 135.52 47.88 Q 137.202 47.88 138.451 47.472 A 6.197 6.197 0 0 0 138.95 47.285 A 28.899 28.899 0 0 0 140.28 46.681 A 22.435 22.435 0 0 0 141.47 46.06 L 142.24 51.52 A 11.948 11.948 0 0 1 140.974 52.15 Q 140.312 52.434 139.538 52.69 A 22.626 22.626 0 0 1 138.915 52.885 A 14.057 14.057 0 0 1 136.386 53.382 A 18.056 18.056 0 0 1 134.47 53.48 Q 131.88 53.48 129.465 52.43 Q 127.05 51.38 125.51 49.105 A 8.423 8.423 0 0 1 124.343 46.443 Q 124.063 45.347 123.993 44.065 A 16.062 16.062 0 0 1 123.97 43.19 Q 123.97 41.674 124.241 39.819 A 32.153 32.153 0 0 1 124.25 39.76 L 127.12 23.03 L 120.89 23.03 Z"
            id={4}
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 160.58 16.24 L 154.21 52.64 L 147.91 52.64 L 154.28 16.24 L 160.58 16.24 Z M 157.719 9.887 A 5.294 5.294 0 0 0 158.9 10.01 A 6.2 6.2 0 0 0 159.035 10.009 A 4.723 4.723 0 0 0 162.4 8.61 A 4.608 4.608 0 0 0 163.532 6.791 A 5.497 5.497 0 0 0 163.8 5.04 Q 163.8 3.5 162.785 2.345 A 3.115 3.115 0 0 0 162.367 1.949 Q 161.79 1.496 160.991 1.314 A 5.294 5.294 0 0 0 159.81 1.19 A 6.263 6.263 0 0 0 159.546 1.196 A 4.759 4.759 0 0 0 156.31 2.555 Q 154.91 3.92 154.91 6.16 Q 154.91 7.7 155.925 8.855 A 3.115 3.115 0 0 0 156.343 9.251 Q 156.92 9.704 157.719 9.887 Z"
            id={5}
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 181.3 11.76 L 180.25 17.57 L 191.03 17.57 L 190.05 23.03 L 179.27 23.03 L 173.11 57.68 A 24.696 24.696 0 0 1 172.328 60.857 Q 171.134 64.547 168.947 66.358 A 5.59 5.59 0 0 1 168.945 66.36 A 10.933 10.933 0 0 1 162.69 68.836 A 14.115 14.115 0 0 1 161.56 68.88 A 14.754 14.754 0 0 1 158.985 68.664 A 12.133 12.133 0 0 1 157.325 68.25 A 11.915 11.915 0 0 1 154.893 67.152 A 10.491 10.491 0 0 1 153.93 66.5 L 156.45 61.32 A 8.196 8.196 0 0 0 158.274 62.591 A 9.517 9.517 0 0 0 158.76 62.825 A 6.924 6.924 0 0 0 161.534 63.42 A 7.919 7.919 0 0 0 161.63 63.42 Q 163.52 63.42 164.92 62.09 A 5.037 5.037 0 0 0 165.907 60.744 Q 166.519 59.566 166.81 57.82 L 172.97 23.03 L 167.37 23.03 L 168.35 17.57 L 173.95 17.57 L 175 11.97 A 24.142 24.142 0 0 1 175.93 8.387 Q 176.567 6.566 177.462 5.176 A 10.19 10.19 0 0 1 179.585 2.765 A 12.114 12.114 0 0 1 185.205 0.25 A 16.747 16.747 0 0 1 188.16 0 Q 191.03 0 193.48 0.735 A 25.96 25.96 0 0 1 196.217 1.719 A 21.042 21.042 0 0 1 197.89 2.52 L 195.44 7.84 Q 193.83 7 192.115 6.3 A 9.086 9.086 0 0 0 190.125 5.754 Q 189.173 5.6 188.09 5.6 A 7.413 7.413 0 0 0 185.762 5.953 A 6.356 6.356 0 0 0 183.68 7.105 Q 182.094 8.417 181.465 10.977 A 12.314 12.314 0 0 0 181.3 11.76 Z"
            id={6}
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 192.92 52.64 L 197.54 26.46 A 5.581 5.581 0 0 0 197.598 26.109 Q 197.626 25.897 197.645 25.655 A 12.154 12.154 0 0 0 197.679 24.84 A 13.53 13.53 0 0 0 197.68 24.71 A 5.361 5.361 0 0 0 197.592 23.702 Q 197.486 23.15 197.253 22.73 A 2.364 2.364 0 0 0 196.56 21.945 A 4.033 4.033 0 0 0 195.219 21.329 Q 194.658 21.181 193.998 21.149 A 7.744 7.744 0 0 0 193.62 21.14 L 195.79 16.24 A 12.38 12.38 0 0 1 197.991 16.423 Q 199.216 16.645 200.183 17.135 A 6.062 6.062 0 0 1 201.495 18.025 A 5.681 5.681 0 0 1 203.161 20.749 Q 203.428 21.675 203.478 22.787 A 11.615 11.615 0 0 1 203.49 23.31 L 203.49 24.71 A 22.042 22.042 0 0 1 205.022 21.624 Q 206.615 18.994 208.705 17.57 Q 211.89 15.4 215.95 15.4 A 17.739 17.739 0 0 1 217.183 15.441 Q 218.029 15.5 218.715 15.645 Q 219.599 15.833 220.258 16.082 A 6.37 6.37 0 0 1 220.64 16.24 L 217.84 22.4 Q 217 22.05 216.09 21.91 Q 215.18 21.77 213.99 21.77 A 7.646 7.646 0 0 0 210.815 22.485 A 10.709 10.709 0 0 0 208.985 23.555 Q 207.154 24.87 205.589 27.459 A 24.407 24.407 0 0 0 204.505 29.47 A 27.536 27.536 0 0 0 203.22 32.673 Q 202.077 36.079 201.25 40.81 L 199.22 52.64 L 192.92 52.64 Z"
            id={7}
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 221.2 39.41 L 225.19 16.24 L 231.49 16.24 L 227.43 39.27 Q 227.36 39.97 227.29 40.495 Q 227.22 41.02 227.22 41.65 A 8.635 8.635 0 0 0 227.397 43.456 Q 227.631 44.553 228.178 45.374 A 4.605 4.605 0 0 0 229.04 46.34 Q 230.86 47.88 233.31 47.88 A 9.005 9.005 0 0 0 237.16 46.993 A 11.607 11.607 0 0 0 238.525 46.235 A 13.562 13.562 0 0 0 241.349 43.776 A 18.153 18.153 0 0 0 243.04 41.51 Q 245 38.43 245.77 34.09 L 248.92 16.24 L 255.22 16.24 L 250.6 42.77 A 5.581 5.581 0 0 0 250.542 43.121 Q 250.514 43.333 250.495 43.575 A 12.154 12.154 0 0 0 250.461 44.391 A 13.53 13.53 0 0 0 250.46 44.52 A 5.361 5.361 0 0 0 250.548 45.528 Q 250.654 46.08 250.887 46.501 A 2.364 2.364 0 0 0 251.58 47.285 A 4.033 4.033 0 0 0 252.921 47.901 Q 253.482 48.049 254.142 48.081 A 7.744 7.744 0 0 0 254.52 48.09 L 252.35 52.99 A 12.375 12.375 0 0 1 250.162 52.809 Q 247.947 52.41 246.575 51.135 A 5.71 5.71 0 0 1 245.087 48.786 Q 244.58 47.335 244.58 45.36 L 244.58 44.73 A 22.396 22.396 0 0 1 241.292 49.13 A 13.639 13.639 0 0 1 231.21 53.48 Q 228.41 53.48 226.065 52.22 Q 223.72 50.96 222.32 48.685 A 9.304 9.304 0 0 1 221.085 45.322 A 12.374 12.374 0 0 1 220.92 43.26 Q 220.92 42.35 220.99 41.405 A 32.556 32.556 0 0 1 221.119 40.056 A 38.437 38.437 0 0 1 221.2 39.41 Z"
            id={8}
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 261.1 23.03 L 262.01 17.57 L 268.45 17.57 L 271.81 6.09 L 276.64 6.09 L 274.61 17.57 L 284.69 17.57 L 283.78 23.03 L 273.63 23.03 L 270.69 40.04 A 21.532 21.532 0 0 0 270.555 40.873 A 16.994 16.994 0 0 0 270.48 41.475 Q 270.41 42.14 270.41 42.7 A 6.576 6.576 0 0 0 270.584 44.256 A 4.435 4.435 0 0 0 271.88 46.515 A 5.013 5.013 0 0 0 274.447 47.769 A 7.104 7.104 0 0 0 275.73 47.88 Q 277.412 47.88 278.661 47.472 A 6.197 6.197 0 0 0 279.16 47.285 A 28.899 28.899 0 0 0 280.49 46.681 A 22.435 22.435 0 0 0 281.68 46.06 L 282.45 51.52 A 11.948 11.948 0 0 1 281.184 52.15 Q 280.522 52.434 279.748 52.69 A 22.626 22.626 0 0 1 279.125 52.885 A 14.057 14.057 0 0 1 276.596 53.382 A 18.056 18.056 0 0 1 274.68 53.48 Q 272.09 53.48 269.675 52.43 Q 267.26 51.38 265.72 49.105 A 8.423 8.423 0 0 1 264.553 46.443 Q 264.273 45.347 264.203 44.065 A 16.062 16.062 0 0 1 264.18 43.19 Q 264.18 41.674 264.451 39.819 A 32.153 32.153 0 0 1 264.46 39.76 L 267.33 23.03 L 261.1 23.03 Z"
            id={9}
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 300.79 16.24 L 294.42 52.64 L 288.12 52.64 L 294.49 16.24 L 300.79 16.24 Z M 297.929 9.887 A 5.294 5.294 0 0 0 299.11 10.01 A 6.2 6.2 0 0 0 299.245 10.009 A 4.723 4.723 0 0 0 302.61 8.61 A 4.608 4.608 0 0 0 303.742 6.791 A 5.497 5.497 0 0 0 304.01 5.04 Q 304.01 3.5 302.995 2.345 A 3.115 3.115 0 0 0 302.577 1.949 Q 302 1.496 301.201 1.314 A 5.294 5.294 0 0 0 300.02 1.19 A 6.263 6.263 0 0 0 299.756 1.196 A 4.759 4.759 0 0 0 296.52 2.555 Q 295.12 3.92 295.12 6.16 Q 295.12 7.7 296.135 8.855 A 3.115 3.115 0 0 0 296.553 9.251 Q 297.13 9.704 297.929 9.887 Z"
            id={10}
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 327.39 52.64 L 336 3.64 L 364.7 3.64 L 363.72 9.38 L 341.6 9.38 L 339.01 24.36 L 357.35 24.36 L 356.37 29.82 L 338.03 29.82 L 334.04 52.64 L 327.39 52.64 Z"
            id={12}
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 363.58 52.64 L 368.2 26.46 A 5.581 5.581 0 0 0 368.258 26.109 Q 368.286 25.897 368.305 25.655 A 12.154 12.154 0 0 0 368.339 24.84 A 13.53 13.53 0 0 0 368.34 24.71 A 5.361 5.361 0 0 0 368.252 23.702 Q 368.146 23.15 367.913 22.73 A 2.364 2.364 0 0 0 367.22 21.945 A 4.033 4.033 0 0 0 365.879 21.329 Q 365.318 21.181 364.658 21.149 A 7.744 7.744 0 0 0 364.28 21.14 L 366.45 16.24 A 12.38 12.38 0 0 1 368.651 16.423 Q 369.876 16.645 370.843 17.135 A 6.062 6.062 0 0 1 372.155 18.025 A 5.681 5.681 0 0 1 373.821 20.749 Q 374.088 21.675 374.138 22.787 A 11.615 11.615 0 0 1 374.15 23.31 L 374.15 24.71 A 22.042 22.042 0 0 1 375.682 21.624 Q 377.275 18.994 379.365 17.57 Q 382.55 15.4 386.61 15.4 A 17.739 17.739 0 0 1 387.843 15.441 Q 388.689 15.5 389.375 15.645 Q 390.259 15.833 390.918 16.082 A 6.37 6.37 0 0 1 391.3 16.24 L 388.5 22.4 Q 387.66 22.05 386.75 21.91 Q 385.84 21.77 384.65 21.77 A 7.646 7.646 0 0 0 381.475 22.485 A 10.709 10.709 0 0 0 379.645 23.555 Q 377.814 24.87 376.249 27.459 A 24.407 24.407 0 0 0 375.165 29.47 A 27.536 27.536 0 0 0 373.88 32.673 Q 372.737 36.079 371.91 40.81 L 369.88 52.64 L 363.58 52.64 Z"
            id={13}
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 417.76 45.15 L 418.32 50.75 A 23.732 23.732 0 0 1 416.588 51.47 Q 415.013 52.058 413 52.605 A 24.659 24.659 0 0 1 408.929 53.336 A 31.551 31.551 0 0 1 405.86 53.48 Q 401.24 53.48 397.705 51.485 Q 394.17 49.49 392.175 45.745 A 16.589 16.589 0 0 1 390.509 40.817 A 22.407 22.407 0 0 1 390.18 36.89 A 24.369 24.369 0 0 1 391.647 28.387 A 22.994 22.994 0 0 1 392.595 26.18 Q 395.01 21.28 399.455 18.34 A 17.72 17.72 0 0 1 407.495 15.521 A 22.376 22.376 0 0 1 409.85 15.4 Q 413.91 15.4 416.745 16.94 A 12.536 12.536 0 0 1 419.492 18.929 A 10.672 10.672 0 0 1 421.12 20.93 Q 422.66 23.38 422.66 26.18 A 13.428 13.428 0 0 1 422.382 28.985 Q 421.949 31.015 420.84 32.55 Q 419.02 35.07 416.15 36.435 A 23.249 23.249 0 0 1 410.369 38.287 A 25.93 25.93 0 0 1 409.955 38.36 A 40.502 40.502 0 0 1 405.727 38.854 A 34.191 34.191 0 0 1 403.62 38.92 Q 401.73 38.92 399.875 38.745 A 76.012 76.012 0 0 1 398.339 38.585 Q 397.408 38.478 396.62 38.36 A 14.524 14.524 0 0 0 397.303 41.401 Q 398.161 43.861 399.91 45.43 A 9.44 9.44 0 0 0 404.811 47.717 A 13.035 13.035 0 0 0 406.91 47.88 A 23.009 23.009 0 0 0 410.12 47.667 A 17.072 17.072 0 0 0 413.14 46.97 Q 415.87 46.06 417.76 45.15 Z M 409.36 20.72 A 11.274 11.274 0 0 0 404.691 21.684 A 10.974 10.974 0 0 0 403.41 22.365 Q 400.75 24.01 399.035 26.845 A 16.85 16.85 0 0 0 397.086 31.658 A 20.274 20.274 0 0 0 396.76 33.32 Q 398.37 33.6 400.015 33.775 A 30.609 30.609 0 0 0 401.965 33.917 A 39.45 39.45 0 0 0 403.62 33.95 A 34.444 34.444 0 0 0 407.056 33.79 Q 410.572 33.436 412.93 32.305 A 6.234 6.234 0 0 0 415.003 30.761 Q 416.042 29.55 416.285 27.795 A 8.188 8.188 0 0 0 416.36 26.67 A 5.429 5.429 0 0 0 414.64 22.664 A 7.249 7.249 0 0 0 414.435 22.47 A 6.564 6.564 0 0 0 411.295 20.909 A 9.455 9.455 0 0 0 409.36 20.72 Z"
            id={14}
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 422.59 49.07 L 437.57 33.81 L 426.93 19.53 L 432.39 15.47 L 441.63 29.89 L 454.37 15.89 L 458.71 19.95 L 444.78 34.16 L 455.98 49.42 L 450.73 53.27 L 440.79 38.15 L 426.72 53.06 L 422.59 49.07 Z"
            id={15}
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 491.26 18.2 L 488.67 23.59 Q 486.92 22.47 484.89 21.735 A 12.314 12.314 0 0 0 481.9 21.072 A 15.115 15.115 0 0 0 480.41 21 A 12.335 12.335 0 0 0 476.43 21.625 A 10.955 10.955 0 0 0 473.655 23.03 A 13.274 13.274 0 0 0 469.48 27.836 A 15.937 15.937 0 0 0 469.14 28.525 A 17.308 17.308 0 0 0 467.661 33.926 A 21.546 21.546 0 0 0 467.53 36.33 A 16.996 16.996 0 0 0 467.863 39.798 Q 468.477 42.745 470.225 44.765 A 8.844 8.844 0 0 0 476.361 47.831 A 12.342 12.342 0 0 0 477.47 47.88 A 19.08 19.08 0 0 0 479.788 47.746 Q 481.066 47.59 482.16 47.25 A 26.362 26.362 0 0 0 484.561 46.381 A 21.905 21.905 0 0 0 485.87 45.78 L 486.64 51.31 Q 484.89 52.08 482.405 52.78 Q 480.316 53.369 477.509 53.462 A 32.641 32.641 0 0 1 476.42 53.48 Q 471.87 53.48 468.405 51.45 Q 464.94 49.42 463.015 45.745 A 16.644 16.644 0 0 1 461.339 40.534 A 21.934 21.934 0 0 1 461.09 37.17 A 24.945 24.945 0 0 1 462.392 29.044 A 23.16 23.16 0 0 1 463.505 26.355 Q 465.92 21.42 470.365 18.41 A 17.456 17.456 0 0 1 478.113 15.568 A 22.497 22.497 0 0 1 480.9 15.4 A 23.019 23.019 0 0 1 483.823 15.577 A 16.832 16.832 0 0 1 486.745 16.205 A 22.859 22.859 0 0 1 489.427 17.231 A 18.093 18.093 0 0 1 491.26 18.2 Z"
            id={16}
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 504.703 53.049 A 21.487 21.487 0 0 0 509.11 53.48 A 23.535 23.535 0 0 0 512.101 53.295 A 18.343 18.343 0 0 0 519.715 50.61 Q 524.23 47.74 526.68 42.805 Q 529.13 37.87 529.13 31.85 A 20.591 20.591 0 0 0 528.967 29.222 A 16.311 16.311 0 0 0 527.065 23.31 Q 525 19.6 521.22 17.5 A 16.11 16.11 0 0 0 516.667 15.831 A 21.487 21.487 0 0 0 512.26 15.4 A 23.384 23.384 0 0 0 509.138 15.603 A 18.097 18.097 0 0 0 501.69 18.27 Q 497.21 21.14 494.725 26.04 A 22.165 22.165 0 0 0 493.11 30.239 A 25.685 25.685 0 0 0 492.24 37.03 A 20.527 20.527 0 0 0 492.339 39.064 A 16.669 16.669 0 0 0 494.305 45.535 Q 496.37 49.28 500.15 51.38 A 16.11 16.11 0 0 0 504.703 53.049 Z M 509.32 47.88 A 14.26 14.26 0 0 0 512.875 47.456 A 11.156 11.156 0 0 0 516.495 45.815 Q 519.47 43.75 521.08 40.25 A 17.652 17.652 0 0 0 522.576 34.657 A 21.734 21.734 0 0 0 522.69 32.41 A 14.107 14.107 0 0 0 522.302 29.043 A 11.749 11.749 0 0 0 521.43 26.635 Q 520.17 24.08 517.79 22.54 A 9.45 9.45 0 0 0 514.244 21.182 A 12.713 12.713 0 0 0 512.05 21 A 13.87 13.87 0 0 0 508.312 21.485 A 11.363 11.363 0 0 0 504.91 23.065 A 13.341 13.341 0 0 0 500.341 28.521 A 15.784 15.784 0 0 0 500.29 28.63 A 17.652 17.652 0 0 0 498.794 34.224 A 21.734 21.734 0 0 0 498.68 36.47 A 13.677 13.677 0 0 0 499.172 40.189 A 12.098 12.098 0 0 0 499.94 42.21 Q 501.2 44.8 503.58 46.34 A 9.45 9.45 0 0 0 507.126 47.698 A 12.713 12.713 0 0 0 509.32 47.88 Z"
            id={17}
            vectorEffect="non-scaling-stroke"
          />
        </g>
      </svg>
    </div>
  );
};
