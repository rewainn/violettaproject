import { Link, Outlet, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { Instagram, Menu, MessageCircle, Phone, Sparkles } from "lucide-react";

export function Layout() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToPageTop = (event?: MouseEvent<HTMLAnchorElement>) => {
    setIsMobileMenuOpen(false);

    if (location.pathname === "/") {
      event?.preventDefault();
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  };

  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/calculator") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-sand-100">
      {/* Subtle background noise texture */}
      <div 
        className="fixed inset-0 z-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
      
      {/* Fixed Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 w-full px-3 sm:px-4 pt-3"
      >
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="overflow-hidden rounded-[1.75rem] border border-[#e4d6c2]/55 bg-sand-50/62 backdrop-blur-md shadow-[0_10px_30px_rgba(56,48,39,0.05)]">
            <div className="h-[72px] md:h-20 px-4 md:px-6 flex items-center justify-between">
              <Link to="/" onClick={scrollToPageTop} className="text-2xl font-serif tracking-wide text-pine-900 hover:opacity-80 transition-opacity flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-gold-500" />
                Violetta
              </Link>
              
              <nav className="hidden md:flex items-center gap-8">
                <Link 
                  to="/" 
                  onClick={scrollToPageTop}
                  className={cn(
                    "text-sm tracking-widest uppercase font-medium transition-all hover:text-gold-500 relative pb-1",
                    location.pathname === "/" ? "text-gold-600" : "text-pine-800"
                  )}
                >
                  Главная
                  {location.pathname === "/" && (
                    <motion.div layoutId="nav-indicator" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold-500" />
                  )}
                </Link>
                <Link 
                  to="/calculator" 
                  className={cn(
                    "text-sm tracking-widest uppercase font-medium transition-all hover:text-gold-500 relative pb-1",
                    location.pathname === "/calculator" ? "text-gold-600" : "text-pine-800"
                  )}
                >
                  Калькулятор
                  {location.pathname === "/calculator" && (
                    <motion.div layoutId="nav-indicator" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold-500" />
                  )}
                </Link>
              </nav>

              <div className="md:hidden flex items-center gap-2">
                <Link to="/calculator" className="text-[10px] sm:text-xs uppercase tracking-widest font-bold border border-gold-500/40 bg-white/70 px-3 sm:px-4 py-2 rounded-full text-pine-900">
                  Калькулятор
                </Link>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen((value) => !value)}
                  aria-label="Открыть меню"
                  aria-expanded={isMobileMenuOpen}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-500/35 bg-white/70 text-pine-900 shadow-sm transition-colors hover:bg-white"
                >
                  <Menu className="h-4 w-4" />
                </button>
              </div>
            </div>

            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.nav
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="md:hidden border-t border-pine-900/5"
                >
                  <div className="px-4 pb-4 pt-2">
                    <Link
                      to="/"
                      onClick={scrollToPageTop}
                      className="flex items-center px-4 py-2 text-sm font-medium text-pine-900 transition-colors hover:text-gold-600"
                    >
                      Главная страница
                    </Link>
                  </div>
                </motion.nav>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.header>

      {/* Main Content with pt-20 to offset fixed header */}
      <main className="flex-1 relative z-10 w-full pt-20">
        <AnimatePresence mode="wait">
          <motion.div
             key={location.pathname}
             initial={{ opacity: 0, y: 15 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -15 }}
             transition={{ duration: 0.4 }}
             className="h-full"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Enhanced Footer */}
      <footer className="relative z-10 bg-pine-900 text-sand-50 py-16 border-t-4 border-gold-500">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left mb-12 items-start md:pl-4 lg:pl-8">
            
            <div className="space-y-4 flex flex-col items-center md:items-start md:translate-x-1 lg:translate-x-2">
              <h2 className="text-3xl font-serif italic text-gold-400">Violetta</h2>
              <p className="text-sm font-sans tracking-wide text-sand-200/80 leading-relaxed max-w-sm mx-auto md:mx-0">
                Эксперт в системе самопознания Матрица Судьбы. Ваш проводник к внутренней гармонии и раскрытию потенциала.
              </p>
            </div>
            
            <div className="space-y-4 flex flex-col items-center md:items-start md:translate-x-1 lg:translate-x-2">
              <h3 className="text-lg font-bold uppercase tracking-widest text-gold-500">Навигация</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="text-sand-100 hover:text-gold-400 transition-colors">Главная страница</Link></li>
                <li><Link to="/calculator" className="text-sand-100 hover:text-gold-400 transition-colors">Калькулятор</Link></li>
              </ul>
            </div>
            
            <div className="space-y-4 flex flex-col items-center md:items-start md:translate-x-1 lg:translate-x-2">
              <h3 className="text-lg font-bold uppercase tracking-widest text-gold-500">Связь со мной</h3>
              <div className="flex flex-col gap-3 font-light text-sand-100">
                <a href="https://www.instagram.com/violetta_gutsan?igsh=MWF2bmtsZjY1MTVldQ%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center md:justify-start gap-3 hover:text-gold-400 transition-colors">
                  <Instagram size={18} /> Instagram: @violetta_gutsan
                </a>
                <a href="https://t.me/put_matrix" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center md:justify-start gap-3 hover:text-gold-400 transition-colors">
                  <MessageCircle size={18} /> Telegram: @put_matrix
                </a>
                <a href="https://wa.me/79786881149" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center md:justify-start gap-3 hover:text-gold-400 transition-colors">
                  <Phone size={18} /> WhatsApp: +7 978 688-11-49
                </a>
              </div>
            </div>

          </div>
          
          <div className="border-t border-sand-50/10 pt-8 flex flex-col items-center justify-center gap-4">
            <div className="text-xs text-sand-50/50 uppercase tracking-widest">
              &copy; {new Date().getFullYear()} Все права защищены.
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <AnimatePresence>
        {location.hash === "#contact" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-pine-900/40 backdrop-blur-md"
            onClick={() => window.history.back()}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 28, filter: "blur(6px)" }}
              animate={{ scale: 1, opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ scale: 0.96, opacity: 0, y: 18, filter: "blur(4px)" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-sand-50 text-pine-900 rounded-[2rem] p-8 md:p-12 w-full max-w-md relative shadow-2xl border border-pine-900/10"
            >
              <button 
                onClick={() => window.history.back()}
                className="absolute top-6 right-6 text-pine-900/50 hover:text-pine-900 transition-colors p-2 bg-sand-200/50 rounded-full hover:bg-sand-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
              
              <h3 className="text-2xl md:text-3xl font-serif mb-2 font-medium">Контакты</h3>
              <p className="text-pine-800/60 font-light mb-8">Выберите удобный способ связи для записи на разбор.</p>
              
              <div className="space-y-4">
                <a href="https://t.me/put_matrix" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-pine-900/10 hover:border-gold-400 hover:shadow-md transition-all group">
                  <div className="w-12 h-12 bg-sand-100 text-pine-900 rounded-full flex items-center justify-center group-hover:bg-gold-100 group-hover:text-gold-600 transition-colors">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <div className="font-medium">Telegram</div>
                    <div className="text-sm text-pine-800/60">@put_matrix</div>
                  </div>
                </a>
                <a href="https://wa.me/79786881149" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-pine-900/10 hover:border-gold-400 hover:shadow-md transition-all group">
                  <div className="w-12 h-12 bg-sand-100 text-pine-900 rounded-full flex items-center justify-center group-hover:bg-gold-100 group-hover:text-gold-600 transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="font-medium">WhatsApp</div>
                    <div className="text-sm text-pine-800/60">+7 978 688-11-49</div>
                  </div>
                </a>
                <a href="https://www.instagram.com/violetta_gutsan?igsh=MWF2bmtsZjY1MTVldQ%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-pine-900/10 hover:border-gold-400 hover:shadow-md transition-all group">
                  <div className="w-12 h-12 bg-sand-100 text-pine-900 rounded-full flex items-center justify-center group-hover:bg-gold-100 group-hover:text-gold-600 transition-colors">
                    <Instagram size={24} />
                  </div>
                  <div>
                    <div className="font-medium">Instagram</div>
                    <div className="text-sm text-pine-800/60">@violetta_gutsan</div>
                  </div>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
