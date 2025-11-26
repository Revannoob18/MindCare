// ============================================
// ARTIKEL FUNCTIONALITY
// ============================================

// Articles Database
const articles = [
    {
        id: 1,
        title: "Mengenal Tanda-tanda Depresi dan Cara Mengatasinya",
        excerpt: "Depresi adalah kondisi kesehatan mental yang serius dan memerlukan perhatian khusus. Pelajari tanda-tanda dan cara mengatasinya.",
        category: "mental-health",
        author: "Dr. Sarah Johnson",
        date: "2025-01-15",
        readTime: "8 menit",
        emoji: "😔",
        content: `
            <h2>Apa Itu Depresi?</h2>
            <p>Depresi adalah gangguan mood yang menyebabkan perasaan sedih yang persisten dan kehilangan minat dalam aktivitas. Ini mempengaruhi bagaimana Anda merasa, berpikir, dan menangani aktivitas sehari-hari.</p>
            
            <h3>Tanda-tanda Depresi</h3>
            <ul>
                <li><strong>Perasaan sedih yang berkepanjangan</strong> - Lebih dari dua minggu</li>
                <li><strong>Kehilangan minat</strong> - Pada aktivitas yang biasanya dinikmati</li>
                <li><strong>Perubahan pola tidur</strong> - Insomnia atau tidur berlebihan</li>
                <li><strong>Perubahan nafsu makan</strong> - Makan terlalu banyak atau terlalu sedikit</li>
                <li><strong>Kelelahan</strong> - Energi rendah dan merasa lelah sepanjang waktu</li>
                <li><strong>Kesulitan berkonsentrasi</strong> - Sulit membuat keputusan</li>
                <li><strong>Perasaan bersalah</strong> - Atau tidak berharga</li>
                <li><strong>Pikiran tentang kematian</strong> - Atau bunuh diri</li>
            </ul>
            
            <h3>Cara Mengatasi Depresi</h3>
            <p>Mengatasi depresi memerlukan pendekatan yang komprehensif:</p>
            
            <ol>
                <li><strong>Konsultasi Profesional:</strong> Berbicara dengan psikolog atau psikiater adalah langkah pertama yang penting.</li>
                <li><strong>Terapi:</strong> Terapi kognitif perilaku (CBT) terbukti efektif untuk depresi.</li>
                <li><strong>Olahraga Teratur:</strong> Aktivitas fisik melepaskan endorfin yang meningkatkan mood.</li>
                <li><strong>Pola Tidur Teratur:</strong> Tidur yang cukup sangat penting untuk kesehatan mental.</li>
                <li><strong>Dukungan Sosial:</strong> Berbagi perasaan dengan orang terdekat dapat membantu.</li>
                <li><strong>Hindari Alkohol dan Narkoba:</strong> Ini dapat memperburuk gejala depresi.</li>
                <li><strong>Teknik Relaksasi:</strong> Meditasi dan mindfulness dapat membantu mengelola gejala.</li>
            </ol>
            
            <h3>Kapan Harus Mencari Bantuan?</h3>
            <p>Segera cari bantuan profesional jika:</p>
            <ul>
                <li>Gejala berlangsung lebih dari dua minggu</li>
                <li>Gejala mengganggu kehidupan sehari-hari</li>
                <li>Anda memiliki pikiran untuk menyakiti diri sendiri</li>
                <li>Anda merasa tidak mampu mengatasi sendiri</li>
            </ul>
            
            <p><strong>Ingat:</strong> Depresi adalah kondisi medis yang dapat diobati. Tidak ada yang salah dengan mencari bantuan profesional. Kesembuhan adalah mungkin dengan dukungan yang tepat.</p>
        `
    },
    {
        id: 2,
        title: "Mengelola Kecemasan di Tempat Kerja",
        excerpt: "Tips praktis untuk mengatasi kecemasan dan stres di lingkungan kerja yang sibuk dan menuntut.",
        category: "stress",
        author: "Dr. Michael Chen",
        date: "2025-01-12",
        readTime: "6 menit",
        emoji: "😰",
        content: `
            <h2>Kecemasan di Tempat Kerja</h2>
            <p>Kecemasan di tempat kerja adalah hal yang umum dialami oleh banyak orang. Tekanan deadline, ekspektasi tinggi, dan beban kerja yang berat dapat memicu stres dan kecemasan.</p>
            
            <h3>Penyebab Umum Kecemasan di Tempat Kerja</h3>
            <ul>
                <li>Beban kerja yang berlebihan</li>
                <li>Deadline yang ketat</li>
                <li>Konflik dengan rekan kerja atau atasan</li>
                <li>Ketidakpastian pekerjaan</li>
                <li>Kurangnya work-life balance</li>
                <li>Perfeksionisme yang berlebihan</li>
            </ul>
            
            <h3>Strategi Mengelola Kecemasan</h3>
            
            <h4>1. Teknik Pernapasan</h4>
            <p>Latihan pernapasan dalam dapat dengan cepat mengurangi kecemasan. Cobalah teknik 4-7-8: tarik napas selama 4 detik, tahan 7 detik, hembuskan selama 8 detik.</p>
            
            <h4>2. Manajemen Waktu</h4>
            <p>Prioritaskan tugas dan buat jadwal realistis. Gunakan teknik Pomodoro untuk meningkatkan fokus dan mengurangi overwhelm.</p>
            
            <h4>3. Batasan yang Sehat</h4>
            <p>Belajar mengatakan "tidak" pada tugas tambahan jika Anda sudah overload. Set batasan yang jelas antara waktu kerja dan waktu pribadi.</p>
            
            <h4>4. Break Teratur</h4>
            <p>Ambil jeda pendek setiap jam. Bahkan 5 menit berjalan atau stretching dapat membantu reset pikiran Anda.</p>
            
            <h4>5. Komunikasi Terbuka</h4>
            <p>Bicarakan dengan atasan Anda tentang beban kerja dan ekspektasi. Komunikasi yang jujur dapat mengurangi kesalahpahaman dan kecemasan.</p>
            
            <h3>Tanda-tanda Anda Perlu Bantuan Profesional</h3>
            <ul>
                <li>Kecemasan mengganggu produktivitas kerja</li>
                <li>Serangan panik di tempat kerja</li>
                <li>Insomnia kronis akibat stres kerja</li>
                <li>Gejala fisik seperti sakit kepala atau masalah pencernaan</li>
                <li>Pikiran negatif yang konstan tentang pekerjaan</li>
            </ul>
            
            <p>Jangan ragu untuk mencari bantuan psikolog jika kecemasan Anda mengganggu kualitas hidup. Kesehatan mental Anda sama pentingnya dengan karir Anda.</p>
        `
    },
    {
        id: 3,
        title: "Membangun Hubungan yang Sehat dan Bermakna",
        excerpt: "Panduan untuk menciptakan dan mempertahankan hubungan interpersonal yang positif dan bermakna.",
        category: "relationship",
        author: "Dr. Lisa Anderson",
        date: "2025-01-10",
        readTime: "7 menit",
        emoji: "💕",
        content: `
            <h2>Fondasi Hubungan yang Sehat</h2>
            <p>Hubungan yang sehat adalah kunci kebahagiaan dan kesejahteraan mental. Baik itu hubungan romantis, persahabatan, atau keluarga, prinsip-prinsip dasar tetap sama.</p>
            
            <h3>Karakteristik Hubungan yang Sehat</h3>
            <ul>
                <li><strong>Komunikasi Terbuka:</strong> Berbagi pikiran dan perasaan dengan jujur</li>
                <li><strong>Saling Menghormati:</strong> Menghargai batasan dan kebutuhan satu sama lain</li>
                <li><strong>Kepercayaan:</strong> Fondasi yang solid untuk hubungan jangka panjang</li>
                <li><strong>Dukungan Mutual:</strong> Mendukung pertumbuhan dan impian satu sama lain</li>
                <li><strong>Kesetaraan:</strong> Pembagian tanggung jawab dan pengambilan keputusan yang adil</li>
                <li><strong>Keintiman:</strong> Koneksi emosional dan fisik yang dalam</li>
            </ul>
            
            <h3>Tips Membangun Hubungan yang Kuat</h3>
            
            <h4>1. Praktikkan Active Listening</h4>
            <p>Dengarkan dengan penuh perhatian tanpa menginterupsi. Tunjukkan empati dan pahami perspektif pasangan Anda sebelum merespons.</p>
            
            <h4>2. Ekspresikan Apresiasi</h4>
            <p>Jangan menganggap remeh hal-hal kecil. Ucapkan terima kasih dan tunjukkan penghargaan secara teratur.</p>
            
            <h4>3. Luangkan Quality Time</h4>
            <p>Dedikasikan waktu khusus untuk bersama tanpa distraksi gadget atau pekerjaan. Kualitas lebih penting dari kuantitas.</p>
            
            <h4>4. Kelola Konflik dengan Sehat</h4>
            <p>Hindari menyerang secara personal. Fokus pada masalah, bukan orangnya. Cari solusi win-win.</p>
            
            <h4>5. Jaga Individualitas</h4>
            <p>Hubungan yang sehat memberi ruang untuk pertumbuhan personal. Punya hobi dan teman sendiri adalah hal yang sehat.</p>
            
            <h3>Red Flags dalam Hubungan</h3>
            <p>Waspadai tanda-tanda hubungan yang toxic:</p>
            <ul>
                <li>Kontrol berlebihan atau possessive</li>
                <li>Kritik konstan atau merendahkan</li>
                <li>Isolasi dari teman dan keluarga</li>
                <li>Kekerasan verbal, emosional, atau fisik</li>
                <li>Gaslighting atau manipulasi</li>
                <li>Kurangnya dukungan atau empati</li>
            </ul>
            
            <p>Jika Anda mengalami hal-hal di atas, pertimbangkan untuk mencari bantuan konselor hubungan atau mempertimbangkan kembali hubungan tersebut.</p>
        `
    },
    {
        id: 4,
        title: "Self-Care: Pentingnya Merawat Diri Sendiri",
        excerpt: "Belajar pentingnya self-care dan bagaimana mengintegrasikannya dalam rutinitas harian Anda.",
        category: "self-development",
        author: "Dr. Amanda White",
        date: "2025-01-08",
        readTime: "5 menit",
        emoji: "🌸",
        content: `
            <h2>Apa Itu Self-Care?</h2>
            <p>Self-care adalah tindakan sadar untuk menjaga kesehatan fisik, mental, dan emosional Anda. Ini bukan egois - ini adalah kebutuhan dasar untuk kesejahteraan Anda.</p>
            
            <h3>Dimensi Self-Care</h3>
            
            <h4>1. Physical Self-Care</h4>
            <ul>
                <li>Tidur yang cukup (7-9 jam per malam)</li>
                <li>Olahraga teratur</li>
                <li>Nutrisi yang seimbang</li>
                <li>Pemeriksaan kesehatan rutin</li>
            </ul>
            
            <h4>2. Emotional Self-Care</h4>
            <ul>
                <li>Journaling untuk mengekspresikan perasaan</li>
                <li>Terapi atau konseling jika diperlukan</li>
                <li>Praktik self-compassion</li>
                <li>Setting boundaries yang sehat</li>
            </ul>
            
            <h4>3. Mental Self-Care</h4>
            <ul>
                <li>Membaca buku</li>
                <li>Belajar skill baru</li>
                <li>Puzzle atau brain games</li>
                <li>Limitasi konsumsi berita negatif</li>
            </ul>
            
            <h4>4. Social Self-Care</h4>
            <ul>
                <li>Quality time dengan orang terkasih</li>
                <li>Join komunitas dengan minat yang sama</li>
                <li>Maintain hubungan yang positif</li>
                <li>Set batasan dengan hubungan yang toxic</li>
            </ul>
            
            <h4>5. Spiritual Self-Care</h4>
            <ul>
                <li>Meditasi atau doa</li>
                <li>Refleksi dan introspeksi</li>
                <li>Menghabiskan waktu di alam</li>
                <li>Praktik gratitude</li>
            </ul>
            
            <h3>Cara Memulai Self-Care Routine</h3>
            
            <p><strong>Mulai Kecil:</strong> Jangan overwhelm diri dengan terlalu banyak perubahan sekaligus. Mulai dengan satu atau dua aktivitas self-care.</p>
            
            <p><strong>Buat Schedule:</strong> Jadwalkan self-care seperti appointment penting lainnya. Block waktu di kalender Anda.</p>
            
            <p><strong>Cari Apa yang Cocok untuk Anda:</strong> Self-care adalah personal. Apa yang berhasil untuk orang lain mungkin tidak untuk Anda.</p>
            
            <p><strong>Konsisten:</strong> Self-care bukan aktivitas satu kali. Ini adalah komitmen jangka panjang untuk kesejahteraan Anda.</p>
            
            <h3>Self-Care Bukan Egois</h3>
            <p>Ingat pepatah di pesawat: "Pasang masker oksigen Anda sendiri terlebih dahulu sebelum membantu orang lain." Anda tidak bisa menuangkan dari cangkir yang kosong. Merawat diri sendiri memungkinkan Anda untuk lebih baik dalam merawat orang lain.</p>
        `
    },
    {
        id: 5,
        title: "Parenting: Membesarkan Anak dengan Kesehatan Mental yang Baik",
        excerpt: "Strategi untuk mendukung perkembangan emosional dan mental anak-anak Anda.",
        category: "parenting",
        author: "Dr. Robert Martinez",
        date: "2025-01-05",
        readTime: "9 menit",
        emoji: "👨‍👩‍👧‍👦",
        content: `
            <h2>Peran Orang Tua dalam Kesehatan Mental Anak</h2>
            <p>Sebagai orang tua, Anda memainkan peran krusial dalam membentuk kesehatan mental dan emosional anak. Fondasi yang kuat di masa kecil akan membentuk resiliensi mereka di masa depan.</p>
            
            <h3>Prinsip Dasar Parenting yang Sehat</h3>
            
            <h4>1. Komunikasi Terbuka</h4>
            <p>Ciptakan lingkungan di mana anak merasa aman untuk berbagi perasaan tanpa takut dihakimi. Dengarkan dengan empati dan validasi emosi mereka.</p>
            
            <h4>2. Emotional Coaching</h4>
            <p>Ajari anak mengenali dan memberi nama emosi mereka. Bantu mereka memahami bahwa semua emosi itu valid, dan yang penting adalah bagaimana mereka meresponsnya.</p>
            
            <h4>3. Model Perilaku Sehat</h4>
            <p>Anak-anak belajar lebih banyak dari apa yang mereka lihat daripada apa yang mereka dengar. Tunjukkan cara mengelola stres dan emosi dengan sehat.</p>
            
            <h4>4. Konsistensi dan Struktur</h4>
            <p>Rutinitas yang konsisten memberi anak rasa aman dan kontrol. Ini membantu mengurangi kecemasan dan meningkatkan kesejahteraan.</p>
            
            <h3>Membangun Self-Esteem Anak</h3>
            <ul>
                <li><strong>Pujian Spesifik:</strong> Alih-alih "Kamu pintar," katakan "Saya bangga dengan usaha keras yang kamu lakukan pada PR matematika"</li>
                <li><strong>Fokus pada Usaha:</strong> Hargai proses, bukan hanya hasil akhir</li>
                <li><strong>Biarkan Mereka Mengambil Risiko:</strong> Kegagalan adalah bagian penting dari pembelajaran</li>
                <li><strong>Unconditional Love:</strong> Pastikan anak tahu bahwa cinta Anda tidak bergantung pada prestasi mereka</li>
            </ul>
            
            <h3>Menangani Tantangan Emosional</h3>
            
            <h4>Tantrum dan Meltdown</h4>
            <p>Tetap tenang dan validate perasaan mereka. "Saya tahu kamu sangat kesal sekarang." Tunggu sampai mereka tenang sebelum membicarakan perilaku.</p>
            
            <h4>Kecemasan pada Anak</h4>
            <p>Jangan dismiss ketakutan mereka. Ajari teknik coping seperti pernapasan dalam. Expose mereka secara bertahap pada situasi yang membuat cemas.</p>
            
            <h4>Kesedihan dan Kehilangan</h4>
            <p>Biarkan anak merasakan kesedihan. Jangan coba "fix" perasaan mereka. Hadir dan dukung mereka melalui prosesnya.</p>
            
            <h3>Screen Time dan Social Media</h3>
            <p>Set batasan yang jelas pada penggunaan gadget. Monitor konten yang mereka konsumsi. Diskusikan tentang cyberbullying dan online safety.</p>
            
            <h3>Kapan Mencari Bantuan Profesional</h3>
            <p>Konsultasikan dengan psikolog anak jika:</p>
            <ul>
                <li>Perubahan drastis dalam perilaku atau mood</li>
                <li>Kesulitan di sekolah yang persisten</li>
                <li>Withdrawal dari aktivitas atau teman</li>
                <li>Perubahan pola makan atau tidur yang signifikan</li>
                <li>Ekspresi menyakiti diri sendiri atau orang lain</li>
            </ul>
            
            <p>Ingat, mencari bantuan profesional adalah tanda parenting yang baik, bukan kegagalan.</p>
        `
    },
    {
        id: 6,
        title: "Mindfulness: Hidup di Saat Ini",
        excerpt: "Pengenalan praktik mindfulness dan bagaimana menerapkannya dalam kehidupan sehari-hari.",
        category: "self-development",
        author: "Dr. Emma Wilson",
        date: "2025-01-03",
        readTime: "6 menit",
        emoji: "🧘",
        content: `
            <h2>Apa Itu Mindfulness?</h2>
            <p>Mindfulness adalah praktik membawa perhatian penuh pada pengalaman saat ini dengan sikap terbuka, tanpa judgment, dan dengan penerimaan.</p>
            
            <h3>Manfaat Mindfulness</h3>
            <ul>
                <li><strong>Mengurangi Stres:</strong> Membantu mengelola reaksi terhadap situasi stressful</li>
                <li><strong>Meningkatkan Focus:</strong> Melatih otak untuk lebih hadir dan konsentrasi</li>
                <li><strong>Emotional Regulation:</strong> Membantu mengenali dan mengelola emosi</li>
                <li><strong>Mengurangi Kecemasan:</strong> Menghentikan worry tentang masa depan</li>
                <li><strong>Meningkatkan Kualitas Tidur:</strong> Menenangkan pikiran yang racing</li>
                <li><strong>Meningkatkan Self-Awareness:</strong> Lebih memahami diri sendiri</li>
            </ul>
            
            <h3>Praktik Mindfulness Sehari-hari</h3>
            
            <h4>1. Mindful Breathing</h4>
            <p>Ambil 5 menit untuk fokus hanya pada napas Anda. Perhatikan sensasi udara masuk dan keluar. Ketika pikiran mengembara, dengan lembut kembalikan fokus ke napas.</p>
            
            <h4>2. Body Scan</h4>
            <p>Berbaring dan secara sistematis bawa awareness ke setiap bagian tubuh Anda, dari ujung kaki sampai kepala. Perhatikan sensasi tanpa judgment.</p>
            
            <h4>3. Mindful Eating</h4>
            <p>Makan dengan awareness penuh. Perhatikan warna, aroma, tekstur, dan rasa makanan. Kunyah perlahan dan nikmati setiap suapan.</p>
            
            <h4>4. Walking Meditation</h4>
            <p>Berjalan dengan kesadaran penuh pada setiap langkah. Rasakan kontak kaki dengan tanah. Perhatikan lingkungan sekitar Anda.</p>
            
            <h4>5. Mindful Observation</h4>
            <p>Pilih objek di sekitar Anda (bunga, awan, dll) dan observe dengan penuh perhatian selama 5 menit. Perhatikan detail yang mungkin biasanya terlewat.</p>
            
            <h3>Integrasi Mindfulness dalam Rutinitas</h3>
            
            <p><strong>Pagi:</strong> Mulai hari dengan 5 menit meditasi atau mindful breathing sebelum cek ponsel.</p>
            
            <p><strong>Siang:</strong> Ambil mindful break. Makan siang tanpa gadget, fokus pada pengalaman makan.</p>
            
            <p><strong>Sore:</strong> Mindful walking saat pulang kerja atau jalan-jalan sore.</p>
            
            <p><strong>Malam:</strong> Body scan sebelum tidur untuk relaksasi dan tidur lebih baik.</p>
            
            <h3>Tips untuk Pemula</h3>
            <ul>
                <li><strong>Mulai Kecil:</strong> Bahkan 5 menit sehari bisa membuat perbedaan</li>
                <li><strong>Konsistensi > Durasi:</strong> Lebih baik 5 menit setiap hari daripada 30 menit sekali seminggu</li>
                <li><strong>Be Patient:</strong> Pikiran mengembara adalah normal. Itu bukan kegagalan.</li>
                <li><strong>No Judgment:</strong> Jangan menilai pengalaman Anda sebagai "baik" atau "buruk"</li>
                <li><strong>Use Apps:</strong> Aplikasi meditasi dapat membantu memandu praktik Anda</li>
            </ul>
            
            <h3>Common Misconceptions</h3>
            <p><strong>"Saya harus mengosongkan pikiran":</strong> Mindfulness bukan tentang tidak berpikir, tapi about observing pikiran tanpa terjebak di dalamnya.</p>
            
            <p><strong>"Saya tidak punya waktu":</strong> Mindfulness dapat dipraktikkan dalam aktivitas sehari-hari yang sudah Anda lakukan.</p>
            
            <p><strong>"Ini terlalu spiritual untuk saya":</strong> Mindfulness adalah praktik sekuler yang didukung oleh riset sains.</p>
            
            <p>Mulai journey mindfulness Anda hari ini. Setiap momen adalah kesempatan untuk kembali ke saat ini.</p>
        `
    }
];

let currentCategory = 'all';

// Initialize Articles
function initArticles() {
    renderArticles();
}

// Render Articles
function renderArticles() {
    const grid = document.getElementById('artikelGrid');
    const filtered = filterArticles();

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
                <h3 style="color: var(--text-primary); margin-bottom: 12px;">Tidak Ada Artikel Ditemukan</h3>
                <p style="color: var(--text-muted);">Coba dengan kata kunci atau kategori lain</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map((article, index) => `
        <div class="article-card" onclick="openArticle(${article.id})" style="animation-delay: ${index * 0.05}s">
            <div class="article-image">${article.emoji}</div>
            <div class="article-content">
                <div class="article-meta">
                    <span class="article-category">${getCategoryName(article.category)}</span>
                    <span class="article-date">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                            <line x1="16" y1="2" x2="16" y2="6"/>
                            <line x1="8" y1="2" x2="8" y2="6"/>
                            <line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                        ${formatDate(article.date)}
                    </span>
                </div>
                <h3 class="article-title">${article.title}</h3>
                <p class="article-excerpt">${article.excerpt}</p>
                <div class="article-footer">
                    <div class="article-author">
                        <div class="author-avatar">${article.author.charAt(0)}</div>
                        <span class="author-name">${article.author}</span>
                    </div>
                    <span class="read-time">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                        </svg>
                        ${article.readTime}
                    </span>
                </div>
            </div>
        </div>
    `).join('');
}

// Filter Articles
function filterArticles() {
    const searchTerm = document.getElementById('articleSearch')?.value.toLowerCase() || '';

    return articles.filter(article => {
        const matchesCategory = currentCategory === 'all' || article.category === currentCategory;
        const matchesSearch = article.title.toLowerCase().includes(searchTerm) ||
                            article.excerpt.toLowerCase().includes(searchTerm) ||
                            article.author.toLowerCase().includes(searchTerm);

        return matchesCategory && matchesSearch;
    });
}

// Search Articles
function searchArticles() {
    renderArticles();
}

// Filter by Category
function filterByCategory(category) {
    currentCategory = category;

    // Update active button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    renderArticles();
}

// Get Category Name
function getCategoryName(category) {
    const names = {
        'mental-health': 'Kesehatan Mental',
        'relationship': 'Hubungan',
        'stress': 'Stres & Anxiety',
        'self-development': 'Self-Development',
        'parenting': 'Parenting'
    };
    return names[category] || category;
}

// Format Date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
    });
}

// Open Article
function openArticle(id) {
    const article = articles.find(a => a.id === id);
    if (!article) return;

    const modal = document.getElementById('articleModal');
    const content = document.getElementById('articleContent');

    content.innerHTML = `
        <div class="modal-header-image">${article.emoji}</div>
        <div class="article-full-meta">
            <span class="article-category">${getCategoryName(article.category)}</span>
            <span class="article-date">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                ${formatDate(article.date)}
            </span>
            <span class="read-time">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                </svg>
                ${article.readTime}
            </span>
        </div>
        <h1 class="article-full-title">${article.title}</h1>
        <div class="article-author" style="margin-bottom: 32px;">
            <div class="author-avatar">${article.author.charAt(0)}</div>
            <span class="author-name">${article.author}</span>
        </div>
        <div class="article-full-content">${article.content}</div>
        <div class="article-cta">
            <h3>Butuh Bantuan Lebih Lanjut?</h3>
            <p>Konsultasikan dengan psikolog profesional kami untuk dukungan yang lebih personal</p>
            <button class="btn-primary btn-large" onclick="window.open('https://wa.me/6281234567890?text=Halo, saya ingin konsultasi', '_blank')">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Hubungi Psikolog
            </button>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Track reading
    trackArticleRead(id);
}

// Close Article
function closeArticle() {
    const modal = document.getElementById('articleModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Track Article Read
function trackArticleRead(id) {
    let readArticles = JSON.parse(localStorage.getItem('readArticles') || '[]');
    if (!readArticles.includes(id)) {
        readArticles.push(id);
        localStorage.setItem('readArticles', JSON.stringify(readArticles));
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('artikelGrid')) {
        initArticles();
    }
});

// Close modal when clicking overlay
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-overlay')) {
        closeArticle();
    }
});
