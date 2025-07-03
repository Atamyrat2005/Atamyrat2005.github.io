document.addEventListener('DOMContentLoaded', () => {
    "use strict";

    // ========================================================================= //
    // MULTI-LANGUAGE TRANSLATION (No Changes Here)
    // ========================================================================= //
    const translations = {
        en: {
            navHome: "Home", navAbout: "About", navSkills: "Skills", navProjects: "Projects", navContact: "Contact",
            heroTitle: "Hello, I'm Atamyrat", heroSubtitle: "I'm a", heroQuote: "My interest is to create and develop useful software that can make a person's life better.", heroButton: "Let's Connect",
            aboutTitle: "About Me", aboutHeader: "Full-Stack Developer & Python Enthusiast", aboutSubheader: "A passionate developer with a strong foundation in both front-end and back-end technologies.", aboutParagraph: "My journey started with Python, building everything from desktop apps to fun games. I've since expanded into full-stack web development with Django, creating robust and scalable applications. I thrive on learning new technologies and solving complex problems, always aiming to build meaningful applications that have a positive impact.", aboutButton: "Download CV",
            skillsTitle: "My Skills",
            projectsTitle: "My Projects", projectsProduction: "Production Sites", projectsOther: "Other Projects & Landing Pages", viewProject: "View Project", visitLiveSite: "Visit Live Site",
            contactTitle: "Contact Me", contactSubtitle: "Have a question or want to work together? Let's talk.", contactEmail: "Email", contactPhone: "Phone", contactLocation: "Location",
            formName: "Your Name", formEmail: "Your Email", formSubject: "Subject", formMessage: "Message", formButton: "Send Message",
            footerCopyright: "© Copyright <strong><span>Atamyrat</span></strong>. All Rights Reserved"
        },
        ru: {
            navHome: "Главная", navAbout: "Обо мне", navSkills: "Навыки", navProjects: "Проекты", navContact: "Контакты",
            heroTitle: "Привет, я Атамурат", heroSubtitle: "Я", heroQuote: "Мой интерес — создавать и разрабатывать полезное программное обеспечение, которое может улучшить жизнь человека.", heroButton: "Связаться",
            aboutTitle: "Обо мне", aboutHeader: "Full-Stack Разработчик и Энтузиаст Python", aboutSubheader: "Увлеченный разработчик с прочными знаниями в области фронтенд и бэкенд технологий.", aboutParagraph: "Мой путь начался с Python, создавая всё от десктопных приложений до игр. Затем я перешел к full-stack веб-разработке на Django, создавая надежные и масштабируемые приложения. Я стремлюсь изучать новые технологии и решать сложные задачи, всегда нацеливаясь на создание значимых приложений, которые оказывают положительное влияние.", aboutButton: "Скачать резюме",
            skillsTitle: "Мои навыки",
            projectsTitle: "Мои проекты", projectsProduction: "Рабочие сайты", projectsOther: "Другие проекты и лендинги", viewProject: "Посмотреть проект", visitLiveSite: "Посетить сайт",
            contactTitle: "Свяжитесь со мной", contactSubtitle: "Есть вопрос или хотите поработать вместе? Давайте обсудим.", contactEmail: "Эл. почта", contactPhone: "Телефон", contactLocation: "Местоположение",
            formName: "Ваше имя", formEmail: "Ваша эл. почта", formSubject: "Тема", formMessage: "Сообщение", formButton: "Отправить сообщение",
            footerCopyright: "© Все права защищены, <strong><span>Атамурат</span></strong>."
        },
        tk: {
            navHome: "Baş sahypa", navAbout: "Hakkymda", navSkills: "Başarnyklar", navProjects: "Taslamalar", navContact: "Habarlaşmak",
            heroTitle: "Salam, men Atamyrat", heroSubtitle: "Men", heroQuote: "Meniň gyzyklanmam, adamyň durmuşyny gowulaşdyryp biljek peýdaly programma üpjünçiligini döretmek we ösdürmek.", heroButton: "Habarlaşalyň",
            aboutTitle: "Hakkymda", aboutHeader: "Full-Stack Programmist we Python JANKÖYERI", aboutSubheader: "Frontend we backend tehnologiýalarynda güýçli binýady bolan höwesli programmist.", aboutParagraph: "Meniň ýolum Python bilen başlady, stol programmalaryndan başlap gyzykly oýunlara çenli hemme zady gurup. Şondan soň Django bilen doly web programmirlemä geçdim, berk we giňeldilip bilinýän programmalary döretdim. Men täze tehnologiýalary öwrenmekden we çylşyrymly meseleleri çözmekden lezzet alýaryn, hemişe oňyn täsir edýän manyly programmalary gurmagy maksat edinýärin.", aboutButton: "CV ýükläp al",
            skillsTitle: "Meniň Başarnyklarym",
            projectsTitle: "Meniň Taslamalarym", projectsProduction: "Işleýän Saýtlar", projectsOther: "Beýleki Taslamalar we Landing Sahypalar", viewProject: "Taslama seret", visitLiveSite: "Saýta gir",
            contactTitle: "Men bilen Habarlaşyň", contactSubtitle: "Soragyňyz barmy ýa-da bile işleşmek isleýärsiňizmi? Geliň, gürleşeliň.", contactEmail: "E-poçta", contactPhone: "Telefon", contactLocation: "Ýerleşýän ýeri",
            formName: "Siziň adyňyz", formEmail: "Siziň e-poçtaňyz", formSubject: "Tema", formMessage: "Hat", formButton: "Hat ugrat",
            footerCopyright: "© Ähli hukuklary goragly, <strong><span>Atamyrat</span></strong>."
        }
    };

    const typedStrings = {
        en: ['Full-Stack Developer', 'Python Enthusiast', 'Software Creator', 'Problem Solver'],
        ru: ['Full-Stack Разработчик', 'Энтузиаст Python', 'Создатель ПО', 'Решатель Проблем'],
        tk: ['Full-Stack Programmist', 'Python JANKÖYERI', 'Programma dörediji', 'Mesele çözüji']
    };

    let typedInstance;

    window.setLanguage = (lang) => {
        document.querySelectorAll('[data-translate]').forEach(el => {
            const keys = el.getAttribute('data-translate').split(',');
            const mainKey = keys[0];
            const attrKey = keys[1];

            if (translations[lang][mainKey]) {
                if (attrKey === 'placeholder') {
                    el.placeholder = translations[lang][mainKey];
                } else {
                    el.innerHTML = translations[lang][mainKey];
                }
            }
        });

        if (typedInstance) {
            typedInstance.strings = typedStrings[lang];
            typedInstance.reset();
        }
        
        const langSwitcher = document.querySelector('.lang-switcher .dropdown-toggle');
        const selectedLangData = { en: { flag: 'gb', text: 'EN' }, ru: { flag: 'ru', text: 'RU' }, tk: { flag: 'tm', text: 'TK' } };
        langSwitcher.innerHTML = `<span class="fi fi-${selectedLangData[lang].flag}"></span> ${selectedLangData[lang].text}`;

        localStorage.setItem('language', lang);
    };

    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.style.opacity = '0';
            setTimeout(() => { preloader.style.display = 'none'; }, 500);
        });
    }

    const navbar = document.getElementById('navbar');
    if (navbar) {
        const handleScroll = () => { window.scrollY > 50 ? navbar.classList.add('scrolled') : navbar.classList.remove('scrolled'); };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
    }

    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true, mirror: false });

    const typedEl = document.querySelector('.typed');
    if (typedEl) {
        typedInstance = new Typed('.typed', {
            strings: typedStrings['en'],
            loop: true, typeSpeed: 70, backSpeed: 50, backDelay: 2000
        });
    }

    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);

    // REMOVED: Swiper initialization is no longer needed.

    particlesJS("particles-js", {
        "particles": { "number": { "value": 80, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#ffffff" }, "shape": { "type": "circle" }, "opacity": { "value": 0.5, "random": false }, "size": { "value": 3, "random": true }, "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 6, "direction": "none", "out_mode": "out" } },
        "interactivity": { "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" } }, "modes": { "repulse": { "distance": 100 }, "push": { "particles_nb": 4 } } },
        "retina_detect": true
    });
});