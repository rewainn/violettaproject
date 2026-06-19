import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";
import { CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { ContactSection } from "../components/ContactSection";
import {
  calculateMatrixOfDestiny,
  calculateMatrixOfYear,
  calculateCompatibilityMatrix,
  outlineColorsByPoint,
  defaultOutlineColor,
  destinyPositions,
  yearPositions,
  destinyConnections,
  yearConnections
} from "../lib/matrix";

type Tab = "Матрица судьбы" | "Матрица года" | "Совместимость";

export function Calculator() {
  const [activeTab, setActiveTab] = useState<Tab>("Матрица судьбы");
  
  const [destinyPoints, setDestinyPoints] = useState<Record<number, number> | null>(null);
  const [yearPoints, setYearPoints] = useState<Record<number, number> | null>(null);
  const [compatibilityData, setCompatibilityData] = useState<{ p1: Record<number, number>, p2: Record<number, number>, comp: Record<number, number> } | null>(null);
  const [compView, setCompView] = useState(0); 

  useEffect(() => {
    setDestinyPoints(null);
    setYearPoints(null);
    setCompatibilityData(null);
    setCompView(0);
  }, [activeTab]);

  useEffect(() => {
    const preventContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };

    const preventF12 = (event: KeyboardEvent) => {
      if (event.key === "F12") {
        event.preventDefault();
      }
    };

    document.addEventListener("contextmenu", preventContextMenu);
    document.addEventListener("keydown", preventF12);

    return () => {
      document.removeEventListener("contextmenu", preventContextMenu);
      document.removeEventListener("keydown", preventF12);
    };
  }, []);

  const handleCalculateDestiny = (d: number, m: number, y: number) => {
    setDestinyPoints(calculateMatrixOfDestiny(d, m, y));
  };

  const handleCalculateYear = (d: number, m: number, y: number, target: number) => {
    const base = calculateMatrixOfDestiny(d, m, y);
    setYearPoints(calculateMatrixOfYear(base, target));
  };
  
  const handleCalculateCompatibility = (d1: number, m1: number, y1: number, d2: number, m2: number, y2: number) => {
    const p1 = calculateMatrixOfDestiny(d1, m1, y1);
    const p2 = calculateMatrixOfDestiny(d2, m2, y2);
    const comp = calculateCompatibilityMatrix(p1, p2);
    setCompatibilityData({ p1, p2, comp });
    setCompView(0);
  };

  return (
    <div className="w-full">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-24">
        <div className="text-center mb-16">
          <motion.div
             initial={{ opacity: 0, y: -10 }}
             animate={{ opacity: 1, y: 0 }}
             className="inline-flex items-center space-x-2 border border-gold-400/30 px-4 py-1.5 rounded-full bg-sand-200/50 text-xs font-medium uppercase tracking-widest text-pine-800 mb-6"
          >
            <span>Калькулятор</span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-pine-900 transition-all">
            {activeTab === "Совместимость" ? "Матрица совместимости" : activeTab}
          </h1>
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch">
        {/* Form Column */}
        <div className="lg:col-span-4 flex flex-col space-y-8 relative z-10 w-full overflow-hidden h-full">
          {/* Tabs Navigation */}
          <div className="grid grid-cols-3 bg-sand-50 border border-pine-900/10 p-1.5 rounded-full shadow-sm w-full gap-1 shrink-0">
            {(["Матрица судьбы", "Матрица года", "Совместимость"] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                }}
                className={cn(
                  "px-1 md:px-2 py-3 text-[10px] md:text-xs font-medium transition-all rounded-full relative outline-none truncate",
                  activeTab === tab 
                    ? "text-pine-900 shadow-sm bg-white ring-1 ring-black/5" 
                    : "text-pine-900/50 hover:text-pine-900 hover:bg-sand-100"
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Form Container */}
          <div className="flex-1 bg-sand-50 border border-pine-900/10 rounded-3xl p-6 md:p-8 shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === "Матрица судьбы" && <DestinyMatrixForm onSubmit={handleCalculateDestiny} />}
                {activeTab === "Матрица года" && <YearMatrixForm onSubmit={handleCalculateYear} />}
                {activeTab === "Совместимость" && <CompatibilityForm onSubmit={handleCalculateCompatibility} />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Results Column */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="h-full flex flex-col"
            >
              <div className="flex flex-row items-center justify-between mb-6 gap-4">
                <h3 className="text-xl md:text-2xl font-sans font-medium tracking-wide text-pine-900 truncate">
                  {activeTab === "Матрица судьбы" && "Ваша Матрица"}
                  {activeTab === "Матрица года" && "Матрица Года"}
                  {activeTab === "Совместимость" && (
                     compView === 0 ? "Первый партнер" : compView === 1 ? "Второй партнер" : "Матрица совместимости"
                  )}
                </h3>
  
                {activeTab === "Совместимость" && (
                  <div className="flex items-center space-x-3 text-sm text-pine-900 align-end justify-end">
                    <button 
                       onClick={() => setCompView(Math.max(0, compView - 1))}
                       disabled={compView === 0}
                       className="w-8 h-8 rounded-full border border-pine-900/20 flex items-center justify-center hover:bg-sand-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <span className="font-medium min-w-[32px] text-center">{compView + 1}/3</span>
                    <button 
                       onClick={() => setCompView(Math.min(2, compView + 1))}
                       disabled={compView === 2}
                       className="w-8 h-8 rounded-full border border-pine-900/20 flex items-center justify-center hover:bg-sand-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                )}
              </div>
              
              <div className="flex-1 w-full bg-white border border-pine-900/10 rounded-[2.5rem] flex items-center justify-center shadow-inner relative overflow-hidden p-2 md:p-8">
                 {/* Elegant abstract background for the graph */}
                 <div className="absolute inset-0 bg-sand-50/50 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at center, transparent 30%, rgba(244, 240, 232, 0.4) 100%)" }} />
                 
                 {activeTab === "Матрица судьбы" && (
                   <MatrixCanvas points={destinyPoints || {}} mode="destiny" />
                 )}
                 {activeTab === "Матрица года" && (
                   <MatrixCanvas points={yearPoints || {}} mode="year" />
                 )}
                 {activeTab === "Совместимость" && (
                     <>
                        {compView === 0 && <MatrixCanvas points={compatibilityData?.p1 || {}} mode="destiny" />}
                        {compView === 1 && <MatrixCanvas points={compatibilityData?.p2 || {}} mode="destiny" />}
                        {compView === 2 && <MatrixCanvas points={compatibilityData?.comp || {}} mode="compatibility" />}
                     </>
                 )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>

      <ContactSection />
    </div>
  );
}

// -------- Form Components --------

function parseDateInput(str: string) {
  const parts = str.split('.');
  if (parts.length === 3) {
    return {
      d: parseInt(parts[0], 10),
      m: parseInt(parts[1], 10),
      y: parseInt(parts[2], 10)
    };
  }
  return null;
}

const dateMask = (v: string) => {
  let val = v.replace(/\D/g, '');
  if (val.length > 8) val = val.slice(0, 8);
  let res = '';
  if (val.length > 0) res += val.slice(0, 2);
  if (val.length >= 3) res += '.' + val.slice(2, 4);
  if (val.length >= 5) res += '.' + val.slice(4, 8);
  return res;
};

function DestinyMatrixForm({ onSubmit }: { onSubmit: (d: number, m: number, y: number) => void }) {
  const [gender, setGender] = useState<"Женский" | "Мужской">("Женский");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [calculatedValues, setCalculatedValues] = useState<{ name: string; date: string; gender: "Женский" | "Мужской" } | null>(null);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-gold-600 ml-2">Имя</label>
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Введите имя" 
          className="w-full bg-transparent border border-pine-900/20 rounded-full px-6 py-4 text-pine-900 placeholder:text-pine-900/30 focus:outline-none focus:border-gold-500 transition-colors shadow-inner shadow-black/5"
        />
      </div>
      
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-gold-600 ml-2">Дата рождения</label>
        <div className="relative">
          <input 
            type="text" 
            value={date}
            onChange={(e) => setDate(dateMask(e.target.value))}
            placeholder="ДД.ММ.ГГГГ" 
            className="w-full bg-transparent border border-pine-900/20 rounded-full px-6 py-4 text-pine-900 placeholder:text-pine-900/30 focus:outline-none focus:border-gold-500 transition-colors shadow-inner shadow-black/5"
          />
          <CalendarIcon className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-pine-900/40" />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-gold-600 ml-2">Пол</label>
        <div className="flex space-x-2 bg-sand-200/30 p-1.5 rounded-full border border-pine-900/10">
          <button 
            onClick={() => setGender("Женский")}
            className={cn(
              "flex-1 py-3 text-sm font-medium rounded-full transition-all",
              gender === "Женский" ? "bg-sand-300 text-pine-900 shadow-sm" : "text-pine-900/50 hover:text-pine-900 hover:bg-sand-200/50"
            )}
          >
            Женский
          </button>
          <button 
            onClick={() => setGender("Мужской")}
            className={cn(
              "flex-1 py-3 text-sm font-medium rounded-full transition-all",
              gender === "Мужской" ? "bg-sand-300 text-pine-900 shadow-sm" : "text-pine-900/50 hover:text-pine-900 hover:bg-sand-200/50"
            )}
          >
            Мужской
          </button>
        </div>
      </div>

      <motion.button 
        whileHover={{ scale: date.length === 10 ? 1.02 : 1 }}
        whileTap={{ scale: date.length === 10 ? 0.98 : 1 }}
        onClick={() => {
          const pb = parseDateInput(date);
          if(pb) {
            onSubmit(pb.d, pb.m, pb.y);
            setCalculatedValues({ name: name.trim(), date, gender });
          }
        }}
        disabled={date.length < 10}
        className="w-full py-4 mt-6 bg-sand-300 hover:bg-gold-400 disabled:opacity-50 text-pine-900 font-bold uppercase tracking-widest text-sm rounded-full transition-colors shadow-sm inline-flex justify-center items-center gap-2"
      >
        Рассчитать →
      </motion.button>

      <AnimatePresence mode="wait">
        {calculatedValues && (
          <CalculationSummary summaryKey={`${calculatedValues.name}-${calculatedValues.date}-${calculatedValues.gender}`}>
            <p>
              {calculatedValues.name && (
                <>
                  Имя: {calculatedValues.name} <span className="text-pine-900/30">|</span>{" "}
                </>
              )}
              Дата рождения: {calculatedValues.date}
            </p>
            <p className="text-pine-800/45">
              Пол: {calculatedValues.gender}
            </p>
          </CalculationSummary>
        )}
      </AnimatePresence>
    </div>
  );
}

function YearMatrixForm({ onSubmit }: { onSubmit: (d: number, m: number, y: number, t: number) => void }) {
  const [date, setDate] = useState("");
  const [target, setTarget] = useState("");
  const [calculatedValues, setCalculatedValues] = useState<{ date: string; target: string } | null>(null);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-gold-600 ml-2">Дата рождения</label>
        <div className="relative">
          <input 
            type="text" 
            value={date}
            onChange={(e) => setDate(dateMask(e.target.value))}
            placeholder="ДД.ММ.ГГГГ" 
            className="w-full bg-transparent border border-pine-900/20 rounded-full px-6 py-4 text-pine-900 placeholder:text-pine-900/30 focus:outline-none focus:border-gold-500 transition-colors shadow-inner shadow-black/5"
          />
          <CalendarIcon className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-pine-900/40" />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-gold-600 ml-2">Желаемый год</label>
        <input 
          type="text" 
          value={target}
          onChange={(e) => setTarget(e.target.value.replace(/\D/g, '').slice(0, 4))}
          placeholder="Год" 
          className="w-full bg-transparent border border-pine-900/20 rounded-full px-6 py-4 text-pine-900 placeholder:text-pine-900/30 focus:outline-none focus:border-gold-500 transition-colors shadow-inner shadow-black/5"
        />
      </div>

      <motion.button 
        whileHover={{ scale: date.length === 10 && target.length === 4 ? 1.02 : 1 }}
        whileTap={{ scale: date.length === 10 && target.length === 4 ? 0.98 : 1 }}
        onClick={() => {
          const pb = parseDateInput(date);
          const ty = parseInt(target, 10);
          if (pb && ty) {
            onSubmit(pb.d, pb.m, pb.y, ty);
            setCalculatedValues({ date, target });
          }
        }}
        disabled={date.length < 10 || target.length < 4}
        className="w-full py-4 mt-6 bg-sand-300 hover:bg-gold-400 disabled:opacity-50 text-pine-900 font-bold uppercase tracking-widest text-sm rounded-full transition-colors shadow-sm inline-flex justify-center items-center gap-2"
      >
        Рассчитать →
      </motion.button>

      <AnimatePresence mode="wait">
        {calculatedValues && (
          <CalculationSummary summaryKey={`${calculatedValues.date}-${calculatedValues.target}`}>
            <p>Дата рождения: {calculatedValues.date}</p>
            <p className="text-pine-800/45">Матрица года: {calculatedValues.target}</p>
          </CalculationSummary>
        )}
      </AnimatePresence>
    </div>
  );
}

function CompatibilityForm({ onSubmit }: { onSubmit: (d1: number, m1: number, y1: number, d2: number, m2: number, y2: number) => void }) {
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const [calculatedValues, setCalculatedValues] = useState<{ date1: string; date2: string } | null>(null);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-gold-600 ml-2">Первый партнер</label>
        <div className="relative">
          <input 
            type="text" 
            value={date1}
            onChange={(e) => setDate1(dateMask(e.target.value))}
            placeholder="ДД.ММ.ГГГГ" 
            className="w-full bg-transparent border border-pine-900/20 rounded-full px-6 py-4 text-pine-900 placeholder:text-pine-900/30 focus:outline-none focus:border-gold-500 transition-colors shadow-inner shadow-black/5"
          />
          <CalendarIcon className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-pine-900/40" />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-gold-600 ml-2">Второй партнер</label>
        <div className="relative">
          <input 
            type="text" 
            value={date2}
            onChange={(e) => setDate2(dateMask(e.target.value))}
            placeholder="ДД.ММ.ГГГГ" 
            className="w-full bg-transparent border border-pine-900/20 rounded-full px-6 py-4 text-pine-900 placeholder:text-pine-900/30 focus:outline-none focus:border-gold-500 transition-colors shadow-inner shadow-black/5"
          />
          <CalendarIcon className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-pine-900/40" />
        </div>
      </div>

      <motion.button 
        whileHover={{ scale: date1.length === 10 && date2.length === 10 ? 1.02 : 1 }}
        whileTap={{ scale: date1.length === 10 && date2.length === 10 ? 0.98 : 1 }}
        onClick={() => {
          const pb1 = parseDateInput(date1);
          const pb2 = parseDateInput(date2);
          if (pb1 && pb2) {
            onSubmit(pb1.d, pb1.m, pb1.y, pb2.d, pb2.m, pb2.y);
            setCalculatedValues({ date1, date2 });
          }
        }}
        disabled={date1.length < 10 || date2.length < 10}
        className="w-full py-4 mt-6 bg-sand-300 hover:bg-gold-400 disabled:opacity-50 text-pine-900 font-bold uppercase tracking-widest text-sm rounded-full transition-colors shadow-sm inline-flex justify-center items-center gap-2"
      >
        Рассчитать →
      </motion.button>

      <AnimatePresence mode="wait">
        {calculatedValues && (
          <CalculationSummary summaryKey={`${calculatedValues.date1}-${calculatedValues.date2}`}>
            <p>
              Партнер 1: {calculatedValues.date1} <span className="text-pine-900/30">|</span> Партнер 2: {calculatedValues.date2}
            </p>
            <p className="text-pine-800/45">Матрица совместимости рассчитана</p>
          </CalculationSummary>
        )}
      </AnimatePresence>
    </div>
  );
}

function CalculationSummary({ children, summaryKey }: { children: ReactNode; summaryKey: string }) {
  return (
    <motion.div
      key={summaryKey}
      initial={{ opacity: 0, height: 0, y: 12, filter: "blur(4px)" }}
      animate={{ opacity: 1, height: "auto", y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, height: 0, y: -6, filter: "blur(3px)" }}
      transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden"
    >
      <div className="mt-8 border-t border-gold-500/25 pt-5 text-center text-sm leading-relaxed text-pine-900">
        {children}
      </div>
    </motion.div>
  );
}

// -------- Visual Matrix Renderer --------

function MatrixCanvas({ points, mode }: { points: Record<number, number>, mode: "destiny" | "year" | "compatibility" }) {
  const isYearMode = mode === "year";
  const connections = isYearMode ? yearConnections : destinyConnections;
  const positions = isYearMode ? yearPositions : destinyPositions;
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full h-full max-w-[500px] mx-auto aspect-square p-2 md:p-4"
    >
      <svg viewBox="0 0 800 800" className="w-full h-full drop-shadow-sm select-none" preserveAspectRatio="xMidYMid meet">
        {/* Draw edges */}
        {connections.map(([a, b], idx) => {
          const pA = positions[a];
          const pB = positions[b];
          if (!pA || !pB) return null;
          return (
            <motion.line 
              key={`edge-${mode}-${idx}`} 
              x1={pA.x} y1={pA.y} x2={pB.x} y2={pB.y} 
              stroke={defaultOutlineColor} 
              strokeWidth="2" 
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: isYearMode ? 0.6 : 0.8 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: idx * 0.05 }}
            />
          );
        })}
        {/* Draw nodes */}
        {Object.entries(positions).map(([key, pos], idx) => {
            const id = parseInt(key, 10);
            const hasValue = Object.prototype.hasOwnProperty.call(points, id);
            const val = points[id];
            
            const specialNodes = [1,2,3,4,5,6,7,8,9];
            const isSpecial = isYearMode ? [1,2,3,4,5].includes(id) : specialNodes.includes(id);
            const radius = isSpecial ? 26 : 20;
            const strokeColor = outlineColorsByPoint[id] || defaultOutlineColor;
            
            const delay = 0.5 + (idx * 0.03);

            return (
                <g key={`node-${mode}-${id}`}>
                    <motion.circle 
                      cx={pos.x} cy={pos.y} r={radius} 
                      fill="#FAF8F5" 
                      stroke={strokeColor} 
                      strokeWidth={isSpecial ? "3" : "2"}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, type: "spring", delay }}
                    />
                    {hasValue && (
                      <text
                        x={pos.x}
                        y={pos.y + 2}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="#705B4D"
                        fontSize={isSpecial ? "28" : "24"}
                        fontWeight="400"
                        className="select-none pointer-events-none"
                        style={{ fontFamily: "'Lora', serif" }}
                      >
                        {val}
                      </text>
                    )}
                </g>
            )
        })}
      </svg>
    </motion.div>
  );
}
