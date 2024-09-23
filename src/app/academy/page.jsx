import { AnimatedNumber } from '@/components/animated-number'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Link } from '@/components/link'
import { NavbarDark } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import { Gradient } from '@/components/gradient'
import { HeroImage } from '@/components/heroimage'
import { HeroAcademyImage } from '@/components/hero-academy'
import { Example } from '@/components/test'
import { ExampleII } from '@/components/test-ii'
import { ExampleIII } from '@/components/test-iii'
import { StarIcon } from '@heroicons/react/20/solid'
import { CheckIcon } from '@heroicons/react/20/solid'
import { LogoCloud } from '@/components/logo-cloud'
import { CTA } from '@/components/cta'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const metadata = {
  title: 'SailFuture Academy',
  description:
    'SailFuture Academy is a tuition-free career preparatory high school that leverages project-based learning and paid apprenticeships to prepare students for the real world.',
}

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

function HeaderII() {
  return (
    <Container className="z-20 relative mt-6">
      <Subheading>The SailFuture Academy</Subheading>
      <Lead className="mt-6 max-w-3xl">
      </Lead>
    </Container>
  )
}
function Hero() {
  return (
    <div className="relative mx-4 overflow-hidden py-32">
      <HeroImage className="absolute overflow-hidden bottom-0 rounded-4xl ring-1 ring-inset ring-black/5"/>
      <Container className="relative z-10 text-gray-50 overflow-hidden">
        <div className="text-gray-50 space-y-6">
          <h1 className="font-display text-balance text-6xl/[0.9] text-white font-medium tracking-tight text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
          Where the Classroom Meets the Real World
          </h1>
          <p className="max-w-xl text-xl/7 font-medium text-gray-300 sm:text-2xl/8">
          SailFuture Academy is a tuition-free career preparatory high school that leverages project-based learning and paid apprenticeships to prepare students for the real world.
          </p>
        </div>
      </Container>
    </div>
  )
}


function HeroAcademy() {
  return (
    <div className="relative mx-4 overflow-hidden pt-32 pb-6 align-bottom">
      <HeroAcademyImage className="absolute bottom-0 rounded-4xl ring-1 ring-inset ring-black/5 z-0 align-bottom"/>
      <Container className="relative z-10 align-bottom">
        <Subheading className="text-gray-100">Private High School</Subheading>
        <Heading as="h1" className="text-white">The SailFuture Academy</Heading>
      </Container>
    </div>
  )
}

function Header() {
  return (
    <Container className="mt-16 z-20 relative">
      <Heading as="h1">SailFuture Academy is a tuition-free career preparatory high school that leverages project-based learning and paid apprenticeships to prepare students for the real world.</Heading>
      <section className="mt-8 grid grid-cols-1 lg:grid-cols-2 lg:gap-12 z-20 relative">
        <div className="max-w-lg z-20">
          <h2 className="text-2xl font-medium tracking-tight">High School Designed for
          the Real-World</h2>
          <p className="mt-2 text-sm/6 text-gray-600">
          We place students in the driver’s seat to solve real world problems from the moment they step foot on campus in order to re-engage and re-inspire students who have become disconnected from their high school experience.
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
        <div className="lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/company/1.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="/company/2.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/company/3.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="/company/4.jpg"
                className="block size-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}


function Person({ name, description, img, quote }) {
  return (
    <li className="flex items-center gap-4b mt-4">
      <img alt="" src={img} className="size-12 rounded-full" />
      <div className="text-sm/6">
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-500">{description}</p>
        <p className="text-gray-700">{quote}</p>
      </div>
    </li>
  )
}

function Parent({ name, description, img}) {
  return (
    <div className="flex items-center gap-4b space-x-4 mt-4">
      <img alt="" src={img} className="size-12 rounded-full" />
      <div className="text-sm/6">
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  )
}

function ReviewSite({ name, description, img, quote, url }) {
  return (
    <a href={url} target="_blank">
    <li className="flex items-center gap-4b hover:text-blue-700 space-x-4 pb-16">
      <img alt="" src={img} className="size-12 rounded-full" />
      <div className="text-sm/6">
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-500">{description}</p>
        <p className="text-gray-500">{quote}</p>
                  <div class="flex items-center">
                    <div class="flex items-center">
                      <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                      </svg>
                      <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                      </svg>
                      <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                      </svg>
                      <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                      </svg>
                      <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
            </div>
    </li>
    </a>
  )
}

function Team() {
  return (
    <Container className="mt-6">
      <Heading as="h3" className="mt-2">
      SailFuture Academy is a tuition-free career preparatory high school that leverages project-based learning and paid apprenticeships to prepare students for the real world.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
      At the SailFuture Academy, students engage in a unique educational experience where learning is deeply intertwined with real-world application. 
      </Lead>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="max-w-2xl">
          <p className="text text-gray-600">
          Students partake in student-led businesses, earn money with paid internships and work-based experiences, and immerse themselves in project-based, thematic coursework designed to enhance problem-solving and critical thinking skills. The curriculum, devoid of homework and standardized tests, offers practical experiences across Business, Design Thinking, Social Emotional Learning, Math, English, Career Exploration, and Maritime, ensuring students are not confined to traditional classroom settings. 
          </p>
          <p className="mt-8 text text-gray-600">
          Upon graduation, students not only earn a certified Department of Education high school diploma but also certifications, working experience, and a comprehensive portfolio showcasing four years of work. In addition to the rigorous coursework, students participate in a series of signature educational experiences from writing their own business plan thesis, to traveling internationally on a 7-week sailing expedition. 
          </p>
        </div>
        <div className="max-2xl:order-first max-lg:max-w-2xl">
          <div className="aspect-[3/2] overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
            <img
              alt=""
              src="https://res.cloudinary.com/dbhwzxw0k/image/upload/v1727052063/Academy-Hero-iii-noblue.png"
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
    <>
    <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
    <Container className="my-16">
      <Subheading>OUR SCHOOL REVIEWS</Subheading>
      <Heading as="h3" className="mt-2">
      Rated As One of the Top Private High Schools in St. Petersburg
      </Heading>
      <Lead className="mt-6 max-w-3xl">
      Discover an exceptional education experience that goes beyond academics. Our dedicated faculty, innovative programs, and supportive community create an environment where students thrive and succeed.
      </Lead>
      <Subheading as="h3" className="mt-12">
        Parent Reviews
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-0 grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-4"
      >
        <li>
          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
          “This school has been a saving grace for my son! Since being at SailFuture Academy he has not only started to grow socially but in his education, he is actually buying in. He tells me how he loves the more hands on approach that he is receiving in the school and that he is actually learning things because he is getting more one-on-one attention.”
          </p>
          <Parent
          name="Ryan Collins"
          description="Student Parent"
          img="https://res.cloudinary.com/dbhwzxw0k/image/upload/v1719519477/Hunter_Thompson_middle_aged_white_father_male_profile_picture_891117f9-e0a1-43c2-861f-578a4917d72d_2.png"
        />
        </li>
        
        <li>
          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
          “My child has enjoyed this program since the day she stepped on campus. She is fully immersed in her maritime lab and enjoys learning Math and Science through construction. Her ambition is to become a business owner. She has classes in business, marketing, and communications that are helping her prepare for that goal. I'm so grateful that we found SailFuture for her.”
          </p>
          <Parent
          name="Callin Harper"
          description="Student Parent"
          img="https://res.cloudinary.com/dbhwzxw0k/image/upload/v1719519275/Hunter_Thompson_profile_picture_middle_aged_hispanic_mom_faci_6600bb89-46c7-4058-a757-e4b6d316b7f0_1.png"
        />
        </li>
        <li>
          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
          “This program has helped my son come out of his shell. He was quiet and withdrawn when he started. Now he seems happier and has gained his self esteem. Thank you Sailfuture.”
          </p>
          <Parent
          name="Arianna Despora"
          description="Student Parent"
          img="https://res.cloudinary.com/dbhwzxw0k/image/upload/v1719519271/Hunter_Thompson_profile_picture_middle_aged_black_mother_faci_45fd9d0a-e5ac-45db-ae1c-5329f3b9e6ed_3.png"
        />
        </li>
        <li>
          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
          “This administration and teachers really focus on building a strong partnership between parents and teachers. I am so grateful for the effort they are putting into my kid's development. Their patience and commitment towards my child's improvement are really commendable.”
          </p>
          <Parent
          name="Diedrea Doyley"
          description="Student Parent"
          img="https://res.cloudinary.com/dbhwzxw0k/image/upload/v1719519295/Hunter_Thompson_profile_picture_young_adult_black_mom_20-30_y_9d3646ce-ffaa-4879-ad95-6ecba1379115_2.png"
        />
        </li>
      </ul>
      <Subheading as="h3" className="mt-12">
        SCHOOL SITE REVIEWS
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-8 grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4"
      >
        <ReviewSite
          name="Niche Reviews"
          description="4.6 out of 5 stars"
          img="https://res.cloudinary.com/dbhwzxw0k/image/upload/v1719518208/images-niche.png"
          url="https://www.niche.com/k12/sailfuture-academy-saint-petersburg-fl/"
        />
        <ReviewSite
          name="Private School Review"
          description="5.0 out of 5 stars"
          img="https://res.cloudinary.com/dbhwzxw0k/image/upload/v1719518167/images_1.png"
          url="https://www.privateschoolreview.com/sailfuture-academy-profile"
        />
        <ReviewSite
          name="Facebook Reviews"
          description="5 out of 5 stars"
          img="https://res.cloudinary.com/dbhwzxw0k/image/upload/v1719518364/free-facebook-2038470-1718513.webp"
          url="https://www.facebook.com/SailFuture"
        />
        <ReviewSite
          name="Google Reviews"
          description="4.4 out of 5 star"
          img="https://res.cloudinary.com/dbhwzxw0k/image/upload/v1719518287/kisspng-google-logo-g-suite-google-5ab6f1cee66464.5739288415219388949437.jpg"
          url="https://www.google.com/maps/place/SailFuture+Academy/@27.7962368,-82.6653314,17z/data=!3m1!4b1!4m6!3m5!1s0x88c2e3650064f731:0x3197a708ec57f6b4!8m2!3d27.7962368!4d-82.6627511!16s%2Fg%2F11lsyyvgqd?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"
        />
      </ul>
    </Container>
  </>
  )
}

export default function Academy() {
  return (
    <main className="overflow-hidden">
      <Container>
        <Navbar 
                  banner={
                    <Link
                      href="/academy"
                      className="flex items-center gap-1 rounded-full bg-blue-700 px-3 py-0.5 text-sm/6 font-medium text-white data-[hover]:bg-blue-800"
                    >
                      Enrolling Now for 24-25 School Year
                      <ChevronRightIcon className="size-4" />
                    </Link>
                  }
        />
      </Container>
      <HeaderII />
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
      <Team />
      <Container>
        <LogoCloud />
      </Container>
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
      {/* <Header /> */}
      <Example />
      <ExampleII />
      <ExampleIII />
      <Investors />
      <CTA />
      <Footer />
    </main>
  )
}
