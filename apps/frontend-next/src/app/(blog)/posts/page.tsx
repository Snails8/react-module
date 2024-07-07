import { getAllPosts } from "../_blog/api";
import { PostCard } from "./_components/PostCard";

// {`Next.js Blog Example with ${CMS_NAME}`}

type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage?: string;
  excerpt: string;
  ogImage?: {
    url: string;
  };
  content: string;
};

export default async function Index() {
  const allPosts = (await getProps()) as unknown as PostType[];

  return (
    <div className="container mx-auto px-5">
      {allPosts.length > 0 && <PostCard posts={allPosts} />}
    </div>
  );
}

async function getProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
  ]);

  return allPosts;
}
