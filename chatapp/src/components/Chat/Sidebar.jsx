import React, { useState } from 'react';
import { FiSun, FiMoon, FiPlus, FiChevronLeft, FiChevronRight, FiMoreVertical } from 'react-icons/fi';
import ConversationItem from './ConversationItem';

const Sidebar = ({ 
  isOpen, 
  setIsOpen,
  darkMode, 
  conversations, 
  currentConversation, 
  onToggleDarkMode, 
  onNewConversation, 
  onSelectConversation, 
  onDeleteConversation,
  onArchiveConversation,
  onRenameConversation,
  onShareConversation
}) => {
  const [activeMenuId, setActiveMenuId] = useState(null);

  const toggleMenu = (conversationId) => {
    setActiveMenuId(activeMenuId === conversationId ? null : conversationId);
  };

  const handleAction = (action, conversationId) => {
    setActiveMenuId(null); // Close menu after action
    switch(action) {
      case 'archive':
        onArchiveConversation(conversationId);
        break;
      case 'delete':
        onDeleteConversation(conversationId);
        break;
      case 'rename':
        onRenameConversation(conversationId);
        break;
      case 'share':
        onShareConversation(conversationId);
        break;
      default:
        break;
    }
  };

  return (
    <div className={`fixed md:relative h-full transition-all duration-300 ease-in-out bg-gray-50 dark:bg-gray-800 ${isOpen ? 'w-64' : 'w-0 md:w-20'} overflow-hidden`}>
      <div className="flex flex-col h-full">
        {/* Sidebar Header */}
        <div className="p-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
          {isOpen ? (
            <button 
              onClick={onNewConversation}
              className="flex items-center justify-center gap-2 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors"
            >
              <FiPlus size={18} />
              <span>New Chat</span>
            </button>
          ) : (
            <button 
              onClick={onNewConversation}
              className="flex items-center justify-center w-10 h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
            >
              <FiPlus size={18} />
            </button>
          )}
          
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="hidden md:flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 ml-2"
          >
            {isOpen ? <FiChevronLeft size={18} color='#fff' /> : <FiChevronRight size={18} color='#fff'/>}
          </button>
        </div>

        {/* Theme Toggle */}
        {/* <div className="p-4 flex justify-center md:justify-start">
          <button 
            onClick={onToggleDarkMode}
            className={`flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 ${!isOpen ? 'mx-auto' : ''}`}
          >
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          {isOpen && (
            <span className="ml-2 flex items-center text-sm dark:text-gray-300">
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </span>
          )}
        </div> */}

        {/* Conversations List */}
        <div className="flex-1 overflow-y-auto">
          {conversations.length > 0 ? (
            conversations.map((conv) => (
              <div 
                key={conv.id} 
                className={`relative flex items-center group ${currentConversation === conv.id ? 'bg-gray-200 dark:bg-gray-700' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
              >
                <ConversationItem
                  conversation={conv}
                  isActive={currentConversation === conv.id}
                  onSelect={onSelectConversation}
                  isOpen={isOpen}
                />
                
                
                <div className={`absolute right-2 flex ${isOpen ? '' : 'hidden'}`}>
                  <button 
                    onClick={() => toggleMenu(conv.id)}
                    className="p-1 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600"
                  >
                    <FiMoreVertical size={16} color='#fff'/>
                  </button>
                  
                  {activeMenuId === conv.id && (
                    <div className="absolute right-0 top-8 z-10 w-20 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 border border-gray-200 dark:border-gray-700">
                      <button 
                        onClick={() => handleAction('archive', conv.id)}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 text-white"
                      >
                        Archive
                      </button>
                      <button 
                        onClick={() => handleAction('delete', conv.id)}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 text-white"
                      >
                        Delete
                      </button>
                      <button 
                        onClick={() => handleAction('rename', conv.id)}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 text-white"
                      >
                        Rename
                      </button>
                      <button 
                        onClick={() => handleAction('share', conv.id)}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 text-white"
                      >
                        Share
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="p-4 text-center text-gray-500 dark:text-gray-400">
              No conversations yet
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;