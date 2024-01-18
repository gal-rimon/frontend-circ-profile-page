export default function BgShape4({ color }: { color: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="99"
      viewBox="0 0 28 99"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.1258 98.0362C23.3256 83.6787 28 67.1245 28 49.5C28 31.6536 23.2071 14.9046 14.8144 0.422485C5.46044 14.295 0 31.0098 0 49C0 67.1889 5.58175 84.0742 15.1258 98.0362Z"
        fill={color}
        // "#FDD282"
      />
    </svg>
  );
}
