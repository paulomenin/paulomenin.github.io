import * as React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Seo from "../../components/seo"
import fullResumeData from "./_resumeData"
import Header from "./_header"
import SidePanel from "./_sidePanel"
import ResumeContent from "./_content"
import { shouldDisplay } from "./_utils"

function ResumePage({ data }) {
  const [fullContent, setFullContent] = React.useState(true)
  const toggleFullContent = () => {
    setFullContent(!fullContent)
  }

  const filterThisArg = { isFullVersion: fullContent }
  const resumeData = {
    ...fullResumeData,

    workExperiences: fullResumeData.workExperiences.filter(
      shouldDisplay,
      filterThisArg
    ),
    otherExperiences: fullResumeData.otherExperiences.filter(
      shouldDisplay,
      filterThisArg
    ),

    education: fullResumeData.education.filter(shouldDisplay, filterThisArg),
    courses: fullResumeData.courses.filter(shouldDisplay, filterThisArg),
  }

  return (
    <>
      <Helmet>
        <html className="light resume" />
      </Helmet>
      <Seo title="Resume" />

      <div className="max-w-[800px] print:w-auto mx-auto p-2">
        <div className="w-full pb-2 text-center">
          <div className="inline-table pb-2 px-1 print:hidden">
            <input
              id="check-short-version"
              className="focus:ring-1 text-purple-800 bg-white rounded mr-2 align-middle"
              type="checkbox"
              checked={!fullContent}
              onChange={toggleFullContent}
            />
            <label
              className="text-sm align-middle"
              htmlFor="check-short-version"
            >
              Short Version
            </label>
          </div>
          <Header name={resumeData.name} title={resumeData.title} />
        </div>

        <div className="table">
          <div className="block sm:table-cell print:table-cell align-top sm:w-[210px]">
            <SidePanel
              resumeData={resumeData}
              siteMetadata={data.site.siteMetadata}
              fullContent={fullContent}
            />
          </div>
          <div className="block mt-2 sm:table-cell sm:pl-2 print:table-cell align-top">
            <ResumeContent resumeData={resumeData} fullContent={fullContent} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ResumePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        social {
          github
          linkedin
        }
        contact {
          email
        }
      }
    }
  }
`
