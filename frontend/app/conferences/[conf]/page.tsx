import api from "@/lib/api";
import type { Conference, ArticleShort } from "@/types/models";
import ArticleCard from "@/components/ArticleCard";

import { Container, Typography, Grid, Box } from "@mui/material";

interface Props {
  params: Promise<{
    conf: string;
  }>;
}

export async function generateMetadata({ params }: Props) {
  const { conf: slug } = await params;

  try {
    const conference: Conference = await api.get(`conferences/${slug}/`);

    const title = `${conference.title} – Ilmiy Konferensiya`;
    const description =
      conference.description ||
      `${conference.title} konferensiyasiga oid ilmiy maqolalar va materiallar.`;

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: "website",
        url: `/conferences/${slug}`,
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
      },
      alternates: {
        canonical: `/conferences/${slug}`,
      },
      other: {
        // Scholar-friendly meta
        citation_conference_title: conference.title,
        citation_publication_date: conference.start_date,
      },
    };
  } catch {
    return {
      title: "Konferensiya topilmadi",
      description: "Ushbu konferensiya mavjud emas.",
    };
  }
}

export default async function ConferenceDetailPage(props: Props) {
  const { conf: slug } = await props.params;

  let conference: Conference;

  try {
    conference = await api.get(`conferences/${slug}/`);
  } catch {
    return (
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" color="error">
          Bunday konferensiya topilmadi
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        {conference.title}
      </Typography>

      <Typography variant="body1" color="text.secondary">
        📅 {conference.start_date} — {conference.end_date}
      </Typography>

      {conference.publisher && (
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
          Nashriyot: {conference.publisher}
        </Typography>
      )}

      {conference.description && (
        <Typography variant="body1" sx={{ mt: 3, mb: 4 }}>
          {conference.description}
        </Typography>
      )}

      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Maqolalar ({conference.articles?.length})
        </Typography>

        {conference.articles?.length === 0 && (
          <Typography variant="body2" color="text.secondary">
            Hozircha maqolalar mavjud emas.
          </Typography>
        )}

        <Grid container spacing={4} sx={{ mt: 1 }}>
          {conference.articles?.map((article: ArticleShort) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={article.slug}>
              <ArticleCard article={article} conferenceSlug={conference.slug} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
