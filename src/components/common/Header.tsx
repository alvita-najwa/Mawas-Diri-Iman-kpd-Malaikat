import React from 'react';
import { ScreenNumber } from '../../types';
import { RubElHizb } from './IslamicPattern';
import { BookOpen, FileText, Grid, Home } from 'lucide-react';

interface HeaderProps {
  currentScreen: ScreenNumber;
  onNavigate: (screen: ScreenNumber) => void;
  onOpenLkpd: () => void;
  onOpenScreenIndex: () => void;
}

const SCREEN_TITLES: Record<ScreenNumber, string> = {
  1: 'Halaman Pembuka',
  2: 'Pemantik Refleksi',
  3: 'Menu Interaktif Utama',
  4: 'Tujuan Pembelajaran',
  5: 'Pengertian Iman kepada Malaikat',
  6: 'Posisi dalam Rukun Iman',
  7: 'Dalil Naqli (Q.S. al-Baqarah: 285)',
  8: 'Sifat-Sifat Malaikat',
  9: 'Komparasi: Malaikat vs Manusia',
  10: 'Galeri Nama & Tugas 10 Malaikat',
  11: 'Malaikat Jibril & Mikail',
  12: 'Malaikat Israfil & Izrail',
  13: 'Malaikat Munkar & Nakir',
  14: 'Malaikat Raqib & Atid',
  15: 'Malaikat Malik & Ridwan',
  16: 'Hikmah Beriman kepada Malaikat',
  17: 'Mawas Diri & Introspeksi',
  18: 'Penerapan dalam Kehidupan Siswa',
  19: 'Penutup Pembelajaran'
};

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  onOpenLkpd,
  onOpenScreenIndex
}) => {
  // Hide top bar on landing screen 1 for maximum cinematic opening immersion
  if (currentScreen === 1) return null;

  return (
    <header className="sticky top-0 z-40 bg-[#FFF8E8]/90 backdrop-blur-md border-b border-[#9DB9A8]/30 px-4 md:px-8 py-3 transition-all duration-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Zone 1: Brand title wordmark with RubElHizb symbol */}
        <div 
          onClick={() => onNavigate(3)}
          className="flex items-center gap-2.5 cursor-pointer group shrink-0"
          title="Ke Menu Utama"
        >
          <div className="w-8 h-8 rounded-lg bg-[#315A50] text-[#FFF8E8] flex items-center justify-center transition-transform group-hover:scale-105">
            <RubElHizb className="w-5 h-5 text-[#E6B85C]" color="#E6B85C" />
          </div>
          <div>
            <div className="text-sm md:text-base font-bold font-heading text-[#315A50] tracking-tight leading-tight">
              Mawas Diri & Malaikat Allah
            </div>
            <div className="text-[11px] text-[#27332F]/70 hidden sm:block font-medium">
              PAI & Budi Pekerti · Kelas VII
            </div>
          </div>
        </div>

        {/* Zone 2: Navigation Tracker & Progress */}
        <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-[#27332F]/80">
          <span className="font-semibold text-[#315A50] font-heading">
            Layar {String(currentScreen).padStart(2, '0')}/19
          </span>
          <span className="hidden sm:inline text-[#9DB9A8]">·</span>
          <span className="hidden md:inline font-medium text-[#27332F] max-w-xs truncate">
            {SCREEN_TITLES[currentScreen]}
          </span>
          
          {/* Subtle Progress Bar */}
          <div className="hidden lg:block w-28 h-1.5 bg-[#EFDDBE] rounded-full overflow-hidden ml-2">
            <div 
              className="h-full bg-[#315A50] transition-all duration-300 rounded-full"
              style={{ width: `${(currentScreen / 19) * 100}%` }}
            />
          </div>
        </div>

        {/* Zone 3: Primary Action buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => onNavigate(3)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg text-[#315A50] hover:bg-[#9DB9A8]/20 transition-colors"
            title="Menu Utama"
          >
            <Home className="w-3.5 h-3.5 text-[#315A50]" />
            <span className="hidden sm:inline">Menu</span>
          </button>

          <button
            onClick={onOpenScreenIndex}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg text-[#315A50] hover:bg-[#9DB9A8]/20 transition-colors"
            title="Daftar 19 Layar"
          >
            <Grid className="w-3.5 h-3.5 text-[#315A50]" />
            <span className="hidden md:inline">Indeks Layar</span>
          </button>

          <button
            onClick={onOpenLkpd}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-lg bg-[#315A50] text-[#FFF8E8] hover:bg-[#234039] shadow-sm transition-all hover:scale-[1.02]"
            title="Lembar Kerja Peserta Didik"
          >
            <FileText className="w-3.5 h-3.5 text-[#E6B85C]" />
            <span>LKPD</span>
          </button>
        </div>
      </div>
    </header>
  );
};
