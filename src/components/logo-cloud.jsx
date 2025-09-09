import { clsx } from 'clsx'
import { Heading, Lead, Subheading } from '@/components/text'

export function LogoCloud({ className }) {
  return (
    <>
    <div class="py-16">
      <div class="text-center md:text-left">
    <Subheading>Our Education Partners</Subheading>
    </div>
    <div
      className={clsx(
        className,
        'flex justify-between max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4 pt-4',
      )}
    >
      <img
        alt="SavvyCal"
        src="https://res.cloudinary.com/dbhwzxw0k/image/upload/v1613323950/3Artboard_1.svg"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
      <img
        alt="Laravel"
        src="https://res.cloudinary.com/dbhwzxw0k/image/upload/v1613323950/3Artboard_1_copy_2.svg"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
      <img
        alt="Tuple"
        src="https://res.cloudinary.com/dbhwzxw0k/image/upload/v1613323950/3Artboard_1_copy_6.svg"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
      <img
        alt="Transistor"
        src="./logo-cloud/transistor.svg"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
      <img
        alt="Statamic"
        src="./logo-cloud/statamic.svg"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
    </div>
    </div>
    </>
  )
}
