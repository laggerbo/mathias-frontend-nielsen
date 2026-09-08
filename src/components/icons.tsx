export function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg viewBox="0 0 20 20" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.3">
      <path d="M10 1.5l2.47 5.77 6.28.55-4.76 4.14 1.44 6.14L10 14.98l-5.43 3.12 1.44-6.14L1.25 7.82l6.28-.55L10 1.5z" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.4">
      <path d="M4 10.5l3.8 3.8L16 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
