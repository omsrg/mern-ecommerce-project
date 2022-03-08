export type CartItemType = {
	name: string;
	imageUrl: string;
	price: number;
	countInStock: number;
	_id?: string;
	qty: number;
};

export type ProductType = Omit<CartItemType, 'product' | 'qty'> & { description: string };

// export const product: ProductType = {
// 	// product: 'etet',
// 	// qty: 4 ,
// 	name: 'hha',
// 	price: 3533,
// 	imageUrl: 'ete',
// 	countInStock: 9,
// 	description: 'gag'
// }

// type XY = Pick<XYZ, Exclude<keyof XYZ, "z">>
// type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
