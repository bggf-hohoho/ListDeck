import React from 'react';

interface UtilitiesListProps {
  onSelectTool?: (toolId: string) => void;
  activeTool?: string | null;
}

export const UtilitiesList: React.FC<UtilitiesListProps> = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center text-gray-400 animate-in fade-in duration-300">
      <div className="text-center space-y-2">
        <p className="text-sm font-medium">目前沒有可用的工具</p>
        <p className="text-[10px]">工具箱內容已移除</p>
      </div>
    </div>
  );
};