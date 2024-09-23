import { AnimatedNumber } from '@/components/animated-number'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { HeroImageII } from '@/components/heroimage-ii'
import { Heading, Lead, Subheading } from '@/components/text'
import { Testimonials } from '@/components/testimonials'

export const metadata = {
  title: 'Our Mission',
  description:
    'We’re on a mission to transform revenue organizations by harnessing vast amounts of illegally acquired customer data.',
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
          Our Mission
        </Lead>
      </Container>
    </div>
  );
}

function HeaderII() {
  return (
    <Container className="z-20 relative mt-6">
      <Subheading> Our Mission</Subheading>
      <Lead className="mt-6 max-w-3xl">
      </Lead>
    </Container>
  )
}

export function FullBleedImage() {
  return (
    <div className="relative overflow-hidden w-screen">
      <img
        src="https://res.cloudinary.com/dbhwzxw0k/image/upload/v1716737212/49368622_1968863596559447_3637190215644217344_n.jpg"
        alt="Full Bleed Example"
        className="w-full h-60 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      </div>
    </div>
  );
}


function Header() {
  return (
    <Container className="mt-6 z-20 relative">
      <Heading as="h1">SailFuture is a nationally acclaimed leader in education, foster care, and juvenile justice services.</Heading>
      <Lead className="mt-6 max-w-3xl z-20 relative text-gray-500">
      Based in St. Petersburg, FL, we serve 200+ young people per year across 6 different integrated programs.
      </Lead>
      <section className="mt-8 grid grid-cols-1 lg:grid-cols-2 lg:gap-12 z-20 relative">
        <div className="max-w-lg z-20">
          <h2 className="text-2xl font-medium tracking-tight">Who We Are</h2>
          <p className="mt-6  text-gray-600">
          SailFuture is an innovative foster care agency, and private school based in St. Petersburg, Florida. We serve children and families across seven different programs throughout the Saint Petersburg community.
          </p>
          <p className="mt-8  text-gray-600">
          Our comprehensive continuum of care is designed to serve Florida’s highest-risk teens in foster care, meeting many, if not all, of their needs under one umbrella. As an organization, we offer a broad range of programs and services designed to holistically treat childhood trauma and equip teens with the skills and resources necessary to navigate life.
          </p>
        </div>
        <div className="pt-10 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="https://res.cloudinary.com/dbhwzxw0k/image/upload/v1716736968/3d4afd4f-0341-41c1-92d6-36e13fd3f6ea.png"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="https://res.cloudinary.com/dbhwzxw0k/image/upload/v1727052065/Primary-Hero-noblue.png"
                className="block size-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="https://res.cloudinary.com/dbhwzxw0k/image/upload/v1716736102/400377856_727784412706602_2753782583815365130_n.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="https://res.cloudinary.com/dbhwzxw0k/image/upload/v1683591052/Saturday_April_29_2023_5-51-26_PM_13.jpg"
                className="block size-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="max-lg:mt-16 lg:col-span-1">
          <Subheading>Our Outcomes</Subheading>
          <hr className="mt-6 border-t border-gray-200" />
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Recedivsim</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={80} end={20} />%
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">High School Graduation</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={25} end={98} />%
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
              <dt className="text-sm/6 text-gray-600">Students and Families Served Annually</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={80} end={200} />+
              </dd>
            </div>
            <div className="flex flex-col gap-y-2">
              <dt className="text-sm/6 text-gray-600">Average Grade Level Increase in Reading & Math Scores Annually</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={0} end={2.2} decimal={1} />+
              </dd>
            </div>
          </dl>
        </div>
      </section>
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

function Person({ name, description, img }) {
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

function Team() {
  return (
    <Container className="mb-16">
      <Subheading>We're Hiring</Subheading>
      <Heading as="h3" className="mt-2">
      Our work is powered by 30+ passionate educators, captains, mental health counselors, vocational teachers, foster parents, and more.
      </Heading>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
      <div className="max-w-lg">
          <p className="text-gray-600">
          At SailFuture, our approach to social work is complex, requiring dynamic, passionate leaders who bring their full range of skills to the table. We're as committed to supporting each other as we are to transforming the lives of young people in poverty.
          </p>
          <br></br>
          <p className="text-gray-600">
          Through our innovative programs—spanning education, mental health, job training, foster care, and international sailing expeditions—we work to change life outcomes. Whether you're a teacher, captain, or counselor, there's a place for you to make a lasting impact at SailFuture.
          </p>
          <div className="mt-6">
          <Button className="mt-0" href="https://careers.sailfuture.org/" variant="outline" target="_blank">Apply Now</Button>
          </div>
        </div>
        <div className="max-lg:order-first max-lg:max-w-lg">
          <div className="aspect-[3/2] overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
            <img
              alt=""
              src="https://res.cloudinary.com/dbhwzxw0k/image/upload/v1671417845/8G3A7244.jpg"
              className="block size-full object-cover"
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

function History() {
  return (
    <Container className="bg-gray-50 py-16">
      <Subheading>Our History</Subheading>
      <Heading as="h3" className="mt-2">
      Over a decade of serving families and transforming the lives of at-risk youth through sailing, education, and comprehensive support services.
      </Heading>
      <Lead className="mt-6 max-w-3xl text-gray-500">
      Founded in 2013, SailFuture began as a sailing-based mentoring program aimed at increasing graduation rates for high-risk students at Booker High School in Sarasota.
      </Lead>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="max-w-lg">
          <p className=" text-gray-600">
          By 2014, the organization expanded to include week-long expeditions for youth on felony juvenile probation. In 2015, SailFuture received the SV Defy the Odds, which sailed 20,000 miles from Turkey to Florida with some of the highest-risk juvenile offenders in the U.S., marking a significant turning point in the organization’s mission. The opening of the Waterfront House in St. Petersburg in 2016 provided 24/7 residential care for teens in foster care, further cementing SailFuture’s role in supporting vulnerable youth.
          </p>
          <p className="mt-8 text-gray-600">
          In the following years, SailFuture continued to grow, establishing a private technical school in 2017 and launching international sailing expeditions through the Caribbean by 2018. A specialized case management division and Life Skills Center were introduced in 2019 to serve high-risk teens, along with in-house mental health services. SailFuture expanded its residential care facilities with the opening of the Lakewood Estates group home in 2020. In 2021, the organization planned the launch of SailFuture Academy, a private vocational high school serving disengaged youth in St. Petersburg, Florida, providing new opportunities for academic and personal growth.
          </p>
        </div>
        <div className="max-lg:order-first max-lg:max-w-lg">
          <div className="aspect-[3/2] overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
            <img
              alt=""
              src="https://res.cloudinary.com/dbhwzxw0k/image/upload/v1671417847/8G3A7423.jpg"
              className="block size-full object-cover"
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

function Investors() {
  return (
    <Container className="">
      <Subheading>Our Funders and Partners</Subheading>
      <Heading as="h3" className="mt-2">
        Funded by national organizations, foundations, and leaders in disruptive education and social services.
      </Heading>
      <Lead className="mt-6 max-w-3xl text-gray-500">
        We are proud to be partnered with dozens of government, child welfare, and philanthropic partners who help us develop our mission.
      </Lead>
      <Subheading as="h3" className="mt-12">
        Our Corporate and Philanthropic Partners
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

export default function AboutUs() {
  return (
    <main className="overflow-hidden">
      <Container>
        <Navbar />
      </Container>
      <HeaderII />
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
      <Header />
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 my-16" />
      <Investors />
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mt-16" />
      <History />
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-16" />
      <Testimonials />
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 my-16" />
      <Team />
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mt-16" />
      <Footer />
    </main>
  )
}
