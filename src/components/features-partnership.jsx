import { Heading, Lead, Subheading } from '@/components/text'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { CheckIcon } from '@heroicons/react/20/solid'
import { Button } from '@/components/button'

export function FeaturesPartnership() {
    return (
      <div className="overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
            <div className="lg:ml-auto lg:pl-4 lg:pt-4 self-center">
              <Subheading>TIMELINE</Subheading>
              <Heading as="h3" className="mt-2">
              First Come First Serve
              </Heading>
              <Lead className="mt-6 max-w-3xl">
              The Strong Families tax credit program has a $20M annual cap, and tax credits are issued on a first-come, first-served basis. </Lead>
              <div className="mt-6">
            <Button className="w-full sm:w-auto" href="#">
              Join us
            </Button>
          </div>
            </div>
            <div className="flex items-start justify-end lg:order-first">
              <img
                alt="Product screenshot"
                src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                width={2432}
                height={1442}
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
