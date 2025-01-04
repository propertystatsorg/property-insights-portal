import { supabase } from "@/integrations/supabase/client";
import { Message } from "@/types/chat";
import { useEffect, useState } from "react";

export const useMessages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) {
        console.error('Error fetching messages:', error);
        return;
      }

      setMessages(data as Message[]);
      setIsLoading(false);
    };

    fetchMessages();
  }, []);

  useEffect(() => {
    const channel = supabase
      .channel('messages-channel')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
        },
        (payload) => {
          const newMessage = payload.new as Message;
          setMessages((prev) => [...prev, newMessage]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const sendMessage = async (content: string) => {
    const userMessage = {
      content,
      sender: 'user' as const,
    };

    const { error } = await supabase
      .from('messages')
      .insert([userMessage]);

    if (error) {
      console.error('Error sending message:', error);
      return;
    }

    // Simulate agent response
    setTimeout(async () => {
      const agentMessage = {
        content: "Thank you for your message. Our team will get back to you soon.",
        sender: 'agent' as const,
      };

      const { error: agentError } = await supabase
        .from('messages')
        .insert([agentMessage]);

      if (agentError) {
        console.error('Error sending agent message:', agentError);
      }
    }, 1000);
  };

  return { messages, isLoading, sendMessage };
};