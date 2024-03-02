import about from '../assets/about.svg'
import SectionTitle from './SectionTitle'

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
        <div className="align-element grid md:grid-cols-2 items-center gap-16">
            <img src={about} className='w-full h-64' />
            <article>
                <SectionTitle text='Code & Coffee'/>
                <p className='text-slate-600 mt-8 leading-loose'>
                With experience in software development within the banking sector, 
                my portfolio showcases a diverse range of projects aimed at optimizing processes and enhancing efficiency. 
                From handling extensive transaction data to automating risk mitigation reports, 
                my expertise lies in leveraging technologies to drive impactful solutions.
                </p>
            </article>
        </div>
    </section>
  )
}

export default About