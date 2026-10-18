(() => {
    const supportedLanguages = ['es', 'en'];
    const urlLanguage = new URLSearchParams(window.location.search).get('lang');
    const storedLanguage = localStorage.getItem('language');
    const currentLanguage = supportedLanguages.includes(urlLanguage)
        ? urlLanguage
        : supportedLanguages.includes(storedLanguage)
            ? storedLanguage
            : 'es';
    const getTranslation = (source, key) => key.split('.').reduce((value, part) => value && value[part], source);

    const renderProjects = (elementId, language) => {
        const element = document.getElementById(elementId);
        if (!element) return;
        const enabledProjects = projects.filter(project => project.enabled);
        element.innerHTML = enabledProjects.map((project) => `
            <article class="project-card">
                <div class="project-image">${project.title[language]}</div>
                <h3>${project.title[language]}</h3>
                <p>${project.description[language]}</p>
                <div class="tags">${project.technologies.map((technology) => `<span class="tag">${technology}</span>`).join('')}</div>
                <a class="card-link" href="${project.url}">${language === 'es' ? 'Ver proyecto →' : 'View project →'}</a>
            </article>
        `).join('');
    };

    const renderPrivacySections = (language) => {
        const element = document.getElementById('privacy-sections');
        if (!element) return;
        element.innerHTML = privacySections[language].map(([title, paragraphs]) => `
            <section>
                <h3>${title}</h3>
                ${paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join('')}
            </section>
        `).join('');
    };

    const applyLanguage = (language) => {
        localStorage.setItem('language', language);
        document.documentElement.lang = language;
        const updatedUrl = new URL(window.location.href);
        updatedUrl.searchParams.set('lang', language);
        window.history.replaceState({}, '', updatedUrl);

        const menuLabels = language === 'es'
            ? ['Proyectos', 'Sobre mí', 'Contacto']
            : ['Projects', 'About', 'Contact'];
        const menuLinks = document.querySelectorAll('.site-nav > a');
        menuLinks.forEach((link, index) => {
            link.textContent = menuLabels[index];
        });
        document.querySelectorAll('[data-i18n]').forEach((element) => {
            const translation = getTranslation(translations[language], element.dataset.i18n);
            if (translation !== undefined) element.innerHTML = translation;
        });
        if (document.getElementById('privacy-sections')) {
            document.title = `${translations[language].privacy.title} — Mirror IRL`;
        }

        const heroTagline = document.querySelector('[data-i18n="hero.tagline"]');
        if (heroTagline) {
            heroTagline.innerHTML = language === 'es'
                ? 'Tecnología<br>para volver<br>a la vida real.'
                : 'Tech<br>to get back<br>to real life.';
        }

        document.querySelectorAll('.site-nav > a').forEach((link, index) => {
            const menuLabels = language === 'es'
                ? ['Proyectos', 'Sobre mí', 'Contacto']
                : ['Projects', 'About', 'Contact'];
            link.textContent = menuLabels[index];
        });
        document.querySelectorAll('[data-language]').forEach((button) => {
            button.classList.toggle('active', button.dataset.language === language);
        });
        renderProjects('featured-projects', language);
        renderProjects('all-projects', language);
        renderPrivacySections(language);
    };

    document.querySelectorAll('[data-language]').forEach((button) => {
        button.addEventListener('click', () => applyLanguage(button.dataset.language));
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const siteNavigation = document.querySelector('.site-nav');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            const isOpen = siteNavigation.classList.toggle('open');
            menuToggle.setAttribute('aria-expanded', isOpen);
        });
    }
    applyLanguage(currentLanguage);
})();
