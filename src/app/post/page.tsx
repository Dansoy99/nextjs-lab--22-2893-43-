interface Post {
  id: number
  title: string
  body: string
}

export default async function PostsPage() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      next: { revalidate: 60 }
    }
  )

  const posts: Post[] = await res.json()

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>

      <ul className="space-y-4">
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} className="border p-4 rounded-lg">
            <h2 className="font-semibold text-lg">{post.title}</h2>
            <p className="text-gray-600">
              {post.body.slice(0, 80)}...
            </p>

            <a
              href={`/posts/${post.id}`}
              className="text-blue-500"
            >
              Read More
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}