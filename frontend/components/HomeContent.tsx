"use client";

import { Conference } from "@/types/models";
import Link from "next/link";

// MUI Components
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import ConferenceCard from "./ConferenceCard";

export default function HomeContent({
  conferences,
}: {
  conferences: Conference[];
}) {
  const latest = conferences.slice(0, 3);

  return (
    <>
      {/* HERO SECTION */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #1976d2 0%, #512da8 100%)",
          color: "#fff",
          py: 12,
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant={"h4"}
            textTransform={"uppercase"}
            fontWeight="bold"
            gutterBottom
          >
            Ilmiy Konferensiyalar va Maqolalar Arxivi
          </Typography>

          <Typography variant="h6" sx={{ opacity: 0.9, mb: 4 }}>
            Google Scholar tomonidan indekslanadigan ilmiy maqolalar
            platformasi.
          </Typography>

          <Button
            component={Link}
            href="/conferences"
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#fff",
              color: "#1976d2",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.9)" },
            }}
          >
            Konferensiyalarni ko‘rish →
          </Button>
        </Container>
      </Box>

      {/* FEATURES SECTION */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={4}>
          <Grid size={{ md: 4, xs: 12 }}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Google Scholar Integratsiyasi
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Har bir maqola Scholar talablariga mos metama’lumotlar bilan
                  ta’minlanadi.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ md: 4, xs: 12 }}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Tezkor PDF yuklash
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Maqolalar PDF formatda xavfsiz va tezkor yuklanadi.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ md: 4, xs: 12 }}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Ilmiy Arxiv Platformasi
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Yuzlab maqola va o‘nlab konferensiyalar bitta joyda tartibli
                  arxivda saqlanadi.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* LATEST CONFERENCES */}
      <Container maxWidth="lg" sx={{ pb: 12 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          So‘nggi konferensiyalar
        </Typography>

        <Grid container spacing={4}>
          {latest.map((conf) => (
            <Grid size={{ md: 4, xs: 12 }} key={conf.slug}>
              <ConferenceCard conference={conf} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
