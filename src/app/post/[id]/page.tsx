import { Suspense } from "react"
import SlowData from "@/app/components/SlowData"

interface PageProps {
  params: {
    id: string
  }
}

export default async function PostPage({ params }: PageProps) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  )

  const post = await res.json()

  return (
    <div className="p-6">
      <a href="/posts" className="text-blue-500">← Back</a>

      <h1 className="text-2xl font-bold mt-4">
        {post.title}
      </h1>

      <p className="mt-4">{post.body}</p>

      <p className="text-gray-500 mt-4">
        User ID: {post.userId}
      </p>

      <Suspense fallback={<p>Loading slow data...</p>}>
        <SlowData />
      </Suspense>
    </div>
  )
}