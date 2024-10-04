import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ImageUploader from "./ImageUploader";
import { Good } from "@/app/admin/dashboard/goods/GoodsPage";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface GoodsFormProps {
    newGood: Good;
    onSubmit: (e: React.FormEvent) => void;
    onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
    removeImage: (index: number) => void;
    fileInputRef: React.RefObject<HTMLInputElement>;
    categories: Array<any>;
}

const GoodsForm: React.FC<GoodsFormProps> = ({
    newGood,
    onSubmit,
    onImageUpload,
    removeImage,
    fileInputRef,
    categories,
}) => (
    <Card>
        <CardHeader>
            <CardTitle>Add New Good</CardTitle>
        </CardHeader>
        <CardContent>
            <form
                onSubmit={onSubmit}
                className="space-y-4"
                onErrorCapture={(err) => {
                    console.log(err);
                }}
            >
                <ImageUploader
                    images={newGood.images}
                    onImageUpload={onImageUpload}
                    removeImage={removeImage}
                    fileInputRef={fileInputRef}
                />
                <Input
                    type="text"
                    name="name"
                    placeholder="Title"
                    className="w-full"
                    required
                />
                <Input
                    type="text"
                    name="price"
                    placeholder="Price"
                    className="w-full hidden"
                    defaultValue={"0"}
                />
                <Select name="categoryId">
                    <SelectTrigger className="w-full text-gray-500">
                        <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                        {categories.map((item) => (
                            <SelectItem
                                className="text-black"
                                key={item.id}
                                value={`${item.id}`}
                            >
                                {item.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Textarea
                    name="description"
                    placeholder="Description"
                    required
                    className="w-full"
                />
                <Button type="submit" className="w-full">
                    <Plus className="mr-2 h-4 w-4" /> Add Good
                </Button>
            </form>
        </CardContent>
    </Card>
);

export default GoodsForm;
