import { Heading, Lead, Subheading } from '@/components/text'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { CheckIcon } from '@heroicons/react/20/solid'
import { Container } from '@/components/container'

const features = [
    {
      name: 'Graduates earn a certified Department of Education high school diploma, certifications, work experience, and a comprehensive portfolio.',
    },
    {
      name: 'Students gain practical experiences in Business, Design Thinking, SEL, Applied Math, English, Career Exploration, and Maritime, beyond traditional classroom settings.',
    },
    {
      name: 'Our holistic approach fosters work ethic, time management, maturity, and pride in work, preparing students for future careers or academic pursuits.',
    },
    {
      name: 'Students engage in student-led businesses, paid internships, work-based experiences, and project-based coursework to enhance problem-solving and critical thinking skills.',
    },
  ]

export function Example() {
    return (
      <div className="overflow-hidden bg-gray-50 py-6 md:py-12 lg:py-24">
        <Container>
        <div className="mx-auto">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
            <div className="lg:ml-auto lg:pl-4 lg:pt-4 self-center">
              <Subheading>Hands-On Practical Curriculum</Subheading>
              <Heading as="h3" className="mt-2">
              High School Designed for
              the Real-World
              </Heading>
              <Lead className="mt-6 max-w-3xl">
              We place students in the driver’s seat to solve real world problems from the moment they step foot on campus in order to re-engage and re-inspire students who have become disconnected from their high school experience.              </Lead>
              <dl className="col-span-1 grid grid-cols-1 gap-x-8 gap-y-2 text-base text-gray-600 sm:grid-cols-1 lg:gap-y-2 mt-6">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="mt-0 text text-gray-600">
                    <CheckIcon aria-hidden="true" className="absolute left-0 top-1 h-5 w-5 text-indigo-500" />
                    {feature.name}
                  </dt>
                </div>
              ))}
            </dl>
            </div>
            <div className="flex items-start justify-end lg:order-first">
              <img
                alt="Product screenshot"
                src="https://res.cloudinary.com/dbhwzxw0k/image/upload/v1671417847/8G3A7754.jpg"
                width={2432}
                height={1442}
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              />
            </div>
          </div>
        </div>
        </Container>
      </div>
    )
  }
  
