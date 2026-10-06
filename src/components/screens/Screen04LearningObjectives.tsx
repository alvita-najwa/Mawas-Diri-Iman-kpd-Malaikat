import React, { useState } from 'react';
import { ScreenNumber } from '../../types';
import { LEARNING_OBJECTIVES } from '../../data/learningMaterial';
import { RubElHizb, IslamicLatticeBg } from '../common/IslamicPattern';
import { NavigationControls } from '../common/NavigationControls';
import { CheckCircle2, Target, Info, Sparkles } from 'lucide-react';

interface ScreenProps {
  onNavigate: (screen: ScreenNumber) => void;
}

export const Screen04LearningObjectives: React.FC<ScreenProps> = ({ onNavigate }) => {
  const [activeObjective, setActiveObjective] = useState<number>(1);

  return (
    <div className="relative min-h-[calc(100vh-6rem)] max-w-5xl mx-auto flex flex-col justify-between p-4 md:p-8">
      <IslamicLatticeBg opacity={0.04} />

      {/* Screen Header */}
      <div className="relative z-10 text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFDDBE] text-[#315A50] text-xs font-bold mb-2">
          <RubElHizb className="w-3.5 h-3.5" color="#315A50" />
          <span>CABANG 01 · KOMPETENSI DASAR</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-[#315A50]">
          Tujuan Pembelajaran
        </h2>
        <p className="text-xs sm:text-sm text-[#27332F]/80 max-w-lg mx-auto mt-1">
          Target kompetensi yang akan dicapai peserta didik pada pembelajaran iman kepada malaikat Allah SWT.
        </p>
      </div>

      {/* Visual Roadmap / 5 Cards Layout */}
      <div className="relative z-10 space-y-3 mb-6">
        {LEARNING_OBJECTIVES.map((obj) => {
          const isSelected = activeObjective === obj.id;
          return (
            <div
              key={obj.id}
              onClick={() => setActiveObjective(obj.id)}
              className={`p-4 md:p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                isSelected
                  ? 'bg-white border-[#315A50] shadow-md ring-2 ring-[#315A50]/20'
                  : 'bg-white/70 hover:bg-white border-[#9DB9A8]/40 shadow-xs'
              }`}
            >
              <div className="flex items-start sm:items-center gap-3.5 grow">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-bold font-heading text-sm transition-colors ${
                  isSelected ? 'bg-[#315A50] text-[#FFF8E8]' : 'bg-[#EFDDBE] text-[#315A50]'
                }`}>
                  {obj.numberText}
                </div>

                <div className="grow">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[11px] font-bold text-[#D9825B] uppercase tracking-wider">
                      Tujuan Pembelajaran {obj.id}
                    </span>
                    {obj.id === 5 && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#9DB9A8]/30 text-[#315A50]">
                        Diperkuat oleh Mawas Diri & Introspeksi
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-[#27332F] leading-snug">
                    {obj.statement}
                  </h3>
                  {isSelected && (
                    <p className="text-xs text-[#27332F]/75 mt-2 bg-[#FFF8E8] p-2.5 rounded-lg border-l-2 border-[#E6B85C] animate-fade-in">
                      <strong className="text-[#315A50]">Fokus Materi:</strong> {obj.details}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                  isSelected ? 'bg-[#315A50]/10 text-[#315A50]' : 'text-gray-400'
                }`}>
                  {isSelected ? 'Sedang Dipelajari' : 'Klik Detail'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Clarification Callout Note regarding LO 5 */}
      <div className="relative z-10 bg-[#EFDDBE]/50 rounded-xl p-3.5 border border-[#9DB9A8]/30 flex items-start gap-3 text-xs text-[#27332F]/80">
        <Info className="w-4 h-4 text-[#315A50] shrink-0 mt-0.5" />
        <p>
          <strong>Catatan Kurikulum:</strong> Materi <em>&quot;Mawas Diri dan Introspeksi&quot;</em> bukan merupakan tujuan pembelajaran baru yang terpisah, melainkan berfungsi sebagai wujud <strong>penerapan dan penguatan nyata</strong> dari Tujuan Pembelajaran 5 (menyimpulkan hikmah beriman kepada malaikat).
        </p>
      </div>

      {/* Navigation Controls */}
      <NavigationControls
        currentScreen={4}
        onNavigate={onNavigate}
        prevScreen={3}
        nextScreen={5}
        nextLabel="LANJUT KE PENGERTIAN"
      />
    </div>
  );
};
