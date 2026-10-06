import React from 'react';
import { ScreenNumber } from '../../types';
import { RubElHizb, IslamicLatticeBg } from '../common/IslamicPattern';
import { NavigationControls } from '../common/NavigationControls';
import { HelpCircle, CheckSquare, Grid, ShieldCheck, Scale } from 'lucide-react';

interface ScreenProps {
  onNavigate: (screen: ScreenNumber) => void;
}

export const Screen13MunkarNakir: React.FC<ScreenProps> = ({ onNavigate }) => {
  return (
    <div className="relative min-h-[calc(100vh-6rem)] max-w-5xl mx-auto flex flex-col justify-between p-4 md:p-8">
      <IslamicLatticeBg opacity={0.04} />

      {/* Screen Header */}
      <div className="relative z-10 text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFDDBE] text-[#315A50] text-xs font-bold mb-2">
          <RubElHizb className="w-3.5 h-3.5" color="#315A50" />
          <span>PASANGAN 03 · PERTANYAAN DI ALAM BARZAKH</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-[#315A50]">
          Malaikat Munkar & Malaikat Nakir
        </h2>
        <p className="text-xs sm:text-sm text-[#27332F]/80 max-w-lg mx-auto mt-1">
          Pemeriksa ketauhidan dan kesaksian iman setiap manusia saat memasuki alam kubur (barzakh).
        </p>
      </div>

      {/* Two Educational Panels */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        {/* Panel Munkar */}
        <div className="bg-white rounded-3xl p-6 md:p-7 border border-[#9DB9A8]/50 shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#9DB9A8]/30 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-[#315A50] text-[#FFF8E8] flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-[#E6B85C]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-[#315A50]">
                    Munkar
                  </h3>
                  <span className="text-xs text-[#D9825B] font-semibold">
                    Penanya Ketauhidan di Barzakh
                  </span>
                </div>
              </div>
              <span className="font-arabic text-xl font-bold text-[#315A50]">
                مُنْكَرٌ
              </span>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#FFF8E8] border border-[#EFDDBE]">
                <span className="text-[11px] font-bold text-[#D9825B] uppercase tracking-wider block mb-1">
                  Amanah Pokok:
                </span>
                <p className="text-sm font-bold text-[#27332F] leading-relaxed">
                  &quot;Tugas: Menanyai manusia di alam kubur mengenai keimanan, ketauhidan, dan perbuatannya semasa di dunia.&quot;
                </p>
              </div>

              <div className="text-xs sm:text-sm text-[#27332F]/80 space-y-2 leading-relaxed">
                <p>
                  Malaikat Munkar dan Nakir mengajukan pertanyaan fundamental mengenai prinsip hidup: Siapa Tuhanmu (<em>Man Rabbuka</em>)? Siapa Nabimu (<em>Man Nabiyyuka</em>)? Dan apa pedoman agamamu (<em>Mā Dīnuka</em>)?
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Panel Nakir */}
        <div className="bg-white rounded-3xl p-6 md:p-7 border border-[#9DB9A8]/50 shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#9DB9A8]/30 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-[#315A50] text-[#FFF8E8] flex items-center justify-center">
                  <CheckSquare className="w-6 h-6 text-[#9DB9A8]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-[#315A50]">
                    Nakir
                  </h3>
                  <span className="text-xs text-[#D9825B] font-semibold">
                    Pemeriksa Keyakinan & Integritas
                  </span>
                </div>
              </div>
              <span className="font-arabic text-xl font-bold text-[#315A50]">
                نَكِيرٌ
              </span>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#FFF8E8] border border-[#EFDDBE]">
                <span className="text-[11px] font-bold text-[#D9825B] uppercase tracking-wider block mb-1">
                  Amanah Pokok:
                </span>
                <p className="text-sm font-bold text-[#27332F] leading-relaxed">
                  &quot;Tugas: Bersama malaikat Munkar menguji kesungguhan akidah hamba yang telah wafat di alam barzakh.&quot;
                </p>
              </div>

              <div className="text-xs sm:text-sm text-[#27332F]/80 space-y-2 leading-relaxed">
                <p>
                  Jawaban di alam kubur bukan hafalan lisan, melainkan buah dari keyakinan yang tertanam jujur di dalam dada dan amal ibadah yang tulus dilaksanakan semasa hidup di dunia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Required Reflective Statement Callout */}
      <div className="relative z-10 bg-[#EFDDBE]/80 rounded-2xl p-5 border border-[#9DB9A8]/40 shadow-xs">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-[#315A50] text-[#FFF8E8] flex items-center justify-center shrink-0">
            <Scale className="w-5 h-5 text-[#E6B85C]" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-[#D9825B] uppercase tracking-wider">
              Renungan Esensial Peserta Didik
            </span>
            <p className="text-sm md:text-base font-bold text-[#27332F] leading-relaxed mt-0.5">
              &quot;Setiap perjalanan manusia pada akhirnya memikul tanggung jawab dan pertanggungjawaban (akuntabilitas) di hadapan Allah SWT.&quot;
            </p>
            <p className="text-xs text-[#27332F]/75 mt-1">
              Kesadaran ini menumbuhkan pribadi yang mawas diri, tidak menyia-nyiakan waktu muda, dan senantiasa memperbaiki akhlak.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <NavigationControls
        currentScreen={13}
        onNavigate={onNavigate}
        prevScreen={12}
        nextScreen={14}
        nextLabel="LANJUT: RAQIB & ATID"
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
