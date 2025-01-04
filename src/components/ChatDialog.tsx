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
import { useMessages } from "@/hooks/useMessages";

const ChatDialog = ({ children }: { children: React.ReactNode }) => {
  const { messages, isLoading, sendMessage } = useMessages();

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Chat with us</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col h-[500px]">
          <MessageList messages={messages} isLoading={isLoading} />
          <MessageInput onSendMessage={sendMessage} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatDialog;