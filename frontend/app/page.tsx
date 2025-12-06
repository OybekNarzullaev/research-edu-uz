import HomeContent from "@/components/HomeContent";
import api from "@/lib/api";
import { Conference } from "@/types/models";

export const metadata = {
  title: "Ilmiy Konferensiyalar Arxivi",
  description:
    "Google Scholar indekslash uchun optimallashtirilgan ilmiy maqolalar platformasi.",
};

export default async function HomePage() {
  const conferences: Conference[] = await api.get("conferences/");

  return <HomeContent conferences={conferences} />;
}
