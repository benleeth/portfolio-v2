import React from "react"
import { SkillBars } from "react-skills"
import { convertRating } from "../Utils"

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
        let level = Math.ceil((parseInt(convertRating(ratings[i].rating), 10) / 6) * 100)
        newObj.name = ratings[i].text
        newObj.level = level
        newObj.color = randomColor()
        skillsData.push(newObj)
      }
    }

    function randomColor() {
      const colors = ['#850802', '#051188', '#022820', '#ce0c03', '#0719cf', '#068167']
      return colors[Math.floor(Math.random() * colors.length)]
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
