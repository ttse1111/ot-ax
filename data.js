const norms = {
    "MR": [
        { tScore: 73, ha: null, ir: { min: 48, max: 48 }, co: { min: 71, max: 76 }, wp: { min: 84, max: 88 }, bwa: { min: 231, max: 252 }, percentile: 99 },
        { tScore: 71, ha: { min: 40, max: 40 }, ir: { min: 47, max: 47 }, co: { min: 68, max: 70 }, wp: { min: 82, max: 83 }, bwa: { min: 225, max: 230 }, percentile: 98 },
        { tScore: 69, ha: null, ir: null, co: { min: 65, max: 67 }, wp: { min: 81, max: 81 }, bwa: { min: 222, max: 224 }, percentile: 97 },
        { tScore: 68, ha: { min: 39, max: 39 }, ir: { min: 45, max: 46 }, co: { min: 64, max: 64 }, wp: { min: 79, max: 80 }, bwa: { min: 218, max: 221 }, percentile: 96 },
        // Continue for all rows (T-score 67 to 27) from the "MR" tab
        { tScore: 27, ha: { min: 0, max: 8 }, ir: { min: 0, max: 4 }, co: { min: 0, max: 2 }, wp: { min: 0, max: 3 }, bwa: { min: 0, max: 19 }, percentile: 1 }
    ],
    "Learning Disability": [
        // Parse from the "Learning Disability" tab
        { tScore: 73, ha: null, ir: null, co: { min: 76, max: 76 }, wp: { min: 88, max: 88 }, bwa: { min: 248, max: 252 }, percentile: 99 },
        // Add remaining rows
    ],
    "Physical Disability": [
        // Parse from the "Physical Disability" tab
        { tScore: 73, ha: null, ir: null, co: { min: 76, max: 76 }, wp: { min: 80, max: 88 }, bwa: { min: 237, max: 252 }, percentile: 99 },
        // Add remaining rows
    ],
    "Emotional Disturbance": [
        // Parse from the "Emotional Disturbance" tab
        { tScore: 73, ha: { min: 40, max: 40 }, ir: { min: 43, max: 48 }, co: null, wp: { min: 85, max: 88 }, bwa: { min: 232, max: 252 }, percentile: 99 },
        // Add remaining rows
    ]
};

const levels = [
    { min: 67, max: Infinity, level: "Competitive" }, // Note: "Competitve" in Excel is a typo
    { min: 61, max: 66, level: "Transitional" },
    { min: 53, max: 60, level: "High Sheltered" },
    { min: 45, max: 52, level: "Low Sheltered" }, // Adjusted to 45-52 to avoid overlap with 53-60
    { min: 37, max: 44, level: "Work Activity" },
    { min: -Infinity, max: 36, level: "Day Care" }
];

const supports = [
    { min: 62, max: Infinity, support: "Limited" },
    { min: 54, max: 61, support: "Low" },
    { min: 48, max: 53, support: "Moderate" },
    { min: 40, max: 47, support: "High" },
    { min: -Infinity, max: 39, support: "Extensive" }
];