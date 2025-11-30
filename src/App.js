/** @format */

import "./App.css";

function App() {
  return (
    <div class='resume'>
      <div class='header'>
        <h1>KUNUTHURU SRAVAN KUMAR ACHARI</h1>
        <h2>Full Stack Developer | Python Developer | Front-End Developer</h2>
      </div>

      <div class='info-grid'>
        <div>📞 9505093921</div>
        <div>📧 sravan.kunuthuru@gmail.com</div>
        <div>📍 Bangalore</div>
        <div>🔗 linkedin.com/in/kunuthurusravankumarachari</div>
        <div>💻 github.com/sravankunuthuru</div>
      </div>

      <div class='section-title'>Profile</div>
      <p style={{ fontSize: "14px" }}>
        Enthusiastic and detail-oriented Full Stack Developer with strong skills
        in building responsive and user-friendly web applications. Proficient in
        HTML, CSS, JavaScript, React.js, Bootstrap, Python, and SQL. Experienced
        in transforming business requirements into clean and efficient technical
        solutions.
      </p>

      <div class='section-title'>Education</div>
      <ul>
        <li>
          <b>Bachelor of Technology (Civil Engineering)</b> — CGPA: 6.9
          (2020–2024), JNTUA College of Engineering Kalikiri
        </li>
        <li>
          <b>Intermediate</b> — CGPA: 8.86 (2018–2020), Nalanda Junior College
        </li>
        <li>
          <b>10th Standard</b> — CGPA: 8.2 (2017–2018), ZPH High School
        </li>
      </ul>

      <div class='section-title'>Skills</div>
      <div class='skills'>
        <b>Front End:</b> HTML, CSS, JavaScript, React.js, Bootstrap
        <br />
        <b>Back End:</b> Python, Basic SQL
        <br />
        <b>Tools & Technologies:</b> Git, GitHub, VS Code, Debugging, Problem
        Solving
      </div>

      <div class='section-title'>Language</div>
      <div class='languages'>
        <b>Telugu</b>
        <div class='dots'>● ● ● ● ● ● ● ●</div>
        <b>English</b>
        <div class='dots'>● ● ● ● ● ● ○ ○</div>
      </div>

      <div class='section-title'>Projects</div>
      <div class='projects'>
        <div class='project-title'>E-Commerce Website — UI Prototyping</div>
        <ul>
          <li>
            Developed a front-end E-Commerce website using HTML, CSS,
            JavaScript, React.js & Bootstrap
          </li>
          <li>
            Worked on product listing, cart interface and optimized performance
          </li>
        </ul>

        <div class='project-title'>Calculator App — React.js</div>
        <ul>
          <li>Created a dynamic calculator using React components</li>
          <li>Implemented state management and UI interaction</li>
        </ul>

        <div class='project-title'>Portfolio Website</div>
        <ul>
          <li>
            Developed a personal portfolio using HTML, CSS, and JavaScript
          </li>
        </ul>
      </div>

      <div class='section-title'>Certificates</div>
      <div class='certificates'>
        <ul>
          <li>
            <b>Full Stack Web Development</b> — HTML, CSS, JavaScript, React.js,
            Bootstrap, Python, MySQL
          </li>
          <li>
            <b>Front End Web Development</b> — HTML, CSS, JavaScript, React.js,
            Angular
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
