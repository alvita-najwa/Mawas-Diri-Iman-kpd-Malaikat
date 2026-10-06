import React, { useState } from 'react';
import { ScreenNumber } from '../../types';
import { RubElHizb, IslamicLatticeBg } from '../common/IslamicPattern';
import { NavigationControls } from '../common/NavigationControls';
import { ArrowRight, HelpCircle, Eye, AlertTriangle, ShieldCheck } from 'lucide-react';

interface ScreenProps {
  onNavigate: (screen: ScreenNumber) => void;
}

export const Screen02Pemantik: React.FC<ScreenProps> = ({ onNavigate }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const scenarioSteps = [
    {
      step: 1,
      badge: "Situasi 01",
      title: "Ruang Kelas yang Sepi",
      text: "Kamu sedang sendirian di dalam ruang kelas. Tidak ada guru dan tidak ada satu pun teman di sekitarmu.",
      subtext: "Hening, sunyi, dan tidak ada suara langkah kaki di lorong sekolah.",
      icon: Eye
    },
    {
      step: 2,
      badge: "Situasi 02",
      title: "Barang Berharga Tertinggal",
      text: "Di atas meja salah satu temanmu, ada sebuah barang berharga (ponsel atau dompet) yang tertinggal dalam keadaan terbuka.",
      subtext: "Barang itu sangat menarik perhatianmu dan berada tepat dalam jangkauan tanganmu.",
      icon: AlertTriangle
    },
    {
      step: 3,
      badge: "Situasi 03",
      title: "Tanpa Pengawasan Manusia",
      text: "Tampaknya tidak ada seorang pun manusia atau kamera CCTV yang sedang mengawasi apa yang akan kamu lakukan.",
      subtext: "Pintu tertutup dan kesempatan terbuka lebar tanpa ada yang melihat.",
      icon: HelpCircle
    }
  ];

  return (
    <div className="relative min-h-[calc(100vh-6rem)] max-w-5xl mx-auto flex flex-col justify-between p-4 md:p-8">
      <IslamicLatticeBg opacity={0.04} />

      {/* Screen Header */}
      <div className="relative z-10 text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFDDBE] text-[#315A50] text-xs font-bold mb-2">
          <RubElHizb className="w-3.5 h-3.5" color="#315A50" />
          <span>PEMANTIK REFLEKSI AWAL</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-extrabold font-heading text-[#315A50]">
          Sebuah Pertanyaan untuk Hatimu
        </h2>
        <p className="text-xs md:text-sm text-[#27332F]/75 max-w-lg mx-auto mt-1">
          Amati skenario di bawah ini secara bertahap dan renungkan apa yang terlintas dalam pikiranmu.
        </p>
      </div>

      {/* Progressive Scenario Stages */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {scenarioSteps.map((item) => {
          const isVisible = currentStep >= item.step;
          const isCurrent = currentStep === item.step;
          const IconComponent = item.icon;

          return (
            <div
              key={item.step}
              onClick={() => setCurrentStep(Math.max(currentStep, item.step))}
              className={`relative rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between ${
                isVisible
                  ? isCurrent
                    ? 'bg-white border-[#315A50] shadow-md ring-2 ring-[#315A50]/20'
                    : 'bg-white/80 border-[#9DB9A8]/50 shadow-xs'
                  : 'bg-[#EFDDBE]/30 border-dashed border-[#9DB9A8]/40 opacity-60'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                    isVisible ? 'bg-[#EFDDBE] text-[#315A50]' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {item.badge}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    isVisible ? 'bg-[#315A50]/10 text-[#315A50]' : 'bg-gray-100 text-gray-400'
                  }`}>
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base font-bold font-heading text-[#315A50] mb-2">
                  {item.title}
                </h3>

                {isVisible ? (
                  <>
                    <p className="text-xs md:text-sm font-semibold text-[#27332F] leading-relaxed">
                      &quot;{item.text}&quot;
                    </p>
                    <p className="text-xs text-[#27332F]/70 mt-2 italic">
                      {item.subtext}
                    </p>
                  </>
                ) : (
                  <p className="text-xs text-[#27332F]/50 italic">
                    Klik atau lanjutkan untuk membuka situasi ini...
                  </p>
                )}
              </div>

              {item.step < 3 && isVisible && currentStep === item.step && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentStep((item.step + 1) as 1 | 2 | 3);
                  }}
                  className="mt-4 text-xs font-bold text-[#315A50] hover:text-[#234039] flex items-center gap-1 self-start"
                >
                  <span>Lihat Situasi Selanjutnya</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Main Reflective Question & Link to Angels */}
      {currentStep >= 3 ? (
        <div className="relative z-10 bg-gradient-to-br from-[#315A50] to-[#234039] text-[#FFF8E8] rounded-2xl p-6 md:p-8 shadow-lg text-center animate-fade-in border border-[#E6B85C]/40">
          <div className="w-12 h-12 mx-auto rounded-full bg-[#E6B85C]/20 border border-[#E6B85C] flex items-center justify-center mb-3">
            <ShieldCheck className="w-6 h-6 text-[#E6B85C]" />
          </div>

          <h3 className="text-xl md:text-3xl font-extrabold font-heading text-[#FFF8E8] leading-tight">
            &quot;Apakah itu berarti kita bebas berbuat apa saja?&quot;
          </h3>

          <div className="w-20 h-1 bg-[#E6B85C] rounded-full mx-auto my-3" />

          <p className="text-sm md:text-base text-[#EFDDBE] font-medium max-w-2xl mx-auto leading-relaxed">
            Ketika mata manusia tidak melihat, apakah benar-benar tidak ada yang mencatat?
            Lalu, <span className="font-bold text-[#FFF8E8] underline decoration-[#E6B85C]">apa hubungannya hal ini dengan beriman kepada para malaikat Allah SWT?</span>
          </p>

          <div className="mt-6 flex justify-center">
            <button
              onClick={() => onNavigate(3)}
              className="flex items-center gap-3 px-8 py-3.5 rounded-xl bg-[#E6B85C] text-[#27332F] font-extrabold text-base shadow-md hover:bg-[#d4a548] hover:scale-105 active:scale-95 transition-all group"
            >
              <span>CARI TAHU</span>
              <ArrowRight className="w-5 h-5 text-[#27332F] transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      ) : (
        <div className="relative z-10 text-center py-4">
          <button
            onClick={() => setCurrentStep(3)}
            className="px-5 py-2 text-xs font-bold text-[#315A50] bg-[#EFDDBE] rounded-xl hover:bg-[#e4cea7] transition-all"
          >
            Buka Semua Situasi Sekaligus
          </button>
        </div>
      )}

      {/* Navigation Controls */}
      <NavigationControls
        currentScreen={2}
        onNavigate={onNavigate}
        prevScreen={1}
        nextScreen={3}
        nextLabel="CARI TAHU"
      />
    </div>
  );
};
