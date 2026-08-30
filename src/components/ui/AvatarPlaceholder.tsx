/**
 * Neutral staff avatar placeholder — indigo tile with a white user silhouette.
 * Used on the About page's "Our Staff" cards until real team photos are added.
 * Icon path matches lucide-react's "User" glyph.
 */
export function AvatarPlaceholder({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex aspect-[4/3] w-full items-center justify-center rounded-xl bg-indigo ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-[38%] w-[38%] text-white/85"
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    </div>
  );
}
