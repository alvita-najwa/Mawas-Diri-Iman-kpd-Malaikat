import React, { useState } from 'react';
import { ScreenNumber } from '../../types';
import { DALIL_DATA } from '../../data/learningMaterial';
import { RubElHizb, IslamicLatticeBg, QuranOrnamentFrame } from '../common/IslamicPattern';
import { NavigationControls } from '../common/NavigationControls';
import { BookOpen, Sparkles, CheckCircle2, Bookmark } from 'lucide-react';

interface ScreenProps {
  onNavigate: (screen: ScreenNumber) => void;
}

export const Screen07Dalil: React.FC<ScreenProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'ayat' | 'makna'>('ayat');
  const [highlightKeyword, setHighlightKeyword] = useState<boolean>(true);

  return (
    <div className="relative min-h-[calc(100vh-6rem)] max-w-5xl mx-auto flex flex-col justify-between p-4 md:p-8">
      <IslamicLatticeBg opacity={0.04} />

      {/* Screen Header */}
      <div className="relative z-10 text-center mb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFDDBE] text-[#315A50] text-xs font-bold mb-2">
          <RubElHizb className="w-3.5 h-3.5" color="#315A50" />
          <span>CABANG 03 · TUJUAN PEMBELAJARAN 2</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-[#315A50]">
          Dalil Iman kepada Malaikat
        </h2>
        <p className="text-xs sm:text-sm text-[#27332F]/80 max-w-lg mx-auto mt-1">
          Landasan naqli utama kewajiban beriman kepada para malaikat dalam Al-Qur&apos;an.
        </p>
      </div>

      {/* Scripture Display Container */}
      <div className="relative z-10 bg-white rounded-3xl border border-[#9DB9A8]/50 shadow-md overflow-hidden mb-6">
        {/* Tab Selector Header */}
        <div className="bg-[#EFDDBE]/50 px-6 py-3 border-b border-[#9DB9A8]/40 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-[#315A50]" />
            <span className="font-bold text-xs sm:text-sm text-[#315A50] font-heading">
              {DALIL_DATA.surah}
            </span>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-white/80 rounded-xl border border-[#9DB9A8]/30">
            <button
              onClick={() => setActiveTab('ayat')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'ayat'
                  ? 'bg-[#315A50] text-[#FFF8E8] shadow-xs'
                  : 'text-[#27332F]/70 hover:text-[#315A50]'
              }`}
            >
              TAB 1: AYAT (ARAB & LATIN)
            </button>
            <button
              onClick={() => setActiveTab('makna')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'makna'
                  ? 'bg-[#315A50] text-[#FFF8E8] shadow-xs'
                  : 'text-[#27332F]/70 hover:text-[#315A50]'
              }`}
            >
              TAB 2: MAKNA & TERJEMAHAN
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-6 md:p-8">
          {activeTab === 'ayat' ? (
            <div className="space-y-6">
              {/* Decorative Frame */}
              <div className="text-center">
                <span className="text-[11px] font-bold text-[#D9825B] uppercase tracking-widest">
                  Mushaf Standar Indonesia — Kemenag RI
                </span>
              </div>

              {/* Arabic Verse with Amiri calligraphy font */}
              <div className="bg-[#FFF8E8] p-6 md:p-8 rounded-2xl border border-[#EFDDBE] text-right shadow-inner">
                <p 
                  className="font-arabic text-2xl sm:text-3xl md:text-4xl text-[#27332F] leading-[2.2] tracking-wide"
                  dir="rtl"
                >
                  ءَامَنَ ٱلرَّسُولُ بِمَآ أُنزِلَ إِلَيْهِ مِن رَّبِّهِۦ وَٱلْمُؤْمِنُونَ ۚ كُلٌّ ءَامَنَ بِٱللَّهِ{' '}
                  <span className={`px-2 py-0.5 rounded-md transition-colors ${
                    highlightKeyword 
                      ? 'bg-[#E6B85C]/35 text-[#315A50] font-bold ring-2 ring-[#E6B85C]' 
                      : ''
                  }`}>
                    وَمَلَٰٓئِكَتِهِۦ
                  </span>{' '}
                  وَكُتُبِهِۦ وَرُسُلِهِۦ لَا نُفَرِّقُ بَيْنَ أَحَدٍۢ مِّن رُّسُلِهِۦ ۚ وَقَالُوا۟ سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ ٱلْمَصِيرُ
                </p>
              </div>

              {/* Transliteration */}
              <div>
                <span className="text-xs font-bold text-[#315A50] uppercase tracking-wider block mb-1">
                  Transliterasi Latin:
                </span>
                <p className="text-xs sm:text-sm text-[#27332F]/80 italic leading-relaxed bg-[#EFDDBE]/30 p-3 rounded-xl border border-[#9DB9A8]/20">
                  &quot;{DALIL_DATA.transliteration}&quot;
                </p>
              </div>

              {/* Keyword Highlight Toggle */}
              <div className="flex items-center justify-between text-xs text-[#27332F]/80 pt-2 border-t border-[#9DB9A8]/20">
                <span className="flex items-center gap-1.5 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-[#E6B85C]" />
                  Fokus kata: <strong className="text-[#315A50]">وَمَلَٰٓئِكَتِهِۦ</strong> (dan malaikat-malaikat-Nya)
                </span>
                <button
                  onClick={() => setHighlightKeyword(!highlightKeyword)}
                  className="px-2.5 py-1 text-[11px] font-bold text-[#315A50] bg-[#EFDDBE] rounded-md hover:bg-[#e4cea7]"
                >
                  {highlightKeyword ? 'Sembunyikan Sorotan' : 'Sorot Kata Kunci'}
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="bg-[#FFF8E8] p-6 rounded-2xl border border-[#EFDDBE]">
                <span className="text-xs font-bold text-[#D9825B] uppercase tracking-wider block mb-2">
                  Terjemahan Resmi Kemenag RI:
                </span>
                <p className="text-sm md:text-base font-semibold text-[#27332F] leading-relaxed">
                  &quot;{DALIL_DATA.translation}&quot;
                </p>
              </div>

              {/* Detailed Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-white border border-[#9DB9A8]/40 shadow-xs">
                  <div className="flex items-center gap-2 mb-1.5 text-[#315A50] font-bold text-xs">
                    <CheckCircle2 className="w-4 h-4 text-[#315A50]" />
                    <span>Sendi Keimanan yang Sejajar</span>
                  </div>
                  <p className="text-xs text-[#27332F]/80 leading-relaxed">
                    Ayat ini menyebutkan iman kepada malaikat langsung bersanding dengan iman kepada Allah SWT, kitab-kitab-Nya, dan para rasul-Nya sebagai satu kesatuan akidah.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#9DB9A8]/40 shadow-xs">
                  <div className="flex items-center gap-2 mb-1.5 text-[#315A50] font-bold text-xs">
                    <CheckCircle2 className="w-4 h-4 text-[#315A50]" />
                    <span>Prinsip Sami&apos;na wa Ata&apos;na</span>
                  </div>
                  <p className="text-xs text-[#27332F]/80 leading-relaxed">
                    Orang-orang beriman menyatakan <em>&quot;Kami dengar dan kami taat&quot;</em> atas segala ketetapan Allah, meneladani kepatuhan mutlak yang dicontohkan para malaikat.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Controls */}
      <NavigationControls
        currentScreen={7}
        onNavigate={onNavigate}
        prevScreen={6}
        nextScreen={8}
        nextLabel="LANJUT KE SIFAT MALAIKAT"
      />
    </div>
  );
};
