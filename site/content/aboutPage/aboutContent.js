import * as React from "react"
import Link from "../../src/components/link"

function AboutContent() {
  return (
    <>
      <h2>Hi, I&apos;m Paulo Menin</h2>
      <p>
        A passionate software engineer and lifelong learner from Brazil helping
        teams to grow high-quality software solutions.
      </p>
      <p>
        I have more than {new Date().getFullYear() - 2010} years of professional
        experience working in technology/research companies, which has enabled
        me to gain knowledge in different fields and programming languages.
      </p>

      <h2>What I write about</h2>
      <p>This site is divided into three main categories:</p>
      <ul className="list-disc list-inside">
        <li>Articles: where I write about technology.</li>
        <li>
          Blog: where I write about my hobbies and other non-tech subjects.
        </li>
        <li>Slide-Decks: where I post my presentations.</li>
      </ul>
    </>
  )
}

export default AboutContent
