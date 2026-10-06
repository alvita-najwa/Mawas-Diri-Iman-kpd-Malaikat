import React from 'react';
import { ScreenNumber } from '../../types';
import { ArrowLeft, ArrowRight, Home } from 'lucide-react';

interface NavigationControlsProps {
  currentScreen: ScreenNumber;
  onNavigate: (screen: ScreenNumber) => void;
  nextScreen?: ScreenNumber;
  prevScreen?: ScreenNumber;
  customActions?: React.ReactNode;
  showHome?: boolean;
  showBack?: boolean;
  showNext?: boolean;
  nextLabel?: string;
  prevLabel?: string;
}

export const NavigationControls: React.FC<NavigationControlsProps> = ({
  currentScreen,
  onNavigate,
  nextScreen,
  prevScreen,
  customActions,
  showHome = true,
  showBack = true,
  showNext = true,
  nextLabel = "LANJUT",
  prevLabel = "KEMBALI"
}) => {
  const defaultPrev = (currentScreen > 1 ? (currentScreen - 1) as ScreenNumber : 1) as ScreenNumber;
  const defaultNext = (currentScreen < 19 ? (currentScreen + 1) as ScreenNumber : 19) as ScreenNumber;

  const targetPrev = prevScreen ?? defaultPrev;
  const targetNext = nextScreen ?? defaultNext;

  return (
    <footer className="w-full mt-8 pt-4 border-t border-[#9DB9A8]/30 flex flex-wrap items-center justify-between gap-3 text-sm">
      {/* Left zone: Back and optional Home */}
      <div className="flex items-center gap-2">
        {showBack && currentScreen > 1 && (
          <button
            onClick={() => onNavigate(targetPrev)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#315A50]/30 text-[#315A50] hover:bg-[#9DB9A8]/20 transition-all font-semibold active:scale-95"
            aria-label="Kembali ke layar sebelumnya"
          >
            <ArrowLeft className="w-4 h-4 text-[#315A50]" />
            <span>{prevLabel}</span>
          </button>
        )}

        {showHome && currentScreen !== 3 && currentScreen > 1 && (
          <button
            onClick={() => onNavigate(3)}
            className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-[#315A50] hover:bg-[#9DB9A8]/20 transition-all font-semibold border border-[#9DB9A8]/40"
            title="Kembali ke Menu Utama"
          >
            <Home className="w-4 h-4 text-[#315A50]" />
            <span className="hidden sm:inline">MENU UTAMA</span>
          </button>
        )}
      </div>

      {/* Center zone: Contextual screen-specific actions */}
      {customActions && (
        <div className="flex items-center gap-2 flex-wrap justify-center">
          {customActions}
        </div>
      )}

      {/* Right zone: Next button */}
      <div className="flex items-center gap-2 ml-auto">
        {showNext && currentScreen < 19 && (
          <button
            onClick={() => onNavigate(targetNext)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#315A50] text-[#FFF8E8] hover:bg-[#234039] shadow-sm hover:shadow transition-all font-bold active:scale-95 group"
            aria-label="Lanjut ke layar berikutnya"
          >
            <span>{nextLabel}</span>
            <ArrowRight className="w-4 h-4 text-[#E6B85C] transition-transform group-hover:translate-x-1" />
          </button>
        )}
      </div>
    </footer>
  );
};
