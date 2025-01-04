export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'agent';
  created_at: string;
}