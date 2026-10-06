import React from 'react';
import { ScreenNumber } from '../../types';
import { RubElHizb, IslamicLatticeBg } from '../common/IslamicPattern';
import { NavigationControls } from '../common/NavigationControls';
import { Scroll, CloudRain, Grid, ArrowRight } from 'lucide-react';

interface ScreenProps {
  onNavigate: (screen: ScreenNumber) => void;
}

export const Screen11JibrilMikail: React.FC<ScreenProps> = ({ onNavigate }) => {
  return (
    <div className="relative min-h-[calc(100vh-6rem)] max-w-5xl mx-auto flex flex-col justify-between p-4 md:p-8">
      <IslamicLatticeBg opacity={0.04} />

      {/* Screen Header */}
      <div className="relative z-10 text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFDDBE] text-[#315A50] text-xs font-bold mb-2">
          <RubElHizb className="w-3.5 h-3.5" color="#315A50" />
          <span>PASANGAN 01 · PETUNJUK & REZEKI</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-[#315A50]">
          Malaikat Jibril & Malaikat Mikail
        </h2>
        <p className="text-xs sm:text-sm text-[#27332F]/80 max-w-lg mx-auto mt-1">
          Dua malaikat agung yang bertugas memelihara kebutuhan ruhani (wahyu) dan jasmani (rezeki) makhluk Allah.
        </p>
      </div>

      {/* Two Detailed Panels */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        {/* Panel Jibril */}
        <div className="bg-white rounded-3xl p-6 md:p-7 border border-[#9DB9A8]/50 shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#9DB9A8]/30 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-[#315A50] text-[#FFF8E8] flex items-center justify-center">
                  <Scroll className="w-6 h-6 text-[#E6B85C]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-[#315A50]">
                    Jibril
                  </h3>
                  <span className="text-xs text-[#D9825B] font-semibold">
                    Ruhul Qudus / Ruhul Amin
                  </span>
                </div>
              </div>
              <span className="font-arabic text-xl font-bold text-[#315A50]">
                جِبْرِيلُ
              </span>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#FFF8E8] border border-[#EFDDBE]">
                <span className="text-[11px] font-bold text-[#D9825B] uppercase tracking-wider block mb-1">
                  Amanah Utama:
                </span>
                <p className="text-sm font-bold text-[#27332F] leading-relaxed">
                  &quot;Tugas: Menyampaikan wahyu Allah SWT kepada para nabi dan rasul.&quot;
                </p>
              </div>

              <div className="text-xs sm:text-sm text-[#27332F]/80 space-y-2 leading-relaxed">
                <p>
                  Malaikat Jibril adalah pemimpin para malaikat. Dialah yang diamanahkan mengantarkan firman Allah SWT hingga tersusun menjadi kitab-kitab suci, termasuk mengantarkan Al-Qur&apos;an kepada Nabi Muhammad SAW di Gua Hira.
                </p>
                <p className="text-xs italic bg-[#EFDDBE]/40 p-2.5 rounded-lg border-l-2 border-[#315A50]">
                  <strong>Refleksi Siswa:</strong> Menghormati Al-Qur&apos;an dan tekun mempelajarinya adalah wujud rasa syukur atas amanah wahyu yang disampaikan oleh malaikat Jibril.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Panel Mikail */}
        <div className="bg-white rounded-3xl p-6 md:p-7 border border-[#9DB9A8]/50 shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#9DB9A8]/30 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-[#315A50] text-[#FFF8E8] flex items-center justify-center">
                  <CloudRain className="w-6 h-6 text-[#A9CBD2]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-[#315A50]">
                    Mikail
                  </h3>
                  <span className="text-xs text-[#D9825B] font-semibold">
                    Pengatur Keseimbangan Alam
                  </span>
                </div>
              </div>
              <span className="font-arabic text-xl font-bold text-[#315A50]">
                مِيكَائِيلُ
              </span>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#FFF8E8] border border-[#EFDDBE]">
                <span className="text-[11px] font-bold text-[#D9825B] uppercase tracking-wider block mb-1">
                  Amanah Utama:
                </span>
                <p className="text-sm font-bold text-[#27332F] leading-relaxed">
                  &quot;Tugas: Mengatur dan membagikan rezeki kepada seluruh ciptaan Allah SWT serta mengurus fenomena alam atas perintah-Nya.&quot;
                </p>
              </div>

              <div className="text-xs sm:text-sm text-[#27332F]/80 space-y-2 leading-relaxed">
                <p>
                  Malaikat Mikail bertanggung jawab atas keberlangsungan siklus hidup alam semesta: menurunkan tetesan air hujan, meniupkan angin, menumbuhkan tanaman, hingga memastikan setiap makhluk menerima rezeki yang telah ditentukan.
                </p>
                <p className="text-xs italic bg-[#EFDDBE]/40 p-2.5 rounded-lg border-l-2 border-[#315A50]">
                  <strong>Refleksi Siswa:</strong> Bersyukur atas nikmat rezeki, tidak membuang-buang makanan, dan menjaga kelestarian alam lingkungan sekitar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls with explicit GALLERY button */}
      <NavigationControls
        currentScreen={11}
        onNavigate={onNavigate}
        prevScreen={10}
        nextScreen={12}
        nextLabel="LANJUT: ISRAFIL & IZRAIL"
        customActions={
          <button
            onClick={() => onNavigate(10)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-[#315A50] bg-[#EFDDBE] hover:bg-[#e4cea7] transition-colors"
          >
            <Grid className="w-3.5 h-3.5 text-[#315A50]" />
            <span>KEMBALI KE GALERI</span>
          </button>
        }
      />
    </div>
  );
};
