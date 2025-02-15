import React from 'react';

const elements = [
  { 
    name: 'Kids Illustration', 
    image: 'https://picsum.photos/32/32?random=1', 
    value: 0 
  },
  { 
    name: 'Toon & Anime', 
    image: 'https://picsum.photos/32/32?random=2', 
    value: 0 
  },
  { 
    name: 'Folk Art Illustration', 
    image: 'https://picsum.photos/32/32?random=3', 
    value: 0 
  },
  { 
    name: 'Coloring Book', 
    image: 'https://picsum.photos/32/32?random=4', 
    value: 0 
  },
];

const ElementsPanel: React.FC = () => {
  return (
    <div className="bg-[#1C1C1E] rounded-lg p-4 h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Elements</h2>
        <button className="text-sm text-gray-400 hover:text-white flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
          </svg>
          Reset
        </button>
      </div>
      <div className="space-y-4 flex-grow overflow-y-auto">
        {elements.map((element) => (
          <div key={element.name} className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={element.image} alt={element.name} className="w-8 h-8 rounded-md mr-3" />
              <span className="text-sm">{element.name}</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm mr-2">{element.value}</span>
              <input
                type="range"
                min="0"
                max="100"
                value={element.value}
                className="w-24 accent-[#E44E51]"
                onChange={() => {}}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElementsPanel;