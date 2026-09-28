import React from 'react';
import { CheckCircle2, RotateCcw, Sparkles, LayoutDashboard, BookOpen, GraduationCap, Newspaper } from 'lucide-react';

interface NavbarProps {
  completedCount: number;
  totalCount: number;
  activeView: 'guide' | 'simulator';
  onViewChange: (view: 'guide' | 'simulator') => void;
  onReset: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  completedCount,
  totalCount,
  activeView,
  onViewChange,
  onReset,
}) => {
  const percentage = Math.round((completedCount / totalCount) * 100);

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs py-2.5 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        {/* 左側：品牌 Logo 與標籤 */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          <div className="text-xl sm:text-2xl font-black italic tracking-tighter leading-none select-none flex items-center">
            <span className="text-[#e08945]">Master</span>
            <span className="text-[#2b2e4a]">Talks</span>
          </div>
          <span className="hidden md:flex bg-blue-50 text-blue-700 text-[11px] font-bold px-2.5 py-1 rounded-full items-center gap-1 border border-blue-200/80 whitespace-nowrap shrink-0">
            <Sparkles className="w-3 h-3 text-blue-600 shrink-0" />
            Vibe Coding 實戰
          </span>
        </div>

        {/* 中間：模式切換 Tab 按鈕組 */}
        <div className="flex items-center bg-slate-100 p-1 rounded-2xl border border-slate-200/90 shrink-0">
          <button
            onClick={() => onViewChange('guide')}
            className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 ${
              activeView === 'guide'
                ? 'bg-white text-slate-900 shadow-xs border border-slate-200/60 font-extrabold'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
            <span>24 步提示卡</span>
          </button>
          <button
            onClick={() => onViewChange('simulator')}
            className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 ${
              activeView === 'simulator'
                ? 'bg-blue-600 text-white shadow-xs font-extrabold'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <LayoutDashboard className="w-3.5 h-3.5 text-blue-200 shrink-0" />
            <span>STEP 24 實機模擬</span>
          </button>
        </div>

        {/* 右側：每日晨報 + 加入課程按鈕 + 完成進度 + 進度條 */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="https://service-95159780377.asia-south1.run.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-bold px-3 py-2 rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer hover:shadow-xs shrink-0"
            title="前往 每日晨報"
          >
            <Newspaper className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>每日晨報</span>
          </a>

          <a
            href="https://mastertalks.tw/products/ai-taiwan-stock?ref=Hsiang"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white text-xs font-black px-3.5 py-2 rounded-xl shadow-md shadow-orange-500/20 hover:shadow-lg transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer transform hover:-translate-y-0.5 shrink-0"
            title="前往 MasterTalks 官方課程"
          >
            <GraduationCap className="w-4 h-4 shrink-0" />
            <span>點選加入課程</span>
          </a>

          <div className="hidden lg:flex items-center gap-2 bg-slate-50 border border-slate-200/80 px-2.5 py-1.5 rounded-xl shrink-0">
            <div className="text-xs font-semibold text-slate-600 whitespace-nowrap flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="text-blue-600 font-extrabold text-xs font-mono">
                {completedCount}/{totalCount}
              </span>
            </div>
            <div className="w-16 h-2 bg-slate-200 rounded-full overflow-hidden shrink-0">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-500"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>

          <button
            onClick={onReset}
            className="text-slate-400 hover:text-red-600 hover:bg-red-50 p-1.5 rounded-xl border border-transparent hover:border-red-100 transition-all flex items-center gap-1 cursor-pointer shrink-0 text-xs font-medium"
            title="重置學習進度"
          >
            <RotateCcw className="w-3.5 h-3.5 shrink-0" />
          </button>
        </div>
      </div>
    </nav>
  );
};

