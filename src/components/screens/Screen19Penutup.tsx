import React from 'react';
import { ScreenNumber } from '../../types';
import { APP_INFO } from '../../data/learningMaterial';
import { RubElHizb, IslamicLatticeBg, IslamicArchMotif } from '../common/IslamicPattern';
import { 
  RotateCcw, 
  FileText, 
  Home, 
  CheckCircle2, 
  Sparkles, 
  Heart, 
  Award,
  ArrowRight
} from 'lucide-react';

interface ScreenProps {
  onNavigate: (screen: ScreenNumber) => void;
  onOpenLkpd: () => void;
}

export const Screen19Penutup: React.FC<ScreenProps> = ({ onNavigate, onOpenLkpd }) => {
  return (
    <div className="relative min-h-[calc(100vh-6rem)] max-w-5xl mx-auto flex flex-col justify-between p-4 md:p-8 text-center">
      <IslamicLatticeBg opacity={0.05} />

      {/* Screen Header */}
      <div className="relative z-10 mb-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFDDBE] text-[#315A50] text-xs font-bold mb-2">
          <RubElHizb className="w-3.5 h-3.5" color="#315A50" />
          <span>LAYAR 19 · PENUTUP & KOMITMEN REFLEKSI</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold font-heading text-[#315A50] tracking-tight">
          SUDAH SIAP MENJADI LEBIH BAIK?
        </h2>
        <div className="w-20 h-1 bg-[#E6B85C] rounded-full mx-auto my-3" />
      </div>

      {/* Reflective Synthesis Card */}
      <div className="relative z-10 bg-white rounded-3xl p-6 md:p-8 border border-[#9DB9A8]/50 shadow-md max-w-3xl mx-auto my-auto space-y-6">
        {/* Synthesis Chain: FAITH -> SELF-AWARENESS -> INTROSPECTION -> BETTER ACTION */}
        <div className="p-4 rounded-2xl bg-[#FFF8E8] border border-[#EFDDBE]">
          <span className="text-[11px] font-bold text-[#D9825B] uppercase tracking-widest block mb-3">
            Rantai Kesadaran Spiritual:
          </span>

          <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-extrabold font-heading text-[#315A50]">
            <span className="px-3 py-1.5 rounded-lg bg-[#315A50] text-[#FFF8E8]">
              IMAN (FAITH)
            </span>
            <span className="text-[#E6B85C]">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-[#D9825B] text-[#FFF8E8]">
              MAWAS DIRI (SELF-AWARENESS)
            </span>
            <span className="text-[#E6B85C]">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-[#9DB9A8] text-[#27332F]">
              INTROSPEKSI (INTROSPECTION)
            </span>
            <span className="text-[#E6B85C]">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-[#E6B85C] text-[#27332F]">
              PERILAKU BAIK (BETTER ACTION)
            </span>
          </div>
        </div>

        {/* Closing Reflective Message */}
        <div className="space-y-3 text-xs sm:text-sm md:text-base text-[#27332F]/85 leading-relaxed font-medium">
          <p>
            Alhamdulillah, kamu telah menuntaskan seluruh 19 tahapan pembelajaran materi 
            <strong> &quot;Mawas Diri dan Introspeksi dalam Menjalani Kehidupan melalui Iman kepada Malaikat Allah SWT.&quot;</strong>
          </p>
          <p className="bg-[#EFDDBE]/40 p-4 rounded-xl italic border-l-3 border-[#315A50] text-xs sm:text-sm text-[#27332F]">
            &quot;Keimanan kepada malaikat bukan sekadar pengetahuan hafalan tentang nama dan tugas, melainkan lentera di dalam dada yang membuat kita senantiasa mawas diri saat sendiri, jujur saat diuji, serta berani berintrospeksi saat melakukan kesalahan.&quot;
          </p>
        </div>

        {/* 3 Main Action Buttons Required by Brief */}
        <div className="pt-4 border-t border-[#9DB9A8]/30 flex flex-col sm:flex-row items-center justify-center gap-3">
          {/* LANJUT KE LKPD (Primary) */}
          <button
            onClick={onOpenLkpd}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl bg-[#315A50] text-[#FFF8E8] font-extrabold text-sm sm:text-base hover:bg-[#234039] shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer group"
          >
            <FileText className="w-5 h-5 text-[#E6B85C]" />
            <span>LANJUT KE LKPD</span>
            <ArrowRight className="w-4 h-4 text-[#E6B85C] group-hover:translate-x-1 transition-transform" />
          </button>

          {/* ULANGI MATERI */}
          <button
            onClick={() => onNavigate(3)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#EFDDBE] text-[#315A50] font-bold text-sm hover:bg-[#e4cea7] transition-all cursor-pointer"
          >
            <RotateCcw className="w-4 h-4 text-[#315A50]" />
            <span>ULANGI MATERI</span>
          </button>

          {/* HOME */}
          <button
            onClick={() => onNavigate(3)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl border border-[#315A50]/30 text-[#315A50] font-bold text-sm hover:bg-white transition-all cursor-pointer"
          >
            <Home className="w-4 h-4 text-[#315A50]" />
            <span>HOME</span>
          </button>
        </div>
      </div>

      {/* Footer Info */}
      <div className="relative z-10 mt-6 pt-4 border-t border-[#9DB9A8]/30 text-xs text-[#27332F]/70">
        <IslamicArchMotif className="w-full h-5 mb-2" color="#9DB9A8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-1 max-w-3xl mx-auto">
          <span>{APP_INFO.subject} · {APP_INFO.phaseGrade}</span>
          <span className="font-bold text-[#315A50]">Penyusun: {APP_INFO.author}</span>
        </div>
      </div>
    </div>
  );
};
