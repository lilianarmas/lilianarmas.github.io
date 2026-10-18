const projects = [{
    id: 'mirror-irl',
    title: {
        es: 'Mirror IRL',
        en: 'Mirror IRL'
    },
    description: {
        es: 'Un espejo simple para tu vida real. Próximamente...',
        en: 'A simple mirror for your real life. Coming soon...'
    },
    technologies: ['React Native', 'Expo'],
    url: 'mirror-irl/index.html',
    enabled: true
},
{
    id: 'donde-salgo-subte',
    title: {
        es: '¿Dónde salgo subte?',
        en: '¿Dónde salgo subte?'
    },
    description: {
        es: 'Busca la salida más cercana al subte de Buenos Aires. Próximamente...',
        en: 'Find the most close exit to Buenos Aires subway. Coming soon...'
    },
    technologies: ['React Native', 'Expo'],
    url: 'donde-salgo-subte/index.html',
    enabled: false
},
{
    id: 'lumbral',
    title: {
        es: 'Lumbral',
        en: 'Lumbral'
    },
    description: {
        es: 'Encuentra impulsos para volver a la vida real. Próximamente...',
        en: 'Find impulses to back to real life. Coming soon...'
    },
    technologies: ['React Native', 'Expo'],
    url: 'lumbral/index.html',
    enabled: false
}];

const translations = {
    es: {
        nav: {
            projects: 'Proyectos',
            about: 'Sobre mí',
            contact: 'Contacto'
        },
        hero: {
            eyebrow: 'INGENIERO EN INFORMÁTICA',
            title: 'Construyendo productos digitales<br>para una vida más real.',
            description: 'Soy desarrolladora de software con más de 15 años de experiencia creando aplicaciones web, móviles y de escritorio. Me apasiona aplicar tecnología para solucionar problemas concretos de nuestra vida cotidiana.',
            projects: 'Ver mis proyectos →',
            contact: 'Contactar'
        },
        featured: {
            title: 'Proyectos destacados',
            all: 'Ver todos los proyectos →'
        },
        values: {
            frontend: {
                title: 'Frontend, Mobile & Desktop',
                text: 'React · React Native · Node.js'
            },
            product: {
                title: 'De la idea al producto',
                text: 'Diseñar · Construir · Iterar'
            },
            purpose: {
                title: 'Tecnología con propósito',
                text: 'Útil y humana'
            }
        },
        footer: {
            text: 'Construyendo cosas útiles<br>para una vida más real.',
            privacy: 'Política de privacidad'
        },
        common: {
            back: 'Volver al inicio',
            allProjects: 'Todos los proyectos',
            backProject: 'Volver a Mirror IRL'
        },
        projects: {
            eyebrow: 'TRABAJO SELECCIONADO',
            title: 'Proyectos',
            intro: 'Una pequeña selección de productos digitales construidos con cuidado y propósito.'
        },
        mirror: {
            tagline: 'Un espejo simple para tu vida real.',
            description: 'Una aplicación de espejo minimalista y elegante para Android. Diseñada para momentos cotidianos, sin distracciones.',
            googlePlay: 'Disponible en Google Play (Próximamente...)',
            zoom: 'Zoom',
            zoomText: 'Pinch o deslizador',
            light: 'Luz de pantalla',
            lightText: 'Blanca o cálida',
            freeze: 'Congelar',
            freezeText: 'Congela la imagen en cualquier momento',
            account: 'Sin cuenta',
            accountText: 'Tus datos permanecen en tu dispositivo',
            heading: 'Un espejo limpio y útil, siempre contigo.',
            longDescription: 'Mirror IRL te ayuda a revisar tu apariencia de forma rápida y sencilla, con una interfaz limpia y todo lo esencial.',
            bullet1: 'Diseño minimalista e intuitivo',
            bullet2: 'Zoom con gesto o deslizador',
            bullet3: 'Luz blanca o cálida',
            bullet4: 'Sin anuncios, cuentas ni distracciones',
            privacy: 'Política de privacidad →'
        },
        privacy: {
            eyebrow: 'PRIVACIDAD',
            title: 'Política de privacidad',
            updated: 'Última actualización: 8 de octubre de 2026',
            description: 'Mirror IRL es una aplicación de espejo desarrollada por Lilian Armas, diseñada para funcionar directamente en tu dispositivo.',
            intro: 'Esta política explica cómo la aplicación utiliza los permisos del dispositivo y gestiona la información durante su funcionamiento.'
        }
    },
    en: {
        nav: {
            projects: 'Projects',
            about: 'About',
            contact: 'Contact'
        },
        hero: {
            eyebrow: 'SOFTWARE ENGINEER',
            title: 'Building digital products<br>for a more real life.',
            description: "I'm a software engineer with 15+ years of experience building web, mobile, and desktop applications. I'm passionate about using technology to solve everyday problems.",
            projects: 'View my projects →',
            contact: 'Get in touch'
        },
        featured: {
            title: 'Featured projects',
            all: 'View all projects →'
        },
        values: {
            frontend: {
                title: 'Frontend, Mobile & Backend',
                text: 'React · React Native · Node.js'
            },
            product: {
                title: 'From idea to product',
                text: 'Design · Build · Iterate'
            },
            purpose: {
                title: 'Tech with purpose',
                text: 'Useful and human'
            }
        },
        footer: {
            text: 'Building useful<br>things for a more real life.',
            privacy: 'Privacy policy'
        },
        common: {
            back: 'Back home',
            allProjects: 'All projects',
            backProject: 'Back to Mirror IRL'
        },
        projects: {
            eyebrow: 'SELECTED WORK',
            title: 'Projects',
            intro: 'A small selection of digital products built with care and purpose.'
        },
        mirror: {
            tagline: 'A simple mirror for your real life.',
            description: 'A minimal and elegant mirror app for Android. Designed for everyday moments, without distractions.',
            googlePlay: 'Get it on Google Play (Coming soon...)',
            zoom: 'Zoom',
            zoomText: 'Pinch or slider',
            light: 'Screen light',
            lightText: 'White or warm',
            freeze: 'Freeze',
            freezeText: 'Freeze the image anytime',
            account: 'No account',
            accountText: 'Your data stays on your device',
            heading: 'A clean and useful mirror, always with you.',
            longDescription: 'Mirror IRL helps you check your look quickly and easily, with a clean interface and the essentials you need.',
            bullet1: 'Minimal and intuitive design',
            bullet2: 'Zoom with pinch or slider',
            bullet3: 'Screen light, white or warm',
            bullet4: 'No ads, no account, no distractions',
            privacy: 'Privacy policy →'
        },
        privacy: {
            eyebrow: 'PRIVACY',
            title: 'Privacy Policy',
            updated: 'Last updated: October 8, 2026',
            description: 'Mirror IRL is a mirror app developed by Lilian Armas, designed to run directly on your device.',
            intro: 'This policy explains how the app uses device permissions and handles information when you use it.'
        }
    }
};
const privacySections = {
    es: [
        ['1. Recopilación de información',
            [
                'Mirror IRL no recopila, almacena en servidores ni comparte información personal de sus usuarios.',
                'La aplicación no requiere crear una cuenta ni proporcionar datos personales para utilizar sus funciones.'
            ]
        ],
        ['2. Acceso a la cámara',
            [
                'Mirror IRL solicita permiso para acceder a la cámara frontal exclusivamente para proporcionar la funcionalidad de espejo.',
                'Las imágenes de la cámara se procesan localmente en el dispositivo y no se transmiten a servidores externos.',
                'Puedes revocar el permiso de cámara en cualquier momento desde la configuración de tu dispositivo. Sin este permiso, la funcionalidad principal de la aplicación no estará disponible.'
            ]
        ],
        ['3. Función Freeze',
            [
                'La función Freeze permite congelar temporalmente la imagen mostrada en pantalla.',
                'La imagen se mantiene en la memoria del dispositivo mientras se utiliza esta función. Al regresar a la vista de cámara, la aplicación deja de conservarla y su memoria puede ser liberada por el sistema.',
                'Mirror IRL no guarda estas imágenes en la galería ni las transmite a servidores externos.'
            ]
        ],
        ['4. Servicios de terceros',
            [
                'Mirror IRL no incorpora servicios de publicidad, análisis de comportamiento ni seguimiento de usuarios.',
                'La aplicación utiliza componentes de software necesarios para su funcionamiento, pero no los emplea intencionalmente para recopilar información personal.'
            ]
        ],
        ['5. Conexión a internet y seguridad',
            [
                'Las funciones principales de Mirror IRL se ejecutan localmente y no requieren conexión a internet.',
                'La aplicación no transmite las imágenes de la cámara ni los datos de uso a servidores del desarrollador.'
            ]
        ],
        ['6. Conservación y eliminación de datos',
            [
                'Mirror IRL no almacena datos personales en servidores externos, no mantiene un historial de imágenes ni crea cuentas de usuario.',
                'La desarrolladora no conserva datos personales que requieran una solicitud de eliminación.'
            ]
        ],
        ['7. Cambios en esta política',
            [
                'Esta política puede actualizarse para reflejar cambios en la aplicación o en los requisitos legales aplicables.',
                'Cualquier modificación se publicará en esta página junto con la fecha de la última actualización.'
            ]
        ],
        ['8. Contacto',
            [
                'Si tienes preguntas sobre esta política de privacidad, puedes comunicarte con la desarrolladora a través del siguiente correo electrónico:',
                '<strong>Lilian Armas</strong>',
                '<strong>Correo:</strong> <a href="mailto:lilianarmas.dev@gmail.com">lilianarmas.dev@gmail.com</a>'
            ]
        ],
    ],
    en: [
        ['1. Data Collection',
            [
                'Mirror IRL does not collect, store on servers, or share users\' personal information.',
                'The app does not require you to create an account or provide personal information to use its features.'
            ]
        ],
        ['2. Camera Access',
            [
                'Mirror IRL requests permission to access the front-facing camera solely to provide its mirror functionality.',
                'Camera images are processed locally on the device and are not transmitted to external servers.',
                'You can revoke camera permission at any time in your device settings. Without this permission, the app\'s main functionality will not be available.'
            ]
        ],
        ['3. Freeze Feature',
            [
                'The Freeze feature lets you temporarily freeze the image displayed on the screen.',
                'The image is held in the device\'s memory while this feature is in use. When you return to the camera view, the app no longer retains the image reference, and the system may release the associated memory.',
                'Mirror IRL does not save these images to the gallery or transmit them to external servers.'
            ]
        ],
        ['4. Third-Party Services',
            [
                'Mirror IRL does not include advertising, behavioral analytics, or user tracking services.',
                'The app uses software components necessary for its operation, but it does not intentionally use them to collect personal information.'
            ]
        ],
        ['5. Internet Connection and Security',
            [
                'Mirror IRL\'s main features run locally and do not require an internet connection.',
                'The app does not transmit camera images or usage data to the developer\'s servers.'
            ]
        ],
        ['6. Data Retention and Deletion',
            [
                'Mirror IRL does not store personal data on external servers, maintain an image history, or create user accounts.',
                'The developer does not retain personal data that would require a deletion request.'
            ]
        ],
        ['7. Changes to This Policy',
            [
                'This policy may be updated to reflect changes to the app or applicable legal requirements.',
                'Any changes will be published on this page along with the date of the last update.'
            ]
        ],
        ['8. Contact',
            [
                'If you have questions about this Privacy Policy, you can contact the developer at the following email address:',
                '<strong>Lilian Armas</strong>',
                '<strong>Email:</strong> <a href="mailto:lilianarmas.dev@gmail.com">lilianarmas.dev@gmail.com</a>'
            ]
        ]
    ]
};
