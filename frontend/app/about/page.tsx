import { Container, Typography, Box, Grid, Paper } from "@mui/material";

export const metadata = {
  title: "Biz haqimizda – Ilmiy Konferensiyalar Arxivi",
  description:
    "Platformaning maqsadi, vazifalari va ilmiy jurnallar hamda konferensiyalarni raqamlashtirish jarayonlari haqida.",
};

export default function AboutPage() {
  return (
    <Box sx={{ bgcolor: "#fafafa", py: 8 }}>
      <Container maxWidth="md">
        {/* HERO */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Biz haqimizda
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 700, mx: "auto" }}
          >
            Ilmiy maqolalar va konferensiyalarni raqamli shaklda jamlash,
            indekslash va tadqiqotchilar uchun qulay tarzda taqdim etishga
            mo‘ljallangan platforma.
          </Typography>
        </Box>

        {/* PLATFORM PURPOSE */}
        <Paper
          elevation={0}
          sx={{ p: 4, mb: 6, bgcolor: "white", borderRadius: 3 }}
        >
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Platforma maqsadi
          </Typography>

          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            Ushbu platformaning asosiy maqsadi — ilmiy izlanishlar, konferensiya
            materiallari va ilmiy maqolalarni yagona raqamli makonda jamlash,
            saqlash va tadqiqotchilarga ochiq va qulay tarzda taqdim etishdir.
            Shuningdek, Google Scholar kabi ilmiy qidiruv tizimlarida
            indekslanishni avtomatlashtirish orqali ilmiy ishlarning global
            ko‘rinuvchanligini oshirish ham platformaning eng muhim
            vazifalaridan biridir.
          </Typography>
        </Paper>

        {/* VALUES / FEATURES */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper sx={{ p: 3, borderRadius: 3 }} elevation={1}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                🔍 Ilmiy izlanishlar
              </Typography>
              <Typography variant="body2">
                Tadqiqotchilar uchun qulay qidiruv, filtrlar va tezkor
                ma’lumotga ega bo‘lish imkoniyati yaratilgan.
              </Typography>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Paper sx={{ p: 3, borderRadius: 3 }} elevation={1}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                📚 Raqamli arxiv
              </Typography>
              <Typography variant="body2">
                Konferensiya materiallari muntazam ravishda to‘planadi,
                strukturalashadi va uzoq muddatli saqlash uchun arxivlanadi.
              </Typography>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Paper sx={{ p: 3, borderRadius: 3 }} elevation={1}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                🌐 Scholar indekslash
              </Typography>
              <Typography variant="body2">
                Google Scholar uchun maxsus meta-teglar avtomatik generatsiya
                qilinadi.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* CONTACT or ADMIN LINK */}
        <Paper elevation={0} sx={{ p: 4, bgcolor: "white", borderRadius: 3 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Aloqa
          </Typography>

          <Typography variant="body1">
            Takliflar, xatoliklar yoki hamkorlik bo‘yicha murojaat uchun biz
            bilan bog‘laning:
          </Typography>

          <Typography variant="body1" sx={{ mt: 1 }}>
            ✉️ Email: <strong>info@ilmiy-konferensiya.uz</strong>
          </Typography>

          <Typography variant="body1" sx={{ mt: 1 }}>
            🔧 Admin panel:{" "}
            <a
              href="/admin"
              target="_blank"
              style={{ color: "#1976d2", fontWeight: 500 }}
            >
              Admin
            </a>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}
