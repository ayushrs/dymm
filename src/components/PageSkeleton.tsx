
import { Skeleton } from "@/components/ui/skeleton";

export const PageSkeleton = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar Skeleton */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Skeleton className="h-10 w-32" />
            <div className="flex space-x-4">
              <Skeleton className="h-8 w-20" />
              <Skeleton className="h-8 w-20" />
              <Skeleton className="h-8 w-20" />
            </div>
          </div>
        </div>
      </header>
      
      {/* Hero Section Skeleton */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center space-y-6 text-center">
          <Skeleton className="h-14 w-3/4 max-w-2xl" />
          <Skeleton className="h-10 w-2/3 max-w-xl" />
          <Skeleton className="h-12 w-40 rounded-full mt-4" />
        </div>
      </div>
      
      {/* Content Skeleton */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex flex-col space-y-4">
              <Skeleton className="h-40 w-full rounded-xl" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
