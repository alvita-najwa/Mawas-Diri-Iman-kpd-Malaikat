import React, { useState } from 'react';
import { ScreenNumber } from '../../types';
import { RubElHizb, IslamicLatticeBg } from '../common/IslamicPattern';
import { NavigationControls } from '../common/NavigationControls';
import { Eye, RotateCcw, Link2, Sparkles, CheckCircle, Info } from 'lucide-react';

interface ScreenProps {
  onNavigate: (screen: ScreenNumber) => void;
}

export const Screen17MawasDiri: React.FC<ScreenProps> = ({ onNavigate }) => {
  const [revealedConnection, setRevealedConnection] = useState<boolean>(false);

  return (
    <div className="relative min-h-[calc(100vh-6rem)] max-w-5xl mx-auto flex flex-col justify-between p-4 md:p-8">
      <IslamicLatticeBg opacity={0.04} />

      {/* Screen Header with explicit LO 5 reinforcement tag */}
      <div className="relative z-10 text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFDDBE] text-[#315A50] text-xs font-bold mb-2">
          <RubElHizb className="w-3.5 h-3.5" color="#315A50" />
          <span>CABANG 07 · PENGUATAN & PENERAPAN TUJUAN PEMBELAJARAN 5</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-[#315A50]">
          Mawas Diri & Introspeksi
        </h2>
        <p className="text-xs sm:text-sm text-[#27332F]/80 max-w-lg mx-auto mt-1">
          Dua cermin spiritual yang lahir dari keyakinan terhadap malaikat pengawas amal.
        </p>

        {/* Notice badge confirming it's reinforcement of LO 5 */}
        <div className="inline-flex items-center gap-1.5 mt-2 px-3 py-0.5 rounded-full bg-[#9DB9A8]/20 text-[#315A50] text-[11px] font-semibold">
          <Info className="w-3 h-3 text-[#315A50]" />
          <span>Bukan tujuan pembelajaran baru, melainkan aplikasi nyata dari Tujuan 5.</span>
        </div>
      </div>

      {/* Split-screen / Mirror-inspired Composition */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        {/* Left Side: MAWAS DIRI */}
        <div className="bg-white rounded-3xl p-6 md:p-7 border border-[#315A50]/40 shadow-md flex flex-col justify-between relative overflow-hidden group hover:border-[#315A50] transition-colors">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#315A50]" />

          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#9DB9A8]/30 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-[#315A50] text-[#FFF8E8] flex items-center justify-center">
                  <Eye className="w-6 h-6 text-[#E6B85C]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-[#315A50]">
                    MAWAS DIRI
                  </h3>
                  <span className="text-xs text-[#D9825B] font-bold">
                    Kewaspadaan Preventif
                  </span>
                </div>
              </div>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#EFDDBE] text-[#315A50]">
                Sebelum / Saat
              </span>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#FFF8E8] border border-[#EFDDBE]">
                <span className="text-[11px] font-bold text-[#D9825B] uppercase tracking-wider block mb-1">
                  Definisi:
                </span>
                <p className="text-sm font-bold text-[#27332F] leading-relaxed">
                  &quot;Kesadaran untuk menjaga dan mengendalikan sikap, ucapan, serta perbuatan sebelum atau ketika melakukan sesuatu.&quot;
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#315A50]/10 border border-[#315A50]/20 text-center">
                <span className="text-[11px] font-bold text-[#315A50] uppercase tracking-wider block">
                  Kata Kunci:
                </span>
                <span className="text-base font-extrabold font-heading text-[#315A50]">
                  &quot;Berpikir sebelum bertindak.&quot;
                </span>
              </div>

              <p className="text-xs text-[#27332F]/80 leading-relaxed">
                Mawas diri bekerja bagaikan rem pada kendaraan; menahan kita dari keterlanjuran berkata kotor, menyontek, atau mengambil hak orang lain sebelum tindakan itu terjadi.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: INTROSPEKSI DIRI */}
        <div className="bg-white rounded-3xl p-6 md:p-7 border border-[#D9825B]/40 shadow-md flex flex-col justify-between relative overflow-hidden group hover:border-[#D9825B] transition-colors">
          <div className="absolute top-0 right-0 w-2 h-full bg-[#D9825B]" />

          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#9DB9A8]/30 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-[#D9825B] text-[#FFF8E8] flex items-center justify-center">
                  <RotateCcw className="w-6 h-6 text-[#FFF8E8]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-[#27332F]">
                    INTROSPEKSI DIRI
                  </h3>
                  <span className="text-xs text-[#D9825B] font-bold">
                    Evaluasi Korektif (Muhasabah)
                  </span>
                </div>
              </div>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#EFDDBE] text-[#315A50]">
                Setelah Tindakan
              </span>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#FFF8E8] border border-[#EFDDBE]">
                <span className="text-[11px] font-bold text-[#D9825B] uppercase tracking-wider block mb-1">
                  Definisi:
                </span>
                <p className="text-sm font-bold text-[#27332F] leading-relaxed">
                  &quot;Melihat kembali perilaku diri, menyadari kekurangan atau kesalahan, kemudian berusaha memperbaikinya.&quot;
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#D9825B]/10 border border-[#D9825B]/20 text-center">
                <span className="text-[11px] font-bold text-[#D9825B] uppercase tracking-wider block">
                  Kata Kunci:
                </span>
                <span className="text-base font-extrabold font-heading text-[#D9825B]">
                  &quot;Mengevaluasi dan memperbaiki diri.&quot;
                </span>
              </div>

              <p className="text-xs text-[#27332F]/80 leading-relaxed">
                Introspeksi diri bekerja bagaikan cermin; ketika kita menyadari ada noda atau kesalahan, kita tidak mencari alasan, melainkan segera beristighfar dan memperbaikinya.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Central Interactive Button: "LIHAT HUBUNGANNYA" */}
      <div className="relative z-10 flex flex-col items-center mb-6">
        <button
          onClick={() => setRevealedConnection(!revealedConnection)}
          className="flex items-center gap-2.5 px-7 py-3 rounded-2xl bg-[#315A50] text-[#FFF8E8] font-extrabold text-sm shadow-md hover:bg-[#234039] hover:scale-105 active:scale-95 transition-all cursor-pointer group"
        >
          <Link2 className="w-4 h-4 text-[#E6B85C] group-hover:rotate-45 transition-transform" />
          <span>LIHAT HUBUNGANNYA</span>
        </button>

        {/* Revealed Conclusion Banner */}
        {revealedConnection && (
          <div className="w-full mt-4 p-5 rounded-2xl bg-gradient-to-r from-[#EFDDBE] via-white to-[#EFDDBE] border-2 border-[#315A50] shadow-md text-center animate-fade-in">
            <span className="text-[11px] font-bold text-[#D9825B] uppercase tracking-widest block mb-1">
              Kesimpulan Hubungan Timbal Balik:
            </span>
            <p className="text-base md:text-xl font-extrabold font-heading text-[#315A50] leading-relaxed">
              &quot;Mawas diri membantu kita berhati-hati; introspeksi membantu kita menjadi lebih baik.&quot;
            </p>
            <p className="text-xs text-[#27332F]/75 mt-1.5 max-w-xl mx-auto">
              Keduanya saling melengkapi: tanpa mawas diri kita mudah terpeleset, dan tanpa introspeksi kita tidak pernah belajar dari kesalahan masa lalu.
            </p>
          </div>
        )}
      </div>

      {/* Navigation Controls */}
      <NavigationControls
        currentScreen={17}
        onNavigate={onNavigate}
        prevScreen={16}
        nextScreen={18}
        nextLabel="LANJUT KE KEHIDUPAN SEHARI-HARI"
      />
    </div>
  );
};
