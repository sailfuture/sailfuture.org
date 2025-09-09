import { clsx } from 'clsx'

export function Gradient({ className, ...props }) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'bg-cover bg-center bg-no-repeat h-full w-full',
        'absolute inset-0',
        'bg-[url("https://res.cloudinary.com/dbhwzxw0k/image/upload/v1727051896/Primary-Hero-ii.png")]' // Replace with your image URL
      )}
    />
  )
}

export function GradientBackground() {
  return (
    <div className="relative w-full h-screen">
    <div className="absolute inset-0 bg-navy opacity-60" /> {/* Dark navy overlay */}
    </div>
  )
}
