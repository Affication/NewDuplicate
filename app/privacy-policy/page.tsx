import type { Metadata } from "next";
import { PrivacyPolicy } from "@/components/pages/PrivacyPolicy/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy | SatisPro",
  description: "Learn how SatisPro handles your data, protects privacy, and supports compliance while managing review responses.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
