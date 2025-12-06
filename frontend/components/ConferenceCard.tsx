"use client";

import { Conference } from "@/types/models";
import Link from "next/link";
import { Card, CardContent, Typography, Box } from "@mui/material";

interface Props {
  conference: Conference;
}

export default function ConferenceCard({ conference }: Props) {
  return (
    <Card
      component={Link}
      href={`/conferences/${conference.slug}`}
      elevation={4}
      sx={{
        textDecoration: "none",
        height: "100%",
        transition: "0.25s",
        ":hover": {
          boxShadow: 10,
          transform: "translateY(-4px)",
        },
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        {/* Title */}
        <Typography
          variant="h6"
          fontWeight="bold"
          gutterBottom
          sx={{ color: "text.primary" }}
        >
          {conference.title}
        </Typography>

        {/* Description */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {conference.description || "Tavsif mavjud emas"}
        </Typography>

        {/* Dates */}
        <Typography variant="body2" sx={{ mb: 1 }}>
          📅 {conference.start_date} — {conference.end_date}
        </Typography>

        {/* Publisher */}
        {conference.publisher && (
          <Typography variant="caption" color="text.secondary">
            Nashriyot: {conference.publisher}
          </Typography>
        )}
      </CardContent>

      {/* Footer Area */}
      <Box
        sx={{
          px: 2,
          py: 1.5,
          bgcolor: "grey.100",
          borderTop: "1px solid #eee",
        }}
      >
        <Typography variant="caption" color="text.secondary">
          Maqolalar soni: {conference.articles?.length || 0}
        </Typography>
      </Box>
    </Card>
  );
}
