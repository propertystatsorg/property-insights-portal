export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'agent';
  created_at: string;
  user_name: string | null;
  user_email: string | null;
}