import api from './client';

export interface RoomDetail {
  size: string;
  type: string;
  notes: string;
}

export interface QuoteRequest {
  fullName: string;
  email: string;
  phone: string;
  preferredContactMethod: string;
  urgencyLevel: string;
  serviceType: string;
  preferredDate: string;
  additionalInformation: string;
  rooms: RoomDetail[];
}

export interface QuoteResponse {
  success: boolean;
  id: number;
  message: string;
}

export async function sendQuoteRequest(
  data: QuoteRequest
): Promise<QuoteResponse> {
  const res = await api.post<QuoteResponse>('/api/quote', data);
  return res.data;
}