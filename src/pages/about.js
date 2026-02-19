import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const AboutPage = () => (
  <Layout>
    <Seo title="About" />
    <section className="section">
      <h2>About</h2>
      <div className="about-highlight">
        <p>
          Senior Software Engineer with a passion for analytics, data, and building solutions that drive business impact. Experienced in leading cross-team initiatives, mentoring, and delivering data-driven insights to optimize product decisions. Skilled in a range of technologies including Google Analytics, SQL, Node, React, and Azure cloud services.
        </p>
        <p>
          Experience includes the insurance, healthcare, and e-commerce industries, with a track record of improving site performance, driving applicant growth, and leading successful migrations. Committed to continuous learning and sharing knowledge through writing and mentorship.
        </p>
        <p>
          All opinions are my own and do not reflect those of my employer.
        </p>
      </div>
    </section>

    <section className="section">
      <h2>Coursework</h2>
      <div className="card">
        <table className="skills-table">
          <thead>
            <tr>
              <th>Area</th>
              <th>Coursework</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Software</td>
              <td>Java Programming, C Programming, Machine Learning DevOps, Scripting and Programming Applications</td>
            </tr>
            <tr>
              <td>Data</td>
              <td>Data Structures & Algorithms, Database Design & SQL, Data and Information Governance, Data Visualization</td>
            </tr>
            <tr>
              <td>Analytics</td>
              <td>Data Analysis with R, Introduction to Systems Thinking, Discrete Mathemtics</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section className="section">
      <h2>Skills</h2>
      <div className="card">
        <table className="skills-table">
          <thead>
            <tr>
              <th>Area</th>
              <th>Skills</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Languages</td>
              <td>Java , JavaScript , SQL , Python , R , Scala , Go , SCADA , PLC/DCS</td>
            </tr>
            <tr>
              <td>Frameworks</td>
              <td>Node , React , dbt , Selenium , Pandas , NumPy , Ansible , YAML , Redis</td>
            </tr>
            <tr>
              <td>ETL</td>
              <td>dbt , Airflow , Hadoop , Kafka , SSIS , Airbyte , Fivetran , Dagster , Databricks , Spark</td>
            </tr>
            <tr>
              <td>DevOps</td>
              <td>Git , Trello , JIRA , SDLC , Agile , Kanban , Azure DevOps , Version1 , Docker , Kubernetes</td>
            </tr>
            <tr>
              <td>Cloud</td>
              <td>Azure Event Hub, Cosmos DB, Data Factory , AWS Glue, EC2, EBS , Google Big Query, Looker Studio</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section className="section">
      <h2>Extracurriculars</h2>
      <div className="card">
        <table className="skills-table">
          <thead>
            <tr>
              <th>Organization</th>
              <th>Focus</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Phi Theta Kappa</td>
              <td>Academic honor society</td>
            </tr>
            <tr>
              <td>Honors Club</td>
              <td>Academic community and service</td>
            </tr>
            <tr>
              <td>Gamer’s Club</td>
              <td>Community and collaboration</td>
            </tr>
            <tr>
              <td>Society of Hispanic Professional Engineers</td>
              <td>Professional development and mentorship</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section className="section">
      <h2>Experience</h2>
      <p className="card-meta">Dates listed where available.</p>
      <div className="card-grid">
        <div className="card">
          <div className="card-meta">GEICO · Senior Software Engineer</div>
          <ul className="bullet-list">
            <li>Own application roadmap and API migration initiatives.</li>
            <li>Lead cross-team integration work across Marketing, Privacy & Compliance, and Tech.</li>
            <li>Provide technical root-cause analysis and optimize product decisions with data insights.</li>
            <li>Serve as Google Analytics SME for the MarTech business unit.</li>
            <li>Mentor junior developers through code reviews and pairing.</li>
          </ul>
        </div>
        <div className="card">
          <div className="card-meta">GEICO · Software Engineer II</div>
          <ul className="bullet-list">
            <li>Delivered analytics reporting with Google and Adobe Analytics.</li>
            <li>Implemented tag management via Adobe Launch DTM.</li>
            <li>Led UA to GA4 migration.</li>
            <li>Automated tasks with Postman and Python.</li>
            <li>Provided training and documentation on tag management best practices.</li>
          </ul>
        </div>
        <div className="card">
          <div className="card-meta">VITAS Healthcare · Analytics Developer</div>
          <ul className="bullet-list">
            <li>Built tagging strategy to improve site speed and drive applicant growth.</li>
            <li>Rebuilt a sunset call analytics solution with Node and SQL.</li>
            <li>Extended the system with microservices on Azure Cosmos DB and Azure Functions.</li>
            <li>Applied NLP with Azure Cognitive Services.</li>
            <li>Delivered dashboards to stakeholders.</li>
          </ul>
        </div>
        <div className="card">
          <div className="card-meta">InfoTrust, LLC · Digital Analytics Engineer Intern</div>
          <ul className="bullet-list">
            <li>August 2018 – Present.</li>
            <li>Mastered tag management across GTM, GA, and Tealium.</li>
            <li>Debugged analytics on web and mobile.</li>
            <li>Built integrations with SQL, BigQuery, jQuery, and Java.</li>
            <li>Owned client requests in Trello and JIRA.</li>
          </ul>
        </div>
        <div className="card">
          <div className="card-meta">InfoTrust, LLC · Software Engineer Intern</div>
          <ul className="bullet-list">
            <li>Reduced load times.</li>
            <li>Debugged Android SDK and TestFlight issues.</li>
            <li>Integrated analytics data with reporting APIs using SQL, BigQuery, and Java.</li>
            <li>Explored automation testing with Selenium and Jenkins.</li>
          </ul>
        </div>
        <div className="card">
          <div className="card-meta">Procter & Gamble · Associate Researcher Co-Op</div>
          <ul className="bullet-list">
            <li>May 2018 – August 2018.</li>
            <li>Automated lab report collection.</li>
            <li>Built dashboards with SQL and VBA.</li>
            <li>Created business informatics apps using Power Apps and Power BI.</li>
            <li>Built data collection UIs with React and Node.</li>
            <li>Supported pilot chemical engineering work.</li>
          </ul>
        </div>
        <div className="card">
          <div className="card-meta">Amazon NAFC · Certified Problem Solver</div>
          <ul className="bullet-list">
            <li>August 2016 – March 2018.</li>
            <li>Recognized for exceeding customer expectations.</li>
            <li>Improved team throughput.</li>
            <li>Supported successful audits through documentation and vendor reconciliation.</li>
          </ul>
        </div>
      </div>
    </section>
  </Layout>
);

export default AboutPage;
