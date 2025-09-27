'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  ServerIcon,
  CloudIcon,
  CheckIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  SparklesIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline'
import { siReact, siTypescript, siNextdotjs, siNodedotjs, siPython, siVuedotjs, siMongodb, siPostgresql, siDocker, siKubernetes, siRedis, siGraphql, siTailwindcss, siNestjs, siGo, siRubyonrails, siWebrtc, siStripe, siDatadog, siSupabase, siOpenai, siLangchain } from 'simple-icons'
// Custom social media icons
const GithubIcon = (props: any) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
)

const LinkedinIcon = (props: any) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
      clipRule="evenodd"
    />
  </svg>
)

const TwitterIcon = (props: any) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
  </svg>
)

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const skills = [
  {
    name: 'Frontend Development',
    description: 'React, Next.js, TypeScript, Tailwind CSS, Vue.js',
    icon: CodeBracketIcon,
  },
  {
    name: 'AI & Machine Learning',
    description: 'LLMs, RAG, Vector Databases, OpenAI, LangChain, Hugging Face',
    icon: SparklesIcon,
  },
  {
    name: 'Mobile Development',
    description: 'React Native, Flutter, iOS, Android',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Backend Development',
    description: 'Node.js, Python, Express, FastAPI, PostgreSQL',
    icon: ServerIcon,
  },
  {
    name: 'Cloud & DevOps',
    description: 'AWS, Docker, Kubernetes, CI/CD, Microservices',
    icon: CloudIcon,
  },
  {
    name: 'Data & Analytics',
    description: 'PostgreSQL, MongoDB, Redis, Elasticsearch, Data Visualization',
    icon: ChartBarIcon,
  },
]

const experiences = [
  {
    title: 'Senior Software Engineer (Frontend, Volunteer)',
    company: 'Tiiqu (United Kingdom)',
    period: 'Mar 2024 - Present',
    description: 'Developed and improved product Map interface and user experience using React. Rearchitected the React framework to meet modern industry standards.',
    achievements: [
      'Improved product usability by implementing a search system that integrates with the product search map',
      'Reduced development time by refactoring the legacy codebase, increasing developer experience by 40%',
      'Improved product security by implementing user authentication, authorization and management',
    ],
  },
  {
    title: 'Senior Software Engineer (FullStack, Contract)',
    company: 'Tempo.io (Canada, Remote)',
    period: 'Jan 2023 - Dec 2023',
    description: 'Boosted API scalability by designing and implementing a client-facing API using the modern Nestjs framework. Constructed load testing tools using K6.',
    achievements: [
      'Decreased platform vulnerabilities by 10% through incorporation of ISO 27001 standards',
      'Elevated system performance and increased overall platform stability by 25%',
      'Enhanced team monitoring capabilities by integrating Datadog and Grafana across infrastructures',
    ],
  },
  {
    title: 'Senior Software Engineer (FullStack, Contract)',
    company: 'Smartbear (London, Remote)',
    period: 'June 2022 - Dec 2022',
    description: 'Enhanced monitoring and tracking of test success and failure rates by implementing robust test reporting and analytics tools using React and Remix js.',
    achievements: [
      'Scaled the test tool to support over 2 million data processing daily',
      'Facilitated seamless onboarding by developing comprehensive documentation including C4 model and OpenAPI',
      'Improved AWS infrastructure security through adjustments in AWS CDK and VPC configurations',
    ],
  },
  {
    title: 'Senior Software Engineer (Frontend, Contract)',
    company: 'IZEA (US, Remote)',
    period: 'Sep 2021 - June 2022',
    description: 'Improved webpage user experience by redesigning the application with Ruby on Rail hotwired/turbo, reducing javascript dependencies.',
    achievements: [
      'Enhanced image quality by 30% on the Shakes platform by implementing innovative image enhancement algorithm',
      'Streamlined vendors and clients payment transactions by 50% by integrating Stripe API',
      'Eliminated duplicate code by implementing standardized UI design system from Figma',
    ],
  },
  {
    title: 'Senior Software Engineer (Frontend)',
    company: 'Patricia Technology (Nigeria)',
    period: 'May 2021 - Sep 2022',
    description: 'Introduced comprehensive standard design system with Figma and Tailwind, developing reusable components and design guidelines.',
    achievements: [
      'Boosted API consumption and data flow between frontend and backend by 70% through cache system implementation',
      'Implemented real-time cryptocurrency conversion, providing accurate crypto/fiat exchange',
      'Elevated team morale by influencing the overall work environment',
    ],
  },
  {
    title: 'Senior Software Engineer (FullStack)',
    company: 'Teckplus Digital Solution (Nigeria)',
    period: 'Feb 2020 - May 2021',
    description: 'Spearheaded a proficient team of engineers to conceptualize, design, and develop a cutting-edge learning management system.',
    achievements: [
      'Engineered real-time communication features using WebRTC and Socket technologies',
      'Mentored and onboarded engineers, handling core features that expedited product delivery time',
      'Architected and managed microservices across diverse technologies like AWS SQS and SNS',
    ],
  },
]

const projects = [
  {
    name: 'Qutii.org - Product Map Interface',
    description: 'Developed and improved product Map interface using React with TypeScript, implementing modern industry standards and search functionality',
    tech: ['React', 'TypeScript', 'Next.js', 'AWS', 'Deck.gl'],
    image: '/projects/tiiqu.png',
  },
  {
    name: 'Tempo.io Roadmapping Platform',
    description: 'Boosted API scalability by designing client-facing API using NestJS framework with load testing tools and monitoring integration',
    tech: ['NestJS', 'TypeScript', 'AWS', 'Datadog', 'Grafana'],
    image: '/projects/tempo.png',
  },
  {
    name: 'Cucumber Test Prioritization Tool',
    description: 'Enhanced test reporting and analytics tools using React and Remix, scaling to support over 2 million data processing daily',
    tech: ['React', 'Remix', 'Golang', 'AWS', 'PostgreSQL'],
    image: '/projects/cucumber.png',
  },
  {
    name: 'IZEA Shakes Platform',
    description: 'Redesigned application with Ruby on Rails hotwired/turbo, implementing image enhancement algorithm and Stripe payment integration',
    tech: ['Ruby on Rails', 'JavaScript', 'Stripe', 'AWS', 'Docker'],
    image: '/projects/izea.png',
  },
  {
    name: 'FutureX Learning Management System',
    description: 'Cutting-edge LMS with real-time communication features using WebRTC and Socket technologies, architected with microservices',
    tech: ['Vue.js', 'Node.js', 'WebRTC', 'AWS', 'Microservices'],
    image: '/projects/futurex.png',
  },
]

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/harcop',
    icon: GithubIcon,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/toluwap/',
    icon: LinkedinIcon,
  },
]

// Fallback icons for technologies not available in simple-icons
const awsIcon = {
  title: 'AWS',
  hex: 'FF9900',
  path: 'M0 0h24v24H0V0zm1 1v22h22V1H1zm17.5 3.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zm-3.5 0c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zm-3.5 0c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5z'
}

const pineconeIcon = {
  title: 'Pinecone',
  hex: '663399',
  path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'
}

const technologies = [
  { name: 'React', logo: 'React', icon: siReact },
  { name: 'TypeScript', logo: 'TS', icon: siTypescript },
  { name: 'Next.js', logo: 'Next.js', icon: siNextdotjs },
  { name: 'Node.js', logo: 'Node.js', icon: siNodedotjs },
  { name: 'AWS', logo: 'AWS', icon: awsIcon },
  { name: 'Python', logo: 'Python', icon: siPython },
  { name: 'Vue.js', logo: 'Vue.js', icon: siVuedotjs },
  { name: 'MongoDB', logo: 'MongoDB', icon: siMongodb },
  { name: 'PostgreSQL', logo: 'PostgreSQL', icon: siPostgresql },
  { name: 'Docker', logo: 'Docker', icon: siDocker },
  { name: 'Kubernetes', logo: 'K8s', icon: siKubernetes },
  { name: 'Redis', logo: 'Redis', icon: siRedis },
  { name: 'GraphQL', logo: 'GraphQL', icon: siGraphql },
  { name: 'Tailwind CSS', logo: 'Tailwind', icon: siTailwindcss },
  { name: 'NestJS', logo: 'NestJS', icon: siNestjs },
  { name: 'Golang', logo: 'Go', icon: siGo },
  { name: 'Ruby on Rails', logo: 'Rails', icon: siRubyonrails },
  { name: 'WebRTC', logo: 'WebRTC', icon: siWebrtc },
  { name: 'Stripe', logo: 'Stripe', icon: siStripe },
  { name: 'Datadog', logo: 'Datadog', icon: siDatadog },
  { name: 'Supabase', logo: 'Supabase', icon: siSupabase },
  { name: 'OpenAI', logo: 'OpenAI', icon: siOpenai },
  { name: 'LangChain', logo: 'LangChain', icon: siLangchain },
  { name: 'Pinecone', logo: 'Pinecone', icon: pineconeIcon },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Toluwap</span>
              <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">Toluwap</span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm/6 font-semibold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#contact"
              className="text-sm/6 font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-500 dark:hover:text-primary-300 transition-colors"
            >
              Get in touch <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900 dark:sm:ring-gray-100/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Toluwap</span>
                <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">Toluwap</span>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-500/30">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#contact"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-primary-600 dark:text-primary-400 hover:bg-gray-50 dark:hover:bg-white/5"
                  >
                    Get in touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Dialog>
      </header>

      <main className="isolate">
        {/* Hero section */}
        <div className="relative pt-14">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-8">
                <img
                  src="/resume/profile-pic.png"
                  alt="Toluwalope Bamidele"
                  className="mx-auto h-32 w-32 rounded-full object-cover ring-4 ring-white dark:ring-gray-800 shadow-xl"
                />
              </div>
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl dark:text-white">
                Hi, I'm{' '}
                <span className="text-primary-600 dark:text-primary-400">Toluwap</span>
              </h1>
              <div className="mt-8 flex justify-center space-x-6">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter-style CTA card */}
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32 dark:bg-gray-800 dark:shadow-none dark:after:pointer-events-none dark:after:absolute dark:after:inset-0 dark:after:ring-1 dark:after:ring-inset dark:after:ring-white/15 dark:after:sm:rounded-3xl">
              <h2 className="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Ready to build something amazing together?
              </h2>
              <p className="mx-auto mt-6 max-w-lg text-center text-lg text-gray-300">
                Let's discuss your next project and bring your ideas to life with cutting-edge technology and innovative solutions.
              </p>
              <div className="mx-auto mt-10 flex max-w-md gap-x-4 justify-center">
                <a
                  href="#contact"
                  className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white dark:shadow-none transition-colors"
                >
                  Get in touch
                </a>
              </div>
              <svg
                viewBox="0 0 1024 1024"
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-x-1/2"
              >
                <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                <defs>
                  <radialGradient
                    r={1}
                    cx={0}
                    cy={0}
                    id="759c1415-0410-454c-8f7c-9a820de03641"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(512 512) rotate(90) scale(512)"
                  >
                    <stop stopColor="#7775D6" />
                    <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="mx-auto mt-24 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance dark:text-white">
              Proven track record of success
            </p>
            <p className="mt-6 text-lg/8 text-gray-700 dark:text-gray-300">
              Numbers that speak to my expertise and commitment to delivering exceptional results.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <div>
              <div className="flex items-center text-lg/6 font-semibold text-primary-600 dark:text-primary-400">
                <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 size-2 flex-none">
                  <circle r={2} cx={2} cy={2} fill="currentColor" />
                </svg>
                5+ Years
                <div
                  aria-hidden="true"
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0 dark:bg-white/15"
                />
              </div>
              <p className="mt-6 text-xl/8 font-semibold tracking-tight text-gray-900 dark:text-white">Experience</p>
              <p className="mt-2 text-lg/7 text-gray-600 dark:text-gray-400">Building scalable applications and leading development teams</p>
            </div>
            <div>
              <div className="flex items-center text-lg/6 font-semibold text-primary-600 dark:text-primary-400">
                <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 size-2 flex-none">
                  <circle r={2} cx={2} cy={2} fill="currentColor" />
                </svg>
                20+ Projects
                <div
                  aria-hidden="true"
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0 dark:bg-white/15"
                />
              </div>
              <p className="mt-6 text-xl/8 font-semibold tracking-tight text-gray-900 dark:text-white">Delivered</p>
              <p className="mt-2 text-lg/7 text-gray-600 dark:text-gray-400">From startups to enterprise solutions across various industries</p>
            </div>
            <div>
              <div className="flex items-center text-lg/6 font-semibold text-primary-600 dark:text-primary-400">
                <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 size-2 flex-none">
                  <circle r={2} cx={2} cy={2} fill="currentColor" />
                </svg>
                20+ Technologies
                <div
                  aria-hidden="true"
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0 dark:bg-white/15"
                />
              </div>
              <p className="mt-6 text-xl/8 font-semibold tracking-tight text-gray-900 dark:text-white">Mastered</p>
              <p className="mt-2 text-lg/7 text-gray-600 dark:text-gray-400">Modern frameworks, AI/ML tools, and cloud platforms</p>
            </div>
            <div>
              <div className="flex items-center text-lg/6 font-semibold text-primary-600 dark:text-primary-400">
                <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 size-2 flex-none">
                  <circle r={2} cx={2} cy={2} fill="currentColor" />
                </svg>
                100% Success
                <div
                  aria-hidden="true"
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0 dark:bg-white/15"
                />
              </div>
              <p className="mt-6 text-xl/8 font-semibold tracking-tight text-gray-900 dark:text-white">Rate</p>
              <p className="mt-2 text-lg/7 text-gray-600 dark:text-gray-400">Client satisfaction and project delivery excellence</p>
            </div>
          </div>
        </div>

        {/* About section */}
        <div id="about" className="relative isolate -z-10 mt-32 sm:mt-40">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/75 px-6 py-16 shadow-lg ring-1 ring-gray-900/5 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20 dark:bg-white/[0.03] dark:shadow-none dark:ring-white/10">
              <img
                src="/resume/profile-pic.png"
                alt="Toluwalope Bamidele"
                className="h-96 w-full flex-none rounded-2xl object-cover shadow-none lg:aspect-square lg:h-auto lg:max-w-sm dark:shadow-xl"
              />
              <div className="w-full flex-auto">
                <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl dark:text-white">
                  About me
                </h2>
                <p className="mt-6 text-pretty text-lg/8 text-gray-600 dark:text-gray-400">
                  Technically sophisticated professional with over 5 years of experience in designing and architecting enterprise-level solutions with global impact. 
                  I specialize in cloud architecture, databases, software architecture, and security, with demonstrated success in mentoring engineers and managing 
                  microservices across diverse technologies. Expert in owning responsibility for development and ownership of frontend and backend systems, 
                  skilled in shipping user-facing features in modern, component-based UI frameworks. Exceptional communication and interpersonal skills with 
                  expertise in building, managing, and scaling high-performing technology organizations.
                </p>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          >
            <div
              style={{
                clipPath:
                  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
              }}
              className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#9fd6fc] to-[#8680fd] opacity-50 dark:from-[#80caff] dark:to-[#4f46e5] dark:opacity-20"
            />
          </div>
        </div>

        {/* Values section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance dark:text-white">
              My approach to development
            </p>
            <p className="mt-6 text-xl/8 text-gray-700 dark:text-gray-300">
              I believe in creating software that not only works but also makes a positive impact. 
              Here are the principles that guide my work and ensure exceptional results.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-lg/7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-16 dark:text-gray-400">
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900 dark:text-white">
                <CodeBracketIcon
                  aria-hidden="true"
                  className="absolute left-1 top-1 size-5 text-primary-600 dark:text-primary-500"
                />
                Clean Code First
              </dt>{' '}
              <dd className="inline">Writing maintainable, readable code that stands the test of time.</dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900 dark:text-white">
                <CheckIcon
                  aria-hidden="true"
                  className="absolute left-1 top-1 size-5 text-primary-600 dark:text-primary-500"
                />
                User-Centric Design
              </dt>{' '}
              <dd className="inline">Building solutions that prioritize user experience and accessibility.</dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900 dark:text-white">
                <CloudIcon
                  aria-hidden="true"
                  className="absolute left-1 top-1 size-5 text-primary-600 dark:text-primary-500"
                />
                Scalable Architecture
              </dt>{' '}
              <dd className="inline">Designing systems that grow with your business needs.</dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900 dark:text-white">
                <ServerIcon
                  aria-hidden="true"
                  className="absolute left-1 top-1 size-5 text-primary-600 dark:text-primary-500"
                />
                Performance Focused
              </dt>{' '}
              <dd className="inline">Optimizing for speed, efficiency, and reliability.</dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900 dark:text-white">
                <DevicePhoneMobileIcon
                  aria-hidden="true"
                  className="absolute left-1 top-1 size-5 text-primary-600 dark:text-primary-500"
                />
                Cross-Platform
              </dt>{' '}
              <dd className="inline">Creating consistent experiences across all devices and platforms.</dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900 dark:text-white">
                <SparklesIcon
                  aria-hidden="true"
                  className="absolute left-1 top-1 size-5 text-primary-600 dark:text-primary-500"
                />
                AI-First Thinking
              </dt>{' '}
              <dd className="inline">Leveraging AI and machine learning to create intelligent, adaptive solutions.</dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900 dark:text-white">
                <EnvelopeIcon
                  aria-hidden="true"
                  className="absolute left-1 top-1 size-5 text-primary-600 dark:text-primary-500"
                />
                Collaborative Spirit
              </dt>{' '}
              <dd className="inline">Working closely with teams to achieve shared goals.</dd>
            </div>
          </dl>
        </div>

        {/* Skills section */}
        <div id="skills" className="bg-gray-50 dark:bg-gray-800/50 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance dark:text-white">
                Technologies I work with
              </p>
              <p className="mt-6 text-xl/8 text-gray-700 dark:text-gray-300">
                I stay up-to-date with the latest technologies and best practices to deliver 
                high-quality solutions that meet modern standards and exceed expectations.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {skills.map((skill) => (
                  <div key={skill.name} className="relative pl-16">
                    <dt className="text-base/7 font-semibold text-gray-900 dark:text-white">
                      <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-primary-600 dark:bg-primary-500">
                        <skill.icon aria-hidden="true" className="size-6 text-white" />
                      </div>
                      {skill.name}
                    </dt>
                    <dd className="mt-2 text-base/7 text-gray-600 dark:text-gray-400">{skill.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
        </div>
      </div>

      {/* Technology Marquee section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Marquee Container - Exact Supabase Style */}
          <div className="mt-16 relative overflow-hidden">
            {/* First Row */}
            <div className="flex animate-marquee items-stretch gap-4 h-[120px]">
              {[...technologies, ...technologies].map((tech, index) => (
                <div key={index} className="flex-shrink-0 flex items-center justify-center min-w-[250px]">
                  <div className="group/panel relative rounded-lg md:rounded-xl p-px bg-gray-100 dark:bg-gray-800 bg-gradient-to-b from-gray-200 to-gray-300/50 dark:from-gray-700 dark:to-gray-600/50 transition-all hover:shadow-md flex items-center justify-center hover:bg-none hover:!bg-gray-300 dark:hover:!bg-gray-600 w-full md:w-[250px] h-full flex-grow">
                    <div className="relative z-10 w-full h-full rounded-[7px] md:rounded-[11px] bg-white dark:bg-gray-900 overflow-hidden text-gray-600 dark:text-gray-400 flex items-center justify-center">
                      <div className="flex items-center gap-3 opacity-50 group-hover/panel:opacity-75 transition-opacity">
                        {tech.icon && (
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill={`#${tech.icon.hex}`}
                            className="flex-shrink-0"
                          >
                            <path d={tech.icon.path} />
                          </svg>
                        )}
                        <span className="text-sm font-medium max-w-[140px] text-center">
                          {tech.logo}
                        </span>
                      </div>
                      <div className="absolute z-10 inset-0 w-full h-full pointer-events-none opacity-20"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Second Row - Reverse direction */}
            <div className="flex animate-marquee-reverse items-stretch gap-4 mt-4 h-[120px]">
              {[...technologies.slice(8), ...technologies.slice(8)].map((tech, index) => (
                <div key={index} className="flex-shrink-0 flex items-center justify-center min-w-[250px]">
                  <div className="group/panel relative rounded-lg md:rounded-xl p-px bg-gray-100 dark:bg-gray-800 bg-gradient-to-b from-gray-200 to-gray-300/50 dark:from-gray-700 dark:to-gray-600/50 transition-all hover:shadow-md flex items-center justify-center hover:bg-none hover:!bg-gray-300 dark:hover:!bg-gray-600 w-full md:w-[250px] h-full flex-grow">
                    <div className="relative z-10 w-full h-full rounded-[7px] md:rounded-[11px] bg-white dark:bg-gray-900 overflow-hidden text-gray-600 dark:text-gray-400 flex items-center justify-center">
                      <div className="flex items-center gap-3 opacity-50 group-hover/panel:opacity-75 transition-opacity">
                        {tech.icon && (
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill={`#${tech.icon.hex}`}
                            className="flex-shrink-0"
                          >
                            <path d={tech.icon.path} />
                          </svg>
                        )}
                        <span className="text-sm font-medium max-w-[140px] text-center">
                          {tech.logo}
                        </span>
                      </div>
                      <div className="absolute z-10 inset-0 w-full h-full pointer-events-none opacity-20"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Third Row */}
            <div className="flex animate-marquee items-stretch gap-4 mt-4 h-[120px]">
              {[...technologies.slice(16), ...technologies.slice(16)].map((tech, index) => (
                <div key={index} className="flex-shrink-0 flex items-center justify-center min-w-[250px]">
                  <div className="group/panel relative rounded-lg md:rounded-xl p-px bg-gray-100 dark:bg-gray-800 bg-gradient-to-b from-gray-200 to-gray-300/50 dark:from-gray-700 dark:to-gray-600/50 transition-all hover:shadow-md flex items-center justify-center hover:bg-none hover:!bg-gray-300 dark:hover:!bg-gray-600 w-full md:w-[250px] h-full flex-grow">
                    <div className="relative z-10 w-full h-full rounded-[7px] md:rounded-[11px] bg-white dark:bg-gray-900 overflow-hidden text-gray-600 dark:text-gray-400 flex items-center justify-center">
                      <div className="flex items-center gap-3 opacity-50 group-hover/panel:opacity-75 transition-opacity">
                        {tech.icon && (
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill={`#${tech.icon.hex}`}
                            className="flex-shrink-0"
                          >
                            <path d={tech.icon.path} />
                          </svg>
                        )}
                        <span className="text-sm font-medium max-w-[140px] text-center">
                          {tech.logo}
                        </span>
                      </div>
                      <div className="absolute z-10 inset-0 w-full h-full pointer-events-none opacity-20"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Experience section */}
        <div id="experience" className="bg-gray-50 dark:bg-gray-800/50 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance dark:text-white">
                My professional journey
              </p>
              <p className="mt-6 text-xl/8 text-gray-700 dark:text-gray-300">
                Building innovative solutions and leading development teams across various industries. 
                A timeline of growth, achievements, and impact in software development.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
              <div className="relative">
                <div className="flex overflow-x-auto scrollbar-hide gap-6 pb-4">
                  {experiences.map((exp, index) => (
                    <div key={index} className="flex-none w-80 md:w-1/2">
                      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg ring-1 ring-gray-900/5 dark:ring-white/10 p-8 h-full">
                        <div className="flex items-center gap-x-4 text-sm mb-4">
                          <time className="text-primary-600 dark:text-primary-400 font-semibold">{exp.period}</time>
                          <div className="h-px flex-auto bg-gray-200 dark:bg-gray-700" />
                        </div>
                        <div className="mb-4">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{exp.title}</h3>
                          <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">{exp.company}</p>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-x-3 text-gray-600 dark:text-gray-300">
                              <CheckIcon className="mt-1 h-5 w-5 flex-none text-primary-600 dark:text-primary-400" />
                              <span className="text-sm leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Scroll indicators */}
                <div className="flex justify-center mt-6 space-x-2">
                  {experiences.map((_, index) => (
                    <div key={index} className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects section */}
        <div id="projects" className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance dark:text-white">
              My recent work
            </p>
            <p className="mt-6 text-xl/8 text-gray-700 dark:text-gray-300">
              A showcase of projects that demonstrate my skills and passion for creating 
              innovative digital solutions. Each project represents a unique challenge solved with creativity and technical expertise.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="relative">
              <div className="flex overflow-x-auto scrollbar-hide gap-6 pb-4">
                {projects.map((project, index) => (
                  <article key={index} className="flex-none w-96">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg ring-1 ring-gray-900/5 dark:ring-white/10 overflow-hidden h-full">
                      <div className="relative">
                        <img
                          src={project.image}
                          alt={project.name}
                          className="aspect-[16/9] w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                      <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="inline-flex items-center rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary-700 dark:bg-primary-900/20 dark:text-primary-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                          {project.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              {/* Scroll indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {projects.map((_, index) => (
                  <div key={index} className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="relative isolate -z-10 mt-32 sm:mt-40">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/75 px-6 py-16 shadow-lg ring-1 ring-gray-900/5 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20 dark:bg-white/[0.03] dark:shadow-none dark:ring-white/10">
              <img
                alt="Monaco editor code writing animation"
                src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
                className="h-96 w-full flex-none rounded-2xl object-cover shadow-none lg:aspect-square lg:h-auto lg:max-w-sm dark:shadow-xl"
              />
              <div className="w-full flex-auto">
                <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl dark:text-white">
                  Ready to work together?
                </h2>
                <p className="mt-6 text-pretty text-lg/8 text-gray-600 dark:text-gray-400">
                  I'm always excited to take on new challenges and help bring innovative ideas to life. 
                  Let's discuss your project and see how we can create something amazing together.
                </p>
                <ul
                  role="list"
                  className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base/7 text-gray-950 sm:grid-cols-2 dark:text-gray-200"
                >
                  <li className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className="h-7 w-5 flex-none text-primary-500 dark:text-gray-200"
                    />
                    Free consultation
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className="h-7 w-5 flex-none text-primary-500 dark:text-gray-200"
                    />
                    Quick response time
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className="h-7 w-5 flex-none text-primary-500 dark:text-gray-200"
                    />
                    Flexible engagement
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className="h-7 w-5 flex-none text-primary-500 dark:text-gray-200"
                    />
                    Ongoing support
                  </li>
                </ul>
                <div className="mt-10 flex gap-x-4">
                  <a
                    href="#contact"
                    className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 dark:bg-primary-500 dark:hover:bg-primary-400 dark:focus-visible:outline-primary-500 transition-colors"
                  >
                    Get in touch
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          >
            <div
              style={{
                clipPath:
                  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
              }}
              className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#9fd6fc] to-[#8680fd] opacity-50 dark:from-[#80caff] dark:to-[#4f46e5] dark:opacity-20"
            />
          </div>
        </div>

        {/* Contact section */}
        <div id="contact" className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance dark:text-white">
              Let's start a conversation
            </p>
            <p className="mt-6 text-xl/8 text-gray-700 dark:text-gray-300">
              Ready to discuss your next project? I'd love to hear from you and explore how we can work together 
              to bring your ideas to life with innovative solutions.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none flex justify-center">
            <div className="w-3/4">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:bg-gray-800 dark:text-white dark:ring-gray-600 dark:placeholder:text-gray-500 dark:focus:ring-primary-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:bg-gray-800 dark:text-white dark:ring-gray-600 dark:placeholder:text-gray-500 dark:focus:ring-primary-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-white">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:bg-gray-800 dark:text-white dark:ring-gray-600 dark:placeholder:text-gray-500 dark:focus:ring-primary-500"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-primary-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 dark:bg-primary-500 dark:hover:bg-primary-400 dark:focus-visible:outline-primary-500 transition-colors"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="border-t border-gray-900/10 py-16 sm:py-24 lg:py-32 dark:border-white/10">
          <div className="text-center">
            <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">Toluwap</span>
            <p className="mt-4 text-sm/6 text-gray-600 dark:text-gray-400">
              &copy; 2024 Toluwalope Bamidele. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
