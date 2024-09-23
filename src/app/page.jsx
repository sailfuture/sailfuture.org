
import { image } from '@/sanity/image'
import {
  getCategories,
  getFeaturedPosts,
  getPosts,
  getPostsCount,
} from '@/sanity/queries'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  CheckIcon,
  ChevronLeftIcon,
  ChevronUpDownIcon,
  RssIcon,
} from '@heroicons/react/16/solid'
import { clsx } from 'clsx'
import dayjs from 'dayjs'
import { notFound } from 'next/navigation'
import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { NavbarDark } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading, Lead } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import { HeroAcademyImage } from '@/components/hero-academy'


export const metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
}




function Hero() {
  return (
    <div className="relative mx-4 overflow-hidden pt-64 pb-12"> {/* Apply the same top and bottom padding */}
      {/* Gradient background */}
      <Gradient className="absolute inset-0 bottom-0 w-full h-full rounded-4xl ring-1 ring-inset ring-black/5" />

      {/* Container to hold the content, positioned at the bottom */}
      <Container className="relative z-10 h-full flex flex-col justify-end">
        <div className="text-gray-50 space-y-6">
          <h1 className="font-display text-balance text-6xl/[0.9] text-white font-medium tracking-tight text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            We transform the lives of youth at risk.
          </h1>
          <p className="max-w-xl text-xl/7 font-medium text-gray-300 sm:text-2xl/8">
            SailFuture's innovative programs empower hard-to-reach teens to transform their life trajectory.
          </p>
          <div className="flex flex-col gap-x-6 gap-y-4 sm:flex-row mt-6">
            <Button variant="light" href="/our-mission">Our Mission</Button>
            <Button variant="secondary" href="/donate">
              Donate
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}




function BigCompany({ name, description, img }) {
  return (
    <li className="flex items-center gap-4">
      <img alt="" src={img} className="size-12 rounded-full" />
      <div className="text">
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </li>
  )
}

function Description() {
  return (
    <Container className="py-16">
      <Subheading>Our Mission</Subheading>
      <Heading as="h3" className="mt-2">
      SailFuture is a nationally acclaimed leader in education, foster care, and juvenile justice services.
      </Heading>
      <Lead className="mt-6 max-w-3xl text-gray-500">
      Based in St. Petersburg, FL, we serve 200+ young people per year across 6 different integrated programs.
      </Lead>
      <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="max-w-2xl">
          <p className="text text-gray-600">
          SailFuture is an innovative foster care agency and private school based in St. Petersburg, Florida, dedicated to serving high-risk teens in foster care. Through a comprehensive continuum of care, SailFuture addresses the needs of children and families across seven different programs within the community. Our holistic approach integrates residential care, mental health services, practical job training, and education—all rooted in transformative experiences like 60-day international sailing journeys. This unique combination aims to disrupt cycles of poverty, abuse, and incarceration by equipping teens with the skills and resources necessary to navigate life successfully.
          </p>
          <br></br>
          <p className="text text-gray-600">
          Programs like the SailFuture Academy—a tuition-free entrepreneurship high school—teach students to think critically and solve real-world problems. Additionally, student-run social enterprises provide practical, hands-on business experience. The organization's philosophy emphasizes figuring things out, working as a family rather than just colleagues, and doing whatever it takes to support our kids and families. Through these efforts, SailFuture strives to create lasting, positive change in the lives of the youth they serve.
          </p>
          <div className="mt-3">
          <Button href="/about-us" className="mt-0" variant="outline">Read More</Button>
          </div>
        </div>
        <div className="max-2xl:order-first max-lg:max-w-2xl">
          <div className="aspect-[3/2] overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
            <img
              alt=""
              src="https://res.cloudinary.com/dbhwzxw0k/image/upload/v1698765649/092923_WhateverItTakes_5.jpg"
              className="block size-full object-cover"
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

function BentoSection() {
  return (
    <Container className="py-16 bg-gray-50">
      <Subheading>Our Programs</Subheading>
      <Heading as="h3" className="mt-2">
      We serve over 150+ young people each year across six integration programs.
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        {/* First Card */}
        <BentoCard
          eyebrow="Sailing Expeditions"
          title="International Sailing Expeditions"
          description="Our comprehensive programming includes 60-day sailing journeys throughout the world, where students navigate international waters, explore different cultures, and develop leadership skills. Participants engage in adventure-based mental health counseling, practical job training, and receive instruction from a hands-on technical high school curriculum—all while aboard our state-of-the-art sailing vessels."
          graphic={
            <div className="absolute inset-0 w-full h-full">
              <img
                src="https://res.cloudinary.com/dbhwzxw0k/image/upload/v1703040735/30m-Yacht-JUPITER_-9883-21.jpg"
                alt="International Sailing Expeditions"
                className="w-full h-full object-cover"
              />
            </div>
          }
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
          buttontext="Learn More"
        />
        {/* Second Card */}
        <BentoCard
          eyebrow="Child Welfare"
          title="Child Welfare Programs & Residential Homes"
          description="SailFuture operates two residential homes in St. Petersburg, Florida, licensed by the Department of Children and Families. Residential is the core of all SailFuture programming; students participate in multi-month-long sailing expeditions, adventure counseling, private high school education, vocational and job training, and independent living programming."
          graphic={
            <div className="absolute inset-0 w-full h-full">
              <img
                src="https://res.cloudinary.com/dbhwzxw0k/image/upload/v1570762797/23919_3544_large.jpg"
                alt="Child Welfare Programs"
                className="w-full h-full object-cover"
              />
            </div>
          }
          className="lg:col-span-3 lg:rounded-tr-4xl"
          buttontext="Learn More"
        />

        <BentoCard
          eyebrow="Mental Health"
          title="Adventure Based Counseling"
          description="Family, group, and individualized adventure-based therapy and behavioral treatment plans for teens. Unlike most mental health agencies, our therapeutic services are experience and adventure-based. Instead of in an office, many of our sessions take place sailing across Tampa Bay, walking the beach, kayaking through mangroves, or at a local park. This unique approach fosters personal growth, resilience, and improved mental health outcomes."
          graphic={
            <div className="absolute inset-0 bg-[url(https://res.cloudinary.com/dbhwzxw0k/image/upload/v1613435524/SailFuture%20Academy/130197941_3495181607260964_135028449568973629_o.jpg)] bg-cover bg-center bg-no-repeat" />
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
          buttontext="Learn More"
        />
        <BentoCard
          eyebrow="Job Training"
          title="Job Training & Social Enterprises"
          description="Our student-run enterprises are the perfect way to teach students about business in a practical, hands-on, and engaging manner. Students work behind the scenes on all aspects of business fundamentals including finances, project management, human resources, marketing, business development, and more. Through these real-world experiences, they develop critical thinking, problem-solving, and leadership skills that prepare them for future careers in various industries."
          graphic={
            <div className="absolute inset-0 bg-[url(https://res.cloudinary.com/dbhwzxw0k/image/upload/v1613419151/25586907_1499416853504126_2510017860479400859_o.jpg)] bg-cover bg-center bg-no-repeat" />
          }
          className="lg:col-span-2"
          buttontext="Learn More"
        />
        <BentoCard
          eyebrow="Education"
          title="Private High School & Educational Programs"
          description="SailFuture Academy is a tuition-free career preparatory high school that leverages project-based learning and paid apprenticeships to prepare students for the real world. Our curriculum integrates academic subjects with hands-on experiences, allowing students to apply their knowledge in practical settings. We focus on personalized education plans, mentoring, and providing pathways to higher education or immediate employment after graduation."
          graphic={
            <div className="absolute inset-0 bg-[url(https://res.cloudinary.com/dbhwzxw0k/image/upload/v1645208713/8G3A6300-1.jpg)] bg-cover bg-center bg-no-repeat" />
          }
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
          buttontext="Learn More"
        />
      </div>
    </Container>
  )
}

function HeroAcademy() {
  return (
    <div className="relative mx-4 overflow-hidden pt-64 pb-12">
      {/* Background image (or gradient) */}
      <HeroAcademyImage className="absolute inset-0 w-full h-full object-cover rounded-4xl ring-1 ring-inset ring-black/5 z-0" />

      {/* Text content aligned using flexbox */}
      <Container className="relative z-10 h-full flex flex-col justify-end w-full">
        <div>
          <Subheading dark>EDUCATIONAL SERVICES</Subheading>
          <Heading as="h1" dark className="mt-2">
            The SailFuture Academy
          </Heading>
          <Lead as="h3" dark className="mt-2S text-gray-50">
            SailFuture Academy is a pioneer in education, offering real-world learning through project-based and work-based experiences.
          </Lead>
          <div className="flex flex-col gap-x-6 gap-y-4 sm:flex-row mt-6">
            <Button variant="light" href="/academy">Learn More</Button>
            <Button variant="secondary" href="/applying">
              Enroll Now
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

function Team() {
  return (
    <Container className="py-16">
      <Subheading>WE'RE HIRING</Subheading>
      <Heading as="h3" className="mt-2">
      A impactful career starts here — join our mission to make a difference.
      </Heading>
      <Lead className="mt-6 max-w-3xl text-gray-500">
      We're a small but mighty agency with a 'whatever it takes' mentality. Explore our current roles and opportunities to make an impact.
      </Lead>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="max-w-lg">
          <p className="text text-gray-600">
          At SailFuture, our approach to social work is complex, requiring dynamic, passionate leaders who bring their full range of skills to the table. We're as committed to supporting each other as we are to transforming the lives of young people in poverty.
          </p>
          <br></br>
          <p className="text text-gray-600">
          Through our innovative programs—spanning education, mental health, job training, foster care, and international sailing expeditions—we work to change life outcomes. Whether you're a teacher, captain, or counselor, there's a place for you to make a lasting impact at SailFuture.
          </p>
          <div className="mt-6">
          <Button className="mt-0" variant="outline" href="https://careers.sailfuture.org/" target="_blank">Apply Now</Button>
          </div>
        </div>
        <div className="max-lg:order-first max-lg:max-w-lg">
          <div className="aspect-[3/2] overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
            <img
              alt=""
              src="https://res.cloudinary.com/dbhwzxw0k/image/upload/v1558975443/51590786_2010651962380610_7315580008154529792_o.jpg"
              className="block size-full object-cover"
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

function Person({ name, description, img, quote }) {
  return (
    <li className="flex items-center gap-4b mt-4 space-x-4">
      <img alt="" src={img} className="size-12 rounded-full" />
      <div className="text">
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-500">{description}</p>
        <p className="text-gray-700">{quote}</p>
      </div>
    </li>
  )
}

function Investors() {
  return (
    <Container className="py-16">
      <Subheading>Our Funders and Partners</Subheading>
      <Heading as="h3" className="mt-2">
        Funded by national organizations, foundations, and leaders in disruptive education and social services.
      </Heading>
      <Lead className="mt-6 max-w-3xl text-gray-500">
        We are proud to be partnered with dozens of government, child welfare, and philanthropic partners who help us develop our mission.
      </Lead>
      <Subheading as="h3" className="mt-12">
        Our Philanthropic Partners
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
    </Container>
  )
}


const postsPerPage = 5

async function FeaturedPosts() {
  let featuredPosts = await getFeaturedPosts(3)

  if (featuredPosts.length === 0) {
    return
  }

  return (
    <div className="mt-16 bg-gradient-to-t from-gray-100 pb-14">
      <Container>
        <h2 className="text-2xl font-medium tracking-tight">Featured</h2>
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <div
              key={post.slug}
              className="relative flex flex-col rounded-3xl bg-white p-2 shadow-md shadow-black/5 ring-1 ring-black/5"
            >
              {post.mainImage && (
                <img
                  alt={post.mainImage.alt || ''}
                  src={image(post.mainImage).size(1170, 780).url()}
                  className="aspect-[3/2] w-full rounded-2xl object-cover"
                />
              )}
              <div className="flex flex-1 flex-col p-8">
                <div className="text text-gray-700">
                  {dayjs(post.publishedAt).format('dddd, MMMM D, YYYY')}
                </div>
                <div className="mt-2 text-base/7 font-medium">
                  <Link href={`/blog/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </div>
                <div className="mt-2 flex-1 text text-gray-500">
                  {post.excerpt}
                </div>
                {post.author && (
                  <div className="mt-6 flex items-center gap-3">
                    {post.author.image && (
                      <img
                        alt=""
                        src={image(post.author.image).size(64, 64).url()}
                        className="aspect-square size-6 rounded-full object-cover"
                      />
                    )}
                    <div className="text text-gray-700">
                      {post.author.name}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

async function Categories({ selected }) {
  let categories = await getCategories()

  if (categories.length === 0) {
    return
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-2">
      <Menu>
        <MenuButton className="flex items-center justify-between gap-2 font-medium">
          {categories.find(({ slug }) => slug === selected)?.title ||
            'All categories'}
          <ChevronUpDownIcon className="size-4 fill-slate-900" />
        </MenuButton>
        <MenuItems
          anchor="bottom start"
          className="min-w-40 rounded-lg bg-white p-1 shadow-lg ring-1 ring-gray-200 [--anchor-gap:6px] [--anchor-offset:-4px] [--anchor-padding:10px]"
        >
          <MenuItem>
            <Link
              href="/blog"
              data-selected={selected === undefined ? true : undefined}
              className="group grid grid-cols-[1rem,1fr] items-center gap-2 rounded-md px-2 py-1 data-[focus]:bg-gray-950/5"
            >
              <CheckIcon className="hidden size-4 group-data-[selected]:block" />
              <p className="col-start-2 text">All categories</p>
            </Link>
          </MenuItem>
          {categories.map((category) => (
            <MenuItem key={category.slug}>
              <Link
                href={`/blog?category=${category.slug}`}
                data-selected={category.slug === selected ? true : undefined}
                className="group grid grid-cols-[16px,1fr] items-center gap-2 rounded-md px-2 py-1 data-[focus]:bg-gray-950/5"
              >
                <CheckIcon className="hidden size-4 group-data-[selected]:block" />
                <p className="col-start-2 text">{category.title}</p>
              </Link>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
      <Button variant="outline" href="/blog/feed.xml" className="gap-1">
        <RssIcon className="size-4" />
        RSS Feed
      </Button>
    </div>
  )
}

async function Posts({ page, category }) {
  let posts = await getPosts(
    (page - 1) * postsPerPage,
    page * postsPerPage,
    category,
  )

  if (posts.length === 0 && (page > 1 || category)) {
    notFound()
  }

  if (posts.length === 0) {
    return <p className="mt-6 text-gray-500">No posts found.</p>
  }

  return (
    <div className="mt-0">
      {posts.map((post) => (
        <div
          key={post.slug}
          className="relative grid grid-cols-1 border-b border-b-gray-100 py-10 first:border-t first:border-t-gray-200 max-sm:gap-3 sm:grid-cols-3"
        >
          <div>
            <div className="text max-sm:text-gray-700 sm:font-medium">
              {dayjs(post.publishedAt).format('dddd, MMMM D, YYYY')}
            </div>
            {post.author && (
              <div className="mt-2.5 flex items-center gap-3">
                {post.author.image && (
                  <img
                    alt=""
                    src={image(post.author.image).width(64).height(64).url()}
                    className="aspect-square size-6 rounded-full object-cover"
                  />
                )}
                <div className="text text-gray-700">
                  {post.author.name}
                </div>
              </div>
            )}
          </div>
          <div className="sm:col-span-2 sm:max-w-2xl">
            <h2 className="text font-medium">{post.title}</h2>
            <p className="mt-3 text text-gray-500">{post.excerpt}</p>
            <div className="mt-4">
              <Link
                href={`/blog/${post.slug}`}
                className="flex items-center gap-1 text font-medium"
              >
                <span className="absolute inset-0" />
                Read more
                <ChevronRightIcon className="size-4 fill-gray-400" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

async function Pagination({ page, category }) {
  function url(page) {
    let params = new URLSearchParams()

    if (category) params.set('category', category)
    if (page > 1) params.set('page', page.toString())

    return params.size !== 0 ? `/blog?${params.toString()}` : '/blog'
  }

  let totalPosts = await getPostsCount(category)
  let hasPreviousPage = page - 1
  let previousPageUrl = hasPreviousPage ? url(page - 1) : undefined
  let hasNextPage = page * postsPerPage < totalPosts
  let nextPageUrl = hasNextPage ? url(page + 1) : undefined
  let pageCount = Math.ceil(totalPosts / postsPerPage)

  if (pageCount < 2) {
    return
  }

  return (
    <div className="mt-6 flex items-center justify-between gap-2">
      <Button
        variant="outline"
        href={previousPageUrl}
        disabled={!previousPageUrl}
      >
        <ChevronLeftIcon className="size-4" />
        Previous
      </Button>
      <div className="flex gap-2 max-sm:hidden">
        {Array.from({ length: pageCount }, (_, i) => (
          <Link
            key={i + 1}
            href={url(i + 1)}
            data-active={i + 1 === page ? true : undefined}
            className={clsx(
              'size-7 rounded-lg text-center text font-medium',
              'data-[hover]:bg-gray-100',
              'data-[active]:shadow data-[active]:ring-1 data-[active]:ring-black/10',
              'data-[active]:data-[hover]:bg-gray-50',
            )}
          >
            {i + 1}
          </Link>
        ))}
      </div>
      <Button variant="outline" href={nextPageUrl} disabled={!nextPageUrl}>
        Next
        <ChevronRightIcon className="size-4" />
      </Button>
    </div>
  )
}

export default function Home({ searchParams }) {

  let page =
  'page' in searchParams
    ? typeof searchParams.page === 'string' && parseInt(searchParams.page) > 1
      ? parseInt(searchParams.page)
      : notFound()
    : 1

let category =
  typeof searchParams.category === 'string'
    ? searchParams.category
    : undefined

  return (
    <div className="overflow-hidden">
            <Container>
        <Navbar 
                />
      </Container>
      <Hero />
      <main>
      <Description />
      <BentoSection />
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
      <Investors />
      </main>
      <HeroAcademy />
      <Team />
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
      <Container>
      <Subheading className="mt-16">Updates</Subheading>
        <Heading as="h1" className="mt-2">
        Recent News
        </Heading>
        </Container>
      {page === 1 && !category && <FeaturedPosts />}
      <Footer />
    </div>
  )
}