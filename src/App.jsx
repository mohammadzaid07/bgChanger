import { useState } from 'react';
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState('bg-white');

  return (
    <>
      {/* Apply the Tailwind class using template literals */}
      <div className={`w-full h-screen duration-200 ${bgColor}`}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setBgColor('bg-white')}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            >
              White
            </button>
            <button
              onClick={() => setBgColor('bg-black')}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            >
              Black
            </button>
            <button
              onClick={() => setBgColor('bg-red-500')}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            >
              Red
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
