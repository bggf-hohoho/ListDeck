import React from 'react';
import { Crop, Eraser, Wand2, Maximize, Palette, ExternalLink, ChevronRight } from 'lucide-react';

interface UtilitiesListProps {
  onSelectTool?: (toolId: string) => void;
  activeTool?: string | null;
}

export const UtilitiesList: React.FC<UtilitiesListProps> = ({ onSelectTool, activeTool }) => {
  const tools = [
    { 
      id: 'crop',
      name: '照片剪裁', 
      icon: <Crop size={20} />, 
      desc: '裁切圖片至 1:1 或適合的比例', 
      type: 'internal'
    },
    { 
      id: 'remove-bg',
      name: '照片去背', 
      icon: <Eraser size={20} />, 
      desc: 'AI 自動移除雜亂背景', 
      url: 'https://www.remove.bg/zh-tw',
      type: 'external'
    },
    { 
      id: 'cleanup',
      name: '照片消除路人', 
      icon: <Wand2 size={20} />, 
      desc: '魔術橡皮擦，塗抹消除路人', 
      url: 'https://cleanup.pictures/',
      type: 'external'
    },
    { 
      id: 'upscale',
      name: '照片像素放大', 
      icon: <Maximize size={20} />, 
      desc: '提升畫質，模糊變清晰', 
      url: 'https://bigjpg.com/',
      type: 'external'
    },
    { 
      id: 'style',
      name: '照片風格切換', 
      icon: <Palette size={20} />, 
      desc: '將照片轉換為動漫或手繪風格', 
      url: 'https://vanceai.com/image-style-transfer/',
      type: 'external'
    },
  ];

  return (
    <div className="h-full flex flex-col animate-in fade-in duration-300">
      <div className="mb-4 bg-yellow-50 p-3 rounded-lg border border-yellow-100">
        <p className="text-xs text-yellow-800 leading-relaxed font-medium">
          💡 這裡收集了一些好用的免費線上工具，幫助您處理婚禮照片。點擊將開啟外部網站，剪裁工具可直接於右側使用。
        </p>
      </div>
      
      <div className="grid gap-3 overflow-y-auto pb-4">
        {tools.map((tool, index) => (
          tool.type === 'internal' && onSelectTool ? (
            <button
              key={tool.id}
              onClick={() => onSelectTool(tool.id)}
              className={`w-full text-left border rounded-xl p-4 flex items-center gap-4 transition-all group relative ${activeTool === tool.id ? 'bg-[#FAF0F0] border-[#B76E79] shadow-inner ring-1 ring-[#B76E79]' : 'bg-white border-[#E5E0D8] hover:shadow-md hover:border-[#B76E79] hover:-translate-y-0.5'}`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${activeTool === tool.id ? 'bg-[#B76E79] text-white' : 'bg-[#FAF0F0] text-[#B76E79] group-hover:bg-[#B76E79] group-hover:text-white'}`}>
                {tool.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className={`font-bold text-sm mb-1 ${activeTool === tool.id ? 'text-[#B76E79]' : 'text-gray-800'}`}>{tool.name}</h3>
                <p className="text-xs text-gray-500 truncate">{tool.desc}</p>
              </div>
              <ChevronRight size={16} className={`transition-colors ${activeTool === tool.id ? 'text-[#B76E79]' : 'text-gray-300 group-hover:text-[#B76E79]'}`} />
            </button>
          ) : (
            <a
              key={tool.id}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-[#E5E0D8] rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition-all hover:border-[#B76E79] group relative hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-full bg-[#FAF0F0] text-[#B76E79] flex items-center justify-center shrink-0 group-hover:bg-[#B76E79] group-hover:text-white transition-colors duration-300">
                {tool.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-800 text-sm mb-1">{tool.name}</h3>
                <p className="text-xs text-gray-500 truncate">{tool.desc}</p>
              </div>
              <ExternalLink size={14} className="text-gray-300 group-hover:text-[#B76E79]" />
            </a>
          )
        ))}
      </div>
      
      <div className="mt-auto pt-4 text-[10px] text-gray-400 text-center leading-relaxed">
        由第三方提供服務，與 ListDeck 無關<br/>
        請留意各網站的使用條款
      </div>
    </div>
  );
};