import React from "react"
import { SkillBars } from "react-skills"
import { getColor } from "../Utils"

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionTitle: props.sectionTitle,
      ratings: props.ratings
    }
  }

  render() {
    const { sectionTitle, ratings } = this.state
    const skillsData = []
    if (ratings) {
      for (let i = 0; i < ratings.length; i++) {
        let newObj = {}
        let level = parseInt(ratings[i].rating, 10)
        newObj.name = ratings[i].text
        newObj.level = level
        newObj.color = getColor(level)
        skillsData.push(newObj)
      }
    }

    return (
      <section className="qualifications grid">
        {sectionTitle &&
          <div className="col-desk-16">
            <h2 className="section-title">{ sectionTitle }</h2>
          </div>
        }
        {ratings.length > 0 &&
          <ul className="qualifications__list">
            {skillsData.length > 0 &&
              <SkillBars skills={ skillsData } flat="true" duration={ 3 } barsHeight={ 35 } />
            }
          </ul>
        }
      </section>
    )
  }
}

export default Skills
