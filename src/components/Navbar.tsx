export default function Navbar() {
  return (
    <header className="my-10 w-full py-5">
      <nav className="flex items-center space-x-8">
        <a href="/" className="font-semibold text-lg">
          <img src="/lynix.png" alt="lynix" className="h-10 w-10 mb-1.5" />
        </a>
        <a href="/projects" className="font-semibold text-lg hover:text-cyan-600 transition-colors">Projects</a>
        <a href="/blog" className="font-semibold text-lg hover:text-cyan-600 transition-colors">Blog</a>
        <a href="/events" className="font-semibold text-lg hover:text-cyan-600 transition-colors items-center hidden">Events
          <i className="fa fa-circle text-xs ml-2 text-cyan-700 animate-pulse" aria-hidden="true"></i>
        </a>
        <a href="/about" className="font-semibold text-lg hover:text-cyan-600 transition-colors">About</a>
        <a href="/contact" className="font-semibold text-lg hover:text-cyan-600 transition-colors">Contact</a>
      </nav>
    </header>
  )
}