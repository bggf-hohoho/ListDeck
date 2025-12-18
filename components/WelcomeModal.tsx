import React from 'react';
import { X } from 'lucide-react';
import { AUTHOR_AVATAR_URL, FALLBACK_AVATAR_URL } from '../constants';

interface WelcomeModalProps {
  onClose: () => void;
}

export const WelcomeModal: React.FC<WelcomeModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-[2px] p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 relative">
        <div className="h-2 bg-[#B76E79] w-full"></div>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition hover:rotate-90 duration-200"
        >
          <X size={20} />
        </button>
        
        <div className="p-6 pt-8 flex flex-col items-center text-center">
          {/* Updated: Removed pink border/bg, increased size from w-16 (64px) to w-[74px] (~15% larger) */}
          <div className="w-[74px] h-[74px] rounded-full flex items-center justify-center mb-4 shadow-md overflow-hidden">
             <img 
               src={AUTHOR_AVATAR_URL}
               onError={(e) => { e.currentTarget.src = FALLBACK_AVATAR_URL; }}
               alt="Author"
               className="w-full h-full object-cover"
             />
          </div>
          
          <h2 className="text-xl font-black text-[#4A4036] mb-4 tracking-tight">
            貼心提醒
          </h2>
          
          <p className="text-sm text-gray-600 leading-relaxed mb-6 text-justify px-2">
            該網站<span className="text-[#B76E79] font-bold">不會留存使用者資料</span>，所以重開網頁、重新整理，剛剛輸入的內容、網址都會消失。<br/><br/>
            建議先把要輸入的內容都貼在自己的<span className="font-bold border-b border-[#B76E79] text-gray-800">記事本</span>，方便後續複製。
          </p>
          
          <button
            onClick={onClose}
            className="w-full bg-[#B76E79] hover:bg-[#9e5d66] text-white font-bold py-3 rounded-xl transition-all active:scale-95 shadow-md hover:shadow-lg"
          >
            我知道了
          </button>
        </div>
      </div>
    </div>
  );
};