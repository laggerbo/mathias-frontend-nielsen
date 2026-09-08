import { StarIcon } from "./icons";

interface StarsProps {
  value: number;
  onChange: (value: number) => void;
}

export function Stars({ value, onChange }: StarsProps) {
  return (
    <div className="stars" role="radiogroup" aria-label="Your rating">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          className={n <= value ? "filled" : ""}
          aria-label={n + " star" + (n > 1 ? "s" : "")}
          aria-pressed={n <= value}
          onClick={() => onChange(n === value ? 0 : n)}
        >
          <StarIcon filled={n <= value} />
        </button>
      ))}
    </div>
  );
}
