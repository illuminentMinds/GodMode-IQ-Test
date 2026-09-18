// LEVELS OF INITIATION
const LEVELS = ["BEGINNER", "DEMI-GOD", "GOD MODE"];
let currentLevelIndex = 0;

// Dynamic Questions to match the difficulty
// Starts with serious real-world questions, ends with audio/cipher questions
const QUESTIONS = {
    "BEGINNER": {
        1: "Query 01: What is the square root of 144?",
        2: "Query 02: What is the capital city of Japan?",
        3: "Query 03: How many planets are in our solar system?",
        4: "Query 04: What element does 'O' represent on the periodic table?",
        5: "Query 05: What is the boiling point of water in Celsius?",
        6: "Query 06: How many continents are on Earth?"
    },
    "DEMI-GOD": {
        1: "Query 01: Solve the Cipher (Shift 3): 'VHFUHW'",
        2: "Query 02: Name the hermetic principle stating 'As above, so...'",
        3: "Query 03: Enter the missing sequence: 1, 1, 2, 3, 5, 8, __?",
        4: "Query 04: What architectural structure distributes weight outward in Gothic cathedrals?",
        5: "Query 05: The Pineal gland is commonly referred to as the '____ Eye'.",
        6: "Query 06: Who guards the threshold of the abyss in the Kabbalistic Tree of Life?"
    },
    "GOD MODE": {
        1: "Query 01: [AUDIO LINK REQUIRED] What is the specific hidden frequency mentioned at 0:15?",
        2: "Query 02: [AUDIO LINK REQUIRED] Transcribe the reversed phrase in the chorus.",
        3: "Query 03: [AUDIO LINK REQUIRED] Enter the 4-digit numeric code embedded in the bassline.",
        4: "Query 04: [AUDIO LINK REQUIRED] Calculate the exact duration of silence between the second and third tone.",
        5: "Query 05: [AUDIO LINK REQUIRED] What is the whispered Latin phrase at 0:33?",
        6: "Query 06: [AUDIO LINK REQUIRED] Enter the final terminal override code hidden in Track 6."
    }
};

// Exact Answers
const DIFFICULTY_ANSWERS = {
    "BEGINNER": {
        1: "12",
        2: "tokyo",
        3: "8",
        4: "oxygen",
        5: "100",
        6: "7"
    },
    "DEMI-GOD": {
        1: "secret",
        2: "below",
        3: "13",
        4: "flying buttress",
        5: "third",
        6: "daath"
    },
    "GOD MODE": {
        1: "omega",
        2: "awaken",
        3: "9364",
        4: "3.14",
        5: "lux",
        6: "ascend"
    }
};

let unlockedStages = [1]; 
let completedMilestones = [];

// Initialize game on load
window.onload = () => {
    updateUIDifficulty();
};

function getActiveAnswers() {
    return DIFFICULTY_ANSWERS[LEVELS[currentLevelIndex]];
}

function getActiveQuestions() {
    return QUESTIONS[LEVELS[currentLevelIndex]];
}

function updateUIDifficulty() {
    const badge = document.getElementById("difficultyBadge");
    badge.innerText = `RANK: ${LEVELS[currentLevelIndex]}`;
    
    // Inject the correct questions into the HTML for this difficulty
    const currentQuestions = getActiveQuestions();
    for(let i = 1; i <= 6; i++) {
        document.getElementById(`q-text-${i}`).innerText = currentQuestions[i];
    }
}

function resetGameForNextDifficulty() {
    unlockedStages = [1];
    completedMilestones = [];
    
    // Clear all fields and visually loop back UI states
    for(let i=1; i<=6; i++) {
        document.getElementById(`ans${i}`).value = "";
        document.getElementById(`msg${i}`).style.display = "none";
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
        alert("ACCESS DENIED: Complete preceding tests and real-world milestones first.");
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
        msgEl.innerText = "✓ ACCURACY DETECTED. REAL WORLD MILESTONE UNLOCKED.";
        milestoneEl.classList.add('visible');
    } else {
        msgEl.className = "status-msg error";
        msgEl.innerText = "❌ ZERO COMPREHENSION. SENSORY REJECTION DETECTED.";
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
                switchTab(nextPhase);
            }, 600);
        }
    } else {
        // Reached the final tab (Tab 6) of this difficulty level
        if (currentLevelIndex < LEVELS.length - 1) {
            currentLevelIndex++;
            alert(`TRANSITIONING: Clearance upgraded to ${LEVELS[currentLevelIndex]}. The system resets.`);
            resetGameForNextDifficulty();
        } else {
            alert("GOD MODE MAXIMA RECOGNIZED. INDEPENDENT REALITY ARCHITECT ASCENSION REACHED.");
            document.body.style.backgroundImage = "radial-gradient(circle at center, #d4af37 0%, #000 100%)";
        }
    }
}
