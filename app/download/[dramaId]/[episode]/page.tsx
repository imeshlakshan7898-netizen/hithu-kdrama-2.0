import { dramas } from "@/lib/video-data"
import { DownloadContent } from "@/components/download-content"
import { notFound } from "next/navigation"

interface DownloadPageProps {
  params: Promise<{ dramaId: string; episode: string }>
}

export default async function DownloadPage({ params }: DownloadPageProps) {
  const { dramaId, episode } = await params

  const drama = dramas.find((d) => d.id === dramaId)
  if (!drama) return notFound()

  const episodeNum = parseInt(episode, 10)
  const ep = drama.episodes.find((e) => e.number === episodeNum)
  if (!ep) return notFound()

  return <DownloadContent drama={drama} episode={ep} />
}
