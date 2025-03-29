import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonCard() {
  return (

    <div className=" flex items-center justify-center
    ">

        <div className="flex flex-col space-y-3">
        <Skeleton className="h-[400px] w-[500px] rounded-xl" />
        <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-4 rounded-full" />
        </div>
        </div>
    </div>
  )
}
