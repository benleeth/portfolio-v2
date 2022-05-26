import React from "react"
import Highlight from "react-highlight"
import { convertLanguage } from "../Utils"

const CodeExamples = ({
  key,
  sectionTitle='',
  language='',
  codeExamples=null
}) => {
  return (
    <section className="examples grid">
      {sectionTitle &&
        <div className="col-desk-16">
          <h2 className="section-title">{ sectionTitle }</h2>
        </div>
      }
      <div className="grid col-desk-16">
        <h4 className="examples__title">{ convertLanguage(language) }</h4>
        {codeExamples && codeExamples.map((example) => (
          <Highlight className={ example.language }>
            { example.code }
          </Highlight>
        ))}
      </div>
    </section>
  )
}

export default CodeExamples
