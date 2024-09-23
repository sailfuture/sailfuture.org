import { Heading, Lead, Subheading } from '@/components/text'
import { Button } from '@/components/button'

export function CTA() {
    return (
      <div className="bg-gray-900">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center text-white">
          <Subheading>'25-'26 Enrollment Opening Soon</Subheading>
              <Heading as="h3" className="mt-2 text-white">
              Interested in learning more about enrolling your child at SailFuture Academy?
              </Heading>
              <div className="mt-6">
            <Button className="w-full sm:w-auto" variant="dark" href="#">
              Submit An Interest Form
            </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  