'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';

type DatePickerProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

const dayLabels = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

function formatDisplay(value: string) {
  if (!value) return '';
  const parts = value.split('-'); // yyyy-mm-dd
  if (parts.length !== 3) return value;
  const [y, m, d] = parts;
  return `${d}/${m}/${y}`;
}

function toValueString(date: Date) {
  const y = date.getFullYear();
  const m = `${date.getMonth() + 1}`.padStart(2, '0');
  const d = `${date.getDate()}`.padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function getMonthMatrix(month: number, year: number) {
  const first = new Date(year, month, 1);
  const firstDay = first.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const weeks: (Date | null)[][] = [];
  let currentWeek: (Date | null)[] = new Array(firstDay).fill(null);

  for (let day = 1; day <= daysInMonth; day++) {
    currentWeek.push(new Date(year, month, day));
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }

  if (currentWeek.length) {
    while (currentWeek.length < 7) currentWeek.push(null);
    weeks.push(currentWeek);
  }

  return weeks;
}

const DatePicker = ({ value, onChange, placeholder = 'dd/mm/yyyy' }: DatePickerProps) => {
  const [open, setOpen] = useState(false);
  const parsed = useMemo(() => {
    if (!value) return null;
    const [y, m, d] = value.split('-').map(Number);
    if (!y || !m || !d) return null;
    return new Date(y, m - 1, d);
  }, [value]);

  const [currentMonth, setCurrentMonth] = useState<Date>(parsed ?? new Date());
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener('mousedown', onClickOutside);
    }
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [open]);

  useEffect(() => {
    if (parsed) {
      setCurrentMonth(parsed);
    }
  }, [parsed]);

  const matrix = useMemo(
    () => getMonthMatrix(currentMonth.getMonth(), currentMonth.getFullYear()),
    [currentMonth]
  );

  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const handleSelect = (date: Date) => {
    onChange(toValueString(date));
    setOpen(false);
  };

  const display = formatDisplay(value);
  const monthLabel = currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' });

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between rounded-lg border-2 border-gray-200 px-4 py-3 text-left text-sm text-forest-800 focus:border-sage-400 focus:outline-none transition-colors"
      >
        <span className={display ? 'text-forest-800' : 'text-gray-400'}>
          {display || placeholder}
        </span>
        <svg
          className="ml-3 h-4 w-4 text-gray-400"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <rect
            x="3"
            y="4"
            width="18"
            height="17"
            rx="2"
            ry="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path d="M3 9h18" stroke="currentColor" strokeWidth="1.7" />
          <path
            d="M9 3v4M15 3v4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.16 }}
            className="fixed inset-x-4 top-24 z-40 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-black/5 max-h-[70vh] overflow-y-auto md:absolute md:inset-auto md:top-full md:left-1/2 md:-translate-x-1/2 md:mt-3 md:w-[280px]"
          >
            <div className="mb-3 flex items-center justify-between text-xs font-medium text-forest-800">
              <button
                type="button"
                className="rounded-full bg-gray-100 px-2 py-1 text-gray-600 hover:bg-gray-200"
                onClick={() =>
                  setCurrentMonth(
                    (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
                  )
                }
              >
                ‹
              </button>
              <span>{monthLabel}</span>
              <button
                type="button"
                className="rounded-full bg-gray-100 px-2 py-1 text-gray-600 hover:bg-gray-200"
                onClick={() =>
                  setCurrentMonth(
                    (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
                  )
                }
              >
                ›
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-semibold text-gray-400">
              {dayLabels.map((d) => (
                <div key={d}>{d}</div>
              ))}
            </div>

            <div className="mt-1 grid grid-cols-7 gap-1 text-center text-sm">
              {matrix.flat().map((date, idx) => {
                if (!date) {
                  return <div key={idx} className="h-8" />;
                }
                const dateMidnight = new Date(
                  date.getFullYear(),
                  date.getMonth(),
                  date.getDate()
                );
                const isDisabled = dateMidnight < today;
                const isSelected =
                  parsed &&
                  date.getFullYear() === parsed.getFullYear() &&
                  date.getMonth() === parsed.getMonth() &&
                  date.getDate() === parsed.getDate();
                const isToday = (() => {
                  const today = new Date();
                  return (
                    date.getFullYear() === today.getFullYear() &&
                    date.getMonth() === today.getMonth() &&
                    date.getDate() === today.getDate()
                  );
                })();

                return (
                  <button
                    type="button"
                    key={idx}
                      onClick={() => {
                        if (!isDisabled) handleSelect(date);
                      }}
                      disabled={isDisabled}
                    className={[
                      'flex h-8 w-8 items-center justify-center rounded-full text-xs transition-colors',
                      isSelected
                        ? 'bg-sage-400 text-forest-900 font-semibold'
                        : isDisabled
                        ? 'text-gray-300 cursor-not-allowed'
                        : 'text-forest-800 hover:bg-gray-100',
                      isToday && !isSelected ? 'ring-1 ring-sage-400' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    {date.getDate()}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DatePicker;

