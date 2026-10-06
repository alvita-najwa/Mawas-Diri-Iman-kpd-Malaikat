import React, { useState } from 'react';
import { ScreenNumber } from '../../types';
import { WISDOM_POINTS } from '../../data/learningMaterial';
import { RubElHizb, IslamicLatticeBg } from '../common/IslamicPattern';
import { NavigationControls } from '../common/NavigationControls';
import { Award, Eye, Sparkles, Shield, Scale, CheckCircle2, ChevronRight } from 'lucide-react';

interface ScreenProps {
  onNavigate: (screen: ScreenNumber) => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  'award': Award,
  'eye': Eye,
  'sparkles': Sparkles,
  'shield': Shield,
  'scale': Scale
};

export const Screen16Hikmah: React.FC<ScreenProps> = ({ onNavigate }) => {
  const [selectedPetal, setSelectedPetal] = useState<number>(2); // Default to Mawas Diri
  const [showConclusion, setShowConclusion] = useState<boolean>(true);

  return (
    <div className="relative min-h-[calc(100vh-6rem)] max-w-5xl mx-auto flex flex-col justify-between p-4 md:p-8">
      <IslamicLatticeBg opacity={0.04} />

      {/* Screen Header */}
      <div className="relative z-10 text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFDDBE] text-[#315A50] text-xs font-bold mb-2">
          <RubElHizb className="w-3.5 h-3.5" color="#315A50" />
          <span>CABANG 06 · TUJUAN PEMBELAJARAN 5</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-[#315A50]">
          Hikmah Beriman kepada Malaikat
        </h2>
        <p className="text-xs sm:text-sm text-[#27332F]/80 max-w-lg mx-auto mt-1">
          Eksplorasi diagram 5 pilar hikmah keimanan dalam membentuk pribadi muslim yang berkarakter mulia.
        </p>
      </div>

      {/* Radial / Petal Diagram Section */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-6">
        {/* Left Side: Interactive Petal Cards / Circular Hub */}
        <div className="lg:col-span-7 flex flex-col items-center">
          {/* Central Anchor Badge */}
          <div className="relative mb-5">
            <div className="px-6 py-3.5 rounded-2xl bg-[#315A50] text-[#FFF8E8] shadow-lg border-2 border-[#E6B85C] flex items-center gap-3">
              <RubElHizb className="w-6 h-6 text-[#E6B85C]" color="#E6B85C" />
              <div>
                <span className="text-[10px] font-bold text-[#EFDDBE] uppercase tracking-wider block">
                  Pusat Hikmah Keimanan
                </span>
                <h3 className="text-base sm:text-lg font-extrabold font-heading text-[#FFF8E8]">
                  IMAN KEPADA MALAIKAT
                </h3>
              </div>
            </div>
            <div className="absolute -inset-1 bg-[#E6B85C]/20 rounded-2xl blur-sm -z-10" />
          </div>

          {/* 5 Petal Selector List */}
          <div className="w-full space-y-2.5">
            {WISDOM_POINTS.map((item) => {
              const isSelected = selectedPetal === item.id;
              const IconComp = ICON_MAP[item.icon] || Sparkles;

              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedPetal(item.id)}
                  className={`w-full p-3.5 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#315A50] shadow-md ring-2 ring-[#315A50]/20 translate-x-1'
                      : 'bg-white/70 hover:bg-white border-[#9DB9A8]/40 shadow-xs'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                      isSelected ? 'bg-[#315A50] text-[#FFF8E8]' : 'bg-[#EFDDBE] text-[#315A50]'
                    }`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-extrabold font-heading text-[#315A50]">
                          {item.id}. {item.title}
                        </span>
                        <span className="text-[11px] text-[#D9825B] font-semibold">
                          ({item.subtitle})
                        </span>
                      </div>
                      <p className="text-xs text-[#27332F]/75 line-clamp-1">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                    isSelected ? 'text-[#315A50] translate-x-1' : 'text-gray-300'
                  }`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Deep Petal Explanatory Detail Card */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-[#9DB9A8]/50 shadow-md flex flex-col justify-between h-full min-h-[300px]">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#9DB9A8]/30 mb-3">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#EFDDBE] text-[#315A50]">
                Rincian Hikmah {selectedPetal} dari 5
              </span>
              <RubElHizb className="w-4 h-4 text-[#315A50]" color="#315A50" />
            </div>

            {(() => {
              const current = WISDOM_POINTS.find(p => p.id === selectedPetal) || WISDOM_POINTS[0];
              const IconComp = ICON_MAP[current.icon] || Sparkles;

              return (
                <div className="space-y-3 animate-fade-in">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#315A50]/10 flex items-center justify-center text-[#315A50]">
                      <IconComp className="w-5 h-5 text-[#315A50]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold font-heading text-[#315A50]">
                        {current.title}
                      </h4>
                      <span className="text-xs font-semibold text-[#D9825B]">
                        {current.subtitle}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#27332F] font-medium leading-relaxed bg-[#FFF8E8] p-3.5 rounded-xl border border-[#EFDDBE]">
                    {current.description}
                  </p>

                  <div className="text-xs text-[#27332F]/80 space-y-1.5 pt-1">
                    <div className="font-bold text-[#315A50]">Aplikasi Siswa:</div>
                    {current.id === 1 && <p>Rajin mendirikan shalat fardhu dan berdzikir tanpa harus disuruh.</p>}
                    {current.id === 2 && <p>Selalu berhati-hati dalam berucap dan menahan diri dari menyontek.</p>}
                    {current.id === 3 && <p>Gemar membantu teman yang kesulitan dan menebar salam kesantunan.</p>}
                    {current.id === 4 && <p>Menjauhi rokok, kata-kata kotor, tawuran, dan ujaran kebencian.</p>}
                    {current.id === 5 && <p>Berani mengakui kesalahan dan bertanggung jawab atas tugas sekolah.</p>}
                  </div>
                </div>
              );
            })()}
          </div>

          <div className="pt-4 border-t border-[#9DB9A8]/20 flex items-center justify-between text-xs text-[#27332F]/70">
            <span>Pilar {selectedPetal} Terpilih</span>
            <button
              onClick={() => setSelectedPetal(selectedPetal < 5 ? selectedPetal + 1 : 1)}
              className="text-[#315A50] font-bold hover:underline"
            >
              Lihat Pilar Berikutnya →
            </button>
          </div>
        </div>
      </div>

      {/* Required Conclusion Box & "SIMPULKAN" Button */}
      <div className="relative z-10 bg-[#EFDDBE]/70 rounded-2xl p-5 border border-[#9DB9A8]/50 shadow-xs mb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="grow">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-bold text-[#D9825B] uppercase tracking-wider">
                Kesimpulan Hikmah Beriman kepada Malaikat
              </span>
              <span className="text-[10px] bg-[#9DB9A8]/30 px-2 py-0.5 rounded text-[#315A50] font-bold">
                Tujuan Pembelajaran 5
              </span>
            </div>

            {showConclusion && (
              <p className="text-sm md:text-base font-bold text-[#27332F] leading-relaxed animate-fade-in">
                &quot;Beriman kepada malaikat mendorong seseorang untuk semakin taat kepada Allah SWT, mawas diri, bertanggung jawab, bersemangat melakukan amal kebaikan, serta menjauhi hal-hal yang buruk.&quot;
              </p>
            )}
          </div>

          <button
            onClick={() => setShowConclusion(!showConclusion)}
            className="shrink-0 px-6 py-2.5 rounded-xl bg-[#315A50] text-[#FFF8E8] font-bold text-xs sm:text-sm hover:bg-[#234039] shadow-sm transition-all active:scale-95"
          >
            {showConclusion ? 'SIMPULKAN ✓' : 'SIMPULKAN'}
          </button>
        </div>
      </div>

      {/* Navigation Controls */}
      <NavigationControls
        currentScreen={16}
        onNavigate={onNavigate}
        prevScreen={15}
        nextScreen={17}
        nextLabel="LANJUT KE MAWAS DIRI"
      />
    </div>
  );
};
