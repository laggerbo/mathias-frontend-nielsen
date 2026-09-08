export const STORAGE_KEYS = {
  books: "devjourney:books:v1",
  ideas: "devjourney:ideas:v1",
};

export function safeLoad<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch (e) {
    return fallback;
  }
}

export function safeSave<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    /* storage unavailable, fail quietly */
  }
}

export function audibleSearch(title: string, author: string): string {
  const q = encodeURIComponent(title + " " + author);
  return "https://www.audible.com/search?keywords=" + q;
}
