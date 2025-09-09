import { Heading, Lead, Subheading } from '@/components/text'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { CheckIcon } from '@heroicons/react/20/solid'
import { Container } from '@/components/container'

const features = [
  {
    name: 'Students participate in community service projects, applying leadership and communication skills to help those in need.',
  },
  {
    name: 'Hands-on internships offer real-world work exposure aligned with students career interests.',
  },
  {
    name: 'Students explore colleges and businesses, gaining insights into career paths and real-world applications of their studies.',
  },
  {
    name: 'Extended apprenticeship program develops specialized skills over a year.',
  },
  {
    name: '7-week sailing journey to destinations like Antigua and Nova Scotia fosters self-worth, work ethic, and broadens world experiences.',
  },
  {
    name: 'Students define post-graduation goals and plan for budgeting, saving, insurance, transportation, and more for real-world success.',
  },
  {
    name: 'Students complete a capstone business plan thesis for a business of their choice and present to a panel of investors.',
  },
]

export function ExampleII() {
  return (
    <div className="overflow-hidden bg-white py-6 md:py-12 lg:py-24">
      <Container>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-stretch">
          <div className="lg:pr-8 lg:pt-4 self-center min-h-full">
            <Subheading>Signature Experiences</Subheading>
            <Heading as="h3" className="mt-2">
              Signature Educational Experiences
            </Heading>
            <Lead className="mt-6 max-w-3xl">
              SailFuture Academy's distinctive educational approach includes signature experiences and key graduation requirements, ensuring students engage in unique, practical learning opportunities and meet essential academic and experiential milestones before earning their diploma.
            </Lead>
            <p className="mt-6 text text-gray-600">
              At Radiant, we are dedicated to transforming the way revenue
              organizations source and close deals. Our mission is to provide our
              customers with an unfair advantage over both their competitors and
              potential customers through insight and analysis. We’ll stop at
              nothing to get you the data you need to close a deal.
            </p>
            <dl className="col-span-1 grid grid-cols-1 gap-x-8 gap-y-2 text-base text-gray-600 sm:grid-cols-1 lg:gap-y-2 mt-6">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="mt-0 text-sm/6 text-gray-600">
                    <CheckIcon aria-hidden="true" className="absolute left-0 top-1 h-5 w-5 text-indigo-500" />
                    {feature.name}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
          <div className="flex items-stretch">
            <img
              alt="Product screenshot"
              src="https://res.cloudinary.com/dbhwzxw0k/image/upload/v1698765650/092923_WhateverItTakes_60.jpg"
              className="w-full h-full object-cover max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            />
          </div>
        </div>
      </div>
      </Container>
    </div>
  )
}