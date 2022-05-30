import * as React from "react"
import { GlobeAltIcon, ExternalLinkIcon } from "@heroicons/react/solid"
import { shouldDisplay, formatDate, formatLocal } from "./_utils"
import Link from "../../components/link"

function SectionHeader({ title, children }) {
  return (
    <div className="table w-full break-inside-avoid">
      <h2 className={`text-purple-900 print:text-black mt-3 uppercase`}>
        {title || children}
      </h2>
      <hr className={`bg-purple-900 h-1 mb-2`} />
    </div>
  )
}

function ExperienceEntry({ experience, isFullVersion }) {
  return (
    <div className="w-full my-2">
      <div className="table w-full break-inside-avoid">
        <span className=" font-bold">{experience.title}</span> -{" "}
        {experience.company} -{" "}
        <span className=" text-zinc-700 text-sm">
          {formatLocal(experience.local)}
        </span>
      </div>

      <div className="w-full">
        <div className="float-left text-xs text-zinc-700">
          {formatDate(experience.dateStart)} -{" "}
          {experience.dateEnd ? formatDate(experience.dateEnd) : "PRESENT"}
        </div>
        {experience.site && (
          <Link
            className="float-right"
            href={experience.site.url}
            forceExternal
          >
            <div className="table text-sm">
              <GlobeAltIcon className="table-cell align-middle h-5 w-5" />
              <span className="table-cell align-middle">
                {experience.site.title}
              </span>
              <ExternalLinkIcon className="table-cell  align-middle h-5 w-5 print:hidden" />
            </div>
          </Link>
        )}
        <p className="clear-both"></p>
      </div>

      {experience.workItems
        .filter(shouldDisplay, { isFullVersion: isFullVersion })
        .map((work, index) => (
          <>
            <div className="text-sm my-2 break-inside-avoid" key={index}>
              {work.description}
            </div>
            {work.site && (
              <div className="text-xs">
                <Link href={work.site.url} forceExternal>
                  {work.site.title}
                  <ExternalLinkIcon className="inline mt-[-5px] h-5 w-5 print:hidden" />
                </Link>
                <span className="hidden print:inline">: {work.site.url}</span>
              </div>
            )}
          </>
        ))}
    </div>
  )
}

function CourseEntry({ course }) {
  return (
    <div className="table w-full my-2">
      <div className="table-cell align-top w-10 mr-2">
        <span>{formatDate(course.dateEnd, true)}</span>
      </div>
      <div className="table-cell">
        <div>
          <span className="font-bold">{course.title}</span>
        </div>
        <div>
          {course.institution && `${course.institution}`}
          {course.local && ` - `}
          <span className="text-sm text-zinc-700">
            {course.local && `${formatLocal(course.local)}`}
            {course.site && (
              <div className="text-xs">
                <Link href={course.site.url} forceExternal>
                  {course.site.title}
                  <ExternalLinkIcon className="inline mt-[-5px] h-5 w-5 print:hidden" />
                </Link>
              </div>
            )}
            {course.credential && (
              <div className="text-xs">
                <Link href={course.credential.url} forceExternal>
                  {course.credential.display}
                  <ExternalLinkIcon className="inline mt-[-5px] h-5 w-5 print:hidden" />
                </Link>
              </div>
            )}
          </span>
        </div>
      </div>
    </div>
  )
}

function ResumeContent({ resumeData, fullContent }) {
  return (
    <div className="card">
      <p className="text-justify text-sm">{resumeData.summary}</p>
      {resumeData.workExperiences.length > 0 && (
        <>
          <SectionHeader>WORK EXPERIENCE</SectionHeader>
          <ul>
            {resumeData.workExperiences.map((experience, index) => {
              return (
                <li key={index}>
                  <ExperienceEntry
                    experience={experience}
                    isFullVersion={fullContent}
                  />
                </li>
              )
            })}
          </ul>
        </>
      )}

      {resumeData.otherExperiences.length > 0 && (
        <>
          <SectionHeader>OTHER EXPERIENCE</SectionHeader>
          <ul>
            {resumeData.otherExperiences.map((experience, index) => {
              return (
                <li key={index}>
                  <ExperienceEntry
                    experience={experience}
                    isFullVersion={fullContent}
                  />
                </li>
              )
            })}
          </ul>
        </>
      )}

      {resumeData.education.length > 0 && (
        <>
          <SectionHeader>EDUCATION</SectionHeader>
          <ul>
            {resumeData.education.map((education, index) => {
              return (
                <li key={index}>
                  <CourseEntry course={education} isFullVersion={fullContent} />
                </li>
              )
            })}
          </ul>
        </>
      )}

      {resumeData.courses.length > 0 && (
        <>
          <SectionHeader>CERTIFICATES {"&"} COURSES</SectionHeader>
          <ul>
            {resumeData.courses.map((course, index) => {
              return (
                <li key={index}>
                  <CourseEntry course={course} isFullVersion={fullContent} />
                </li>
              )
            })}
          </ul>
        </>
      )}
    </div>
  )
}

export default ResumeContent
