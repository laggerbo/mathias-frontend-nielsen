import { useMemo, useState } from "react";
import { Stars } from "./Stars";
import { CheckIcon } from "./icons";
import { BookCharts } from "./BookCharts";
import { audibleSearch } from "../utils/storage";
import type { Book } from "../types";

type SortKey = keyof Book | "listen";
type SortDir = "asc" | "desc";

interface Column {
  key: SortKey;
  label: string;
  sortable: boolean;
}

const BOOK_COLUMNS: Column[] = [
  { key: "read", label: "Read", sortable: true },
  { key: "title", label: "Title", sortable: true },
  { key: "author", label: "Author", sortable: true },
  { key: "tag", label: "Category", sortable: true },
  { key: "pages", label: "Pages", sortable: true },
  { key: "rating", label: "Rating", sortable: true },
  { key: "listen", label: "Audiobook", sortable: false },
];

interface BooksTabProps {
  books: Book[];
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
}

export function BooksTab({ books, setBooks }: BooksTabProps) {
  const [sortKey, setSortKey] = useState<SortKey | null>(null);
  const [sortDir, setSortDir] = useState<SortDir>("asc");

  const toggleRead = (id: string) => {
    setBooks((prev) => prev.map((b) => (b.id === id ? { ...b, read: !b.read } : b)));
  };
  const setRating = (id: string, rating: number) => {
    setBooks((prev) => prev.map((b) => (b.id === id ? { ...b, rating } : b)));
  };
  const readCount = books.filter((b) => b.read).length;

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  const sortedBooks = useMemo(() => {
    if (!sortKey || sortKey === "listen") return books;
    const dir = sortDir === "asc" ? 1 : -1;
    return [...books].sort((a, b) => {
      let av: string | number | boolean = a[sortKey];
      let bv: string | number | boolean = b[sortKey];
      if (sortKey === "read") {
        av = av ? 1 : 0;
        bv = bv ? 1 : 0;
      }
      if (typeof av === "string" && typeof bv === "string") {
        return av.localeCompare(bv) * dir;
      }
      return ((av as number) - (bv as number)) * dir;
    });
  }, [books, sortKey, sortDir]);

  return (
    <div>
      <h2 className="section-title">Reading list</h2>
      <p className="section-desc">
        Books on software craft, agile ways of working, and how tech teams actually run.
        {" "}
        <strong>
          {readCount} of {books.length}
        </strong>{" "}
        read so far. Tick one off, and rate it while it's fresh. Click any column heading to sort.
      </p>
      <BookCharts books={books} />
      <div className="table-scroll">
        <table className="book-table">
          <thead>
            <tr>
              {BOOK_COLUMNS.map((col) => (
                <th key={col.key}>
                  {col.sortable ? (
                    <button onClick={() => handleSort(col.key)}>
                      {col.label}
                      {sortKey === col.key && <span className="sort-arrow">{sortDir === "asc" ? "▲" : "▼"}</span>}
                    </button>
                  ) : (
                    col.label
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedBooks.map((b) => (
              <tr key={b.id} className={b.read ? "is-read" : ""}>
                <td data-label="Read">
                  <button
                    className={"read-toggle" + (b.read ? " checked" : "")}
                    onClick={() => toggleRead(b.id)}
                    aria-pressed={b.read}
                    aria-label={b.read ? "Mark as unread" : "Mark as read"}
                    title={b.read ? "Mark as unread" : "Mark as read"}
                  >
                    <CheckIcon />
                  </button>
                </td>
                <td className="col-title" data-label="Title">{b.title}</td>
                <td className="col-author" data-label="Author">{b.author}</td>
                <td data-label="Category">
                  <span className="tag">{b.tag}</span>
                </td>
                <td data-label="Pages">
                  <span className="pages">{b.pages}p</span>
                </td>
                <td data-label="Rating">
                  <Stars value={b.rating} onChange={(v) => setRating(b.id, v)} />
                </td>
                <td data-label="Audiobook">
                  <a className="listen-link" href={audibleSearch(b.title, b.author)} target="_blank" rel="noopener noreferrer">
                    Find it ↗
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
