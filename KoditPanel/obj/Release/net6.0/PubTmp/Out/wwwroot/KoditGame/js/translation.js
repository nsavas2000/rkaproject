// Dil çevirileri
const translations = {
    tr: {
        // Header butonları
        run: "Çalıştır",
        solution: "Çözüm",
        save: "Kaydet",
        load: "Yükle",
        fullscreen: "Tam Ekran",
        
        // Info panel
        question: "Soru",
        
        // Modal
        solutionTitle: "Çözüm - Level",
        solutionLoading: "Çözüm yükleniyor...",
        close: "Kapat",
        
        // Blockly blokları (isteğe bağlı - blockly kendi dil desteğine sahip)
        start: "Başla",
        end: "Bitir",
        walkForward: "İleri Git",
        turnLeft: "Sola Dön",
        turnRight: "Sağa Dön",
        
        // Dil seçimi
        language: "Dil"
    },
    en: {
        // Header buttons
        run: "Run",
        solution: "Solution",
        save: "Save",
        load: "Load",
        fullscreen: "Fullscreen",
        
        // Info panel
        question: "Question",
        
        // Modal
        solutionTitle: "Solution - Level",
        solutionLoading: "Loading solution...",
        close: "Close",
        
        // Blockly blocks
        start: "Start",
        end: "End",
        walkForward: "Walk Forward",
        turnLeft: "Turn Left",
        turnRight: "Turn Right",
        
        // Language selection
        language: "Language"
    }
};

// Varsayılan dil
let currentLang = localStorage.getItem('preferredLang') || 'tr';

// Dil değiştirme fonksiyonu
function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('preferredLang', lang);
    
    // URL'i güncelle - kodit.html?level&lang=tr formatında
    const currentUrl = window.location.href;
    const baseUrl = currentUrl.split('?')[0]; // kodit.html kısmı
    const params = window.location.search.substring(1); // ? işaretinden sonrası
    
    let levelParam = '';
    let newUrl = '';
    
    if (params) {
        // Mevcut parametreleri ayır
        const parts = params.split('&');
        
        // İlk parametre level numarası (örn: 01)
        if (parts[0] && !parts[0].includes('=')) {
            levelParam = parts[0];
        } else if (parts[0] && parts[0].includes('level=')) {
            levelParam = parts[0].split('=')[1];
        }
        
        // Yeni URL'i oluştur
        if (levelParam) {
            newUrl = `${baseUrl}?${levelParam}&lang=${lang}`;
        } else {
            newUrl = `${baseUrl}?lang=${lang}`;
        }
    } else {
        newUrl = `${baseUrl}?lang=${lang}`;
    }
    
    // URL'i güncelle (sayfa yenilenmeden)
    window.history.pushState({}, '', newUrl);
    
    // Sayfayı güncelle
    updatePageLanguage();
}

// Sayfadaki metinleri güncelle
function updatePageLanguage() {
    const t = translations[currentLang];
    
    // Butonları güncelle
    document.querySelector('.run-btn-header').innerHTML = t.run;
    
    // Control butonlarını güncelle
    const controlBtns = document.querySelectorAll('.control-btn-header');
    controlBtns[0].innerHTML = `<i class="fa-solid fa-puzzle-piece"></i> ${t.solution}`;
    controlBtns[0].title = t.solution;
    
    controlBtns[1].innerHTML = `<i class="fa-solid fa-download"></i> ${t.save}`;
    controlBtns[1].title = t.save;
    
    controlBtns[2].innerHTML = `<i class="fa-solid fa-file"></i> ${t.load}`;
    controlBtns[2].title = t.load;
    
    controlBtns[3].innerHTML = `<i class="fa-solid fa-expand"></i> ${t.fullscreen}`;
    controlBtns[3].title = t.fullscreen;
    
    // Info panel başlığı
    document.querySelector('.info-title').textContent = t.question;
    
    // Modal başlığı
    const modalTitle = document.querySelector('.solution-modal-header h2');
    if (modalTitle) {
        const levelNum = document.getElementById('solutionLevelNumber').textContent;
        modalTitle.innerHTML = `<i class="fa-solid fa-puzzle-piece"></i> ${t.solutionTitle} ${levelNum}`;
    }
    
    // Modal loading metni
    const loadingText = document.querySelector('.solution-loading');
    if (loadingText) {
        loadingText.textContent = t.solutionLoading;
    }
    
    // Dil dropdown butonunu güncelle
    updateLanguageButton();
}

// Dil butonunu güncelle
function updateLanguageButton() {
    const langBtn = document.querySelector('.control-btn-header[title="Lang"]');
    const langText = currentLang.toUpperCase();
    langBtn.innerHTML = `<i class="fa-solid fa-earth-europe"></i> ${langText}`;
}

// Çözüm resminin yolunu dil bazında al
function getSolutionImagePath(levelNumber) {
    const levelStr = String(levelNumber).padStart(2, '0');
    if (currentLang === 'en') {
        return `images/solutions/${levelStr}-en.png`;
    }
    return `images/solutions/${levelStr}.png`;
}

// Sayfa yüklendiğinde dil ayarını uygula
function initLanguage() {
    // URL'den parametreleri al
    const params = window.location.search.substring(1);
    let urlLang = null;
    
    if (params) {
        // Parametreleri ayır
        const parts = params.split('&');
        
        // lang parametresini bul
        for (let part of parts) {
            if (part.startsWith('lang=')) {
                urlLang = part.split('=')[1];
                break;
            }
        }
    }
    
    // URL'den gelen dil varsa onu kullan
    if (urlLang && (urlLang === 'tr' || urlLang === 'en')) {
        currentLang = urlLang;
        localStorage.setItem('preferredLang', urlLang);
    }
    
    updatePageLanguage();
    setupLanguageDropdown();
}

// Dil seçim dropdown'unu oluştur
function setupLanguageDropdown() {
    const langBtn = document.querySelector('.control-btn-header[title="Lang"]');
    
    // Dropdown menü oluştur
    const dropdown = document.createElement('div');
    dropdown.className = 'lang-dropdown';
    dropdown.style.display = 'none';
    dropdown.innerHTML = `
        <div class="lang-option ${currentLang === 'tr' ? 'active' : ''}" data-lang="tr">
            <span class="flag-icon">🇹🇷</span> Türkçe
        </div>
        <div class="lang-option ${currentLang === 'en' ? 'active' : ''}" data-lang="en">
            <span class="flag-icon">🇬🇧</span> English
        </div>
    `;
    
    // Dropdown'u butona ekle
    langBtn.style.position = 'relative';
    langBtn.appendChild(dropdown);
    
    // Buton tıklama eventi
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
    });
    
    // Dil seçeneklerine tıklama eventi
    dropdown.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const selectedLang = option.getAttribute('data-lang');
            
            // Aktif sınıfını güncelle
            dropdown.querySelectorAll('.lang-option').forEach(opt => {
                opt.classList.remove('active');
            });
            option.classList.add('active');
            
            changeLanguage(selectedLang);
            dropdown.style.display = 'none';
        });
    });
    
    // Dışarı tıklandığında dropdown'u kapat
    document.addEventListener('click', () => {
        dropdown.style.display = 'none';
    });
}