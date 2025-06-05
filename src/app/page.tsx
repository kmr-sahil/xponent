import { ExternalLink, Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-8 py-12 mx-auto max-w-3xl font-sans text-justify text-[color:var(--muted)] relative overflow-x-hidden text-[15px]">
      <section className="bg-[color:var(--text-background)] border-[1px] border-[color:var(--muted-foreground)] rounded-2xl p-6 mb-6">
        <h1 className="text-[16px] font-bold text-[color:var(--muted)]">Sahil Kumar</h1>
        <p className="font-semibold mb-8 text-[color:var(--text-primary)]">
          Software Engineer & Developer based in India
        </p>

        <div className="space-y-4">
          <p>
            I am a{" "}
            <span className="text-[color:var(--text-primary)]">
              software engineer
            </span>{" "}
            with hands-on experience building scalable applications. I’ve worked
            across frontend and backend using technologies like{" "}
            <span className="text-[color:var(--text-primary)]">
              Next.js, PostgreSQL, and Express.js
            </span>
            .
          </p>

          <p>
            Previously at{" "}
            <span className="text-[color:var(--text-primary)]">
              Lamarr
            </span>
            , I led development for products like a restaurant POS and learning
            management system, delivering faster time to market and improving
            client satisfaction by 30%.
          </p>

          <p>
            At{" "}
            <span className="text-[color:var(--text-primary)]">
              PaliPoint
            </span>
            , I built a production-grade MVP that helped increase funding
            prospects by 75%.
          </p>

          <p>
            I began my journey at{" "}
            <span className="text-[color:var(--text-primary)]">
              DailyDumbbell
            </span>{" "}
            as a Design Engineer, boosting user engagement and implementing a
            fresh UI/UX for both web and app platforms.
          </p>
        </div>
      </section>

      <section className="bg-[color:var(--text-background)] border-[1px] border-[color:var(--muted-foreground)] rounded-2xl p-6 mb-6 group relative">
        <h2 className="text-[16px] text-[color:var(--text-primary)] mb-2">
          Projects
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li className="relative hover:text-gray-300">
            Get Jobs Today
            <span className="absolute top-0 left-full ml-2 opacity-0 group-hover:opacity-100 transition">
              <Link
                href="https://getjobs.today"
                target="_blank"
                className="flex items-center gap-1 text-[color:var(--text-primary)] hover:text-[color:var(--text-primary)]"
              >
                getjobs.today <ExternalLink size={14} />
              </Link>
            </span>
          </li>
          <li className="relative hover:text-gray-300">
            Trustflag.in – Online review platform (wip)
            <span className="absolute top-0 left-full ml-2 opacity-0 group-hover:opacity-100 transition">
              <Link
                href="https://getjobs.today"
                target="_blank"
                className="flex items-center gap-1 text-[color:var(--text-primary)] hover:text-[color:var(--text-primary)]"
              >
                trustflag.in <ExternalLink size={14} />
              </Link>
            </span>
          </li>
        </ul>
      </section>

      <section className="bg-[color:var(--text-background)] border-[1px] border-[color:var(--muted-foreground)] rounded-2xl p-6 mb-6 flex space-x-6">
        <Link href="mailto:sk2003311@gmail.com">
          <Mail size={18} />
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
      </section>
    </main>
  );
}
