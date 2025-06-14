import React, { FC, useState, KeyboardEvent, ChangeEvent } from "react";
import { Smile, Send } from "lucide-react";
import clsx from "clsx";

interface Message {
  id: number;
  senderId: string;
  senderName?: string;
  senderRole?: string;
  avatarUrl?: string;
  text: string;
  time: string;
}

interface ChatScreenProps {
  messages: Message[];
  currentUserId: string;
  onSend: (message: string) => void;
  date?: string;
}

const ChatScreen: FC<ChatScreenProps> = ({ messages, currentUserId, onSend, date = "8/20/2020" }) => {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] bg-white p-4 dark:bg-neutral-900">
      <div className="text-center text-xs text-gray-400 dark:text-gray-600 mb-4">{date}</div>
      <div className="overflow-y-auto space-y-4">
        {messages.map((msg) => (
          <MessageItem key={msg.id} message={msg} isSelf={msg.senderId === currentUserId} />
        ))}
      </div>
      <ChatInput onSend={onSend} />
    </div>
  );
};

interface MessageItemProps {
  message: Message;
  isSelf: boolean;
}

const MessageItem: FC<MessageItemProps> = ({ message, isSelf }) => {
  return (
    <div className={clsx("flex gap-2", isSelf ? "justify-end" : "justify-start")}>      
      {!isSelf && (
        <img
          src={message.avatarUrl || `https://api.dicebear.com/8.x/lorelei/svg?seed=${message.senderName}`}
          alt="avatar"
          className="h-8 w-8 rounded-full"
        />
      )}

      <div className={clsx("max-w-[70%] rounded-xl px-4 py-2 text-sm shadow", isSelf ? "bg-indigo-500 text-white" : "bg-indigo-50 text-gray-900 dark:bg-neutral-800 dark:text-white")}>        
        {!isSelf && (
          <div className="mb-1 text-xs font-medium text-gray-800 dark:text-gray-300">
            {message.senderName}
            <span className="ml-1 font-normal text-gray-400">{message.senderRole}</span>
          </div>
        )}
        <div>{message.text}</div>
        <div className="mt-1 text-[10px] text-right text-gray-400">{message.time}</div>
      </div>
    </div>
  );
};

interface ChatInputProps {
  onSend: (value: string) => void;
}

const ChatInput: FC<ChatInputProps> = ({ onSend }) => {
  const [value, setValue] = useState("");
  const handleSend = () => {
    if (!value.trim()) return;
    onSend(value.trim());
    setValue("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  return (
    <div className="flex items-center gap-3 border-t px-4 py-3 dark:border-neutral-800">
      <button className="text-gray-400 transition hover:text-indigo-500 dark:text-gray-500 dark:hover:text-indigo-400">
        <Smile size={20} />
      </button>

      <input
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Start typing…"
        className="flex-1 rounded-full bg-gray-100 px-4 py-2 text-sm focus:outline-none dark:bg-neutral-800 dark:text-gray-100"
      />

      <button
        onClick={handleSend}
        className="rounded-full bg-indigo-500 p-2 text-white transition hover:bg-indigo-600 focus:outline-none dark:bg-indigo-600 dark:hover:bg-indigo-500"
      >
        <Send size={18} className="-rotate-45" />
      </button>
    </div>
  );
};

export default ChatScreen;
