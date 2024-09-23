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

function Header() {
  return (
    <Container className="mt-16 z-20 relative">
    </Container>
  )
}

function HeaderII() {
  return (
    <Container className="z-20 relative mt-6">
      <Subheading>Contact</Subheading>
      <Lead className="mt-6 max-w-3xl">
      </Lead>
    </Container>
  )
}
function ContactForm() {
  return (
    <div className="relative bg-white z-20">
      <div className="lg:absolute lg:inset-0 lg:left-1/2">
        <img
          alt=""
          src="https://res.cloudinary.com/dbhwzxw0k/image/upload/v1683591052/Saturday_April_29_2023_5-51-26_PM_13.jpg"
          className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full"
        />
      </div>
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 py-16">
        <div className="">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          <Heading as="h1">Contact Us</Heading>
      <Lead className="mt-6 max-w-3xl">
      Wed love to hear from you! Send us a message using the form below.
      </Lead>
      <div class="mt-6">
      <script src="https://cdn.virtuoussoftware.com/virtuous.embed.min.js" data-vform="9f70be25-45c1-452a-815c-5416d4be3906" data-orgId="4063" data-isGiving="false" data-merchantType=""></script>
      </div>
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
      <ContactForm />
      <Footer />
    </main>
  )
}
