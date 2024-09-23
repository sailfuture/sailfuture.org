import { Heading, Lead, Subheading } from '@/components/text'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { CheckIcon } from '@heroicons/react/20/solid'
import { Container } from '@/components/container'

const features = [
  {
    name: 'Invite team members',
    description: 'Rerum repellat labore necessitatibus reprehenderit molestiae praesentium.',
  },
  { name: 'List view', description: 'Corporis asperiores ea nulla temporibus asperiores non tempore assumenda aut.' },
  {
    name: 'Keyboard shortcuts',
    description: 'In sit qui aliquid deleniti et. Ad nobis sunt omnis. Quo sapiente dicta laboriosam.',
  },
  {
    name: 'Calendars',
    description: 'Sed rerum sunt dignissimos ullam. Iusto iure occaecati voluptate eligendi fugiat sequi.',
  },
  { name: 'Notifications', description: 'Quos inventore harum enim nesciunt. Aut repellat rerum omnis adipisci.' },
  { name: 'Boards', description: 'Quae sit sunt excepturi fugit veniam voluptatem ipsum commodi.' },
  {
    name: 'Reporting',
    description: 'Eos laudantium repellat sed architecto earum unde incidunt. Illum sit dolores voluptatem.',
  },
  {
    name: 'Mobile app',
    description: 'Nulla est saepe accusamus nostrum est est. Fugit voluptatum omnis quidem voluptatem.',
  },]

export function ExampleIII() {
    return (
      <div className="overflow-hidden bg-gray-50 py-6 md:py-12 lg:py-24">
        <Container>
        <div className="mx-auto lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
            <div className="lg:ml-auto lg:pl-4 lg:pt-4 self-center">
            <Subheading>Sailing Expeditions</Subheading>
              <Heading as="h3" className="mt-2">
              Travel the world and discover yourself.
              </Heading>
              <Lead className="mt-6 max-w-3xl">
              At SailFuture Academy, sailing expeditions are central to our educational approach, offering an immersive experience that combines adventure, learning, and personal growth.
              </Lead>
              <p className="mt-6 text text-gray-600">
              Over the course of 7 weeks, students and teachers journey to unique and often remote parts of the world, forging lasting relationships and sharing life-changing experiences.
              <br></br><br></br>
Regarded as a transformative 'rite-of-passage,' every SailFuture Academy student is required to complete a sailing expedition prior to graduation, ensuring they are well-prepared for the challenges of ‘real-world’ post-graduation.
          </p>
            </div>
            <div className="flex items-start justify-end lg:order-first">
              <img
                alt="Product screenshot"
                src="https://res.cloudinary.com/dbhwzxw0k/image/upload/v1703040735/30m-Yacht-JUPITER_-9883-21.jpg"
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