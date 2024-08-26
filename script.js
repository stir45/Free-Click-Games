let count = 0;
let autoClickCount = 0;
let language = 'ko'; // 기본 언어 설정

const counterDisplay = document.getElementById('counter');
const increaseButton = document.getElementById('increaseButton');
const basicAutoClickButton = document.getElementById('basicAutoClickButton'); // 1 오토클릭 버튼
const smallAutoClickButton = document.getElementById('smallAutoClickButton'); // 5 오토클릭 버튼
const mediumAutoClickButton = document.getElementById('mediumAutoClickButton'); // 20 오토클릭 버튼
const autoClickButton = document.getElementById('autoClickButton');
const bulkAutoClickButton = document.getElementById('bulkAutoClickButton');
const megaAutoClickButton = document.getElementById('megaAutoClickButton'); // 100 오토클릭 버튼
const superAutoClickButton = document.getElementById('superAutoClickButton'); // 500 오토클릭 버튼
const ultraAutoClickButton = document.getElementById('ultraAutoClickButton'); // 1000 오토클릭 버튼
const megaUltraAutoClickButton = document.getElementById('megaUltraAutoClickButton'); // 100000 오토클릭 버튼
const autoClickCountDisplay = document.getElementById('autoClickCount');
const gameTitle = document.getElementById('gameTitle');
const increaseButtonText = document.getElementById('increaseButton').textContent;
const basicAutoClickButtonText = document.getElementById('basicAutoClickButton').textContent;
const smallAutoClickButtonText = document.getElementById('smallAutoClickButton').textContent;
const mediumAutoClickButtonText = document.getElementById('mediumAutoClickButton').textContent;
const autoClickButtonText = document.getElementById('autoClickButton').textContent;
const bulkAutoClickButtonText = document.getElementById('bulkAutoClickButton').textContent;
const megaAutoClickButtonText = document.getElementById('megaAutoClickButton').textContent;
const superAutoClickButtonText = document.getElementById('superAutoClickButton').textContent;
const ultraAutoClickButtonText = document.getElementById('ultraAutoClickButton').textContent;
const megaUltraAutoClickButtonText = document.getElementById('megaUltraAutoClickButton').textContent;

function updateCounter() {
    counterDisplay.textContent = count;
    basicAutoClickButton.disabled = count < 10;
    smallAutoClickButton.disabled = count < 20;
    mediumAutoClickButton.disabled = count < 50;
    autoClickButton.disabled = count < 500;
    bulkAutoClickButton.disabled = count < 1000;
    megaAutoClickButton.disabled = count < 5000;
    superAutoClickButton.disabled = count < 10000;
    ultraAutoClickButton.disabled = count < 50000;
    megaUltraAutoClickButton.disabled = count < 10000000; // 10000000 클릭 필요 시 버튼 활성화
}

function updateAutoClickCount() {
    autoClickCountDisplay.textContent = `오토클릭 수: ${autoClickCount}`;
}

function updateLanguage() {
    if (language === 'ko') {
        gameTitle.textContent = 'Free Click Games!!';
        increaseButton.textContent = '숫자 증가';
        basicAutoClickButton.textContent = '1 오토클릭 구매 (10 클릭 필요)';
        smallAutoClickButton.textContent = '5 오토클릭 구매 (20 클릭 필요)';
        mediumAutoClickButton.textContent = '20 오토클릭 구매 (50 클릭 필요)';
        autoClickButton.textContent = '20 오토클릭 구매 (500 클릭 필요)';
        bulkAutoClickButton.textContent = '50 오토클릭 구매 (1000 클릭 필요)';
        megaAutoClickButton.textContent = '100 오토클릭 구매 (5000 클릭 필요)';
        superAutoClickButton.textContent = '500 오토클릭 구매 (10000 클릭 필요)';
        ultraAutoClickButton.textContent = '1000 오토클릭 구매 (50000 클릭 필요)';
        megaUltraAutoClickButton.textContent = '100000 오토클릭 구매 (10000000 클릭 필요)';
        autoClickCountDisplay.textContent = `오토클릭 수: ${autoClickCount}`;
    } else if (language === 'en') {
        gameTitle.textContent = 'Free Click Games!!';
        increaseButton.textContent = 'Increase Number';
        basicAutoClickButton.textContent = 'Buy 1 Auto-Clicker (Needs 10 Clicks)';
        smallAutoClickButton.textContent = 'Buy 5 Auto-Clickers (Needs 20 Clicks)';
        mediumAutoClickButton.textContent = 'Buy 20 Auto-Clickers (Needs 50 Clicks)';
        autoClickButton.textContent = 'Buy 20 Auto-Clickers (Needs 500 Clicks)';
        bulkAutoClickButton.textContent = 'Buy 50 Auto-Clickers (Needs 1000 Clicks)';
        megaAutoClickButton.textContent = 'Buy 100 Auto-Clickers (Needs 5000 Clicks)';
        superAutoClickButton.textContent = 'Buy 500 Auto-Clickers (Needs 10000 Clicks)';
        ultraAutoClickButton.textContent = 'Buy 1000 Auto-Clickers (Needs 50000 Clicks)';
        megaUltraAutoClickButton.textContent = 'Buy 100000 Auto-Clickers (Needs 10000000 Clicks)';
        autoClickCountDisplay.textContent = `Auto-Clickers: ${autoClickCount}`;
    }
}

function switchLanguage(lang) {
    language = lang;
    updateLanguage();
}

increaseButton.addEventListener('click', () => {
    count++;
    updateCounter();
});

basicAutoClickButton.addEventListener('click', () => {
    if (count >= 10) {
        count -= 10; // 10클릭 차감
        autoClickCount += 1; // 1 오토클릭 추가
        updateAutoClickCount();
        updateCounter();
    }
});

smallAutoClickButton.addEventListener('click', () => {
    if (count >= 20) {
        count -= 20; // 20클릭 차감
        autoClickCount += 5; // 5 오토클릭 추가
        updateAutoClickCount();
        updateCounter();
    }
});

mediumAutoClickButton.addEventListener('click', () => {
    if (count >= 50) {
        count -= 50; // 50클릭 차감
        autoClickCount += 20; // 20 오토클릭 추가
        updateAutoClickCount();
        updateCounter();
    }
});

autoClickButton.addEventListener('click', () => {
    if (count >= 500) {
        count -= 500; // 500클릭 차감
        autoClickCount += 20; // 20 오토클릭 추가
        updateAutoClickCount();
        updateCounter();
    }
});

bulkAutoClickButton.addEventListener('click', () => {
    if (count >= 1000) {
        count -= 1000; // 1000클릭 차감
        autoClickCount += 50; // 50 오토클릭 추가
        updateAutoClickCount();
        updateCounter();
    }
});

megaAutoClickButton.addEventListener('click', () => {
    if (count >= 5000) {
        count -= 5000; // 5000클릭 차감
        autoClickCount += 100; // 100 오토클릭 추가
        updateAutoClickCount();
        updateCounter();
    }
});

superAutoClickButton.addEventListener('click', () => {
    if (count >= 10000) {
        count -= 10000; // 10000클릭 차감
        autoClickCount += 500; // 500 오토클릭 추가
        updateAutoClickCount();
        updateCounter();
    }
});

ultraAutoClickButton.addEventListener('click', () => {
    if (count >= 50000) {
        count -= 50000; // 50000클릭 차감
        autoClickCount += 1000; // 1000 오토클릭 추가
        updateAutoClickCount();
        updateCounter();
    }
});

megaUltraAutoClickButton.addEventListener('click', () => {
    if (count >= 10000000) {
        count -= 10000000; // 10000000클릭 차감
        autoClickCount += 100000; // 100000 오토클릭 추가
        updateAutoClickCount();
        updateCounter();
    }
});

// 자동 클릭 기능을 시작하는 함수
function startAutoClicker() {
    setInterval(() => {
        if (autoClickCount > 0) {
            count += autoClickCount; // 구매한 오토클릭 수만큼 클릭 수 증가
            updateCounter();
        }
    }, 1500); // 1.5초마다 클릭 수 증가
}

// 자동 클릭 기능 시작
startAutoClicker(); // 페이지 로드 시 자동 클릭기 시작

// 초기 언어 설정
updateLanguage();
