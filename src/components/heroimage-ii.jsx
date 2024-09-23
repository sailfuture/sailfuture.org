import { clsx } from 'clsx'

export function HeroImageII({ className, ...props }) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'bg-cover bg-center bg-no-repeat h-full w-full overflow-hidden',
        'absolute inset-0',
        'bg-[url("https://res.cloudinary.com/dbhwzxw0k/image/upload/v1727051763/Corportate-Hero.png")]' // Replace with your image URL
      )}
    />
  )
}

export function HeroImageBackground() {
  return (
    <div className="relative w-full h-screen">
    <div className="absolute inset-0 bg-navy opacity-60" /> {/* Dark navy overlay */}
    </div>
  )
}
