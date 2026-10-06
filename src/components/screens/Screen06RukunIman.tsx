import React, { useState } from 'react';
import { ScreenNumber } from '../../types';
import { PILLARS_OF_FAITH } from '../../data/learningMaterial';
import { RubElHizb, IslamicLatticeBg } from '../common/IslamicPattern';
import { NavigationControls } from '../common/NavigationControls';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';

interface ScreenProps {
  onNavigate: (screen: ScreenNumber) => void;
}

export const Screen06RukunIman: React.FC<ScreenProps> = ({ onNavigate }) => {
  const [selectedPillar, setSelectedPillar] = useState<number>(2);

  return (
    <div className="relative min-h-[calc(100vh-6rem)] max-w-5xl mx-auto flex flex-col justify-between p-4 md:p-8">
      <IslamicLatticeBg opacity={0.04} />

      {/* Screen Header */}
      <div className="relative z-10 text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFDDBE] text-[#315A50] text-xs font-bold mb-2">
          <RubElHizb className="w-3.5 h-3.5" color="#315A50" />
          <span>STRUKTUR AKIDAH ISLAM</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-[#315A50]">
          Posisi dalam Enam Rukun Iman
        </h2>
        <p className="text-xs sm:text-sm text-[#27332F]/80 max-w-lg mx-auto mt-1">
          Malaikat menempati fondasi kedua yang sangat mendasar dalam struktur keimanan setiap muslim.
        </p>
      </div>

      {/* 6 Pillars Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {PILLARS_OF_FAITH.map((pillar) => {
          const isSelected = selectedPillar === pillar.number;
          const isAngelsPillar = pillar.isFocus; // Pillar 2

          return (
            <div
              key={pillar.number}
              onClick={() => setSelectedPillar(pillar.number)}
              className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between relative overflow-hidden ${
                isAngelsPillar
                  ? 'bg-gradient-to-br from-[#315A50] to-[#234039] text-[#FFF8E8] border-[#E6B85C] shadow-lg ring-2 ring-[#E6B85C]/60 -translate-y-1'
                  : isSelected
                    ? 'bg-white border-[#315A50] shadow-md ring-2 ring-[#315A50]/20'
                    : 'bg-white/80 hover:bg-white border-[#9DB9A8]/40 shadow-xs'
              }`}
            >
              {isAngelsPillar && (
                <div className="absolute top-0 right-0 bg-[#E6B85C] text-[#27332F] text-[10px] font-extrabold px-3 py-0.5 rounded-bl-lg uppercase tracking-wider">
                  FOKUS PEMBELAJARAN
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`w-8 h-8 rounded-xl font-bold font-heading text-sm flex items-center justify-center ${
                    isAngelsPillar
                      ? 'bg-[#E6B85C] text-[#27332F]'
                      : 'bg-[#EFDDBE] text-[#315A50]'
                  }`}>
                    {pillar.number}
                  </span>

                  <span className={`font-arabic text-sm ${
                    isAngelsPillar ? 'text-[#EFDDBE]' : 'text-[#315A50]'
                  }`}>
                    {pillar.arabic}
                  </span>
                </div>

                <h3 className={`text-base font-bold font-heading mb-1.5 ${
                  isAngelsPillar ? 'text-[#FFF8E8]' : 'text-[#315A50]'
                }`}>
                  {pillar.title}
                </h3>

                <p className={`text-xs leading-relaxed ${
                  isAngelsPillar ? 'text-[#EFDDBE]' : 'text-[#27332F]/80'
                }`}>
                  {pillar.description}
                </p>
              </div>

              <div className="mt-4 pt-2 flex items-center justify-between text-[11px] font-semibold border-t border-current/15">
                <span className={isAngelsPillar ? 'text-[#E6B85C]' : 'text-[#315A50]'}>
                  {isAngelsPillar ? '★ Rukun Iman Kedua' : `Rukun Iman Ke-${pillar.number}`}
                </span>
                {isSelected && (
                  <CheckCircle className={`w-3.5 h-3.5 ${isAngelsPillar ? 'text-[#E6B85C]' : 'text-[#315A50]'}`} />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Explanatory callout: Why faith in angels is essential */}
      <div className="relative z-10 bg-white rounded-2xl p-5 border border-[#9DB9A8]/50 shadow-xs">
        <div className="flex items-start gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-[#315A50]/10 text-[#315A50] flex items-center justify-center shrink-0 mt-0.5">
            <ShieldCheck className="w-5 h-5 text-[#315A50]" />
          </div>
          <div>
            <h4 className="text-sm font-bold font-heading text-[#315A50]">
              Mengapa Iman kepada Malaikat Merupakan Komponen Esensial?
            </h4>
            <p className="text-xs md:text-sm text-[#27332F]/80 leading-relaxed mt-1">
              Iman kepada malaikat adalah sendi yang menghubungkan keimanan kepada Allah dengan keimanan kepada kitab-kitab dan para rasul. Melalui perantara malaikat (terutama <strong>Malaikat Jibril</strong>), wahyu Allah SWT disampaikan kepada para Nabi dan Rasul hingga menjadi kitab suci petunjuk hidup manusia. Tanpa mempercayai malaikat, keyakinan terhadap kitab suci dan kenabian tidak akan sempurna.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <NavigationControls
        currentScreen={6}
        onNavigate={onNavigate}
        prevScreen={5}
        nextScreen={7}
        nextLabel="LIHAT DALIL NAQLI"
      />
    </div>
  );
};
