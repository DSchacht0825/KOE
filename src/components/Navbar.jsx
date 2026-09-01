const links = [
  { label: "Our Work", href: "#offerings" },
  { label: "Our Story", href: "#story" },
  { label: "Join Us", href: "#gatherings" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-indigo-900/10 bg-paper/90 backdrop-blur dark:border-indigo-200/10 dark:bg-paper-dark/90">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a
          href="#top"
          className="font-serif text-xl tracking-wide text-indigo-950 dark:text-indigo-200"
        >
          声 Koe Productions
        </a>
        <ul className="hidden gap-8 text-sm font-medium tracking-wide text-indigo-900/80 md:flex dark:text-indigo-200/80">
          {links.map((link) => (
            <li key={link.href}>
              <a className="transition hover:text-wood-500" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://calendly.com/ctianarice/koe-discovery-call"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-indigo-900 px-5 py-2 text-sm font-medium text-paper transition hover:bg-wood-700"
        >
          Let's Talk!
        </a>
      </nav>
    </header>
  );
}
