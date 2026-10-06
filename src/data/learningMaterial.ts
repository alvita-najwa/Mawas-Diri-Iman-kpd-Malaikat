import { LearningObjective, PillarOfFaith, AngelCharacteristic, AngelPair, EverydayBehavior, LkpdQuestion } from '../types';

export const APP_INFO = {
  subject: "Pendidikan Agama Islam dan Budi Pekerti",
  element: "Akidah",
  phaseGrade: "Fase D / Kelas VII",
  semester: "Semester Genap",
  chapterTitle: "MAWAS DIRI DAN INTROSPEKSI DALAM MENJALANI KEHIDUPAN",
  mainTopic: "IMAN KEPADA MALAIKAT ALLAH SWT.",
  author: "Shabrina Tsabita Asmi",
  targetAudience: "Peserta Didik Kelas VII SMP/MTs"
};

export const LEARNING_OBJECTIVES: LearningObjective[] = [
  {
    id: 1,
    numberText: "01",
    statement: "Peserta didik dapat menyebutkan pengertian iman kepada malaikat dengan benar.",
    details: "Memahami hakikat keyakinan hati, pengakuan lisan, dan perwujudan dalam perbuatan mengenai keberadaan malaikat Allah SWT."
  },
  {
    id: 2,
    numberText: "02",
    statement: "Peserta didik dapat mengidentifikasi dalil tentang iman kepada malaikat dengan tepat.",
    details: "Mengenal dalil naqli utama Q.S. al-Baqarah/2:285 beserta maknanya sebagai dasar keimanan."
  },
  {
    id: 3,
    numberText: "03",
    statement: "Peserta didik dapat menjelaskan sifat-sifat malaikat dengan benar.",
    details: "Menjelaskan karakteristik unik malaikat sebagai makhluk gaib yang diciptakan dari cahaya dan senantiasa taat tanpa berhawa nafsu."
  },
  {
    id: 4,
    numberText: "04",
    statement: "Peserta didik dapat menjelaskan tugas malaikat dengan benar.",
    details: "Mengidentifikasi 10 malaikat utama beserta rincian tugas khusus yang diamanahkan oleh Allah SWT."
  },
  {
    id: 5,
    numberText: "05",
    statement: "Peserta didik dapat menyimpulkan hikmah beriman kepada malaikat dengan tepat.",
    details: "Menghubungkan keimanan pada malaikat dengan kesadaran mawas diri, introspeksi diri, dan pembentukan akhlak mulia."
  }
];

export const MAIN_MENU_BRANCHES = [
  {
    id: '01',
    title: 'TUJUAN PEMBELAJARAN',
    subtitle: '5 capaian pembelajaran materi',
    targetScreen: 4 as const,
    badge: 'Tujuan 1–5',
    color: '#315A50',
    icon: 'target'
  },
  {
    id: '02',
    title: 'PENGERTIAN IMAN KEPADA MALAIKAT',
    subtitle: 'Makna meyakini ciptaan Allah SWT yang gaib',
    targetScreen: 5 as const,
    badge: 'Tujuan 1',
    color: '#9DB9A8',
    icon: 'book-open'
  },
  {
    id: '03',
    title: 'DALIL IMAN KEPADA MALAIKAT',
    subtitle: 'Q.S. al-Baqarah ayat 285 & maknanya',
    targetScreen: 7 as const,
    badge: 'Tujuan 2',
    color: '#E6B85C',
    icon: 'scroll'
  },
  {
    id: '04',
    title: 'SIFAT-SIFAT MALAIKAT',
    subtitle: 'Karakteristik & komparasi dengan manusia',
    targetScreen: 8 as const,
    badge: 'Tujuan 3',
    color: '#A9CBD2',
    icon: 'sparkles'
  },
  {
    id: '05',
    title: 'NAMA DAN TUGAS MALAIKAT',
    subtitle: '10 malaikat utama dalam 5 pasang tugas',
    targetScreen: 10 as const,
    badge: 'Tujuan 4',
    color: '#D9825B',
    icon: 'users'
  },
  {
    id: '06',
    title: 'HIKMAH BERIMAN KEPADA MALAIKAT',
    subtitle: '5 pilar hikmah dalam kehidupan',
    targetScreen: 16 as const,
    badge: 'Tujuan 5',
    color: '#315A50',
    icon: 'heart'
  },
  {
    id: '07',
    title: 'MAWAS DIRI DAN INTROSPEKSI',
    subtitle: 'Penerapan & penguatan Tujuan 5',
    targetScreen: 17 as const,
    badge: 'Penguatan Tujuan 5',
    color: '#9DB9A8',
    icon: 'compass'
  }
];

export const PILLARS_OF_FAITH: PillarOfFaith[] = [
  {
    number: 1,
    title: "Iman kepada Allah SWT",
    arabic: "الإِيمَانُ بِاللَّهِ",
    description: "Meyakini dengan sepenuh hati bahwa Allah SWT adalah Tuhan Yang Maha Esa, Pencipta, Pemelihara, dan Pengatur seluruh alam semesta.",
    isFocus: false
  },
  {
    number: 2,
    title: "Iman kepada Malaikat Allah SWT",
    arabic: "الإِيمَانُ بِمَلَائِكَتِهِ",
    description: "Meyakini keberadaan malaikat sebagai hamba Allah SWT yang taat, diciptakan dari cahaya, dan bertugas melaksanakan seluruh perintah-Nya.",
    isFocus: true
  },
  {
    number: 3,
    title: "Iman kepada Kitab-Kitab Allah SWT",
    arabic: "الإِيمَانُ بِكُتُبِهِ",
    description: "Meyakini kitab-kitab suci (Taurat, Zabur, Injil, Al-Qur'an) yang diwahyukan Allah SWT kepada para rasul sebagai pedoman hidup manusia.",
    isFocus: false
  },
  {
    number: 4,
    title: "Iman kepada Rasul-Rasul Allah SWT",
    arabic: "الإِيمَانُ بِرُسُلِهِ",
    description: "Meyakini manusia-manusia pilihan yang diutus Allah SWT untuk membimbing umat manusia menuju jalan kebenaran.",
    isFocus: false
  },
  {
    number: 5,
    title: "Iman kepada Hari Akhir (Kiamat)",
    arabic: "الإِيمَانُ بِاليَوْمِ الآخِرِ",
    description: "Meyakini akan datangnya kehancuran alam semesta dan hari kebangkitan untuk mempertanggungjawabkan seluruh perbuatan.",
    isFocus: false
  },
  {
    number: 6,
    title: "Iman kepada Qada dan Qadar",
    arabic: "الإِيمَانُ بِالقَدَرِ خَيْرِهِ وَشَرِّهِ",
    description: "Meyakini ketetapan dan kepastian takdir Allah SWT yang berlaku bagi seluruh makhluk hidup.",
    isFocus: false
  }
];

export const DALIL_DATA = {
  surah: "Q.S. al-Baqarah/2:285",
  title: "Dalil Naqli Wajibnya Beriman kepada Malaikat",
  arabicText: "ءَامَنَ ٱلرَّسُولُ بِمَآ أُنزِلَ إِلَيْهِ مِن رَّبِّهِۦ وَٱلْمُؤْمِنُونَ ۚ كُلٌّ ءَامَنَ بِٱللَّهِ وَمَلَٰٓئِكَتِهِۦ وَكُتُبِهِۦ وَرُسُلِهِۦ لَا نُفَرِّقُ بَيْنَ أَحَدٍۢ مِّن رُّسُلِهِۦ ۚ وَقَالُوا۟ سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ ٱلْمَصِيرُ",
  transliteration: "Āmanar-rasūlu bimā unzila ilaihi mir rabbihī wal-mu'minūn, kullun āmana billāhi wa malā'ikatihī wa kutubihī wa rusulih, lā nufarriqu baina aḥadim mir rusulih, wa qālū sami'nā wa aṭa'nā gufrānaka rabbanā wa ilaikal-maṣīr.",
  translation: "Rasul (Muhammad) beriman kepada apa yang diturunkan kepadanya dari Tuhannya, demikian pula orang-orang yang beriman. Semua beriman kepada Allah, malaikat-malaikat-Nya, kitab-kitab-Nya dan rasul-rasul-Nya. (Mereka berkata), 'Kami tidak membeda-bedakan seorang pun dari rasul-rasul-Nya.' Dan mereka berkata, 'Kami dengar dan kami taat.' (Mereka berdoa), 'Ampunilah kami wahai Tuhan kami, dan kepada-Mu tempat kembali.'",
  source: "Mushaf Standar Indonesia — Kementerian Agama RI",
  keyPhraseHighlight: {
    phraseArabic: "وَمَلَٰٓئِكَتِهِۦ",
    phraseMeaning: "dan malaikat-malaikat-Nya",
    context: "Ayat ini secara eksplisit menegaskan bahwa beriman kepada para malaikat Allah merupakan kewajiban yang sejajar dalam sendi keimanan bersama iman kepada Allah, kitab-kitab-Nya, dan para rasul-Nya."
  }
};

export const ANGEL_CHARACTERISTICS: AngelCharacteristic[] = [
  {
    id: 1,
    title: "Selalu Taat kepada Allah SWT",
    description: "Malaikat tidak pernah melanggar perintah Allah dan selalu melaksanakan apa yang diperintahkan.",
    detail: "Ketaatan malaikat bersifat mutlak dan berkesinambungan tanpa henti, sebagaimana ditegaskan dalam firman Allah SWT.",
    iconName: "shield-check"
  },
  {
    id: 2,
    title: "Tidak Pernah Mendurhakai Perintah-Nya",
    description: "Malaikat bersih dari sifat membangkang, sombong, atau lalai.",
    detail: "Malaikat tidak dibekali hawa nafsu yang dapat menjerumuskan mereka ke dalam godaan dosa.",
    iconName: "check-circle"
  },
  {
    id: 3,
    title: "Senantiasa Beribadah dan Bertasbih",
    description: "Malaikat beribadah siang dan malam tanpa rasa lelah, jenuh, atau bosan.",
    detail: "Ibadah malaikat mengalir secara alami dan penuh kerelaan sebagai bentuk pengabdian suci kepada Sang Pencipta.",
    iconName: "sun"
  },
  {
    id: 4,
    title: "Tidak Memiliki Kebutuhan Biologis",
    description: "Malaikat tidak makan, tidak minum, tidak tidur, dan tidak berjenis kelamin.",
    detail: "Malaikat terbebas dari kebutuhan fisik manusia, sehingga fokus sepenuhnya menjalankan amanah Allah SWT.",
    iconName: "feather"
  },
  {
    id: 5,
    title: "Makhluk Gaib Ciptaan dari Cahaya (Nur)",
    description: "Malaikat tidak dapat dilihat oleh mata manusia biasa dalam wujud aslinya.",
    detail: "Berdasarkan hadis riwayat Muslim, malaikat diciptakan dari cahaya (nur), jin dari api, dan manusia dari tanah.",
    iconName: "sparkles"
  },
  {
    id: 6,
    title: "Melaksanakan Tugas Sesuai Ketetapan Allah",
    description: "Setiap malaikat memiliki spesialisasi tugas dan peran yang telah digariskan oleh Allah SWT.",
    detail: "Malaikat bekerja secara cermat, teratur, dan tepat waktu tanpa penundaan sedikit pun.",
    iconName: "compass"
  }
];

export const ANGEL_PAIRS: AngelPair[] = [
  {
    id: 1,
    pairName: "Jibril — Mikail",
    pairConcept: "Wahyu & Kesejahteraan Hidup",
    screenTarget: 11,
    angel1: {
      name: "Jibril",
      arabicName: "جِبْرِيلُ",
      title: "Ruhul Qudus / Pemimpin Para Malaikat",
      duty: "Menyampaikan wahyu Allah SWT kepada para nabi dan rasul.",
      explanation: "Malaikat Jibril bertugas mengantarkan petunjuk ilahi dan kitab-kitab suci, termasuk Al-Qur'an kepada Nabi Muhammad SAW.",
      symbol: "scroll"
    },
    angel2: {
      name: "Mikail",
      arabicName: "مِيكَائِيلُ",
      title: "Pengatur Rezeki dan Keseimbangan Alam",
      duty: "Mengatur pembagian rezeki dan fenomena alam (hujan, angin, tanaman) atas perintah Allah SWT.",
      explanation: "Malaikat Mikail mengurus keberlangsungan hidup seluruh makhluk, dari tumbuhnya benih hingga turunnya tetesan air hujan.",
      symbol: "cloud-rain"
    }
  },
  {
    id: 2,
    pairName: "Israfil — Izrail",
    pairConcept: "Waktu Kehidupan & Hari Akhir",
    screenTarget: 12,
    angel1: {
      name: "Israfil",
      arabicName: "إِسْرَافِيلُ",
      title: "Peniup Sangkakala",
      duty: "Meniup sangkakala pada hari kiamat dan hari kebangkitan atas perintah Allah SWT.",
      explanation: "Tiupan pertama menandai kehancuran seluruh alam semesta, dan tiupan kedua membangunkan seluruh makhluk untuk dibangkitkan.",
      symbol: "bell"
    },
    angel2: {
      name: "Izrail",
      arabicName: "عِزْرَائِيلُ",
      title: "Malaikat Maut",
      duty: "Mencabut nyawa seluruh makhluk bernyawa sesuai ajal yang telah ditetapkan Allah SWT.",
      explanation: "Menjalankan tugas pemutus kenikmatan dunia dengan penuh ketetapan, mengingatkan bahwa setiap jiwa pasti akan merasakan kematian.",
      symbol: "hourglass"
    }
  },
  {
    id: 3,
    pairName: "Munkar — Nakir",
    pairConcept: "Pertanyaan Alam Kubur & Akuntabilitas",
    screenTarget: 13,
    angel1: {
      name: "Munkar",
      arabicName: "مُنْكَرٌ",
      title: "Penanya di Alam Barzakh",
      duty: "Menanyai manusia di alam kubur mengenai ketauhidan dan keimanannya semasa hidup.",
      explanation: "Menguji keimanan hamba dengan pertanyaan mendasar: Siapa Tuhanmu? Siapa Nabimu? Apa Agamamu?",
      symbol: "help-circle"
    },
    angel2: {
      name: "Nakir",
      arabicName: "نَكِيرٌ",
      title: "Pemeriksa Amal di Alam Kubur",
      duty: "Bersama malaikat Munkar menanyai dan memeriksa kesaksian setiap insan di alam kubur.",
      explanation: "Memastikan bahwa setiap manusia memasuki fase barzakh dengan pertanggungjawaban atas keyakinan dan perbuatannya di dunia.",
      symbol: "clipboard-check"
    }
  },
  {
    id: 4,
    pairName: "Raqib — Atid",
    pairConcept: "Pencatat Amal Kebaikan & Keburukan",
    screenTarget: 14,
    angel1: {
      name: "Raqib",
      arabicName: "رَقِيبٌ",
      title: "Pencatat Amal Kebaikan",
      duty: "Mencatat setiap amal kebaikan, niat tulus, dan perbuatan terpuji manusia sekecil apa pun.",
      explanation: "Senantiasa mendampingi di sisi kanan untuk mengabadikan setiap kebajikan dan ketaatan yang dilakukan hamba.",
      symbol: "book-check"
    },
    angel2: {
      name: "Atid",
      arabicName: "عَتِيدٌ",
      title: "Pencatat Amal Keburukan",
      duty: "Mencatat setiap perbuatan buruk, kesalahan, dan kedurhakaan manusia.",
      explanation: "Senantiasa bersiap di sisi kiri mencatat dosa dan keburukan tanpa pernah mengurangi atau melebih-lebihkannya.",
      symbol: "book-x"
    }
  },
  {
    id: 5,
    pairName: "Malik — Ridwan",
    pairConcept: "Penjaga Pintu Pembalasan Akhirat",
    screenTarget: 15,
    angel1: {
      name: "Malik",
      arabicName: "مَالِكٌ",
      title: "Penjaga Pintu Neraka",
      duty: "Menjaga pintu Neraka dengan ketegasan dan kepatuhan penuh kepada ketetapan Allah SWT.",
      explanation: "Malaikat yang memimpin para malaikat Zabaniyah, tidak pernah tersenyum dan melaksanakan perintah Allah dengan adil dan tegas.",
      symbol: "shield-alert"
    },
    angel2: {
      name: "Ridwan",
      arabicName: "رِضْوَانُ",
      title: "Penjaga Pintu Surga",
      duty: "Menjaga pintu Surga dan menyambut para hamba Allah yang beriman dan beramal saleh dengan keramahan.",
      explanation: "Menyambut penghuni surga dengan ucapan salam sejahtera, keselamatan, dan kabar gembira atas keridaan Allah SWT.",
      symbol: "door-open"
    }
  }
];

export const WISDOM_POINTS = [
  {
    id: 1,
    title: "TAAT",
    subtitle: "Meningkatkan Ketaatan",
    description: "Meningkatkan ketaatan beribadah kepada Allah SWT setelah meneladani kepatuhan mutlak para malaikat.",
    icon: "award"
  },
  {
    id: 2,
    title: "MAWAS DIRI",
    subtitle: "Kewaspadaan Sikap",
    description: "Menumbuhkan kehati-hatian dan kesadaran diri dalam setiap ucapan serta tindakan sebelum melakukannya.",
    icon: "eye"
  },
  {
    id: 3,
    title: "AMAL BAIK",
    subtitle: "Semangat Berkebajikan",
    description: "Mendorong motivasi dan optimisme untuk senantiasa memperbanyak amal saleh karena selalu dicatat dengan cermat.",
    icon: "sparkles"
  },
  {
    id: 4,
    title: "MENJAUHI BURUK",
    subtitle: "Mencegah Maksiat",
    description: "Mencegah dan menjauhkan diri dari perbuatan maksiat, dosa, serta tindakan yang merugikan orang lain.",
    icon: "shield"
  },
  {
    id: 5,
    title: "TANGGUNG JAWAB",
    subtitle: "Akuntabilitas Moral",
    description: "Mengembangkan rasa tanggung jawab atas setiap jejak perbuatan yang kelak dipertanggungjawabkan di hadapan Allah SWT.",
    icon: "scale"
  }
];

export const EVERYDAY_BEHAVIORS: EverydayBehavior[] = [
  {
    id: 1,
    title: "Jujur Saat Ulangan & Ujian",
    category: "Kejujuran",
    scenario: "Saat guru tidak memperhatikan atau berada di luar ruang kelas, kita tetap memilih tidak menyontek atau membuka catatan.",
    angelConnection: "Meyakini malaikat Raqib dan Atid senantiasa mencatat perbuatan kita tanpa terlewat, dan Allah SWT Maha Melihat.",
    reflection: "Kejujuran sejati tidak bergantung pada ada atau tidaknya pengawasan guru di kelas."
  },
  {
    id: 2,
    title: "Menjaga Lisan & Kesantunan",
    category: "Lisan",
    scenario: "Menahan diri dari ucapan kasar, menyebarkan gosip (ghibah), mengejek teman, atau menulis ujaran kebencian.",
    angelConnection: "Setiap kata yang terucap dicatat oleh malaikat Raqib jika baik, atau malaikat Atid jika menyakiti orang lain.",
    reflection: "Lisan yang terjaga mencerminkan hati yang senantiasa mawas diri."
  },
  {
    id: 3,
    title: "Tidak Mengambil Barang Orang Lain",
    category: "Amanah",
    scenario: "Melihat uang atau ponsel tertinggal di atas meja kelas, lalu mengembalikannya kepada pemiliknya atau menitipkannya ke guru piket.",
    angelConnection: "Menyadari bahwa meskipun tidak ada orang yang melihat, hak milik orang lain haram diambil dan ada malaikat yang mengawasi.",
    reflection: "Rasa mawas diri mencegah kita dari sifat serakah dan mengambil yang bukan hak kita."
  },
  {
    id: 4,
    title: "Berpikir Cermat Sebelum Bertindak",
    category: "Mawas Diri",
    scenario: "Sebelum memutuskan ikut ajakan teman yang meragukan (misalnya bolos atau nongkrong tidak bermanfaat), kita menimbang baik dan buruknya.",
    angelConnection: "Meneladani sifat malaikat yang teratur dan penuh kepatuhan kepada aturan Allah.",
    reflection: "Berpikir sebelum bertindak adalah perwujudan nyata dari sikap mawas diri."
  },
  {
    id: 5,
    title: "Bijak Bermedia Sosial",
    category: "Tanggung Jawab",
    scenario: "Memeriksa kebenaran berita sebelum membagikan (tabayyun), serta menghindari komentar yang menyakiti hati sesama di medsos.",
    angelConnection: "Jejak digital di dunia maya sekaligus menjadi jejak catatan amal yang diperiksa di akhirat.",
    reflection: "Jemari kita di media sosial juga berada di bawah pencatatan malaikat pencatat amal."
  },
  {
    id: 6,
    title: "Mempertimbangkan Akibat Keputusan",
    category: "Tanggung Jawab",
    scenario: "Memikirkan dampak jangka panjang terhadap diri, orang tua, dan masa depan saat dihadapkan pada pilihan pertemanan.",
    angelConnection: "Mengingat malaikat Munkar dan Nakir serta hari hisab yang pasti akan kita hadapi.",
    reflection: "Kesadaran akan akhirat mendidik kita menjadi pribadi yang matang dan bertanggung jawab."
  },
  {
    id: 7,
    title: "Mengakui Kesalahan & Memperbaiki Diri",
    category: "Mawas Diri",
    scenario: "Ketika secara tidak sengaja berbuat salah atau mengecewakan seseorang, segera meminta maaf dan berjanji tidak mengulanginya.",
    angelConnection: "Bentuk introspeksi diri (muhasabah) agar catatan amal kita segera diperbaiki dengan istighfar dan amal saleh.",
    reflection: "Manusia memang tempat salah dan lupa, namun insan yang mulia adalah yang segera berintrospeksi dan bertaubat."
  }
];

export const LKPD_QUESTIONS: LkpdQuestion[] = [
  {
    id: 1,
    question: "Apa arti beriman kepada malaikat Allah SWT secara terminologis?",
    options: [
      "Meyakini malaikat dapat mengabulkan doa dan permintaan manusia",
      "Meyakini dengan sepenuh hati bahwa malaikat adalah makhluk ciptaan Allah SWT yang selalu taat dan bertugas menjalankan perintah-Nya",
      "Menganggap malaikat memiliki kekuatan yang mandiri sejajar dengan kekuasaan Allah SWT",
      "Meyakini malaikat berwujud seperti manusia dan memerlukan makan serta minum"
    ],
    correctIndex: 1,
    explanation: "Iman kepada malaikat berarti meyakini dengan sepenuh hati bahwa mereka adalah makhluk gaib ciptaan Allah SWT dari cahaya (nur) yang senantiasa patuh menjalankan perintah-Nya.",
    objectiveReference: "Tujuan Pembelajaran 1: Pengertian Iman kepada Malaikat"
  },
  {
    id: 2,
    question: "Dalam Q.S. al-Baqarah/2:285, potongan lafaz manakah yang secara khusus menunjukkan kewajiban beriman kepada para malaikat?",
    options: [
      "ءَامَنَ ٱلرَّسُولُ",
      "وَكُتُبِهِۦ وَرُسُلِهِۦ",
      "وَمَلَٰٓئِكَتِهِۦ",
      "سَمِعْنَا وَأَطَعْنَا"
    ],
    correctIndex: 2,
    explanation: "Lafaz 'وَمَلَٰٓئِكَتِهِۦ' (wa malā'ikatihī) bermakna 'dan malaikat-malaikat-Nya', menjadi dalil naqli tegas atas rukun iman kedua ini.",
    objectiveReference: "Tujuan Pembelajaran 2: Dalil Iman kepada Malaikat"
  },
  {
    id: 3,
    question: "Manakah pernyataan di bawah ini yang PALING TEPAT membedakan sifat malaikat dari sifat manusia?",
    options: [
      "Malaikat memiliki hawa nafsu sedangkan manusia tidak memilikinya",
      "Malaikat diciptakan dari tanah sedangkan manusia diciptakan dari cahaya",
      "Malaikat selalu taat tanpa berhawa nafsu, sedangkan manusia dibekali nafsu, akal, dan pilihan bebas",
      "Malaikat membutuhkan makan dan istirahat saat menjalankan tugasnya"
    ],
    correctIndex: 2,
    explanation: "Malaikat diciptakan dari cahaya dan senantiasa taat tanpa hawa nafsu, sedangkan manusia dibekali akal, nafsu, dan kehendak bebas sehingga bisa memilih taat atau durhaka.",
    objectiveReference: "Tujuan Pembelajaran 3: Sifat-sifat Malaikat"
  },
  {
    id: 4,
    question: "Pasangan malaikat manakah yang bertugas mencatat amal kebaikan dan amal keburukan manusia semasa hidup di dunia?",
    options: [
      "Jibril dan Mikail",
      "Israfil dan Izrail",
      "Munkar dan Nakir",
      "Raqib dan Atid"
    ],
    correctIndex: 3,
    explanation: "Malaikat Raqib bertugas mencatat amal kebaikan, sedangkan malaikat Atid bertugas mencatat amal keburukan.",
    objectiveReference: "Tujuan Pembelajaran 4: Tugas-tugas Malaikat"
  },
  {
    id: 5,
    question: "Sikap 'mawas diri' dan 'introspeksi diri' dalam kehidupan sehari-hari berperan sebagai...",
    options: [
      "Tujuan pembelajaran baru yang terpisah dari materi pokok",
      "Penerapan dan penguatan nyata dari hikmah beriman kepada malaikat (Tujuan Pembelajaran 5)",
      "Sekadar wacana teoritis yang tidak ada hubungannya dengan keimanan",
      "Pengganti kewajiban ibadah shalat dan puasa"
    ],
    correctIndex: 1,
    explanation: "Mawas diri (berpikir sebelum bertindak) dan introspeksi (mengevaluasi diri) merupakan wujud konkret penguatan Tujuan Pembelajaran 5 (hikmah beriman kepada malaikat).",
    objectiveReference: "Tujuan Pembelajaran 5 & Penguatan Mawas Diri"
  }
];
