import Image from "next/image";
import { AnchorHTMLAttributes, PropsWithChildren } from "react";

export default function Home() {
  return (
    <main
      className={
        "flex flex-col min-h-screen w-100vw bg-gif bg-no-repeat bg-cover"
      }
    >
      <nav
        className="nav group flex justify-between items-center w-full h-20 p-8 pr-16 rounded-br-full border-b-2 border-slate-600
        shadow-xl bg-black bg-opacity-50
        hover:border-b-2 hover:border-pink-400 transition-all duration-150 ease-in-out"
      >
        <div className="flex items-center gap-4">
          <Image
            src="/profile-picture.png"
            className="rounded-full border border-slate-600 group-hover:border-teal-400"
            width={60}
            height={60}
            alt="Profile picture"
          />
          <span className="name uppercase text-2xl font-medium text-slate-600 group-hover:text-teal-400">
            Johnny Labedzki
          </span>
        </div>
        <div className="flex gap-1">
          <NavButton>Home</NavButton>
          <NavButton>About</NavButton>
          <NavButton>Projects</NavButton>
          <NavButton>Contact</NavButton>
        </div>
      </nav>
      <aside className="absolute top-1/2 flex flex-col gap-3">
        <SideLink href="https://github.com/jlabedzki">github</SideLink>
        <SideLink href="https://linkedin.com/in/johnny-labedzki">
          linkedin
        </SideLink>
        <SideLink href="/resume">resume</SideLink>
      </aside>
    </main>
  );
}

function NavButton({ children }: PropsWithChildren) {
  return (
    <button className="btn btn-ghost rounded-sm text-xl uppercase text-slate-600 group-hover:text-teal-400 hover:border-b-4 hover:border-b-teal-400">
      {children}
    </button>
  );
}

function SideLink({
  children,
  href,
  ...rest
}: PropsWithChildren & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className="text-2xl uppercase text-slate-600 group-hover:text-teal-400"
      href={href}
      {...rest}
    >
      {children}
    </a>
  );
}
