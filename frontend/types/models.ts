export interface Conference {
  id: number;
  title: string;
  slug: string;
  description: string;

  start_date: string; // "YYYY-MM-DD"
  end_date: string; // "YYYY-MM-DD"

  publisher: string;
  created_at: string; // ISO datetime

  articles?: ArticleShort[]; // List variantida keladi
}

export interface Article {
  id: number;

  conference: number & Conference; // FK → Conference.id

  title: string;
  slug: string;

  authors: string; // "A. Author, B. Author"
  abstract: string;
  keywords: string;

  pdf: string; // File URL from Django

  doi?: string | null;

  published_date: string; // "YYYY-MM-DD"
  pages: string;

  created_at: string; // ISO datetime
}

export interface ArticleShort {
  id: number;
  title: string;
  slug: string;
  authors: string;
  created_at: string; // IS
}
