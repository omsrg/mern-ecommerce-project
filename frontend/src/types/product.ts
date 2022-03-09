export type ProductType = {
	_id: string;
	name: string;
	imageUrl: string;
	price: number;
	countInStock: number;
	description: string;
};

export type CartItemType = {
	qty: number;
} & Omit<ProductType, 'description'>;

// export type ProductType = Omit<CartItemType, 'product' | 'qty'> & { description: string };

// type XY = Pick<XYZ, Exclude<keyof XYZ, "z">>
// type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
