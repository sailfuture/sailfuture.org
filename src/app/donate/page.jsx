import { AnimatedNumber } from '@/components/animated-number'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'

export const metadata = {
  title: 'Contact',
  description:
    'We’re on a mission to transform revenue organizations by harnessing vast amounts of illegally acquired customer data.',
}

function HeaderII() {
  return (
    <Container className="z-20 relative mt-6">
      <Subheading>Donate</Subheading>
      <Lead className="mt-6 max-w-3xl">
      </Lead>
    </Container>
  )
}

function Header() {
  return (
    <Container className="mt-16 z-20 relative">
    </Container>
  )
}

function DonateForm() {
  return (
    <div className="relative bg-white z-20">
      <div className="lg:absolute lg:inset-0 lg:left-1/2">
        <img
          alt=""
          src="https://res.cloudinary.com/dbhwzxw0k/image/upload/v1716737233/212829458_4061753870603732_354934692642398216_n_1.jpg"
          className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full"
        />
      </div>
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 py-16">
        <div className="">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          <Heading as="h1">Transform Lives with Your Donation</Heading>
      <Lead className="mt-6 max-w-3xl text-gray-500">
      Your generous donation makes it possible for SailFuture to set more students on a course for success.
      </Lead>
      <script src="https://cdn.virtuoussoftware.com/virtuous.embed.min.js" data-vform="8028ffd5-de14-4017-9a65-eed2d91beb98" data-orgId="4063" data-isGiving="true" data-merchantType="StripeUnified"></script>
          </div>
        </div>
      </div>
    </div>
  )
}


export default function Company() {
  return (
    <main className="overflow-hidden">
      <Container>
        <Navbar />
      </Container>
      <HeaderII />
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
      <DonateForm />
      <Footer />
    </main>
  )
}
