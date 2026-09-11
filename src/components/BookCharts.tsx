import { PieChart } from "./PieChart";
import type { Book } from "../types";

function getCardBackgroundColor() {
  if (typeof window === "undefined") return "#1f2024";
  return getComputedStyle(document.documentElement).getPropertyValue("--bg-raised").trim();
}

export function BookCharts({ books }: { books: Book[] }) {
  const bgColor = getCardBackgroundColor();
  const RATING_COLORS = [bgColor, "#e6b566", "#e0a83f", "#c98a1f", "#a8651a", "#7d4b12"];
  const READ_COLORS = ["#2e7d4f", bgColor];

  const readCount = books.filter((b) => b.read).length;
  const notReadCount = books.length - readCount;

  const ratingBuckets = [0, 0, 0, 0, 0, 0]; // index 0 = not rated, 1-5 = stars
  books.forEach((b) => {
    ratingBuckets[b.rating] += 1;
  });
  const ratingLabels = ["Not rated", "1 star", "2 stars", "3 stars", "4 stars", "5 stars"];

  return (
    <div className="chart-row">
      <PieChart
        title="Read vs. not read"
        labels={["Read", "Not read"]}
        data={[readCount, notReadCount]}
        colors={READ_COLORS}
      />
      <PieChart title="Ratings" labels={ratingLabels} data={ratingBuckets} colors={RATING_COLORS} />
    </div>
  );
}
