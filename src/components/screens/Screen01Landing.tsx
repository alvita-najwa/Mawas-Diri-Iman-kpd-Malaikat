import React from 'react';
import { ScreenNumber } from '../../types';
import { APP_INFO } from '../../data/learningMaterial';
import { RubElHizb, IslamicLatticeBg, IslamicArchMotif } from '../common/IslamicPattern';
import { ArrowRight, Sparkles, BookOpen } from 'lucide-react';

interface ScreenProps {
  onNavigate: (screen: ScreenNumber) => void;
}

export const Screen01Landing: React.FC<ScreenProps> = ({ onNavigate }) => {
  return (
    <div className="relative min-h-[calc(100vh-2rem)] flex flex-col justify-between items-center px-4 py-8 md:py-12 overflow-hidden text-center">
      <IslamicLatticeBg opacity={0.06} />

      {/* Top Academic Tag / Metadata */}
      <div className="relative z-10 flex flex-col items-center animate-fade-in">
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFDDBE]/80 border border-[#9DB9A8]/40 shadow-xs mb-3">
          <RubElHizb className="w-4 h-4 text-[#315A50]" color="#315A50" />
          <span className="text-xs md:text-sm font-bold text-[#315A50] tracking-wide">
            {APP_INFO.subject.toUpperCase()} · {APP_INFO.element.toUpperCase()}
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-[#27332F]/75">
          <span>PAI — AKIDAH — KELAS VII</span>
          <span className="text-[#9DB9A8]">·</span>
          <span>FASE D — SEMESTER GENAP</span>
        </div>
      </div>

      {/* Central Visual & Title Core */}
      <div className="relative z-10 max-w-4xl mx-auto my-auto py-6 flex flex-col items-center">
        {/* Subtle illuminated decorative badge */}
        <div className="relative mb-6">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-[#315A50] text-[#FFF8E8] flex items-center justify-center shadow-lg border-2 border-[#E6B85C]/60 transform rotate-45 transition-transform hover:rotate-90 duration-700">
            <div className="transform -rotate-45">
              <RubElHizb className="w-10 h-10 md:w-12 md:h-12 text-[#E6B85C]" color="#E6B85C" />
            </div>
          </div>
          <div className="absolute -inset-2 bg-[#E6B85C]/20 rounded-2xl blur-md -z-10" />
        </div>

        {/* Chapter Title */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold font-heading text-[#315A50] leading-tight max-w-3xl tracking-tight">
          MAWAS DIRI DAN INTROSPEKSI
          <span className="block text-[#D9825B] mt-1">DALAM MENJALANI KEHIDUPAN</span>
        </h1>

        {/* Decorative divider */}
        <div className="flex items-center gap-3 my-4 w-48 justify-center">
          <div className="h-0.5 grow bg-[#9DB9A8]" />
          <Sparkles className="w-4 h-4 text-[#E6B85C]" />
          <div className="h-0.5 grow bg-[#9DB9A8]" />
        </div>

        {/* Subtitle */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#27332F] font-heading">
          Iman kepada Malaikat Allah Swt.
        </h2>

        <p className="mt-3 text-xs sm:text-sm md:text-base text-[#27332F]/80 max-w-xl font-medium leading-relaxed">
          Media pembelajaran digital interaktif untuk membangun kesadaran akidah,
          kewaspadaan bersikap, dan akhlak mulia bagi generasi muda.
        </p>

        {/* Primary Action Button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={() => onNavigate(2)}
            className="flex items-center gap-3 px-8 py-3.5 rounded-2xl bg-[#315A50] text-[#FFF8E8] font-bold text-base md:text-lg shadow-md hover:bg-[#234039] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer group"
          >
            <span>MULAI</span>
            <ArrowRight className="w-5 h-5 text-[#E6B85C] transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => onNavigate(3)}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl border border-[#315A50]/30 text-[#315A50] font-semibold text-sm hover:bg-[#EFDDBE]/50 transition-colors"
          >
            <BookOpen className="w-4 h-4 text-[#315A50]" />
            <span>Pilih Menu Langsung</span>
          </button>
        </div>
      </div>

      {/* Bottom Educational Identity & Author Card */}
      <div className="relative z-10 w-full max-w-2xl mx-auto pt-6 border-t border-[#9DB9A8]/40">
        <IslamicArchMotif className="w-full h-6 mb-2" color="#9DB9A8" />
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#27332F]/75 gap-2">
          <div>
            <span className="font-semibold text-[#315A50]">Karya Penyusun: </span>
            <span className="font-bold text-[#27332F]">Shabrina Tsabita Asmi</span>
          </div>
          <div>
            <span>Media Pembelajaran Digital · PAI Fase D</span>
          </div>
        </div>
      </div>
    </div>
  );
};
