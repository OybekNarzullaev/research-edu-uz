"use client";

import { ArticleShort } from "@/types/models";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  CardActionArea,
} from "@mui/material";
import Link from "next/link";

interface Props {
  article: ArticleShort;
  conferenceSlug: string;
}

export default function ArticleCard({ article, conferenceSlug }: Props) {
  return (
    <Card
      elevation={3}
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        transition: "0.25s ease",
        ":hover": {
          boxShadow: 8,
          transform: "translateY(-4px)",
        },
      }}
    >
      <Link
        href={`/conferences/${conferenceSlug}/${article.slug}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <CardActionArea>
          <CardContent sx={{ p: 3 }}>
            {/* TITLE */}
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{
                mb: 1,
                lineHeight: 1.3,
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {article.title}
            </Typography>

            {/* AUTHORS */}
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mb: 2,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {article.authors}
            </Typography>

            {/* BADGES (keywords yoki PDF belgisi qo‘shish uchun) */}
            <Box sx={{ mt: 1 }}>
              <Chip
                label="PDF mavjud"
                size="small"
                color="primary"
                sx={{ fontWeight: 500 }}
              />
            </Box>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
