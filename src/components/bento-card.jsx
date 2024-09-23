'use client'

import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import { Subheading } from './text'
import { Button } from '@/components/button'

export function BentoCard({
  dark = false,
  className = '',
  eyebrow,
  title,
  description,
  graphic,
  buttontext,
  fade = [],
}) {
  return (
    <motion.div
      initial="idle"
      whileHover="active"
      variants={{ idle: {}, active: {} }}
      data-dark={dark ? 'true' : undefined}
      className={clsx(
        className,
        'group relative flex flex-col overflow-hidden rounded-lg',
        'bg-white shadow-sm ring-1 ring-black/5',
        'data-[dark]:bg-gray-800 data-[dark]:ring-white/15',
      )}
    >
      <div className="relative flex-shrink-0 overflow-hidden h-48">
        {graphic}
      </div>
      <div className="relative p-10 flex flex-col flex-grow">
        <Subheading as="h3" dark={dark}>
          {eyebrow}
        </Subheading>
        <p className="mt-1 text-2xl font-medium tracking-tight text-gray-950 group-data-[dark]:text-white">
          {title}
        </p>
        <p className="mt-2 max-w-[600px] text-gray-600 group-data-[dark]:text-gray-400 line-clamp-6">
          {description}
        </p>
        <div className="mt-auto">
          <Button className="w-full sm:w-auto" variant="outline" href="/our-mission">
            {buttontext}
          </Button>
        </div>
      </div>
    </motion.div>
  )
}