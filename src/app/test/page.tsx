import { ThemeToggle } from "@/components/toggle";

export default function Home() {
  return (
    <div className="w-full container p-4 mx-auto">
      <div className="py-20 flex flex-col items-center justify-center">
        <h1 className="text-5xl text-center text-primary font-bold">
          Next Themes + Tailwind Dark Mode
        </h1>
        <p className="italic text-2xl">with app-dir</p>
        <p className="text-[color:var(--text-primary)]">
          This will change with theme.
        </p>

        <h1 className="text-[color:var(--accent)]">Accent heading</h1>

        <small className="text-[color:var(--muted)]">Muted text</small>

        <ThemeToggle />
      </div>
    </div>
  );
}
