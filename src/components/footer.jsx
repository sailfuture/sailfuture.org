import { PlusGrid, PlusGridItem, PlusGridRow } from '@/components/plus-grid'
import { Button } from './button'
import { Container } from './container'
import { Link } from './link'
import { Logo } from './logo'
import { Subheading } from './text'

function CallToAction() {
  return (
    <div className="relative pb-16 pt-20 text-center sm:py-24">
      <hgroup>
        <Subheading>Get Involved</Subheading>
        <p className="mt-6 text-3xl font-medium tracking-tight text-gray-950 sm:text-5xl">
          Inspired to help change lives?
          <br />
        </p>
      </hgroup>
      <p className="mx-auto mt-6 max-w-xs text-sm/6 text-gray-500">
      We’d love to hear from you! Send us a message using the form below.
      </p>
      <div className="mt-6 space-x-4">
        <Button className="sm:w-auto" variant="primary" href="/contact">
          Contact Us
        </Button>
        <Button className="sm:w-auto" variant="secondary" href="/donate">
          Donate
        </Button>
        <Button className="sm:w-auto" variant="primary" href="/partnerships">
          Become A Corporate Partner
        </Button>
      </div>
    </div>
  )
}

function SitemapHeading({ children }) {
  return <h3 className="text-sm/6 font-medium text-gray-950/50">{children}</h3>
}

function SitemapLinks({ children }) {
  return <ul className="mt-6 space-y-4 text-sm/6">{children}</ul>
}

function SitemapLink(props) {
  return (
    <li>
      <Link
        {...props}
        className="font-medium text-gray-950 data-[hover]:text-gray-950/75"
      />
    </li>
  )
}

function Sitemap() {
  return (
    <>
      <div>
        <SitemapHeading>Home</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="/our-mission">Our Programs</SitemapLink>
          <SitemapLink href="/#academy">Academy</SitemapLink>
          <SitemapLink href="/blog">News</SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>Get Involved</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="/donate">Donate</SitemapLink>
          <SitemapLink href="/partnerships">Corporate Partnerships</SitemapLink>
          <SitemapLink href="/contact">Contact Us</SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>Academy</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="/academy">About</SitemapLink>
          <SitemapLink href="#">Enroll Now</SitemapLink>
        </SitemapLinks>
      </div>
    </>
  )
}

function SocialIconInsta(props) {
  return (
    <svg viewBox="0 0 448 512" fill="currentColor" {...props}>
      <path d="M224,202.66A53.34,53.34,0,1,0,277.34,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,1,30.34,30.33c6.63,17.2,7.64,36.43,7.64,112.05s-1,94.85-7.64,112.05a54,54,0,0,1-30.34,30.34c-17.2,6.63-36.43,7.64-112.05,7.64s-94.85-1-112.05-7.64a54,54,0,0,1-30.34-30.34c-6.63-17.2-7.64-36.43-7.64-112.05s1-94.85,7.64-112.05a54,54,0,0,1,30.34-30.33c17.2-6.63,36.43-7.64,112.05-7.64S331.51,155,348.71,161.66ZM224,338a82,82,0,1,1,82-82A82.09,82.09,0,0,1,224,338Zm85.2-148.17a19.2,19.2,0,1,1-19.2-19.2A19.2,19.2,0,0,1,309.2,189.83ZM398.8,88H49.2A49.21,49.21,0,0,0,0,137.2V374.8A49.21,49.21,0,0,0,49.2,424H398.8A49.21,49.21,0,0,0,448,374.8V137.2A49.21,49.21,0,0,0,398.8,88ZM224,338a82,82,0,1,1,82-82A82.09,82.09,0,0,1,224,338Zm85.2-148.17a19.2,19.2,0,1,1-19.2-19.2A19.2,19.2,0,0,1,309.2,189.83Z"/>
    </svg>
  )
}

function SocialIconYouTube(props) {
  return (
    <svg viewBox="0 0 576 512" fill="currentColor" {...props}>
      <path d="M549.655,124.083C534.469,100.307,514.255,91.791,482.236,88.478,443.236,84.789,288,84.789,288,84.789s-155.236,0-194.236,3.689c-32.019,3.313-52.234,11.829-67.42,35.605C7.266,149.263,0,190.623,0,256s7.266,106.737,26.345,131.917c15.186,23.776,35.401,32.292,67.42,35.605,39,3.689,194.236,3.689,194.236,3.689s155.236,0,194.236-3.689c32.019-3.313,52.234-11.829,67.42-35.605C568.734,362.737,576,321.377,576,256S568.734,149.263,549.655,124.083ZM232,347.33V164.67L396.04,256,232,347.33Z"/>
    </svg>
  )
}

function SocialIconFacebook(props) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8.05C16 3.603 12.418 0 8 0S0 3.604 0 8.05c0 4.016 2.926 7.346 6.75 7.95v-5.624H4.718V8.05H6.75V6.276c0-2.017 1.194-3.131 3.022-3.131.875 0 1.79.157 1.79.157v1.98h-1.008c-.994 0-1.304.62-1.304 1.257v1.51h2.219l-.355 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.95z"
      />
    </svg>
  )
}

function SocialIconLinkedIn(props) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M14.82 0H1.18A1.169 1.169 0 000 1.154v13.694A1.168 1.168 0 001.18 16h13.64A1.17 1.17 0 0016 14.845V1.15A1.171 1.171 0 0014.82 0zM4.744 13.64H2.369V5.996h2.375v7.644zm-1.18-8.684a1.377 1.377 0 11.52-.106 1.377 1.377 0 01-.527.103l.007.003zm10.075 8.683h-2.375V9.921c0-.885-.015-2.025-1.234-2.025-1.218 0-1.425.966-1.425 1.968v3.775H6.233V5.997H8.51v1.05h.032c.317-.601 1.09-1.235 2.246-1.235 2.405-.005 2.851 1.578 2.851 3.63v4.197z" />
    </svg>
  )
}

function SocialLinks() {
  return (
    <>
      <Link
        href="https://facebook.com/sailfuture"
        target="_blank"
        aria-label="Visit us on Facebook"
        className="text-gray-950 data-[hover]:text-gray-950/75"
      >
        <SocialIconFacebook className="size-4" />
      </Link>
      <Link
        href="https://instagram.com/sailfuture"
        target="_blank"
        aria-label="Visit us on Instagram"
        className="text-gray-950 data-[hover]:text-gray-950/75"
      >
        <SocialIconInsta className="size-4" width={32} height={32}/>
      </Link>
      <Link
        href="https://linkedin.com"
        target="_blank"
        aria-label="Visit us on LinkedIn"
        className="text-gray-950 data-[hover]:text-gray-950/75"
      >
        <SocialIconLinkedIn className="size-4" />
      </Link>

      <Link
        href="https://youtube.com/sailfuture"
        target="_blank"
        aria-label="Visit us on YouTube"
        className="text-gray-950 data-[hover]:text-gray-950/75"
      >
        <SocialIconYouTube className="size-4" width={32} height={32} />
      </Link>
    </>
  )
}

function Copyright() {
  return (
    <div className="text-sm/6 text-gray-950">
      &copy; {new Date().getFullYear()} SailFuture Inc.
    </div>
  )
}

export function Footer() {
  return (
    <footer class="bg-gray-50 border-top border-1 border-color-gray-500">
        <div className="absolute inset-2 rounded-4xl"/>
        <Container>
          <CallToAction />
          <PlusGrid className="pb-16">
            <PlusGridRow>
              <div className="grid grid-cols-2 gap-y-10 pb-6 lg:grid-cols-6 lg:gap-8">
                <div className="col-span-2 flex">
                  <PlusGridItem className="pt-6 lg:pb-6">
                    <Logo className="h-9" />
                  </PlusGridItem>
                </div>
                <div className="col-span-2 grid grid-cols-2 gap-x-8 gap-y-12 lg:col-span-4 lg:grid-cols-subgrid lg:pt-6">
                  <Sitemap />
                </div>
              </div>
            </PlusGridRow>
            <PlusGridRow className="flex justify-between">
              <div>
                <PlusGridItem className="py-3">
                  <Copyright />
                </PlusGridItem>
              </div>
              <div className="flex">
                <PlusGridItem className="flex items-center gap-8 py-3">
                  <SocialLinks />
                </PlusGridItem>
              </div>
            </PlusGridRow>
          </PlusGrid>
        </Container>
    </footer>
  )
}
