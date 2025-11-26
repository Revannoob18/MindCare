// ============================================
// DASHBOARD FUNCTIONALITY
// ============================================

// Simple Chart Drawing Functions (Pure JS, no libraries)
function drawLineChart(canvas, data, labels) {
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const padding = 40;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Get theme colors
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const textColor = isDark ? '#E0E0E0' : '#333333';
    const gridColor = isDark ? '#424242' : '#E0E0E0';
    const lineColor = '#667eea';

    // Find max value
    const maxValue = Math.max(...data, 1);
    const minValue = Math.min(...data, 0);
    const valueRange = maxValue - minValue || 1;

    // Draw grid lines
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
        const y = padding + (chartHeight / 4) * i;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(width - padding, y);
        ctx.stroke();
    }

    // Draw Y-axis labels
    ctx.fillStyle = textColor;
    ctx.font = '12px Poppins';
    ctx.textAlign = 'right';
    for (let i = 0; i <= 4; i++) {
        const value = maxValue - (valueRange / 4) * i;
        const y = padding + (chartHeight / 4) * i;
        ctx.fillText(value.toFixed(0), padding - 10, y + 4);
    }

    // Draw line
    if (data.length > 0) {
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();

        data.forEach((value, index) => {
            const x = padding + (chartWidth / (data.length - 1 || 1)) * index;
            const y = padding + chartHeight - ((value - minValue) / valueRange) * chartHeight;
            
            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });
        ctx.stroke();

        // Draw points
        ctx.fillStyle = lineColor;
        data.forEach((value, index) => {
            const x = padding + (chartWidth / (data.length - 1 || 1)) * index;
            const y = padding + chartHeight - ((value - minValue) / valueRange) * chartHeight;
            
            ctx.beginPath();
            ctx.arc(x, y, 5, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    // Draw X-axis labels
    ctx.fillStyle = textColor;
    ctx.textAlign = 'center';
    labels.forEach((label, index) => {
        const x = padding + (chartWidth / (labels.length - 1 || 1)) * index;
        ctx.fillText(label, x, height - padding + 20);
    });
}

function drawDoughnutChart(canvas, data) {
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 40;
    const innerRadius = radius * 0.6;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const colors = ['#667eea', '#f093fb', '#4facfe', '#fa709a', '#fee140', '#30cfd0'];
    const total = data.reduce((sum, item) => sum + item.value, 0);

    if (total === 0) {
        // Draw empty state
        ctx.fillStyle = '#E0E0E0';
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = document.documentElement.getAttribute('data-theme') === 'dark' ? '#1E1E1E' : '#FFFFFF';
        ctx.beginPath();
        ctx.arc(centerX, centerY, innerRadius, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = document.documentElement.getAttribute('data-theme') === 'dark' ? '#E0E0E0' : '#333333';
        ctx.font = '14px Poppins';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('Belum Ada Data', centerX, centerY);
        return;
    }

    let currentAngle = -Math.PI / 2;

    data.forEach((item, index) => {
        const sliceAngle = (item.value / total) * Math.PI * 2;
        
        // Draw slice
        ctx.fillStyle = colors[index % colors.length];
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
        ctx.arc(centerX, centerY, innerRadius, currentAngle + sliceAngle, currentAngle, true);
        ctx.closePath();
        ctx.fill();

        currentAngle += sliceAngle;
    });

    // Draw center circle
    ctx.fillStyle = document.documentElement.getAttribute('data-theme') === 'dark' ? '#1E1E1E' : '#FFFFFF';
    ctx.beginPath();
    ctx.arc(centerX, centerY, innerRadius, 0, Math.PI * 2);
    ctx.fill();

    // Draw legend
    const legendY = canvas.height - 60;
    let legendX = 20;
    
    data.forEach((item, index) => {
        // Color box
        ctx.fillStyle = colors[index % colors.length];
        ctx.fillRect(legendX, legendY, 12, 12);
        
        // Label
        ctx.fillStyle = document.documentElement.getAttribute('data-theme') === 'dark' ? '#E0E0E0' : '#333333';
        ctx.font = '11px Poppins';
        ctx.textAlign = 'left';
        ctx.fillText(`${item.label}: ${item.value}`, legendX + 16, legendY + 10);
        
        legendX += 100;
        if (legendX > canvas.width - 100) {
            legendX = 20;
            legendY += 20;
        }
    });
}

// Initialize Dashboard
function initDashboard() {
    loadStats();
    loadTestResults();
    loadRecommendations();
    initCharts();
}

// Load Statistics
function loadStats() {
    const testResults = JSON.parse(localStorage.getItem('testResults') || '[]');
    const moodData = JSON.parse(localStorage.getItem('moodData') || '[]');

    // Total tests
    document.getElementById('totalTests').textContent = testResults.length;

    // Completion rate (based on last 30 days activity)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const recentTests = testResults.filter(r => new Date(r.date) > thirtyDaysAgo);
    const completionRate = Math.min(100, (recentTests.length / 30) * 100);
    document.getElementById('completionRate').textContent = completionRate.toFixed(0) + '%';

    // Current mood
    const today = new Date().toISOString().split('T')[0];
    const todayMood = moodData.find(m => m.date === today);
    document.getElementById('currentMood').textContent = todayMood ? todayMood.emoji : '😊';

    // Day streak
    let streak = 0;
    const sortedMoods = moodData.sort((a, b) => new Date(b.date) - new Date(a.date));
    for (let i = 0; i < sortedMoods.length; i++) {
        const moodDate = new Date(sortedMoods[i].date);
        const expectedDate = new Date();
        expectedDate.setDate(expectedDate.getDate() - i);
        
        if (moodDate.toISOString().split('T')[0] === expectedDate.toISOString().split('T')[0]) {
            streak++;
        } else {
            break;
        }
    }
    document.getElementById('dayStreak').textContent = streak;
}

// Load Test Results
function loadTestResults() {
    const testResults = JSON.parse(localStorage.getItem('testResults') || '[]');
    const container = document.getElementById('resultsContainer');
    const emptyState = document.getElementById('emptyState');

    if (testResults.length === 0) {
        container.style.display = 'none';
        emptyState.style.display = 'block';
        return;
    }

    container.style.display = 'grid';
    emptyState.style.display = 'none';

    container.innerHTML = testResults.slice(0, 12).map((result, index) => {
        const date = new Date(result.date);
        const formattedDate = date.toLocaleDateString('id-ID', { 
            day: 'numeric', 
            month: 'long', 
            year: 'numeric' 
        });

        return `
            <div class="result-item" style="animation-delay: ${index * 0.05}s">
                <div class="result-header">
                    <div>
                        <div class="result-title">${result.testName}</div>
                        <div class="result-date">${formattedDate}</div>
                    </div>
                    <div class="result-score-badge" style="background: ${result.color}">
                        ${result.score}
                    </div>
                </div>
                <div class="result-body">
                    <div class="result-category" style="background: ${result.color}">
                        ${result.category}
                    </div>
                    <div class="result-actions">
                        <button class="btn-small btn-outline" onclick="viewResultDetail(${index})">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                                <circle cx="12" cy="12" r="3"/>
                            </svg>
                            Detail
                        </button>
                        <button class="btn-small btn-secondary" onclick="deleteResult(${index})">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="3 6 5 6 21 6"/>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Load Recommendations
function loadRecommendations() {
    const testResults = JSON.parse(localStorage.getItem('testResults') || '[]');
    const container = document.getElementById('recommendationsContainer');

    if (testResults.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-muted); grid-column: 1/-1;">Ikuti tes untuk mendapatkan rekomendasi personal</p>';
        return;
    }

    // Analyze recent results
    const recentResults = testResults.slice(0, 5);
    const recommendations = [];

    // Check for concerning patterns
    const hasHighScores = recentResults.some(r => r.score > 15);
    const hasMediumScores = recentResults.some(r => r.score >= 10 && r.score <= 15);

    if (hasHighScores) {
        recommendations.push({
            icon: '🏥',
            title: 'Konsultasi Profesional',
            description: 'Hasil tes Anda menunjukkan tanda-tanda yang perlu perhatian. Kami sangat menyarankan untuk berkonsultasi dengan psikolog profesional.',
            action: 'Buat Janji',
            link: 'https://wa.me/6281234567890'
        });
    }

    if (hasMediumScores) {
        recommendations.push({
            icon: '🧘',
            title: 'Ruang Relaksasi',
            description: 'Luangkan waktu untuk relaksasi mental. Coba meditasi atau breathing exercise untuk mengurangi stres.',
            action: 'Mulai Relaksasi',
            link: 'relaksasi.html'
        });
    }

    recommendations.push({
        icon: '📚',
        title: 'Baca Artikel Edukatif',
        description: 'Pelajari lebih lanjut tentang kesehatan mental dan tips mengelola emosi melalui artikel kami.',
        action: 'Lihat Artikel',
        link: 'artikel.html'
    });

    recommendations.push({
        icon: '📝',
        title: 'Check-in Harian',
        description: 'Pantau kesehatan mental Anda setiap hari dengan check-in singkat untuk tracking yang lebih baik.',
        action: 'Check-in Sekarang',
        link: 'tes-mental.html'
    });

    container.innerHTML = recommendations.map(rec => `
        <div class="recommendation-card">
            <div class="recommendation-icon" style="background: var(--bg-secondary)">
                ${rec.icon}
            </div>
            <h3>${rec.title}</h3>
            <p>${rec.description}</p>
            <button class="btn-primary btn-block" onclick="window.location.href='${rec.link}'">
                ${rec.action}
            </button>
        </div>
    `).join('');
}

// Initialize Charts
function initCharts() {
    // Mental Health Score Chart
    const mentalHealthCanvas = document.getElementById('mentalHealthChart');
    if (mentalHealthCanvas) {
        mentalHealthCanvas.width = mentalHealthCanvas.offsetWidth;
        mentalHealthCanvas.height = 300;
        updateChart();
    }

    // Test Distribution Chart
    const distributionCanvas = document.getElementById('testDistributionChart');
    if (distributionCanvas) {
        distributionCanvas.width = distributionCanvas.offsetWidth;
        distributionCanvas.height = 300;
        updateDistributionChart();
    }
}

// Update Mental Health Chart
function updateChart() {
    const period = parseInt(document.getElementById('chartPeriod').value);
    const testResults = JSON.parse(localStorage.getItem('testResults') || '[]');
    
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - period);
    
    const relevantResults = testResults.filter(r => new Date(r.date) > startDate);
    
    // Group by date and average scores
    const scoresByDate = {};
    relevantResults.forEach(r => {
        const date = new Date(r.date).toISOString().split('T')[0];
        if (!scoresByDate[date]) {
            scoresByDate[date] = [];
        }
        scoresByDate[date].push(r.score);
    });

    // Create data points
    const dates = [];
    const scores = [];
    
    for (let i = period - 1; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const dateStr = date.toISOString().split('T')[0];
        const dateLabel = date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' });
        
        dates.push(dateLabel);
        
        if (scoresByDate[dateStr]) {
            const avg = scoresByDate[dateStr].reduce((a, b) => a + b, 0) / scoresByDate[dateStr].length;
            scores.push(avg);
        } else {
            scores.push(0);
        }
    }

    const canvas = document.getElementById('mentalHealthChart');
    drawLineChart(canvas, scores, dates);
}

// Update Distribution Chart
function updateDistributionChart() {
    const testResults = JSON.parse(localStorage.getItem('testResults') || '[]');
    
    const distribution = {};
    testResults.forEach(r => {
        const testType = r.testName.split(' ')[0]; // Get first word
        distribution[testType] = (distribution[testType] || 0) + 1;
    });

    const data = Object.entries(distribution).map(([label, value]) => ({ label, value }));
    
    const canvas = document.getElementById('testDistributionChart');
    drawDoughnutChart(canvas, data);
}

// View Result Detail
function viewResultDetail(index) {
    const testResults = JSON.parse(localStorage.getItem('testResults') || '[]');
    const result = testResults[index];
    
    MindCare.showNotification(`Detail untuk ${result.testName}: Skor ${result.score} (${result.category})`, 'info');
}

// Delete Result
function deleteResult(index) {
    if (confirm('Yakin ingin menghapus hasil tes ini?')) {
        const testResults = JSON.parse(localStorage.getItem('testResults') || '[]');
        testResults.splice(index, 1);
        localStorage.setItem('testResults', JSON.stringify(testResults));
        
        loadStats();
        loadTestResults();
        loadRecommendations();
        updateChart();
        updateDistributionChart();
        
        MindCare.showNotification('Hasil tes berhasil dihapus', 'success');
    }
}

// Clear All History
function clearHistory() {
    if (confirm('Yakin ingin menghapus semua riwayat tes? Tindakan ini tidak dapat dibatalkan.')) {
        localStorage.removeItem('testResults');
        
        loadStats();
        loadTestResults();
        loadRecommendations();
        updateChart();
        updateDistributionChart();
        
        MindCare.showNotification('Semua riwayat berhasil dihapus', 'success');
    }
}

// Export Data
function exportData() {
    const testResults = JSON.parse(localStorage.getItem('testResults') || '[]');
    const moodData = JSON.parse(localStorage.getItem('moodData') || '[]');
    
    const data = {
        testResults,
        moodData,
        exportDate: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `mindcare-data-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    
    URL.revokeObjectURL(url);
    MindCare.showNotification('Data berhasil diexport', 'success');
}

// Reinitialize charts on theme change
document.addEventListener('DOMContentLoaded', function() {
    initDashboard();
    
    // Watch for theme changes
    const themeObserver = new MutationObserver(function() {
        setTimeout(() => {
            updateChart();
            updateDistributionChart();
        }, 100);
    });
    
    themeObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme']
    });
    
    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            initCharts();
        }, 250);
    });
});
