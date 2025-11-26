// ============================================
// CHATBOT FUNCTIONALITY
// ============================================

const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotContainer = document.getElementById('chatbotContainer');
const chatbotClose = document.getElementById('chatbotClose');
const chatbotMessages = document.getElementById('chatbotMessages');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotSend = document.getElementById('chatbotSend');

// Chatbot responses database
const chatbotResponses = {
    greetings: [
        "Halo! Senang bisa membantu Anda. Ada yang bisa saya bantu hari ini?",
        "Hai! Bagaimana kabar Anda hari ini?",
        "Selamat datang di MindCare! Ada yang bisa saya bantu?"
    ],
    mentalHealth: [
        "Kesehatan mental sangat penting. Kami menyediakan berbagai layanan konseling profesional. Apakah Anda tertarik untuk berkonsultasi?",
        "Saya memahami kekhawatiran Anda. Tim psikolog kami siap membantu. Mau saya jelaskan layanan kami?",
        "Terima kasih telah berbagi. Kami punya layanan tes mental health yang bisa membantu Anda memahami kondisi Anda lebih baik."
    ],
    konseling: [
        "Kami menawarkan konseling individu, keluarga, dan pasangan. Semua sesi dilakukan oleh psikolog berlisensi. Ingin tahu lebih lanjut?",
        "Konseling bisa sangat membantu. Kami punya sesi online dan offline. Mana yang Anda preferensikan?",
        "Untuk booking konseling, Anda bisa klik tombol 'Jadwalkan Konsultasi' atau hubungi kami via WhatsApp."
    ],
    tes: [
        "Kami menyediakan berbagai tes psikologi: PHQ-9 (depresi), GAD-7 (kecemasan), tes kepribadian MBTI, dan banyak lagi. Mau coba?",
        "Tes mental health gratis tersedia di website kami. Klik menu 'Tes Mental' untuk memulai.",
        "Hasil tes akan memberikan gambaran kondisi mental Anda dan rekomendasi langkah selanjutnya."
    ],
    harga: [
        "Harga konseling mulai dari Rp 200.000 per sesi (60 menit). Untuk paket sesi, ada diskon khusus.",
        "Kami menawarkan sesi pertama dengan harga promo Rp 150.000. Tes mental health online gratis!",
        "Untuk informasi harga lengkap, bisa hubungi admin kami via WhatsApp ya."
    ],
    jadwal: [
        "Kami buka Senin-Jumat (09:00-20:00) dan Sabtu (09:00-17:00). Minggu by appointment.",
        "Untuk membuat jadwal, silakan klik menu 'Layanan' lalu pilih 'Jadwalkan Konsultasi'.",
        "Jadwal bisa diatur sesuai kenyamanan Anda. Tim kami akan konfirmasi via WhatsApp."
    ],
    cemas: [
        "Saya paham kecemasan bisa sangat mengganggu. Cobalah teknik pernapasan: tarik napas 4 detik, tahan 4 detik, hembuskan 6 detik.",
        "Kecemasan adalah hal yang normal, tapi jika mengganggu aktivitas harian, konseling bisa membantu. Mau coba tes kecemasan (GAD-7)?",
        "Untuk mengatasi kecemasan akut, coba grounding technique: sebutkan 5 hal yang Anda lihat, 4 hal yang Anda rasakan, 3 hal yang Anda dengar."
    ],
    depresi: [
        "Jika Anda merasa down atau kehilangan minat pada aktivitas, itu bisa jadi tanda depresi. Penting untuk berbicara dengan profesional.",
        "Depresi bisa diatasi dengan terapi yang tepat. Kami punya terapi CBT yang terbukti efektif. Ingin konsultasi?",
        "Cobalah tes depresi PHQ-9 kami untuk mendapat gambaran awal. Setelah itu, psikolog kami bisa memberikan panduan."
    ],
    stres: [
        "Stres adalah respons normal tubuh. Cobalah relaksasi, meditasi, atau olahraga ringan untuk menguranginya.",
        "Kami punya 'Ruang Relaksasi' di website dengan guided meditation dan breathing exercise. Mau coba?",
        "Jika stres sudah berlangsung lama dan mengganggu, konseling bisa membantu menemukan akar masalah dan solusinya."
    ],
    thanks: [
        "Sama-sama! Semoga informasi ini membantu. Jangan ragu untuk hubungi kami kapan saja.",
        "Senang bisa membantu! Kesehatan mental Anda adalah prioritas kami.",
        "Terima kasih kembali! Stay healthy and take care of your mental health! 💚"
    ],
    default: [
        "Maaf, saya kurang memahami pertanyaan Anda. Bisa dijelaskan lebih detail?",
        "Hmm, saya tidak yakin dengan jawaban yang tepat. Mau saya hubungkan dengan admin kami?",
        "Untuk pertanyaan spesifik, Anda bisa hubungi psikolog kami via WhatsApp atau booking konsultasi langsung."
    ]
};

// Keywords untuk mendeteksi intent
const keywordMap = {
    greetings: ['hai', 'halo', 'hi', 'hello', 'selamat', 'pagi', 'siang', 'sore', 'malam'],
    mentalHealth: ['mental', 'psikologi', 'jiwa', 'emosi', 'perasaan', 'mood'],
    konseling: ['konseling', 'konsultasi', 'terapi', 'sesi', 'bertemu', 'psikolog'],
    tes: ['tes', 'test', 'assessment', 'evaluasi', 'mbti', 'kepribadian', 'phq', 'gad'],
    harga: ['harga', 'biaya', 'tarif', 'bayar', 'murah', 'mahal', 'gratis'],
    jadwal: ['jadwal', 'booking', 'jam', 'buka', 'tutup', 'appointment', 'kapan'],
    cemas: ['cemas', 'takut', 'khawatir', 'gelisah', 'panik', 'anxious', 'anxiety'],
    depresi: ['depresi', 'sedih', 'murung', 'down', 'putus asa', 'hopeless', 'depression'],
    stres: ['stres', 'stress', 'tekanan', 'beban', 'capek', 'lelah', 'burnout'],
    thanks: ['terima kasih', 'thanks', 'makasih', 'thx', 'thank you']
};

// Function to detect intent from user message
function detectIntent(message) {
    const lowerMessage = message.toLowerCase();
    
    for (const [intent, keywords] of Object.entries(keywordMap)) {
        if (keywords.some(keyword => lowerMessage.includes(keyword))) {
            return intent;
        }
    }
    
    return 'default';
}

// Function to get random response based on intent
function getResponse(intent) {
    const responses = chatbotResponses[intent] || chatbotResponses.default;
    return responses[Math.floor(Math.random() * responses.length)];
}

// Function to create message element
function createMessage(text, isBot = true) {
    const messageDiv = document.createElement('div');
    messageDiv.className = isBot ? 'bot-message' : 'user-message';
    
    if (isBot) {
        messageDiv.innerHTML = `
            <div class="message-avatar">🤖</div>
            <div class="message-content">
                <p>${text}</p>
            </div>
        `;
    } else {
        messageDiv.innerHTML = `
            <div class="message-avatar">👤</div>
            <div class="message-content">
                <p>${text}</p>
            </div>
        `;
    }
    
    return messageDiv;
}

// Function to show typing indicator
function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'bot-message typing-indicator';
    typingDiv.innerHTML = `
        <div class="message-avatar">🤖</div>
        <div class="message-content">
            <p><span class="dot">.</span><span class="dot">.</span><span class="dot">.</span></p>
        </div>
    `;
    
    // Add CSS for typing animation
    const style = document.createElement('style');
    style.textContent = `
        .typing-indicator .dot {
            animation: typingDot 1.4s infinite;
        }
        .typing-indicator .dot:nth-child(2) {
            animation-delay: 0.2s;
        }
        .typing-indicator .dot:nth-child(3) {
            animation-delay: 0.4s;
        }
        @keyframes typingDot {
            0%, 60%, 100% { opacity: 0.3; }
            30% { opacity: 1; }
        }
    `;
    
    if (!document.getElementById('typing-style')) {
        style.id = 'typing-style';
        document.head.appendChild(style);
    }
    
    chatbotMessages.appendChild(typingDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    
    return typingDiv;
}

// Function to send message
function sendMessage() {
    const message = chatbotInput.value.trim();
    
    if (message === '') return;
    
    // Add user message
    const userMessage = createMessage(message, false);
    chatbotMessages.appendChild(userMessage);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    
    // Clear input
    chatbotInput.value = '';
    
    // Show typing indicator
    const typingIndicator = showTypingIndicator();
    
    // Simulate thinking time
    setTimeout(() => {
        typingIndicator.remove();
        
        // Detect intent and get response
        const intent = detectIntent(message);
        const response = getResponse(intent);
        
        // Add bot response
        const botMessage = createMessage(response, true);
        chatbotMessages.appendChild(botMessage);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        
        // Save conversation to localStorage
        saveConversation(message, response);
        
        // Add quick reply buttons for certain intents
        if (intent === 'mentalHealth' || intent === 'konseling') {
            addQuickReplies(['Tes Mental Health', 'Booking Konseling', 'Info Harga']);
        } else if (intent === 'tes') {
            addQuickReplies(['Mulai Tes Sekarang', 'Jenis Tes Apa Saja?', 'Gratis atau Berbayar?']);
        }
        
    }, 1000 + Math.random() * 1000); // Random delay 1-2 seconds
}

// Function to add quick reply buttons
function addQuickReplies(replies) {
    const quickReplyDiv = document.createElement('div');
    quickReplyDiv.className = 'quick-replies';
    quickReplyDiv.style.cssText = `
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        padding: 8px 0;
        animation: slideIn 0.3s ease;
    `;
    
    replies.forEach(reply => {
        const button = document.createElement('button');
        button.textContent = reply;
        button.style.cssText = `
            padding: 8px 16px;
            border: 2px solid var(--primary-color);
            background: transparent;
            color: var(--primary-color);
            border-radius: 20px;
            font-size: 13px;
            cursor: pointer;
            transition: all 0.3s ease;
        `;
        
        button.addEventListener('mouseover', () => {
            button.style.background = 'var(--primary-color)';
            button.style.color = 'white';
        });
        
        button.addEventListener('mouseout', () => {
            button.style.background = 'transparent';
            button.style.color = 'var(--primary-color)';
        });
        
        button.addEventListener('click', () => {
            chatbotInput.value = reply;
            sendMessage();
            quickReplyDiv.remove();
        });
        
        quickReplyDiv.appendChild(button);
    });
    
    chatbotMessages.appendChild(quickReplyDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Function to save conversation
function saveConversation(userMsg, botMsg) {
    const conversations = JSON.parse(localStorage.getItem('chatHistory') || '[]');
    conversations.push({
        timestamp: new Date().toISOString(),
        user: userMsg,
        bot: botMsg
    });
    
    // Keep only last 50 messages
    if (conversations.length > 50) {
        conversations.shift();
    }
    
    localStorage.setItem('chatHistory', JSON.stringify(conversations));
}

// Function to load conversation history
function loadConversationHistory() {
    const conversations = JSON.parse(localStorage.getItem('chatHistory') || '[]');
    
    // Show last 5 messages
    conversations.slice(-5).forEach(conv => {
        if (conv.user) {
            chatbotMessages.appendChild(createMessage(conv.user, false));
        }
        if (conv.bot) {
            chatbotMessages.appendChild(createMessage(conv.bot, true));
        }
    });
    
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Event listeners
if (chatbotToggle) {
    chatbotToggle.addEventListener('click', () => {
        chatbotContainer.classList.toggle('active');
        
        // Load history on first open
        if (chatbotContainer.classList.contains('active') && chatbotMessages.children.length === 1) {
            // Only has welcome message
            loadConversationHistory();
        }
        
        chatbotInput.focus();
    });
}

if (chatbotClose) {
    chatbotClose.addEventListener('click', () => {
        chatbotContainer.classList.remove('active');
    });
}

if (chatbotSend) {
    chatbotSend.addEventListener('click', sendMessage);
}

if (chatbotInput) {
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

// Add initial greeting with delay
setTimeout(() => {
    if (chatbotMessages && chatbotMessages.children.length === 1) {
        const greeting = createMessage("Saya bisa membantu Anda dengan:<br>• Informasi layanan konseling<br>• Tes mental health<br>• Booking jadwal<br>• Tips kesehatan mental<br><br>Silakan tanyakan apa saja! 😊", true);
        chatbotMessages.appendChild(greeting);
    }
}, 2000);

// Auto-save conversation on page unload
window.addEventListener('beforeunload', () => {
    // Conversation is already saved on each message
});

console.log('🤖 Chatbot initialized successfully!');
