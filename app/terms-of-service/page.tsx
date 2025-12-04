import type { Metadata } from "next";
import { TermsOfService } from "@/components/pages/TermsOfService/TermsOfService";

export const metadata: Metadata = {
  title: "Terms of Service | SatisPro",
  description: "Review the Terms of Service that govern how you use the SatisPro platform and AI review reply tools.",
};

export default function TermsOfServicePage() {
  return <TermsOfService />;
}
