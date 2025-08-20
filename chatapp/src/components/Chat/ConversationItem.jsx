import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

const ConversationItem = ({ 
  conversation, 
  isActive, 
  onSelect, 
  onDelete 
}) => {
  return (
    <div 
      className={`flex items-center justify-between p-3 cursor-pointer transition-colors
        ${isActive ? 'bg-gray-200 dark:bg-gray-700' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
      onClick={() => onSelect(conversation.id)}
    >
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-medium truncate dark:text-white">
          {conversation.title}
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 truncate mt-1">
          {conversation.messages.length > 0 
            ? conversation.messages[conversation.messages.length - 1].text.slice(0, 50) + 
              (conversation.messages[conversation.messages.length - 1].text.length > 50 ? '...' : '')
            : 'Empty conversation'}
        </p>
        <span className="text-xs text-gray-400 dark:text-gray-500 mt-1 block">
          {new Date(conversation.updatedAt).toLocaleDateString([], { 
            month: 'short', 
            day: 'numeric',
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </span>
        
      </div>
      
    </div>
  );
};

export default ConversationItem;