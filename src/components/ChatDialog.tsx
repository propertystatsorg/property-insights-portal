import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import MessageList from "./chat/MessageList";
import MessageInput from "./chat/MessageInput";
import UserInfoForm from "./chat/UserInfoForm";
import { useMessages } from "@/hooks/useMessages";
import { useState } from "react";

const ChatDialog = ({ children }: { children: React.ReactNode }) => {
  const { messages, isLoading, sendMessage } = useMessages();
  const [userInfo, setUserInfo] = useState<{ name: string; email: string } | null>(null);

  const handleUserInfoSubmit = (name: string, email: string) => {
    setUserInfo({ name, email });
  };

  const handleSendMessage = async (content: string) => {
    if (userInfo) {
      await sendMessage(content, userInfo.name, userInfo.email);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Chat with us</DialogTitle>
        </DialogHeader>
        {!userInfo ? (
          <UserInfoForm onSubmit={handleUserInfoSubmit} />
        ) : (
          <div className="flex flex-col h-[500px]">
            <MessageList messages={messages} isLoading={isLoading} />
            <MessageInput onSendMessage={handleSendMessage} />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ChatDialog;