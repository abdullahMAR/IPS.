/**
 * بيانات المنتجات والخدمات
 * يحتوي هذا الملف على بيانات تفصيلية لكل منتج وخدمة تقدمها الشركة
 * البيانات منظمة حسب فئات الخدمات الرئيسية
 */

const productsData = {
    // بيانات منتجات التيار الضعيف
    lowCurrent: {
        "cameras": {
            ar: {
                title: "كاميرات المراقبة",
                description: "أنظمة كاميرات مراقبة متطورة بدقة عالية وتقنيات ذكية للتعرف على الوجوه والحركة",
                image: "images/7uz6y2LDMmu4.jpg",
                features: [
                    "دقة تصوير عالية تصل إلى 4K",
                    "رؤية ليلية متطورة",
                    "تقنية التعرف على الوجوه",
                    "تسجيل مستمر 24/7",
                    "إمكانية المراقبة عن بعد"
                ]
            },
            en: {
                title: "CCTV Cameras",
                description: "Advanced high-definition surveillance camera systems with smart face and motion detection technologies",
                image: "images/7uz6y2LDMmu4.jpg",
                features: [
                    "High resolution up to 4K",
                    "Advanced night vision",
                    "Facial recognition technology",
                    "24/7 continuous recording",
                    "Remote monitoring capability"
                ]
            },
            de: {
                title: "Überwachungskameras",
                description: "Fortschrittliche hochauflösende Überwachungskamerasysteme mit intelligenten Gesichts- und Bewegungserkennungstechnologien",
                image: "images/7uz6y2LDMmu4.jpg",
                features: [
                    "Hohe Auflösung bis zu 4K",
                    "Fortschrittliches Nachtsicht",
                    "Gesichtserkennungstechnologie",
                    "24/7 kontinuierliche Aufnahme",
                    "Fernüberwachungsfähigkeit"
                ]
            }
        },
        "burglarAlarm": {
            ar: {
                title: "إنذار السرقة",
                description: "أنظمة إنذار متطورة للكشف عن محاولات السرقة والاقتحام وتنبيه المالكين والجهات المختصة فوراً",
                image: "images/C7dgR3d61ToE.jpg",
                features: [
                    "حساسات حركة عالية الدقة",
                    "إنذار صوتي قوي",
                    "اتصال تلقائي بالجهات الأمنية",
                    "تطبيق للتحكم عن بعد",
                    "بطارية احتياطية عند انقطاع التيار"
                ]
            },
            en: {
                title: "Burglar Alarm",
                description: "Advanced alarm systems to detect theft and intrusion attempts and immediately alert owners and authorities",
                image: "images/C7dgR3d61ToE.jpg",
                features: [
                    "High-precision motion sensors",
                    "Powerful sound alarm",
                    "Automatic connection to security authorities",
                    "Remote control application",
                    "Backup battery during power outages"
                ]
            },
            de: {
                title: "Einbruchsalarm",
                description: "Fortschrittliche Alarmsysteme zur Erkennung von Diebstahl- und Eindringversuchen und sofortigen Benachrichtigung von Eigentümern und Behörden",
                image: "images/C7dgR3d61ToE.jpg",
                features: [
                    "Hochpräzise Bewegungssensoren",
                    "Leistungsstarker Schallalarm",
                    "Automatische Verbindung zu Sicherheitsbehörden",
                    "Fernbedienungsanwendung",
                    "Backup-Batterie bei Stromausfällen"
                ]
            }
        },
        "fireAlarm": {
            ar: {
                title: "إنذار الحريق",
                description: "أنظمة إنذار حريق متطورة للكشف المبكر عن الحرائق وتنبيه المستخدمين وإطلاق أنظمة الإطفاء التلقائية",
                image: "images/F9TZUh8LTmC9.jpg",
                features: [
                    "كاشفات دخان وحرارة عالية الحساسية",
                    "إنذار صوتي ومرئي",
                    "اتصال تلقائي بالدفاع المدني",
                    "أنظمة إطفاء تلقائية",
                    "مقاومة للظروف القاسية"
                ]
            },
            en: {
                title: "Fire Alarm",
                description: "Advanced fire alarm systems for early fire detection, user alerts, and automatic fire suppression systems activation",
                image: "images/F9TZUh8LTmC9.jpg",
                features: [
                    "Highly sensitive smoke and heat detectors",
                    "Audio and visual alarms",
                    "Automatic connection to civil defense",
                    "Automatic fire suppression systems",
                    "Resistant to harsh conditions"
                ]
            },
            de: {
                title: "Feueralarm",
                description: "Fortschrittliche Brandmeldesysteme zur frühzeitigen Branderkennung, Benutzerbenachrichtigungen und automatischen Aktivierung von Brandbekämpfungssystemen",
                image: "images/F9TZUh8LTmC9.jpg",
                features: [
                    "Hochempfindliche Rauch- und Wärmedetektoren",
                    "Audio- und visuelle Alarme",
                    "Automatische Verbindung zum Zivilschutz",
                    "Automatische Brandbekämpfungssysteme",
                    "Beständig gegen raue Bedingungen"
                ]
            }
        },
        "pbx": {
            ar: {
                title: "المقاسم الهاتفية الإلكترونية (PBX)",
                description: "أنظمة اتصالات داخلية متكاملة للشركات والمؤسسات مع ميزات متقدمة للاتصال والتحويل",
                image: "images/ZTajvtxFsuuM.jpg",
                features: [
                    "دعم مئات الخطوط الداخلية",
                    "نظام رد آلي متطور",
                    "تسجيل المكالمات",
                    "تكامل مع أنظمة الاتصال الحديثة",
                    "إدارة سهلة عبر واجهة ويب"
                ]
            },
            en: {
                title: "Electronic PBX Systems",
                description: "Integrated internal communication systems for companies and institutions with advanced calling and transfer features",
                image: "images/ZTajvtxFsuuM.jpg",
                features: [
                    "Support for hundreds of extensions",
                    "Advanced auto-attendant system",
                    "Call recording",
                    "Integration with modern communication systems",
                    "Easy management through web interface"
                ]
            },
            de: {
                title: "Elektronische Telefonanlagen (PBX)",
                description: "Integrierte interne Kommunikationssysteme für Unternehmen und Institutionen mit fortschrittlichen Anruf- und Übertragungsfunktionen",
                image: "images/ZTajvtxFsuuM.jpg",
                features: [
                    "Unterstützung für Hunderte von Nebenstellen",
                    "Fortschrittliches automatisches Antwortsystem",
                    "Anrufaufzeichnung",
                    "Integration mit modernen Kommunikationssystemen",
                    "Einfache Verwaltung über Webschnittstelle"
                ]
            }
        },
        "networks": {
            ar: {
                title: "شبكات الكمبيوتر",
                description: "تصميم وتنفيذ شبكات الكمبيوتر المحلية والموسعة بأحدث التقنيات وأعلى معايير الأمان",
                image: "images/4jFYwC0hdhL6.jpg",
                features: [
                    "شبكات سلكية ولاسلكية",
                    "أنظمة حماية متطورة",
                    "إدارة الشبكات عن بعد",
                    "حلول مخصصة للشركات",
                    "دعم فني على مدار الساعة"
                ]
            },
            en: {
                title: "Computer Networks",
                description: "Design and implementation of local and wide area computer networks with the latest technologies and highest security standards",
                image: "images/4jFYwC0hdhL6.jpg",
                features: [
                    "Wired and wireless networks",
                    "Advanced protection systems",
                    "Remote network management",
                    "Customized solutions for companies",
                    "24/7 technical support"
                ]
            },
            de: {
                title: "Computernetzwerke",
                description: "Design und Implementierung von lokalen und weiträumigen Computernetzwerken mit neuesten Technologien und höchsten Sicherheitsstandards",
                image: "images/4jFYwC0hdhL6.jpg",
                features: [
                    "Kabelgebundene und drahtlose Netzwerke",
                    "Fortschrittliche Schutzsysteme",
                    "Fernverwaltung von Netzwerken",
                    "Maßgeschneiderte Lösungen für Unternehmen",
                    "24/7 technischer Support"
                ]
            }
        },
        "power": {
            ar: {
                title: "أنظمة الطاقة",
                description: "حلول متكاملة لأنظمة الطاقة الاحتياطية وحماية الأجهزة الإلكترونية من انقطاع التيار والتذبذبات",
                image: "images/H3AoQQkmtvkc.jpg",
                features: [
                    "أنظمة UPS بمختلف السعات",
                    "مولدات كهربائية احتياطية",
                    "أنظمة حماية من الصواعق",
                    "حلول الطاقة المستدامة",
                    "صيانة دورية وطارئة"
                ]
            },
            en: {
                title: "Power Systems",
                description: "Integrated solutions for backup power systems and protection of electronic devices from power outages and fluctuations",
                image: "images/H3AoQQkmtvkc.jpg",
                features: [
                    "UPS systems of various capacities",
                    "Backup electrical generators",
                    "Lightning protection systems",
                    "Sustainable energy solutions",
                    "Regular and emergency maintenance"
                ]
            },
            de: {
                title: "Energiesysteme",
                description: "Integrierte Lösungen für Notstromsysteme und Schutz elektronischer Geräte vor Stromausfällen und Schwankungen",
                image: "images/H3AoQQkmtvkc.jpg",
                features: [
                    "USV-Systeme verschiedener Kapazitäten",
                    "Elektrische Backup-Generatoren",
                    "Blitzschutzsysteme",
                    "Nachhaltige Energielösungen",
                    "Regelmäßige und Notfallwartung"
                ]
            }
        }
    },
    
    // بيانات منتجات الأمن الصناعي وتجهيزات الدفاع المدني
    industrialSecurity: {
        "fireFighting": {
            ar: {
                title: "أجهزة وأنظمة إطفاء الحريق",
                description: "مجموعة متكاملة من أنظمة وأجهزة إطفاء الحريق المتطورة للمنشآت السكنية والتجارية والصناعية",
                image: "images/SD4aK6ZkCPQu.jpg",
                features: [
                    "طفايات حريق بمختلف الأنواع والأحجام",
                    "أنظمة رش آلية",
                    "أنظمة إطفاء بالغاز",
                    "خراطيم وبكرات إطفاء",
                    "صيانة دورية وإعادة تعبئة"
                ]
            },
            en: {
                title: "Fire Fighting Systems & Equipment",
                description: "A comprehensive range of advanced fire extinguishing systems and devices for residential, commercial, and industrial facilities",
                image: "images/SD4aK6ZkCPQu.jpg",
                features: [
                    "Fire extinguishers of various types and sizes",
                    "Automatic sprinkler systems",
                    "Gas fire suppression systems",
                    "Fire hoses and reels",
                    "Regular maintenance and refilling"
                ]
            },
            de: {
                title: "Feuerlöschsysteme & -geräte",
                description: "Eine umfassende Palette fortschrittlicher Brandbekämpfungssysteme und -geräte für Wohn-, Gewerbe- und Industrieanlagen",
                image: "images/SD4aK6ZkCPQu.jpg",
                features: [
                    "Feuerlöscher verschiedener Typen und Größen",
                    "Automatische Sprinklersysteme",
                    "Gaslöschsysteme",
                    "Feuerwehrschläuche und -rollen",
                    "Regelmäßige Wartung und Nachfüllung"
                ]
            }
        },
        "assaultSuits": {
            ar: {
                title: "بدلات الاقتحام والاقتراب",
                description: "بدلات متخصصة للحماية من الحرارة والنيران للعاملين في مجال الإطفاء والإنقاذ",
                image: "images/u5Uv5NEbNcry.jpg",
                features: [
                    "مقاومة للحرارة العالية",
                    "خفيفة الوزن وسهلة الحركة",
                    "مزودة بعاكسات ضوئية",
                    "متوفرة بمقاسات مختلفة",
                    "مطابقة للمعايير العالمية"
                ]
            },
            en: {
                title: "Assault & Approach Suits",
                description: "Specialized suits for protection against heat and fire for firefighting and rescue personnel",
                image: "images/u5Uv5NEbNcry.jpg",
                features: [
                    "Resistant to high temperatures",
                    "Lightweight and easy to move in",
                    "Equipped with light reflectors",
                    "Available in various sizes",
                    "Compliant with international standards"
                ]
            },
            de: {
                title: "Sturm- und Annäherungsanzüge",
                description: "Spezialanzüge zum Schutz vor Hitze und Feuer für Feuerwehr- und Rettungspersonal",
                image: "images/u5Uv5NEbNcry.jpg",
                features: [
                    "Beständig gegen hohe Temperaturen",
                    "Leicht und bewegungsfreundlich",
                    "Ausgestattet mit Lichtreflektoren",
                    "In verschiedenen Größen erhältlich",
                    "Entspricht internationalen Standards"
                ]
            }
        },
        "reflectiveVests": {
            ar: {
                title: "ستر عاكسة",
                description: "ستر عاكسة عالية الجودة للعاملين في مواقع البناء والطرق والمناطق الخطرة لزيادة الرؤية والأمان",
                image: "images/pSbnlJ272QA6.jpg",
                features: [
                    "مواد عاكسة عالية الوضوح",
                    "متوفرة بألوان متعددة",
                    "مقاومة للماء والأوساخ",
                    "خفيفة الوزن ومريحة",
                    "متوافقة مع معايير السلامة العالمية"
                ]
            },
            en: {
                title: "Reflective Vests",
                description: "High-quality reflective vests for workers at construction sites, roads, and hazardous areas to increase visibility and safety",
                image: "images/pSbnlJ272QA6.jpg",
                features: [
                    "High-visibility reflective materials",
                    "Available in multiple colors",
                    "Water and dirt resistant",
                    "Lightweight and comfortable",
                    "Compliant with global safety standards"
                ]
            },
            de: {
                title: "Reflektierende Westen",
                description: "Hochwertige reflektierende Westen für Arbeiter auf Baustellen, Straßen und in Gefahrenbereichen zur Erhöhung der Sichtbarkeit und Sicherheit",
                image: "images/pSbnlJ272QA6.jpg",
                features: [
                    "Hochsichtbare reflektierende Materialien",
                    "In mehreren Farben erhältlich",
                    "Wasser- und schmutzabweisend",
                    "Leicht und bequem",
                    "Entspricht globalen Sicherheitsstandards"
                ]
            }
        },
        "safetyHelmets": {
            ar: {
                title: "خوذ وأحذية سيفتي",
                description: "معدات حماية شخصية عالية الجودة للعاملين في مواقع البناء والمصانع والمناطق الخطرة",
                image: "images/iPQNBADKqqB7.jpg",
                features: [
                    "خوذ مقاومة للصدمات",
                    "أحذية بمقدمة فولاذية",
                    "مقاومة للانزلاق والماء",
                    "مريحة للاستخدام لفترات طويلة",
                    "متوافقة مع معايير السلامة العالمية"
                ]
            },
            en: {
                title: "Safety Helmets & Shoes",
                description: "High-quality personal protective equipment for workers at construction sites, factories, and hazardous areas",
                image: "images/iPQNBADKqqB7.jpg",
                features: [
                    "Impact-resistant helmets",
                    "Steel-toe shoes",
                    "Slip and water resistant",
                    "Comfortable for extended use",
                    "Compliant with global safety standards"
                ]
            },
            de: {
                title: "Sicherheitshelme & -schuhe",
                description: "Hochwertige persönliche Schutzausrüstung für Arbeiter auf Baustellen, in Fabriken und in Gefahrenbereichen",
                image: "images/iPQNBADKqqB7.jpg",
                features: [
                    "Stoßfeste Helme",
                    "Schuhe mit Stahlkappe",
                    "Rutsch- und wasserfest",
                    "Bequem für längeren Gebrauch",
                    "Entspricht globalen Sicherheitsstandards"
                ]
            }
        },
        "civilDefense": {
            ar: {
                title: "تجهيزات الدفاع المدني الكاملة",
                description: "مجموعة متكاملة من معدات وتجهيزات الدفاع المدني للمؤسسات والشركات والمباني السكنية",
                image: "images/S9esLA1i7yeX.jpg",
                features: [
                    "أنظمة إنذار متكاملة",
                    "معدات إطفاء وإنقاذ",
                    "لافتات وعلامات السلامة",
                    "خطط إخلاء وطوارئ",
                    "تدريب وتأهيل الكوادر"
                ]
            },
            en: {
                title: "Complete Civil Defense Equipment",
                description: "A comprehensive set of civil defense equipment and supplies for institutions, companies, and residential buildings",
                image: "images/S9esLA1i7yeX.jpg",
                features: [
                    "Integrated alarm systems",
                    "Firefighting and rescue equipment",
                    "Safety signs and markers",
                    "Evacuation and emergency plans",
                    "Staff training and qualification"
                ]
            },
            de: {
                title: "Komplette Zivilschutzausrüstung",
                description: "Ein umfassendes Set von Zivilschutzausrüstung und -vorräten für Institutionen, Unternehmen und Wohngebäude",
                image: "images/S9esLA1i7yeX.jpg",
                features: [
                    "Integrierte Alarmsysteme",
                    "Brandbekämpfungs- und Rettungsausrüstung",
                    "Sicherheitsschilder und -markierungen",
                    "Evakuierungs- und Notfallpläne",
                    "Personalschulung und -qualifikation"
                ]
            }
        }
    },
    
    // بيانات منتجات التكييف والتبريد
    hvac: {
        "supply": {
            ar: {
                title: "توريد أنظمة التكييف",
                description: "توريد أحدث أنظمة التكييف والتبريد من أشهر العلامات التجارية العالمية بأفضل الأسعار",
                image: "images/MpoeuogUC4Da.jpg",
                features: [
                    "مكيفات سبليت ومركزية",
                    "أنظمة VRF للمباني الكبيرة",
                    "أنظمة تكييف صحراوية",
                    "مكيفات موفرة للطاقة",
                    "ضمان شامل على جميع المنتجات"
                ]
            },
            en: {
                title: "HVAC Supply",
                description: "Supply of the latest air conditioning and cooling systems from the most famous global brands at the best prices",
                image: "images/MpoeuogUC4Da.jpg",
                features: [
                    "Split and central air conditioners",
                    "VRF systems for large buildings",
                    "Desert air conditioning systems",
                    "Energy-saving air conditioners",
                    "Comprehensive warranty on all products"
                ]
            },
            de: {
                title: "Klimaanlagen-Lieferung",
                description: "Lieferung der neuesten Klimaanlagen- und Kühlsysteme von den bekanntesten globalen Marken zu den besten Preisen",
                image: "images/MpoeuogUC4Da.jpg",
                features: [
                    "Split- und Zentralklimaanlagen",
                    "VRF-Systeme für große Gebäude",
                    "Wüstenklimaanlagen",
                    "Energiesparende Klimaanlagen",
                    "Umfassende Garantie auf alle Produkte"
                ]
            }
        },
        "installation": {
            ar: {
                title: "تركيب أنظمة التكييف",
                description: "خدمات تركيب احترافية لجميع أنواع أنظمة التكييف والتبريد للمنازل والشركات والمنشآت الصناعية",
                image: "images/YzJTmS7to3Wm.jpg",
                features: [
                    "فريق فني متخصص",
                    "تركيب سريع واحترافي",
                    "اختبار وتشغيل النظام",
                    "شرح كامل للمستخدم",
                    "ضمان على التركيب"
                ]
            },
            en: {
                title: "HVAC Installation",
                description: "Professional installation services for all types of air conditioning and cooling systems for homes, companies, and industrial facilities",
                image: "images/YzJTmS7to3Wm.jpg",
                features: [
                    "Specialized technical team",
                    "Fast and professional installation",
                    "System testing and operation",
                    "Complete user explanation",
                    "Installation warranty"
                ]
            },
            de: {
                title: "Klimaanlagen-Installation",
                description: "Professionelle Installationsdienste für alle Arten von Klimaanlagen- und Kühlsystemen für Häuser, Unternehmen und Industrieanlagen",
                image: "images/YzJTmS7to3Wm.jpg",
                features: [
                    "Spezialisiertes technisches Team",
                    "Schnelle und professionelle Installation",
                    "Systemprüfung und -betrieb",
                    "Vollständige Benutzererklärung",
                    "Installationsgarantie"
                ]
            }
        },
        "maintenance": {
            ar: {
                title: "صيانة أنظمة التكييف",
                description: "خدمات صيانة دورية وطارئة لجميع أنواع أنظمة التكييف والتبريد لضمان كفاءة التشغيل وإطالة عمر الأجهزة",
                image: "images/C2EOykc9giYw.jpg",
                features: [
                    "صيانة وقائية دورية",
                    "إصلاح الأعطال الطارئة",
                    "تنظيف وتعقيم الوحدات",
                    "فحص وشحن غاز التبريد",
                    "عقود صيانة سنوية"
                ]
            },
            en: {
                title: "HVAC Maintenance",
                description: "Regular and emergency maintenance services for all types of air conditioning and cooling systems to ensure operational efficiency and extend equipment life",
                image: "images/C2EOykc9giYw.jpg",
                features: [
                    "Regular preventive maintenance",
                    "Emergency repairs",
                    "Cleaning and disinfection of units",
                    "Refrigerant gas inspection and charging",
                    "Annual maintenance contracts"
                ]
            },
            de: {
                title: "Klimaanlagen-Wartung",
                description: "Regelmäßige und Notfallwartungsdienste für alle Arten von Klimaanlagen- und Kühlsystemen zur Gewährleistung der Betriebseffizienz und Verlängerung der Lebensdauer der Geräte",
                image: "images/C2EOykc9giYw.jpg",
                features: [
                    "Regelmäßige vorbeugende Wartung",
                    "Notfallreparaturen",
                    "Reinigung und Desinfektion von Einheiten",
                    "Kältemittelgas-Inspektion und -Befüllung",
                    "Jährliche Wartungsverträge"
                ]
            }
        }
    },
    
    // بيانات منتجات الأعمال الكهربائية
    electrical: {
        "residential": {
            ar: {
                title: "الكهرباء المنزلية",
                description: "خدمات شاملة للتمديدات والتركيبات الكهربائية المنزلية بأعلى معايير الجودة والسلامة",
                image: "images/asZDFsA0McOA.jpg",
                features: [
                    "تمديدات كهربائية كاملة",
                    "تركيب لوحات التوزيع",
                    "تركيب الإنارة والمفاتيح",
                    "أنظمة الحماية من التسرب الكهربائي",
                    "صيانة وإصلاح الأعطال"
                ]
            },
            en: {
                title: "Residential Electrical",
                description: "Comprehensive services for residential electrical wiring and installations with the highest quality and safety standards",
                image: "images/asZDFsA0McOA.jpg",
                features: [
                    "Complete electrical wiring",
                    "Distribution panel installation",
                    "Lighting and switch installation",
                    "Electrical leakage protection systems",
                    "Maintenance and repair of faults"
                ]
            },
            de: {
                title: "Wohnelektrik",
                description: "Umfassende Dienstleistungen für Elektroverkabelung und -installationen in Wohngebäuden mit höchsten Qualitäts- und Sicherheitsstandards",
                image: "images/asZDFsA0McOA.jpg",
                features: [
                    "Komplette Elektroverkabelung",
                    "Installation von Verteilertafeln",
                    "Installation von Beleuchtung und Schaltern",
                    "Schutz vor elektrischen Leckagen",
                    "Wartung und Reparatur von Fehlern"
                ]
            }
        },
        "industrial": {
            ar: {
                title: "الكهرباء الصناعية",
                description: "خدمات متخصصة للتمديدات والتركيبات الكهربائية الصناعية للمصانع والمنشآت التجارية الكبرى",
                image: "images/bh5Vh54dvcp7.jpg",
                features: [
                    "تصميم وتنفيذ الأنظمة الكهربائية الصناعية",
                    "تركيب المحولات ولوحات التوزيع الرئيسية",
                    "أنظمة التأريض والحماية",
                    "أنظمة التحكم الآلي",
                    "صيانة دورية وطارئة"
                ]
            },
            en: {
                title: "Industrial Electrical",
                description: "Specialized services for industrial electrical wiring and installations for factories and major commercial facilities",
                image: "images/bh5Vh54dvcp7.jpg",
                features: [
                    "Design and implementation of industrial electrical systems",
                    "Installation of transformers and main distribution panels",
                    "Grounding and protection systems",
                    "Automatic control systems",
                    "Regular and emergency maintenance"
                ]
            },
            de: {
                title: "Industrieelektrik",
                description: "Spezialisierte Dienstleistungen für industrielle Elektroverkabelung und -installationen für Fabriken und große Gewerbeimmobilien",
                image: "images/bh5Vh54dvcp7.jpg",
                features: [
                    "Design und Implementierung industrieller elektrischer Systeme",
                    "Installation von Transformatoren und Hauptverteilertafeln",
                    "Erdungs- und Schutzsysteme",
                    "Automatische Steuerungssysteme",
                    "Regelmäßige und Notfallwartung"
                ]
            }
        },
        "complete": {
            ar: {
                title: "التوريد والتركيب والتنفيذ الكامل",
                description: "خدمات متكاملة من التصميم والتوريد والتركيب والتنفيذ الكامل للمشاريع الكهربائية بمختلف أحجامها",
                image: "images/eqYRDlNx2OT0.jpg",
                features: [
                    "دراسة وتصميم المشاريع الكهربائية",
                    "توريد جميع المواد والمعدات",
                    "تنفيذ كامل بأيدي خبراء",
                    "اختبار وتشغيل الأنظمة",
                    "خدمات ما بعد التنفيذ"
                ]
            },
            en: {
                title: "Complete Supply, Installation & Implementation",
                description: "Integrated services from design, supply, installation, and complete implementation of electrical projects of various sizes",
                image: "images/eqYRDlNx2OT0.jpg",
                features: [
                    "Study and design of electrical projects",
                    "Supply of all materials and equipment",
                    "Complete implementation by experts",
                    "Testing and operation of systems",
                    "Post-implementation services"
                ]
            },
            de: {
                title: "Komplette Lieferung, Installation & Umsetzung",
                description: "Integrierte Dienstleistungen von Design, Lieferung, Installation und vollständiger Implementierung von Elektroprojekten verschiedener Größen",
                image: "images/eqYRDlNx2OT0.jpg",
                features: [
                    "Studie und Design von Elektroprojekten",
                    "Lieferung aller Materialien und Ausrüstungen",
                    "Vollständige Implementierung durch Experten",
                    "Testen und Betrieb von Systemen",
                    "Dienstleistungen nach der Implementierung"
                ]
            }
        }
    }
};
