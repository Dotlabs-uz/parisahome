import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ImageUploader from "./ImageUploader";

export interface Good {
	id: number;
	images: string[];
	title: string;
	description: string;
}

interface GoodsFormProps {
	newGood: Good;
	onSubmit: (e: React.FormEvent) => void;
	onInputChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
	removeImage: (index: number) => void;
	fileInputRef: React.RefObject<HTMLInputElement>;
}

const GoodsForm: React.FC<GoodsFormProps> = ({
	newGood,
	onSubmit,
	onInputChange,
	onImageUpload,
	removeImage,
	fileInputRef,
}) => (
	<Card>
		<CardHeader>
			<CardTitle>Add New Good</CardTitle>
		</CardHeader>
		<CardContent>
			<form onSubmit={onSubmit} className="space-y-4">
				<ImageUploader
					images={newGood.images}
					onImageUpload={onImageUpload}
					removeImage={removeImage}
					fileInputRef={fileInputRef}
				/>
				<Input
					type="text"
					name="title"
					value={newGood.title}
					onChange={onInputChange}
					placeholder="Title"
					className="w-full"
				/>
				<Textarea
					name="description"
					value={newGood.description}
					onChange={onInputChange}
					placeholder="Description"
					className="w-full"
				/>
				<Button type="submit" className="w-full">
					<Plus className="mr-2 h-4 w-4" /> Add Good
				</Button>
			</form>
		</CardContent>
	</Card>
);


export default GoodsForm