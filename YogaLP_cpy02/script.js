document.addEventListener('DOMContentLoaded', () => {
    // Lucideアイコンの初期化
    lucide.createIcons();
    // ★変数をここでまとめて定義
    const header = document.getElementById('header');
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    // 1. スクロール時のフェードインアニメーション
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
    // 2. ヘッダーのスクロール制御
    window.addEventListener('scroll', () => {
        const menuBtnIcon = menuBtn ? menuBtn.querySelector('i') : null;
        if (window.scrollY > 50) {
            header.classList.add('bg-white', 'shadow-md', 'text-gray-800');
            header.classList.remove('text-white', 'bg-transparent');
            if (menuBtnIcon) menuBtnIcon.style.stroke = "#333";
        } else {
            header.classList.remove('bg-white', 'shadow-md', 'text-gray-800');
            header.classList.add('text-white', 'bg-transparent');
            // モバイルメニューが閉じている時だけ、アイコンを白に戻す
            if (menuBtnIcon && mobileMenu && mobileMenu.classList.contains('translate-x-full')) {
                menuBtnIcon.style.stroke = "currentColor";
            }
        }
    });
    // 3. モバイルメニューの制御
    let isMenuOpen = false;
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('translate-x-full');
                // アイコンを×に変更
                menuBtn.innerHTML = '<i data-lucide="x" class="w-8 h-8 text-gray-800"></i>';
                lucide.createIcons();
            } else {
                mobileMenu.classList.add('translate-x-full');
                // アイコンを戻す
                const isScrolled = window.scrollY > 50;
                const colorClass = isScrolled ? 'text-gray-800' : 'text-white';
                menuBtn.innerHTML = `<i data-lucide="menu" class="w-8 h-8 ${colorClass}"></i>`;
                lucide.createIcons();
            }
        });
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                isMenuOpen = false;
                mobileMenu.classList.add('translate-x-full');
                const isScrolled = window.scrollY > 50;
                const colorClass = isScrolled ? 'text-gray-800' : 'text-white';
                menuBtn.innerHTML = `<i data-lucide="menu" class="w-8 h-8 ${colorClass}"></i>`;
                lucide.createIcons();
            });
        });
    }
    // 5. FAQのアコーディオン制御
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const button = item.querySelector('.faq-btn');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');
        button.addEventListener('click', () => {
            // 答えの表示/非表示を切り替え
            answer.classList.toggle('hidden');
            // アイコンを回転させる
            icon.classList.toggle('rotate-180');
        });
    });
});