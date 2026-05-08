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
            Website Managers: Mr. Tejas Bansal - +91 9205503994 <br />
            Student Representatives: <br />
            Male Student Cordinator - Mr. Veer Verma - +91 9873770007 <br />
            Guided By: <br />
            Vice Pincipal Ma'am - Mrs. Deeksha Singh Rana <br />
            Mrs. Neetu Verma <br />
            Mrs. Sakshi Arora <br />
            Mrs. Sudipta Mohanty <br />
            Mrs. Sanchita Banarjee Bagchi <br />
            Ms. Swati Singh <br />
            Mr. Ankit Suri <br />
            Mr. Gaurav Goyal <br />
            Mr. Brijesh Sharma <br />
            Dr. Rajshree <br />
          </p>
        </article>
      </section>
    </Shell>
  );
}