import React, { useState } from 'react';
import { ScreenNumber } from '../../types';
import { EVERYDAY_BEHAVIORS } from '../../data/learningMaterial';
import { RubElHizb, IslamicLatticeBg } from '../common/IslamicPattern';
import { NavigationControls } from '../common/NavigationControls';
import { ArrowDown, CheckCircle2, Sparkles, HeartHandshake, Compass } from 'lucide-react';

interface ScreenProps {
  onNavigate: (screen: ScreenNumber) => void;
}

export const Screen18KehidupanSehariHari: React.FC<ScreenProps> = ({ onNavigate }) => {
  const [selectedBehaviorId, setSelectedBehaviorId] = useState<number>(1);

  const selectedBehavior = EVERYDAY_BEHAVIORS.find(b => b.id === selectedBehaviorId) || EVERYDAY_BEHAVIORS[0];

  const conceptualFlow = [
    { label: "IMAN", sub: "Meyakini Pengawasan Malaikat", color: "#315A50" },
    { label: "MAWAS DIRI", sub: "Hati-hati & Berpikir Jernih", color: "#D9825B" },
    { label: "PERILAKU BAIK", sub: "Tindakan Jujur & Santun", color: "#E6B85C" },
    { label: "TANGGUNG JAWAB", sub: "Kesiapan Menghadapi Hisab", color: "#315A50" }
  ];

  return (
    <div className="relative min-h-[calc(100vh-6rem)] max-w-5xl mx-auto flex flex-col justify-between p-4 md:p-8">
      <IslamicLatticeBg opacity={0.04} />

      {/* Screen Header */}
      <div className="relative z-10 text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFDDBE] text-[#315A50] text-xs font-bold mb-2">
          <RubElHizb className="w-3.5 h-3.5" color="#315A50" />
          <span>APLIKASI NYATA · PEMBENTUKAN KARAKTER SISWA</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-[#315A50]">
          Iman dalam Kehidupan Sehari-hari
        </h2>
        <p className="text-xs sm:text-sm text-[#27332F]/80 max-w-lg mx-auto mt-1">
          Bagaimana nilai iman kepada malaikat bertransformasi menjadi sikap nyata pelajar Pancasila yang beriman dan bertakwa.
        </p>
      </div>

      {/* Required Conceptual Flow: IMAN -> MAWAS DIRI -> PERILAKU BAIK -> TANGGUNG JAWAB */}
      <div className="relative z-10 bg-white rounded-2xl p-4 md:p-5 border border-[#9DB9A8]/40 shadow-xs mb-6">
        <span className="text-[11px] font-bold text-[#D9825B] uppercase tracking-wider block text-center mb-3">
          Alur Konseptual Transformasi Nilai Keimanan:
        </span>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
          {conceptualFlow.map((flow, idx) => (
            <div
              key={flow.label}
              className="p-3 rounded-xl bg-[#FFF8E8] border border-[#EFDDBE] text-center relative"
            >
              <span className="text-[10px] font-bold text-[#315A50] bg-[#EFDDBE] px-1.5 py-0.5 rounded">
                Langkah 0{idx + 1}
              </span>
              <h4 className="font-extrabold font-heading text-sm text-[#315A50] mt-1">
                {flow.label}
              </h4>
              <p className="text-[11px] text-[#27332F]/75 mt-0.5 font-medium">
                {flow.sub}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 7 Interactive Student Behaviors Grid + Detail Panel */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 mb-6">
        {/* Left: 7 Behaviors List */}
        <div className="lg:col-span-5 space-y-2">
          <span className="text-xs font-bold text-[#315A50] uppercase tracking-wider block px-1">
            Pilih 7 Sikap Mawas Diri Siswa:
          </span>
          <div className="space-y-1.5 max-h-[340px] overflow-y-auto pr-1">
            {EVERYDAY_BEHAVIORS.map((behavior) => {
              const isSelected = selectedBehaviorId === behavior.id;
              return (
                <button
                  key={behavior.id}
                  onClick={() => setSelectedBehaviorId(behavior.id)}
                  className={`w-full p-3 rounded-xl border text-left transition-all flex items-center justify-between text-xs cursor-pointer ${
                    isSelected
                      ? 'bg-[#315A50] text-[#FFF8E8] border-[#315A50] shadow-sm'
                      : 'bg-white hover:bg-[#FFF8E8] text-[#27332F] border-[#9DB9A8]/30'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`w-5 h-5 rounded-md text-[11px] font-bold flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-[#E6B85C] text-[#27332F]' : 'bg-[#EFDDBE] text-[#315A50]'
                    }`}>
                      {behavior.id}
                    </span>
                    <span className="font-bold line-clamp-1">{behavior.title}</span>
                  </div>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                    isSelected ? 'bg-white/20 text-[#FFF8E8]' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {behavior.category}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Selected Behavior Deep Dive Card */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 border border-[#9DB9A8]/50 shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#9DB9A8]/30 mb-3">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#EFDDBE] text-[#315A50]">
                Perilaku #{selectedBehavior.id} · Kategori: {selectedBehavior.category}
              </span>
              <RubElHizb className="w-4 h-4 text-[#315A50]" color="#315A50" />
            </div>

            <h3 className="text-lg md:text-xl font-bold font-heading text-[#315A50] mb-2">
              {selectedBehavior.title}
            </h3>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="bg-[#FFF8E8] p-3.5 rounded-xl border border-[#EFDDBE]">
                <strong className="text-[#D9825B] block text-xs uppercase tracking-wider mb-1">
                  Skenario Nyata di Sekolah / Rumah:
                </strong>
                <p className="text-[#27332F] font-semibold leading-relaxed">
                  &quot;{selectedBehavior.scenario}&quot;
                </p>
              </div>

              <div className="bg-[#9DB9A8]/15 p-3.5 rounded-xl border border-[#9DB9A8]/30">
                <strong className="text-[#315A50] block text-xs uppercase tracking-wider mb-1">
                  Koneksi dengan Iman kepada Malaikat:
                </strong>
                <p className="text-[#27332F]/85 leading-relaxed">
                  {selectedBehavior.angelConnection}
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#EFDDBE]/50 to-white p-3 rounded-xl border-l-3 border-[#315A50]">
                <strong className="text-[#315A50] text-xs">Pesan Refleksi: </strong>
                <span className="italic text-[#27332F]/80 text-xs">
                  {selectedBehavior.reflection}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#9DB9A8]/20 flex items-center justify-between text-xs text-[#27332F]/70">
            <span>Sikap Terpuji Pelajar Muslim</span>
            <span className="text-[#315A50] font-bold">Terus Terapkan Setiap Hari ✓</span>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <NavigationControls
        currentScreen={18}
        onNavigate={onNavigate}
        prevScreen={17}
        nextScreen={19}
        nextLabel="LANJUT KE PENUTUP"
      />
    </div>
  );
};
