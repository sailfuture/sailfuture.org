import { AnimatedNumber } from '@/components/animated-number'
import { Button } from '@/components/button'
import { HeroImageII } from '@/components/heroimage-ii'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { CTA } from '@/components/cta'
import { FeaturesPartnership } from '@/components/features-partnership'
import { Heading, Lead, Subheading } from '@/components/text'
import { BuildingLibraryIcon, CurrencyDollarIcon, BriefcaseIcon, BuildingOffice2Icon, CreditCardIcon, DocumentCurrencyDollarIcon} from '@heroicons/react/16/solid'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'



export const metadata = {
  title: 'Partnerships',
  description:
    'We’re on a mission to transform revenue organizations by harnessing vast amounts of illegally acquired customer data.',
}

const features = [
  {
    name: 'Alcoholic Beverage Excise Tax',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Business Rent/Commercial Lease ',
    icon: BuildingOffice2Icon,
  },
  {
    name: 'Direct Pay Sales and Use Tax',
    icon: BriefcaseIcon,
  },
  {
    name: 'Insurance Premium Tax',
    icon: BuildingLibraryIcon,
  },
  {
    name: 'Oil and Gas Tax',
    icon: DocumentCurrencyDollarIcon,
  },
  {
    name: 'Corporate Income Tax',
    icon: CreditCardIcon,
  },
]

function HeaderII() {
  return (
    <Container className="z-20 relative mt-6">
      <Subheading>Corporate Partnerships</Subheading>
      <Lead className="mt-6 max-w-3xl">
      </Lead>
    </Container>
  )
}

function Hero() {
  return (
    <div className="relative mx-4 overflow-hidden pt-32">
      {/* Image with a gradient overlay */}
      <div className="absolute inset-0 bottom-0 z-10 rounded-4xl overflow-hidden">
        <HeroImageII className="w-full h-full object-cover rounded-4xl ring-1 ring-inset ring-black/5" />
        {/* Gradient overlay with matching rounded corners */}
        <div className="absolute inset-0 bottom-0 bg-gradient-to-t from-#0E2547 via-transparent to-transparent rounded-4xl"></div>
      </div>

      {/* Text content */}
      <Container className="z-20 relative">
        <Lead as="h2" className="mb-6 text-white">
          Corporate Partnerships
        </Lead>
      </Container>
    </div>
  );
}

function Header() {
  return (
    <Container className="z-20 relative pb-16 pt-6">
      <Heading as="h1" className="mb-3">Turn your Tax Liability into a Donation</Heading>
      <Lead className="mt-3 max-w-3xl">
      SailFuture is qualified by the state of Florida to participate in a tax credit program that gives corporations a dollar for dollar reduction for the following business taxes:
      </Lead>
      <Lead className="mt-3 max-w-3xl">
      The redirected tax dollars fund innovative programs that help at-risk youth and their families break cycles of foster care involvement through job training, mental health, and education programs. 
      </Lead>
      <Subheading as="h3" className="mt-12">
        Qualifiying Tax Matching Dollars
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-blue-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
      </ul>    </Container>
  )
}

function Team() {
  return (
    <Container className="py-16">
      <Subheading>First Come First Serve</Subheading>
      <Heading as="h3" className="mt-2">
      The Strong Families tax credit program has a $20M annual cap, and tax credits are issued on a first-come, first-served basis.
      </Heading>
      <Lead className="mt-6 max-w-3xl">

      Once the cap is reached, no additional credits will be issued for the year, making it important to apply early for securing credit benefits.
      </Lead>
      <Button className="mt-4" variant="secondary" href="/contact">Join Us</Button>
    </Container>
  )
}

function Steps() {
  return (
    <div class="bg-gray-50">
    <Container className="py-16">
            <Subheading>How to participate</Subheading>
      <Heading as="h3" className="mt-2">
      Participation is Simple & Easy
      </Heading>
      <Lead className="mt-6 max-w-3xl">
      Complete the online application with the Florida Department of Revenue to reserve your credits.
      </Lead>
      <Button className="mt-4" variant="secondary">Click Here to Begin</Button>
      <ul
        role="list"
        className="mx-auto mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3"
      >
        <li class="bg-white p-12 border-1 border-color-gray-500 rounded-xl hover:bg-blue-700/10 ring-1 ring-blue-600">
        <Subheading as="h3" className="mt-0">
        Step 1
      </Subheading>
        <Heading as="h2" className="mt-2">
        Reserve your 1:1 tax credits online
      </Heading>
        </li>
        <li class="bg-white p-12 border-1 border-color-gray-500 rounded-xl hover:bg-blue-700/10 ring-1 ring-blue-600">
        <Subheading as="h3" className="mt-0">
        Step 2
      </Subheading>
        <Heading as="h2" className="mt-2">
        Remit your payment
      </Heading>
        </li>
        <li class="bg-white p-12 border-1 border-color-gray-500 rounded-xl hover:bg-blue-700/10 ring-1 ring-blue-600">
        <Subheading as="h3" className="mt-0">
        Step 3
      </Subheading>
        <Heading as="h2" className="mt-2">
        Report your credits
      </Heading>
        </li>
      </ul>
    </Container>
    </div>
  )
}

function Investors() {
  return (
    <Container className="py-16">
      <Heading as="h3" className="mt-2">
      Our Corporate Partners
      </Heading>
      <Subheading as="h3" className="mt-12">
        Our Corporate Partners
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      
      <ul
        role="list"
        className="mx-auto mt-6 grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
          <BigCompany
          name="Google"
          description="Mountain View, California"
          img="https://res.cloudinary.com/dbhwzxw0k/image/upload/v1727055600/Frame_1.png"
        />
        <BigCompany
          name="Orlando Health"
          description="Orlando, Florida"
          img="https://res.cloudinary.com/dbhwzxw0k/image/upload/v1727055606/Frame_10.png"
        />
        <BigCompany
          name="LinkedIn"
          description="Sunnyvale, California"
          img="https://res.cloudinary.com/dbhwzxw0k/image/upload/v1727055601/Frame_2.png"
        />
        <BigCompany
          name="Center for Education Reform"
          description="Washington, D.C."
          img="https://res.cloudinary.com/dbhwzxw0k/image/upload/v1727055604/Frame_7.png"
        />
        <BigCompany
          name="Drexel Fund"
          description="Washington, D.C."
          img="https://res.cloudinary.com/dbhwzxw0k/image/upload/v1727055605/Frame_9.png"
        />
                <BigCompany
          name="Stand Together Foundation"
          description="Arlington, Virginia"
          img="https://res.cloudinary.com/dbhwzxw0k/image/upload/v1727055601/Frame_3.png"
        />
        <BigCompany
          name="YASS Foundation"
          description="Washington, D.C."
          img="https://res.cloudinary.com/dbhwzxw0k/image/upload/v1727055604/Frame_6.png"
        />
        <BigCompany
          name="AT&T"
          description="Dallas, Texas"
          img="https://res.cloudinary.com/dbhwzxw0k/image/upload/v1727055603/Frame_5.png"
        />
        <BigCompany
          name="Department of Labor"
          description="Washington, D.C."
          img="https://res.cloudinary.com/dbhwzxw0k/image/upload/v1727055602/Frame_4.png"
        />
      </ul>

      <div class="mb-6">
      <Subheading as="h3" className="mt-12">
        Government Partners
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-6 grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <Company
          name="Florida Department of Juvenile Justice"
          description="Child Welfare & Recidivism Prevention"
          img="./individual-investors/kristin-watson.jpg"
        />
        <Company
          name="
Florida Department of Education"
          description="Educational Services"
          img="./individual-investors/emma-dorsey.jpg"
        />
        <Company
          name="Florida Department of Children and Families"
          description="Child Welfare Services"
          img="./individual-investors/alicia-bell.jpg"
        />
        <Company
          name="Department of Labor"
          description="Educational Services & Job Training"
          img="./individual-investors/jenny-wilson.jpg"
        />
        <Company
          name="Career Source Tampa Bay"
          description="Educational Services & Job Training"
          img="./individual-investors/anna-roberts.jpg"
        />
        <Company
          name="Step Up For Students"
          description="Educational Services"
          img="./individual-investors/benjamin-russel.jpg"
        />
                <Company
          name="Florida Medicaid"
          description="Mental Health Services"
          img="./individual-investors/kristin-watson.jpg"
        />
        <Company
          name="Sunshine Health"
          description="Mental Health Services"
          img="./individual-investors/emma-dorsey.jpg"
        />
      </ul>
      </div>
      <div class="">
      <Subheading as="h3" className="mt-12">
        Child Welfare Partners
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-6 grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <Company
          name="Family Support Services"
          description="Child Welfare"
          img="./individual-investors/kristin-watson.jpg"
        />
        <Company
          name="
Florida Department of Education"
          description="Educational Services"
          img="./individual-investors/emma-dorsey.jpg"
        />
        <Company
          name="ChildNet Foster Care Services"
          description="Child Welfare"
          img="./individual-investors/alicia-bell.jpg"
        />
        <Company
          name="Citrus Health"
          description="Child Welfare"
          img="./individual-investors/jenny-wilson.jpg"
        />
                <Company
          name="
Camelot"
          description="Extended Foster Care Services"
          img="./individual-investors/emma-dorsey.jpg"
        />
      </ul>
      </div>
     
    </Container>
  )
}

function BigCompany({ name, description, img }) {
  return (
    <li className="flex items-center gap-4">
      <img alt="" src={img} className="size-12 rounded-full" />
      <div className="text-sm/6">
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </li>
  )
}

function Company({ name, description }) {
  return (
    <li className="flex items-center gap-4">
      <div className="text-sm/6">
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </li>
  )
}

export default function Partnerships() {
  return (
    <main className="overflow-hidden">
      <Container>
        <Navbar />
      </Container>
      <HeaderII />
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
      <Header />
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
      <Steps />
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
      <Team />
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
      {/* <FeaturesPartnership /> */}
      {/* <CTA /> */}
      <Investors />
      <Footer />
    </main>
  )
}
