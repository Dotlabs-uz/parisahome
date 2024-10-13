export type GoodItemType = {
    id: number;
    name: string;
    price: number;
    description: string;
    categoryId: number;
    images: any;
};

export type GoodsType = {
    page: number;
    total: number;
    data: GoodItemType[];
};