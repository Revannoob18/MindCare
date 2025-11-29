// ============================================
// TES MENTAL HEALTH FUNCTIONALITY
// ============================================

// Test Questions Database
const testsDatabase = {
    phq9: {
        title: 'Tes Depresi (PHQ-9)',
        questions: [
            {
                text: 'Sedikit minat atau kesenangan dalam melakukan sesuatu',
                options: [
                    { text: 'Tidak sama sekali', value: 0 },
                    { text: 'Beberapa hari', value: 1 },
                    { text: 'Lebih dari setengah hari', value: 2 },
                    { text: 'Hampir setiap hari', value: 3 }
                ]
            },
            {
                text: 'Merasa sedih, tertekan, atau putus asa',
                options: [
                    { text: 'Tidak sama sekali', value: 0 },
                    { text: 'Beberapa hari', value: 1 },
                    { text: 'Lebih dari setengah hari', value: 2 },
                    { text: 'Hampir setiap hari', value: 3 }
                ]
            },
            {
                text: 'Kesulitan tidur atau tidur berlebihan',
                options: [
                    { text: 'Tidak sama sekali', value: 0 },
                    { text: 'Beberapa hari', value: 1 },
                    { text: 'Lebih dari setengah hari', value: 2 },
                    { text: 'Hampir setiap hari', value: 3 }
                ]
            },
            {
                text: 'Merasa lelah atau memiliki sedikit energi',
                options: [
                    { text: 'Tidak sama sekali', value: 0 },
                    { text: 'Beberapa hari', value: 1 },
                    { text: 'Lebih dari setengah hari', value: 2 },
                    { text: 'Hampir setiap hari', value: 3 }
                ]
            },
            {
                text: 'Nafsu makan buruk atau makan berlebihan',
                options: [
                    { text: 'Tidak sama sekali', value: 0 },
                    { text: 'Beberapa hari', value: 1 },
                    { text: 'Lebih dari setengah hari', value: 2 },
                    { text: 'Hampir setiap hari', value: 3 }
                ]
            },
            {
                text: 'Merasa buruk tentang diri sendiri atau merasa gagal',
                options: [
                    { text: 'Tidak sama sekali', value: 0 },
                    { text: 'Beberapa hari', value: 1 },
                    { text: 'Lebih dari setengah hari', value: 2 },
                    { text: 'Hampir setiap hari', value: 3 }
                ]
            },
            {
                text: 'Kesulitan berkonsentrasi pada hal-hal seperti membaca atau menonton TV',
                options: [
                    { text: 'Tidak sama sekali', value: 0 },
                    { text: 'Beberapa hari', value: 1 },
                    { text: 'Lebih dari setengah hari', value: 2 },
                    { text: 'Hampir setiap hari', value: 3 }
                ]
            },
            {
                text: 'Bergerak atau berbicara sangat lambat atau sangat gelisah',
                options: [
                    { text: 'Tidak sama sekali', value: 0 },
                    { text: 'Beberapa hari', value: 1 },
                    { text: 'Lebih dari setengah hari', value: 2 },
                    { text: 'Hampir setiap hari', value: 3 }
                ]
            },
            {
                text: 'Pikiran bahwa Anda lebih baik mati atau menyakiti diri sendiri',
                options: [
                    { text: 'Tidak sama sekali', value: 0 },
                    { text: 'Beberapa hari', value: 1 },
                    { text: 'Lebih dari setengah hari', value: 2 },
                    { text: 'Hampir setiap hari', value: 3 }
                ]
            }
        ],
        scoring: {
            ranges: [
                { min: 0, max: 4, category: 'Minimal', color: '#4CAF50', description: 'Anda tidak menunjukkan gejala depresi yang signifikan. Kesehatan mental Anda dalam kondisi baik.', recommendations: ['Pertahankan pola hidup sehat', 'Lanjutkan aktivitas yang Anda sukai', 'Jaga hubungan sosial yang positif', 'Lakukan olahraga teratur'] },
                { min: 5, max: 9, category: 'Ringan', color: '#FFC107', description: 'Anda mengalami gejala depresi ringan. Ini masih dapat diatasi dengan perubahan gaya hidup.', recommendations: ['Tingkatkan aktivitas fisik', 'Atur pola tidur yang teratur', 'Luangkan waktu untuk hobi', 'Konsultasi dengan psikolog jika berlanjut'] },
                { min: 10, max: 14, category: 'Sedang', color: '#FF9800', description: 'Anda mengalami gejala depresi tingkat sedang. Disarankan untuk mencari bantuan profesional.', recommendations: ['Segera konsultasi dengan psikolog', 'Pertimbangkan terapi kognitif', 'Hindari isolasi sosial', 'Ceritakan perasaan Anda pada orang terdekat'] },
                { min: 15, max: 19, category: 'Cukup Berat', color: '#FF5722', description: 'Anda mengalami gejala depresi yang cukup berat. Bantuan profesional sangat diperlukan.', recommendations: ['Segera hubungi psikolog/psikiater', 'Pertimbangkan terapi intensif', 'Jangan menghadapi sendirian', 'Ikuti program terapi terstruktur'] },
                { min: 20, max: 27, category: 'Berat', color: '#F44336', description: 'Anda mengalami gejala depresi berat. Segera cari bantuan profesional.', recommendations: ['Hubungi psikiater SEGERA', 'Mungkin memerlukan kombinasi terapi dan medikasi', 'Dukungan keluarga sangat penting', 'Hindari kesendirian, selalu ada yang peduli'] }
            ]
        }
    },
    gad7: {
        title: 'Tes Kecemasan (GAD-7)',
        questions: [
            {
                text: 'Merasa gugup, cemas, atau gelisah',
                options: [
                    { text: 'Tidak sama sekali', value: 0 },
                    { text: 'Beberapa hari', value: 1 },
                    { text: 'Lebih dari setengah hari', value: 2 },
                    { text: 'Hampir setiap hari', value: 3 }
                ]
            },
            {
                text: 'Tidak mampu menghentikan atau mengontrol kekhawatiran',
                options: [
                    { text: 'Tidak sama sekali', value: 0 },
                    { text: 'Beberapa hari', value: 1 },
                    { text: 'Lebih dari setengah hari', value: 2 },
                    { text: 'Hampir setiap hari', value: 3 }
                ]
            },
            {
                text: 'Terlalu banyak mengkhawatirkan berbagai hal',
                options: [
                    { text: 'Tidak sama sekali', value: 0 },
                    { text: 'Beberapa hari', value: 1 },
                    { text: 'Lebih dari setengah hari', value: 2 },
                    { text: 'Hampir setiap hari', value: 3 }
                ]
            },
            {
                text: 'Kesulitan untuk rileks',
                options: [
                    { text: 'Tidak sama sekali', value: 0 },
                    { text: 'Beberapa hari', value: 1 },
                    { text: 'Lebih dari setengah hari', value: 2 },
                    { text: 'Hampir setiap hari', value: 3 }
                ]
            },
            {
                text: 'Sangat gelisah sehingga sulit untuk duduk diam',
                options: [
                    { text: 'Tidak sama sekali', value: 0 },
                    { text: 'Beberapa hari', value: 1 },
                    { text: 'Lebih dari setengah hari', value: 2 },
                    { text: 'Hampir setiap hari', value: 3 }
                ]
            },
            {
                text: 'Mudah merasa kesal atau mudah marah',
                options: [
                    { text: 'Tidak sama sekali', value: 0 },
                    { text: 'Beberapa hari', value: 1 },
                    { text: 'Lebih dari setengah hari', value: 2 },
                    { text: 'Hampir setiap hari', value: 3 }
                ]
            },
            {
                text: 'Merasa takut seolah-olah sesuatu yang buruk akan terjadi',
                options: [
                    { text: 'Tidak sama sekali', value: 0 },
                    { text: 'Beberapa hari', value: 1 },
                    { text: 'Lebih dari setengah hari', value: 2 },
                    { text: 'Hampir setiap hari', value: 3 }
                ]
            }
        ],
        scoring: {
            ranges: [
                { min: 0, max: 4, category: 'Minimal', color: '#4CAF50', description: 'Tingkat kecemasan Anda minimal. Anda mampu mengelola stres dengan baik.', recommendations: ['Pertahankan teknik relaksasi', 'Lanjutkan gaya hidup sehat', 'Praktikkan mindfulness rutin', 'Jaga keseimbangan work-life'] },
                { min: 5, max: 9, category: 'Ringan', color: '#FFC107', description: 'Anda mengalami kecemasan ringan. Teknik manajemen stres dapat membantu.', recommendations: ['Pelajari teknik pernapasan', 'Coba meditasi 10 menit sehari', 'Kurangi konsumsi kafein', 'Olahraga teratur'] },
                { min: 10, max: 14, category: 'Sedang', color: '#FF9800', description: 'Kecemasan Anda berada di tingkat sedang. Pertimbangkan konseling.', recommendations: ['Konsultasi dengan psikolog', 'Pelajari teknik CBT', 'Hindari pemicu kecemasan', 'Join support group'] },
                { min: 15, max: 21, category: 'Berat', color: '#F44336', description: 'Anda mengalami kecemasan yang signifikan. Bantuan profesional diperlukan.', recommendations: ['Segera konsultasi psikolog/psikiater', 'Terapi kecemasan terstruktur', 'Mungkin perlu medikasi', 'Dukungan keluarga penting'] }
            ]
        }
    },
    'self-esteem': {
        title: 'Tes Self-Esteem',
        questions: [
            {
                text: 'Saya merasa bahwa saya adalah orang yang berharga',
                options: [
                    { text: 'Sangat Tidak Setuju', value: 0 },
                    { text: 'Tidak Setuju', value: 1 },
                    { text: 'Setuju', value: 2 },
                    { text: 'Sangat Setuju', value: 3 }
                ]
            },
            {
                text: 'Saya merasa bahwa saya memiliki sejumlah kualitas yang baik',
                options: [
                    { text: 'Sangat Tidak Setuju', value: 0 },
                    { text: 'Tidak Setuju', value: 1 },
                    { text: 'Setuju', value: 2 },
                    { text: 'Sangat Setuju', value: 3 }
                ]
            },
            {
                text: 'Saya cenderung merasa bahwa saya adalah orang yang gagal',
                options: [
                    { text: 'Sangat Setuju', value: 0 },
                    { text: 'Setuju', value: 1 },
                    { text: 'Tidak Setuju', value: 2 },
                    { text: 'Sangat Tidak Setuju', value: 3 }
                ]
            },
            {
                text: 'Saya dapat melakukan sesuatu sebaik kebanyakan orang lain',
                options: [
                    { text: 'Sangat Tidak Setuju', value: 0 },
                    { text: 'Tidak Setuju', value: 1 },
                    { text: 'Setuju', value: 2 },
                    { text: 'Sangat Setuju', value: 3 }
                ]
            },
            {
                text: 'Saya merasa tidak memiliki banyak hal untuk dibanggakan',
                options: [
                    { text: 'Sangat Setuju', value: 0 },
                    { text: 'Setuju', value: 1 },
                    { text: 'Tidak Setuju', value: 2 },
                    { text: 'Sangat Tidak Setuju', value: 3 }
                ]
            },
            {
                text: 'Saya memiliki sikap positif terhadap diri saya sendiri',
                options: [
                    { text: 'Sangat Tidak Setuju', value: 0 },
                    { text: 'Tidak Setuju', value: 1 },
                    { text: 'Setuju', value: 2 },
                    { text: 'Sangat Setuju', value: 3 }
                ]
            },
            {
                text: 'Secara keseluruhan, saya puas dengan diri saya sendiri',
                options: [
                    { text: 'Sangat Tidak Setuju', value: 0 },
                    { text: 'Tidak Setuju', value: 1 },
                    { text: 'Setuju', value: 2 },
                    { text: 'Sangat Setuju', value: 3 }
                ]
            },
            {
                text: 'Saya berharap dapat memiliki lebih banyak rasa hormat untuk diri saya sendiri',
                options: [
                    { text: 'Sangat Setuju', value: 0 },
                    { text: 'Setuju', value: 1 },
                    { text: 'Tidak Setuju', value: 2 },
                    { text: 'Sangat Tidak Setuju', value: 3 }
                ]
            },
            {
                text: 'Saya merasa tidak berguna',
                options: [
                    { text: 'Sangat Setuju', value: 0 },
                    { text: 'Setuju', value: 1 },
                    { text: 'Tidak Setuju', value: 2 },
                    { text: 'Sangat Tidak Setuju', value: 3 }
                ]
            },
            {
                text: 'Kadang-kadang saya berpikir bahwa saya tidak baik sama sekali',
                options: [
                    { text: 'Sangat Setuju', value: 0 },
                    { text: 'Setuju', value: 1 },
                    { text: 'Tidak Setuju', value: 2 },
                    { text: 'Sangat Tidak Setuju', value: 3 }
                ]
            }
        ],
        scoring: {
            ranges: [
                { min: 0, max: 10, category: 'Rendah', color: '#F44336', description: 'Self-esteem Anda rendah. Anda perlu membangun kepercayaan diri.', recommendations: ['Fokus pada kekuatan diri', 'Hindari self-criticism berlebihan', 'Konsultasi dengan psikolog', 'Bergabung dengan support group'] },
                { min: 11, max: 20, category: 'Sedang', color: '#FF9800', description: 'Self-esteem Anda berada di tingkat menengah. Masih ada ruang untuk berkembang.', recommendations: ['Praktikkan positive self-talk', 'Tetapkan dan capai tujuan kecil', 'Terima kelebihan dan kekurangan', 'Kembangkan skill baru'] },
                { min: 21, max: 30, category: 'Tinggi', color: '#4CAF50', description: 'Anda memiliki self-esteem yang sehat dan positif!', recommendations: ['Pertahankan sikap positif', 'Bantu orang lain membangun kepercayaan diri', 'Terus tantang diri sendiri', 'Jadi role model bagi orang lain'] }
            ]
        }
    },
    checkin: {
        title: 'Check-in Kesehatan Mental Harian',
        questions: [
            {
                text: 'Bagaimana perasaan Anda hari ini?',
                options: [
                    { text: 'Sangat Buruk', value: 0 },
                    { text: 'Buruk', value: 1 },
                    { text: 'Biasa Saja', value: 2 },
                    { text: 'Baik', value: 3 },
                    { text: 'Sangat Baik', value: 4 }
                ]
            },
            {
                text: 'Seberapa baik Anda tidur tadi malam?',
                options: [
                    { text: 'Sangat Buruk', value: 0 },
                    { text: 'Buruk', value: 1 },
                    { text: 'Cukup', value: 2 },
                    { text: 'Baik', value: 3 },
                    { text: 'Sangat Baik', value: 4 }
                ]
            },
            {
                text: 'Tingkat energi Anda hari ini?',
                options: [
                    { text: 'Sangat Rendah', value: 0 },
                    { text: 'Rendah', value: 1 },
                    { text: 'Sedang', value: 2 },
                    { text: 'Tinggi', value: 3 },
                    { text: 'Sangat Tinggi', value: 4 }
                ]
            },
            {
                text: 'Seberapa stres Anda hari ini?',
                options: [
                    { text: 'Sangat Stres', value: 0 },
                    { text: 'Stres', value: 1 },
                    { text: 'Sedikit Stres', value: 2 },
                    { text: 'Tidak Stres', value: 3 },
                    { text: 'Sangat Rileks', value: 4 }
                ]
            },
            {
                text: 'Seberapa produktif Anda hari ini?',
                options: [
                    { text: 'Tidak Produktif', value: 0 },
                    { text: 'Kurang Produktif', value: 1 },
                    { text: 'Cukup Produktif', value: 2 },
                    { text: 'Produktif', value: 3 },
                    { text: 'Sangat Produktif', value: 4 }
                ]
            }
        ],
        scoring: {
            ranges: [
                { min: 0, max: 5, category: 'Buruk', color: '#F44336', description: 'Hari ini sepertinya cukup berat untuk Anda.', recommendations: ['Istirahatlah yang cukup', 'Lakukan aktivitas menyenangkan', 'Hubungi teman atau keluarga', 'Besok adalah hari baru'] },
                { min: 6, max: 12, category: 'Cukup', color: '#FF9800', description: 'Hari Anda biasa saja, ada ruang untuk perbaikan.', recommendations: ['Lakukan self-care kecil', 'Olahraga ringan', 'Makan makanan bergizi', 'Tidur yang cukup'] },
                { min: 13, max: 16, category: 'Baik', color: '#FFC107', description: 'Hari yang cukup baik! Pertahankan momentum.', recommendations: ['Syukuri hal-hal kecil', 'Bagikan kebahagiaan', 'Jaga konsistensi', 'Catat momen positif'] },
                { min: 17, max: 20, category: 'Sangat Baik', color: '#4CAF50', description: 'Hari yang luar biasa! Anda dalam kondisi optimal.', recommendations: ['Nikmati momen ini', 'Rayakan pencapaian', 'Bantu orang lain', 'Pertahankan pola positif'] }
            ]
        }
    },
    dass21: {
        title: 'DASS-30 (Depresi, Kecemasan, Stres)',
        questions: [
            // Depression subscale (10 questions)
            { text: 'Saya merasa sulit untuk bekerja atau memulai aktivitas', options: [
                { text: 'Tidak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir setiap saat', value: 3 }
            ]},
            { text: 'Saya merasa tidak ada hal yang dapat saya harapkan', options: [
                { text: 'Tidak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir setiap saat', value: 3 }
            ]},
            { text: 'Saya merasa tidak ada yang menarik dalam hidup', options: [
                { text: 'Tidak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir setiap saat', value: 3 }
            ]},
            { text: 'Saya merasa sedih dan tertekan', options: [
                { text: 'Tidak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir setiap saat', value: 3 }
            ]},
            { text: 'Saya tidak bisa merasakan perasaan positif', options: [
                { text: 'Tidak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir setiap saat', value: 3 }
            ]},
            { text: 'Saya merasa hidup tidak berarti', options: [
                { text: 'Tidak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir setiap saat', value: 3 }
            ]},
            { text: 'Saya merasa tidak ada semangat untuk melakukan apa pun', options: [
                { text: 'Tidak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir setiap saat', value: 3 }
            ]},
            { text: 'Saya tidak dapat merasakan antusiasme terhadap hal apa pun', options: [
                { text: 'Tidak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir setiap saat', value: 3 }
            ]},
            { text: 'Saya merasa tidak berharga', options: [
                { text: 'Tidak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir setiap saat', value: 3 }
            ]},
            { text: 'Saya tidak dapat menikmati hal-hal yang biasanya menyenangkan', options: [
                { text: 'Tidak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir setiap saat', value: 3 }
            ]},
            
            // Anxiety subscale (10 questions)
            { text: 'Saya merasa gemetar (misalnya tangan gemetar)', options: [
                { text: 'Tidak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir setiap saat', value: 3 }
            ]},
            { text: 'Saya khawatir tentang situasi di mana saya mungkin panik', options: [
                { text: 'Tidak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir setiap saat', value: 3 }
            ]},
            { text: 'Saya merasa akan terjadi sesuatu yang menakutkan', options: [
                { text: 'Tidak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir setiap saat', value: 3 }
            ]},
            { text: 'Saya merasa mulut saya kering', options: [
                { text: 'Tidak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir setiap saat', value: 3 }
            ]},
            { text: 'Saya merasa kesulitan bernapas (napas cepat, sesak tanpa aktivitas fisik)', options: [
                { text: 'Tidak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir setiap saat', value: 3 }
            ]},
            { text: 'Saya merasa jantung saya berdebar kencang tanpa olahraga', options: [
                { text: 'Tidak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir setiap saat', value: 3 }
            ]},
            { text: 'Saya merasa takut tanpa alasan yang jelas', options: [
                { text: 'Tidak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir setiap saat', value: 3 }
            ]},
            { text: 'Saya merasa akan pingsan atau kehilangan kesadaran', options: [
                { text: 'Tidak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir setiap saat', value: 3 }
            ]},
            { text: 'Saya sadar dengan debar jantung walaupun tidak melakukan aktivitas fisik', options: [
                { text: 'Tidak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir setiap saat', value: 3 }
            ]},
            { text: 'Saya merasa cemas tanpa sebab yang jelas', options: [
                { text: 'Tidak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir setiap saat', value: 3 }
            ]},
            
            // Stress subscale (10 questions)
            { text: 'Saya merasa sulit untuk rileks', options: [
                { text: 'Tidak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir setiap saat', value: 3 }
            ]},
            { text: 'Saya merasa mudah tersinggung', options: [
                { text: 'Tidak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir setiap saat', value: 3 }
            ]},
            { text: 'Saya merasa mudah marah atau kesal', options: [
                { text: 'Tidak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir setiap saat', value: 3 }
            ]},
            { text: 'Saya merasa gelisah dan tidak tenang', options: [
                { text: 'Tidak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir setiap saat', value: 3 }
            ]},
            { text: 'Saya merasa sulit untuk sabar dalam menghadapi gangguan', options: [
                { text: 'Tidak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir setiap saat', value: 3 }
            ]},
            { text: 'Saya merasa tegang dan tidak bisa tenang', options: [
                { text: 'Tidak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir setiap saat', value: 3 }
            ]},
            { text: 'Saya tidak toleran terhadap hal yang menghambat saya', options: [
                { text: 'Tidak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir setiap saat', value: 3 }
            ]},
            { text: 'Saya merasa hampir panik', options: [
                { text: 'Tidak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir setiap saat', value: 3 }
            ]},
            { text: 'Saya sulit tenang setelah sesuatu membuat saya kesal', options: [
                { text: 'Tidak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir setiap saat', value: 3 }
            ]},
            { text: 'Saya menggunakan banyak energi untuk cemas', options: [
                { text: 'Tidak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir setiap saat', value: 3 }
            ]}
        ],
        scoring: {
            ranges: [
                { min: 0, max: 9, category: 'Normal', color: '#4CAF50', description: 'Tingkat depresi, kecemasan, dan stres Anda dalam batas normal. Kesehatan mental Anda baik.', recommendations: ['Pertahankan pola hidup sehat', 'Lakukan aktivitas yang menyenangkan', 'Jaga hubungan sosial positif', 'Rutin berolahraga'] },
                { min: 10, max: 20, category: 'Ringan', color: '#8BC34A', description: 'Anda mengalami tingkat ringan dari depresi, kecemasan, atau stres. Masih dapat dikelola.', recommendations: ['Praktikkan teknik relaksasi', 'Atur pola tidur teratur', 'Kurangi beban kerja jika memungkinkan', 'Luangkan waktu untuk self-care'] },
                { min: 21, max: 33, category: 'Sedang', color: '#FFC107', description: 'Anda mengalami tingkat sedang. Disarankan mencari bantuan atau dukungan.', recommendations: ['Konsultasi dengan psikolog', 'Ikuti terapi atau konseling', 'Praktikkan mindfulness', 'Batasi stressor'] },
                { min: 34, max: 42, category: 'Berat', color: '#FF9800', description: 'Tingkat yang cukup tinggi. Bantuan profesional sangat disarankan.', recommendations: ['Segera konsultasi psikolog/psikiater', 'Pertimbangkan terapi intensif', 'Hindari isolasi', 'Dukungan keluarga penting'] },
                { min: 43, max: 63, category: 'Sangat Berat', color: '#F44336', description: 'Tingkat sangat tinggi. Segera cari bantuan profesional.', recommendations: ['Hubungi profesional SEGERA', 'Mungkin perlu kombinasi terapi-medikasi', 'Jangan hadapi sendiri', 'Aktivasi support system'] }
            ]
        }
    },

    burnout: {
        title: 'Tes Burnout',
        questions: [
            {
                text: 'Saya merasa lelah secara emosional oleh pekerjaan saya',
                options: [
                    { text: 'Tidak Pernah', value: 0 },
                    { text: 'Beberapa kali setahun', value: 1 },
                    { text: 'Sebulan sekali', value: 2 },
                    { text: 'Beberapa kali sebulan', value: 3 },
                    { text: 'Setiap minggu', value: 4 },
                    { text: 'Beberapa kali seminggu', value: 5 },
                    { text: 'Setiap hari', value: 6 }
                ]
            },
            {
                text: 'Saya merasa habis di akhir hari kerja',
                options: [
                    { text: 'Tidak Pernah', value: 0 },
                    { text: 'Beberapa kali setahun', value: 1 },
                    { text: 'Sebulan sekali', value: 2 },
                    { text: 'Beberapa kali sebulan', value: 3 },
                    { text: 'Setiap minggu', value: 4 },
                    { text: 'Beberapa kali seminggu', value: 5 },
                    { text: 'Setiap hari', value: 6 }
                ]
            },
            {
                text: 'Saya merasa lelah ketika bangun tidur menghadapi hari kerja lagi',
                options: [
                    { text: 'Tidak Pernah', value: 0 },
                    { text: 'Beberapa kali setahun', value: 1 },
                    { text: 'Sebulan sekali', value: 2 },
                    { text: 'Beberapa kali sebulan', value: 3 },
                    { text: 'Setiap minggu', value: 4 },
                    { text: 'Beberapa kali seminggu', value: 5 },
                    { text: 'Setiap hari', value: 6 }
                ]
            },
            {
                text: 'Bekerja dengan orang sepanjang hari adalah stres bagi saya',
                options: [
                    { text: 'Tidak Pernah', value: 0 },
                    { text: 'Beberapa kali setahun', value: 1 },
                    { text: 'Sebulan sekali', value: 2 },
                    { text: 'Beberapa kali sebulan', value: 3 },
                    { text: 'Setiap minggu', value: 4 },
                    { text: 'Beberapa kali seminggu', value: 5 },
                    { text: 'Setiap hari', value: 6 }
                ]
            },
            {
                text: 'Saya merasa frustrasi dengan pekerjaan saya',
                options: [
                    { text: 'Tidak Pernah', value: 0 },
                    { text: 'Beberapa kali setahun', value: 1 },
                    { text: 'Sebulan sekali', value: 2 },
                    { text: 'Beberapa kali sebulan', value: 3 },
                    { text: 'Setiap minggu', value: 4 },
                    { text: 'Beberapa kali seminggu', value: 5 },
                    { text: 'Setiap hari', value: 6 }
                ]
            }
        ],
        scoring: {
            ranges: [
                { min: 0, max: 10, category: 'Tidak Ada Burnout', color: '#4CAF50', description: 'Anda tidak mengalami burnout. Work-life balance Anda baik.', recommendations: ['Pertahankan pola kerja sehat', 'Jaga work-life balance', 'Lanjutkan self-care rutin', 'Tetap aware dengan tanda-tanda burnout'] },
                { min: 11, max: 20, category: 'Burnout Ringan', color: '#FFC107', description: 'Anda mulai menunjukkan tanda-tanda burnout ringan.', recommendations: ['Evaluasi beban kerja', 'Tingkatkan waktu istirahat', 'Set boundaries yang jelas', 'Lakukan aktivitas relaksasi'] },
                { min: 21, max: 30, category: 'Burnout Sedang', color: '#FF9800', description: 'Anda mengalami burnout tingkat sedang. Perlu perhatian serius.', recommendations: ['Ambil cuti jika memungkinkan', 'Bicarakan dengan atasan tentang beban kerja', 'Konsultasi dengan psikolog', 'Revaluasi prioritas hidup'] },
                { min: 31, max: 42, category: 'Burnout Berat', color: '#F44336', description: 'Anda mengalami burnout yang serius. Tindakan segera diperlukan!', recommendations: ['Ambil medical leave SEGERA', 'Konsultasi psikolog/psikiater', 'Evaluasi ulang karir Anda', 'Prioritaskan kesehatan mental'] }
            ]
        }
    },

    mbti: {
        title: 'Tes Kepribadian MBTI',
        questions: [
            // E vs I (Extraversion vs Introversion) - 10 questions
            { text: 'Saya lebih suka menghabiskan waktu dengan banyak orang daripada sendirian', dimension: 'EI', options: [
                { text: 'Sangat Tidak Setuju', value: -2 }, { text: 'Tidak Setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Sangat Setuju', value: 2 }
            ]},
            { text: 'Saya merasa energik setelah berinteraksi dengan orang banyak', dimension: 'EI', options: [
                { text: 'Sangat Tidak Setuju', value: -2 }, { text: 'Tidak Setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Sangat Setuju', value: 2 }
            ]},
            { text: 'Saya cenderung berpikir sambil berbicara dengan orang lain', dimension: 'EI', options: [
                { text: 'Sangat Tidak Setuju', value: -2 }, { text: 'Tidak Setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Sangat Setuju', value: 2 }
            ]},
            { text: 'Saya mudah berteman dengan orang baru', dimension: 'EI', options: [
                { text: 'Sangat Tidak Setuju', value: -2 }, { text: 'Tidak Setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Sangat Setuju', value: 2 }
            ]},
            { text: 'Saya lebih suka bekerja dalam kelompok daripada sendiri', dimension: 'EI', options: [
                { text: 'Sangat Tidak Setuju', value: -2 }, { text: 'Tidak Setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Sangat Setuju', value: 2 }
            ]},
            { text: 'Saya perlu waktu sendiri untuk mengisi ulang energi', dimension: 'EI', options: [
                { text: 'Sangat Tidak Setuju', value: 2 }, { text: 'Tidak Setuju', value: 1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: -1 }, { text: 'Sangat Setuju', value: -2 }
            ]},
            { text: 'Saya lebih memilih obrolan ringan daripada percakapan mendalam dengan sedikit orang', dimension: 'EI', options: [
                { text: 'Sangat Tidak Setuju', value: -2 }, { text: 'Tidak Setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Sangat Setuju', value: 2 }
            ]},
            { text: 'Saya sering menjadi pusat perhatian dalam pertemuan sosial', dimension: 'EI', options: [
                { text: 'Sangat Tidak Setuju', value: -2 }, { text: 'Tidak Setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Sangat Setuju', value: 2 }
            ]},
            { text: 'Saya lebih suka mendengarkan daripada berbicara dalam diskusi kelompok', dimension: 'EI', options: [
                { text: 'Sangat Tidak Setuju', value: 2 }, { text: 'Tidak Setuju', value: 1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: -1 }, { text: 'Sangat Setuju', value: -2 }
            ]},
            { text: 'Saya merasa nyaman memulai percakapan dengan orang asing', dimension: 'EI', options: [
                { text: 'Sangat Tidak Setuju', value: -2 }, { text: 'Tidak Setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Sangat Setuju', value: 2 }
            ]},
            
            // S vs N (Sensing vs Intuition) - 10 questions
            { text: 'Saya lebih fokus pada fakta dan detail daripada kemungkinan masa depan', dimension: 'SN', options: [
                { text: 'Sangat Tidak Setuju', value: -2 }, { text: 'Tidak Setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Sangat Setuju', value: 2 }
            ]},
            { text: 'Saya lebih percaya pada pengalaman nyata daripada intuisi', dimension: 'SN', options: [
                { text: 'Sangat Tidak Setuju', value: -2 }, { text: 'Tidak Setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Sangat Setuju', value: 2 }
            ]},
            { text: 'Saya lebih suka instruksi yang spesifik dan jelas', dimension: 'SN', options: [
                { text: 'Sangat Tidak Setuju', value: -2 }, { text: 'Tidak Setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Sangat Setuju', value: 2 }
            ]},
            { text: 'Saya cenderung praktis dan realistis', dimension: 'SN', options: [
                { text: 'Sangat Tidak Setuju', value: -2 }, { text: 'Tidak Setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Sangat Setuju', value: 2 }
            ]},
            { text: 'Saya lebih suka melakukan sesuatu dengan cara yang sudah terbukti', dimension: 'SN', options: [
                { text: 'Sangat Tidak Setuju', value: -2 }, { text: 'Tidak Setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Sangat Setuju', value: 2 }
            ]},
            { text: 'Saya sering memikirkan kemungkinan dan teori abstrak', dimension: 'SN', options: [
                { text: 'Sangat Tidak Setuju', value: 2 }, { text: 'Tidak Setuju', value: 1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: -1 }, { text: 'Sangat Setuju', value: -2 }
            ]},
            { text: 'Saya lebih tertarik pada pola dan koneksi daripada detail spesifik', dimension: 'SN', options: [
                { text: 'Sangat Tidak Setuju', value: 2 }, { text: 'Tidak Setuju', value: 1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: -1 }, { text: 'Sangat Setuju', value: -2 }
            ]},
            { text: 'Saya percaya pada "gut feeling" saya', dimension: 'SN', options: [
                { text: 'Sangat Tidak Setuju', value: 2 }, { text: 'Tidak Setuju', value: 1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: -1 }, { text: 'Sangat Setuju', value: -2 }
            ]},
            { text: 'Saya fokus pada apa yang sekarang daripada apa yang mungkin terjadi', dimension: 'SN', options: [
                { text: 'Sangat Tidak Setuju', value: -2 }, { text: 'Tidak Setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Sangat Setuju', value: 2 }
            ]},
            { text: 'Saya lebih suka inovasi dan eksperimen daripada metode tradisional', dimension: 'SN', options: [
                { text: 'Sangat Tidak Setuju', value: 2 }, { text: 'Tidak Setuju', value: 1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: -1 }, { text: 'Sangat Setuju', value: -2 }
            ]},
            
            // T vs F (Thinking vs Feeling) - 10 questions
            { text: 'Saya membuat keputusan berdasarkan logika daripada perasaan', dimension: 'TF', options: [
                { text: 'Sangat Tidak Setuju', value: -2 }, { text: 'Tidak Setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Sangat Setuju', value: 2 }
            ]},
            { text: 'Keadilan lebih penting daripada belas kasihan', dimension: 'TF', options: [
                { text: 'Sangat Tidak Setuju', value: -2 }, { text: 'Tidak Setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Sangat Setuju', value: 2 }
            ]},
            { text: 'Saya lebih menghargai kejujuran daripada taktik dalam berkomunikasi', dimension: 'TF', options: [
                { text: 'Sangat Tidak Setuju', value: -2 }, { text: 'Tidak Setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Sangat Setuju', value: 2 }
            ]},
            { text: 'Saya dapat memberikan kritik tanpa terlalu memikirkan perasaan orang lain', dimension: 'TF', options: [
                { text: 'Sangat Tidak Setuju', value: -2 }, { text: 'Tidak Setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Sangat Setuju', value: 2 }
            ]},
            { text: 'Objektifitas lebih penting daripada harmoni dalam diskusi', dimension: 'TF', options: [
                { text: 'Sangat Tidak Setuju', value: -2 }, { text: 'Tidak Setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Sangat Setuju', value: 2 }
            ]},
            { text: 'Saya mudah berempati dengan perasaan orang lain', dimension: 'TF', options: [
                { text: 'Sangat Tidak Setuju', value: 2 }, { text: 'Tidak Setuju', value: 1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: -1 }, { text: 'Sangat Setuju', value: -2 }
            ]},
            { text: 'Saya mempertimbangkan dampak emosional sebelum membuat keputusan', dimension: 'TF', options: [
                { text: 'Sangat Tidak Setuju', value: 2 }, { text: 'Tidak Setuju', value: 1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: -1 }, { text: 'Sangat Setuju', value: -2 }
            ]},
            { text: 'Menjaga harmoni hubungan lebih penting dari menyampaikan kebenaran', dimension: 'TF', options: [
                { text: 'Sangat Tidak Setuju', value: 2 }, { text: 'Tidak Setuju', value: 1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: -1 }, { text: 'Sangat Setuju', value: -2 }
            ]},
            { text: 'Saya menganalisis pro-kontra secara objektif sebelum memutuskan', dimension: 'TF', options: [
                { text: 'Sangat Tidak Setuju', value: -2 }, { text: 'Tidak Setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Sangat Setuju', value: 2 }
            ]},
            { text: 'Nilai-nilai personal lebih penting dari logic dalam keputusan penting', dimension: 'TF', options: [
                { text: 'Sangat Tidak Setuju', value: 2 }, { text: 'Tidak Setuju', value: 1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: -1 }, { text: 'Sangat Setuju', value: -2 }
            ]},
            
            // J vs P (Judging vs Perceiving) - 10 questions
            { text: 'Saya lebih suka membuat rencana detail sebelum bertindak', dimension: 'JP', options: [
                { text: 'Sangat Tidak Setuju', value: -2 }, { text: 'Tidak Setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Sangat Setuju', value: 2 }
            ]},
            { text: 'Saya merasa nyaman dengan jadwal dan deadline', dimension: 'JP', options: [
                { text: 'Sangat Tidak Setuju', value: -2 }, { text: 'Tidak Setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Sangat Setuju', value: 2 }
            ]},
            { text: 'Saya lebih suka menyelesaikan tugas lebih awal', dimension: 'JP', options: [
                { text: 'Sangat Tidak Setuju', value: -2 }, { text: 'Tidak Setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Sangat Setuju', value: 2 }
            ]},
            { text: 'Saya suka menjaga lingkungan tetap rapi dan terorganisir', dimension: 'JP', options: [
                { text: 'Sangat Tidak Setuju', value: -2 }, { text: 'Tidak Setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Sangat Setuju', value: 2 }
            ]},
            { text: 'Saya merasa tidak nyaman dengan perubahan mendadak', dimension: 'JP', options: [
                { text: 'Sangat Tidak Setuju', value: -2 }, { text: 'Tidak Setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Sangat Setuju', value: 2 }
            ]},
            { text: 'Saya lebih suka menjaga pilihan tetap terbuka', dimension: 'JP', options: [
                { text: 'Sangat Tidak Setuju', value: 2 }, { text: 'Tidak Setuju', value: 1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: -1 }, { text: 'Sangat Setuju', value: -2 }
            ]},
            { text: 'Saya nyaman bekerja di bawah tekanan deadline', dimension: 'JP', options: [
                { text: 'Sangat Tidak Setuju', value: 2 }, { text: 'Tidak Setuju', value: 1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: -1 }, { text: 'Sangat Setuju', value: -2 }
            ]},
            { text: 'Saya membuat to-do list dan mengikutinya dengan ketat', dimension: 'JP', options: [
                { text: 'Sangat Tidak Setuju', value: -2 }, { text: 'Tidak Setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Sangat Setuju', value: 2 }
            ]},
            { text: 'Saya lebih suka fleksibilitas daripada struktur yang kaku', dimension: 'JP', options: [
                { text: 'Sangat Tidak Setuju', value: 2 }, { text: 'Tidak Setuju', value: 1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: -1 }, { text: 'Sangat Setuju', value: -2 }
            ]},
            { text: 'Saya butuh closure dan keputusan final secepat mungkin', dimension: 'JP', options: [
                { text: 'Sangat Tidak Setuju', value: -2 }, { text: 'Tidak Setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Sangat Setuju', value: 2 }
            ]}
        ],
        scoring: {
            method: 'mbti',
            descriptions: {
                'INTJ': { title: 'The Architect', description: 'Pemikir strategis dengan rencana untuk segala sesuatu. Independen, inovatif, dan visioner.', strengths: ['Pemikiran strategis', 'Independen', 'Inovatif', 'Determinasi tinggi'], weaknesses: ['Terlalu kritis', 'Kurang ekspresif', 'Perfeksionis'] },
                'INTP': { title: 'The Logician', description: 'Pemikir inovatif dengan kehausan akan pengetahuan. Analitis, objektif, dan kreatif.', strengths: ['Analitis kuat', 'Kreatif', 'Open-minded', 'Jujur'], weaknesses: ['Insensitif', 'Kurang praktis', 'Mudah bosan'] },
                'ENTJ': { title: 'The Commander', description: 'Pemimpin yang berani dan imajinatif. Selalu menemukan jalan atau membuatnya.', strengths: ['Leadership alami', 'Percaya diri', 'Strategis', 'Efisien'], weaknesses: ['Tidak sabar', 'Dominan', 'Kurang empatik'] },
                'ENTP': { title: 'The Debater', description: 'Pemikir cerdas yang tak bisa menolak tantangan intelektual.', strengths: ['Cepat belajar', 'Kreatif', 'Karismatik', 'Energik'], weaknesses: ['Argumentatif', 'Tidak sabaran', 'Sulit fokus'] },
                'INFJ': { title: 'The Advocate', description: 'Idealis yang tenang dan mistis namun inspiratif dan tak kenal lelah.', strengths: ['Empatik', 'Kreatif', 'Idealis', 'Insightful'], weaknesses: ['Sensitif', 'Perfeksionis', 'Burnout mudah'] },
                'INFP': { title: 'The Mediator', description: 'Penyair yang altruistik, selalu siap membantu untuk tujuan baik.', strengths: ['Idealistis', 'Kreatif', 'Empatik', 'Passionate'], weaknesses: ['Terlalu idealis', 'Defensif', 'Sulit keputusan praktis'] },
                'ENFJ': { title: 'The Protagonist', description: 'Pemimpin karismatik dan inspiratif yang mampu mempesona audiensnya.', strengths: ['Karismatik', 'Altruistik', 'Leader alami', 'Reliable'], weaknesses: ['Terlalu idealis', 'Terlalu sensitif', 'Overcommit'] },
                'ENFP': { title: 'The Campaigner', description: 'Antusias, kreatif, dan sosial dengan imajinasi positif.', strengths: ['Antusias', 'Kreatif', 'Komunikatif', 'Observant'], weaknesses: ['Kurang fokus', 'Overthinking', 'Stres mudah'] },
                'ISTJ': { title: 'The Logistician', description: 'Individu praktis dan faktual. Reliabilitas tidak bisa dikalahkan.', strengths: ['Jujur', 'Bertanggung jawab', 'Praktis', 'Loyal'], weaknesses: ['Keras kepala', 'Tidak sensitif', 'Menolak perubahan'] },
                'ISFJ': { title: 'The Defender', description: 'Pelindung yang sangat dedicated dan hangat. Selalu siap membela orang yang dicintai.', strengths: ['Supportive', 'Reliable', 'Observant', 'Keras kerja'], weaknesses: ['Terlalu humble', 'Sulit berubah', 'Overload diri'] },
                'ESTJ': { title: 'The Executive', description: 'Administrator yang luar biasa, tak tertandingi dalam mengelola hal atau orang.', strengths: ['Dedicated', 'Direct', 'Loyal', 'Organized'], weaknesses: ['Tidak fleksibel', 'Tidak nyaman dengan unconventional', 'Judgemental'] },
                'ESFJ': { title: 'The Consul', description: 'Orang yang sangat peduli, sosial, dan populer. Selalu siap membantu.', strengths: ['Loyal', 'Praktis', 'Warm', 'Duty-bound'], weaknesses: ['Khawatir status', 'Tidak fleksibel', 'Terlalu selfless'] },
                'ISTP': { title: 'The Virtuoso', description: 'Eksperimenter yang berani dan praktis. Master dari semua jenis tools.', strengths: ['Optimis', 'Kreatif', 'Praktis', 'Spontan'], weaknesses: ['Keras kepala', 'Insensitif', 'Private', 'Mudah bosan'] },
                'ISFP': { title: 'The Adventurer', description: 'Artis yang fleksibel dan menawan. Selalu siap explore dan coba hal baru.', strengths: ['Charming', 'Artistic', 'Curious', 'Imaginative'], weaknesses: ['Sensitif', 'Tidak suka planning', 'Kompetitif buruk'] },
                'ESTP': { title: 'The Entrepreneur', description: 'Cerdas, enerjik, dan sangat perceptive. Enjoy living on the edge.', strengths: ['Bold', 'Rational', 'Praktis', 'Sosiabel'], weaknesses: ['Tidak sensitif', 'Impatient', 'Risk-prone', 'Sulit struktur'] },
                'ESFP': { title: 'The Entertainer', description: 'Spontan, enerjik, dan antusias. Hidup tidak pernah membosankan di sekitar mereka.', strengths: ['Bold', 'Practical', 'Original', 'Observant'], weaknesses: ['Sensitif', 'Konflik-avoidant', 'Mudah bosan', 'Tidak fokus jangka panjang'] }
            }
        }
    },

    lovelanguage: {
        title: 'Tes Love Language (Bahasa Cinta)',
        questions: [
            // Quality Time (6 questions)
            { text: 'Saya merasa paling dicintai ketika pasangan memberikan perhatian penuh saat berbicara', type: 'quality_time', options: [
                { text: 'Sangat Tidak Setuju', value: 1 }, { text: 'Tidak Setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Sangat Setuju', value: 5 }
            ]},
            { text: 'Menghabiskan waktu berkualitas bersama sangat penting bagi saya', type: 'quality_time', options: [
                { text: 'Sangat Tidak Setuju', value: 1 }, { text: 'Tidak Setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Sangat Setuju', value: 5 }
            ]},
            { text: 'Aktivitas bersama tanpa distraksi membuat saya bahagia', type: 'quality_time', options: [
                { text: 'Sangat Tidak Setuju', value: 1 }, { text: 'Tidak Setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Sangat Setuju', value: 5 }
            ]},
            { text: 'Percakapan mendalam lebih berarti daripada hadiah mahal', type: 'quality_time', options: [
                { text: 'Sangat Tidak Setuju', value: 1 }, { text: 'Tidak Setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Sangat Setuju', value: 5 }
            ]},
            { text: 'Saya merasa diabaikan ketika pasangan sibuk dengan gadget', type: 'quality_time', options: [
                { text: 'Sangat Tidak Setuju', value: 1 }, { text: 'Tidak Setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Sangat Setuju', value: 5 }
            ]},
            { text: 'Rencana date yang dipikirkan dengan baik sangat special', type: 'quality_time', options: [
                { text: 'Sangat Tidak Setuju', value: 1 }, { text: 'Tidak Setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Sangat Setuju', value: 5 }
            ]},
            
            // Receiving Gifts (6 questions)
            { text: 'Saya sangat menghargai hadiah yang diberikan dengan pemikiran', type: 'receiving_gifts', options: [
                { text: 'Sangat Tidak Setuju', value: 1 }, { text: 'Tidak Setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Sangat Setuju', value: 5 }
            ]},
            { text: 'Hadiah adalah simbol cinta yang nyata bagi saya', type: 'receiving_gifts', options: [
                { text: 'Sangat Tidak Setuju', value: 1 }, { text: 'Tidak Setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Sangat Setuju', value: 5 }
            ]},
            { text: 'Hadiah kejutan membuat saya merasa special', type: 'receiving_gifts', options: [
                { text: 'Sangat Tidak Setuju', value: 1 }, { text: 'Tidak Setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Sangat Setuju', value: 5 }
            ]},
            { text: 'Saya menyimpan hadiah sebagai kenangan berharga', type: 'receiving_gifts', options: [
                { text: 'Sangat Tidak Setuju', value: 1 }, { text: 'Tidak Setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Sangat Setuju', value: 5 }
            ]},
            { text: 'Nilai hadiah tidak sepenting pemikiran di baliknya', type: 'receiving_gifts', options: [
                { text: 'Sangat Tidak Setuju', value: 1 }, { text: 'Tidak Setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Sangat Setuju', value: 5 }
            ]},
            { text: 'Saya sedih ketika tidak diingat di hari special', type: 'receiving_gifts', options: [
                { text: 'Sangat Tidak Setuju', value: 1 }, { text: 'Tidak Setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Sangat Setuju', value: 5 }
            ]},
            
            // Words of Affirmation (6 questions)
            { text: 'Kata-kata pujian dan dorongan sangat berarti bagi saya', type: 'words_of_affirmation', options: [
                { text: 'Sangat Tidak Setuju', value: 1 }, { text: 'Tidak Setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Sangat Setuju', value: 5 }
            ]},
            { text: 'Saya butuh mendengar "Aku mencintaimu" dan pujian secara teratur', type: 'words_of_affirmation', options: [
                { text: 'Sangat Tidak Setuju', value: 1 }, { text: 'Tidak Setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Sangat Setuju', value: 5 }
            ]},
            { text: 'Kata-kata dukungan saat sulit sangat penting', type: 'words_of_affirmation', options: [
                { text: 'Sangat Tidak Setuju', value: 1 }, { text: 'Tidak Setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Sangat Setuju', value: 5 }
            ]},
            { text: 'Kritik yang tidak perlu sangat menyakiti saya', type: 'words_of_affirmation', options: [
                { text: 'Sangat Tidak Setuju', value: 1 }, { text: 'Tidak Setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Sangat Setuju', value: 5 }
            ]},
            { text: 'Pesan teks manis atau catatan kecil membuat hari saya', type: 'words_of_affirmation', options: [
                { text: 'Sangat Tidak Setuju', value: 1 }, { text: 'Tidak Setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Sangat Setuju', value: 5 }
            ]},
            { text: 'Pengakuan atas usaha saya sangat bermakna', type: 'words_of_affirmation', options: [
                { text: 'Sangat Tidak Setuju', value: 1 }, { text: 'Tidak Setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Sangat Setuju', value: 5 }
            ]},
            
            // Acts of Service (6 questions)
            { text: 'Saya merasa dicintai ketika seseorang membantu pekerjaan saya', type: 'acts_of_service', options: [
                { text: 'Sangat Tidak Setuju', value: 1 }, { text: 'Tidak Setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Sangat Setuju', value: 5 }
            ]},
            { text: 'Tindakan seperti memasak atau membersihkan sangat berarti', type: 'acts_of_service', options: [
                { text: 'Sangat Tidak Setuju', value: 1 }, { text: 'Tidak Setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Sangat Setuju', value: 5 }
            ]},
            { text: 'Saya appreciate ketika pasangan melakukan hal yang saya minta', type: 'acts_of_service', options: [
                { text: 'Sangat Tidak Setuju', value: 1 }, { text: 'Tidak Setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Sangat Setuju', value: 5 }
            ]},
            { text: 'Kemalasan pasangan dalam membantu membuat saya merasa tidak dicintai', type: 'acts_of_service', options: [
                { text: 'Sangat Tidak Setuju', value: 1 }, { text: 'Tidak Setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Sangat Setuju', value: 5 }
            ]},
            { text: 'Saya menunjukkan cinta dengan melakukan hal untuk orang tercinta', type: 'acts_of_service', options: [
                { text: 'Sangat Tidak Setuju', value: 1 }, { text: 'Tidak Setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Sangat Setuju', value: 5 }
            ]},
            { text: 'Tindakan berbicara lebih keras daripada kata-kata', type: 'acts_of_service', options: [
                { text: 'Sangat Tidak Setuju', value: 1 }, { text: 'Tidak Setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Sangat Setuju', value: 5 }
            ]},
            
            // Physical Touch (6 questions)
            { text: 'Sentuhan fisik seperti pelukan membuat saya merasa aman', type: 'physical_touch', options: [
                { text: 'Sangat Tidak Setuju', value: 1 }, { text: 'Tidak Setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Sangat Setuju', value: 5 }
            ]},
            { text: 'Kontak fisik seperti pegangan tangan penting dalam hubungan', type: 'physical_touch', options: [
                { text: 'Sangat Tidak Setuju', value: 1 }, { text: 'Tidak Setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Sangat Setuju', value: 5 }
            ]},
            { text: 'Pijatan atau sentuhan lembut membuat saya rileks', type: 'physical_touch', options: [
                { text: 'Sangat Tidak Setuju', value: 1 }, { text: 'Tidak Setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Sangat Setuju', value: 5 }
            ]},
            { text: 'Jarak fisik membuat saya merasa jauh secara emosional', type: 'physical_touch', options: [
                { text: 'Sangat Tidak Setuju', value: 1 }, { text: 'Tidak Setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Sangat Setuju', value: 5 }
            ]},
            { text: 'Saya menunjukkan kasih sayang melalui sentuhan fisik', type: 'physical_touch', options: [
                { text: 'Sangat Tidak Setuju', value: 1 }, { text: 'Tidak Setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Sangat Setuju', value: 5 }
            ]},
            { text: 'Pelukan adalah cara terbaik menenangkan saya saat sedih', type: 'physical_touch', options: [
                { text: 'Sangat Tidak Setuju', value: 1 }, { text: 'Tidak Setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Sangat Setuju', value: 5 }
            ]}
        ],
        scoring: {
            method: 'lovelanguage',
            types: {
                'quality_time': { name: 'Quality Time (Waktu Berkualitas)', description: 'Anda merasa paling dicintai ketika mendapat perhatian penuh tanpa distraksi. Bukan hanya sekedar berada di ruangan yang sama, tetapi benar-benar engaged dalam aktivitas bersama.', tips: ['Matikan gadget saat bersama', 'Rencanakan date night rutin', 'Lakukan aktivitas yang disukai bersama', 'Dengarkan dengan penuh perhatian'] },
                'receiving_gifts': { name: 'Receiving Gifts (Menerima Hadiah)', description: 'Hadiah adalah simbol visual dari cinta. Bukan tentang materialistis, tetapi tentang pemikiran dan usaha di balik hadiah tersebut.', tips: ['Perhatikan hal yang disukai pasangan', 'Beri hadiah tanpa alasan khusus', 'Hadiah buatan sendiri sangat bermakna', 'Ingat tanggal-tanggal penting'] },
                'words_of_affirmation': { name: 'Words of Affirmation (Kata-kata Afirmasi)', description: 'Kata-kata positif dan pujian sangat berarti. Kritik sangat menyakitkan dan membekas lama.', tips: ['Ucapkan "Aku mencintaimu" secara teratur', 'Berikan pujian spesifik', 'Kirim pesan manis di siang hari', 'Hindari kritik yang menyakitkan'] },
                'acts_of_service': { name: 'Acts of Service (Tindakan Melayani)', description: 'Tindakan berbicara lebih keras dari kata-kata. Melakukan sesuatu untuk meringankan beban adalah bentuk cinta tertinggi.', tips: ['Bantu pekerjaan rumah', 'Lakukan hal yang diminta tanpa ditunda', 'Anticipate kebutuhan', 'Tunjukkan care melalui tindakan'] },
                'physical_touch': { name: 'Physical Touch (Sentuhan Fisik)', description: 'Sentuhan fisik adalah cara utama untuk mengekspresikan dan menerima cinta. Tidak hanya seksual, tetapi juga sentuhan sederhana.', tips: ['Peluk lebih sering', 'Pegang tangan saat jalan', 'Duduk berdekatan', 'Sentuhan lembut menunjukkan perhatian'] }
            }
        }
    }
};

// Current Test State
let currentTest = null;
let currentQuestionIndex = 0;
let answers = [];

// Start Test
function startTest(testType) {
    currentTest = testsDatabase[testType];
    if (!currentTest) {
        MindCare.showNotification('Tes tidak tersedia', 'error');
        return;
    }

    currentQuestionIndex = 0;
    answers = new Array(currentTest.questions.length).fill(null);

    // Update test title
    document.getElementById('testTitle').textContent = currentTest.title;

    // Render first question
    renderQuestion();

    // Show test container
    document.getElementById('testContainer').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Render Question
function renderQuestion() {
    const question = currentTest.questions[currentQuestionIndex];
    const testBody = document.getElementById('testBody');

    // Build options HTML
    let optionsHTML = '';
    question.options.forEach((option, index) => {
        const isSelected = answers[currentQuestionIndex] === option.value;
        optionsHTML += `
            <div class="answer-option ${isSelected ? 'selected' : ''}" onclick="selectAnswer(${option.value})">
                <div class="option-radio"></div>
                <div class="option-text">${option.text}</div>
            </div>
        `;
    });

    testBody.innerHTML = `
        <div class="question-container active">
            <div class="question-text">
                ${currentQuestionIndex + 1}. ${question.text}
            </div>
            <div class="answer-options">
                ${optionsHTML}
            </div>
        </div>
    `;

    // Update progress
    updateProgress();

    // Update navigation buttons
    updateNavigationButtons();
}

// Select Answer
function selectAnswer(value) {
    answers[currentQuestionIndex] = value;
    renderQuestion();
}

// Update Progress
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / currentTest.questions.length) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
    document.getElementById('progressText').textContent = 
        `Pertanyaan ${currentQuestionIndex + 1} dari ${currentTest.questions.length}`;
}

// Update Navigation Buttons
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Previous button
    prevBtn.disabled = currentQuestionIndex === 0;

    // Next button
    const hasAnswer = answers[currentQuestionIndex] !== null;
    nextBtn.disabled = !hasAnswer;

    // Change next button text on last question
    if (currentQuestionIndex === currentTest.questions.length - 1) {
        nextBtn.innerHTML = `
            Lihat Hasil
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9 18 15 12 9 6"/>
            </svg>
        `;
    } else {
        nextBtn.innerHTML = `
            Selanjutnya
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9 18 15 12 9 6"/>
            </svg>
        `;
    }
}

// Next Question
function nextQuestion() {
    if (currentQuestionIndex < currentTest.questions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    } else {
        // Show results
        calculateAndShowResults();
    }
}

// Previous Question
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
}

// Calculate and Show Results
function calculateAndShowResults() {
    // Check if MBTI test
    if (currentTest.scoring.method === 'mbti') {
        calculateMBTIResults();
        return;
    }
    
    // Check if Love Language test
    if (currentTest.scoring.method === 'lovelanguage') {
        calculateLoveLanguageResults();
        return;
    }
    
    // Standard scoring method
    const totalScore = answers.reduce((sum, value) => sum + value, 0);

    // Find appropriate range
    const range = currentTest.scoring.ranges.find(r => 
        totalScore >= r.min && totalScore <= r.max
    );

    // Show result
    showResult(totalScore, range);
}

// Calculate MBTI Results
function calculateMBTIResults() {
    const dimensions = {
        EI: 0, // Extraversion vs Introversion
        SN: 0, // Sensing vs Intuition
        TF: 0, // Thinking vs Feeling
        JP: 0  // Judging vs Perceiving
    };
    
    // Sum scores for each dimension
    currentTest.questions.forEach((q, index) => {
        if (answers[index] !== null) {
            dimensions[q.dimension] += answers[index];
        }
    });
    
    // Determine personality type
    let personalityType = '';
    personalityType += dimensions.EI > 0 ? 'E' : 'I';
    personalityType += dimensions.SN > 0 ? 'S' : 'N';
    personalityType += dimensions.TF > 0 ? 'T' : 'F';
    personalityType += dimensions.JP > 0 ? 'J' : 'P';
    
    // Get personality description
    const personality = currentTest.scoring.descriptions[personalityType];
    
    // Show MBTI result
    showMBTIResult(personalityType, personality, dimensions);
}

// Show MBTI Result
function showMBTIResult(type, personality, dimensions) {
    document.getElementById('testContainer').classList.remove('active');
    
    const iconSVG = `
        <svg width="120" height="120" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="50" fill="#667eea" opacity="0.2"/>
            <circle cx="60" cy="60" r="40" fill="#764ba2" opacity="0.3"/>
            <text x="60" y="70" font-size="32" font-weight="bold" fill="white" text-anchor="middle">${type}</text>
        </svg>
    `;
    
    let recommendationsHTML = `
        <h3>Kekuatan Anda:</h3>
        <ul>${personality.strengths.map(s => `<li>${s}</li>`).join('')}</ul>
        <h3>Area Pengembangan:</h3>
        <ul>${personality.weaknesses.map(w => `<li>${w}</li>`).join('')}</ul>
        <h3>Skor Dimensi:</h3>
        <ul>
            <li>E vs I: ${dimensions.EI > 0 ? 'Extraversion (' + dimensions.EI + ')' : 'Introversion (' + Math.abs(dimensions.EI) + ')'}</li>
            <li>S vs N: ${dimensions.SN > 0 ? 'Sensing (' + dimensions.SN + ')' : 'Intuition (' + Math.abs(dimensions.SN) + ')'}</li>
            <li>T vs F: ${dimensions.TF > 0 ? 'Thinking (' + dimensions.TF + ')' : 'Feeling (' + Math.abs(dimensions.TF) + ')'}</li>
            <li>J vs P: ${dimensions.JP > 0 ? 'Judging (' + dimensions.JP + ')' : 'Perceiving (' + Math.abs(dimensions.JP) + ')'}</li>
        </ul>
    `;
    
    document.getElementById('resultIcon').innerHTML = iconSVG;
    document.getElementById('resultTitle').textContent = `${type} - ${personality.title}`;
    document.getElementById('resultScore').textContent = type;
    document.getElementById('resultScore').style.fontSize = '48px';
    
    const categoryElem = document.getElementById('resultCategory');
    categoryElem.textContent = personality.title;
    categoryElem.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
    
    document.getElementById('resultDescription').textContent = personality.description;
    document.getElementById('resultRecommendations').innerHTML = recommendationsHTML;
    
    document.getElementById('resultContainer').classList.add('active');
}

// Calculate Love Language Results
function calculateLoveLanguageResults() {
    const scores = {
        quality_time: 0,
        receiving_gifts: 0,
        words_of_affirmation: 0,
        acts_of_service: 0,
        physical_touch: 0
    };
    
    // Sum scores for each love language
    currentTest.questions.forEach((q, index) => {
        if (answers[index] !== null) {
            scores[q.type] += answers[index];
        }
    });
    
    // Find primary love language (highest score)
    let primaryLanguage = '';
    let maxScore = 0;
    for (let type in scores) {
        if (scores[type] > maxScore) {
            maxScore = scores[type];
            primaryLanguage = type;
        }
    }
    
    // Get language description
    const language = currentTest.scoring.types[primaryLanguage];
    
    // Show Love Language result
    showLoveLanguageResult(primaryLanguage, language, scores);
}

// Show Love Language Result
function showLoveLanguageResult(primaryType, language, scores) {
    document.getElementById('testContainer').classList.remove('active');
    
    const iconSVG = `
        <svg width="120" height="120" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="50" fill="#E91E63" opacity="0.2"/>
            <circle cx="60" cy="60" r="40" fill="#E91E63" opacity="0.4"/>
            <path d="M60 75 L35 50 Q35 35 50 35 Q60 45 60 45 Q60 45 70 35 Q85 35 85 50 Z" fill="white"/>
        </svg>
    `;
    
    // Sort scores for display
    const sortedScores = Object.entries(scores)
        .sort((a, b) => b[1] - a[1])
        .map(([type, score]) => ({
            name: currentTest.scoring.types[type].name,
            score: score,
            percentage: Math.round((score / 15) * 100)
        }));
    
    let recommendationsHTML = `
        <h3>Bahasa Cinta Anda:</h3>
        <ul>${language.tips.map(t => `<li>${t}</li>`).join('')}</ul>
        <h3>Skor Semua Bahasa Cinta:</h3>
        <ul>${sortedScores.map(s => 
            `<li>${s.name}: ${s.score}/15 (${s.percentage}%)</li>`
        ).join('')}</ul>
    `;
    
    document.getElementById('resultIcon').innerHTML = iconSVG;
    document.getElementById('resultTitle').textContent = 'Bahasa Cinta Anda';
    document.getElementById('resultScore').textContent = '❤️';
    document.getElementById('resultScore').style.fontSize = '64px';
    
    const categoryElem = document.getElementById('resultCategory');
    categoryElem.textContent = language.name;
    categoryElem.style.background = 'linear-gradient(135deg, #E91E63, #9C27B0)';
    
    document.getElementById('resultDescription').textContent = language.description;
    document.getElementById('resultRecommendations').innerHTML = recommendationsHTML;
    
    document.getElementById('resultContainer').classList.add('active');
}

// Show Result (Standard)
function showResult(score, range) {
    // Hide test container
    document.getElementById('testContainer').classList.remove('active');

    // Build recommendations HTML
    let recommendationsHTML = '<h3>Rekomendasi untuk Anda:</h3><ul>';
    range.recommendations.forEach(rec => {
        recommendationsHTML += `<li>${rec}</li>`;
    });
    recommendationsHTML += '</ul>';

    // Determine icon based on category
    let iconSVG = '';
    if (range.color === '#4CAF50') {
        iconSVG = `
            <svg width="120" height="120" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="50" fill="${range.color}" opacity="0.2"/>
                <circle cx="60" cy="60" r="40" fill="${range.color}" opacity="0.4"/>
                <path d="M45 60 L55 70 L75 50" stroke="white" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
    } else if (range.color === '#FFC107' || range.color === '#FF9800') {
        iconSVG = `
            <svg width="120" height="120" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="50" fill="${range.color}" opacity="0.2"/>
                <circle cx="60" cy="60" r="40" fill="${range.color}" opacity="0.4"/>
                <circle cx="50" cy="50" r="4" fill="white"/>
                <circle cx="70" cy="50" r="4" fill="white"/>
                <path d="M45 70 L75 70" stroke="white" stroke-width="4" stroke-linecap="round"/>
            </svg>
        `;
    } else {
        iconSVG = `
            <svg width="120" height="120" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="50" fill="${range.color}" opacity="0.2"/>
                <circle cx="60" cy="60" r="40" fill="${range.color}" opacity="0.4"/>
                <circle cx="50" cy="50" r="4" fill="white"/>
                <circle cx="70" cy="50" r="4" fill="white"/>
                <path d="M45 75 Q60 65 75 75" stroke="white" stroke-width="4" fill="none" stroke-linecap="round"/>
            </svg>
        `;
    }

    // Update result modal
    document.getElementById('resultIcon').innerHTML = iconSVG;
    document.getElementById('resultTitle').textContent = currentTest.title;
    document.getElementById('resultScore').textContent = score;
    
    const categoryElem = document.getElementById('resultCategory');
    categoryElem.textContent = range.category;
    categoryElem.style.background = `linear-gradient(135deg, ${range.color}, ${adjustColor(range.color, -20)})`;
    
    document.getElementById('resultDescription').textContent = range.description;
    document.getElementById('resultRecommendations').innerHTML = recommendationsHTML;

    // Show result container
    document.getElementById('resultContainer').classList.add('active');
}

// Helper function to adjust color brightness
function adjustColor(color, amount) {
    const num = parseInt(color.replace('#', ''), 16);
    const r = Math.max(0, Math.min(255, (num >> 16) + amount));
    const g = Math.max(0, Math.min(255, ((num >> 8) & 0x00FF) + amount));
    const b = Math.max(0, Math.min(255, (num & 0x0000FF) + amount));
    return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}

// Close Test
function closeTest() {
    if (confirm('Yakin ingin keluar? Progress Anda akan hilang.')) {
        document.getElementById('testContainer').classList.remove('active');
        document.body.style.overflow = '';
        currentTest = null;
        currentQuestionIndex = 0;
        answers = [];
    }
}

// Close Result
function closeResult() {
    document.getElementById('resultContainer').classList.remove('active');
    document.body.style.overflow = '';
}

// Save Result to Dashboard
function saveResult() {
    const totalScore = answers.reduce((sum, value) => sum + value, 0);
    const range = currentTest.scoring.ranges.find(r => 
        totalScore >= r.min && totalScore <= r.max
    );

    const result = {
        testName: currentTest.title,
        score: totalScore,
        category: range.category,
        color: range.color,
        date: new Date().toISOString(),
        answers: answers
    };

    // Get existing results
    let testResults = JSON.parse(localStorage.getItem('testResults') || '[]');
    testResults.unshift(result);

    // Keep only last 50 results
    if (testResults.length > 50) {
        testResults = testResults.slice(0, 50);
    }

    localStorage.setItem('testResults', JSON.stringify(testResults));

    MindCare.showNotification('Hasil berhasil disimpan! Lihat di Dashboard.', 'success');

    // Redirect to dashboard after 2 seconds
    setTimeout(() => {
        window.location.href = 'dashboard.html';
    }, 2000);
}

// Retake Test
function retakeTest() {
    closeResult();
    setTimeout(() => {
        startTest(Object.keys(testsDatabase).find(key => 
            testsDatabase[key].title === currentTest.title
        ));
    }, 300);
}

// Close test/result when clicking overlay
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('test-overlay')) {
        closeTest();
    }
    if (e.target.classList.contains('result-overlay')) {
        closeResult();
    }
});
