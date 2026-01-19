import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <Link href="/" className="text-xl font-bold text-slate-100 hover:text-blue-400 transition-colors">
          Russell Chen
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#hero" className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">
            About
          </Link>
          <Link href="#skills" className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">
            Skills
          </Link>
          <Link href="#experience" className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">
            Experience
          </Link>
          <Link href="#projects" className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
}
