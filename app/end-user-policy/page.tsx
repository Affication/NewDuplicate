import type { Metadata } from "next";
import { EndUserPolicy } from "@/components/pages/EndUserPolicy/EndUserPolicy";

export const metadata: Metadata = {
  title: "End User Policy | SatisPro",
  description: "Read the SatisPro end user policy covering acceptable use, data handling, and responsibilities for customers.",
};

export default function EndUserPolicyPage() {
  return <EndUserPolicy />;
}
