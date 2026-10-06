import React from 'react';
import { ScreenNumber } from '../../types';
import { RubElHizb } from './IslamicPattern';
import { X, CheckCircle2 } from 'lucide-react';

interface ScreenIndexModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentScreen: ScreenNumber;
  onSelectScreen: (screen: ScreenNumber) => void;
}

const SCREENS_DATA: Array<{ id: ScreenNumber; title: string; category: string; description: string }> = [
  { id: 1, title: 'Landing Page', category: 'Pengantar', description: 'Halaman pembuka materi akidah kelas VII' },
  { id: 2, title: 'Pemantik Refleksi', category: 'Apersepsi', description: 'Skenario situasi kelas dan pertanyaan pemantik' },
  { id: 3, title: 'Menu Interaktif Utama', category: 'Navigasi', description: '7 cabang pokok pembelajaran' },
  { id: 4, title: 'Tujuan Pembelajaran', category: 'Kompetensi', description: '5 capaian pembelajaran fase D' },
  { id: 5, title: 'Pengertian Iman kepada Malaikat', category: 'Konsep Dasar', description: 'Makna percaya, memahami, dan merefleksikan' },
  { id: 6, title: 'Posisi dalam Rukun Iman', category: 'Struktur Akidah', description: 'Kedudukan urutan ke-2 dalam 6 rukun iman' },
  { id: 7, title: 'Dalil Iman kepada Malaikat', category: 'Dalil Naqli', description: 'Q.S. al-Baqarah/2:285 teks Arab & makna' },
  { id: 8, title: 'Sifat-Sifat Malaikat', category: 'Karakteristik', description: '6 sifat ketaatan makhluk gaib dari nur' },
  { id: 9, title: 'Malaikat vs Manusia', category: 'Komparasi', description: 'Perbandingan karakteristik & tanggung jawab' },
  { id: 10, title: 'Galeri Nama & Tugas Malaikat', category: 'Galeri Interaktif', description: '10 malaikat dalam 5 kelompok pasangan' },
  { id: 11, title: 'Jibril & Mikail', category: 'Tugas Malaikat', description: 'Penyampai wahyu & pengatur rezeki' },
  { id: 12, title: 'Israfil & Izrail', category: 'Tugas Malaikat', description: 'Peniup sangkakala & pencabut nyawa' },
  { id: 13, title: 'Munkar & Nakir', category: 'Tugas Malaikat', description: 'Penanya amal di alam kubur / barzakh' },
  { id: 14, title: 'Raqib & Atid', category: 'Tugas Malaikat', description: 'Pencatat amal kebaikan & keburukan' },
  { id: 15, title: 'Malik & Ridwan', category: 'Tugas Malaikat', description: 'Penjaga pintu Neraka & Surga' },
  { id: 16, title: 'Hikmah Beriman kepada Malaikat', category: 'Pilar Hikmah', description: 'Diagram radial 5 pilar hikmah keimanan' },
  { id: 17, title: 'Mawas Diri & Introspeksi', category: 'Penguatan Tujuan 5', description: 'Komposisi cermin berpikir sebelum bertindak' },
  { id: 18, title: 'Iman dalam Kehidupan Sehari-hari', category: 'Aplikasi Konkret', description: '7 perilaku nyata siswa berakhlak mulia' },
  { id: 19, title: 'Penutup Pembelajaran', category: 'Refleksi Akhir', description: 'Komitmen mawas diri & akses Lembar Kerja (LKPD)' }
];

export const ScreenIndexModal: React.FC<ScreenIndexModalProps> = ({
  isOpen,
  onClose,
  currentScreen,
  onSelectScreen
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#FFF8E8] rounded-2xl shadow-2xl border border-[#9DB9A8]/40 flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#9DB9A8]/30 bg-[#FFF8E8]">
          <div className="flex items-center gap-2.5">
            <RubElHizb className="w-5 h-5 text-[#315A50]" color="#315A50" />
            <div>
              <h2 className="text-lg font-bold font-heading text-[#315A50]">
                Indeks 19 Layar Pembelajaran
              </h2>
              <p className="text-xs text-[#27332F]/70">
                Pilih layar untuk navigasi cepat (alur kurikulum tetap terjaga)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#27332F]/70 hover:text-[#315A50] hover:bg-[#9DB9A8]/20 transition-colors"
            aria-label="Tutup indeks layar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Grid */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {SCREENS_DATA.map((screen) => {
            const isCurrent = screen.id === currentScreen;
            return (
              <button
                key={screen.id}
                onClick={() => {
                  onSelectScreen(screen.id);
                  onClose();
                }}
                className={`text-left p-3.5 rounded-xl border transition-all text-sm flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-[#315A50] text-[#FFF8E8] border-[#315A50] shadow-md ring-2 ring-[#E6B85C]/50'
                    : 'bg-white hover:bg-[#EFDDBE]/40 border-[#9DB9A8]/30 text-[#27332F] hover:border-[#315A50]/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[11px] font-bold px-1.5 py-0.5 rounded ${
                      isCurrent ? 'bg-[#FFF8E8]/20 text-[#FFF8E8]' : 'bg-[#EFDDBE] text-[#315A50]'
                    }`}>
                      Layar {String(screen.id).padStart(2, '0')}
                    </span>
                    <span className={`text-[10px] ${isCurrent ? 'text-[#FFF8E8]/70' : 'text-[#27332F]/60'}`}>
                      {screen.category}
                    </span>
                  </div>
                  <h4 className={`font-bold font-heading line-clamp-1 ${isCurrent ? 'text-[#FFF8E8]' : 'text-[#315A50]'}`}>
                    {screen.title}
                  </h4>
                  <p className={`text-xs mt-1 line-clamp-2 ${isCurrent ? 'text-[#FFF8E8]/80' : 'text-[#27332F]/70'}`}>
                    {screen.description}
                  </p>
                </div>
                {isCurrent && (
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-[#E6B85C] mt-2 pt-1 border-t border-[#FFF8E8]/20">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Sedang Aktif</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-[#9DB9A8]/30 bg-[#FFF8E8] flex items-center justify-between text-xs text-[#27332F]/70">
          <span>Struktur kurikulum lengkap Fase D Kelas VII (19 Layar)</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 font-semibold text-[#315A50] bg-[#9DB9A8]/20 rounded-lg hover:bg-[#9DB9A8]/30 transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
