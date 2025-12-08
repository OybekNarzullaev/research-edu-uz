"use client";

import { Typography, Button, Stack } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
  return (
    <Stack
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h1"
        color="primary"
        fontWeight="bold"
        sx={{
          fontSize: { xs: "70px", md: "100px" },
          lineHeight: 1,
        }}
      >
        404
      </Typography>

      <Typography
        variant="h6"
        sx={{ mt: 1, mb: 3, fontWeight: 400, opacity: 0.8 }}
      >
        Kechirasiz, sahifa topilmadi.
      </Typography>

      <Button variant="contained" color="primary" component={Link} href="/">
        Bosh sahifaga qaytish
      </Button>
    </Stack>
  );
}
