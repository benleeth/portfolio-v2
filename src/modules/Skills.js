import React from "react"
import { convertRating } from "../Utils"

const Skills = ({
  key,
  sectionTitle='',
  ratings=null
}) => {
  return (
    <section className="qualifications grid">
      {sectionTitle &&
        <div className="col-desk-16">
          <h2 className="section-title">{ sectionTitle }</h2>
        </div>
      }
      {ratings.length > 0 &&
        <ul className="qualifications__list grid space-between col-desk-16">
          {ratings.map((skill) => (
            <li className="qualifications__list-item col-desk-5 col-tab-8 col-mob-4 col-no-pad"><strong>{ skill.text }</strong> <span className={ `qualifications__stars qualifications__stars--${convertRating(skill.rating)}` }>{ convertRating(skill.rating) }/6</span></li>
          ))}
        </ul>
      }
    </section>
  )
}

export default Skills
