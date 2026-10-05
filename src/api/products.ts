import api from './client';
import type { Product } from '../data/products';

export async function fetchProducts(): Promise<Product[]> {
  const res = await api.get<Product[]>('/api/products');
  return res.data;
}

export async function fetchProductById(id: string): Promise<Product> {
  const res = await api.get<Product>(`/api/products/${id}`);
  return res.data;
}