import api from './client';

export interface CalloutRequest {
  fullName: string;
  phone: string;
  email: string;
  urgency: string;
  propertyAddress: string;
  issueDescription: string;
  preferredContactMethod: string;
  preferredVisitTime?: string;
}

export interface CalloutResponse {
  success: boolean;
  id: number;
  message: string;
}

export async function sendCalloutRequest(
  data: CalloutRequest
): Promise<CalloutResponse> {
  const res = await api.post<CalloutResponse>('/api/callout', data);
  return res.data;
}