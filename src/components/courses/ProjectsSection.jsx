import {
  FaDatabase,
  FaChartBar,
  FaPython,
  FaFileExcel,
  FaTable,
} from "react-icons/fa";

import {
  TbTable,
} from "react-icons/tb";
import {
  BsBarChartFill,
} from "react-icons/bs";

import "../../assets/Style/ProjectsSection.css";

const projects = [

  {
    icon:<FaFileExcel />,
    title:"Excel Sales & Operations",
    category:"Excel Domain",
    desc:
    "Analyze sales performance, operations workflow, KPIs, and business reports using advanced Excel techniques.",
  },

  {
    icon:<BsBarChartFill />,
    title:"Banking Dashboard",
    category:"Power BI • Banking",
    desc:
    "Build interactive banking dashboards for customer analytics, financial insights, and business performance tracking.",
  },

  {
    icon:<BsBarChartFill />,
    title:"Risk Analysis Dashboard",
    category:"Power BI • Loans",
    desc:
    "Create risk management dashboards focused on loan approvals, customer scoring, and financial risk analysis.",
  },

  {
    icon:<BsBarChartFill />,
    title:"Manufacturing Dashboard",
    category:"Power BI • Production",
    desc:
    "Monitor manufacturing processes, production efficiency, inventory flow, and operational KPIs visually.",
  },

  {
    icon:<FaPython />,
    title:"Descriptive Analysis",
    category:"Python Project",
    desc:
    "Perform data cleaning, descriptive statistics, and data exploration using real-world datasets with Python.",
  },

  {
    icon:<FaDatabase />,
    title:"Business SQL Database",
    category:"SQL Project",
    desc:
    "Design a professional database and answer more than 30 real business questions using advanced SQL queries.",
  },

  {
    icon:<TbTable />,
    title:"Interactive Tableau Dashboard",
    category:"Tableau Project",
    desc:
    "Build dynamic visual dashboards and present business insights professionally using Tableau.",
  },

];

function ProjectsSection() {

  return (

    <section className="projects-section">

      <div className="projects-section__glow"></div>

      <div className="projects-section__header">

        <span className="projects-section__subtitle">
          REAL WORLD PROJECTS
        </span>

        <h2 className="projects-section__title">

          Build Strong
          <span> Portfolio Projects</span>

        </h2>

        <p className="projects-section__description">

          Work on more than <span>18 hours of practical projects </span> 
          across 6 real-world domains and industries to gain
          hands-on experience and build a professional portfolio
          that helps you stand out in the job market.

        </p>

      </div>

      <div className="projects-section__grid">

        {projects.map((item,index) => (

          <div
            className="project-card"
            key={index}
          >

            <div className="project-card__icon">
              {item.icon}
            </div>

            <span className="project-card__category">
              {item.category}
            </span>

            <h3 className="project-card__title">
              {item.title}
            </h3>

            <p className="project-card__description">
              {item.desc}
            </p>

          </div>

        ))}

      </div>

    </section>

  );

}

export default ProjectsSection;