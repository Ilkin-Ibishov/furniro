export interface GetProductsParams {
    page?: number;
    prompt?: string;
    'ShowMore.Take'?: number;
    categoryNames?: string[];
    isNew?: boolean;
    productTags?: string[];
    productSizes?: string[];
    productColors?: string[];
    minPrice?: number;
    maxPrice?: number;
    orderBy?: string;
  }

export interface Product {
    id: number;
    title: string;
    subTitle: string;
    isNew: boolean;
    salePrice: number;
    discountedPrice: number;
    discountPercent: number;
    imageFiles: string[];
  }
  
export interface ProductsResponse {
    totalProductCount: number;
    products: Product[];
  }
  