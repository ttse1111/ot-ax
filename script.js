// Function to find T-score and percentile for a domain
function getTScoreAndPercentile(normData, domain, rawScore) {
    for (const row of normData) {
        const range = row[domain];
        if (range && range.min !== null && rawScore >= range.min && rawScore <= range.max) {
            return { tScore: row.tScore, percentile: row.percentile };
        }
    }
    return null; // No match found
}

// Function to find Work Placement Level
function getLevel(tScore) {
    for (const level of levels) {
        if (tScore >= level.min && tScore <= level.max) {
            return level.level;
        }
    }
    return "Unknown";
}

// Function to find Work Support Needs
function getSupport(tScore) {
    for (const support of supports) {
        if (tScore >= support.min && tScore <= support.max) {
            return support.support;
        }
    }
    return "Unknown";
}

// Form submission handler
document.getElementById('bwapForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const norm = document.getElementById('norm').value;
    const normData = norms[norm];
    const domains = ['ha', 'ir', 'co', 'wp', 'bwa'];
    const results = {};

    // Calculate results for each domain
    domains.forEach(domain => {
        const rawScore = parseInt(document.getElementById(domain).value);
        const match = getTScoreAndPercentile(normData, domain, rawScore);
        if (match) {
            const tScore = match.tScore;
            const percentile = match.percentile;
            const level = getLevel(tScore);
            const support = getSupport(tScore);
            results[domain] = { tScore, percentile, level, support };
        } else {
            results[domain] = { tScore: "N/A", percentile: "N/A", level: "N/A", support: "N/A" };
        }
    });

    // Display results in a table
    const resultDiv = document.getElementById('result');
    let html = '<table><tr><th>Domain</th><th>T-Score</th><th>Percentile</th><th>Work Placement Level</th><th>Work Support Needs</th></tr>';
    domains.forEach(domain => {
        const res = results[domain];
        html += `<tr><td>${domain.toUpperCase()}</td><td>${res.tScore}</td><td>${res.percentile}</td><td>${res.level}</td><td>${res.support}</td></tr>`;
    });
    html += '</table>';
    resultDiv.innerHTML = html;
});

// Reset button handler
document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('bwapForm').reset();
    document.getElementById('result').innerHTML = '';
});