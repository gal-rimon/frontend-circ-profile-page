export default function ArrowUp({ color }: { color: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
    >
      <path
        d="M0 11.5C0 5.14718 5.14718 0 11.5 0C17.8528 0 23 5.14718 23 11.5C23 17.8528 17.8528 23 11.5 23C5.14718 23 0 17.8528 0 11.5ZM6.65887 12.8401L10.0161 9.33911V17.8065C10.0161 18.4232 10.5123 18.9194 11.129 18.9194H11.871C12.4877 18.9194 12.9839 18.4232 12.9839 17.8065V9.33911L16.3411 12.8401C16.7724 13.2899 17.4911 13.2992 17.9317 12.8587L18.4371 12.3486C18.873 11.9127 18.873 11.2079 18.4371 10.7766L12.2883 4.62319C11.8524 4.1873 11.1476 4.1873 10.7163 4.62319L4.55827 10.7766C4.12238 11.2125 4.12238 11.9173 4.55827 12.3486L5.06371 12.8587C5.50887 13.2992 6.22762 13.2899 6.65887 12.8401Z"
        fill={color}
        // "#44A1D7"
      />
    </svg>
  );
}
