import api from "@/lib/api";
import { Conference } from "@/types/models";
import ConferenceCard from "@/components/ConferenceCard";

import { Container, Grid, Typography } from "@mui/material";

export const metadata = {
  title: "Konferensiyalar – Ilmiy Arxiv",
  description: "Barcha ilmiy konferensiyalar ro‘yxati.",
};

export default async function ConferencesPage() {
  const conferences: Conference[] = await api.get("conferences/");

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Page Title */}
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Konferensiyalar ro‘yxati
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Bu bo‘limda platformaga yuklangan barcha ilmiy konferensiyalar
        keltirilgan.
      </Typography>

      {/* Conferences Grid */}
      <Grid container spacing={4}>
        {conferences.map((conf) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={conf.slug}>
            <ConferenceCard conference={conf} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
