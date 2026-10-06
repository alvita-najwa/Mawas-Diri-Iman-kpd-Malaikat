import React, { useState } from 'react';
import { ScreenNumber } from '../../types';
import { RubElHizb, IslamicLatticeBg } from '../common/IslamicPattern';
import { NavigationControls } from '../common/NavigationControls';
import { Heart, Compass, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface ScreenProps {
  onNavigate: (screen: ScreenNumber) => void;
}

export const Screen05Pengertian: React.FC<ScreenProps> = ({ onNavigate }) => {
  const [selectedConcept, setSelectedConcept] = useState<'believe' | 'understand' | 'reflect'>('believe');

  const concepts = [
    {
      id: 'believe' as const,
      tag: 'DIMENSI KEYAKINAN',
      title: '01. PERCAYA (BELIEVE)',
      desc: 'Mengakui dan meyakini keberadaan malaikat sebagai makhluk ciptaan Allah SWT.',
      details: 'Keyakinan teguh di dalam hati bahwa Allah menciptakan makhluk gaib dari cahaya (nur) yang senantiasa hidup dan menjalankan amanah-Nya, meskipun indra manusia tidak dapat melihatnya secara langsung.',
      icon: Heart,
      color: '#315A50'
    },
    {
      id: 'understand' as const,
      tag: 'DIMENSI PENGETAHUAN',
      title: '02. MEMAHAMI (UNDERSTAND)',
      desc: 'Memahami sifat-sifat dan tugas-tugas malaikat berdasarkan ajaran Islam.',
      details: 'Mempelajari karakteristik malaikat yang suci, tidak berhawa nafsu, serta 10 malaikat utama beserta tugas-tugas spesifik yang diperintahkan Allah SWT melalui Al-Qur\'an dan As-Sunnah.',
      icon: Compass,
      color: '#D9825B'
    },
    {
      id: 'reflect' as const,
      tag: 'DIMENSI AKHLAK',
      title: '03. MEREFLEKSIKAN (REFLECT)',
      desc: 'Menjadikan keimanan kepada malaikat sebagai pendorong perilaku lebih baik.',
      details: 'Menerapkan kesadaran akan keberadaan malaikat (khususnya pencatat amal Raqib dan Atid) untuk menumbuhkan sikap mawas diri, menjaga kejujuran, dan menjauhi perbuatan tercela kapan pun dan di mana pun.',
      icon: Sparkles,
      color: '#E6B85C'
    }
  ];

  return (
    <div className="relative min-h-[calc(100vh-6rem)] max-w-5xl mx-auto flex flex-col justify-between p-4 md:p-8">
      <IslamicLatticeBg opacity={0.04} />

      {/* Screen Header */}
      <div className="relative z-10 text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFDDBE] text-[#315A50] text-xs font-bold mb-2">
          <RubElHizb className="w-3.5 h-3.5" color="#315A50" />
          <span>CABANG 02 · TUJUAN PEMBELAJARAN 1</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-[#315A50]">
          Pengertian Iman kepada Malaikat
        </h2>
        <p className="text-xs sm:text-sm text-[#27332F]/80 max-w-lg mx-auto mt-1">
          Memahami esensi keyakinan hati, pengenalan sifat, dan implementasi akhlak mulia.
        </p>
      </div>

      {/* Core Explanation Banner */}
      <div className="relative z-10 bg-white rounded-2xl p-6 md:p-7 border border-[#9DB9A8]/50 shadow-md mb-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#315A50] text-[#FFF8E8] flex items-center justify-center shrink-0 shadow-xs">
            <ShieldCheck className="w-6 h-6 text-[#E6B85C]" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-[#D9825B] uppercase tracking-wider">
              Definisi Esensial
            </span>
            <p className="text-base md:text-lg font-bold text-[#27332F] leading-relaxed mt-1">
              &quot;Iman kepada malaikat berarti meyakini dengan sepenuh hati bahwa malaikat adalah makhluk ciptaan Allah SWT, diciptakan untuk menjalankan tugas-tugas yang telah ditentukan oleh-Nya serta senantiasa patuh dan taat kepada Allah SWT.&quot;
            </p>
          </div>
        </div>
      </div>

      {/* 3 Interactive Concepts Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {concepts.map((concept) => {
          const isSelected = selectedConcept === concept.id;
          const IconComp = concept.icon;

          return (
            <div
              key={concept.id}
              onClick={() => setSelectedConcept(concept.id)}
              className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#315A50] text-[#FFF8E8] border-[#315A50] shadow-md -translate-y-1'
                  : 'bg-white/80 hover:bg-white text-[#27332F] border-[#9DB9A8]/40 shadow-xs'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    isSelected ? 'bg-white/20 text-[#FFF8E8]' : 'bg-[#EFDDBE] text-[#315A50]'
                  }`}>
                    {concept.tag}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isSelected ? 'bg-white/10 text-[#E6B85C]' : 'bg-[#FFF8E8] text-[#315A50]'
                  }`}>
                    <IconComp className="w-4 h-4" />
                  </div>
                </div>

                <h3 className={`text-base font-bold font-heading mb-2 ${
                  isSelected ? 'text-[#FFF8E8]' : 'text-[#315A50]'
                }`}>
                  {concept.title}
                </h3>
                <p className={`text-xs font-semibold leading-relaxed ${
                  isSelected ? 'text-[#EFDDBE]' : 'text-[#27332F]'
                }`}>
                  {concept.desc}
                </p>

                {isSelected && (
                  <p className="text-xs mt-3 pt-3 border-t border-white/20 text-white/90 leading-relaxed animate-fade-in">
                    {concept.details}
                  </p>
                )}
              </div>

              <div className="mt-4 pt-2 flex items-center gap-1 text-[11px] font-bold">
                <span className={isSelected ? 'text-[#E6B85C]' : 'text-[#315A50]'}>
                  {isSelected ? 'Sedang Aktif' : 'Klik untuk Membaca'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Highlight Box: One of the 6 pillars */}
      <div className="relative z-10 bg-[#EFDDBE]/70 rounded-xl p-4 border border-[#9DB9A8]/40 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#315A50] text-[#FFF8E8] flex items-center justify-center font-bold text-xs shrink-0">
            2
          </div>
          <p className="text-xs sm:text-sm font-bold text-[#27332F]">
            <strong>Kedudukan:</strong> Iman kepada malaikat merupakan salah satu dari enam rukun iman (Rukun Iman yang Kedua).
          </p>
        </div>

        <button
          onClick={() => onNavigate(6)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#315A50] text-[#FFF8E8] text-xs font-bold hover:bg-[#234039] transition-all ml-auto"
        >
          <span>Lihat Posisi Rukun Iman</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#E6B85C]" />
        </button>
      </div>

      {/* Navigation Controls */}
      <NavigationControls
        currentScreen={5}
        onNavigate={onNavigate}
        prevScreen={4}
        nextScreen={6}
        nextLabel="LANJUT KE RUKUN IMAN"
      />
    </div>
  );
};
