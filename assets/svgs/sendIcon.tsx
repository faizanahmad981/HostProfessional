import { IconProps } from "@/common/interfaces/icons-interface";

export default function SendMessageIcon({ color }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="39"
      height="39"
      viewBox="0 0 39 39"
      fill="none"
    >
      <rect width="39" height="39" rx="19.5" fill="#116ACC" />
      <path
        d="M8.65228 20.6168L13.4566 23.7539V28.9969C13.4274 29.9402 14.6705 30.4668 15.3286 29.7721L18.2244 26.8763L22.2755 29.5234C22.4583 29.6405 22.6631 29.7062 22.8751 29.7062C23.3285 29.7062 23.7526 29.4138 23.9062 28.9896L30.7726 10.372C30.8238 10.2258 30.8457 10.0722 30.8238 9.92594C30.7946 9.16545 29.9536 8.69013 29.2662 9.00456L8.7839 18.7083C8.02342 19.0373 7.94299 20.1854 8.65228 20.6168ZM24.4839 13.6992L15.6284 22.5546L11.4895 19.849L24.4839 13.6992Z"
        fill={color || "white"}
      />
    </svg>
  );
}
