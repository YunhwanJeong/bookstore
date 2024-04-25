interface IProductCategoryGroup {
  label: string;
  items: IProductCategory[];
}

interface IProductCategory {
  value: string;
  label: string;
}

interface IProduct {
  id: string;
  img: string;
  name: string;
  price: number;
  category: IProductCategory;
  description?: string;
}

export type { IProduct, IProductCategory, IProductCategoryGroup };
