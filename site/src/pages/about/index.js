import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import TechIcons from "./_techIcons"
import Accordion from "./_accordion"

import Link from "../../components/link"

function AboutPage({ data, location }) {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="About" />
      <div className="card flex justify-center">
        <article
          className="lg:min-w-[700px] max-w-[700px] font-sans
          prose prose-neutral dark:prose-invert
          prose-a:text-purple-900
          dark:prose-a:text-purple-600"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <h1 itemProp="headline">About</h1>
          </header>

          <section className="" itemProp="articleBody">
            <div className="float-right text-center">
              <StaticImage
                className="rounded-full shadow-md shadow-black/60"
                layout="fixed"
                formats={["auto", "webp", "avif"]}
                src="../../images/profile-pic.jpg"
                width={160}
                height={160}
                quality={95}
                alt="Profile picture"
              />
            </div>

            <h2>Hi, I&apos;m Paulo Menin</h2>
            <p>
              A passionate software engineer and lifelong learner from Brazil
              helping teams to grow high-quality software solutions.
            </p>
            <p>
              I have more than {new Date().getFullYear() - 2010} years of
              professional experience working in technology/research companies,
              which has enabled me to gain knowledge in different fields and
              programming languages.
            </p>
            {/* <p>
              Check out my{" "}
              <Link href="/resume" forceExternal>
                resume
              </Link>
            </p> */}

            <h2>What I write about</h2>
            <p>This site is divided into three main categories:</p>
            <ul className="list-disc list-inside">
              <li>Articles: where I write about technology.</li>
              <li>
                Blog: where I write about my hobbies and other non-tech
                subjects.
              </li>
              <li>Slide-Decks: where I post my presentations.</li>
            </ul>
          </section>

          <section className="pt-8 pb-2 font-sans flex flex-col gap-4">
            <Accordion id="my-history" label="My History">
              <p className="mt-0">
                My history with computers began a long time ago when I was a
                child at 9 years old. I remember watching movies with people
                using computers and started playing with boxes imagining that
                I&apos;m using computers. I asked my parents to learn how to use
                it. My parents tried to enroll me in a computer school, but they
                didn&apos;t accept me because I was too young.
              </p>
              <p>
                Some years later, another school accepted me as a student for a
                basic course: MS-DOS, Windows 95, and Microsoft Office. I was
                the youngest student in the class. My interest in computers only
                grew. When I finished the basic course I was enrolled in a
                advanced course: Introduction to programming with Visual Basic
                and Borland Delphi.
              </p>
              <p>
                I remember these days when I was eager for the Elementary School
                classes to end just to be home and start programming simple
                games like tic-tac-toe in the evenings.
              </p>
              <p>
                One day when I was in High School I saw a magazine about Linux.
                I bought it! It came with a minimal version of the Slackware
                Linux (ZipSlack). It took me a lot of days to install it and
                configure X with Window Maker. That episode was a turning point
                in my life. That was the first challenge that I remember that I
                did on my own without help from anyone else, I didn&apos;t known
                anybody who has been using Linux. Learning Linux exploring man
                pages and reading internet articles in English (at that time
                understanding English was challenging for me) opened my mind to
                have confidence that I can learn anything that I want!
              </p>
              <p>
                In 2002 I enrolled in a Computer Technician course, where I have
                contact with Clipper programming language, C, and more deep on
                Visual Basic and Delphi. During that time I build and sell my
                first software, a management program for a school, with features
                to keep track of students&apos; grades, and teachers schedules
                and print some reports. At that time I didn&apos;t have any
                doubt I want to learn more and declined job offers to enroll in
                a Bachelor of Computer Science course.
              </p>
              <p>
                2005 was the year I ingressed at{" "}
                <Link href="https://www.icmc.usp.br/en/">ICMC-USP</Link> BCS
                course, which is among the best ranked in Brazil. During the
                undergraduate course, I always seek to participate in
                extracurricular activities. I was a volunteer in a project that
                teaches how to use computers to people that can&apos;t afford to
                pay for a course. I joined &quot;Sanca Livre&quot; the
                OpenSource group from São Carlos, where I helped to organize
                events like the FLISOL 2006 (Festival Latinoamericano de
                Instalación de Software Libre). I helped the organization of two
                editions of &quote;SemComp&quot;, ICMC&apos;s computing week
                event full of talks and workshops.
              </p>
              <p>
                In my professional career, I had always been working on projects
                for big multinational companies. Always using Agile
                Methodologies. In 2014 I passed the exam for the Scrum Master
                certification.
              </p>
              <p>
                I worked on a wide range of projects and technologies: Web
                development, command-line tools, desktop applications, embedded
                systems, computer vision, machine learning, 3D printing, IoT,
                drones, and distributed systems. This diversity of experiences
                among contact with many different programming languages, from C
                for embedded systems to high-level languages like Python,
                enabled me to always be learning something new and have contact
                with different ways of thinking, patterns, and solutions to
                problems from different viewpoints. This also made me develop
                the skill to learn something new very fast. Many times I was
                exposed to different technology and need to learn it in weeks at
                the point to become a focal point for the team.
              </p>
              <p>
                Every day at night I ask this question to myself: What did I
                learn today?
              </p>
              <p className="mb-0 italic">
                That&apos;s me, every day moving forward!
              </p>
            </Accordion>

            <Accordion id="tech-stack" label="Tech Stack">
              <p className="mt-0">
                These are some of the technologies that I have been working on
                within my career.
              </p>
              <TechIcons />
            </Accordion>
          </section>
        </article>
      </div>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
