import api from './client';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  bullets: string[];
}

export async function fetchServices(): Promise<ServiceItem[]> {
  const res = await api.get<ServiceItem[]>('/api/services');
  return res.data;
}

export async function fetchServiceById(id: string): Promise<ServiceItem> {
  const res = await api.get<ServiceItem>(`/api/services/${id}`);
  return res.data;
}