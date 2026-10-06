import React, { useState } from 'react';
import { ScreenNumber } from '../../types';
import { ANGEL_CHARACTERISTICS } from '../../data/learningMaterial';
import { RubElHizb, IslamicLatticeBg } from '../common/IslamicPattern';
import { NavigationControls } from '../common/NavigationControls';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Sun, 
  Feather, 
  Sparkles, 
  Compass, 
  ArrowRight,
  Maximize2
} from 'lucide-react';

interface ScreenProps {
  onNavigate: (screen: ScreenNumber) => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  'shield-check': ShieldCheck,
  'check-circle': CheckCircle2,
  'sun': Sun,
  'feather': Feather,
  'sparkles': Sparkles,
  'compass': Compass
};

export const Screen08SifatMalaikat: React.FC<ScreenProps> = ({ onNavigate }) => {
  const [expandedId, setExpandedId] = useState<number | null>(1);
  const [allExpanded, setAllExpanded] = useState<boolean>(false);

  const handleToggleExpandAll = () => {
    setAllExpanded(!allExpanded);
    if (!allExpanded) {
      setExpandedId(null);
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-6rem)] max-w-5xl mx-auto flex flex-col justify-between p-4 md:p-8">
      <IslamicLatticeBg opacity={0.04} />

      {/* Screen Header */}
      <div className="relative z-10 text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFDDBE] text-[#315A50] text-xs font-bold mb-2">
          <RubElHizb className="w-3.5 h-3.5" color="#315A50" />
          <span>CABANG 04 · TUJUAN PEMBELAJARAN 3</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-[#315A50]">
          Sifat-Sifat Malaikat
        </h2>
        <p className="text-xs sm:text-sm text-[#27332F]/80 max-w-lg mx-auto mt-1">
          Klik setiap kartu sifat di bawah ini untuk mempelajari keistimewaan makhluk ciptaan Allah SWT.
        </p>

        <div className="mt-3 flex justify-center">
          <button
            onClick={handleToggleExpandAll}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#EFDDBE] hover:bg-[#e4cea7] text-xs font-bold text-[#315A50] transition-colors"
          >
            <Maximize2 className="w-3 h-3" />
            <span>{allExpanded ? 'Sembunyikan Rincian' : 'LIHAT SEMUA SIFAT'}</span>
          </button>
        </div>
      </div>

      {/* 6 Interactive Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {ANGEL_CHARACTERISTICS.map((item) => {
          const isOpened = allExpanded || expandedId === item.id;
          const IconComp = ICON_MAP[item.iconName] || Sparkles;

          return (
            <div
              key={item.id}
              onClick={() => {
                if (allExpanded) return;
                setExpandedId(expandedId === item.id ? null : item.id);
              }}
              className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                isOpened
                  ? 'bg-white border-[#315A50] shadow-md ring-2 ring-[#315A50]/20'
                  : 'bg-white/80 hover:bg-white border-[#9DB9A8]/40 shadow-xs'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-7 h-7 rounded-lg bg-[#EFDDBE] text-[#315A50] font-bold text-xs flex items-center justify-center font-heading">
                    0{item.id}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#315A50]/10 text-[#315A50] flex items-center justify-center">
                    <IconComp className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base font-bold font-heading text-[#315A50] mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs font-semibold text-[#27332F] leading-relaxed">
                  {item.description}
                </p>

                {isOpened && (
                  <div className="mt-3 pt-3 border-t border-[#9DB9A8]/30 text-xs text-[#27332F]/80 leading-relaxed bg-[#FFF8E8] p-2.5 rounded-lg animate-fade-in">
                    <strong className="text-[#315A50]">Rincian:</strong> {item.detail}
                  </div>
                )}
              </div>

              <div className="mt-4 pt-2 text-[11px] font-bold text-[#315A50] flex items-center justify-between">
                <span>{isOpened ? 'Tutup Rincian' : 'Buka Rincian'}</span>
                <span className="text-xs text-[#E6B85C]">{isOpened ? '▲' : '▼'}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <NavigationControls
        currentScreen={8}
        onNavigate={onNavigate}
        prevScreen={7}
        nextScreen={9}
        nextLabel="KOMPARASI DENGAN MANUSIA"
        customActions={
          <button
            onClick={() => onNavigate(9)}
            className="px-3.5 py-2 text-xs font-bold text-[#315A50] bg-[#EFDDBE] hover:bg-[#e4cea7] rounded-xl transition-colors"
          >
            Lihat Komparasi
          </button>
        }
      />
    </div>
  );
};
