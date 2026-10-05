import api from './client';

export interface ContactMessage {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  id: number;
  message: string;
}

export async function sendContactMessage(
  data: ContactMessage
): Promise<ContactResponse> {
  const res = await api.post<ContactResponse>('/api/contact', data);
  return res.data;
}