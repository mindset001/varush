export function DraftingIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="6" r="2.2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 8.2 5 19h14L12 8.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M9.5 15h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function CraneIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 20V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 6h13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 9h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M15 6l2 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M17 10v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="2" y="20" width="16" height="1.6" fill="currentColor" />
    </svg>
  );
}

export function ChecklistIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="5" y="3.5" width="14" height="17" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8.5 9.5l1.5 1.5 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 15.5h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function SupplyIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3.5 8 12 4l8.5 4-8.5 4-8.5-4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M3.5 8v8l8.5 4 8.5-4V8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 12v8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function RoadIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M8 4 4.5 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 4l3.5 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11.3 9.5h1.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10.6 14h2.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function BoltIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M13 3 6 13h4.5L10 21l8-11h-4.5L13 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LeafIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M5 19c-1-6 1-12 7-15 6 1 9 6 7 12-3 6-9 6-14 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M6 18c3-4 6-7 11-12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
