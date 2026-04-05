import { getUpload, getSharePath } from "@/lib/uploads";
import { redirect } from "next/navigation";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

/**
 * Legacy /s/[slug] route — redirects to /f/[slug].[ext]
 * which serves the file directly.
 */
export default async function SharedPageRedirect({ params }: Props) {
  const { slug } = await params;
  const record = await getUpload(slug);

  if (!record) {
    notFound();
  }

  redirect(getSharePath(record));
}
