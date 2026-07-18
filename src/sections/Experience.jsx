const experiences = [
  {
    period: "2023 — 2026",
    role: "Toll Road Systems Maintenance",
    company: "NLEX Corporation",
    description:
      "Performed preventive and corrective maintenance of toll collection systems and traffic equipment. Diagnosed hardware issues, monitored network performance, and repaired equipment to ensure reliable system operations. Experience with ticketing system, remote support tools, and IT documentation.",
    technologies: ["Networking", "Hardware", "Software", "Tools",],
    current: true,
  },
  {
    period: "2022 — 2023",
    role: "Toll Plaza Operations Associate",
    company: "NLEX Corporation",
    description:
      "Process cash and electronic (RFID) payments accurately from drivers using the roadway. Watch for safety hazards or traffic anomalies in the toll lane and report incidents to supervisors promptly. Ensure the efficient collection of toll fees and providing high-quality service to motorists.",
    technologies: ["Teller", "Cash", "RFID", "System Monitoring"],
    current: false,
  },
  {
    period: "2018 — 2022",
    role: "Freelance Front-end Developer",
    company: "Self-Employed",
    description:
      "Developing modern, responsive, and user-focused web applications using HTML5, CSS3, JavaScript, React.js, and Tailwind CSS. Dedicated to delivering fast, accessible, and high-quality interfaces that enhance user experience and support business goals.",
    technologies: ["JavaScript", "React.js", "Tailwind", "Vercel"],
    current: false,
  },
  {
    period: "2016 — 2018",
    role: "Freelance Computer Technician",
    company: "Self-Employed",
    description:
      "Provided IT support and computer maintenance services for individuals and small businesses. Diagnosed and resolved hardware, software, and network issues while performing system upgrades, OS installations, data backup and recovery, and preventive maintenance to ensure reliable system performance.",
    technologies: ["Hardware", "Software", "Networking", "Tools"],
    current: false,
  },
];

export const Experience = () => {
    return (
    <section
    id="experience"
    className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"/>
        <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Career Journey</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-white">
                    Experience that <span className="font-serif italic font-normal text-secondary-foreground"> speaks </span>
                    volumes.
                </h2>
                <p className="text-muted-foreground animate-fade-in animation-delay-200">
                    A timeline of my professional journey, showcasing my growth as a Computer Engineer and Front-End Developer through hands-on experience, 
                    continuous learning, and a passion for building modern, responsive, and user-centered web applications.
                </p>
            </div>

            {/* Timeline */}
            <div className="relative ">
                <div className=" hidden timeline-glow absolute left-0 md:left-1/2 md:block top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"/>
            
            {/* Experience Items */}
            <div className="space-y-12">
                {experiences.map((exp, idx) => (
                    <div 
                        key={idx} className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                        style={{ animationDelay: `${(idx + 1) * 100}ms`}}
                    >

                        {/* Timeline Dot */}
                        <div className="hidden absolute left-0 md:block md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                        {exp.current && (
                            <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"/>
                        )}
                        </div>

                        {/* Content */}
                        <div className={`p1-0 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                            <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                                <span className="text-sm text-primary font-medium">{exp.period}</span>
                                <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                                <p className="text-muted-foreground">{exp.company}</p>
                                <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>
                                <div className={`flex flex-warp gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : " "}`} 
                                >
                                    {exp.technologies.map((tech, techIdx) => (
                                    <span 
                                    key={techIdx} 
                                    className="flex flex-wrap px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                                    >
                                        {tech}</span>
                                ))}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    </section>
    );
};