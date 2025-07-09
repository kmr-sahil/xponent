import { ExternalLink, Copy, Github, Linkedin } from "lucide-react";
import X from "../../public/x.svg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-4 md:px-8 py-12 mx-auto max-w-[40rem] font-sans text-[color:var(--muted)] relative overflow-x-hidden text-base">
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

      <section className=" py-6 mb-6 group relative">
        <h2 className="text-highlight mb-2 ml-6">Projects</h2>
        <ul className="space-y-4">
          <li className="bg-[color:var(--muted-foreground)] flex flex-col rounded-2xl px-6 py-4 group relative">
            <a
              href="https://sahilkmr.in/templates"
              className="underline underline-offset-2 mb-1"
            >
              prepai 
            </a>
            <p className="">
              [ wip ] A platform to help students take mock interviews by AI, so they get confident.
            </p>
          </li>
          <li className="bg-[color:var(--muted-foreground)] flex flex-col rounded-2xl px-6 py-4 group relative">
            <a
              href="https://getjobs.today"
              className="underline underline-offset-2 mb-1"
            >
              getjobs.today
            </a>
            <p className="">
              A job search platform where companies can post jobs and candidates
              can apply. Handled upto 10k+ users.
            </p>
          </li>

          <li className="bg-[color:var(--muted-foreground)] flex flex-col rounded-2xl px-6 py-4 group relative">
            <a
              href="https://sahilkmr.in/templates"
              className="underline underline-offset-2 mb-1"
            >
              templates
            </a>
            <p className="">
              Collection of Startups, Waitlist, Marketing, etc landing pages
              templates. Built using Next.js, Tailwind CSS, and TypeScript.
            </p>
          </li>

          <li className="bg-[color:var(--muted-foreground)] flex flex-col rounded-2xl px-6 py-4 group relative">
            <a
              href="https://getjobs.today"
              className="underline underline-offset-2 mb-1"
            >
              trustflag.in
            </a>
            <p className="">
              A platform very much like Trustpilot. ( discont. due to
              not getting enough traffic )
            </p>
          </li>
        </ul>
      </section>

      <section className="bg-[color:var(--muted-foreground)] rounded-2xl p-6 mb-6 flex space-x-6">

        <p className="w-full">11.sahil.kmr@gmail.com</p>

        <Link href="mailto:sk2003311@gmail.com">
          <Copy size={18} />
        </Link>
        <Link href="https://github.com/jobfinder456" target="_blank">
          <Github size={18} />
        </Link>
        <Link
          href="https://linkedin.com/in/sahil-kumar-5b781721b"
          target="_blank"
        >
          <Linkedin size={18} />
        </Link>
        <Link
          href="https://linkedin.com/in/sahil-kumar-5b781721b"
          target="_blank"
        >
          <img src={"/x.svg"} alt="X" className="opacity-60 w-7 dark:invert-100" />
        </Link>
      </section>
    </main>
  );
}
