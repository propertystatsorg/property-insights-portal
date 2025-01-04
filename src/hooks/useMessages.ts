import { supabase } from "@/integrations/supabase/client";
import { Message } from "@/types/chat";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const useMessages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) {
        console.error('Error fetching messages:', error);
        toast({
          title: "Error",
          description: "Failed to load messages",
          variant: "destructive",
        });
        return;
      }

      setMessages(data as Message[]);
      setIsLoading(false);
    };

    fetchMessages();

    // Subscribe to realtime changes
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

    // Cleanup subscription
    return () => {
      supabase.removeChannel(channel);
    };
  }, [toast]);

  const sendMessage = async (content: string, userName: string, userEmail: string) => {
    try {
      const userMessage = {
        content,
        sender: 'user' as const,
        user_name: userName,
        user_email: userEmail,
      };

      const { data: insertedMessage, error: userError } = await supabase
        .from('messages')
        .insert([userMessage])
        .select()
        .single();

      if (userError) throw userError;

      // Update messages state immediately with the user's message
      if (insertedMessage) {
        setMessages((prev) => [...prev, insertedMessage as Message]);
      }

      // Simulate agent response
      setTimeout(async () => {
        const agentMessage = {
          content: "Thank you for your message. Our team will get back to you soon.",
          sender: 'agent' as const,
          user_name: null,
          user_email: null,
        };

        const { error: agentError } = await supabase
          .from('messages')
          .insert([agentMessage]);

        if (agentError) {
          console.error('Error sending agent message:', agentError);
          toast({
            title: "Error",
            description: "Failed to send agent response",
            variant: "destructive",
          });
        }
      }, 1000);
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message",
        variant: "destructive",
      });
    }
  };

  return { messages, isLoading, sendMessage };
};