import React from 'react';
import { ScreenNumber } from '../../types';
import { MAIN_MENU_BRANCHES, APP_INFO } from '../../data/learningMaterial';
import { RubElHizb, IslamicLatticeBg } from '../common/IslamicPattern';
import { 
  Target, 
  BookOpen, 
  Scroll, 
  Sparkles, 
  Users, 
  Heart, 
  Compass, 
  ArrowRight,
  Play
} from 'lucide-react';

interface ScreenProps {
  onNavigate: (screen: ScreenNumber) => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  'target': Target,
  'book-open': BookOpen,
  'scroll': Scroll,
  'sparkles': Sparkles,
  'users': Users,
  'heart': Heart,
  'compass': Compass
};

export const Screen03MainMenu: React.FC<ScreenProps> = ({ onNavigate }) => {
  return (
    <div className="relative min-h-[calc(100vh-6rem)] max-w-6xl mx-auto flex flex-col justify-between p-4 md:p-8">
      <IslamicLatticeBg opacity={0.04} />

      {/* Header section */}
      <div className="relative z-10 text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFDDBE] text-[#315A50] text-xs font-bold mb-2">
          <RubElHizb className="w-3.5 h-3.5" color="#315A50" />
          <span>PUSAT NAVIGASI PEMBELAJARAN</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-[#315A50]">
          Pilih Topik Pembelajaran
        </h2>
        <p className="text-xs sm:text-sm text-[#27332F]/80 max-w-xl mx-auto mt-1">
          Eksplorasi 7 cabang materi di bawah ini secara bebas atau berurutan sesuai kenyamanan belajarmu.
        </p>
      </div>

      {/* 7 Branches Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {MAIN_MENU_BRANCHES.map((branch, index) => {
          const IconComp = ICON_MAP[branch.icon] || BookOpen;
          const isWide = index === 6; // Branch 07 can span full width on large screens for visual balance

          return (
            <button
              key={branch.id}
              onClick={() => onNavigate(branch.targetScreen)}
              className={`group text-left p-5 rounded-2xl bg-white border border-[#9DB9A8]/40 shadow-xs hover:shadow-md hover:border-[#315A50] hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                isWide ? 'md:col-span-2 lg:col-span-3 bg-gradient-to-r from-white via-white to-[#EFDDBE]/30' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-[#315A50] text-[#FFF8E8] font-bold text-xs flex items-center justify-center font-heading">
                      {branch.id}
                    </span>
                    <span className="text-[11px] font-bold text-[#D9825B] tracking-wider uppercase">
                      {branch.badge}
                    </span>
                  </div>

                  <div className="w-9 h-9 rounded-xl bg-[#FFF8E8] border border-[#9DB9A8]/40 flex items-center justify-center text-[#315A50] group-hover:bg-[#315A50] group-hover:text-[#FFF8E8] transition-colors">
                    <IconComp className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base md:text-lg font-bold font-heading text-[#315A50] group-hover:text-[#234039] transition-colors line-clamp-1">
                  {branch.title}
                </h3>
                <p className="text-xs text-[#27332F]/75 mt-1 line-clamp-2">
                  {branch.subtitle}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#9DB9A8]/20 flex items-center justify-between text-xs font-bold text-[#315A50]">
                <span>Buka Materi</span>
                <ArrowRight className="w-4 h-4 text-[#E6B85C] transform group-hover:translate-x-1.5 transition-transform" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Sequential Learning Banner & Quick Action */}
      <div className="relative z-10 bg-[#EFDDBE]/70 rounded-2xl p-4 md:p-5 border border-[#9DB9A8]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#315A50] text-[#FFF8E8] flex items-center justify-center shrink-0">
            <Play className="w-5 h-5 text-[#E6B85C]" />
          </div>
          <div>
            <h4 className="text-sm font-bold font-heading text-[#315A50]">
              Ingin Belajar Terstruktur dari Awal?
            </h4>
            <p className="text-xs text-[#27332F]/75">
              Mulai secara sekuensial dari Layar 04 (Tujuan Pembelajaran) hingga Layar 19.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => onNavigate(2)}
            className="px-4 py-2 text-xs font-bold text-[#315A50] hover:bg-[#FFF8E8] rounded-xl border border-[#315A50]/30 transition-colors"
          >
            Refleksi Awal
          </button>
          <button
            onClick={() => onNavigate(4)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#315A50] text-[#FFF8E8] text-xs font-bold hover:bg-[#234039] shadow-sm hover:scale-102 active:scale-95 transition-all"
          >
            <span>Mulai dari Cabang 01</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E6B85C]" />
          </button>
        </div>
      </div>
    </div>
  );
};
