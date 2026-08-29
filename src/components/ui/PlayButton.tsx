type Props = {
  onClick?: () => void;
  size?: number;
  label?: string;
};

/** 64px yellow circle with a black play triangle (plan §3.20 / §2.4). */
export function PlayButton({ onClick, size = 64, label = "Play facility video" }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      style={{ width: size, height: size }}
      className="group flex items-center justify-center rounded-full bg-yellow transition-[transform,background-color] duration-200 ease-out hover:scale-[1.06] hover:bg-yellow-hover motion-reduce:transform-none"
    >
      <svg
        width={size * 0.28}
        height={size * 0.32}
        viewBox="0 0 18 20"
        aria-hidden="true"
        className="translate-x-[2px]"
      >
        <path d="M0 0L18 10L0 20Z" fill="#1A1A1E" />
      </svg>
    </button>
  );
}
