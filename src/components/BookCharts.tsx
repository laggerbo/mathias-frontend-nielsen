import { PieChart } from "./PieChart";
import type { Book } from "../types";

const RATING_COLORS = ["#d9d2c1", "#e6b566", "#e0a83f", "#c98a1f", "#a8651a", "#7d4b12"];
const READ_COLORS = ["#2e7d4f", "#d9d2c1"];

export function BookCharts({ books }: { books: Book[] }) {
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
