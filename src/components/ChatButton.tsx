import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import ChatDialog from "./ChatDialog";

const ChatButton = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <ChatDialog>
        <Button size="lg" className="rounded-full h-14 w-14">
          <MessageCircle className="h-6 w-6" />
        </Button>
      </ChatDialog>
    </div>
  );
};

export default ChatButton;