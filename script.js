/**
 * ملف JavaScript الرئيسي لموقع الأنظمة الاحترافية المتكاملة (IPS)
 * يحتوي على جميع الوظائف التفاعلية للموقع
 * بما في ذلك دعم اللغات المتعددة وتأثيرات التمرير والبطاقات التعريفية للمنتجات
 */

// بيانات اللغات
const languages = {
    ar: {
        dir: 'rtl',
        name: 'العربية',
        nav: {
            home: 'الرئيسية',
            services: 'الخدمات',
            about: 'من نحن',
            projects: 'المشاريع',
            contact: 'تواصل معنا'
        },
        hero: {
            title: 'الأنظمة الاحترافية المتكاملة',
            subtitle: 'IPS - Integrated Professional Systems',
            slogan: 'Protect what matters most',
            description: 'نحن في شركة IPS نعتبر بكوننا رائدين في مجال تقديم حلول الأمان والتكنولوجيا المتطورة، نلتزم بتقديم خدمات مبتكرة تلبي احتياجات عملائنا مع التركيز على أعلى معايير الجودة والكفاءة',
            cta: 'اطلب عرض سعر'
        },
        services: {
            title: 'خدماتنا',
            subtitle: 'نقدم مجموعة شاملة من الخدمات المتخصصة',
            categories: [
                {
                    title: 'التيار الضعيف',
                    description: 'حلول متكاملة لأنظمة الأمان والاتصالات',
                    services: [
                        'كاميرات المراقبة',
                        'إنذار السرقة',
                        'إنذار الحريق',
                        'المقاسم الهاتفية الإلكترونية (PBX)',
                        'شبكات الكمبيوتر',
                        'الطاقة'
                    ]
                },
                {
                    title: 'الأمن الصناعي وتجهيزات الدفاع المدني',
                    description: 'معدات السلامة والحماية المهنية',
                    services: [
                        'أجهزة وأنظمة إطفاء الحريق',
                        'بدلات الاقتحام والاقتراب',
                        'ستر عاكسة',
                        'خوذ وأحذية سيفتي',
                        'تجهيزات الدفاع المدني الكاملة'
                    ]
                },
                {
                    title: 'التكييف والتبريد',
                    description: 'أنظمة التكييف والتبريد المتطورة',
                    services: [
                        'توريد أنظمة التكييف',
                        'تركيب أنظمة التكييف',
                        'صيانة أنظمة التكييف'
                    ]
                },
                {
                    title: 'الأعمال الكهربائية',
                    description: 'خدمات كهربائية شاملة ومتخصصة',
                    services: [
                        'الكهرباء المنزلية',
                        'الكهرباء الصناعية',
                        'التوريد والتركيب والتنفيذ الكامل'
                    ]
                }
            ]
        },
        stats: {
            title: 'إحصائياتنا',
            items: [
                { number: '19', label: 'سنة خبرة', suffix: '+' },
                { number: '500', label: 'عميل راضي', suffix: '+' },
                { number: '1000', label: 'مشروع منجز', suffix: '+' },
                { number: '24', label: 'دعم فني', suffix: '/7' }
            ]
        },
        about: {
            title: 'من نحن',
            subtitle: 'شركة رائدة في مجال الأنظمة المتكاملة',
            description: 'تأسست شركة الأنظمة الاحترافية المتكاملة (IPS) في عام 2006، وهي شركة رائدة في مجال تقديم حلول الأمان والتكنولوجيا المتطورة. نحن نلتزم بتقديم خدمات مبتكرة تلبي احتياجات عملائنا مع التركيز على أعلى معايير الجودة والكفاءة.',
            vision: {
                title: 'رؤيتنا',
                text: 'أن نكون الشركة الرائدة في المنطقة في مجال الأنظمة المتكاملة والحلول التكنولوجية المتقدمة.'
            },
            mission: {
                title: 'رسالتنا',
                text: 'تقديم حلول متكاملة ومبتكرة في مجال الأمان والتكنولوجيا مع ضمان أعلى مستويات الجودة والخدمة.'
            },
            values: {
                title: 'قيمنا',
                items: ['الجودة', 'الابتكار', 'الثقة', 'الالتزام', 'التميز']
            }
        },
        contact: {
            title: 'تواصل معنا',
            subtitle: 'نحن هنا لخدمتكم',
            form: {
                name: 'الاسم',
                email: 'البريد الإلكتروني',
                phone: 'رقم الهاتف',
                message: 'الرسالة',
                send: 'إرسال'
            },
            info: {
                phone: '+963 11 123 4567',
                email: 'info@ips-syria.com',
                address: 'دمشق، سوريا',
                hours: 'الأحد - الخميس: 8:00 - 17:00'
            }
        },
        footer: {
            description: 'شركة الأنظمة الاحترافية المتكاملة - حلول متكاملة في مجال الأمان والتكنولوجيا',
            rights: '© 2025 جميع الحقوق محفوظة - الأنظمة الاحترافية المتكاملة'
        },
        projects: {
            title: 'المشاريع',
            subtitle: 'معرض لأعمالنا ومشاريعنا المنجزة',
            placeholder: 'المزيد من المشاريع قريباً - يمكنكم التواصل معنا لمزيد من المعلومات'
        },
        modal: {
            requestQuote: 'اطلب عرض سعر',
            moreInfo: 'المزيد من المعلومات',
            features: 'المميزات'
        }
    },
    en: {
        dir: 'ltr',
        name: 'English',
        nav: {
            home: 'Home',
            services: 'Services',
            about: 'About Us',
            projects: 'Projects',
            contact: 'Contact Us'
        },
        hero: {
            title: 'Integrated Professional Systems',
            subtitle: 'IPS - الأنظمة الاحترافية المتكاملة',
            slogan: 'Protect what matters most',
            description: 'At IPS, we consider ourselves pioneers in providing advanced security and technology solutions. We are committed to providing innovative services that meet our customers\' needs while focusing on the highest standards of quality and efficiency.',
            cta: 'Request Quote'
        },
        services: {
            title: 'Our Services',
            subtitle: 'We provide a comprehensive range of specialized services',
            categories: [
                {
                    title: 'Low Current Systems',
                    description: 'Integrated solutions for security and communication systems',
                    services: [
                        'CCTV Cameras',
                        'Burglar Alarm',
                        'Fire Alarm',
                        'Electronic PBX Systems',
                        'Computer Networks',
                        'Power Systems'
                    ]
                },
                {
                    title: 'Industrial Security & Civil Defense Equipment',
                    description: 'Professional safety and protection equipment',
                    services: [
                        'Fire Fighting Systems & Equipment',
                        'Assault & Approach Suits',
                        'Reflective Vests',
                        'Safety Helmets & Shoes',
                        'Complete Civil Defense Equipment'
                    ]
                },
                {
                    title: 'HVAC & Refrigeration',
                    description: 'Advanced air conditioning and refrigeration systems',
                    services: [
                        'HVAC Supply',
                        'HVAC Installation',
                        'HVAC Maintenance'
                    ]
                },
                {
                    title: 'Electrical Works',
                    description: 'Comprehensive and specialized electrical services',
                    services: [
                        'Residential Electrical',
                        'Industrial Electrical',
                        'Complete Supply, Installation & Implementation'
                    ]
                }
            ]
        },
        stats: {
            title: 'Our Statistics',
            items: [
                { number: '19', label: 'Years Experience', suffix: '+' },
                { number: '500', label: 'Happy Clients', suffix: '+' },
                { number: '1000', label: 'Completed Projects', suffix: '+' },
                { number: '24', label: 'Technical Support', suffix: '/7' }
            ]
        },
        about: {
            title: 'About Us',
            subtitle: 'Leading company in integrated systems',
            description: 'Integrated Professional Systems (IPS) was established in 2006, and is a leading company in providing advanced security and technology solutions. We are committed to providing innovative services that meet our customers\' needs while focusing on the highest standards of quality and efficiency.',
            vision: {
                title: 'Our Vision',
                text: 'To be the leading company in the region in the field of integrated systems and advanced technological solutions.'
            },
            mission: {
                title: 'Our Mission',
                text: 'Providing integrated and innovative solutions in the field of security and technology while ensuring the highest levels of quality and service.'
            },
            values: {
                title: 'Our Values',
                items: ['Quality', 'Innovation', 'Trust', 'Commitment', 'Excellence']
            }
        },
        contact: {
            title: 'Contact Us',
            subtitle: 'We are here to serve you',
            form: {
                name: 'Name',
                email: 'Email',
                phone: 'Phone Number',
                message: 'Message',
                send: 'Send'
            },
            info: {
                phone: '+963 11 123 4567',
                email: 'info@ips-syria.com',
                address: 'Damascus, Syria',
                hours: 'Sunday - Thursday: 8:00 - 17:00'
            }
        },
        footer: {
            description: 'Integrated Professional Systems - Integrated solutions in security and technology',
            rights: '© 2025 All Rights Reserved - Integrated Professional Systems'
        },
        projects: {
            title: 'Projects',
            subtitle: 'Gallery of our completed works and projects',
            placeholder: 'More projects coming soon - please contact us for more information'
        },
        modal: {
            requestQuote: 'Request Quote',
            moreInfo: 'More Information',
            features: 'Features'
        }
    },
    de: {
        dir: 'ltr',
        name: 'Deutsch',
        nav: {
            home: 'Startseite',
            services: 'Dienstleistungen',
            about: 'Über uns',
            projects: 'Projekte',
            contact: 'Kontakt'
        },
        hero: {
            title: 'Integrierte Professionelle Systeme',
            subtitle: 'IPS - الأنظمة الاحترافية المتكاملة',
            slogan: 'Schützen Sie, was am wichtigsten ist',
            description: 'Bei IPS betrachten wir uns als Pioniere bei der Bereitstellung fortschrittlicher Sicherheits- und Technologielösungen. Wir verpflichten uns, innovative Dienstleistungen anzubieten, die den Bedürfnissen unserer Kunden entsprechen und dabei höchste Qualitäts- und Effizienzstandards zu gewährleisten.',
            cta: 'Angebot anfordern'
        },
        services: {
            title: 'Unsere Dienstleistungen',
            subtitle: 'Wir bieten eine umfassende Palette spezialisierter Dienstleistungen',
            categories: [
                {
                    title: 'Schwachstromsysteme',
                    description: 'Integrierte Lösungen für Sicherheits- und Kommunikationssysteme',
                    services: [
                        'Überwachungskameras',
                        'Einbruchsalarm',
                        'Feueralarm',
                        'Elektronische Telefonanlagen (PBX)',
                        'Computernetzwerke',
                        'Energiesysteme'
                    ]
                },
                {
                    title: 'Industriesicherheit & Zivilschutzausrüstung',
                    description: 'Professionelle Sicherheits- und Schutzausrüstung',
                    services: [
                        'Feuerlöschsysteme & -geräte',
                        'Sturm- und Annäherungsanzüge',
                        'Reflektierende Westen',
                        'Sicherheitshelme & -schuhe',
                        'Komplette Zivilschutzausrüstung'
                    ]
                },
                {
                    title: 'Klimatechnik & Kühlung',
                    description: 'Fortschrittliche Klimaanlagen und Kühlsysteme',
                    services: [
                        'Klimaanlagen-Lieferung',
                        'Klimaanlagen-Installation',
                        'Klimaanlagen-Wartung'
                    ]
                },
                {
                    title: 'Elektroarbeiten',
                    description: 'Umfassende und spezialisierte Elektrodienstleistungen',
                    services: [
                        'Wohnelektrik',
                        'Industrieelektrik',
                        'Komplette Lieferung, Installation & Umsetzung'
                    ]
                }
            ]
        },
        stats: {
            title: 'Unsere Statistiken',
            items: [
                { number: '19', label: 'Jahre Erfahrung', suffix: '+' },
                { number: '500', label: 'Zufriedene Kunden', suffix: '+' },
                { number: '1000', label: 'Abgeschlossene Projekte', suffix: '+' },
                { number: '24', label: 'Technischer Support', suffix: '/7' }
            ]
        },
        about: {
            title: 'Über uns',
            subtitle: 'Führendes Unternehmen für integrierte Systeme',
            description: 'Integrated Professional Systems (IPS) wurde 2006 gegründet und ist ein führendes Unternehmen für fortschrittliche Sicherheits- und Technologielösungen. Wir verpflichten uns, innovative Dienstleistungen anzubieten, die den Bedürfnissen unserer Kunden entsprechen und dabei höchste Qualitäts- und Effizienzstandards zu gewährleisten.',
            vision: {
                title: 'Unsere Vision',
                text: 'Das führende Unternehmen in der Region im Bereich integrierter Systeme und fortschrittlicher Technologielösungen zu sein.'
            },
            mission: {
                title: 'Unsere Mission',
                text: 'Bereitstellung integrierter und innovativer Lösungen im Bereich Sicherheit und Technologie bei gleichzeitiger Gewährleistung höchster Qualitäts- und Servicestandards.'
            },
            values: {
                title: 'Unsere Werte',
                items: ['Qualität', 'Innovation', 'Vertrauen', 'Engagement', 'Exzellenz']
            }
        },
        contact: {
            title: 'Kontaktieren Sie uns',
            subtitle: 'Wir sind hier, um Ihnen zu dienen',
            form: {
                name: 'Name',
                email: 'E-Mail',
                phone: 'Telefonnummer',
                message: 'Nachricht',
                send: 'Senden'
            },
            info: {
                phone: '+963 11 123 4567',
                email: 'info@ips-syria.com',
                address: 'Damaskus, Syrien',
                hours: 'Sonntag - Donnerstag: 8:00 - 17:00'
            }
        },
        footer: {
            description: 'Integrated Professional Systems - Integrierte Lösungen für Sicherheit und Technologie',
            rights: '© 2025 Alle Rechte vorbehalten - Integrated Professional Systems'
        },
        projects: {
            title: 'Projekte',
            subtitle: 'Galerie unserer abgeschlossenen Arbeiten und Projekte',
            placeholder: 'Weitere Projekte werden in Kürze hinzugefügt - bitte kontaktieren Sie uns für weitere Informationen'
        },
        modal: {
            requestQuote: 'Angebot anfordern',
            moreInfo: 'Weitere Informationen',
            features: 'Eigenschaften'
        }
    }
};

// الحالة الحالية
let currentLang = 'ar';
let isMenuOpen = false;

// عناصر DOM
const htmlElement = document.documentElement;
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const langBtn = document.getElementById('langBtn');
const backToTopBtn = document.getElementById('backToTop');

// عناصر البطاقة التعريفية للمنتجات
const productModal = document.getElementById('productModal');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalSubtitle = document.getElementById('modalSubtitle');
const modalDescription = document.getElementById('modalDescription');
const modalFeatures = document.getElementById('modalFeatures');
const modalClose = document.getElementById('modalClose');
const requestQuoteBtn = document.getElementById('requestQuoteBtn');
const moreInfoBtn = document.getElementById('moreInfoBtn');

/**
 * تهيئة الصفحة عند تحميلها
 * إضافة مستمعي الأحداث وتعيين اللغة الافتراضية
 */
document.addEventListener('DOMContentLoaded', () => {
    // تعيين اللغة الافتراضية
    setLanguage(currentLang);
    
    // إضافة مستمعي الأحداث
    menuBtn.addEventListener('click', toggleMenu);
    langBtn.addEventListener('click', toggleLanguage);
    
    // تنعيم التمرير للروابط الداخلية
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // إغلاق القائمة في الهاتف المحمول بعد النقر على رابط
                if (isMenuOpen) {
                    toggleMenu();
                }
            }
        });
    });
    
    // تأثيرات التمرير
    window.addEventListener('scroll', handleScroll);
    
    // معالجة نموذج الاتصال
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    // زر العودة للأعلى
    window.addEventListener('scroll', toggleBackToTopButton);
    backToTopBtn.addEventListener('click', scrollToTop);
    
    // تهيئة تأثيرات الظهور عند التمرير
    initScrollAnimations();
    
    // تهيئة تأثيرات الصور
    initImageEffects();
    
    // تهيئة البطاقات التعريفية للمنتجات
    initProductModals();
});

/**
 * تبديل القائمة في الهاتف المحمول
 * يظهر أو يخفي القائمة عند النقر على زر القائمة
 */
function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    navLinks.classList.toggle('active', isMenuOpen);
    menuBtn.innerHTML = isMenuOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
}

/**
 * تبديل اللغة
 * ينتقل إلى اللغة التالية في القائمة عند النقر على زر اللغة
 */
function toggleLanguage() {
    const langs = Object.keys(languages);
    const currentIndex = langs.indexOf(currentLang);
    const nextIndex = (currentIndex + 1) % langs.length;
    currentLang = langs[nextIndex];
    setLanguage(currentLang);
}

/**
 * تعيين اللغة
 * يقوم بتحديث جميع النصوص في الموقع وفقاً للغة المحددة
 * @param {string} lang - رمز اللغة (ar, en, de)
 */
function setLanguage(lang) {
    const t = languages[lang];
    
    // تعيين اتجاه الصفحة
    htmlElement.setAttribute('dir', t.dir);
    htmlElement.setAttribute('lang', lang);
    
    // تحديث زر اللغة
    langBtn.innerHTML = `<i class="fas fa-globe"></i><span>${t.name}</span>`;
    
    // تحديث روابط التنقل
    document.querySelectorAll('.nav-link').forEach((link, index) => {
        const keys = Object.keys(t.nav);
        if (index < keys.length) {
            link.textContent = t.nav[keys[index]];
        }
    });
    
    // تحديث القسم الرئيسي
    document.querySelector('.hero h1').textContent = t.hero.title;
    document.querySelector('.hero h2').textContent = t.hero.subtitle;
    document.querySelector('.hero .slogan').textContent = t.hero.slogan;
    document.querySelector('.hero .description').textContent = t.hero.description;
    document.querySelector('.hero .cta-btn span').textContent = t.hero.cta;
    
    // تحديث قسم الإحصائيات
    document.querySelector('.stats .section-title').textContent = t.stats.title;
    document.querySelectorAll('.stat-item').forEach((item, index) => {
        if (index < t.stats.items.length) {
            const statData = t.stats.items[index];
            item.querySelector('.stat-number').textContent = statData.number + statData.suffix;
            item.querySelector('.stat-label').textContent = statData.label;
        }
    });
    
    // تحديث قسم الخدمات
    document.querySelector('#services .section-title').textContent = t.services.title;
    document.querySelector('#services .section-subtitle').textContent = t.services.subtitle;
    
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        if (index < t.services.categories.length) {
            const category = t.services.categories[index];
            card.querySelector('.card-title').textContent = category.title;
            card.querySelector('.card-description').textContent = category.description;
            
            const serviceItems = card.querySelectorAll('.service-item');
            serviceItems.forEach((item, i) => {
                if (i < category.services.length) {
                    item.querySelector('span').textContent = category.services[i];
                }
            });
        }
    });
    
    // تحديث قسم من نحن
    document.querySelector('#about .section-title').textContent = t.about.title;
    document.querySelector('#about .section-subtitle').textContent = t.about.subtitle;
    document.querySelector('#about .about-description').textContent = t.about.description;
    
    const aboutCards = document.querySelectorAll('.about-card');
    if (aboutCards.length >= 3) {
        aboutCards[0].querySelector('.about-card-title').textContent = t.about.vision.title;
        aboutCards[0].querySelector('.about-card-text').textContent = t.about.vision.text;
        
        aboutCards[1].querySelector('.about-card-title').textContent = t.about.mission.title;
        aboutCards[1].querySelector('.about-card-text').textContent = t.about.mission.text;
        
        aboutCards[2].querySelector('.about-card-title').textContent = t.about.values.title;
        
        // تحديث القيم
        const valuesContainer = aboutCards[2].querySelector('.values');
        valuesContainer.innerHTML = '';
        t.about.values.items.forEach(value => {
            const badge = document.createElement('span');
            badge.className = 'value-badge';
            badge.textContent = value;
            valuesContainer.appendChild(badge);
        });
    }
    
    // تحديث قسم المشاريع
    document.querySelector('#projects .section-title').textContent = t.projects.title;
    document.querySelector('#projects .section-subtitle').textContent = t.projects.subtitle;
    document.querySelector('.projects-placeholder p').textContent = t.projects.placeholder;
    
    // تحديث قسم التواصل
    document.querySelector('#contact .section-title').textContent = t.contact.title;
    document.querySelector('#contact .section-subtitle').textContent = t.contact.subtitle;
    document.querySelector('.contact-form-container h3').textContent = t.contact.title;
    
    const formLabels = document.querySelectorAll('.form-group label');
    formLabels[0].textContent = t.contact.form.name;
    formLabels[1].textContent = t.contact.form.email;
    formLabels[2].textContent = t.contact.form.phone;
    formLabels[3].textContent = t.contact.form.message;
    
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    formInputs[0].placeholder = t.contact.form.name;
    formInputs[1].placeholder = t.contact.form.email;
    formInputs[2].placeholder = t.contact.form.phone;
    formInputs[3].placeholder = t.contact.form.message;
    
    document.querySelector('.submit-btn').textContent = t.contact.form.send;
    
    const infoCards = document.querySelectorAll('.info-card');
    infoCards[0].querySelector('h4').textContent = t.dir === 'rtl' ? 'الهاتف' : 'Phone';
    infoCards[0].querySelector('p').textContent = t.contact.info.phone;
    
    infoCards[1].querySelector('h4').textContent = t.dir === 'rtl' ? 'البريد الإلكتروني' : 'Email';
    infoCards[1].querySelector('p').textContent = t.contact.info.email;
    
    infoCards[2].querySelector('h4').textContent = t.dir === 'rtl' ? 'العنوان' : 'Address';
    infoCards[2].querySelector('p').textContent = t.contact.info.address;
    
    infoCards[3].querySelector('h4').textContent = t.dir === 'rtl' ? 'ساعات العمل' : 'Working Hours';
    infoCards[3].querySelector('p').textContent = t.contact.info.hours;
    
    // تحديث الفوتر
    document.querySelector('.footer-description').textContent = t.footer.description;
    document.querySelector('.footer-copyright p').textContent = t.footer.rights;
    
    // تحديث روابط الفوتر
    const footerLinksColumns = document.querySelectorAll('.footer-links-column');
    if (footerLinksColumns.length >= 3) {
        footerLinksColumns[0].querySelector('h4').textContent = t.dir === 'rtl' ? 'روابط سريعة' : 'Quick Links';
        const quickLinks = footerLinksColumns[0].querySelectorAll('a');
        quickLinks[0].textContent = t.nav.home;
        quickLinks[1].textContent = t.nav.services;
        quickLinks[2].textContent = t.nav.about;
        quickLinks[3].textContent = t.nav.projects;
        quickLinks[4].textContent = t.nav.contact;
        
        footerLinksColumns[1].querySelector('h4').textContent = t.dir === 'rtl' ? 'خدماتنا' : 'Our Services';
        
        footerLinksColumns[2].querySelector('h4').textContent = t.dir === 'rtl' ? 'تواصل معنا' : 'Contact Us';
    }
    
    // تحديث أزرار البطاقة التعريفية
    requestQuoteBtn.textContent = t.modal.requestQuote;
    moreInfoBtn.textContent = t.modal.moreInfo;
}

/**
 * معالجة التمرير
 * تغيير لون القائمة العلوية وتفعيل تأثيرات الظهور عند التمرير
 */
function handleScroll() {
    const scrollPosition = window.scrollY;
    
    // تغيير لون القائمة العلوية عند التمرير
    const navbar = document.querySelector('.navbar');
    if (scrollPosition > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        navbar.style.boxShadow = 'none';
    }
    
    // تفعيل تأثيرات الظهور عند التمرير
    activateScrollAnimations(scrollPosition);
}

/**
 * تفعيل تأثيرات الظهور عند التمرير
 * إظهار العناصر تدريجياً عند التمرير إليها
 * @param {number} scrollPosition - موقع التمرير الحالي
 */
function activateScrollAnimations(scrollPosition) {
    const elements = document.querySelectorAll('.service-card, .about-card, .info-card, .project-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offset = window.innerHeight - 100;
        
        if (scrollPosition > elementPosition - offset) {
            element.classList.add('visible');
        }
    });
}

/**
 * تهيئة تأثيرات الظهور عند التمرير
 * تعيين الحالة الأولية للعناصر قبل ظهورها
 */
function initScrollAnimations() {
    const elements = document.querySelectorAll('.service-card, .about-card, .info-card, .project-card');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });
    
    // تفعيل التأثيرات للعناصر المرئية عند تحميل الصفحة
    setTimeout(() => {
        activateScrollAnimations(window.scrollY);
    }, 300);
}

/**
 * تهيئة تأثيرات الصور
 * إضافة تأثيرات عند المرور بالماوس فوق الصور
 */
function initImageEffects() {
    const images = document.querySelectorAll('.service-image img, .about-image img, .project-card img');
    
    images.forEach(image => {
        image.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        image.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

/**
 * معالجة إرسال النموذج
 * التحقق من صحة البيانات المدخلة وإرسال النموذج
 * @param {Event} e - حدث النموذج
 */
function handleFormSubmit(e) {
    e.preventDefault();
    
    // التحقق من صحة النموذج
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');
    
    let isValid = true;
    
    if (!nameInput.value.trim()) {
        highlightInvalidField(nameInput);
        isValid = false;
    } else {
        resetField(nameInput);
    }
    
    if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
        highlightInvalidField(emailInput);
        isValid = false;
    } else {
        resetField(emailInput);
    }
    
    if (!phoneInput.value.trim()) {
        highlightInvalidField(phoneInput);
        isValid = false;
    } else {
        resetField(phoneInput);
    }
    
    if (!messageInput.value.trim()) {
        highlightInvalidField(messageInput);
        isValid = false;
    } else {
        resetField(messageInput);
    }
    
    if (isValid) {
        // هنا يمكن إضافة كود لإرسال النموذج
        alert(currentLang === 'ar' ? 'تم إرسال الرسالة بنجاح!' : (currentLang === 'en' ? 'Message sent successfully!' : 'Nachricht erfolgreich gesendet!'));
        e.target.reset();
    }
}

/**
 * التحقق من صحة البريد الإلكتروني
 * @param {string} email - البريد الإلكتروني المراد التحقق منه
 * @returns {boolean} - صحة البريد الإلكتروني
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * تمييز الحقل غير الصحيح
 * @param {HTMLElement} field - الحقل المراد تمييزه
 */
function highlightInvalidField(field) {
    field.style.borderColor = 'var(--accent)';
    field.style.boxShadow = '0 0 0 3px rgba(228, 0, 69, 0.2)';
}

/**
 * إعادة تعيين الحقل
 * @param {HTMLElement} field - الحقل المراد إعادة تعيينه
 */
function resetField(field) {
    field.style.borderColor = 'var(--border-color)';
    field.style.boxShadow = 'none';
}

/**
 * زر العودة للأعلى
 * إظهار أو إخفاء زر العودة للأعلى حسب موقع التمرير
 */
function toggleBackToTopButton() {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
}

/**
 * التمرير للأعلى
 * التمرير إلى أعلى الصفحة بشكل سلس
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/**
 * تهيئة البطاقات التعريفية للمنتجات
 * إضافة مستمعي الأحداث للخدمات لفتح البطاقات التعريفية
 */
function initProductModals() {
    // إضافة مستمعي الأحداث لجميع عناصر الخدمات
    document.querySelectorAll('.service-item[data-service]').forEach(item => {
        item.addEventListener('click', function() {
            const serviceType = this.closest('.service-card').querySelector('.card-title').textContent.trim();
            const serviceId = this.getAttribute('data-service');
            openProductModal(serviceType, serviceId);
        });
    });
    
    // إغلاق البطاقة التعريفية
    modalClose.addEventListener('click', closeProductModal);
    productModal.addEventListener('click', function(e) {
        if (e.target === productModal) {
            closeProductModal();
        }
    });
    
    // أزرار البطاقة التعريفية
    requestQuoteBtn.addEventListener('click', function() {
        alert(languages[currentLang].modal.requestQuote);
        closeProductModal();
        
        // التمرير إلى نموذج الاتصال
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            window.scrollTo({
                top: contactSection.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
    
    moreInfoBtn.addEventListener('click', function() {
        alert(languages[currentLang].modal.moreInfo);
    });
}

/**
 * فتح البطاقة التعريفية للمنتج
 * @param {string} serviceType - نوع الخدمة (التيار الضعيف، الأمن الصناعي، إلخ)
 * @param {string} serviceId - معرف الخدمة المحدد
 */
function openProductModal(serviceType, serviceId) {
    // تحديد مجموعة البيانات المناسبة
    let dataCategory;
    
    if (serviceType.includes('التيار الضعيف') || serviceType.includes('Low Current') || serviceType.includes('Schwachstrom')) {
        dataCategory = 'lowCurrent';
    } else if (serviceType.includes('الأمن الصناعي') || serviceType.includes('Industrial Security') || serviceType.includes('Industriesicherheit')) {
        dataCategory = 'industrialSecurity';
    } else if (serviceType.includes('التكييف') || serviceType.includes('HVAC') || serviceType.includes('Klimatechnik')) {
        dataCategory = 'hvac';
    } else if (serviceType.includes('الكهربائية') || serviceType.includes('Electrical') || serviceType.includes('Elektro')) {
        dataCategory = 'electrical';
    }
    
    // الحصول على بيانات المنتج
    const productData = productsData[dataCategory][serviceId];
    if (!productData) return;
    
    // تحديث محتوى البطاقة التعريفية حسب اللغة الحالية
    const data = productData[currentLang];
    
    modalTitle.textContent = data.title;
    modalImage.src = data.image;
    modalImage.alt = data.title;
    modalSubtitle.textContent = data.title;
    modalDescription.textContent = data.description;
    
    // إضافة المميزات
    modalFeatures.innerHTML = '';
    data.features.forEach(feature => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-check-circle"></i><span>${feature}</span>`;
        modalFeatures.appendChild(li);
    });
    
    // فتح البطاقة التعريفية
    productModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // منع التمرير في الخلفية
    
    // تأثير ظهور تدريجي للمحتوى
    setTimeout(() => {
        document.querySelectorAll('.modal-content > *').forEach(el => {
            el.style.opacity = '1';
        });
    }, 100);
}

/**
 * إغلاق البطاقة التعريفية للمنتج
 */
function closeProductModal() {
    productModal.classList.remove('active');
    document.body.style.overflow = ''; // استعادة التمرير
    
    // إعادة تعيين محتوى البطاقة التعريفية
    setTimeout(() => {
        document.querySelectorAll('.modal-content > *').forEach(el => {
            el.style.opacity = '0';
        });
    }, 300);
}
