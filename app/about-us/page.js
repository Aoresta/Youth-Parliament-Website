import { PageHero, Shell } from "../components";

export default function AboutUsPage() {
  return (
    <Shell>
      <PageHero
        partyKey="table"
        eyebrow="About Us"
        title="Built for disciplined democratic learning."
        copy="The School Youth Parliament gives students a practical stage to understand democracy, public speaking, teamwork, rules of procedure, and respectful disagreement."
      />
      <section className="about-layout">
        <article>
          <h2>Purpose</h2>
          <p>
            To help students become informed, confident, and responsible citizens through
            research, debate, and parliamentary simulation.
          </p> 
        </article>
        <article>
          <h2>Values</h2>
          <p>
            Discipline, dignity, fairness, accountability, service, evidence, and respect
            for every speaker in the House.
          </p>
        </article>
        <article>
          <h2>Contact Desk</h2>
          <p>
            Website Managers: Tejas Bansal - +91 9205503994
            Student Representatives:
            Male Student Cordinator - Veer Verma - +91 9873770007
            Female Student Cordinator - Mansi Joshi - +91 9871595102
            Guided By:
             Vice Pincipal Ma'am - Ms. Diksha Rana
            Teacher Coordinators:
             Neetu Verma Ma'am -
             Sakshi Arora Ma'am -
             Sudipta Mohanty Ma'am -
             Sanchita Banarjee Bagchi Ma'am -
             Ankit Suri Sir - 
             Gaurav Goel -
             Brijesh Sharma -
             Rajshree
          </p>
        </article>
      </section>
    </Shell>
  );
}
