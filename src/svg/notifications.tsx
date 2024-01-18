export default function Notifications({ color }: { color: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 23 25"
      fill="none"
    >
      <path
        d="M11.6 25C13.3345 25 14.7414 23.6011 14.7414 21.875H8.45863C8.45863 23.6011 9.86555 25 11.6 25ZM22.1772 17.6899C21.2284 16.6763 19.4532 15.1514 19.4532 10.1562C19.4532 6.3623 16.7778 3.3252 13.1704 2.58008V1.5625C13.1704 0.699707 12.4672 0 11.6 0C10.7328 0 10.0296 0.699707 10.0296 1.5625V2.58008C6.42216 3.3252 3.74682 6.3623 3.74682 10.1562C3.74682 15.1514 1.9716 16.6763 1.02285 17.6899C0.728209 18.0049 0.597585 18.3813 0.60004 18.75C0.605442 19.5508 1.23745 20.3125 2.17637 20.3125H21.0236C21.9626 20.3125 22.5951 19.5508 22.6 18.75C22.6024 18.3813 22.4718 18.0044 22.1772 17.6899Z"
        fill={color}
      />
    </svg>
  );
}
