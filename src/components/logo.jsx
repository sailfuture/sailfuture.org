'use client'

import { clsx } from 'clsx'

export function Logo({ className }) {
  return (
    <img
      src="https://res.cloudinary.com/dbhwzxw0k/image/upload/v1613249913/SailFutureLogoDarkBlue.svg" // Replace with your actual image URL
      alt="Logo"
      className={clsx(className, 'h-auto w-auto max-w-[114px] max-h-[50px]')} // Adjust size limits
      width={127}
      height={34}
    />
  )
}

export function Mark({ className }) {
  return (
    <img
      src="https://res.cloudinary.com/dbhwzxw0k/image/upload/v1613249913/SailFutureLogoDarkBlue.svg" // Replace with your actual image URL
      alt="Mark"
      className={clsx(className, 'h-auto w-auto max-w-[114px] max-h-[50px]')} // Adjust size limits
      width={127}
      height={34}
    />
  )
}

export function LogoWhite({ className }) {
  return (
    <img
      src="https://res.cloudinary.com/dbhwzxw0k/image/upload/v1726930537/SailFutureLogoWhite.svg" // Replace with the URL for the white version
      alt="White Logo"
      className={clsx(className, 'h-auto w-auto max-w-[114px] max-h-[50px]')} // Adjust size limits
      width={127}
      height={34}
    />
  )
}

export function MarkWhite({ className }) {
  return (
    <img
      src="https://res.cloudinary.com/dbhwzxw0k/image/upload/v1726930537/SailFutureLogoWhite.svg" // Replace with the URL for the white version
      alt="White Mark"
      className={clsx(className, 'h-auto w-auto max-w-[114px] max-h-[50px]')} // Adjust size limits
    />
  )
}
