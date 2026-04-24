Tamamdır Kahraman, şimdi tam olarak istediğin o netliği sağladım.

"Sertifikalar & Diller" ana başlığın duruyor; onun altında koyu harflerle **"İngilizce"** (İngilizce versiyonda **"English"**) yazacak ve hemen altında sertifika ismin yer alacak. Gereksiz tekrarların hepsini ayıkladım.

GitHub'daki `App.tsx` dosyasının tamamını seçip silerek bu yeni kodu yapıştırabilirsin:

```tsx
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Linkedin, Instagram, Mail, MapPin, ExternalLink, ChevronDown, Briefcase, GraduationCap, User, Moon, Sun, Globe, Award } from 'lucide-react';

const translations = {
  tr: {
    nav: { hakkimda: 'Hakkımda', ozgecmis: 'Özgeçmiş', iletisim: 'İletişim' },
    hero: {
      subtitle: 'Yeni Medya ve İletişim',
      title: 'İlayda Zehra',
      surname: 'Kahraman',
      desc: 'Üsküdar Üniversitesi İletişim Fakültesi Yeni Medya ve İletişim Bölümünde 3. Sınıf öğrencisiyim. İletişim stratejileri ve müşteri memnuniyeti alanlarında profesyonel deneyim kazanarak kariyerimi inşa ediyorum.',
      contactBtn: 'İletişime Geç',
      explore: 'Keşfet'
    },
    resume: {
      title: 'Özgeçmiş',
      exp: 'Deneyim',
      edu: 'Eğitim',
      certs: 'Sertifikalar & Diller',
      present: 'GÜNÜMÜZ',
      tfTitle: 'Müşteri Memnuniyeti Bölümü',
      tfCompany: 'Türkiye Finans Genel Müdürlüğü',
      tfDesc: 'Müşteri deneyimini iyileştirme, geri bildirim analizi ve memnuniyet odaklı stratejiler geliştirme süreçlerinde aktif rol almaktayım.',
      dbDate: 'MAYIS 2024 - EKİM 2024',
      dbTitle: 'İletişim Asistanı',
      dbCompany: 'Denizbank Genel Müdürlüğü',
      dbDesc: 'Kurumsal iletişim faaliyetlerine destek olma, iç ve dış iletişim süreçlerinin yürütülmesi ve organizasyonel planlamalarda görev aldım.',
      eduDate: 'DEVAM EDİYOR (3. SINIF)',
      eduTitle: 'Yeni Medya ve İletişim',
      eduSchool: 'Üsküdar Üniversitesi',
      eduDesc: 'İletişim Fakültesi bünyesinde dijital medya, iletişim kuramları, medya okuryazarlığı ve yeni medya teknolojileri üzerine eğitim görmekteyim.',
      langTitle: 'İngilizce',
      langDesc: 'English with the Code-Switching Method (Advanced Level)'
    },
    contact: {
      title: 'İletişime Geçin',
      desc: 'Yeni medya, iletişim projeleri veya kariyer fırsatları hakkında konuşmak için benimle iletişime geçebilirsiniz.',
      email: 'E-posta',
      location: 'Konum',
      locationText: 'İstanbul, Türkiye',
      formName: 'İsim Soyisim',
      formNamePlaceholder: 'Adınız Soyadınız',
      formEmail: 'E-posta',
      formEmailPlaceholder: 'ornek@email.com',
      formMessage: 'Mesajınız',
      formMessagePlaceholder: 'Mesajınızı buraya yazın...',
      formSubmit: 'Gönder'
    },
    footer: 'Tüm hakları saklıdır.'
  },
  en: {
    nav: { hakkimda: 'About', ozgecmis: 'Resume', iletisim: 'Contact' },
    hero: {
      subtitle: 'New Media and Communication',
      title: 'İlayda Zehra',
      surname: 'Kahraman',
      desc: 'I am a 3rd-year student at Üsküdar University, Faculty of Communication, Department of New Media and Communication. I am building my career by gaining professional experience in communication strategies and customer satisfaction.',
      contactBtn: 'Contact Me',
      explore: 'Explore'
    },
    resume: {
      title: 'Resume',
      exp: 'Experience',
      edu: 'Education',
      certs: 'Certificates & Languages',
      present: 'PRESENT',
      tfTitle: 'Customer Satisfaction Department',
      tfCompany: 'Türkiye Finans Headquarters',
      tfDesc: 'I take an active role in improving customer experience, analyzing feedback, and developing satisfaction-oriented strategies.',
      dbDate: 'MAY 2024 - OCT 2024',
      dbTitle: 'Communication Assistant',
      dbCompany: 'Denizbank Headquarters',
      dbDesc: 'I supported corporate communication activities, carried out internal and external communication processes, and took part in organizational planning.',
      eduDate: 'ONGOING (3RD YEAR)',
      eduTitle: 'New Media and Communication',
      eduSchool: 'Üsküdar University',
      eduDesc: 'I am studying digital media, communication theories, media literacy, and new media technologies within the Faculty of Communication.',
      langTitle: 'English',
      langDesc: 'English with the Code-Switching Method (Advanced Level)'
    },
    contact: {
      title: 'Get in Touch',
      desc: 'You can contact me to talk about new media, communication projects, or career opportunities.',
      email: 'Email',
      location: 'Location',
      locationText: 'Istanbul, Turkey',
      formName: 'Full Name',
      formNamePlaceholder: 'John Doe',
      formEmail: 'Email',
      formEmailPlaceholder: 'example@email.com',
      formMessage: 'Message',
      formMessagePlaceholder: 'Write your message here...',
      formSubmit: 'Send'
    },
    footer: 'All rights reserved.'
  }
};

export default function App() {
  const [activeSection, setActiveSection] = useState('hakkimda');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState<'tr' | 'en'>('tr');

  const t = translations[lang];

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['hakkimda', 'ozgecmis', 'iletisim'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { id: 'hakkimda', label: t.nav.hakkimda, icon: User },
    { id: 'ozgecmis', label: t.nav.ozgecmis, icon: Briefcase },
    { id: 'iletisim', label: t.nav.iletisim, icon: Mail }
  ];

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50 font-sans selection:bg-stone-200 dark:selection:bg-stone-800 transition-colors duration-300">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-stone-950/80 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          <div className="font-serif text-xl font-medium tracking-tight">İZK.</div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm font-medium tracking-wide transition-colors ${activeSection === item.id ? 'text-stone-900 dark:text-stone-50' : 'text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50'}`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="flex items-center space-x-3 border-l border-stone-200 dark:border-stone-800 pl-6 ml-2">
              <button 
                onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}
                className="flex items-center text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 transition-colors text-sm font-medium"
                aria-label="Toggle Language"
              >
                <Globe size={16} className="mr-1" />
                {lang === 'tr' ? 'EN' : 'TR'}
              </button>
              <button 
                onClick={() => setIsDark(!isDark)}
                className="text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}
              className="text-stone-500 dark:text-stone-400 text-sm font-medium"
            >
              {lang === 'tr' ? 'EN' : 'TR'}
            </button>
            <button 
              onClick={() => setIsDark(!isDark)}
              className="text-stone-500 dark:text-stone-400"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <div className="flex space-x-2 ml-2 border-l border-stone-200 dark:border-stone-800 pl-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`p-2 rounded-full ${activeSection === item.id ? 'bg-stone-200 dark:bg-stone-800 text-stone-900 dark:text-stone-50' : 'text-stone-500 dark:text-stone-400'}`}
                  aria-label={item.label}
                >
                  <item.icon size={18} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hakkımda Section */}
        <section id="hakkimda" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-5xl mx-auto min-h-screen flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-7 order-2 md:order-1"
            >
              <h2 className="text-stone-500 dark:text-stone-400 font-medium tracking-widest uppercase text-sm mb-4">{t.hero.subtitle}</h2>
              <h1 className="text-5xl md:text-7xl font-serif font-light tracking-tight leading-tight mb-6">
                {t.hero.title} <br/><span className="font-medium">{t.hero.surname}</span>
              </h1>
              <p className="text-lg text-stone-600 dark:text-stone-300 leading-relaxed mb-8 max-w-xl">
                {t.hero.desc}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button onClick={() => scrollTo('iletisim')} className="bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 px-6 py-3 rounded-full text-sm font-medium hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors">
                  {t.hero.contactBtn}
                </button>
                <a href="https://tr.linkedin.com/in/ilayda-zehra-kahraman-b3aa42395" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full border border-stone-300 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://www.instagram.com/ilaydazkahraman" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full border border-stone-300 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-5 order-1 md:order-2 flex justify-center md:justify-end"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-stone-200 dark:bg-stone-800 rounded-full transform translate-x-4 translate-y-4 transition-colors duration-300"></div>
                <img 
                  src="https://i.imgur.com/ibnA5hZ.jpeg" 
                  alt="İlayda Zehra Kahraman" 
                  className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white dark:border-stone-950 shadow-lg transition-colors duration-300"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800&h=800';
                  }}
                />
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-stone-400 dark:text-stone-500"
          >
            <span className="text-xs uppercase tracking-widest mb-2">{t.hero.explore}</span>
            <ChevronDown size={20} className="animate-bounce" />
          </motion.div>
        </section>

        {/* Özgeçmiş Section */}
        <section id="ozgecmis" className="py-24 px-6 bg-white dark:bg-stone-900 transition-colors duration-300">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-light">{t.resume.title}</h2>
              <div className="h-px bg-stone-200 dark:bg-stone-800 flex-grow ml-8 transition-colors duration-300"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Deneyim */}
              <div>
                <div className="flex items-center mb-8 text-stone-800 dark:text-stone-200">
                  <Briefcase className="mr-3" size={24} />
                  <h3 className="text-xl font-medium">{t.resume.exp}</h3>
                </div>
                
                <div className="space-y-10">
                  <div className="relative pl-8 border-l border-stone-200 dark:border-stone-700">
                    <div className="absolute w-3 h-3 bg-stone-800 dark:bg-stone-200 rounded-full -left-[6.5px] top-1.5 transition-colors duration-300"></div>
                    <span className="text-sm font-medium text-stone-500 dark:text-stone-400 tracking-wider">{t.resume.present}</span>
                    <h4 className="text-lg font-medium mt-1">{t.resume.tfTitle}</h4>
                    <p className="text-stone-600 dark:text-stone-300 font-medium">{t.resume.tfCompany}</p>
                    <p className="text-stone-500 dark:text-stone-400 mt-2 text-sm leading-relaxed">
                      {t.resume.tfDesc}
                    </p>
                  </div>

                  <div className="relative pl-8 border-l border-stone-200 dark:border-stone-700">
                    <div className="absolute w-3 h-3 bg-stone-300 dark:bg-stone-600 rounded-full -left-[6.5px] top-1.5 transition-colors duration-300"></div>
                    <span className="text-sm font-medium text-stone-500 dark:text-stone-400 tracking-wider">{t.resume.dbDate}</span>
                    <h4 className="text-lg font-medium mt-1">{t.resume.dbTitle}</h4>
                    <p className="text-stone-600 dark:text-stone-300 font-medium">{t.resume.dbCompany}</p>
                    <p className="text-stone-500 dark:text-stone-400 mt-2 text-sm leading-relaxed">
                      {t.resume.dbDesc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Eğitim & Sertifikalar */}
              <div className="space-y-16">
                <div>
                  <div className="flex items-center mb-8 text-stone-800 dark:text-stone-200">
                    <GraduationCap className="mr-3" size={24} />
                    <h3 className="text-xl font-medium">{t.resume.edu}</h3>
                  </div>
                  
                  <div className="space-y-10">
                    <div className="relative pl-8 border-l border-stone-200 dark:border-stone-700">
                      <div className="absolute w-3 h-3 bg-stone-800 dark:bg-stone-200 rounded-full -left-[6.5px] top-1.5 transition-colors duration-300"></div>
                      <span className="text-sm font-medium text-stone-500 dark:text-stone-400 tracking-wider">{t.resume.eduDate}</span>
                      <h4 className="text-lg font-medium mt-1">{t.resume.eduTitle}</h4>
                      <p className="text-stone-600 dark:text-stone-300 font-medium">{t.resume.eduSchool}</p>
                      <p className="text-stone-500 dark:text-stone-400 mt-2 text-sm leading-relaxed">
                        {t.resume.eduDesc}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-8 text-stone-800 dark:text-stone-200">
                    <Award className="mr-3" size={24} />
                    <h3 className="text-xl font-medium">{t.resume.certs}</h3>
                  </div>
                  
                  <div className="space-y-10">
                    <div className="relative pl-8 border-l border-stone-200 dark:border-stone-700">
                      <div className="absolute w-3 h-3 bg-stone-800 dark:bg-stone-200 rounded-full -left-[6.5px] top-1.5 transition-colors duration-300"></div>
                      <h4 className="text-lg font-medium mt-1">{t.resume.langTitle}</h4>
                      <p className="text-stone-500 dark:text-stone-400 mt-2 text-sm leading-relaxed">
                        {t.resume.langDesc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* İletişim Section */}
        <section id="iletisim" className="py-24 px-6 bg-stone-900 dark:bg-black text-stone-50 transition-colors duration-300">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl md:text-5xl font-serif font-light mb-6">{t.contact.title}</h2>
                <p className="text-stone-400 mb-12 text-lg leading-relaxed">
                  {t.contact.desc}
                </p>
                
                <div className="space-y-6">
                  <a href="mailto:zehrailaydakahraman@gmail.com" className="flex items-center group">
                    <div className="w-12 h-12 bg-stone-800 dark:bg-stone-900 rounded-full flex items-center justify-center mr-4 group-hover:bg-stone-700 dark:group-hover:bg-stone-800 transition-colors">
                      <Mail size={20} className="text-stone-300" />
                    </div>
                    <div>
                      <p className="text-sm text-stone-400 mb-1">{t.contact.email}</p>
                      <p className="font-medium">zehrailaydakahraman@gmail.com</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-stone-800 dark:bg-stone-900 rounded-full flex items-center justify-center mr-4">
                      <MapPin size={20} className="text-stone-300" />
                    </div>
                    <div>
                      <p className="text-sm text-stone-400 mb-1">{t.contact.location}</p>
                      <p className="font-medium">{t.contact.locationText}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex space-x-4">
                  <a href="https://tr.linkedin.com/in/ilayda-zehra-kahraman-b3aa42395" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-stone-800 dark:bg-stone-900 rounded-full flex items-center justify-center hover:bg-stone-700 dark:hover:bg-stone-800 transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href="https://www.instagram.com/ilaydazkahraman" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-stone-800 dark:bg-stone-900 rounded-full flex items-center justify-center hover:bg-stone-700 dark:hover:bg-stone-800 transition-colors">
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
              
              <div className="bg-stone-800 dark:bg-stone-900 p-8 rounded-2xl transition-colors duration-300">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-stone-400 mb-2">{t.contact.formName}</label>
                    <input type="text" id="name" className="w-full bg-stone-900 dark:bg-black border border-stone-700 dark:border-stone-800 rounded-lg px-4 py-3 text-stone-100 focus:outline-none focus:border-stone-500 transition-colors" placeholder={t.contact.formNamePlaceholder} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-400 mb-2">{t.contact.formEmail}</label>
                    <input type="email" id="email" className="w-full bg-stone-900 dark:bg-black border border-stone-700 dark:border-stone-800 rounded-lg px-4 py-3 text-stone-100 focus:outline-none focus:border-stone-500 transition-colors" placeholder={t.contact.formEmailPlaceholder} />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-stone-400 mb-2">{t.contact.formMessage}</label>
                    <textarea id="message" rows={4} className="w-full bg-stone-900 dark:bg-black border border-stone-700 dark:border-stone-800 rounded-lg px-4 py-3 text-stone-100 focus:outline-none focus:border-stone-500 transition-colors resize-none" placeholder={t.contact.formMessagePlaceholder}></textarea>
                  </div>
                  <button type="submit" className="w-full bg-white dark:bg-stone-100 text-stone-900 font-medium py-3 rounded-lg hover:bg-stone-200 dark:hover:bg-white transition-colors flex items-center justify-center">
                    {t.contact.formSubmit} <ExternalLink size={16} className="ml-2" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-950 dark:bg-black py-8 px-6 text-center text-stone-500 dark:text-stone-600 text-sm border-t border-stone-800 dark:border-stone-900 transition-colors duration-300">
        <p>&copy; {new Date().getFullYear()} İlayda Zehra Kahraman. {t.footer}</p>
      </footer>
    </div>
  );
}
```
