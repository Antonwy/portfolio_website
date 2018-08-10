import React from 'react'
import { values } from './SkillValues'
import ProgressBar from './ProgressBar';
import BlackGradient from './BlackGradient'

const Skills = () => {

    const renderProgress = ({ lg, pg, from, to }) => {
        return <ProgressBar key={lg} lg={lg} pg={pg} from={from} to={to} />
    }

    return (
        <div className="skillsBG">
            <BlackGradient tb={true}/>
            <div className="skillsContainer">
                <h1 style={{ position: "relative", color: "white", fontFamily: "futura", textAlign: "center", margin: "50px 0" }} className="skillTitle">MY SKILLS</h1>
                <div className="skillList">
                    {values.map(renderProgress)}
                </div>
            </div>
        </div>
    )
}

export default Skills
