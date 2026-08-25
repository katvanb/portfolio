const WORDS_PER_MINUTE = 180;

export function calculateReadingTime(content: unknown): string {
  const text = extractText(content);

  const wordCount = text
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .length;

  const minutes = Math.max(
    1,
    Math.ceil(wordCount / WORDS_PER_MINUTE)
  );

  return `${minutes} min read`;
}

function extractText(value: unknown): string {
  if (typeof value === "string") {
    return value;
  }

  if (Array.isArray(value)) {
    return value
      .map((item) => extractText(item))
      .join(" ");
  }

  if (value && typeof value === "object") {
    return Object.values(value)
      .map((item) => extractText(item))
      .join(" ");
  }

  return "";
}