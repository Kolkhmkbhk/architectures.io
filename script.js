// script.js — динамический контент и интерактивность
(function() {
  // ----- ДАННЫЕ (из React-версии) -----
  const GOALS = [
    'Развитие навыков студентов как экскурсоводов и гидов-переводчиков',
    'Подготовка участников к профессиональной аттестации',
    'Проектирование и разработка экскурсионных продуктов для СПбПУ',
    'Организация культурно-образовательных мероприятий',
    'Содействие в формировании портфолио участников',
    'Работа с грантовыми программами и конкурсами',
    'Представление интересов СПбПУ на туристических и культурных площадках'
  ];
  const STRUCTURE_CARDS = [
    { title: 'Руководитель', desc: 'Возглавляет деятельность бюро, представляет интересы во внешних организациях, координирует работу отделов.', color: '#C0432A' },
    { title: 'Отдел культурно-массовой и проектной работы', desc: 'Разработка и реализация экскурсионных маршрутов, организация мероприятий, взаимодействие с партнёрами.', color: '#2B5BA8' },
    { title: 'Медиа-отдел', desc: 'Создание фото- и видеоматериалов, ведение социальных сетей, продвижение проектного бюро.', color: '#3AAA35' },
    { title: 'Хозяйственный отдел', desc: 'Материально-техническое обеспечение деятельности бюро, организационные вопросы.', color: '#8B6914' }
  ];
  const PORTFOLIO_CARDS = [
    { id:1, img:'https://picsum.photos/seed/polytech-campus/800/500', tag:'Авторская экскурсия', tagColor:'terracotta', title:'Политехнический — сердце Политеха', desc:'Обзорная экскурсия по историческому кампусу СПбПУ.', duration:'90 мин', participants:'до 20 чел.', lang:'рус / eng' },
    { id:2, img:'https://picsum.photos/seed/spb-modern/800/500', tag:'Городская экскурсия', tagColor:'blue', title:'Архитектурный модерн Петербурга', desc:'Авторский маршрут по лучшим образцам модерна.', duration:'2 часа', participants:'до 15 чел.', lang:'рус' },
    { id:3, img:'https://picsum.photos/seed/spb-delegation/800/500', tag:'Для делегаций', tagColor:'green', title:'Экскурсионный протокол для делегаций', desc:'Программы для официальных зарубежных делегаций.', duration:'по договорённости', participants:'VIP-формат', lang:'рус / eng / по запросу' }
  ];
  const EVENTS = [
    { icon:'🏛️', title:'Международная конференция «Туризм и молодёжь»', desc:'Участие с докладом. Москва, 2024.' },
    { icon:'🏆', title:'Грантовый конкурс «Молодёжь России»', desc:'Поданы заявки на поддержку проекта «Аудиогид СПбПУ».' },
    { icon:'🎓', title:'Форум «Студенческая наука»', desc:'Презентация проекта «Квест-экскурсия».' },
    { icon:'🗺️', title:'Городской фестиваль экскурсий', desc:'Проведение открытой экскурсии для жителей.' }
  ];
  const DEV_PROJECTS = [
    { icon:'🏭', tag:'blue', title:'Индустриальный туризм Политеха', desc:'Маршрут по лабораториям и инженерным объектам.', progress:65, stage:'Разработка маршрута', date:'Осень 2025' },
    { icon:'🎮', tag:'terracotta', title:'Квест-экскурсия «Тайны Политеха»', desc:'Интерактивная экскурсия-квест.', progress:40, stage:'Сценарий', date:'Зима 2025–2026' },
    { icon:'🎧', tag:'green', title:'Аудиогид на иностранных языках', desc:'Мобильный аудиогид по кампусу.', progress:25, stage:'Концепция', date:'2026' },
    { icon:'🌊', tag:'blue', title:'Водные маршруты: Политех с реки', desc:'Экскурсия по акватории Невы.', progress:15, stage:'Исследование', date:'2026' }
  ];
  const MOSAIC_ARTICLES = [
    { icon:'🏛️', category:'Архитектура', date:'12 мая 2025', title:'Архитектурные жемчужины Петроградской стороны', excerpt:'Петроградская сторона — заповедник модерна...' },
    { icon:'📜', category:'История', date:'3 апреля 2025', title:'История экскурсионного дела в Петербурге', excerpt:'Первые организованные экскурсии появились в XIX веке.' },
    { icon:'🔩', category:'Конструктивизм', date:'18 марта 2025', title:'Конструктивизм в Ленинграде', excerpt:'Дома-коммуны, фабрики-кухни формировали облик города.' },
    { icon:'🎓', category:'Политех', date:'5 февраля 2025', title:'Памятные места Политехнического университета', excerpt:'Кампус на берегу Сосновки хранит историю науки.' },
    { icon:'🌉', category:'Символы города', date:'20 января 2025', title:'Мосты как архитектурные объекты', excerpt:'Более 300 переправ с уникальной архитектурой.' }
  ];
  const GALLERY_ITEMS = [
    { img:'https://picsum.photos/seed/spb-canal/800/600', title:'Каналы Петербурга', date:'Май 2024', author:'Медиа-отдел', place:'Канал Грибоедова' },
    { img:'https://picsum.photos/seed/constructivism/800/600', title:'Конструктивизм города', date:'Март 2024', author:'Медиа-отдел', place:'Выборгский р-н' },
    { img:'https://picsum.photos/seed/spb-rooftops/800/600', title:'Панорама с крыш', date:'Июнь 2024', author:'Медиа-отдел', place:'Центральный р-н' },
    { img:'https://picsum.photos/seed/spb-facade/800/600', title:'Детали фасадов', date:'Апрель 2024', author:'Медиа-отдел', place:'Петроградская сторона' },
    { img:'https://picsum.photos/seed/polytech-campus/800/600', title:'Кампус Политеха', date:'Сентябрь 2024', author:'Медиа-отдел', place:'СПбПУ' },
    { img:'https://picsum.photos/seed/spb-modern/800/600', title:'Модерн Петербурга', date:'Октябрь 2024', author:'Медиа-отдел', place:'Каменноостровский пр.' }
  ];
  const NEWS_ITEMS = [
    { day:'14', monthYear:'Май 2025', tag:'Мероприятие', tagColor:'terracotta', title:'Лекция «Аттестация экскурсоводов»', text:'Открытая лекция о требованиях к аттестации гидов.' },
    { day:'02', monthYear:'Апр. 2025', tag:'Анонс', tagColor:'blue', title:'Открытая экскурсия «Модерн за один день»', text:'Бесплатная экскурсия по Петроградской стороне.' },
    { day:'20', monthYear:'Мар. 2025', tag:'Успех', tagColor:'green', title:'Победа в грантовом конкурсе', text:'Проект «Аудиогид» получил грантовую поддержку.' }
  ];
  const PARTNERS = ['Туристско-информационное бюро СПб', 'Комитет по туризму Санкт-Петербурга', 'Совет по молодёжной политике СПбПУ', 'ИПМЭиТ СПбПУ', 'Союз экскурсоводов СПб'];

  // ----- РЕНДЕР ФУНКЦИИ -----
  function renderGoals() { const container = document.getElementById('goalsList'); if(container) container.innerHTML = GOALS.map((g,i) => `<li><span class="goal-icon">${i+1}</span><span>${g}</span></li>`).join(''); }
  function renderStructure() { const container = document.getElementById('structureGrid'); if(container) container.innerHTML = STRUCTURE_CARDS.map(c => `<div class="structure-card" style="border-left-color:${c.color}"><h4>${c.title}</h4><p>${c.desc}</p></div>`).join(''); }
  function renderPortfolio() { const container = document.getElementById('portfolioGrid'); if(container) container.innerHTML = PORTFOLIO_CARDS.map(card => `<article class="portfolio-card"><div class="portfolio-card-img-wrap" style="position:relative"><img src="${card.img}" alt="${card.title}" loading="lazy"><span class="demo-badge">демо-контент</span></div><div class="portfolio-card-body"><span class="tag tag-${card.tagColor}">${card.tag}</span><h3>${card.title}</h3><p>${card.desc}</p><div class="portfolio-meta"><span class="meta-item">🕒 ${card.duration}</span><span class="meta-item">👥 ${card.participants}</span><span class="meta-item">🌐 ${card.lang}</span></div></div></article>`).join(''); }
  function renderEvents() { const container = document.getElementById('eventsGrid'); if(container) container.innerHTML = EVENTS.map(e => `<div class="event-card"><div class="event-icon">${e.icon}</div><div><h4>${e.title}</h4><p>${e.desc}</p></div></div>`).join(''); }
  function renderDevProjects() { const container = document.getElementById('projectsDevGrid'); if(container) container.innerHTML = DEV_PROJECTS.map(p => `<div class="dev-card"><div class="dev-card-icon">${p.icon}</div><span class="tag tag-${p.tag}">${p.stage}</span><h3>${p.title}</h3><p>${p.desc}</p><div class="dev-progress"><div class="dev-progress-label"><span>Готовность</span><span>${p.progress}%</span></div><div class="dev-progress-bar"><div class="dev-progress-fill" style="width:${p.progress}%"></div></div></div><div class="dev-card-footer"><span class="dev-date">📅 Запуск: ${p.date}</span><a href="#contacts" class="read-more">Участвовать →</a></div></div>`).join(''); }
  function renderMosaic() { const container = document.getElementById('mosaicGrid'); if(container) container.innerHTML = MOSAIC_ARTICLES.map(a => `<article class="mosaic-card"><div class="mosaic-card-header"><div class="mosaic-icon">${a.icon}</div><div class="mosaic-card-meta"><span class="mosaic-card-date">${a.date}</span><span class="mosaic-card-category">${a.category}</span></div></div><div class="mosaic-card-body"><h3>${a.title}</h3><p>${a.excerpt}</p><a href="#" class="read-more demo-link">Читать далее →</a></div></article>`).join(''); attachDemoLinks(); }
  function renderGallery() { const container = document.getElementById('galleryGrid'); if(container) container.innerHTML = GALLERY_ITEMS.map((item, idx) => `<figure class="gallery-card" data-img="${item.img}" data-caption="${item.title} · ${item.place} · ${item.date}"><div class="gallery-card-img-wrap"><img src="${item.img}" alt="${item.title}" loading="lazy"><div class="gallery-card-overlay"><div class="gallery-card-info"><h4>${item.title}</h4><p>${item.place} · ${item.date}</p></div></div></div><figcaption class="gallery-caption"><strong>${item.title}</strong><br><span>${item.date} · ${item.place} · © ${item.author}</span></figcaption></figure>`).join(''); attachGalleryLightbox(); }
  function renderNews() { const container = document.getElementById('newsList'); if(container) container.innerHTML = NEWS_ITEMS.map(n => `<article class="news-card"><div class="news-date-block"><div class="news-day">${n.day}</div><div class="news-month-year">${n.monthYear}</div></div><div class="news-content"><span class="tag tag-${n.tagColor}">${n.tag}</span><h3>${n.title}</h3><p>${n.text}</p><a href="#" class="news-read-more demo-link">Подробнее →</a></div></article>`).join(''); attachDemoLinks(); }
  function renderPartners() { const container = document.getElementById('partnersGrid'); if(container) container.innerHTML = PARTNERS.map(p => `<div class="partner-logo">${p}</div>`).join(''); }

  function attachDemoLinks() { document.querySelectorAll('.demo-link').forEach(link => { link.addEventListener('click', (e) => { e.preventDefault(); alert('Полная версия материала будет доступна после публикации. (Демо-режим)'); }); }); }
  function attachGalleryLightbox() { const lightbox = document.getElementById('lightbox'); const lightboxImg = document.getElementById('lightboxImg'); const lightboxCaption = document.getElementById('lightboxCaption'); const closeBtn = document.getElementById('lightboxClose'); document.querySelectorAll('.gallery-card').forEach(card => { card.addEventListener('click', () => { const imgSrc = card.dataset.img; const caption = card.dataset.caption; if(imgSrc) { lightboxImg.src = imgSrc; lightboxCaption.textContent = caption; lightbox.classList.add('open'); } }); }); const closeLightbox = () => lightbox.classList.remove('open'); closeBtn.addEventListener('click', closeLightbox); lightbox.addEventListener('click', (e) => { if(e.target === lightbox) closeLightbox(); }); }

  // ----- ИНТЕРАКТИВНОСТЬ: header, бургер, плавный скролл, back-to-top, модалка, форма -----
  let header = document.getElementById('mainHeader');
  window.addEventListener('scroll', () => { if(header) header.classList.toggle('scrolled', window.scrollY > 50); const backBtn = document.getElementById('backToTopBtn'); if(backBtn) backBtn.classList.toggle('visible', window.scrollY > 400); });
  const burger = document.getElementById('burgerBtn'); const mobileNav = document.getElementById('mobileNav');
  if(burger && mobileNav) { burger.addEventListener('click', () => { burger.classList.toggle('open'); mobileNav.classList.toggle('open'); const expanded = burger.classList.contains('open'); burger.setAttribute('aria-expanded', expanded); }); }

  function smoothScroll(targetId) { const element = document.querySelector(targetId); if(element) { const offset = 76; const top = element.getBoundingClientRect().top + window.scrollY - offset; window.scrollTo({ top, behavior: 'smooth' }); } }
  document.querySelectorAll('.nav-link, .hero-scroll, .hero-buttons .btn, #logoLink, #footerPrivacyLink, .back-to-top, .footer-nav a, .footer-links a, .read-more[href^="#"]').forEach(anchor => { anchor.addEventListener('click', (e) => { const href = anchor.getAttribute('href'); if(href && href.startsWith('#')) { e.preventDefault(); smoothScroll(href); if(mobileNav?.classList.contains('open')) { burger?.classList.remove('open'); mobileNav.classList.remove('open'); } } }); });
  document.getElementById('backToTopBtn')?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  // PDF кнопка демо
  document.getElementById('downloadPdfBtn')?.addEventListener('click', (e) => { e.preventDefault(); alert('Файл Положения будет доступен после загрузки документа на сервер. (Демо-режим)'); });
  // Модалка конфиденциальности
  const modal = document.getElementById('privacyModal'); const openModalBtns = document.querySelectorAll('#privacyPolicyLink, #footerPrivacyLink'); const closeModal = () => modal?.classList.remove('open'); if(openModalBtns.length) openModalBtns.forEach(btn => btn.addEventListener('click', (e) => { e.preventDefault(); modal?.classList.add('open'); })); document.getElementById('closeModalBtn')?.addEventListener('click', closeModal); document.getElementById('modalAgreeBtn')?.addEventListener('click', closeModal); modal?.addEventListener('click', (e) => { if(e.target === modal) closeModal(); });
  // Форма обратной связи
  const form = document.getElementById('feedbackForm'); if(form){ form.addEventListener('submit', (e) => { e.preventDefault(); const consent = document.getElementById('consentCheckbox')?.checked; if(!consent){ alert('Пожалуйста, подтвердите согласие на обработку персональных данных.'); return; } alert('Данные не отправляются на сервер (демо-режим). Для связи используйте email: architektury@spbstu.ru'); console.log('Форма (демо):', { name: document.getElementById('contact-name')?.value, email: document.getElementById('contact-email')?.value, message: document.getElementById('contact-message')?.value }); form.reset(); document.getElementById('consentCheckbox').checked = false; }); }

  // Вызов всех рендеров
  renderGoals(); renderStructure(); renderPortfolio(); renderEvents(); renderDevProjects(); renderMosaic(); renderGallery(); renderNews(); renderPartners();
  // добавим базовую обработку для hero кнопок (дубль)
})();