import type { Metadata } from "next";
import { getAllExamples } from "@/lib/blog/examples";
import { ExamplesList } from "@/components/blog/ExamplesList";

export const metadata: Metadata = {
  title: "Resume Examples for Every Job — Free to Edit & Download",
  description:
    "Browse free resume examples for software engineers, nurses, teachers, marketers and more. Each example is fully editable — load it, tweak it, download a PDF. No watermarks.",
  alternates: { canonical: "/resume-examples" },
  openGraph: {
    title: "Resume Examples for Every Job — Free to Edit & Download",
    description:
      "Browse free resume examples for software engineers, nurses, teachers, marketers and more.",
    type: "website",
  },
};

export default function ExamplesIndexPage() {
  const examples = getAllExamples();
  return <ExamplesList examples={examples} />;
}
