// DIFFICULTY LEVEL MANAGEMENT AND DATA KEYS
const LEVELS = ["NOOB", "DEMI-GOD", "GOD MODE"];
let currentLevelIndex = 0;

// Configurable multi-difficulty answers
const DIFFICULTY_ANSWERS = {
    "NOOB": {
        1: "an impasta",
        2: "because its seed was blue",
        3: "mcdonalds",
        4: "yellow",
        5: "cat",
        6: "2"
    },
    "DEMI-GOD": {
        1: "spaghetti",
        2: "blueberries",
        3: "burger king",
        4: "lemon",
        5: "kitten",
        6: "two"
    },
    "GOD MODE": {
        1: "noodle",
        2: "fruit jam",
        3: "wendys",
        4: "sour",
        5: "feline",
        6: "pair"
    }
};

let unlockedStages =; 
let completedMilestones = [];

function getActiveAnswers() {
    const activeLevelName = LEVELS[currentLevelIndex];
    return DIFFICULTY_ANSWERS[activeLevelName];
}

function updateUIDifficulty() {
    const badge = document.getElementById("difficultyBadge");
    badge.innerText = `DIFFICULTY: ${LEVELS[currentLevelIndex]}`;
}

function resetGameForNextDifficulty() {
    unlockedStages =;
    completedMilestones = [];
    
    // Clear all fields and visually loop back UI states
    for(let i=1; i<=6; i++) {
        document.getElementById(`ans${i}`).value = "";
        document.getElementById(`msg${i}`).innerText = "";
        
        const milestoneEl = document.getElementById(`mile${i}`);
        milestoneEl.classList.remove('visible');
        
        const mBtn = document.getElementById(`mileBtn${i}`);
        mBtn.classList.remove('complete');
        mBtn.innerText = i === 6 ? "ASCEND STAGE" : "SUBMIT PROOF & COMPLETED MILESTONE";

        const tabBtn = document.getElementById(`btn-tab${i}`);
        if(i > 1) {
            tabBtn.classList.remove('unlocked', 'active');
        }
    }
    
    updateUIDifficulty();
    switchTab(1);
}

function switchTab(phaseNumber) {
    if (!unlockedStages.includes(phaseNumber)) {
        alert("❌ ACCESS DENIED: Complete preceding expansion song test and real-world milestones first.");
        return;
    }

    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-tab${phaseNumber}`).classList.add('active');

    document.querySelectorAll('.panel').forEach(panel => panel.classList.remove('active'));
    document.getElementById(`panel${phaseNumber}`).classList.add('active');
}

function checkAnswer(phaseNumber) {
    const inputVal = document.getElementById(`ans${phaseNumber}`).value.trim().toLowerCase();
    const currentAnswerSet = getActiveAnswers();
    const correctKey = currentAnswerSet[phaseNumber];
    const msgEl = document.getElementById(`msg${phaseNumber}`);
    const milestoneEl = document.getElementById(`mile${phaseNumber}`);

    if (inputVal === correctKey) {
        msgEl.className = "status-msg success";
        msgEl.innerText = "✓ 100% ACCURACY DETECTED. REAL WORLD MILESTONE UNLOCKED.";
        milestoneEl.classList.add('visible');
    } else {
        msgEl.className = "status-msg error";
        msgEl.innerText = `❌ ZERO COMPREHENSION. (Hint for checking: code expects exact answer match)`;
        milestoneEl.classList.remove('visible');
    }
}

function completeMilestone(phaseNumber) {
    const btn = document.getElementById(`mileBtn${phaseNumber}`);
    
    if (!completedMilestones.includes(phaseNumber)) {
        completedMilestones.push(phaseNumber);
    }
    
    btn.innerText = "MILESTONE OPERATION VERIFIED ✓";
    btn.classList.add('complete');

    const nextPhase = phaseNumber + 1;
    const currentAnswerSet = getActiveAnswers();

    if (currentAnswerSet[nextPhase]) {
        // Unlock next tab inside the same difficulty tier
        if (!unlockedStages.includes(nextPhase)) {
            unlockedStages.push(nextPhase);
            const nextTabBtn = document.getElementById(`btn-tab${nextPhase}`);
            nextTabBtn.classList.add('unlocked');
            
            setTimeout(() => {
                alert(`⚡ SYSTEM UNLOCKED: Next Expansion Tab initialized.`);
                switchTab(nextPhase);
            }, 300);
        }
    } else {
        // Reached the final tab (Tab 6) of this difficulty level
        if (currentLevelIndex < LEVELS.length - 1) {
            currentLevelIndex++;
            alert(`👑 TRANSITIONING: You cleared the entire tier! Resetting system to next difficulty level: ${LEVELS[currentLevelIndex]}`);
            resetGameForNextDifficulty();
        } else {
            alert("👑 GOD MODE MAXIMA RECOGNIZED. INDEPENDENT REALITY ARCHITECT ASCENSION REACHED.");
        }
    }
}
