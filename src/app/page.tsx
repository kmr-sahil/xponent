import { ExternalLink, Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" px-8 py-12 mx-auto font-sans text-justify text-gray-600 relative overflow-x-hidden">
      <h1 className="text-[26.88px] font-bold ">Sahil Kumar</h1>
      <p className="text-gray-400/80 font-semibold mb-8">
        Software Engineer & Developer based in India
      </p>

      <section className="space-y-4">
        <p className="">
          I am a{" "}
          <span className="text-gray-400/80 font-semibold">
            software engineer
          </span>{" "}
          with hands-on experience building scalable applications. I’ve worked
          across frontend and backend using technologies like{" "}
          <span className="text-gray-400/80 font-semibold">
            Next.js, PostgreSQL, and Express.js
          </span>
          .
        </p>

        <p className="">
          Previously at{" "}
          <span className="text-gray-400/80 font-semibold">Lamarr</span>, I led
          development for products like a restaurant POS and learning management
          system, delivering faster time to market and improving client
          satisfaction by 30%.
        </p>

        <p className="">
          At <span className="text-gray-400/80 font-semibold">PaliPoint</span>,
          I built a production-grade MVP that helped increase funding prospects
          by 75%.
        </p>

        <p className="">
          I began my journey at{" "}
          <span className="text-gray-400/80 font-semibold">DailyDumbbell</span>{" "}
          as a Design Engineer, boosting user engagement and implementing a
          fresh UI/UX for both web and app platforms.
        </p>
      </section>

      {/* <section className="mt-10">
        <h2 className="text-lg text-gray-400/80 font-semibold mb-2">Skills</h2>
        <p className="">
          Languages: <span className="text-gray-400/80 font-semibold">Java, JavaScript, TypeScript, HTML, CSS</span><br />
          Frameworks: <span className="text-gray-400/80 font-semibold">React.js, Next.js, Tailwind, Node.js, Express</span><br />
          Tools: <span className="text-gray-400/80 font-semibold">Git, AWS, Docker, Linux, Figma</span><br />
          DBs: <span className="text-gray-400/80 font-semibold">PostgreSQL, MongoDB</span>
        </p>
      </section> */}

      <section className="mt-10 group relative">
        <h2 className="text-lg text-gray-400/80 font-semibold mb-2">
          Projects
        </h2>
        <ul className="list-disc list-inside  space-y-2">
          <li className="relative hover:text-gray-300">
            Get Jobs Today
            <span className="absolute top-0 left-full ml-2 opacity-0 group-hover:opacity-100 transition">
              <Link
                href="https://getjobs.today"
                target="_blank"
                className="flex items-center gap-1 text-gray-400/80 font-semibold hover:text-gray-400/80"
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
                className="flex items-center gap-1 text-gray-400/80 font-semibold hover:text-gray-400/80"
              >
                trustflag.in <ExternalLink size={14} />
              </Link>
            </span>
          </li>
        </ul>
      </section>

      <section className="mt-10 flex space-x-6 ">
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
