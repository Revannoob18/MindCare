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
    // Calculate total score
    const totalScore = answers.reduce((sum, value) => sum + value, 0);

    // Find appropriate range
    const range = currentTest.scoring.ranges.find(r => 
        totalScore >= r.min && totalScore <= r.max
    );

    // Show result
    showResult(totalScore, range);
}

// Show Result
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
