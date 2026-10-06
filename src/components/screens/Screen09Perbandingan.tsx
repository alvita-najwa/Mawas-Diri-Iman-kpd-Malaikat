import React, { useState } from 'react';
import { ScreenNumber } from '../../types';
import { RubElHizb, IslamicLatticeBg } from '../common/IslamicPattern';
import { NavigationControls } from '../common/NavigationControls';
import { Sparkles, User, Shield, Check, Info } from 'lucide-react';

interface ScreenProps {
  onNavigate: (screen: ScreenNumber) => void;
}

export const Screen09Perbandingan: React.FC<ScreenProps> = ({ onNavigate }) => {
  const [activeDimension, setActiveDimension] = useState<number | null>(null);

  const comparisonRows = [
    {
      id: 1,
      aspect: "Wujud & Asal Usul",
      angels: "Makhluk gaib yang diciptakan dari cahaya (nur). Tidak dapat dilihat dalam wujud aslinya oleh mata manusia biasa.",
      humans: "Makhluk nyata (fisik) yang diciptakan dari tanah. Hidup di alam kasat mata dengan raga jasmani."
    },
    {
      id: 2,
      aspect: "Ketaatan & Hawa Nafsu",
      angels: "Selalu taat secara mutlak dan tidak dibekali hawa nafsu. Tidak pernah ingkar atau bermaksiat.",
      humans: "Dikaruniai akal dan hawa nafsu serta kehendak bebas (ikhtiar). Bisa memilih untuk taat atau durhaka."
    },
    {
      id: 3,
      aspect: "Kebutuhan Biologis",
      angels: "Tidak memiliki kebutuhan biologis manusia (tidak makan, minum, tidur, berkeluarga, atau berjenis kelamin).",
      humans: "Memiliki kebutuhan biologis mutlak seperti makan, minum, istirahat, berkembang biak, dan berpasangan."
    },
    {
      id: 4,
      aspect: "Tugas & Tanggung Jawab",
      angels: "Menjalankan tugas sesuai perintah dan ketetapan Allah SWT secara konsisten tanpa henti.",
      humans: "Memikul tanggung jawab moral (taklif) sebagai khalifah di bumi yang kelak akan dihisab amalnya di akhirat."
    }
  ];

  return (
    <div className="relative min-h-[calc(100vh-6rem)] max-w-5xl mx-auto flex flex-col justify-between p-4 md:p-8">
      <IslamicLatticeBg opacity={0.04} />

      {/* Screen Header */}
      <div className="relative z-10 text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFDDBE] text-[#315A50] text-xs font-bold mb-2">
          <RubElHizb className="w-3.5 h-3.5" color="#315A50" />
          <span>KOMPARASI MAKHLUK CIPTAAN ALLAH</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-[#315A50]">
          Malaikat vs Manusia
        </h2>
        <p className="text-xs sm:text-sm text-[#27332F]/80 max-w-lg mx-auto mt-1">
          Perbandingan karakteristik dan amanah yang diemban antara malaikat dan manusia.
        </p>
      </div>

      {/* Comparison Dual Cards / Interactive Matrix */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        {/* Angels Column */}
        <div className="bg-gradient-to-br from-[#315A50] to-[#234039] text-[#FFF8E8] rounded-2xl p-6 shadow-md border border-[#9DB9A8]/30 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-white/20 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#E6B85C]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-heading text-[#FFF8E8]">
                    MALAIKAT
                  </h3>
                  <span className="text-[11px] text-[#EFDDBE]">Makhluk Gaib dari Cahaya</span>
                </div>
              </div>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#E6B85C] text-[#27332F]">
                Ketaatan Mutlak
              </span>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 text-[#E6B85C] mt-0.5 text-xs font-bold">✓</span>
                <span><strong>Makhluk Gaib:</strong> Diciptakan dari nur (cahaya) dan berada di alam malakut.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 text-[#E6B85C] mt-0.5 text-xs font-bold">✓</span>
                <span><strong>Selalu Taat:</strong> Tidak memiliki hawa nafsu, selalu patuh tanpa pernah membangkang.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 text-[#E6B85C] mt-0.5 text-xs font-bold">✓</span>
                <span><strong>Tanpa Kebutuhan Fisik:</strong> Tidak makan, minum, tidur, atau membutuhkan istirahat.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 text-[#E6B85C] mt-0.5 text-xs font-bold">✓</span>
                <span><strong>Tugas Sesuai Perintah:</strong> Melaksanakan amanah Allah SWT dengan tepat dan konsisten.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Humans Column */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-[#9DB9A8]/50 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#9DB9A8]/30 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#EFDDBE] flex items-center justify-center">
                  <User className="w-5 h-5 text-[#315A50]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-heading text-[#315A50]">
                    MANUSIA
                  </h3>
                  <span className="text-[11px] text-[#27332F]/70">Makhluk Fisik dari Tanah</span>
                </div>
              </div>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#9DB9A8]/30 text-[#315A50]">
                Akal & Nafsu
              </span>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-[#27332F]">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#EFDDBE] flex items-center justify-center shrink-0 text-[#315A50] mt-0.5 text-xs font-bold">●</span>
                <span><strong>Makhluk Fisik:</strong> Diciptakan dari saripati tanah dan hidup di alam syahadah (nyata).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#EFDDBE] flex items-center justify-center shrink-0 text-[#315A50] mt-0.5 text-xs font-bold">●</span>
                <span><strong>Memiliki Pilihan:</strong> Dibekali akal pikiran dan hawa nafsu, berpotensi taat atau bermaksiat.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#EFDDBE] flex items-center justify-center shrink-0 text-[#315A50] mt-0.5 text-xs font-bold">●</span>
                <span><strong>Memiliki Kebutuhan Biologis:</strong> Memerlukan makanan, minuman, tidur, dan kasih sayang.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#EFDDBE] flex items-center justify-center shrink-0 text-[#315A50] mt-0.5 text-xs font-bold">●</span>
                <span><strong>Tanggung Jawab Moral:</strong> Memikul amanah taklif dan hisab amal di hadapan Allah SWT.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Required Conclusion Box */}
      <div className="relative z-10 bg-[#EFDDBE]/70 rounded-2xl p-5 border border-[#9DB9A8]/40 shadow-xs">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-[#315A50] text-[#FFF8E8] flex items-center justify-center shrink-0 mt-0.5">
            <Info className="w-4 h-4 text-[#E6B85C]" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-[#D9825B] uppercase tracking-wider">
              Kesimpulan Komparasi
            </span>
            <p className="text-sm md:text-base font-bold text-[#27332F] leading-relaxed mt-0.5">
              &quot;Malaikat dan manusia sama-sama ciptaan Allah SWT, namun memiliki karakteristik, potensi, dan tanggung jawab yang berbeda.&quot;
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <NavigationControls
        currentScreen={9}
        onNavigate={onNavigate}
        prevScreen={8}
        nextScreen={10}
        nextLabel="LANJUT KE GALERI 10 MALAIKAT"
      />
    </div>
  );
};
