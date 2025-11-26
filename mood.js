// ============================================
// MOOD TRACKER FUNCTIONALITY
// ============================================

// Initialize Mood Tracker
function initMoodTracker() {
    renderMoodCalendar();
}

// Render Mood Calendar
function renderMoodCalendar() {
    const moodDaysContainer = document.getElementById('moodDays');
    if (!moodDaysContainer) return;

    const moodData = JSON.parse(localStorage.getItem('moodData') || '[]');
    const today = new Date();
    
    const days = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
    let html = '';

    for (let i = 6; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        const dateStr = date.toISOString().split('T')[0];
        const dayName = days[date.getDay()];
        const dayDate = date.getDate();

        // Find mood for this date
        const mood = moodData.find(m => m.date === dateStr);

        html += `
            <div class="mood-day ${mood ? 'has-mood' : ''}">
                <div class="mood-day-name">${dayName}</div>
                <div class="mood-day-emoji">${mood ? mood.emoji : '—'}</div>
                <div class="mood-day-date">${dayDate}</div>
            </div>
        `;
    }

    moodDaysContainer.innerHTML = html;

    // Highlight today's selected mood
    highlightSelectedMood();
}

// Set Mood
function setMood(moodType, emoji) {
    const today = new Date().toISOString().split('T')[0];
    let moodData = JSON.parse(localStorage.getItem('moodData') || '[]');

    // Remove existing mood for today
    moodData = moodData.filter(m => m.date !== today);

    // Add new mood
    moodData.push({
        date: today,
        mood: moodType,
        emoji: emoji,
        timestamp: new Date().toISOString()
    });

    localStorage.setItem('moodData', JSON.stringify(moodData));

    // Update UI
    renderMoodCalendar();
    if (typeof loadStats === 'function') {
        loadStats();
    }

    MindCare.showNotification(`Mood Anda hari ini: ${emoji}`, 'success');
}

// Highlight Selected Mood
function highlightSelectedMood() {
    const today = new Date().toISOString().split('T')[0];
    const moodData = JSON.parse(localStorage.getItem('moodData') || '[]');
    const todayMood = moodData.find(m => m.date === today);

    // Remove all selected classes
    document.querySelectorAll('.mood-btn').forEach(btn => {
        btn.classList.remove('selected');
    });

    // Add selected class to today's mood
    if (todayMood) {
        const selectedBtn = document.querySelector(`[data-mood="${todayMood.mood}"]`);
        if (selectedBtn) {
            selectedBtn.classList.add('selected');
        }
    }
}

// Get Mood Statistics
function getMoodStats() {
    const moodData = JSON.parse(localStorage.getItem('moodData') || '[]');
    
    const last7Days = [];
    const today = new Date();
    
    for (let i = 6; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        const dateStr = date.toISOString().split('T')[0];
        const mood = moodData.find(m => m.date === dateStr);
        last7Days.push(mood ? mood.emoji : null);
    }

    return {
        last7Days,
        totalTracked: moodData.length,
        lastMood: moodData[moodData.length - 1]
    };
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('moodDays')) {
        initMoodTracker();
    }
});
