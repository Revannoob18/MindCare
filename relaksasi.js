// ============================================
// RELAKSASI FUNCTIONALITY
// ============================================

// Breathing Exercise Variables
let breathingInterval = null;
let breathingPhase = 0;
let breathCount = 0;
let breathStartTime = null;
let breathTimeInterval = null;

// Timer Variables
let timerInterval = null;
let timerSeconds = 300; // 5 minutes default
let timerTotalSeconds = 300;
let timerRunning = false;

// Audio Players
const audioPlayers = {};

// Start Breathing Exercise
function startBreathingExercise() {
    if (breathingInterval) return;

    breathCount = 0;
    breathingPhase = 0;
    breathStartTime = Date.now();

    document.getElementById('startBreathing').style.display = 'none';
    document.getElementById('stopBreathing').style.display = 'flex';

    breathingCycle();
    breathingInterval = setInterval(breathingCycle, 4000);

    // Update time display
    breathTimeInterval = setInterval(updateBreathTime, 1000);
}

// Stop Breathing Exercise
function stopBreathingExercise() {
    if (breathingInterval) {
        clearInterval(breathingInterval);
        breathingInterval = null;
    }
    
    if (breathTimeInterval) {
        clearInterval(breathTimeInterval);
        breathTimeInterval = null;
    }

    document.getElementById('startBreathing').style.display = 'flex';
    document.getElementById('stopBreathing').style.display = 'none';
    document.getElementById('breathingCircle').className = 'breathing-circle';
    document.getElementById('breathingText').textContent = 'Bersiap...';
}

// Breathing Cycle
function breathingCycle() {
    const circle = document.getElementById('breathingCircle');
    const text = document.getElementById('breathingText');

    breathingPhase = (breathingPhase + 1) % 3;

    if (breathingPhase === 0) {
        // Inhale
        circle.className = 'breathing-circle inhale';
        text.textContent = 'Tarik Napas';
    } else if (breathingPhase === 1) {
        // Hold
        circle.className = 'breathing-circle hold';
        text.textContent = 'Tahan';
        breathCount++;
        document.getElementById('breathCount').textContent = breathCount;
    } else {
        // Exhale
        circle.className = 'breathing-circle exhale';
        text.textContent = 'Hembuskan';
    }
}

// Update Breath Time
function updateBreathTime() {
    if (!breathStartTime) return;

    const elapsed = Math.floor((Date.now() - breathStartTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;

    document.getElementById('breathTime').textContent = 
        `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Set Timer
function setTimer(minutes) {
    if (timerRunning) return;

    timerSeconds = minutes * 60;
    timerTotalSeconds = minutes * 60;
    updateTimerDisplay();

    // Update active preset
    document.querySelectorAll('.preset-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Start Timer
function startTimer() {
    if (timerRunning) return;

    timerRunning = true;
    document.getElementById('startTimer').style.display = 'none';
    document.getElementById('pauseTimer').style.display = 'flex';

    timerInterval = setInterval(() => {
        timerSeconds--;
        updateTimerDisplay();

        if (timerSeconds <= 0) {
            pauseTimer();
            playTimerComplete();
            MindCare.showNotification('Sesi meditasi selesai! 🎉', 'success');
        }
    }, 1000);
}

// Pause Timer
function pauseTimer() {
    if (!timerRunning) return;

    timerRunning = false;
    clearInterval(timerInterval);
    document.getElementById('startTimer').style.display = 'flex';
    document.getElementById('pauseTimer').style.display = 'none';
}

// Reset Timer
function resetTimer() {
    pauseTimer();
    timerSeconds = timerTotalSeconds;
    updateTimerDisplay();
}

// Update Timer Display
function updateTimerDisplay() {
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    
    document.getElementById('timerDisplay').textContent = 
        `${minutes}:${seconds.toString().padStart(2, '0')}`;

    // Update progress circle
    const progress = timerSeconds / timerTotalSeconds;
    const circumference = 2 * Math.PI * 90;
    const offset = circumference * (1 - progress);
    
    const progressCircle = document.getElementById('timerProgress');
    if (progressCircle) {
        progressCircle.style.strokeDashoffset = offset;
    }
}

// Play Timer Complete Sound
function playTimerComplete() {
    // Create a simple beep sound using Web Audio API
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.value = 528; // Healing frequency
        oscillator.type = 'sine';

        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 1);
    } catch (e) {
        console.log('Audio playback not supported');
    }
}

// Play Sound (Simulated with Web Audio API)
function playSound(type) {
    const btn = event.target.closest('.play-btn');
    
    if (audioPlayers[type] && audioPlayers[type].playing) {
        stopSound(type);
        btn.classList.remove('playing');
        btn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
        `;
        return;
    }

    // Stop all other sounds
    Object.keys(audioPlayers).forEach(key => stopSound(key));
    document.querySelectorAll('.play-btn').forEach(b => {
        b.classList.remove('playing');
        b.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
        `;
    });

    // Create audio context
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        const filter = audioContext.createBiquadFilter();

        oscillator.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(audioContext.destination);

        // Different sounds for different types
        if (type === 'wave') {
            oscillator.type = 'sine';
            oscillator.frequency.value = 110;
            filter.type = 'lowpass';
            filter.frequency.value = 800;
        } else if (type === 'rain') {
            oscillator.type = 'whitenoise';
            filter.type = 'lowpass';
            filter.frequency.value = 1000;
        } else if (type === 'ambient') {
            oscillator.type = 'triangle';
            oscillator.frequency.value = 220;
        } else if (type === 'fire') {
            oscillator.type = 'whitenoise';
            filter.type = 'lowpass';
            filter.frequency.value = 600;
        }

        gainNode.gain.value = 0.7;
        oscillator.start();

        audioPlayers[type] = {
            context: audioContext,
            oscillator: oscillator,
            gainNode: gainNode,
            playing: true
        };

        btn.classList.add('playing');
        btn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16"/>
                <rect x="14" y="4" width="4" height="16"/>
            </svg>
        `;

        MindCare.showNotification(`Memutar: ${getSoundName(type)}`, 'info');
    } catch (e) {
        MindCare.showNotification('Audio tidak didukung di browser ini', 'error');
    }
}

// Stop Sound
function stopSound(type) {
    if (audioPlayers[type]) {
        audioPlayers[type].oscillator.stop();
        audioPlayers[type].context.close();
        delete audioPlayers[type];
    }
}

// Set Volume
function setVolume(value, type) {
    if (audioPlayers[type] && audioPlayers[type].gainNode) {
        audioPlayers[type].gainNode.gain.value = value / 100;
    }
}

// Get Sound Name
function getSoundName(type) {
    const names = {
        'wave': 'Suara Ombak',
        'rain': 'Suara Hujan',
        'ambient': 'Musik Ambient',
        'fire': 'Api Unggun'
    };
    return names[type] || type;
}

// Motivational Quotes
const quotes = [
    {
        text: "Kesehatan mental sama pentingnya dengan kesehatan fisik. Jaga keduanya dengan baik.",
        author: "Anonymous"
    },
    {
        text: "Tidak apa-apa untuk tidak apa-apa. Izinkan diri Anda untuk merasa dan sembuh.",
        author: "Anonymous"
    },
    {
        text: "Kamu tidak sendirian. Meminta bantuan adalah tanda kekuatan, bukan kelemahan.",
        author: "Anonymous"
    },
    {
        text: "Setiap hari adalah kesempatan baru untuk memulai. Berikan diri Anda waktu untuk tumbuh.",
        author: "Anonymous"
    },
    {
        text: "Merawat kesehatan mental adalah investasi terbaik untuk masa depan Anda.",
        author: "Anonymous"
    },
    {
        text: "Perjalanan seribu mil dimulai dengan satu langkah. Mulailah dari hari ini.",
        author: "Lao Tzu"
    },
    {
        text: "Jangan malu untuk beristirahat. Bahkan bumi memiliki musim untuk beristirahat.",
        author: "Anonymous"
    },
    {
        text: "Kesembuhan bukan linear. Ada naik turun, dan itu normal.",
        author: "Anonymous"
    },
    {
        text: "Berbicara tentang perasaan Anda adalah tanda keberanian dan kebijaksanaan.",
        author: "Anonymous"
    },
    {
        text: "Self-care bukan egois. Anda tidak bisa menuangkan dari cangkir yang kosong.",
        author: "Eleanor Brown"
    },
    {
        text: "Pikiran yang tenang membawa kekuatan batin dan kepercayaan diri.",
        author: "Dalai Lama"
    },
    {
        text: "Masa lalu adalah pelajaran, masa depan adalah misteri. Fokuslah pada saat ini.",
        author: "Anonymous"
    }
];

// Load Random Quote
function loadNewQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    const quoteText = document.getElementById('quoteText');
    const quoteAuthor = document.getElementById('quoteAuthor');

    quoteText.style.opacity = '0';
    quoteAuthor.style.opacity = '0';

    setTimeout(() => {
        quoteText.textContent = randomQuote.text;
        quoteAuthor.textContent = `— ${randomQuote.author}`;
        quoteText.style.transition = 'opacity 0.5s ease';
        quoteAuthor.style.transition = 'opacity 0.5s ease';
        quoteText.style.opacity = '1';
        quoteAuthor.style.opacity = '1';
    }, 300);
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadNewQuote();
    updateTimerDisplay();

    // Add gradient definition for timer
    const svg = document.querySelector('.timer-svg');
    if (svg) {
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
        gradient.setAttribute('id', 'timerGradient');
        gradient.setAttribute('x1', '0%');
        gradient.setAttribute('y1', '0%');
        gradient.setAttribute('x2', '100%');
        gradient.setAttribute('y2', '100%');

        const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop1.setAttribute('offset', '0%');
        stop1.setAttribute('style', 'stop-color:#667eea;stop-opacity:1');

        const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop2.setAttribute('offset', '100%');
        stop2.setAttribute('style', 'stop-color:#764ba2;stop-opacity:1');

        gradient.appendChild(stop1);
        gradient.appendChild(stop2);
        defs.appendChild(gradient);
        svg.insertBefore(defs, svg.firstChild);
    }
});

// Clean up on page unload
window.addEventListener('beforeunload', function() {
    stopBreathingExercise();
    Object.keys(audioPlayers).forEach(type => stopSound(type));
});
