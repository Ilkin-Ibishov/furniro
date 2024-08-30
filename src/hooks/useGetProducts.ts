import { useState, useEffect } from 'react';
import axios from 'axios';
import { GetProductsParams, ProductsResponse } from '../types/common';
import { API_URL } from '../data/static-datas';

const useGetProducts = (params: GetProductsParams) => {
  const [products, setProducts] = useState<ProductsResponse[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/UserProduct/Products`, {
          headers: {
            'accept': 'text/plain'
          },
          params: {
            Page: params.page,
            Prompt: params.prompt,
            ['ShowMore.Take']: params['ShowMore.Take'],
            CategoryNames: params.categoryNames,
            IsNew: params.isNew,
            ProductTags: params.productTags,
            ProductSizes: params.productSizes,
            ProductColors: params.productColors,
            MinPrice: params.minPrice,
            MaxPrice: params.maxPrice,
            OrderBy: params.orderBy,
          }
        });
        setProducts(response.data);
      } catch (err) {
        setError('Error fetching products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [params]);

  return { products, loading, error };
};

export default useGetProducts;