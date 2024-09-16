import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Good } from "./GoodsForm";

const GoodsPreview: React.FC<{ good: Good }> = ({ good }) => (
	<Card>
		<CardHeader>
			<CardTitle>Preview</CardTitle>
		</CardHeader>
		<CardContent>
			{good.title || good.description || good.images.length > 0 ? (
				<div className="border rounded-lg p-4">
					<h3 className="font-bold text-lg mb-2">
						{good.title || "Untitled"}
					</h3>
					<p className="text-gray-600 mb-2">
						{good.description || "No description"}
					</p>
					<div className="flex flex-wrap gap-2">
						{good.images.map((image, index) => (
							<img
								key={index}
								src={image}
								alt={`Preview ${index + 1}`}
								className="w-20 h-20 object-cover rounded"
							/>
						))}
					</div>
				</div>
			) : (
				<p className="text-center text-gray-500">
					No preview available. Start adding details to see a preview.
				</p>
			)}
		</CardContent>
	</Card>
);


export default GoodsPreview