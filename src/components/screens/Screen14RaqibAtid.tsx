import React, { useState } from 'react';
import { ScreenNumber } from '../../types';
import { RubElHizb, IslamicLatticeBg } from '../common/IslamicPattern';
import { NavigationControls } from '../common/NavigationControls';
import { 
  FileCheck2, 
  FileX2, 
  Grid, 
  ArrowDown, 
  Sparkles, 
  HelpCircle, 
  CheckCircle,
  MessageCircle
} from 'lucide-react';

interface ScreenProps {
  onNavigate: (screen: ScreenNumber) => void;
}

export const Screen14RaqibAtid: React.FC<ScreenProps> = ({ onNavigate }) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [selectedExample, setSelectedExample] = useState<number>(0);
  const [showImpactModal, setShowImpactModal] = useState<boolean>(false);

  const flowSteps = [
    {
      step: 1,
      name: "TINDAKAN (ACTION)",
      desc: "Setiap niat, ucapan, dan perilaku yang kita lakukan di kehidupan nyata maupun di dunia maya.",
      color: "#315A50"
    },
    {
      step: 2,
      name: "DICATAT (RECORDED)",
      desc: "Malaikat Raqib (amal baik) dan Atid (amal buruk) mencatat secara real-time dan sempurna.",
      color: "#D9825B"
    },
    {
      step: 3,
      name: "DIRENUNGKAN (REFLECTED UPON)",
      desc: "Kita menyadari bahwa tidak ada satu pun jejak perbuatan yang tersembunyi atau hilang.",
      color: "#E6B85C"
    },
    {
      step: 4,
      name: "PERTANGGUNGJAWABAN (ACCOUNTABILITY)",
      desc: "Buku catatan amal diserahkan di akhirat untuk dihisab secara adil oleh Allah SWT.",
      color: "#315A50"
    }
  ];

  const everydayExamples = [
    {
      id: 1,
      title: "Jujur Saat Ujian / Ulangan",
      scenario: "Ketika guru sedang keluar ruangan dan lembar contekan tersedia, kamu tetap memilih jujur.",
      angelRecord: "Malaikat Raqib mencatat keteguhan integritas dan kejujuranmu sebagai amal kebajikan yang bernilai tinggi.",
      icon: "📝"
    },
    {
      id: 2,
      title: "Menjaga Lisan & Kesantunan",
      scenario: "Menahan diri dari membalas ejekan teman dengan kata-kata kotor atau mencaci maki di grup chat.",
      angelRecord: "Malaikat Raqib mencatat kesabaranmu; sedangkan jika mencaci, malaikat Atid mencatatnya sebagai dosa lisan.",
      icon: "💬"
    },
    {
      id: 3,
      title: "Tidak Mengambil Barang Orang Lain",
      scenario: "Menemukan uang saku teman yang terjatuh di kantin, lalu langsung menyerahkannya ke guru piket.",
      angelRecord: "Malaikat Raqib mencatat sifat amanah dan kejujuranmu yang menyelamatkan hak saudaramu.",
      icon: "👛"
    },
    {
      id: 4,
      title: "Bijak Menggunakan Media Sosial",
      scenario: "Tidak menyebarkan gosip (ghibah), hoax, atau fitnah di TikTok/Instagram/WhatsApp.",
      angelRecord: "Malaikat Raqib mencatat jarimu yang menyebarkan kebaikan; atau Atid jika jarimu menyakiti orang lain.",
      icon: "📱"
    }
  ];

  return (
    <div className="relative min-h-[calc(100vh-6rem)] max-w-5xl mx-auto flex flex-col justify-between p-4 md:p-8">
      <IslamicLatticeBg opacity={0.04} />

      {/* Screen Header */}
      <div className="relative z-10 text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFDDBE] text-[#315A50] text-xs font-bold mb-2">
          <RubElHizb className="w-3.5 h-3.5" color="#315A50" />
          <span>PASANGAN 04 · PENCATAT AMAL MANUSIA</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-[#315A50]">
          Malaikat Raqib & Malaikat Atid
        </h2>
        <p className="text-xs sm:text-sm text-[#27332F]/80 max-w-lg mx-auto mt-1">
          Pengawas amal setia yang mencatat setiap kebajikan dan keburukan tanpa luput sedikit pun.
        </p>
      </div>

      {/* Two Angel Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        {/* Raqib */}
        <div className="bg-white rounded-3xl p-5 md:p-6 border border-[#9DB9A8]/50 shadow-md flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-[#9DB9A8]/30 mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center border border-emerald-200">
                <FileCheck2 className="w-5 h-5 text-emerald-700" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-heading text-[#315A50]">
                  Raqib
                </h3>
                <span className="text-xs text-emerald-700 font-bold">Pencatat Amal Kebaikan</span>
              </div>
            </div>
            <span className="font-arabic text-xl font-bold text-[#315A50]">
              رَقِيبٌ
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#27332F]/85 leading-relaxed bg-[#FFF8E8] p-3 rounded-xl border border-[#EFDDBE]">
            <strong>Tugas Pokok:</strong> Mencatat setiap amal kebaikan, niat ikhlas, perkataan santun, sedekah, dan ketaatan manusia sekecil biji zarrah sekalipun.
          </p>
        </div>

        {/* Atid */}
        <div className="bg-white rounded-3xl p-5 md:p-6 border border-[#9DB9A8]/50 shadow-md flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-[#9DB9A8]/30 mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center border border-amber-200">
                <FileX2 className="w-5 h-5 text-amber-700" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-heading text-[#315A50]">
                  Atid
                </h3>
                <span className="text-xs text-amber-700 font-bold">Pencatat Amal Keburukan</span>
              </div>
            </div>
            <span className="font-arabic text-xl font-bold text-[#315A50]">
              عَتِيدٌ
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#27332F]/85 leading-relaxed bg-[#FFF8E8] p-3 rounded-xl border border-[#EFDDBE]">
            <strong>Tugas Pokok:</strong> Mencatat setiap perbuatan dosa, maksiat, kebohongan, dan kelalaian manusia dengan teliti tanpa menambahkan atau mengurangi.
          </p>
        </div>
      </div>

      {/* Interactive Flow: TINDAKAN -> DICATAT -> DIRENUNGKAN -> PERTANGGUNGJAWABAN */}
      <div className="relative z-10 bg-white rounded-2xl p-5 border border-[#9DB9A8]/50 shadow-xs mb-6">
        <span className="text-[11px] font-bold text-[#D9825B] uppercase tracking-wider block mb-3 text-center">
          Alur Interaktif Pencatatan Amal:
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {flowSteps.map((step) => {
            const isCurrent = activeStep === step.step;
            return (
              <div
                key={step.step}
                onClick={() => setActiveStep(step.step)}
                className={`p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-[#315A50] text-[#FFF8E8] border-[#315A50] shadow-sm'
                    : 'bg-[#FFF8E8]/70 text-[#27332F] border-[#9DB9A8]/30 hover:bg-[#FFF8E8]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                      isCurrent ? 'bg-white/20 text-[#FFF8E8]' : 'bg-[#EFDDBE] text-[#315A50]'
                    }`}>
                      Tahap 0{step.step}
                    </span>
                    {isCurrent && <CheckCircle className="w-3.5 h-3.5 text-[#E6B85C]" />}
                  </div>
                  <h4 className={`text-xs font-bold font-heading mb-1 ${isCurrent ? 'text-[#E6B85C]' : 'text-[#315A50]'}`}>
                    {step.name}
                  </h4>
                  <p className={`text-[11px] leading-relaxed ${isCurrent ? 'text-[#EFDDBE]' : 'text-[#27332F]/80'}`}>
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Everyday Examples Tab Selector */}
      <div className="relative z-10 bg-[#EFDDBE]/50 rounded-2xl p-5 border border-[#9DB9A8]/40 mb-6">
        <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
          <span className="text-xs font-bold text-[#315A50] uppercase tracking-wider font-heading">
            Contoh Nyata Perilaku Siswa Sehari-hari:
          </span>
          <span className="text-[11px] text-[#27332F]/70">Pilih salah satu situasi di bawah:</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
          {everydayExamples.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setSelectedExample(idx)}
              className={`p-2.5 rounded-xl text-left text-xs font-bold transition-all border ${
                selectedExample === idx
                  ? 'bg-[#315A50] text-[#FFF8E8] border-[#315A50] shadow-xs'
                  : 'bg-white text-[#27332F] border-[#9DB9A8]/30 hover:bg-[#FFF8E8]'
              }`}
            >
              <div className="text-base mb-1">{item.icon}</div>
              <div className="line-clamp-1">{item.title}</div>
            </button>
          ))}
        </div>

        {/* Selected Example Detail */}
        <div className="bg-white p-4 rounded-xl border border-[#9DB9A8]/30 text-xs sm:text-sm animate-fade-in space-y-2">
          <div className="flex items-center gap-2 text-[#315A50] font-bold">
            <span>Situasi:</span>
            <span className="text-[#27332F] font-normal">{everydayExamples[selectedExample].scenario}</span>
          </div>
          <div className="p-2.5 rounded-lg bg-[#FFF8E8] border-l-3 border-[#315A50] text-xs">
            <strong className="text-[#315A50]">Catatan Malaikat:</strong> {everydayExamples[selectedExample].angelRecord}
          </div>
        </div>
      </div>

      {/* Key Reflection Banner & Contextual Button */}
      <div className="relative z-10 bg-gradient-to-r from-[#315A50] to-[#234039] text-[#FFF8E8] rounded-2xl p-5 border border-[#E6B85C]/40 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-bold text-[#E6B85C] uppercase tracking-wider block mb-0.5">
            Refleksi Kunci Karakter Siswa:
          </span>
          <p className="text-sm md:text-base font-bold leading-relaxed text-[#FFF8E8]">
            &quot;Kejujuran sejati tidak bergantung pada ada atau tidaknya orang lain yang melihat.&quot;
          </p>
        </div>

        <button
          onClick={() => setShowImpactModal(!showImpactModal)}
          className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#E6B85C] text-[#27332F] font-extrabold text-xs sm:text-sm hover:bg-[#d6a546] shadow-sm transition-all active:scale-95"
        >
          <HelpCircle className="w-4 h-4 text-[#27332F]" />
          <span>APA DAMPAKNYA BAGI KITA?</span>
        </button>
      </div>

      {/* Pop-up / Reveal Card for "APA DAMPAKNYA BAGI KITA?" */}
      {showImpactModal && (
        <div className="relative z-20 mt-4 bg-white rounded-2xl p-5 border-2 border-[#315A50] shadow-lg animate-fade-in text-xs sm:text-sm">
          <div className="flex items-center justify-between pb-2 border-b border-[#9DB9A8]/30 mb-2">
            <h4 className="font-bold font-heading text-[#315A50] text-sm">
              Dampak Menyadari Keberadaan Malaikat Raqib & Atid:
            </h4>
            <button
              onClick={() => setShowImpactModal(false)}
              className="text-xs text-[#27332F]/60 hover:text-[#315A50] font-bold"
            >
              ✕ Tutup
            </button>
          </div>
          <ul className="space-y-2 text-[#27332F]/85">
            <li className="flex items-start gap-2">
              <span className="text-[#315A50] font-bold">1.</span>
              <span><strong>Mawas Diri Tinggi:</strong> Tidak berani melakukan maksiat sembunyi-sembunyi karena tahu malaikat tidak pernah lengah.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#315A50] font-bold">2.</span>
              <span><strong>Semangat Beramal Saleh:</strong> Yakin setiap kebaikan kecil (tersenyum, menyingkirkan duri, membantu ibu) pasti dicatat dan berpahala.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#315A50] font-bold">3.</span>
              <span><strong>Integritas Pribadi:</strong> Menjadi siswa berkarakter kuat yang tetap jujur meski tidak ada kamera atau pengawas.</span>
            </li>
          </ul>
        </div>
      )}

      {/* Navigation Controls */}
      <NavigationControls
        currentScreen={14}
        onNavigate={onNavigate}
        prevScreen={13}
        nextScreen={15}
        nextLabel="LANJUT: MALIK & RIDWAN"
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
