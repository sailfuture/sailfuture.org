import * as Headless from '@headlessui/react'
import { clsx } from 'clsx'
import { Link } from './link'

const variants = {
  primary: clsx(
    'inline-flex items-center justify-center px-4 py-[calc(theme(spacing.2)-1px)]',
    'rounded-md border border-transparent bg-gray-950 shadow-md',
    'whitespace-nowrap text-base font-medium text-white',
    'data-[disabled]:bg-gray-950 data-[hover]:bg-gray-800 data-[disabled]:opacity-40',
  ),
  light: clsx(
    'inline-flex items-center justify-center px-4 py-[calc(theme(spacing.2)-1px)]',
    'rounded-md border border-gray-100 bg-transparent shadow-md',
    'whitespace-nowrap text-base font-medium text-white',
    'data-[disabled]:bg-gray-50/10 data-[hover]:bg-gray-50/10 data-[disabled]:opacity-10',
  ),
  secondary: clsx(
    'relative inline-flex items-center justify-center px-4 py-[calc(theme(spacing.2)-1px)]',
    'rounded-md border border-transparent bg-blue-600 shadow-md ring-1 ring-[#D15052]/15',
    'after:absolute after:inset-0 after:rounded-md after:shadow-[inset_0_0_2px_1px_#ffffff4d]',
    'whitespace-nowrap text-base font-medium text-gray-200',
    'data-[disabled]:bg-blue-700 data-[hover]:bg-blue-700 data-[disabled]:opacity-40',
  ),
  outline: clsx(
    'inline-flex items-center justify-center px-2 py-[calc(theme(spacing.[1.5])-1px)]',
    'rounded-lg border border-transparent shadow ring-1 ring-black/10',
    'whitespace-nowrap text-sm font-medium text-gray-950',
    'data-[disabled]:bg-transparent data-[hover]:bg-gray-50 data-[disabled]:opacity-40',
  ),
  dark: clsx(
    'inline-flex items-center justify-center px-2 py-[calc(theme(spacing.[1.5])-1px)] bold',
    'rounded-lg border border-1 shadow ring-1 ring-white',
    'whitespace-nowrap text-sm font-medium text-gray-50',
    'data-[disabled]:bg-transparent data-[hover]:bg-gray-50/10 data-[disabled]:opacity-40',
  ),
}

export function Button({ variant = 'primary', className, ...props }) {
  className = clsx(className, variants[variant])

  if (typeof props.href === 'undefined') {
    return <Headless.Button {...props} className={className} />
  }

  return <Link {...props} className={className} />
}
