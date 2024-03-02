import SectionTitle from "../components/SectionTitle"
import { skills } from "../data";
import SkillCard from "../components/SkillCard"

const Skills = () => {
  return (
    <section className="py-20 align-element" id="skills">
      <SectionTitle text='Tech Stack'/>
      <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => {
          return <SkillCard icon={skill.icon} text={skill.text} title={skill.title}/>
        })}
      </div>
    </section>
  )
}

export default Skills