import { useEffect, useMemo, useState } from "react";
import { BooksTab } from "./components/BooksTab";
import { IdeasTab } from "./components/IdeasTab";
import { FirstProjectTab } from "./components/FirstProjectTab";
import { DEFAULT_BOOKS } from "./data/books";
import { DEFAULT_IDEAS } from "./data/ideas";
import { STORAGE_KEYS, safeLoad, safeSave } from "./utils/storage";
import type { Book, Idea, TabKey } from "./types";

function mergeWithDefaults<T extends { id: string }>(saved: T[] | null, defaults: T[]): T[] {
  if (!saved) return defaults;
  const savedIds = new Set(saved.map((item) => item.id));
  return [...saved, ...defaults.filter((item) => !savedIds.has(item.id))];
}

export default function App() {
  const [tab, setTab] = useState<TabKey>("books");
  const [books, setBooks] = useState<Book[]>(() =>
    mergeWithDefaults(safeLoad<Book[] | null>(STORAGE_KEYS.books, null), DEFAULT_BOOKS)
  );
  const [ideas, setIdeas] = useState<Idea[]>(() =>
    mergeWithDefaults(safeLoad<Idea[] | null>(STORAGE_KEYS.ideas, null), DEFAULT_IDEAS)
  );

  useEffect(() => safeSave(STORAGE_KEYS.books, books), [books]);
  useEffect(() => safeSave(STORAGE_KEYS.ideas, ideas), [ideas]);

  const readCount = useMemo(() => books.filter((b) => b.read).length, [books]);
  const triedCount = useMemo(() => ideas.filter((i) => i.tried).length, [ideas]);

  return (
    <div className="wrap">
      <span className="stamp">RELEASE v1.0.0 · tagged today</span>
      <h1 className="headline">
        Your dev journey
        <br />
        starts here.
      </h1>
      <p className="sub">
        Happy birthday. This one's a small app instead of a card — a reading list, a stack of project ideas, and a
        place to write your very first lines of code, all in one page. Nothing here needs an install:{" "}
        <code>read → build → ship</code>.
      </p>

      <nav className="tabs">
        <button className={tab === "books" ? "active" : ""} onClick={() => setTab("books")}>
          docs/reading-list{" "}
          <span className="count">
            {readCount}/{books.length}
          </span>
        </button>
        <button className={tab === "ideas" ? "active" : ""} onClick={() => setTab("ideas")}>
          CHANGELOG.md{" "}
          <span className="count">
            {triedCount}/{ideas.length}
          </span>
        </button>
        <button className={tab === "first-project" ? "active" : ""} onClick={() => setTab("first-project")}>
          my-first-project/
        </button>
      </nav>

      {tab === "books" && <BooksTab books={books} setBooks={setBooks} />}
      {tab === "ideas" && <IdeasTab ideas={ideas} setIdeas={setIdeas} />}
      {tab === "first-project" && <FirstProjectTab />}

      <footer className="pagefoot">
        Your progress here is saved on this device only. Come back anytime — nothing resets unless you want it to.
      </footer>
    </div>
  );
}
