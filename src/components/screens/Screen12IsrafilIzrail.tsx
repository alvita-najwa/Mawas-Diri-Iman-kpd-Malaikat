import React from 'react';
import { ScreenNumber } from '../../types';
import { RubElHizb, IslamicLatticeBg } from '../common/IslamicPattern';
import { NavigationControls } from '../common/NavigationControls';
import { Bell, Hourglass, Grid, Clock, Sparkles } from 'lucide-react';

interface ScreenProps {
  onNavigate: (screen: ScreenNumber) => void;
}

export const Screen12IsrafilIzrail: React.FC<ScreenProps> = ({ onNavigate }) => {
  return (
    <div className="relative min-h-[calc(100vh-6rem)] max-w-5xl mx-auto flex flex-col justify-between p-4 md:p-8">
      <IslamicLatticeBg opacity={0.04} />

      {/* Screen Header */}
      <div className="relative z-10 text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFDDBE] text-[#315A50] text-xs font-bold mb-2">
          <RubElHizb className="w-3.5 h-3.5" color="#315A50" />
          <span>PASANGAN 02 · KEPADATAN WAKTU & AJAL</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-[#315A50]">
          Malaikat Israfil & Malaikat Izrail
        </h2>
        <p className="text-xs sm:text-sm text-[#27332F]/80 max-w-lg mx-auto mt-1">
          Mengingatkan manusia akan kepastian batas waktu kehidupan di dunia dan persiapan menghadapi hari akhir.
        </p>
      </div>

      {/* Two Dignified Information Panels */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        {/* Panel Israfil */}
        <div className="bg-white rounded-3xl p-6 md:p-7 border border-[#9DB9A8]/50 shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#9DB9A8]/30 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-[#315A50] text-[#FFF8E8] flex items-center justify-center">
                  <Bell className="w-6 h-6 text-[#E6B85C]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-[#315A50]">
                    Israfil
                  </h3>
                  <span className="text-xs text-[#D9825B] font-semibold">
                    Peniup Sangkakala
                  </span>
                </div>
              </div>
              <span className="font-arabic text-xl font-bold text-[#315A50]">
                إِسْرَافِيلُ
              </span>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#FFF8E8] border border-[#EFDDBE]">
                <span className="text-[11px] font-bold text-[#D9825B] uppercase tracking-wider block mb-1">
                  Amanah Utama:
                </span>
                <p className="text-sm font-bold text-[#27332F] leading-relaxed">
                  &quot;Tugas: Meniup sangkakala pada waktu yang telah ditentukan oleh Allah SWT.&quot;
                </p>
              </div>

              <div className="text-xs sm:text-sm text-[#27332F]/80 space-y-2 leading-relaxed">
                <p>
                  Malaikat Israfil senantiasa bersiap menunggu perintah Allah SWT. Tiupan pertama menandai kehancuran seluruh jagat raya (kiamat), dan tiupan kedua membangunkan seluruh umat manusia untuk dibangkitkan dari alam kubur menuju padang mahsyar.
                </p>
                <p className="text-xs italic bg-[#EFDDBE]/40 p-2.5 rounded-lg border-l-2 border-[#315A50]">
                  <strong>Refleksi Siswa:</strong> Alam semesta memiliki batas akhir; waktu yang kita miliki saat ini harus dimanfaatkan untuk menuntut ilmu dan berbuat kebaikan.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Panel Izrail */}
        <div className="bg-white rounded-3xl p-6 md:p-7 border border-[#9DB9A8]/50 shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#9DB9A8]/30 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-[#315A50] text-[#FFF8E8] flex items-center justify-center">
                  <Hourglass className="w-6 h-6 text-[#E6B85C]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-[#315A50]">
                    Izrail
                  </h3>
                  <span className="text-xs text-[#D9825B] font-semibold">
                    Malakul Maut (Pencabut Nyawa)
                  </span>
                </div>
              </div>
              <span className="font-arabic text-xl font-bold text-[#315A50]">
                عِزْرَائِيلُ
              </span>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#FFF8E8] border border-[#EFDDBE]">
                <span className="text-[11px] font-bold text-[#D9825B] uppercase tracking-wider block mb-1">
                  Amanah Utama:
                </span>
                <p className="text-sm font-bold text-[#27332F] leading-relaxed">
                  &quot;Tugas: Mencabut nyawa seluruh makhluk ciptaan Allah SWT sesuai ajal dan ketetapan-Nya.&quot;
                </p>
              </div>

              <div className="text-xs sm:text-sm text-[#27332F]/80 space-y-2 leading-relaxed">
                <p>
                  Setiap makhluk bernyawa telah ditentukan batas usianya (ajal). Malaikat Izrail menjalankan tugas dengan penuh ketepatan tanpa dapat dimajukan atau dimundurkan sedetik pun, memisahkan ruh dari jasad untuk melangkah ke alam berikutnya.
                </p>
                <p className="text-xs italic bg-[#EFDDBE]/40 p-2.5 rounded-lg border-l-2 border-[#315A50]">
                  <strong>Refleksi Siswa:</strong> Mengingat kematian mendidik kita agar tidak sombong, menghargai setiap hembusan nafas, dan senantiasa berbakti kepada orang tua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <NavigationControls
        currentScreen={12}
        onNavigate={onNavigate}
        prevScreen={11}
        nextScreen={13}
        nextLabel="LANJUT: MUNKAR & NAKIR"
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
