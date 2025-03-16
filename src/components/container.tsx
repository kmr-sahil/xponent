import { Code } from 'lucide-react';
import React from 'react';

const ContentContainer = ({ 
  title, 
  description, 
  component, 
  link,
  shareLink = true
}:any) => {
  return (
    <div className=" bg-zinc-50/70 rounded-3xl overflow-hidden shadow-xs border-1 border-zinc-50 font-mono">
      {/* Header with title and action link */}
      <div className="flex justify-between items-center px-4 sm:px-6  mt-[1.5rem]">
        <h2 className="text-xl font-bold text-zinc-600">{title}</h2>
        <div className="flex space-x-2">
          {shareLink && (
            <a href={link || "#"} className="text-zinc-400 hover:text-zinc-500">
              <Code size={14}/>
            </a>
          )}
        </div>
      </div>
      
      {/* Description area */}
      <div className="px-4 py-3 sm:px-6  text-zinc-600 ">
        {description}
      </div>
      
      {/* Component display area */}
      <div className="p-4 sm:py-6 bg-zinc-100/70 mt-[1rem]">
        {component}
      </div>
    </div>
  );
};

export default ContentContainer;