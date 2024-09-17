import {  X, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ImageUploaderProps {
	images: string[];
	onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
	removeImage: (index: number) => void;
	fileInputRef: React.RefObject<HTMLInputElement>;
}


const ImageUploader: React.FC<ImageUploaderProps> = ({
	images,
	onImageUpload,
	removeImage,
	fileInputRef,
}) => (
	<div >
		<label
			htmlFor="image-upload"
			className="block text-sm font-medium text-gray-700 mb-2"
		>
			Upload Images
		</label>
		<div className="flex items-center">
			<Input
				id="image-upload"
				type="file"
				accept="image/*"
				multiple
				onChange={onImageUpload}
				ref={fileInputRef}
				className="hidden"
				required
			/>
			<Button
				type="button"
				className="w-full "
				onClick={() => fileInputRef.current?.click()}
				variant="outline"
			>
				<Upload className="mr-2 h-4 w-4" /> Choose Files
			</Button>
		</div>
		{images.length > 0 && (
			<div className="flex flex-wrap gap-2 mt-4">
				{images.map((image, index) => (
					<div key={index} className="relative">
						<img
							src={image}
							alt={`Uploaded ${index + 1}`}
							className="w-20 h-20 object-cover rounded"
						/>
						<button
							type="button"
							onClick={() => removeImage(index)}
							className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
						>
							<X className="h-4 w-4" />
						</button>
					</div>
				))}
			</div>
		)}
	</div>
);


export default ImageUploader