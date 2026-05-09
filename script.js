function createSceneImage(scene) {
    const scenes = {
        cooking: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900">
                <defs>
                    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#7f88c9"/>
                        <stop offset="45%" stop-color="#f5bf8b"/>
                        <stop offset="100%" stop-color="#f7e9cd"/>
                    </linearGradient>
                    <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#9eb4a6"/>
                        <stop offset="100%" stop-color="#6f8a7f"/>
                    </linearGradient>
                </defs>
                <rect width="1200" height="900" fill="url(#bg)"/>
                <rect x="430" y="90" width="330" height="320" rx="18" fill="#f7f0e7"/>
                <rect x="455" y="115" width="280" height="270" rx="12" fill="#5e74c8"/>
                <circle cx="688" cy="164" r="26" fill="#ffe8aa"/>
                <rect x="0" y="640" width="1200" height="260" fill="url(#floor)"/>
                <rect x="0" y="520" width="280" height="150" fill="#f0d1a8"/>
                <rect x="920" y="430" width="210" height="260" fill="#f4d9b4"/>
                <rect x="980" y="210" width="160" height="20" rx="10" fill="#9e6644"/>
                <rect x="970" y="360" width="170" height="20" rx="10" fill="#9e6644"/>
                <ellipse cx="330" cy="665" rx="180" ry="36" fill="#32444d"/>
                <rect x="150" y="645" width="350" height="100" rx="18" fill="#f2efe9"/>
                <rect x="245" y="585" width="170" height="90" rx="25" fill="#4d556a"/>
                <rect x="220" y="612" width="22" height="24" rx="8" fill="#1d2029"/>
                <rect x="418" y="612" width="22" height="24" rx="8" fill="#1d2029"/>
                <ellipse cx="330" cy="658" rx="96" ry="24" fill="#74b4df"/>
                <path d="M310 565c-25-35-18-95 16-126 38-35 97-33 125 4 30 39 24 98-16 127-34 26-95 23-125-5Z" fill="#ef7f3a"/>
                <circle cx="397" cy="430" r="54" fill="#ef7f3a"/>
                <circle cx="395" cy="420" r="44" fill="#ffd1bb"/>
                <path d="M360 423c19-38 70-63 105-24-6-50-69-77-105-24Z" fill="#db5923"/>
                <rect x="345" y="467" width="132" height="214" rx="28" fill="#fff5ea"/>
                <path d="M362 500c43 12 90 13 120 0v168H362Z" fill="#fff5ea"/>
                <circle cx="795" cy="640" r="64" fill="#ffd1bb"/>
                <path d="M735 612c24-39 83-53 123-16 12 11 20 25 23 41-55 14-100 13-146-25Z" fill="#6d3c34"/>
                <rect x="720" y="685" width="150" height="140" rx="34" fill="#f2c97a"/>
                <path d="M694 762h185l-18 76H712Z" fill="#8e6638"/>
                <ellipse cx="804" cy="758" rx="82" ry="22" fill="#6d9a43"/>
                <rect x="570" y="484" width="16" height="172" rx="8" fill="#8e6638" transform="rotate(14 578 570)"/>
                <ellipse cx="566" cy="516" rx="30" ry="18" fill="#b77748" transform="rotate(18 566 516)"/>
                <path d="M260 570c12-48 57-65 88-56 22 6 39 22 47 44-49 12-92 16-135 12Z" fill="#f7b25c"/>
                <circle cx="300" cy="570" r="9" fill="#7db657"/>
                <circle cx="334" cy="564" r="10" fill="#e96446"/>
                <circle cx="358" cy="572" r="9" fill="#5db0e5"/>
                <path d="M230 468c-20-28-14-66 10-92 4 30 25 36 30 66 2 13-16 35-40 26Z" fill="#ffffff" fill-opacity="0.58"/>
                <path d="M275 438c-18-26-13-62 8-86 3 28 22 34 27 62 3 13-13 33-35 24Z" fill="#ffffff" fill-opacity="0.42"/>
            </svg>
        `,
        father: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900">
                <defs>
                    <linearGradient id="wall" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#b6d6ef"/>
                        <stop offset="100%" stop-color="#eef4fb"/>
                    </linearGradient>
                </defs>
                <rect width="1200" height="900" fill="url(#wall)"/>
                <rect y="640" width="1200" height="260" fill="#dfd6c4"/>
                <rect x="100" y="120" width="250" height="170" rx="18" fill="#f9fbfe"/>
                <rect x="126" y="146" width="198" height="118" rx="12" fill="#9fd1ff"/>
                <rect x="855" y="120" width="180" height="220" rx="18" fill="#8b5e45"/>
                <rect x="100" y="470" width="1000" height="170" rx="85" fill="#6884a6"/>
                <rect x="148" y="514" width="916" height="106" rx="53" fill="#7f9fc4"/>
                <rect x="220" y="385" width="180" height="110" rx="48" fill="#f6c44f"/>
                <rect x="780" y="395" width="180" height="110" rx="48" fill="#f6c44f"/>
                <ellipse cx="600" cy="634" rx="320" ry="36" fill="#50657b" fill-opacity="0.3"/>
                <circle cx="512" cy="335" r="64" fill="#ffd5bf"/>
                <path d="M455 320c9-52 62-87 111-64 24 11 41 32 45 60-53 10-104 11-156 4Z" fill="#473a3a"/>
                <rect x="445" y="392" width="230" height="150" rx="52" fill="#d95e5e"/>
                <rect x="540" y="430" width="180" height="36" rx="18" fill="#ffd08a" transform="rotate(9 630 448)"/>
                <rect x="696" y="438" width="132" height="82" rx="14" fill="#2d3444" transform="rotate(12 762 479)"/>
                <rect x="430" y="525" width="174" height="42" rx="21" fill="#33465e" transform="rotate(8 517 546)"/>
                <rect x="614" y="542" width="170" height="42" rx="21" fill="#33465e" transform="rotate(-10 699 563)"/>
                <rect x="780" y="452" width="94" height="62" rx="10" fill="#1a202d"/>
                <rect x="787" y="460" width="80" height="48" rx="8" fill="#81b5ff"/>
                <circle cx="120" cy="733" r="52" fill="#9dbf79"/>
                <rect x="98" y="685" width="44" height="90" rx="14" fill="#c29a6e"/>
            </svg>
        `,
        dishes: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900">
                <rect width="1200" height="900" fill="#f7ead8"/>
                <rect x="0" y="610" width="1200" height="290" fill="#e5d2b8"/>
                <rect x="0" y="150" width="1200" height="460" fill="#fff8ee"/>
                <rect x="420" y="90" width="250" height="250" rx="18" fill="#f6f2df"/>
                <rect x="448" y="118" width="194" height="194" rx="12" fill="#d0ecff"/>
                <rect x="820" y="120" width="250" height="18" rx="9" fill="#9e6644"/>
                <rect x="130" y="430" width="930" height="230" rx="34" fill="#f1ddc2"/>
                <rect x="470" y="505" width="290" height="140" rx="24" fill="#6c7a8c"/>
                <rect x="508" y="525" width="214" height="100" rx="16" fill="#4e5766"/>
                <path d="M616 492c0-27 18-48 48-48s48 21 48 48v28h-28v-28c0-13-8-22-20-22s-20 9-20 22v28h-28Z" fill="#92a0ad"/>
                <circle cx="735" cy="340" r="64" fill="#ffd6c2"/>
                <path d="M678 318c20-46 88-68 127-20-6-58-85-84-127-20Z" fill="#7b4d35"/>
                <rect x="664" y="393" width="150" height="210" rx="36" fill="#f5a0b1"/>
                <rect x="606" y="445" width="80" height="160" rx="32" fill="#f0c76c"/>
                <rect x="790" y="462" width="50" height="170" rx="24" fill="#ffd6c2" transform="rotate(-14 815 547)"/>
                <rect x="660" y="488" width="48" height="156" rx="24" fill="#ffd6c2" transform="rotate(16 684 566)"/>
                <circle cx="630" cy="282" r="16" fill="#f58ca4"/>
                <rect x="180" y="430" width="176" height="102" rx="18" fill="#aac24d"/>
                <ellipse cx="248" cy="446" rx="56" ry="18" fill="#ffffff"/>
                <ellipse cx="301" cy="431" rx="38" ry="12" fill="#ffffff"/>
                <ellipse cx="386" cy="596" rx="54" ry="18" fill="#ffffff"/>
                <ellipse cx="855" cy="620" rx="64" ry="18" fill="#ffffff"/>
                <ellipse cx="532" cy="604" rx="86" ry="26" fill="#d8eefc"/>
                <circle cx="600" cy="575" r="22" fill="#ffffff"/>
                <circle cx="556" cy="554" r="14" fill="#ffffff"/>
                <circle cx="648" cy="548" r="12" fill="#ffffff"/>
            </svg>
        `,
        toys: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900">
                <rect width="1200" height="900" fill="#f7efe4"/>
                <rect y="640" width="1200" height="260" fill="#efd9b6"/>
                <rect x="120" y="120" width="240" height="200" rx="20" fill="#d7efff"/>
                <rect x="820" y="120" width="260" height="180" rx="20" fill="#fff4d9"/>
                <rect x="170" y="620" width="860" height="40" rx="20" fill="#d6b08f"/>
                <circle cx="430" cy="370" r="58" fill="#ffd8c3"/>
                <path d="M378 350c18-42 81-56 114-15-5-52-75-71-114-15Z" fill="#4e3b35"/>
                <rect x="365" y="425" width="140" height="180" rx="36" fill="#6ac0ea"/>
                <rect x="330" y="492" width="60" height="138" rx="28" fill="#ffd8c3" transform="rotate(18 360 561)"/>
                <rect x="482" y="495" width="60" height="130" rx="28" fill="#ffd8c3" transform="rotate(-28 512 560)"/>
                <circle cx="735" cy="395" r="56" fill="#ffd8c3"/>
                <path d="M687 378c16-40 72-57 108-18-5-50-68-67-108-18Z" fill="#7a553e"/>
                <rect x="670" y="448" width="136" height="170" rx="34" fill="#f6bf5b"/>
                <rect x="635" y="516" width="54" height="128" rx="26" fill="#ffd8c3" transform="rotate(20 662 580)"/>
                <rect x="782" y="512" width="54" height="132" rx="26" fill="#ffd8c3" transform="rotate(-30 809 578)"/>
                <rect x="522" y="558" width="180" height="70" rx="18" fill="#ef6d6d"/>
                <circle cx="556" cy="628" r="22" fill="#33465e"/>
                <circle cx="670" cy="628" r="22" fill="#33465e"/>
                <rect x="708" y="562" width="118" height="26" rx="13" fill="#77b55f"/>
                <rect x="754" y="520" width="26" height="118" rx="13" fill="#77b55f"/>
                <rect x="842" y="560" width="84" height="84" rx="16" fill="#6f89e3"/>
                <circle cx="884" cy="602" r="18" fill="#ffffff"/>
            </svg>
        `,
        garden: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900">
                <defs>
                    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#f8efb8"/>
                        <stop offset="100%" stop-color="#f9f6e9"/>
                    </linearGradient>
                </defs>
                <rect width="1200" height="900" fill="url(#sky)"/>
                <rect y="620" width="1200" height="280" fill="#dfe9b7"/>
                <ellipse cx="600" cy="690" rx="320" ry="120" fill="#c9de97"/>
                <circle cx="600" cy="330" r="70" fill="#ffdccc"/>
                <path d="M540 298c18-44 100-64 138-10-1-45-29-84-85-89-39-3-69 26-53 99Z" fill="#e0b45d"/>
                <ellipse cx="600" cy="284" rx="140" ry="42" fill="#e0b45d"/>
                <rect x="524" y="390" width="152" height="236" rx="42" fill="#f4f2eb"/>
                <rect x="540" y="366" width="120" height="68" rx="24" fill="#9fb7d3"/>
                <rect x="495" y="478" width="60" height="180" rx="28" fill="#ffdccc" transform="rotate(16 525 568)"/>
                <rect x="646" y="470" width="60" height="176" rx="28" fill="#ffdccc" transform="rotate(-26 676 558)"/>
                <rect x="690" y="505" width="120" height="26" rx="13" fill="#8a6741" transform="rotate(16 750 518)"/>
                <circle cx="807" cy="537" r="26" fill="#8a6741"/>
                <path d="M786 548c35 28 58 62 66 100" stroke="#b9d678" stroke-width="10" stroke-linecap="round"/>
                <circle cx="244" cy="238" r="120" fill="#9abb72"/>
                <circle cx="948" cy="222" r="124" fill="#9abb72"/>
                <rect x="164" y="218" width="26" height="250" rx="13" fill="#7b5c43"/>
                <rect x="1018" y="222" width="26" height="250" rx="13" fill="#7b5c43"/>
                <circle cx="330" cy="650" r="34" fill="#f8b0bf"/>
                <circle cx="402" cy="596" r="26" fill="#ffffff"/>
                <circle cx="826" cy="674" r="42" fill="#f19ac2"/>
                <circle cx="902" cy="610" r="20" fill="#ffd96f"/>
                <circle cx="708" cy="712" r="18" fill="#f6c37e"/>
                <circle cx="458" cy="714" r="24" fill="#f7d76e"/>
            </svg>
        `
    };

    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(scenes[scene])}`;
}

const categories = [
    {
        title: "Отбасы",
        emoji: "👨‍👩‍👧",
        tasks: [
            {
                sentence: "Анам кешке дәмді сорпа пісірді",
                prompt: "Суретке қарап сөйлем құрастыр",
                image: "images/mother_soup.jpg.jpeg"
            },
            {
                sentence: "Әкем диванда теледидар көріп отыр",
                prompt: "Суретке қарап сөйлем құрастыр",
                image: "images/father_tv.jpg.jpeg"
            },
            {
                sentence: "Әпкем ас үйде ыдыс жуып тұр",
                prompt: "Суретке қарап сөйлем құрастыр",
                image: "images/sister_kitchen.jpg.jpeg"
            },
            {
                sentence: "Інім екеуміз ойыншықпен ойнадық",
                prompt: "Суретке қарап сөйлем құрастыр",
                image: "images/brother_toys.jpg.jpeg"
            },
            {
                sentence: "Әжем гүлге су құйып жүр",
                prompt: "Суретке қарап сөйлем құрастыр",
                image: "images/grandma.jpg.jpeg"
            }
        ]
    },
    {
        title: "Үй жануарлары",
        emoji: "🐶",
        tasks: [
            {
                sentence: "Менің үйде сүйікті мысығым бар",
                prompt: "Суретке қарап сөйлем құрастыр",
                image: "images/cat.jpg.jpeg"
            },
            {
                sentence: "Айдостың күшігі өте сүйкімді",
                prompt: "Суретке қарап сөйлем құрастыр",
                image: "images/puppy.jpg.jpeg"
            },
            {
                sentence: "Жылқының төлін құлыншақ деп атаймыз",
                prompt: "Суретке қарап сөйлем құрастыр",
                image: "images/foal.jpg.jpeg"
            },
            {
                sentence: "Жазда ауылда қошақан көрдім",
                prompt: "Суретке қарап сөйлем құрастыр",
                image: "images/lamb.jpg.jpeg"
            },
            {
                sentence: "Атаммен бірге құлыншаққа сүт бердік",
                prompt: "Суретке қарап сөйлем құрастыр",
                image: "images/grandfather.jpg.jpeg"
            }
        ]
    },
    {
        title: "Мектеп",
        emoji: "🏫",
        tasks: [
            {
                sentence: "Мұғалім тақтада сабақты түсіндіріп жатыр",
                prompt: "Суретке қарап сөйлем құрастыр",
                image: "images/teacher.jpg.jpg"
            },
            {
                sentence: "Айгерім сұраққа дұрыс жауап берді",
                prompt: "Суретке қарап сөйлем құрастыр",
                image: "images/aigerim.png.png"
            },
            {
                sentence: "Біз мектептің ауласында футбол ойнадық",
                prompt: "Суретке қарап сөйлем құрастыр",
                image: "images/football.png.png"
            },
            {
                sentence: "Балалар үзілісте кітапханаға барды",
                prompt: "Суретке қарап сөйлем құрастыр",
                image: "images/library.png.png"
            },
            {
                sentence: "Ермек мектепке қызықты кітап алып келді",
                prompt: "Суретке қарап сөйлем құрастыр",
                image: "images/book.png.png"
            }
        ]
    },
    {
        title: "Жыл мезгілдері",
        emoji: "🌳",
        tasks: [
            {
                sentence: "Қыста балалар далада қармен ойнайды",
                prompt: "Суретке қарап сөйлем құрастыр",
                image: "images/winter.png.png"
            },
            {
                sentence: "Күзгі жапырақтар жерге үзіліп түсті",
                prompt: "Суретке қарап сөйлем құрастыр",
                image: "images/autumn.png.png"
            },
            {
                sentence: "Көктемде ағаштар бүршік атады",
                prompt: "Суретке қарап сөйлем құрастыр",
                image: "images/spring.jpg.jpg"
            },
            {
                sentence: "Балалар аққала жасады",
                prompt: "Суретке қарап сөйлем құрастыр",
                image: "images/snowman.jpg.jpg"
            },
            {
                sentence: "Жазда балалар демалысқа шығады",
                prompt: "Суретке қарап сөйлем құрастыр",
                image: "images/summer_holiday.jpg.jpg"
            }
        ]
    }
];

const storageKey = "kazakh-sentence-mobile-menu";
const leaderboardKey = "kazakh-sentence-mobile-leaderboard";
const correctAnswerPoints = 20;
const wrongAnswerPoints = -5;
const helpPenaltyPoints = -5;

const state = {
    soundOn: true,
    darkMode: false,
    playerName: "",
    pendingCategory: null,
    currentCategory: 0,
    currentTask: 0,
    score: 0,
    stars: 0,
    solved: [],
    timerLeft: 120,
    timerId: null
};

const topicsTrack = document.getElementById("topicsTrack");
const soundBtn = document.getElementById("headerSoundBtn");
const soundToggle = document.getElementById("soundToggle");
const darkModeToggle = document.getElementById("darkModeToggle");
const settingsPanel = document.getElementById("settingsPanel");
const ratingPanel = document.getElementById("ratingPanel");
const resultPanel = document.getElementById("resultPanel");
const helpPanel = document.getElementById("helpPanel");
const welcomePanel = document.getElementById("welcomePanel");
const initPanel = document.getElementById("initPanel");
const initStartBtn = document.getElementById("initStartBtn");
const initPhotoLayer = document.getElementById("initPhotoLayer");
const menuPhotoLayer = document.getElementById("menuPhotoLayer");
const bgMusic = document.getElementById("bgMusic");
const playerNameInput = document.getElementById("playerNameInput");
const menuView = document.getElementById("menuView");
const gameView = document.getElementById("gameView");
const gameCategoryTitle = document.getElementById("gameCategoryTitle");
const taskCounter = document.getElementById("taskCounter");
const taskTitle = document.getElementById("taskTitle");
const taskScenePanel = document.getElementById("taskScenePanel");
const taskSceneImage = document.getElementById("taskSceneImage");
const sceneTimerBadge = document.getElementById("sceneTimerBadge");
const wordBank = document.getElementById("wordBank");
const answerBank = document.getElementById("answerBank");
const feedbackText = document.getElementById("feedbackText");
const ratingList = document.getElementById("ratingList");
const topBackBtn = document.getElementById("topBackBtn");
const resultSummary = document.getElementById("resultSummary");
const timerBadge = document.getElementById("timerBadge");
const sentenceCard = document.querySelector(".sentence-card");
const helpText = document.getElementById("helpText");
let musicRestartTimer = null;
let musicFadeFrame = null;
let isMusicFadingOut = false;

function shuffleArray(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function getImagePool() {
    const imageSet = new Set();
    categories.forEach((category) => {
        category.tasks.forEach((task) => {
            if (task.image && task.image.startsWith("images/")) {
                imageSet.add(task.image);
            }
        });
    });
    return shuffleArray(Array.from(imageSet));
}

function renderPhotoLayer(layer, images, opacityClass = "") {
    if (!layer) {
        return;
    }
    layer.innerHTML = "";
    const layerWidth = Math.max(layer.clientWidth, window.innerWidth || 1);
    const layerHeight = Math.max(layer.clientHeight, window.innerHeight || 1);
    const placedRects = [];

    const getOverlapArea = (a, b) => {
        const xOverlap = Math.max(0, Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x));
        const yOverlap = Math.max(0, Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y));
        return xOverlap * yOverlap;
    };

    images.forEach((src, index) => {
        const photo = document.createElement("img");
        const width = 140 + Math.floor(Math.random() * 120);
        const height = Math.floor(width * 0.74);
        const rotation = -14 + Math.random() * 28;
        const duration = 8 + Math.random() * 8;
        const delay = Math.random() * 2.5;
        const maxX = Math.max(0, layerWidth - width);
        const maxY = Math.max(0, layerHeight - height);
        let rect = { x: 0, y: 0, w: width, h: height };
        let bestRect = rect;
        let bestScore = Number.POSITIVE_INFINITY;

        for (let attempt = 0; attempt < 36; attempt += 1) {
            const candidate = {
                x: Math.random() * maxX,
                y: Math.random() * maxY,
                w: width,
                h: height
            };
            let overlapRatio = 0;
            for (const other of placedRects) {
                const overlapArea = getOverlapArea(candidate, other);
                if (overlapArea > 0) {
                    overlapRatio = Math.max(overlapRatio, overlapArea / Math.min(candidate.w * candidate.h, other.w * other.h));
                }
            }
            if (overlapRatio < bestScore) {
                bestScore = overlapRatio;
                bestRect = candidate;
            }
            if (overlapRatio <= 0.2) {
                rect = candidate;
                break;
            }
            rect = bestRect;
        }

        photo.src = src;
        photo.alt = "";
        photo.className = `photo-tile ${opacityClass}`.trim();
        photo.loading = "lazy";
        photo.style.width = `${width}px`;
        photo.style.height = `${height}px`;
        photo.style.top = `${rect.y}px`;
        photo.style.left = `${rect.x}px`;
        photo.style.setProperty("--rot", `${rotation.toFixed(2)}deg`);
        photo.style.setProperty("--float-duration", `${duration.toFixed(2)}s`);
        photo.style.setProperty("--float-delay", `${delay.toFixed(2)}s`);
        photo.style.zIndex = String((index % 3) + 1);
        layer.appendChild(photo);
        placedRects.push(rect);
    });
}

function setupRandomPhotoBackgrounds() {
    const imagePool = getImagePool();
    if (!imagePool.length) {
        return;
    }
    const halfIndex = Math.ceil(imagePool.length / 2);
    const maxPerLayer = 6;
    const initImages = imagePool.slice(0, halfIndex).slice(0, maxPerLayer);
    const menuImages = imagePool.slice(halfIndex).slice(0, maxPerLayer);
    renderPhotoLayer(initPhotoLayer, initImages);
    renderPhotoLayer(menuPhotoLayer, menuImages.length ? menuImages : initImages);
}

function renderTopics() {
    topicsTrack.innerHTML = categories.map((topic, index) => `
        <article class="topic-card" data-index="${index}">
            <h3>${topic.title}</h3>
            <div class="scene-ring">
                <div class="scene-core">
                    <div class="scene-ground"></div>
                    <div class="scene-emoji">${topic.emoji}</div>
                </div>
            </div>
            <button class="start-btn" type="button" data-index="${index}">Бастау</button>
        </article>
    `).join("");
}

function savePreferences() {
    localStorage.setItem(storageKey, JSON.stringify({
        soundOn: state.soundOn,
        darkMode: state.darkMode
    }));
}

function loadPreferences() {
    try {
        const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
        state.soundOn = saved.soundOn !== false;
        state.darkMode = Boolean(saved.darkMode);
    } catch {
        state.soundOn = true;
        state.darkMode = false;
    }

    state.playerName = "";
    playerNameInput.value = "";
    soundToggle.checked = state.soundOn;
    darkModeToggle.checked = state.darkMode;
    applyPreferences();
}

function getMusicTargetVolume() {
    return gameView.classList.contains("active") ? 0.12 : 0.22;
}

function clearMusicLoopTimers() {
    clearTimeout(musicRestartTimer);
    musicRestartTimer = null;
    if (musicFadeFrame) {
        cancelAnimationFrame(musicFadeFrame);
        musicFadeFrame = null;
    }
    isMusicFadingOut = false;
}

function playBackgroundMusic() {
    if (!bgMusic || !state.soundOn) {
        return;
    }
    clearMusicLoopTimers();
    bgMusic.volume = getMusicTargetVolume();
    bgMusic.play().catch(() => {});
}

function setupBackgroundMusicLoop() {
    if (!bgMusic) {
        return;
    }

    bgMusic.loop = false;

    bgMusic.addEventListener("timeupdate", () => {
        if (!state.soundOn || bgMusic.paused || isMusicFadingOut || !Number.isFinite(bgMusic.duration) || bgMusic.duration <= 0) {
            return;
        }

        const timeLeft = bgMusic.duration - bgMusic.currentTime;
        if (timeLeft > 1) {
            return;
        }

        isMusicFadingOut = true;
        const startVolume = bgMusic.volume;
        const fadeStart = performance.now();
        const fadeDuration = 1000;

        const animateFade = (now) => {
            if (!state.soundOn || bgMusic.paused) {
                isMusicFadingOut = false;
                musicFadeFrame = null;
                return;
            }

            const progress = Math.min(1, (now - fadeStart) / fadeDuration);
            const nextVolume = startVolume * (1 - progress);
            bgMusic.volume = Math.max(0.01, nextVolume);

            if (progress < 1) {
                musicFadeFrame = requestAnimationFrame(animateFade);
            } else {
                musicFadeFrame = null;
            }
        };

        musicFadeFrame = requestAnimationFrame(animateFade);
    });

    bgMusic.addEventListener("ended", () => {
        if (!state.soundOn) {
            clearMusicLoopTimers();
            return;
        }

        clearMusicLoopTimers();
        musicRestartTimer = setTimeout(() => {
            if (!state.soundOn) {
                return;
            }
            bgMusic.currentTime = 0;
            bgMusic.volume = getMusicTargetVolume();
            bgMusic.play().catch(() => {});
        }, 2000);
    });
}

function applyPreferences() {
    document.body.classList.toggle("dark-mode", state.darkMode);
    soundBtn.textContent = state.soundOn ? "🔊" : "🔇";
    if (!bgMusic) {
        return;
    }
    if (state.soundOn) {
        if (!bgMusic.paused) {
            bgMusic.volume = getMusicTargetVolume();
        }
    } else {
        clearMusicLoopTimers();
        bgMusic.pause();
    }
}

function updateScore() {
    return;
}

function updateProgress() {
    return;
}

function formatTime(total) {
    const minutes = String(Math.floor(total / 60)).padStart(2, "0");
    const seconds = String(total % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
}

function updateTimer() {
    timerBadge.textContent = formatTime(state.timerLeft);
    sceneTimerBadge.textContent = formatTime(state.timerLeft);
}

function stopTimer() {
    clearInterval(state.timerId);
    state.timerId = null;
}

function startTimer() {
    stopTimer();
    state.timerLeft = 120;
    updateTimer();
    timerBadge.classList.add("hidden");
    state.timerId = setInterval(() => {
        state.timerLeft -= 1;
        updateTimer();
        if (state.timerLeft <= 0) {
            stopTimer();
            resultSummary.textContent = `${state.playerName || "Қонақ"} уақытты аяқтады. Бөлім: ${categories[state.currentCategory].title}. Ұпайы: ${state.score}.`;
            openPanel(resultPanel);
        }
    }, 1000);
}

function openPanel(panel) {
    panel.classList.remove("hidden");
    panel.setAttribute("aria-hidden", "false");
}

function closePanel(panel) {
    panel.classList.add("hidden");
    panel.setAttribute("aria-hidden", "true");
}

function saveLeaderboard(entry) {
    const current = getLeaderboard();
    current.push(entry);
    current.sort((a, b) => b.score - a.score);
    localStorage.setItem(leaderboardKey, JSON.stringify(current.slice(0, 10)));
}

function getLeaderboard() {
    try {
        return JSON.parse(localStorage.getItem(leaderboardKey) || "[]");
    } catch {
        return [];
    }
}

function renderLeaderboard() {
    const data = getLeaderboard();
    if (!data.length) {
        ratingList.innerHTML = "<p class='rating-meta'>Әзірге үздік тізім бос.</p>";
        return;
    }

    ratingList.innerHTML = data.map((entry, index) => `
        <div class="rating-item">
            <div class="rating-title">
                <span>${index + 1}. ${entry.name}</span>
                <span>${entry.score}</span>
            </div>
            <div class="rating-meta">Бөлім: ${entry.category} • Жұлдыз: ${entry.stars}</div>
        </div>
    `).join("");
}

function showView(view) {
    menuView.classList.toggle("active", view === "menu");
    gameView.classList.toggle("active", view === "game");
    topBackBtn.classList.toggle("hidden", view !== "game");
    timerBadge.classList.add("hidden");
    if (!bgMusic) {
        return;
    }
    if (state.soundOn) {
        bgMusic.volume = getMusicTargetVolume();
        if (bgMusic.paused) {
            playBackgroundMusic();
        }
    }
}

function createWordChip(word) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "word-chip";
    button.textContent = word;
    button.draggable = true;
    button.addEventListener("dragstart", (event) => {
        playButtonSound();
        event.dataTransfer.setData("text/plain", word);
        button.classList.add("dragging");
        state.draggedWord = button;
    });
    button.addEventListener("dragend", () => {
        button.classList.remove("dragging");
        state.draggedWord = null;
    });
    button.addEventListener("click", () => {
        playButtonSound();
        if (button.parentElement === wordBank) {
            answerBank.appendChild(button);
        } else {
            wordBank.appendChild(button);
        }
    });
    return button;
}

function clearHintHighlight() {
    document.querySelectorAll(".word-chip.hint-word").forEach((chip) => {
        chip.classList.remove("hint-word");
    });
}

function renderTask() {
    const category = categories[state.currentCategory];
    const rawTask = category.tasks[state.currentTask];
    const task = typeof rawTask === "string"
        ? { sentence: rawTask, prompt: "Сөздерді дұрыс ретке қой" }
        : rawTask;
    const words = shuffleArray(task.sentence.split(" "));

    gameCategoryTitle.textContent = category.title;
    taskCounter.textContent = `${state.currentTask + 1} / ${category.tasks.length}`;
    taskTitle.textContent = task.prompt || "Сөздерді дұрыс ретке қой";
    if (task.image) {
        taskSceneImage.src = task.image;
        taskSceneImage.alt = `${category.title} тапсырмасына арналған сурет`;
        taskScenePanel.classList.remove("hidden");
        sentenceCard.classList.add("has-scene");
    } else {
        taskSceneImage.src = "";
        taskSceneImage.alt = "";
        taskScenePanel.classList.add("hidden");
        sentenceCard.classList.remove("has-scene");
    }
    clearHintHighlight();
    wordBank.innerHTML = "";
    answerBank.innerHTML = "";
    words.forEach((word) => wordBank.appendChild(createWordChip(word)));
    feedbackText.textContent = "Сөздерді дұрыс ретпен орналастыр.";
    feedbackText.className = "feedback-text";
    updateProgress();
}

function openHelp() {
    playButtonSound();
    
    const category = categories[state.currentCategory];
    const rawTask = category.tasks[state.currentTask];
    const task = typeof rawTask === "string"
        ? { sentence: rawTask }
        : rawTask;
    const words = task.sentence.split(" ");
    const answerWords = Array.from(answerBank.children).map((item) => item.textContent);
    let nextIndex = 0;

    while (nextIndex < answerWords.length && answerWords[nextIndex] === words[nextIndex]) {
        nextIndex += 1;
    }

    const nextWord = words[Math.min(nextIndex, words.length - 1)];
    clearHintHighlight();

    const chipToHighlight = Array.from(wordBank.children).find((item) => item.textContent === nextWord)
        || Array.from(answerBank.children).find((item) => item.textContent === nextWord);

    if (chipToHighlight) {
        chipToHighlight.classList.add("hint-word");
    }

    const previousScore = state.score;
    state.score = Math.max(0, state.score + helpPenaltyPoints);
    const deductedPoints = previousScore - state.score;
    updateScore();
    
    // Show help inline in feedback
    feedbackText.textContent = `💡 Келесі сөз: "${nextWord}". Көмек үшін ${deductedPoints} балл шегерілді.`;
    feedbackText.className = "feedback-text";
}

function startCategory(index) {
    state.currentCategory = index;
    state.currentTask = 0;
    showView("game");
    startTimer();
    renderTask();
}

function playFeedbackSound(kind) {
    if (!state.soundOn) {
        return;
    }

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
        return;
    }

    const context = new AudioContextClass();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.connect(gain);
    gain.connect(context.destination);

    if (kind === "error") {
        oscillator.type = "sawtooth";
        oscillator.frequency.setValueAtTime(210, context.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(120, context.currentTime + 0.16);
        gain.gain.setValueAtTime(0.0001, context.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.09, context.currentTime + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.2);
        oscillator.start(context.currentTime);
        oscillator.stop(context.currentTime + 0.21);
    } else {
        oscillator.type = "sine";
        oscillator.frequency.value = 760;
        gain.gain.value = 0.001;
        oscillator.start();
        gain.gain.exponentialRampToValueAtTime(0.08, context.currentTime + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.18);
        oscillator.stop(context.currentTime + 0.2);
    }

    oscillator.onended = () => context.close();
}

function triggerErrorEffects() {
    sentenceCard.classList.remove("error-shake");
    answerBank.classList.remove("error-glow");
    answerBank.classList.remove("success-glow");
    void sentenceCard.offsetWidth;
    sentenceCard.classList.add("error-shake");
    answerBank.classList.add("error-glow");
    setTimeout(() => {
        answerBank.classList.remove("error-glow");
    }, 520);
}

function triggerSuccessEffects() {
    answerBank.classList.remove("error-glow");
    answerBank.classList.add("success-glow");
    setTimeout(() => {
        answerBank.classList.remove("success-glow");
    }, 520);
}

function playButtonSound() {
    if (!state.soundOn) return;
    
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    
    const context = new AudioContextClass();
    const osc = context.createOscillator();
    const gain = context.createGain();
    osc.frequency.value = 1000;
    osc.type = "square";
    gain.gain.value = 0.05;
    osc.connect(gain);
    gain.connect(context.destination);
    osc.start(context.currentTime);
    osc.stop(context.currentTime + 0.1);
    context.close();
}

function playCelebrationSound() {
    if (!state.soundOn) return;
    
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    
    const context = new AudioContextClass();
    
    // Play a series of ascending tones
    const notes = [523, 659, 784, 1047]; // C5, E5, G5, C6
    const gain = context.createGain();
    gain.connect(context.destination);
    
    notes.forEach((freq, i) => {
        const osc = context.createOscillator();
        osc.frequency.value = freq;
        osc.type = "sine";
        osc.connect(gain);
        osc.start(context.currentTime + i * 0.15);
        osc.stop(context.currentTime + i * 0.15 + 0.2);
    });
    
    gain.gain.value = 0.1;
    setTimeout(() => context.close(), 1000);
}

function createCelebration() {
    if (!state.soundOn) return;
    
    const container = document.createElement("div");
    container.className = "celebration-container";
    document.body.appendChild(container);
    
    const confetti = ["🎉", "⭐", "🌟", "✨", "🎊", "🎈", "🏆"];
    
    for (let i = 0; i < 30; i++) {
        const conf = document.createElement("div");
        conf.className = "confetti star";
        conf.textContent = confetti[Math.floor(Math.random() * confetti.length)];
        conf.style.left = Math.random() * window.innerWidth + "px";
        conf.style.top = "-20px";
        conf.style.fontSize = (0.8 + Math.random() * 1.2) + "rem";
        conf.style.animation = `confetti-fall ${2 + Math.random() * 1.5}s ease-in forwards`;
        conf.style.opacity = Math.random();
        container.appendChild(conf);
    }
    
    setTimeout(() => container.remove(), 4000);
}

function getPerformanceMessage(score) {
    if (score === 100) {
        return "🏆✨ Керемет! Сіз 100 ұпайды толық жинадыңыз!";
    } else if (score > 70) {
        return "🌟 Керемет!";
    } else if (score > 50) {
        return "✨ Жақсы!";
    } else {
        return "💪 Талпын! тағыда тырысып көр!";
    }
}

function finishCategory() {
    stopTimer();
    const category = categories[state.currentCategory];
    const performanceMsg = getPerformanceMessage(state.score);
    saveLeaderboard({
        name: state.playerName || "Қонақ",
        category: category.title,
        score: state.score,
        stars: state.stars
    });
    renderLeaderboard();
    resultSummary.innerHTML = `<div style="text-align: center;">
        <p style="font-size: 1.2em; margin: 10px 0;">${performanceMsg}</p>
        <p style="font-size: 1em; margin: 10px 0;">${state.playerName || "Қонақ"} <strong>${category.title}</strong> бөлімін аяқтады</p>
        <p style="font-size: 1.1em; font-weight: bold; color: #ffcf4a;">Ұпайы: ${state.score} | Жұлдыз: ${state.stars}⭐</p>
    </div>`;
    
    // Make backdrop transparent for perfect score
    if (state.score === 100) {
        resultPanel.classList.add("perfect-score");
    } else {
        resultPanel.classList.remove("perfect-score");
    }
    
    openPanel(resultPanel);
}

function checkAnswer() {
    playButtonSound();
    
    const category = categories[state.currentCategory];
    const rawTask = category.tasks[state.currentTask];
    const correctSentence = typeof rawTask === "string" ? rawTask : rawTask.sentence;
    const answer = Array.from(answerBank.children).map((item) => item.textContent).join(" ").trim();

    if (answer === correctSentence) {
        feedbackText.textContent = "✅ Дұрыс жауап! Керемет!";
        feedbackText.className = "feedback-text success";
        state.score += correctAnswerPoints;
        state.stars += 1;
        clearHintHighlight();
        updateScore();
        triggerSuccessEffects();
        
        playCelebrationSound();
        createCelebration();

        setTimeout(() => {
            if (state.currentTask < category.tasks.length - 1) {
                state.currentTask += 1;
                renderTask();
            } else {
                finishCategory();
            }
        }, 1500);
    } else {
        feedbackText.textContent = "❌ Қате жауап..";
        feedbackText.className = "feedback-text error";
        state.score = Math.max(0, state.score + wrongAnswerPoints);
        updateScore();
        triggerErrorEffects();
        playFeedbackSound("error");
        
        setTimeout(() => {
            if (state.currentTask < category.tasks.length - 1) {
                state.currentTask += 1;
                renderTask();
            } else {
                finishCategory();
            }
        }, 1500);
    }
}

topicsTrack.addEventListener("click", (event) => {
    const button = event.target.closest(".start-btn");
    if (!button) {
        return;
    }
    
    playButtonSound();

    state.pendingCategory = Number(button.dataset.index);
    playerNameInput.value = "";
    openPanel(welcomePanel);
    playerNameInput.focus();
});

document.getElementById("enterGameBtn").addEventListener("click", () => {
    playButtonSound();
    
    const value = playerNameInput.value.trim();
    state.playerName = value || "Қонақ";
    playerNameInput.value = "";
    savePreferences();
    closePanel(welcomePanel);
    if (state.pendingCategory !== null) {
        startCategory(state.pendingCategory);
        state.pendingCategory = null;
    }
});

document.getElementById("guestGameBtn").addEventListener("click", () => {
    playButtonSound();
    
    state.playerName = "Қонақ";
    savePreferences();
    closePanel(welcomePanel);
    if (state.pendingCategory !== null) {
        startCategory(state.pendingCategory);
        state.pendingCategory = null;
    }
});

playerNameInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        document.getElementById("enterGameBtn").click();
    }
});

document.getElementById("settingsBtn").addEventListener("click", () => {
    playButtonSound();
    openPanel(settingsPanel);
});
document.getElementById("closeSettingsBtn").addEventListener("click", () => {
    playButtonSound();
    closePanel(settingsPanel);
});
document.getElementById("closeRatingBtn").addEventListener("click", () => {
    playButtonSound();
    closePanel(ratingPanel);
});
document.getElementById("closeHelpBtn").addEventListener("click", () => {
    playButtonSound();
    closePanel(helpPanel);
});
document.getElementById("resultCloseBtn").addEventListener("click", () => {
    playButtonSound();
    closePanel(resultPanel);
    showView("menu");
});
document.getElementById("clearRatingBtn").addEventListener("click", () => {
    playButtonSound();
    localStorage.removeItem(leaderboardKey);
    renderLeaderboard();
    closePanel(settingsPanel);
});
document.getElementById("topRatingBtn").addEventListener("click", () => {
    playButtonSound();
    renderLeaderboard();
    openPanel(ratingPanel);
});

document.getElementById("backToMenuBtn").addEventListener("click", () => {
    playButtonSound();
    stopTimer();
    showView("menu");
});
document.getElementById("helpBtn").addEventListener("click", openHelp);

topBackBtn.addEventListener("click", () => {
    playButtonSound();
    stopTimer();
    showView("menu");
});

document.getElementById("resetBtn").addEventListener("click", () => {
    playButtonSound();
    renderTask();
});
document.getElementById("checkBtn").addEventListener("click", checkAnswer);

soundBtn.addEventListener("click", () => {
    playButtonSound();
    state.soundOn = !state.soundOn;
    soundToggle.checked = state.soundOn;
    applyPreferences();
    if (state.soundOn && bgMusic) {
        playBackgroundMusic();
    }
    savePreferences();
});

soundToggle.addEventListener("change", () => {
    state.soundOn = soundToggle.checked;
    applyPreferences();
    savePreferences();
    if (state.soundOn) {
        playButtonSound();
        if (bgMusic) {
            playBackgroundMusic();
        }
    }
});

darkModeToggle.addEventListener("change", () => {
    playButtonSound();
    state.darkMode = darkModeToggle.checked;
    applyPreferences();
    savePreferences();
});

document.querySelectorAll(".overlay-backdrop").forEach((backdrop) => {
    backdrop.addEventListener("click", () => {
        if (!welcomePanel.classList.contains("hidden")) {
            return;
        }
        closePanel(settingsPanel);
        closePanel(ratingPanel);
        closePanel(resultPanel);
        closePanel(helpPanel);
    });
});

[wordBank, answerBank].forEach((zone) => {
    zone.addEventListener("dragover", (event) => {
        event.preventDefault();
    });
    zone.addEventListener("drop", (event) => {
        event.preventDefault();
        if (state.draggedWord) {
            zone.appendChild(state.draggedWord);
        }
    });
});

function initializeApp() {
    document.body.classList.remove("app-initializing");
    initPanel.classList.add("hidden");
    initPanel.setAttribute("aria-hidden", "true");
    renderTopics();
    loadPreferences();
    updateScore();
    updateProgress();
    renderLeaderboard();
    closePanel(welcomePanel);
    if (state.soundOn && bgMusic) {
        playBackgroundMusic();
    }
}

setupRandomPhotoBackgrounds();
setupBackgroundMusicLoop();

initStartBtn.addEventListener("click", () => {
    playButtonSound();
    initializeApp();
});
