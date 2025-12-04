import type { Metadata } from "next";
import { SatisProLanding } from "@/components/screens/SatisProLanding/SatisProLanding";

export const metadata: Metadata = {
  title: "SatisPro | AI that Answers Google Reviews Automatically",
  description:
    "Automate Google review replies with SatisPro. Keep responses on-brand, respond in minutes, and save hours every week.",
};

export default function HomePage() {
  return <SatisProLanding />;
}
