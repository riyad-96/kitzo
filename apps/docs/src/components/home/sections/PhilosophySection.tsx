'use client';

import { Zap, Eye, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

const philosophy = [
  {
    title: 'Minimal by default',
    description: 'Components do one thing well. You compose the rest.',
    icon: Zap,
  },
  {
    title: 'Preview first',
    description: 'Every utility is shown before it is explained.',
    icon: Eye,
  },
  {
    title: 'Built to grow',
    description: 'Tree-shakeable architecture. Zero duplication.',
    icon: TrendingUp,
  },
];

export default function PhilosophySection() {
  return (
    <section className="mb-40">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 flex flex-col items-center text-center"
      >
        <span className="text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase">
          Philosophy
        </span>
        <h2 className="mt-3 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
          The core principles
        </h2>
      </motion.div>

      <div className="grid gap-12 md:grid-cols-3">
        {philosophy.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group flex flex-col items-center text-center"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50 transition-colors group-hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900/50 dark:group-hover:border-neutral-700">
              <item.icon
                className="h-6 w-6 text-neutral-900 dark:text-neutral-100"
                strokeWidth={1.5}
              />
            </div>
            <h3 className="mb-3 text-base font-semibold text-neutral-900 dark:text-neutral-100">
              {item.title}
            </h3>
            <p className="max-w-[240px] text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
