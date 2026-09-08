export type BookTag = "craft" | "org" | "leadership" | "agile";

export interface Book {
  id: string;
  title: string;
  author: string;
  pages: number;
  tag: BookTag;
  read: boolean;
  rating: number; // 0 = not rated, 1-5 = stars
}

export type IdeaDifficulty = "easy" | "medium" | "spicy";

export interface Idea {
  id: string;
  title: string;
  diff: IdeaDifficulty;
  desc: string;
  tried: boolean;
}

export interface SetupStep {
  title: string;
  desc: string;
  href: string;
  linkText: string;
  code?: string;
}

export type TabKey = "books" | "ideas" | "first-project";
