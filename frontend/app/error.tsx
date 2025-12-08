"use client";

import { Box, Typography, Button, Paper } from "@mui/material";
import Link from "next/link";

// App Router global error boundary component
export default function GlobalError(props: {
  error: Error;
  reset: () => void;
}) {
  const { reset } = props;

  return (
    <html>
      <body>
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "#f5f5f5",
            p: 2,
          }}
        >
          <Paper
            elevation={3}
            sx={{
              backdropFilter: "blur(15px)",
              WebkitBackdropFilter: "blur(15px)",
              backgroundColor: "rgba(255, 255, 255, 0.6)",
              borderRadius: "16px",
              p: 5,
              textAlign: "center",
              maxWidth: 480,
            }}
          >
            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{
                fontSize: { xs: "42px", md: "54px" },
                lineHeight: 1.1,
              }}
            >
              500
            </Typography>

            <Typography
              variant="h6"
              sx={{ mt: 1, mb: 3, fontWeight: 400, opacity: 0.8 }}
            >
              Ichki server xatosi yuz berdi.
            </Typography>

            <Typography variant="body2" sx={{ mb: 4, opacity: 0.7 }}>
              Kechirasiz, sahifani yuklashda kutilmagan xato sodir bo‘ldi.
              Birozdan so‘ng qayta urinib ko‘ring.
            </Typography>

            <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
              <Button
                variant="contained"
                color="primary"
                onClick={reset}
                sx={{
                  px: 3,
                  py: 1.1,
                  textTransform: "none",
                  borderRadius: "10px",
                }}
              >
                Qayta urinib ko‘rish
              </Button>

              <Button
                variant="outlined"
                component={Link}
                href="/"
                sx={{
                  px: 3,
                  py: 1.1,
                  textTransform: "none",
                  borderRadius: "10px",
                }}
              >
                Bosh sahifaga qaytish
              </Button>
            </Box>
          </Paper>
        </Box>
      </body>
    </html>
  );
}
