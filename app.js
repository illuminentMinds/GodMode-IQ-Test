// Each tab now has its own progression array.
const TAB_QUESTIONS = {
  1: [
    { rank: "BEGINNER", q: "What is 1 + 1?", a: "2" },
    { rank: "BEGINNER", q: "What color is a banana?", a: "yellow" },
    { rank: "BEGINNER", q: "What is 12 x 5?", a: "60" },
    { rank: "BEGINNER", q: "What is 99 plus 1?", a: "100" },
    { rank: "DEMI-GOD", q: "What is the square root of 81?", a: "9" },
    { rank: "DEMI-GOD", q: "Solve for x: 3x - 7 = 14", a: "7" },
    { rank: "DEMI-GOD", q: "What is half of 150?", a: "75" },
    { rank: "DEMI-GOD", q: "What is the next prime number after 7?", a: "11" },
    { rank: "DEMI-GOD", q: "How many sides does a nonagon have?", a: "9" },
    { rank: "GOD MODE", q: "What mathematical term describes a number that cannot be expressed as a fraction of two integers, such as pi?", a: "irrational" },
    { rank: "GOD MODE", q: "What is the only number that cannot be represented in Roman numerals?", a: "zero" },
    { rank: "GOD MODE", q: "What is the sum of the interior angles of an octagon in degrees?", a: "1080" },
    { rank: "GOD MODE", q: "What specific topological shape is structurally equivalent to a single-sided surface with no boundaries, made by twisting a strip?", a: "mobius strip" },
    { rank: "GOD MODE", q: "What mathematical conjecture states that every even integer greater than 2 is the sum of two prime numbers?", a: "goldbach conjecture" },
    { rank: "GOD MODE", q: "What is the derivative of a constant value?", a: "zero" },
    { rank: "GOD MODE", q: "[AUDIO REQUIRED] Type the first word spoken in the song.", a: "tap" }
  ],
  2: [
    { rank: "BEGINNER", q: "What animal says meow?", a: "cat" },
    { rank: "BEGINNER", q: "How many days are in a week?", a: "7" },
    { rank: "BEGINNER", q: "In which country are the ancient pyramids of Giza located?", a: "egypt" },
    { rank: "BEGINNER", q: "Who was the first president of the United States?", a: "george washington" },
    { rank: "DEMI-GOD", q: "Enter the missing sequence: 2, 4, 6, 8, __?", a: "10" },
    { rank: "DEMI-GOD", q: "What year did World War II officially end?", a: "1945" },
    { rank: "DEMI-GOD", q: "Which Roman emperor was famously assassinated on the Ides of March?", a: "julius caesar" },
    { rank: "DEMI-GOD", q: "What was the name of the dynamic British luxury ocean liner that struck an iceberg and tragically sank in 1912?", a: "titanic" },
    { rank: "DEMI-GOD", q: "In which century did the Black Death devastate Europe?", a: "14th" },
    { rank: "GOD MODE", q: "Which ancient Mesopotamian civilization created the Code of Hammurabi, one of the earliest written legal codes?", a: "babylonian" },
    { rank: "GOD MODE", q: "What was the name of the cultural, social, and artistic explosion that took place in New York City's Black community during the 1920s?", a: "harlem renaissance" },
    { rank: "GOD MODE", q: "Who was the prominent female pharaoh of Egypt who wore a ceremonial false beard and ruled for over two decades?", a: "hatshepsut" },
    { rank: "GOD MODE", q: "What specific treaty signed in 1919 brought an official end to World War I but laid the economic groundwork for World War II?", a: "treaty of versailles" },
    { rank: "GOD MODE", q: "What was the name of the series of commercial and cultural trade routes that connected China and the Mediterranean for centuries?", a: "silk road" },
    { rank: "GOD MODE", q: "Which empire was conquered by Spanish conquistador Hernan Cortes in 1821?", a: "aztec empire" },
    { rank: "GOD MODE", q: "[AUDIO REQUIRED] What is the specific item mentioned at 0:15?", a: "gun" }
  ],
  3: [
    { rank: "BEGINNER", q: "What is 10 minus 5?", a: "5" },
    { rank: "BEGINNER", q: "Is water wet? (yes/no)", a: "yes" },
    { rank: "BEGINNER", q: "What muscular organ pumps blood continuously through your entire body?", a: "heart" },
    { rank: "BEGINNER", q: "What fluid does the body release as sweat to cool down during exercise?", a: "water" },
    { rank: "DEMI-GOD", q: "What planet do we live on?", a: "earth" },
    { rank: "DEMI-GOD", q: "What primary male hormone is responsible for changes during puberty like a deeper voice, muscle mass, and organ growth?", a: "testosterone" },
    { rank: "DEMI-GOD", q: "What is the medical term for the dynamic spongy tissue chambers inside the penis that fill with blood to create an erection?", a: "corpora cavernosa" },
    { rank: "DEMI-GOD", q: "What fast-moving microscopic male reproductive cell fertilizes an egg?", a: "sperm" },
    { rank: "DEMI-GOD", q: "What physical state must the body achieve during sleep to maximize nocturnal erections, which naturally maintain tissue health and elasticity?", a: "rem sleep" },
    { rank: "GOD MODE", q: "What is the name of the tight, fibrous band of tissue underneath the head of the penis that connects the foreskin to the shaft?", a: "frenulum" },
    { rank: "GOD MODE", q: "Which walnut-sized gland in the male reproductive system surrounds the urethra and helps produce fluid for semen?", a: "prostate" },
    { rank: "GOD MODE", q: "What specific medical condition involves a painful, persistent erection lasting over four hours that can cause permanent tissue damage if untreated?", a: "priapism" },
    { rank: "GOD MODE", q: "What biochemical compound relaxes smooth muscles and dilates blood vessels to directly trigger an erection?", a: "nitric oxide" },
    { rank: "GOD MODE", q: "What is the formal medical term for the surgical removal of the foreskin from the human penis?", a: "circumcision" },
    { rank: "GOD MODE", q: "What specific, non-surgical traction process utilizes constant, progressive mechanical tension over months to stimulate cellular mitosis and tissue growth in human limbs or organs?", a: "tissue expansion" },
    { rank: "GOD MODE", q: "[AUDIO REQUIRED] Was there a woman in the car?", a: "yes" }
  ],
  4: [
    { rank: "BEGINNER", q: "What shape is a standard tire?", a: "circle" },
    { rank: "BEGINNER", q: "How many legs does a spider have?", a: "8" },
    { rank: "BEGINNER", q: "What is the capital city of France?", a: "paris" },
    { rank: "BEGINNER", q: "What country uses the yen as its currency?", a: "japan" },
    { rank: "DEMI-GOD", q: "If you freeze water, it becomes...", a: "ice" },
    { rank: "DEMI-GOD", q: "Which ocean is the largest by surface area on Earth?", a: "pacific" },
    { rank: "DEMI-GOD", q: "What is the smallest independent country in the world by land area?", a: "vatican city" },
    { rank: "DEMI-GOD", q: "What is the longest river flowing entirely inside the borders of Brazil?", a: "amazon" },
    { rank: "DEMI-GOD", q: "Which line of latitude splits the Earth into Northern and Southern Hemispheres?", a: "equator" },
    { rank: "GOD MODE", q: "What massive, hot desert covers most of northern Africa?", a: "sahara" },
    { rank: "GOD MODE", q: "Which river flows through northeastern Africa and is widely known as the longest river in the world?", a: "nile" },
    { rank: "GOD MODE", q: "What landlocked Asian country is known historically as the Land of the White Elephants?", a: "laos" },
    { rank: "GOD MODE", q: "What is the capital city of Australia?", a: "canberra" },
    { rank: "GOD MODE", q: "Which European country is geographically shaped like a boot jutting into the Mediterranean Sea?", a: "italy" },
    { rank: "GOD MODE", q: "What island nation off the southeast coast of Africa is famous for its unique lemur populations and biodiversity?", a: "madagascar" },
    { rank: "GOD MODE", q: "[AUDIO REQUIRED] Tell us the three main colors you hear between 2:07-2:12. (Use word, word, word format for this question)", a: "purple, blue, orange" }
  ],
  5: [
    { rank: "BEGINNER", q: "What is the opposite of hot?", a: "cold" },
    { rank: "BEGINNER", q: "How many fingers are on a typical human hand?", a: "5" },
    { rank: "BEGINNER", q: "Who wrote the iconic tragedy play Romeo and Juliet?", a: "william shakespeare" },
    { rank: "BEGINNER", q: "What color is the gemstone emerald?", a: "green" },
    { rank: "DEMI-GOD", q: "What is a baby dog called?", a: "puppy" },
    { rank: "DEMI-GOD", q: "What is the name of the fictional wizarding school Harry Potter attends?", a: "hogwarts" },
    { rank: "DEMI-GOD", q: "Complete the ancient financial proverb: A penny saved is a penny ______.", a: "earned" },
    { rank: "DEMI-GOD", q: "What powerful asset class involves owning physical property or land to generate passive rental income?", a: "real estate" },
    { rank: "DEMI-GOD", q: "What fundamental financial mechanism lets your interest earn interest, supercharging your money over long periods of time?", a: "compound interest" },
    { rank: "GOD MODE", q: "What specific type of private, elite investment fund pools capital from institutional investors to acquire and restructure unlisted companies?", a: "private equity" },
    { rank: "GOD MODE", q: "What dynamic financial document or system legally shields high-net-worth assets from heavy taxation, commonly utilizing off-shore accounts or specialized structures?", a: "trust" },
    { rank: "GOD MODE", q: "What terminology refers to generating incoming cash flow with zero active, daily labor required after the initial setup?", a: "passive income" },
    { rank: "GOD MODE", q: "What type of highly private, decentralized financial assets exist purely on a cryptographically secured blockchain?", a: "cryptocurrency" },
    { rank: "GOD MODE", q: "What legal entity allows wealthy operators to separate personal liabilities from their business debts and taxes?", a: "corporation" },
    { rank: "GOD MODE", q: "What strategy involves spreading capital across entirely separate, uncorrelated asset classes to minimize total financial downside?", a: "diversification" },
    { rank: "GOD MODE", q: "[AUDIO REQUIRED] Who shined the spotlight?", a: "fbi" }
  ],
  6: [
    { rank: "BEGINNER", q: "What letter comes after A?", a: "b" },
    { rank: "BEGINNER", q: "What is 100 + 0?", a: "100" },
    { rank: "BEGINNER", q: "What is the linguistic term for a word that means the direct opposite of another?", a: "antonym" },
    { rank: "BEGINNER", q: "What punctuation mark is used at the very end of a direct question?", a: "question mark" },
    { rank: "DEMI-GOD", q: "What do bees make?", a: "honey" },
    { rank: "DEMI-GOD", q: "How many letters make up the standard English alphabet?", a: "26" },
    { rank: "DEMI-GOD", q: "What is a word or phrase called that reads exactly the same backward as forward?", a: "palindrome" },
    { rank: "DEMI-GOD", q: "What basic part of speech expresses an action, occurrence, or state of being?", a: "verb" },
    { rank: "DEMI-GOD", q: "What popular word puzzle game acquired by the New York Times challenges players to guess a 5-letter word in 6 tries?", a: "wordle" },
    { rank: "GOD MODE", q: "What early communication system uses a sequence of short and long signals called dots and dashes?", a: "morse code" },
    { rank: "GOD MODE", q: "What language system uses a combination of zeroes and ones to represent computer processor instructions?", a: "binary" },
    { rank: "GOD MODE", q: "What historic slab of granodiorite discovered in 1799 provided the vital key to deciphering ancient Egyptian hieroglyphs?", a: "rosetta stone" },
    { rank: "GOD MODE", q: "What specific cipher uses a fixed layout shift system to swap out individual letters, famously named after a Roman dictator?", a: "caesar cipher" },
    { rank: "GOD MODE", q: "What complex electromechanical rotor cipher machine was used by the German military during World War II to encrypt secret tactical messages?", a: "enigma machine" },
    { rank: "GOD MODE", q: "What is the linguistic term for an expression or phrase whose meaning cannot be deduced from the literal definitions of its words?", a: "idiom" },
    { rank: "GOD MODE", q: "[AUDIO REQUIRED] Who was running with you after getting out of the vehicle. (Use the name given to them in the song)", a: "piggy" }
  ]
};

// Default states
let currentQuestionIndex = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
let unlockedStages = [1];
let completedMilestones = [];

// Load saved data from localStorage on startup
function loadGameProgress() {
  const savedIndex = localStorage.getItem('illuminent_qIndex');
  const savedStages = localStorage.getItem('illuminent_unlocked');
  const savedMilestones = localStorage.getItem('illuminent_milestones');

  if (savedIndex) {
    try { currentQuestionIndex = JSON.parse(savedIndex); } catch (e) {}
  }
  if (savedStages) {
    try { unlockedStages = JSON.parse(savedStages); } catch (e) {}
  }
  if (savedMilestones) {
    try { completedMilestones = JSON.parse(savedMilestones); } catch (e) {}
  }
}

// Save progress to localStorage
function saveGameProgress() {
  localStorage.setItem('illuminent_qIndex', JSON.stringify(currentQuestionIndex));
  localStorage.setItem('illuminent_unlocked', JSON.stringify(unlockedStages));
  localStorage.setItem('illuminent_milestones', JSON.stringify(completedMilestones));
}

// Initialize game on load
window.onload = () => {
  loadGameProgress();

  // Apply unlocked tab classes visually based on saved data
  unlockedStages.forEach(stage => {
    const tabBtn = document.getElementById(`btn-tab${stage}`);
    if (tabBtn) tabBtn.classList.add('unlocked');
  });

  for (let i = 1; i <= 6; i++) {
    const questionArray = TAB_QUESTIONS[i];
    const qIndex = currentQuestionIndex[i];

    // If they already finished all questions for this tab, hide quiz and show milestone
    if (qIndex >= questionArray.length) {
      const quizBox = document.getElementById(`quizBox${i}`);
      const milestoneEl = document.getElementById(`mile${i}`);
      if (quizBox) quizBox.style.display = "none";
      if (milestoneEl) milestoneEl.classList.add('visible');

      // If milestone was also completed, mark button complete
      if (completedMilestones.includes(i)) {
        const btn = document.getElementById(`mileBtn${i}`);
        if (btn) {
          btn.innerText = "MILESTONE OPERATION VERIFIED ✓";
          btn.classList.add('complete');
        }
      }
    } else {
      loadQuestionData(i);
    }
  }
};

function loadQuestionData(tabNumber) {
  const qIndex = currentQuestionIndex[tabNumber];
  const questionArray = TAB_QUESTIONS[tabNumber];
  
  if (qIndex < questionArray.length) {
    const currentData = questionArray[qIndex];
    
    const rankEl = document.getElementById(`rankBadge${tabNumber}`);
    const qTextEl = document.getElementById(`q-text-${tabNumber}`);
    const ansEl = document.getElementById(`ans${tabNumber}`);
    
    if (rankEl) rankEl.innerText = `RANK: ${currentData.rank}`;
    if (qTextEl) qTextEl.innerText = currentData.q;
    if (ansEl) ansEl.value = "";
  }
}

function switchTab(phaseNumber) {
  if (!unlockedStages.includes(phaseNumber)) {
    alert("ACCESS DENIED: Complete preceding tests and real-world milestones first.");
    return;
  }
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  const targetTab = document.getElementById(`btn-tab${phaseNumber}`);
  if (targetTab) targetTab.classList.add('active');
  
  document.querySelectorAll('.panel').forEach(panel => panel.classList.remove('active'));
  const targetPanel = document.getElementById(`panel${phaseNumber}`);
  if (targetPanel) targetPanel.classList.add('active');
}

function checkAnswer(tabNumber) {
  const ansInput = document.getElementById(`ans${tabNumber}`);
  if (!ansInput) return;
  
  const inputVal = ansInput.value.trim().toLowerCase();
  const qIndex = currentQuestionIndex[tabNumber];
  const questionArray = TAB_QUESTIONS[tabNumber];
  const currentData = questionArray[qIndex];
  const msgEl = document.getElementById(`msg${tabNumber}`);
  
  if (inputVal === currentData.a) {
    if (msgEl) {
      msgEl.className = "status-msg success";
      msgEl.style.display = "block";
      msgEl.innerText = "✓ ACCURACY DETECTED. PREPARING NEXT QUERY...";
    }
    
    currentQuestionIndex[tabNumber]++;
    saveGameProgress(); // Save state immediately
    
    setTimeout(() => {
      if (msgEl) msgEl.style.display = "none";
      if (currentQuestionIndex[tabNumber] < questionArray.length) {
        loadQuestionData(tabNumber);
      } else {
        const quizBox = document.getElementById(`quizBox${tabNumber}`);
        const milestoneEl = document.getElementById(`mile${tabNumber}`);
        if (quizBox) quizBox.style.display = "none";
        if (milestoneEl) milestoneEl.classList.add('visible');
      }
    }, 1200);
  } else {
    if (msgEl) {
      msgEl.className = "status-msg error";
      msgEl.style.display = "block";
      msgEl.innerText = "❌ ZERO COMPREHENSION. SENSORY REJECTION DETECTED.";
    }
  }
}

function completeMilestone(phaseNumber) {
  const btn = document.getElementById(`mileBtn${phaseNumber}`);
  if (!completedMilestones.includes(phaseNumber)) {
    completedMilestones.push(phaseNumber);
  }
  if (btn) {
    btn.innerText = "MILESTONE OPERATION VERIFIED ✓";
    btn.classList.add('complete');
  }

  saveGameProgress(); // Save state immediately
  
  const nextPhase = phaseNumber + 1;
  if (TAB_QUESTIONS[nextPhase]) {
    if (!unlockedStages.includes(nextPhase)) {
      unlockedStages.push(nextPhase);
      saveGameProgress(); // Save updated unlocked stages
      
      const nextTabBtn = document.getElementById(`btn-tab${nextPhase}`);
      if (nextTabBtn) nextTabBtn.classList.add('unlocked');
      
      setTimeout(() => {
        switchTab(nextPhase);
      }, 600);
    }
  } else {
    alert("GOD MODE MAXIMA RECOGNIZED. INDEPENDENT REALITY ARCHITECT ASCENSION REACHED.");
    document.body.style.backgroundImage = "radial-gradient(circle at center, #d4af37 0%, #000 100%)";
  }
}
