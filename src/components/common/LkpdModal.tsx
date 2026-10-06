import React, { useState } from 'react';
import { LKPD_QUESTIONS, APP_INFO } from '../../data/learningMaterial';
import { RubElHizb } from './IslamicPattern';
import { X, CheckCircle, AlertCircle, Award, Printer, RotateCcw, Send } from 'lucide-react';

interface LkpdModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LkpdModal: React.FC<LkpdModalProps> = ({ isOpen, onClose }) => {
  const [studentName, setStudentName] = useState('');
  const [studentClass, setStudentClass] = useState('VII - A');
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [reflectionText, setReflectionText] = useState('');
  const [activeTab, setActiveTab] = useState<'quiz' | 'reflection'>('quiz');

  if (!isOpen) return null;

  const handleSelectAnswer = (questionId: number, optionIndex: number) => {
    if (submitted) return;
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const calculateScore = () => {
    let correctCount = 0;
    LKPD_QUESTIONS.forEach(q => {
      if (answers[q.id] === q.correctIndex) {
        correctCount += 1;
      }
    });
    return Math.round((correctCount / LKPD_QUESTIONS.length) * 100);
  };

  const score = calculateScore();
  const answeredAll = LKPD_QUESTIONS.every(q => answers[q.id] !== undefined);

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
    setReflectionText('');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/65 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#FFF8E8] rounded-2xl shadow-2xl border border-[#9DB9A8]/50 flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#315A50] text-[#FFF8E8] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-1.5 bg-[#FFF8E8]/10 rounded-lg">
              <RubElHizb className="w-5 h-5 text-[#E6B85C]" color="#E6B85C" />
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-bold font-heading leading-tight">
                Lembar Kerja Peserta Didik (LKPD) Interaktif
              </h2>
              <p className="text-xs text-[#FFF8E8]/80 font-medium">
                {APP_INFO.subject} · {APP_INFO.phaseGrade} · Evaluasi 5 Tujuan Pembelajaran
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#FFF8E8]/70 hover:text-[#FFF8E8] hover:bg-[#FFF8E8]/15 transition-colors"
            aria-label="Tutup LKPD"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Student Identity Form Bar */}
        <div className="bg-[#EFDDBE]/60 px-6 py-3 border-b border-[#9DB9A8]/40 flex flex-wrap items-center gap-4 text-xs">
          <div className="flex items-center gap-2 grow min-w-[200px]">
            <label htmlFor="student-name" className="font-bold text-[#315A50] shrink-0">Nama Siswa:</label>
            <input
              id="student-name"
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="Ketik nama lengkapmu..."
              className="bg-white px-3 py-1.5 rounded-lg border border-[#9DB9A8]/50 text-xs w-full focus:outline-none focus:ring-1 focus:ring-[#315A50]"
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="student-class" className="font-bold text-[#315A50] shrink-0">Kelas:</label>
            <input
              id="student-class"
              type="text"
              value={studentClass}
              onChange={(e) => setStudentClass(e.target.value)}
              placeholder="Contoh: VII - 1"
              className="bg-white px-3 py-1.5 rounded-lg border border-[#9DB9A8]/50 text-xs w-28 focus:outline-none focus:ring-1 focus:ring-[#315A50]"
            />
          </div>
          <div className="flex items-center gap-1.5 ml-auto">
            <button
              onClick={() => setActiveTab('quiz')}
              className={`px-3 py-1 rounded-md font-bold transition-colors ${
                activeTab === 'quiz' ? 'bg-[#315A50] text-[#FFF8E8]' : 'bg-white/60 text-[#315A50]'
              }`}
            >
              Soal Evaluasi (5 Soal)
            </button>
            <button
              onClick={() => setActiveTab('reflection')}
              className={`px-3 py-1 rounded-md font-bold transition-colors ${
                activeTab === 'reflection' ? 'bg-[#315A50] text-[#FFF8E8]' : 'bg-white/60 text-[#315A50]'
              }`}
            >
              Refleksi Mawas Diri
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {activeTab === 'quiz' ? (
            <>
              {submitted && (
                <div className="p-4 rounded-xl bg-gradient-to-r from-[#315A50] to-[#234039] text-[#FFF8E8] shadow-md flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#E6B85C] text-[#315A50] flex items-center justify-center font-bold text-lg">
                      <Award className="w-6 h-6 text-[#315A50]" />
                    </div>
                    <div>
                      <div className="text-xs text-[#E6B85C] font-bold">Hasil Evaluasi Pembelajaran</div>
                      <div className="text-lg font-bold font-heading">
                        Nilai Kamu: <span className="text-[#E6B85C] font-mono">{score}</span> / 100
                      </div>
                      <div className="text-xs text-[#FFF8E8]/80">
                        {score >= 80 ? 'Alhamdulillah, pemahamanmu sangat istimewa!' : 'Tetap semangat! Kamu bisa mengulang materi untuk memperdalam pemahaman.'}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleReset}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-white/20 hover:bg-white/30 rounded-lg text-white"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      Ulangi Kuis
                    </button>
                    <button
                      onClick={handlePrint}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-[#E6B85C] hover:bg-[#d6a546] text-[#27332F] rounded-lg"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      Cetak / Simpan
                    </button>
                  </div>
                </div>
              )}

              <div className="space-y-5">
                {LKPD_QUESTIONS.map((q, idx) => {
                  const selected = answers[q.id];
                  const isCorrect = selected === q.correctIndex;
                  return (
                    <div
                      key={q.id}
                      className="p-4 rounded-xl bg-white border border-[#9DB9A8]/40 shadow-xs hover:border-[#315A50]/40 transition-all"
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className="text-xs font-bold px-2 py-0.5 bg-[#EFDDBE] text-[#315A50] rounded-md font-heading">
                          Soal {idx + 1} · {q.objectiveReference}
                        </span>
                        {submitted && (
                          <span className={`text-xs font-bold flex items-center gap-1 ${isCorrect ? 'text-emerald-700' : 'text-rose-700'}`}>
                            {isCorrect ? (
                              <>
                                <CheckCircle className="w-4 h-4 text-emerald-600" />
                                Benar (+20)
                              </>
                            ) : (
                              <>
                                <AlertCircle className="w-4 h-4 text-rose-600" />
                                Kurang Tepat
                              </>
                            )}
                          </span>
                        )}
                      </div>

                      <p className="font-semibold text-sm text-[#27332F] mb-3">
                        {q.question}
                      </p>

                      <div className="space-y-2">
                        {q.options.map((option, optIdx) => {
                          const isOptionSelected = selected === optIdx;
                          let optionStyle = 'border-gray-200 hover:bg-[#FFF8E8] text-[#27332F]';
                          
                          if (submitted) {
                            if (optIdx === q.correctIndex) {
                              optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-semibold';
                            } else if (isOptionSelected) {
                              optionStyle = 'bg-rose-50 border-rose-400 text-rose-900';
                            }
                          } else if (isOptionSelected) {
                            optionStyle = 'bg-[#315A50]/10 border-[#315A50] text-[#315A50] font-semibold';
                          }

                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleSelectAnswer(q.id, optIdx)}
                              disabled={submitted}
                              className={`w-full text-left p-2.5 rounded-lg border text-xs sm:text-sm flex items-start gap-2.5 transition-colors ${optionStyle}`}
                            >
                              <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                                {String.fromCharCode(65 + optIdx)}
                              </span>
                              <span className="grow">{option}</span>
                            </button>
                          );
                        })}
                      </div>

                      {submitted && (
                        <div className="mt-3 p-2.5 rounded-lg bg-[#EFDDBE]/40 border-l-3 border-[#315A50] text-xs text-[#27332F]/85">
                          <strong className="text-[#315A50]">Penjelasan Guru:</strong> {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {!submitted && (
                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => setSubmitted(true)}
                    disabled={!answeredAll}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm shadow-sm transition-all ${
                      answeredAll
                        ? 'bg-[#315A50] text-[#FFF8E8] hover:bg-[#234039] active:scale-95'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <Send className="w-4 h-4 text-[#E6B85C]" />
                    <span>Periksa & Kumpulkan Jawaban</span>
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white border border-[#9DB9A8]/40">
                <h3 className="font-bold font-heading text-base text-[#315A50] mb-1">
                  Lembar Muhasabah Diri: Mawas Diri & Introspeksi
                </h3>
                <p className="text-xs text-[#27332F]/80 mb-4">
                  Sebagai wujud penerapan Tujuan Pembelajaran 5 (Hikmah Beriman kepada Malaikat), tuliskan 2 komitmen tindakan nyata yang akan kamu lakukan di sekolah dan di rumah saat tidak ada yang melihatmu.
                </p>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-[#315A50] mb-1">
                      1. Komitmen Kejujuran & Menjaga Lisan di Sekolah:
                    </label>
                    <textarea
                      rows={3}
                      value={reflectionText}
                      onChange={(e) => setReflectionText(e.target.value)}
                      placeholder="Contoh: Saya berkomitmen tidak akan menyontek saat ujian PAI, dan akan menahan diri dari mengejek teman saat istirahat..."
                      className="w-full p-3 rounded-lg border border-[#9DB9A8]/50 text-xs sm:text-sm bg-[#FFF8E8]/40 focus:outline-none focus:ring-1 focus:ring-[#315A50]"
                    />
                  </div>
                </div>

                <div className="mt-4 p-3 rounded-lg bg-[#EFDDBE]/50 text-xs text-[#27332F]/80 flex items-start gap-2">
                  <RubElHizb className="w-4 h-4 text-[#315A50] shrink-0 mt-0.5" color="#315A50" />
                  <span>
                    <em>&quot;Kejujuran sejati tidak bergantung pada ada atau tidaknya orang lain yang melihat. Malaikat Raqib dan Atid senantiasa mencatat amal kita.&quot;</em>
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-[#9DB9A8]/30 bg-[#FFF8E8] flex items-center justify-between text-xs text-[#27332F]/70">
          <span>Karya Pembelajaran: {APP_INFO.author}</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 font-bold text-[#315A50] bg-[#EFDDBE] rounded-lg hover:bg-[#e4cea7] transition-colors"
          >
            Selesai / Kembali ke Materi
          </button>
        </div>
      </div>
    </div>
  );
};
