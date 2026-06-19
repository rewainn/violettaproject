import { motion } from "motion/react";
import { ArrowRight, Instagram, MessageCircle, Phone, Sparkles } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-36 mt-20 md:mt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(207,170,96,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(53,82,54,0.16),transparent_30%),linear-gradient(180deg,rgba(247,241,232,0.2),rgba(240,234,223,0.92))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b08b57]/35 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#b08b57]/20 to-transparent" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 26, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ y: -4 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2.5rem] border border-[#d9c39b]/55 bg-white/72 backdrop-blur-md shadow-[0_24px_80px_rgba(84,67,43,0.1)] px-6 sm:px-10 md:px-14 lg:px-20 py-14 md:py-20 lg:py-24"
        >
          <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_top_left,rgba(53,82,54,0.28),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(192,166,104,0.35),transparent_36%)]" />
          <div className="absolute left-6 top-6 h-12 w-12 rounded-tl-[1.25rem] border-l border-t border-gold-500/25" />
          <div className="absolute right-6 bottom-6 h-12 w-12 rounded-br-[1.25rem] border-b border-r border-gold-500/25" />
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d9c39b]/60 bg-sand-50/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold-700 shadow-sm">
              <Sparkles className="w-4 h-4 text-gold-500" />
              Контакты
            </div>

            <h2 className="mt-6 text-3xl md:text-5xl lg:text-6xl font-serif text-pine-900 leading-tight">
              Контакты для связи
            </h2>

            <p className="mt-7 text-lg md:text-xl lg:text-[1.35rem] leading-relaxed font-light text-pine-800 max-w-2xl mx-auto">
              Чтобы узнать больше о своей Матрице Судьбы и подобрать нужный формат разбора, свяжитесь со мной напрямую.
            </p>

            <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <motion.a
                href="https://t.me/put_matrix"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center gap-3 rounded-2xl border border-pine-900/10 bg-sand-50/85 px-4 py-4 text-left text-pine-900 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gold-400/60 hover:bg-white"
              >
                <MessageCircle className="h-5 w-5 text-gold-600 transition-colors group-hover:text-pine-900" />
                <span>
                  <span className="block text-sm font-medium">Telegram</span>
                  <span className="block text-xs text-pine-800/55">@put_matrix</span>
                </span>
              </motion.a>
              <motion.a
                href="https://wa.me/79786881149"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center gap-3 rounded-2xl border border-pine-900/10 bg-sand-50/85 px-4 py-4 text-left text-pine-900 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gold-400/60 hover:bg-white"
              >
                <Phone className="h-5 w-5 text-gold-600 transition-colors group-hover:text-pine-900" />
                <span>
                  <span className="block text-sm font-medium">WhatsApp</span>
                  <span className="block text-xs text-pine-800/55">+7 978 688-11-49</span>
                </span>
              </motion.a>
              <motion.a
                href="https://www.instagram.com/violetta_gutsan?igsh=MWF2bmtsZjY1MTVldQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center gap-3 rounded-2xl border border-pine-900/10 bg-sand-50/85 px-4 py-4 text-left text-pine-900 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gold-400/60 hover:bg-white"
              >
                <Instagram className="h-5 w-5 text-gold-600 transition-colors group-hover:text-pine-900" />
                <span>
                  <span className="block text-sm font-medium">Instagram</span>
                  <span className="block text-xs text-pine-800/55">@violetta_gutsan</span>
                </span>
              </motion.a>
            </div>

            <div className="mt-10 flex justify-center">
              <motion.a
                href="#contact"
                whileHover={{ y: -4, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center rounded-full bg-pine-900 px-8 sm:px-10 py-4 sm:py-5 text-sand-50 uppercase tracking-[0.2em] text-xs sm:text-sm font-bold shadow-lg shadow-pine-900/15 transition-all hover:-translate-y-1 hover:bg-pine-800 hover:shadow-xl"
              >
                Написать мне
                <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
