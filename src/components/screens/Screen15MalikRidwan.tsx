import React from 'react';
import { ScreenNumber } from '../../types';
import { RubElHizb, IslamicLatticeBg, IslamicArchMotif } from '../common/IslamicPattern';
import { NavigationControls } from '../common/NavigationControls';
import { ShieldAlert, DoorOpen, Grid, ArrowRight, Home, Sparkles } from 'lucide-react';

interface ScreenProps {
  onNavigate: (screen: ScreenNumber) => void;
}

export const Screen15MalikRidwan: React.FC<ScreenProps> = ({ onNavigate }) => {
  return (
    <div className="relative min-h-[calc(100vh-6rem)] max-w-5xl mx-auto flex flex-col justify-between p-4 md:p-8">
      <IslamicLatticeBg opacity={0.04} />

      {/* Screen Header */}
      <div className="relative z-10 text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFDDBE] text-[#315A50] text-xs font-bold mb-2">
          <RubElHizb className="w-3.5 h-3.5" color="#315A50" />
          <span>PASANGAN 05 · PENJAGA PINTU PEMBALASAN AKHIRAT</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-[#315A50]">
          Malaikat Malik & Malaikat Ridwan
        </h2>
        <p className="text-xs sm:text-sm text-[#27332F]/80 max-w-lg mx-auto mt-1">
          Dua malaikat penjaga gerbang akhirat yang melambangkan keadilan pembalasan dan keridaan Allah SWT.
        </p>
      </div>

      {/* Two Symbolic Gates/Panels (Abstract, dignified, respectful) */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        {/* Panel Malik (Symbolic Gate) */}
        <div className="bg-white rounded-3xl p-6 md:p-7 border border-[#D9825B]/40 shadow-md flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9825B]/5 rounded-bl-full pointer-events-none" />

          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#9DB9A8]/30 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-[#D9825B]/15 text-[#D9825B] flex items-center justify-center border border-[#D9825B]/30">
                  <ShieldAlert className="w-6 h-6 text-[#D9825B]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-[#27332F]">
                    Malik
                  </h3>
                  <span className="text-xs text-[#D9825B] font-bold">
                    Penjaga Pintu Neraka
                  </span>
                </div>
              </div>
              <span className="font-arabic text-xl font-bold text-[#315A50]">
                مَالِكٌ
              </span>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#FFF8E8] border border-[#EFDDBE]">
                <span className="text-[11px] font-bold text-[#D9825B] uppercase tracking-wider block mb-1">
                  Amanah Pokok:
                </span>
                <p className="text-sm font-bold text-[#27332F] leading-relaxed">
                  &quot;Tugas: Malaikat yang bertugas menjaga pintu Neraka dengan ketegasan dan kepatuhan mutlak kepada Allah SWT.&quot;
                </p>
              </div>

              <div className="text-xs sm:text-sm text-[#27332F]/80 space-y-2 leading-relaxed">
                <p>
                  Malaikat Malik memimpin para malaikat Zabaniyah. Sifatnya tegas, berwibawa, dan tidak pernah bermaksiat kepada Allah atas apa yang diperintahkan kepadanya.
                </p>
                <p className="text-xs italic bg-[#EFDDBE]/40 p-2.5 rounded-lg border-l-2 border-[#D9825B]">
                  <strong>Hikmah Karakter:</strong> Menanamkan rasa takut (<em>khauf</em>) terhadap perbuatan maksiat dan senantiasa berhati-hati agar terhindar dari siksa Allah.
                </p>
              </div>
            </div>
          </div>

          <IslamicArchMotif className="w-full h-4 mt-4" color="#D9825B" />
        </div>

        {/* Panel Ridwan (Symbolic Gate) */}
        <div className="bg-white rounded-3xl p-6 md:p-7 border border-[#315A50]/40 shadow-md flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#315A50]/5 rounded-bl-full pointer-events-none" />

          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#9DB9A8]/30 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-[#315A50]/15 text-[#315A50] flex items-center justify-center border border-[#315A50]/30">
                  <DoorOpen className="w-6 h-6 text-[#315A50]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-[#315A50]">
                    Ridwan
                  </h3>
                  <span className="text-xs text-[#315A50] font-bold">
                    Penjaga Pintu Surga
                  </span>
                </div>
              </div>
              <span className="font-arabic text-xl font-bold text-[#315A50]">
                رِضْوَانُ
              </span>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#FFF8E8] border border-[#EFDDBE]">
                <span className="text-[11px] font-bold text-[#315A50] uppercase tracking-wider block mb-1">
                  Amanah Pokok:
                </span>
                <p className="text-sm font-bold text-[#27332F] leading-relaxed">
                  &quot;Tugas: Malaikat yang bertugas menjaga pintu Surga dan menyambut hamba-hamba beriman yang beramal saleh.&quot;
                </p>
              </div>

              <div className="text-xs sm:text-sm text-[#27332F]/80 space-y-2 leading-relaxed">
                <p>
                  Malaikat Ridwan memancarkan keramahan dan kesejukan. Menyambut penghuni surga dengan ucapan salam kedamaian (<em>Salāmun ‘alaikum</em>) atas kesabaran dan amal kebajikan mereka selama di dunia.
                </p>
                <p className="text-xs italic bg-[#EFDDBE]/40 p-2.5 rounded-lg border-l-2 border-[#315A50]">
                  <strong>Hikmah Karakter:</strong> Menumbuhkan rasa harap (<em>raja&apos;</em>) dan optimisme beribadah untuk meraih keridaan dan surga Allah SWT.
                </p>
              </div>
            </div>
          </div>

          <IslamicArchMotif className="w-full h-4 mt-4" color="#315A50" />
        </div>
      </div>

      {/* Explicit Required Action Bar: GALLERY, HOME, CONTINUE TO WISDOM */}
      <div className="relative z-10 bg-[#EFDDBE]/60 p-4 rounded-2xl border border-[#9DB9A8]/40 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigate(10)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-[#315A50] bg-white hover:bg-[#FFF8E8] border border-[#315A50]/30 shadow-xs transition-colors"
          >
            <Grid className="w-3.5 h-3.5 text-[#315A50]" />
            <span>GALERI MALAIKAT</span>
          </button>
          <button
            onClick={() => onNavigate(3)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-[#315A50] bg-white hover:bg-[#FFF8E8] border border-[#315A50]/30 shadow-xs transition-colors"
          >
            <Home className="w-3.5 h-3.5 text-[#315A50]" />
            <span>HOME (MENU UTAMA)</span>
          </button>
        </div>

        <button
          onClick={() => onNavigate(16)}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#315A50] text-[#FFF8E8] text-xs sm:text-sm font-extrabold hover:bg-[#234039] shadow-sm hover:scale-102 active:scale-95 transition-all group ml-auto"
        >
          <span>CONTINUE TO WISDOM (LANJUT KE HIKMAH)</span>
          <ArrowRight className="w-4 h-4 text-[#E6B85C] group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Standard Navigation Controls */}
      <NavigationControls
        currentScreen={15}
        onNavigate={onNavigate}
        prevScreen={14}
        nextScreen={16}
        nextLabel="LANJUT KE HIKMAH"
      />
    </div>
  );
};
