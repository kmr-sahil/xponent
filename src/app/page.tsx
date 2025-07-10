import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { projects, experience } from "@/constants/portfolio";

export default function Home() {
  return (
    <main className="px-4 md:px-8 py-12 mx-auto max-w-[40rem] font-sans text-[color:var(--muted)] relative overflow-x-hidden text-base">
      {/* About  */}
      <section className="bg-[color:var(--muted-foreground)] rounded-2xl px-6 py-4 mb-6">
        <h1 className="text-highlight">Sahil Kumar</h1>
        <p className="mb-8">Software Engineer</p>

        <div className="space-y-4">
          <p>
            Passionate for building software with focus on design, functionality
            and performance.
          </p>

          <p>
            Currently building <span className="text-highlight">prepai</span>,
            exploring advanced backend and ai concepts, and actively looking for
            new opportunities.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className=" py-6 mb-6 group relative">
        <h2 className="text-highlight mb-2 ml-6">Projects</h2>
        <ul className="space-y-4">
          {projects.map((project, index) => (
            <li
              key={index}
              className="bg-[color:var(--muted-foreground)] flex flex-col rounded-2xl px-6 py-4 group relative"
            >
              <a
                href={project.url}
                className="underline underline-offset-2 mb-1"
              >
                {project.name}
              </a>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Experience */}
      <section className=" py-6 mb-6 group relative">
        <h2 className="text-highlight mb-2 ml-6">Experience</h2>
        <ul className="space-y-4">
          {experience.map((job, index) => (
            <li
              key={index}
              className="bg-[color:var(--muted-foreground)] flex flex-col rounded-2xl px-6 py-4 group relative"
            >
              <div className="flex justify-between items-start w-full">
                <div className="flex flex-col mb-1">
                  <a href={job.url} className="underline underline-offset-2">
                    {job.company}
                  </a>
                </div>
                <span className="text-[11px] opacity-80 uppercase">
                  {job.date}
                </span>
              </div>
              <p>{job.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section className="bg-[color:var(--muted-foreground)] rounded-2xl p-6 mb-6 flex space-x-6">
        <p className="w-full">11.sahil.kmr@gmail.com</p>

        <Link href="mailto:sk2003311@gmail.com">
          <Mail size={18} />
        </Link>
        <Link href="https://github.com/kmr-sahil" target="_blank">
          <Github size={18} />
        </Link>
        <Link
          href="https://linkedin.com/in/sahil-kumar-5b781721b"
          target="_blank"
        >
          <Linkedin size={18} />
        </Link>
        <Link href="https://x.com/kr_sahil" target="_blank">
          <img
            src={"/x.svg"}
            alt="X"
            className="opacity-60 w-7 dark:invert-100"
          />
        </Link>
      </section>
    </main>
  );
}
