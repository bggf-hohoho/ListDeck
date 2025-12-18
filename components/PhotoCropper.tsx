import React, { useState, useRef, useEffect } from 'react';
import { Upload, Download, ZoomIn, RotateCw, Image as ImageIcon, RefreshCcw, Scissors } from 'lucide-react';

export const PhotoCropper: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [cropSize, setCropSize] = useState({ width: 400, height: 400 });

  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result as string);
        setZoom(1);
        setRotation(0);
        setOffset({ x: 0, y: 0 });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
    setDragStart({ x: clientX - offset.x, y: clientY - offset.y });
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
    setOffset({
      x: clientX - dragStart.x,
      y: clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const generateCrop = () => {
    if (!imageRef.current || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to high resolution for download
    const outputScale = 2; // 2x resolution
    canvas.width = cropSize.width * outputScale;
    canvas.height = cropSize.height * outputScale;

    // Fill background (optional, usually white or transparent)
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Calculate drawing params
    // The view shows the image transformed by: translate(offset) scale(zoom) rotate(rotation)
    // We need to map that to the canvas.
    // The "viewport" center is (cropSize.width/2, cropSize.height/2).
    
    ctx.save();
    ctx.scale(outputScale, outputScale);
    
    // Move to center of crop area
    ctx.translate(cropSize.width / 2, cropSize.height / 2);
    
    // Apply offset (relative to center)
    ctx.translate(offset.x, offset.y);
    
    // Apply Scale & Rotation
    ctx.scale(zoom, zoom);
    ctx.rotate((rotation * Math.PI) / 180);
    
    // Draw Image centered
    const img = imageRef.current;
    ctx.drawImage(img, -img.naturalWidth / 2, -img.naturalHeight / 2);
    
    ctx.restore();

    // Trigger Download
    const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
    const link = document.createElement('a');
    link.download = `cropped-image-${Date.now()}.jpg`;
    link.href = dataUrl;
    link.click();
  };

  return (
    <div className="flex flex-col h-full w-full bg-gray-100 rounded-xl overflow-hidden shadow-inner border border-gray-200">
      <div className="bg-white p-4 border-b border-gray-200 flex justify-between items-center shrink-0 h-16">
        <h2 className="font-bold text-gray-700 flex items-center gap-2">
           <Scissors className="text-[#B76E79]" size={20} />
           照片剪裁工具
        </h2>
        {imageSrc && (
          <div className="flex gap-2">
             <button 
               onClick={() => setImageSrc(null)} 
               className="text-xs text-gray-500 hover:text-red-500 px-3 py-1.5 rounded transition flex items-center gap-1"
             >
                <RefreshCcw size={14} /> 重置
             </button>
             <button 
               onClick={generateCrop} 
               className="bg-[#B76E79] hover:bg-[#9e5d66] text-white px-4 py-1.5 rounded-lg text-sm font-bold flex items-center gap-2 shadow-sm transition-all hover:scale-105 active:scale-95"
             >
                <Download size={16} /> 下載圖片
             </button>
          </div>
        )}
      </div>

      <div className="flex-1 relative overflow-hidden flex items-center justify-center bg-[#1a1a1a] select-none">
        {!imageSrc ? (
          <div className="text-center">
             <label className="cursor-pointer group flex flex-col items-center gap-4">
                <div className="w-24 h-24 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors border-2 border-dashed border-gray-600 group-hover:border-gray-400">
                   <Upload size={32} className="text-gray-400 group-hover:text-white" />
                </div>
                <div className="space-y-1">
                   <p className="text-gray-300 font-bold">上傳照片</p>
                   <p className="text-gray-500 text-sm">支援 JPG, PNG 格式</p>
                </div>
                <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
             </label>
          </div>
        ) : (
          <div 
             className="relative overflow-hidden cursor-move touch-none shadow-2xl"
             style={{ 
               width: cropSize.width, 
               height: cropSize.height,
               boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.85)' // Dark overlay outside
             }}
             ref={containerRef}
             onMouseDown={handleMouseDown}
             onMouseMove={handleMouseMove}
             onMouseUp={handleMouseUp}
             onMouseLeave={handleMouseUp}
             onTouchStart={handleMouseDown}
             onTouchMove={handleMouseMove}
             onTouchEnd={handleMouseUp}
          >
             {/* Reference Image for Rendering (Hidden visually but used for layout) */}
             <img 
               ref={imageRef}
               src={imageSrc} 
               className="absolute max-w-none pointer-events-none"
               style={{
                 left: '50%',
                 top: '50%',
                 transform: `translate(-50%, -50%) translate(${offset.x}px, ${offset.y}px) scale(${zoom}) rotate(${rotation}deg)`,
                 transformOrigin: 'center center'
               }}
               alt="To Crop" 
               draggable={false}
             />
             
             {/* Grid Overlay */}
             <div className="absolute inset-0 border border-white/30 pointer-events-none">
                <div className="absolute left-1/3 top-0 bottom-0 w-px bg-white/30"></div>
                <div className="absolute right-1/3 top-0 bottom-0 w-px bg-white/30"></div>
                <div className="absolute top-1/3 left-0 right-0 h-px bg-white/30"></div>
                <div className="absolute bottom-1/3 left-0 right-0 h-px bg-white/30"></div>
             </div>
          </div>
        )}
      </div>

      {imageSrc && (
        <div className="bg-white p-4 border-t border-gray-200 shrink-0 h-28 flex flex-col justify-center gap-3">
           <div className="flex items-center gap-4">
              <span className="text-xs text-gray-500 w-8">縮放</span>
              <ZoomIn size={16} className="text-gray-400" />
              <input 
                type="range" 
                min="0.5" 
                max="3" 
                step="0.05"
                value={zoom} 
                onChange={(e) => setZoom(parseFloat(e.target.value))}
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#B76E79]"
              />
              <span className="text-xs text-gray-500 font-mono w-10 text-right">{Math.round(zoom * 100)}%</span>
           </div>
           
           <div className="flex items-center gap-4">
              <span className="text-xs text-gray-500 w-8">旋轉</span>
              <RotateCw size={16} className="text-gray-400" />
              <input 
                type="range" 
                min="-180" 
                max="180" 
                value={rotation} 
                onChange={(e) => setRotation(parseInt(e.target.value))}
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#B76E79]"
              />
              <span className="text-xs text-gray-500 font-mono w-10 text-right">{rotation}°</span>
           </div>
        </div>
      )}
      
      {/* Hidden Canvas for Generation */}
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
};