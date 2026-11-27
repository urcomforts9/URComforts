import { aboutPoints } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div>
          <h2>About UR Groups</h2>
          <p className="lead">
            UR Groups runs three stays in Jayanagar, Bengaluru. We keep things simple: clean
            rooms, fair prices and a team that is easy to reach.
          </p>
        </div>

        <ul className="about-list">
          {aboutPoints.map((a) => (
            <li key={a.title}>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
