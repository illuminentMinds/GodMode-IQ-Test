// LEVELS OF INITIATION
const LEVELS = ["INITIATE", "ADEPT", "ILLUMINATED"];
let currentLevelIndex = 0;

// Dynamic Questions to match the difficulty
const QUESTIONS = {
    "INITIATE": {
        1: "Query 01: Enter the first 4 digits of the Golden Ratio (Phi).",
        2: "Query 02: At what numerical temperature do Celsius and Fahrenheit intersect?",
        3: "Query 03: What is the atomic number of the element that forms the basis of all known biological life?",
        4: "Query 04: If you face True North, what is the exact azimuth degree of True East?",
        5: "Query 05: What is the most abundant atmospheric gas on Earth?",
        6: "Query 06: How many faces exist on a standard Icosahedron?"
    },
    "ADEPT": {
        1: "Query 01: Solve the Cipher (Shift 3): 'VHFUHW'",
        2: "Query 02: Name the hermetic principle stating 'As above, so...'",
        3: "Query 03: Enter the missing sequence: 1, 1, 2, 3, 5, 8, __?",
        4: "Query 04: What architectural structure distributes weight outward in Gothic cathedrals?",
        5: "Query 05: The Pineal gland is commonly referred to as the '____ Eye'.",
        6: "Query 06: Who guards the threshold of the abyss in the Kabbalistic Tree of Life?"
    },
    "ILLUMINATED": {
        1: "Query 01: [AUDIO LINK] Reverse the audio frequency peak mentioned in Track 1.",
        2: "Query 02: [AUDIO LINK] What is the hidden binaural beat frequency targeting the pineal gland in Track 2?",
        3: "Query 03: [AUDIO LINK] Transcribe the whispered Latin phrase at 0:33 in Track 3.",
        4: "Query 04: [AUDIO LINK] Calculate the exact duration of silence between the second and third tone (Track 4).",
        5: "Query 05: [AUDIO LINK] Identify the 4-digit prime number sequence embedded in the bassline (Track 5).",
        6: "Query 06: [AUDIO LINK] Enter the final terminal override code hidden in Track 6."
    }
};

// Exact Answers
const DIFFICULTY_ANSWERS = {
    "INITIATE": {
        1: "1.618",
        2: "-40",
        3: "6",
        4: "90",
        5: "nitrogen",
        6: "20"
    },
    "ADEPT": {
        1: "secret",
        2: "below",
        3: "13",
        4: "flying buttress",
        5: "third",
        6: "daath"
    },
    "ILLUMINATED": {
        1: "omega",
        2: "936hz",
        3: "lux in tenebris",
        4: "3.14",
        5: "2357",
        6: "apotheosis"
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
        mBtn.innerText = i === 6 ? "ASCEND STAGE" : "CONFIRM COMPLETION";

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
        alert("ACCESS DENIED: Complete preceding protocols before advancing.");
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
        msgEl.innerText = "ACCESS GRANTED. NEURAL LINK ESTABLISHED.";
        milestoneEl.classList.add('visible');
    } else {
        msgEl.className = "status-msg error";
        msgEl.innerText = "INCORRECT INPUT. SENSORY REJECTION DETECTED.";
        milestoneEl.classList.remove('visible');
    }
}

function completeMilestone(phaseNumber) {
    const btn = document.getElementById(`mileBtn${phaseNumber}`);
    
    if (!completedMilestones.includes(phaseNumber)) {
        completedMilestones.push(phaseNumber);
    }
    
    btn.innerText = "OPERATION VERIFIED ✓";
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
            alert(`SYSTEM OVERRIDE: Clearance upgraded to ${LEVELS[currentLevelIndex]}. The matrix resets.`);
            resetGameForNextDifficulty();
        } else {
            alert("TRANSCENDENCE ACHIEVED. WELCOME TO THE ARCHITECT PROTOCOL.");
            document.body.style.backgroundImage = "radial-gradient(circle at center, #d4af37 0%, #000 100%)";
        }
    }
}
