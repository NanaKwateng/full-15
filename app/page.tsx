import BlogPostCard from "@/components/general/BlogPostCard";
import { prisma } from "./utils/db";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

async function getData() {
  const data = await prisma.blogPost.findMany({
    select: {
      title: true,
      content: true,
      imageUrl: true,
      authorName: true,
      authorId: true,
      id: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return data;
}

export default function Home() {
  return (
    <div className="py-6">
      <h2 className="text-2xl font-bold tracking-tight mb-8">Latest Posts.</h2>
      <Suspense fallback={<LoadingUi count={6} />}>
        <BlogPost />
      </Suspense>
    </div>
  );
}

async function BlogPost() {
  const data = await getData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
      {data.map((item) => (
        <Suspense key={item.id} fallback={<SkeletonCard />}>
          <BlogPostCard data={item} />
        </Suspense>
      ))}
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3 p-4 border border-gray-200 rounded-2xl shadow-lg bg-white">
      <Skeleton className="h-[125px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  );
}

function LoadingUi({ count = 3 }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {[...Array(count)].map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
}
