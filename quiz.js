// Quiz Application
class CatQuiz {
    constructor() {
        this.catBreeds = [];
        this.currentQuestion = 0;
        this.userScores = {
            energy_level: 0,
            sociability: 0,
            independence: 0,
            playfulness: 0,
            affection: 0,
            intelligence: 0,
            vocalization: 0,
            adaptability: 0
        };
        this.questions = [
            {
                question: "How would you describe your ideal weekend?",
                answers: [
                    { text: "Exploring new places and trying new activities", traits: { energy_level: 3, playfulness: 3, adaptability: 2 } },
                    { text: "Socializing with friends and family", traits: { sociability: 3, affection: 2, vocalization: 2 } },
                    { text: "Relaxing at home with a good book or movie", traits: { independence: 3, energy_level: -2, playfulness: -1 } },
                    { text: "Working on a personal project or hobby", traits: { intelligence: 3, independence: 2, energy_level: 1 } }
                ]
            },
            {
                question: "In social situations, you tend to:",
                answers: [
                    { text: "Be the center of attention and love meeting new people", traits: { sociability: 3, vocalization: 3, affection: 2 } },
                    { text: "Enjoy conversations with close friends", traits: { sociability: 2, affection: 2, independence: 1 } },
                    { text: "Observe and listen more than talk", traits: { independence: 2, intelligence: 2, vocalization: -2 } },
                    { text: "Prefer to avoid large gatherings", traits: { independence: 3, sociability: -2, vocalization: -1 } }
                ]
            },
            {
                question: "How do you handle change and new situations?",
                answers: [
                    { text: "I love change and thrive in new environments", traits: { adaptability: 3, energy_level: 2, playfulness: 2 } },
                    { text: "I adapt well after some initial adjustment", traits: { adaptability: 2, intelligence: 2 } },
                    { text: "I need time to warm up to changes", traits: { adaptability: -1, independence: 2 } },
                    { text: "I prefer routine and familiar environments", traits: { adaptability: -2, independence: 2, energy_level: -1 } }
                ]
            },
            {
                question: "How do you express your feelings?",
                answers: [
                    { text: "I'm very vocal and expressive about my emotions", traits: { vocalization: 3, sociability: 2, affection: 2 } },
                    { text: "I express myself but in moderate ways", traits: { vocalization: 1, affection: 2 } },
                    { text: "I prefer to show rather than tell", traits: { affection: 2, vocalization: -1, independence: 1 } },
                    { text: "I keep my feelings mostly to myself", traits: { independence: 3, vocalization: -2, sociability: -1 } }
                ]
            },
            {
                question: "What's your energy level throughout the day?",
                answers: [
                    { text: "High energy all day, always on the go", traits: { energy_level: 3, playfulness: 3, sociability: 2 } },
                    { text: "Moderate energy with bursts of activity", traits: { energy_level: 2, playfulness: 2, adaptability: 1 } },
                    { text: "Steady and calm, prefer low-key activities", traits: { energy_level: -1, independence: 2, affection: 1 } },
                    { text: "Low energy, I enjoy peace and quiet", traits: { energy_level: -2, independence: 2, playfulness: -1 } }
                ]
            },
            {
                question: "How important is physical affection to you?",
                answers: [
                    { text: "Very important, I love hugs and cuddles", traits: { affection: 3, sociability: 3, independence: -2 } },
                    { text: "I enjoy it regularly with close people", traits: { affection: 2, sociability: 1 } },
                    { text: "I like it occasionally on my own terms", traits: { affection: 1, independence: 2 } },
                    { text: "I prefer minimal physical contact", traits: { independence: 3, affection: -2, sociability: -1 } }
                ]
            },
            {
                question: "How do you approach problem-solving?",
                answers: [
                    { text: "I analyze thoroughly and think strategically", traits: { intelligence: 3, independence: 2, vocalization: -1 } },
                    { text: "I brainstorm with others for solutions", traits: { intelligence: 2, sociability: 3, vocalization: 2 } },
                    { text: "I try different approaches until something works", traits: { intelligence: 2, adaptability: 2, playfulness: 1 } },
                    { text: "I rely on intuition and past experience", traits: { intelligence: 2, independence: 2, adaptability: 1 } }
                ]
            },
            {
                question: "What's your idea of fun?",
                answers: [
                    { text: "High-energy activities and adventures", traits: { playfulness: 3, energy_level: 3, sociability: 1 } },
                    { text: "Interactive games with friends", traits: { playfulness: 2, sociability: 3, affection: 2 } },
                    { text: "Creative or intellectual pursuits", traits: { intelligence: 3, playfulness: 1, independence: 1 } },
                    { text: "Quiet, relaxing activities", traits: { independence: 2, energy_level: -2, playfulness: -1 } }
                ]
            },
            {
                question: "How do you prefer to spend time with loved ones?",
                answers: [
                    { text: "Constant interaction and shared activities", traits: { sociability: 3, affection: 3, independence: -2 } },
                    { text: "Quality time with good conversation", traits: { sociability: 2, affection: 2, vocalization: 1 } },
                    { text: "Being in the same space but doing our own things", traits: { independence: 2, affection: 1, sociability: 1 } },
                    { text: "I value my alone time more", traits: { independence: 3, sociability: -1, affection: -1 } }
                ]
            },
            {
                question: "How curious are you about your surroundings?",
                answers: [
                    { text: "Extremely curious, I need to explore everything", traits: { intelligence: 3, playfulness: 2, energy_level: 2 } },
                    { text: "Pretty curious, I enjoy discovering new things", traits: { intelligence: 2, playfulness: 2, adaptability: 1 } },
                    { text: "Moderately curious about things that interest me", traits: { intelligence: 2, independence: 1 } },
                    { text: "Not very curious, I'm content with what I know", traits: { independence: 2, adaptability: -1, energy_level: -1 } }
                ]
            },
            {
                question: "How do you react to strangers?",
                answers: [
                    { text: "Friendly and welcoming right away", traits: { sociability: 3, adaptability: 2, affection: 2 } },
                    { text: "Polite but takes time to warm up", traits: { sociability: 1, adaptability: 1, independence: 1 } },
                    { text: "Reserved and cautious initially", traits: { independence: 2, sociability: -1, adaptability: -1 } },
                    { text: "Prefer to avoid interaction with strangers", traits: { independence: 3, sociability: -2, adaptability: -1 } }
                ]
            },
            {
                question: "What's your communication style?",
                answers: [
                    { text: "Very talkative and expressive", traits: { vocalization: 3, sociability: 3, affection: 1 } },
                    { text: "Communicate when necessary or excited", traits: { vocalization: 1, sociability: 1, intelligence: 1 } },
                    { text: "Prefer to communicate through actions", traits: { vocalization: -1, affection: 1, independence: 1 } },
                    { text: "Quiet and reserved", traits: { vocalization: -2, independence: 3, sociability: -1 } }
                ]
            },
            {
                question: "How independent are you?",
                answers: [
                    { text: "Very independent, I prefer doing things alone", traits: { independence: 3, sociability: -2, affection: -1 } },
                    { text: "Fairly independent but enjoy some company", traits: { independence: 2, sociability: 1, adaptability: 1 } },
                    { text: "I like a balance of independence and togetherness", traits: { independence: 1, sociability: 1, affection: 1 } },
                    { text: "I prefer constant companionship", traits: { independence: -2, sociability: 3, affection: 3 } }
                ]
            },
            {
                question: "How playful are you?",
                answers: [
                    { text: "Very playful, I love games and fun activities", traits: { playfulness: 3, energy_level: 3, sociability: 2 } },
                    { text: "Moderately playful, I enjoy fun in moderation", traits: { playfulness: 2, energy_level: 1, adaptability: 1 } },
                    { text: "Somewhat playful, only with certain people or moods", traits: { playfulness: 1, affection: 1, sociability: 1 } },
                    { text: "Not very playful, I prefer serious activities", traits: { playfulness: -1, independence: 2, intelligence: 2 } }
                ]
            },
            {
                question: "How do you handle attention from others?",
                answers: [
                    { text: "I love being the center of attention", traits: { sociability: 3, vocalization: 2, affection: 2 } },
                    { text: "I enjoy attention in small doses", traits: { sociability: 2, affection: 1, independence: 1 } },
                    { text: "I tolerate it but don't seek it out", traits: { independence: 2, sociability: 0, adaptability: 1 } },
                    { text: "I prefer to be left alone", traits: { independence: 3, sociability: -2, affection: -1 } }
                ]
            }
        ];

        this.init();
    }

    async init() {
        await this.loadCatBreeds();
        this.setupEventListeners();
    }

    async loadCatBreeds() {
        try {
            const response = await fetch('cat-breeds.json');
            const data = await response.json();
            this.catBreeds = data.breeds;
        } catch (error) {
            console.error('Error loading cat breeds:', error);
            alert('Error loading cat breeds. Please refresh the page.');
        }
    }

    setupEventListeners() {
        document.getElementById('start-btn').addEventListener('click', () => this.startQuiz());
        document.getElementById('view-history-btn').addEventListener('click', () => this.showHistory());
        document.getElementById('retake-btn').addEventListener('click', () => this.resetQuiz());
        document.getElementById('share-btn').addEventListener('click', () => this.shareResult());
        document.getElementById('back-to-start-btn').addEventListener('click', () => this.showScreen('start-screen'));
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }

    startQuiz() {
        this.currentQuestion = 0;
        this.userScores = {
            energy_level: 0,
            sociability: 0,
            independence: 0,
            playfulness: 0,
            affection: 0,
            intelligence: 0,
            vocalization: 0,
            adaptability: 0
        };
        this.showScreen('quiz-screen');
        this.displayQuestion();
    }

    displayQuestion() {
        const question = this.questions[this.currentQuestion];
        const progress = ((this.currentQuestion + 1) / this.questions.length) * 100;

        document.getElementById('progress-fill').style.width = `${progress}%`;
        document.getElementById('question-number').textContent = `Question ${this.currentQuestion + 1} of ${this.questions.length}`;
        document.getElementById('question-text').textContent = question.question;

        const answersContainer = document.getElementById('answers-container');
        answersContainer.innerHTML = '';

        question.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.className = 'answer-btn';
            button.textContent = answer.text;
            button.addEventListener('click', () => this.selectAnswer(index));
            answersContainer.appendChild(button);
        });
    }

    selectAnswer(answerIndex) {
        const answer = this.questions[this.currentQuestion].answers[answerIndex];

        // Add the answer's trait scores to user's total scores
        for (const [trait, value] of Object.entries(answer.traits)) {
            this.userScores[trait] += value;
        }

        this.currentQuestion++;

        if (this.currentQuestion < this.questions.length) {
            this.displayQuestion();
        } else {
            this.calculateResult();
        }
    }

    calculateResult() {
        // Normalize user scores to 1-10 scale
        const normalizedScores = {};
        const maxPossibleScore = this.questions.length * 3; // Maximum score per trait
        const minPossibleScore = -this.questions.length * 2; // Minimum score per trait

        for (const [trait, score] of Object.entries(this.userScores)) {
            // Map from [minPossibleScore, maxPossibleScore] to [1, 10]
            normalizedScores[trait] = Math.round(
                ((score - minPossibleScore) / (maxPossibleScore - minPossibleScore)) * 9 + 1
            );
            // Ensure values are between 1 and 10
            normalizedScores[trait] = Math.max(1, Math.min(10, normalizedScores[trait]));
        }

        // Find the best matching cat breed
        let bestMatch = null;
        let bestScore = -Infinity;

        this.catBreeds.forEach(breed => {
            let matchScore = 0;
            let totalDifference = 0;

            for (const [trait, userValue] of Object.entries(normalizedScores)) {
                const breedValue = breed.traits[trait];
                const difference = Math.abs(userValue - breedValue);
                totalDifference += difference;

                // Weight certain traits more heavily
                const weight = (trait === 'affection' || trait === 'sociability') ? 1.2 : 1.0;
                matchScore -= difference * weight;
            }

            // Calculate compatibility percentage
            const maxDifference = Object.keys(normalizedScores).length * 9; // Max difference is 9 per trait
            breed.compatibilityScore = Math.round(((maxDifference - totalDifference) / maxDifference) * 100);

            if (matchScore > bestScore) {
                bestScore = matchScore;
                bestMatch = breed;
            }
        });

        this.displayResult(bestMatch, normalizedScores);
        this.saveToHistory(bestMatch);
    }

    displayResult(cat, userTraits) {
        document.getElementById('result-cat-image').src = cat.image;
        document.getElementById('result-cat-image').alt = `${cat.name} cat`;
        document.getElementById('result-cat-name').textContent = cat.name;
        document.getElementById('result-cat-description').textContent = cat.description;
        document.getElementById('compatibility-percentage').textContent = `${cat.compatibilityScore}%`;

        const traitsBars = document.getElementById('traits-bars');
        traitsBars.innerHTML = '';

        const traitNames = {
            energy_level: 'Energy Level',
            sociability: 'Sociability',
            independence: 'Independence',
            playfulness: 'Playfulness',
            affection: 'Affection',
            intelligence: 'Intelligence',
            vocalization: 'Vocalization',
            adaptability: 'Adaptability'
        };

        // Check if any trait has perfect score (10 = 100%)
        let hasPerfectScore = false;

        for (const [trait, value] of Object.entries(cat.traits)) {
            if (value === 10) {
                hasPerfectScore = true;
            }

            const row = document.createElement('div');
            row.className = 'trait-row';

            const label = document.createElement('div');
            label.className = 'trait-label';
            label.textContent = traitNames[trait];

            const barContainer = document.createElement('div');
            barContainer.className = 'trait-bar-container';

            const barFill = document.createElement('div');
            barFill.className = 'trait-bar-fill';
            barFill.style.width = '0%';

            const valueSpan = document.createElement('span');
            valueSpan.className = 'trait-value';
            valueSpan.textContent = value;

            barFill.appendChild(valueSpan);
            barContainer.appendChild(barFill);
            row.appendChild(label);
            row.appendChild(barContainer);
            traitsBars.appendChild(row);

            // Animate the bar
            setTimeout(() => {
                barFill.style.width = `${value * 10}%`;
            }, 100);
        }

        this.showScreen('results-screen');

        // Trigger confetti if any trait has a perfect score
        if (hasPerfectScore && typeof confetti !== 'undefined') {
            setTimeout(() => {
                this.celebrateWithConfetti();
            }, 500);
        }
    }

    celebrateWithConfetti() {
        // Create a fun confetti celebration
        const duration = 3000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        const interval = setInterval(function() {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);

            // Fire confetti from two sides
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
            });
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
            });
        }, 250);
    }

    saveToHistory(cat) {
        const history = this.getHistory();
        const result = {
            catName: cat.name,
            catDescription: cat.description,
            catImage: cat.image,
            compatibilityScore: cat.compatibilityScore,
            date: new Date().toISOString(),
            traits: cat.traits
        };

        history.unshift(result); // Add to beginning of array

        // Keep only last 10 results
        if (history.length > 10) {
            history.pop();
        }

        localStorage.setItem('catQuizHistory', JSON.stringify(history));
    }

    getHistory() {
        const history = localStorage.getItem('catQuizHistory');
        return history ? JSON.parse(history) : [];
    }

    showHistory() {
        const history = this.getHistory();
        const historyList = document.getElementById('history-list');

        if (history.length === 0) {
            historyList.innerHTML = '<div class="no-history">No quiz history yet. Take the quiz to see your results!</div>';
        } else {
            historyList.innerHTML = '';
            history.forEach(result => {
                const item = document.createElement('div');
                item.className = 'history-item';

                const date = new Date(result.date);
                const formattedDate = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();

                item.innerHTML = `
                    <div class="history-item-header">
                        <div class="history-cat-name">${result.catName}</div>
                        <div class="history-date">${formattedDate}</div>
                    </div>
                    <div class="history-score">Match Score: ${result.compatibilityScore}%</div>
                `;

                historyList.appendChild(item);
            });
        }

        this.showScreen('history-screen');
    }

    resetQuiz() {
        this.showScreen('start-screen');
    }

    shareResult() {
        const catName = document.getElementById('result-cat-name').textContent;
        const score = document.getElementById('compatibility-percentage').textContent;
        const text = `I took the "Which Cat Are You?" quiz and I'm a ${catName} with a ${score} match! Find out which cat you are!`;

        if (navigator.share) {
            navigator.share({
                title: 'Which Cat Are You?',
                text: text,
                url: window.location.href
            }).catch(err => console.log('Error sharing:', err));
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(text + ' ' + window.location.href)
                .then(() => alert('Result copied to clipboard!'))
                .catch(err => {
                    console.error('Failed to copy:', err);
                    alert('Share text: ' + text);
                });
        }
    }
}

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new CatQuiz();
});
