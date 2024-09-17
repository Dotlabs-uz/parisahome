import { Skeleton } from "@/components/ui/skeleton";

interface SkeletonProps {
	lines?: number;
	showImage?: boolean;
}

export default function ContentSkeleton({
	lines = 5,
	showImage = true,
}: SkeletonProps) {
	return (
		<div className="space-y-4">
			<Skeleton className="bg-gray-300 h-8 w-[250px]" />
			<div className="space-y-2">
				{Array.from({ length: lines }).map((_, index) => (
					<Skeleton key={index} className="bg-gray-300 h-4 w-full" />
				))}
			</div>
			{showImage && <Skeleton className="bg-gray-300 h-[200px] w-full" />}
		</div>
	);
}
