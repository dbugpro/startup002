import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-slate-100 selection:bg-brand-500 selection:text-white">
      <div className="w-full max-w-lg px-4 text-center">
        <h1 className="text-2xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500">
          repository
        </h1>
        <p className="mt-4 text-lg text-slate-400 font-medium tracking-wide">
          admin0
        </p>
      </div>
    </div>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);