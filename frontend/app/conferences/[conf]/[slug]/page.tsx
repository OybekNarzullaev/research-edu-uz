import api from "@/lib/api";
import type { Article } from "@/types/models";

import { Container, Typography, Button, Divider } from "@mui/material";

interface Props {
  params: Promise<{ slug: string }>;
}

//
// 🔵 Dynamic SEO (Google Scholar + OG + Twitter)
//
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  try {
    const article: Article = await api.get(`conferences/article/${slug}/`);

    return {
      title: `${article.title} – Ilmiy Maqola`,
      description: article.abstract?.slice(0, 160) || article.title,
      openGraph: {
        title: article.title,
        description: article.abstract,
        type: "article",
        url: `/article/${slug}`,
      },
      twitter: {
        card: "summary_large_image",
        title: article.title,
        description: article.abstract,
      },

      // 👇 GOOGLE SCHOLAR META
      other: {
        citation_title: article.title,
        citation_author: article.authors,
        citation_publication_date: article.published_date,
        citation_pdf_url: article.pdf,
        ...(article.keywords && { citation_keywords: article.keywords }),
        ...(article.pages && {
          citation_firstpage: article.pages.split("–")[0],
          citation_lastpage: article.pages.split("–")[1],
        }),
        ...(article.doi && { citation_doi: article.doi }),
        citation_conference_title: article.conference?.title,
      },
    };
  } catch {
    return {
      title: "Maqola topilmadi",
      description: "Ushbu maqola mavjud emas",
    };
  }
}

//
// 🔵 PAGE COMPONENT (SSR)
//
export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;

  let article: Article;
  try {
    article = await api.get(`conferences/article/${slug}/`);
  } catch {
    return (
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" color="error">
          Bunday maqola topilmadi
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      {/* JSON-LD Schema (Google SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            headline: article.title,
            author: article.authors.split(",").map((a) => ({
              "@type": "Person",
              name: a.trim(),
            })),
            datePublished: article.published_date,
            description: article.abstract,
            url: `https://your-domain.com/article/${article.slug}`,
            keywords: article.keywords,
            ...(article.doi && { identifier: article.doi }),
            isPartOf: {
              "@type": "Event",
              name: article.conference?.title,
            },
          }),
        }}
      />

      {/* TITLE */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        {article.title}
      </Typography>

      {/* AUTHORS */}
      <Typography variant="body1" sx={{ mb: 1 }}>
        <strong>Mualliflar:</strong> {article.authors}
      </Typography>

      {/* DATE */}
      <Typography variant="body2" color="text.secondary">
        Nashr qilingan sana: {article.published_date}
      </Typography>

      {/* DOI */}
      {article.doi && (
        <Typography variant="body2" color="text.secondary">
          DOI: {article.doi}
        </Typography>
      )}

      <Divider sx={{ my: 3 }} />

      {/* Abstract */}
      <Typography variant="h6" fontWeight="bold">
        Annotatsiya
      </Typography>
      <Typography sx={{ mb: 4 }}>{article.abstract}</Typography>

      {/* Keywords */}
      {article.keywords && (
        <>
          <Typography variant="h6" fontWeight="bold">
            Kalit so‘zlar
          </Typography>
          <Typography sx={{ mb: 4 }}>{article.keywords}</Typography>
        </>
      )}

      {/* PDF Download */}
      <Button
        variant="contained"
        size="large"
        href={article.pdf}
        target="_blank"
      >
        PDF-ni ko‘rish / Yuklab olish
      </Button>
    </Container>
  );
}
