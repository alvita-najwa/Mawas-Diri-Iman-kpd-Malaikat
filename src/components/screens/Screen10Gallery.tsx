import React from 'react';
import { ScreenNumber } from '../../types';
import { ANGEL_PAIRS } from '../../data/learningMaterial';
import { RubElHizb, IslamicLatticeBg } from '../common/IslamicPattern';
import { NavigationControls } from '../common/NavigationControls';
import { ArrowRight, Sparkles, BookOpen, ExternalLink } from 'lucide-react';

interface ScreenProps {
  onNavigate: (screen: ScreenNumber) => void;
}

export const Screen10Gallery: React.FC<ScreenProps> = ({ onNavigate }) => {
  return (
    <div className="relative min-h-[calc(100vh-6rem)] max-w-6xl mx-auto flex flex-col justify-between p-4 md:p-8">
      <IslamicLatticeBg opacity={0.04} />

      {/* Screen Header */}
      <div className="relative z-10 text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFDDBE] text-[#315A50] text-xs font-bold mb-2">
          <RubElHizb className="w-3.5 h-3.5" color="#315A50" />
          <span>CABANG 05 · TUJUAN PEMBELAJARAN 4</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-[#315A50]">
          Galeri Nama & Tugas 10 Malaikat
        </h2>
        <p className="text-xs sm:text-sm text-[#27332F]/80 max-w-xl mx-auto mt-1">
          Sepuluh malaikat yang wajib diketahui, dikelompokkan ke dalam 5 pasang amanah tugas khusus.
          Klik pasangan untuk melihat layar detail.
        </p>
      </div>

      {/* 5 Pairs Interactive Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {ANGEL_PAIRS.map((pair, idx) => {
          const isLastWide = idx === 4; // Pair 5 (Malik-Ridwan)

          return (
            <div
              key={pair.id}
              onClick={() => onNavigate(pair.screenTarget)}
              className={`group bg-white rounded-2xl border border-[#9DB9A8]/40 p-5 shadow-xs hover:shadow-md hover:border-[#315A50] hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                isLastWide ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Pair Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[#9DB9A8]/30 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-[#EFDDBE] text-[#315A50] font-bold text-xs flex items-center justify-center font-heading">
                      0{pair.id}
                    </span>
                    <span className="text-[11px] font-bold text-[#D9825B] uppercase tracking-wider">
                      Pasangan {pair.id}
                    </span>
                  </div>
                  <span className="text-[11px] text-[#27332F]/60 font-semibold">
                    Layar {pair.screenTarget}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-heading text-[#315A50] group-hover:text-[#234039] transition-colors mb-1">
                  {pair.pairName}
                </h3>
                <p className="text-xs font-semibold text-[#D9825B] mb-4">
                  {pair.pairConcept}
                </p>

                {/* Sub-cards for the two angels */}
                <div className="space-y-2.5">
                  {/* Angel 1 */}
                  <div className="p-2.5 rounded-xl bg-[#FFF8E8] border border-[#EFDDBE]/60 text-xs">
                    <div className="flex items-center justify-between font-bold text-[#315A50] mb-0.5">
                      <span>1. Malaikat {pair.angel1.name}</span>
                      <span className="font-arabic text-sm text-[#315A50]">{pair.angel1.arabicName}</span>
                    </div>
                    <p className="text-[#27332F]/80 text-[11px] line-clamp-2">
                      {pair.angel1.duty}
                    </p>
                  </div>

                  {/* Angel 2 */}
                  <div className="p-2.5 rounded-xl bg-[#FFF8E8] border border-[#EFDDBE]/60 text-xs">
                    <div className="flex items-center justify-between font-bold text-[#315A50] mb-0.5">
                      <span>2. Malaikat {pair.angel2.name}</span>
                      <span className="font-arabic text-sm text-[#315A50]">{pair.angel2.arabicName}</span>
                    </div>
                    <p className="text-[#27332F]/80 text-[11px] line-clamp-2">
                      {pair.angel2.duty}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Prompt */}
              <div className="mt-4 pt-3 border-t border-[#9DB9A8]/20 flex items-center justify-between text-xs font-bold text-[#315A50]">
                <span>Buka Detail Pasangan</span>
                <ArrowRight className="w-4 h-4 text-[#E6B85C] group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <NavigationControls
        currentScreen={10}
        onNavigate={onNavigate}
        prevScreen={9}
        nextScreen={11}
        nextLabel="MULAI PASANGAN 1: JIBRIL & MIKAIL"
      />
    </div>
  );
};
