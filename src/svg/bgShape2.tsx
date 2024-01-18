export default function BgShape2({ color }: { color: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="79"
      viewBox="0 0 23 79"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.3437 78.604C20.295 66.268 23 52.9256 23 39C23 25.338 20.3965 12.2374 15.6225 0.0977084C5.93564 10.3892 0 24.2514 0 39.5C0 54.6018 5.82187 68.3437 15.3437 78.604Z"
        fill={color}
        // "#F173FC"
      />
    </svg>
  );
}
