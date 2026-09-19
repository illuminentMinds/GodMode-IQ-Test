// Each tab now has its own progression array. 
// You can add as many questions as you want inside these brackets to make the gauntlet longer.
const TAB_QUESTIONS = {
    1: [
        { rank: "BEGINNER", q: "What is 1 + 1?", a: "2" },
        { rank: "BEGINNER", q: "What color is a banana?", a: "yellow" },
        { rank: "DEMI-GOD", q: "What is the square root of 81?", a: "9" },
        { rank: "GOD MODE", q: "[AUDIO REQUIRED] Type the first word spoken in the song.", a: "tap" }
    ],
    2: [
        { rank: "BEGINNER", q: "What animal says meow?", a: "cat" },
        { rank: "BEGINNER", q: "How many days are in a week?", a: "7" },
        { rank: "DEMI-GOD", q: "Enter the missing sequence: 2, 4, 6, 8, __?", a: "10" },
        { rank: "GOD MODE", q: "[AUDIO REQUIRED] What is the specific item mentioned at 0:15?", a: "gun" }
    ],
    3: [
        { rank: "BEGINNER", q: "What is 10 minus 5?", a: "5" },
        { rank: "BEGINNER", q: "Is water wet? (yes/no)", a: "yes" },
        { rank: "DEMI-GOD", q: "What planet do we live on?", a: "earth" },
        { rank: "GOD MODE", q: "[AUDIO REQUIRED] Was there a woman in the car?", a: "yes" }
    ],
    4: [
        { rank: "BEGINNER", q: "What shape is a standard tire?", a: "circle" },
        { rank: "BEGINNER", q: "How many legs does a spider have?", a: "8" },
        { rank: "DEMI-GOD", q: "If you freeze water, it becomes...", a: "ice" },
        { rank: "GOD MODE", q: "[AUDIO REQUIRED] Tell us the three main colors you hear between 2:07-2:12. (Use word, word, word format for this question)", a: "purple, blue, orange" }
    ],
    5: [
        { rank: "BEGINNER", q: "What is the opposite of hot?", a: "cold" },
        { rank: "BEGINNER", q: "How many fingers are on a typical human hand?", a: "5" },
        { rank: "DEMI-GOD", q: "What is a baby dog called?", a: "puppy" },
        { rank: "GOD MODE", q: "[AUDIO REQUIRED] Who shined the spotlight?", a: "fbi" }
    ],
    6: [
        { rank: "BEGINNER", q: "What letter comes after A?", a: "b" },
        { rank: "BEGINNER", q: "What is 100 + 0?", a: "100" },
        { rank: "DEMI-GOD", q: "What do bees make?", a: "honey" },
        { rank: "GOD MODE", q: "[AUDIO REQUIRED] Who was running with you after getting out of the vehicle. (Use the name given to them in the song)", a: "piggy" }
    ]
};

// Tracks which question index the user is currently on for each tab (Starts at 0 for all)
let currentQuestionIndex = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
let unlockedStages = [1]; 
let completedMilestones = [];

// Initialize game on load
window.onload = () => {
    for(let i = 1; i <= 6; i++) {
        loadQuestionData(i);
    }
};

function loadQuestionData(tabNumber) {
    const qIndex = currentQuestionIndex[tabNumber];
    const questionArray = TAB_QUESTIONS[tabNumber];
    
    // If they haven't finished all questions yet
    if (qIndex < questionArray.length) {
        const currentData = questionArray[qIndex];
        document.getElementById(`rankBadge${tabNumber}`).innerText = `RANK: ${currentData.rank}`;
        document.getElementById(`q-text-${tabNumber}`).innerText = currentData.q;
        document.getElementById(`ans${tabNumber}`).value = ""; // Clear box
    }
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

function checkAnswer(tabNumber) {
    const inputVal = document.getElementById(`ans${tabNumber}`).value.trim().toLowerCase();
    const qIndex = currentQuestionIndex[tabNumber];
    const questionArray = TAB_QUESTIONS[tabNumber];
    const currentData = questionArray[qIndex];
    const msgEl = document.getElementById(`msg${tabNumber}`);

    if (inputVal === currentData.a) {
        msgEl.className = "status-msg success";
        msgEl.innerText = "✓ ACCURACY DETECTED. PREPARING NEXT QUERY...";
        
        // Progress to next question
        currentQuestionIndex[tabNumber]++;
        
        setTimeout(() => {
            msgEl.style.display = "none";
            if (currentQuestionIndex[tabNumber] < questionArray.length) {
                // Load next question
                loadQuestionData(tabNumber);
            } else {
                // Finished all questions for this tab! Show Milestone.
                document.getElementById(`quizBox${tabNumber}`).style.display = "none";
                const milestoneEl = document.getElementById(`mile${tabNumber}`);
                milestoneEl.classList.add('visible');
            }
        }, 1200); // Wait a second so they see the success message

    } else {
        msgEl.className = "status-msg error";
        msgEl.style.display = "block";
        msgEl.innerText = "❌ ZERO COMPREHENSION. SENSORY REJECTION DETECTED.";
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

    if (TAB_QUESTIONS[nextPhase]) {
        // Unlock next tab 
        if (!unlockedStages.includes(nextPhase)) {
            unlockedStages.push(nextPhase);
            const nextTabBtn = document.getElementById(`btn-tab${nextPhase}`);
            nextTabBtn.classList.add('unlocked');
            
            setTimeout(() => {
                switchTab(nextPhase);
            }, 600);
        }
    } else {
        // Beaten the entire game
        alert("GOD MODE MAXIMA RECOGNIZED. INDEPENDENT REALITY ARCHITECT ASCENSION REACHED.");
        document.body.style.backgroundImage = "radial-gradient(circle at center, #d4af37 0%, #000 100%)";
    }
}
