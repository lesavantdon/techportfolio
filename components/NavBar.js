import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react'; // Make sure to import the icons

export default function NavBar() {
  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-10 shadow-md">
      <ul className="flex space-x-4 text-white">
        <li>
          <Link href="/" className="hover:text-gray-400">Home</Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-400">About Me</Link>
        </li>
        <li>
          <Link href="/resume" className="hover:text-gray-400">Resume</Link>
        </li>
        <li>
          <Link href="/jobHistory" className="hover:text-gray-400">Job History</Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-gray-400">Projects</Link>
        </li>
        <li>
          <a 
            href="https://github.com/lesavantdon" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 hover:text-gray-400 no-underline"
          >
            <Github size={20} /> GitHub
          </a>
        </li>
        <li>
          <a 
            href="https://linkedin.com/in/lesavantdon" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 hover:text-gray-400 no-underline"
          >
            <Linkedin size={20} /> LinkedIn
          </a>
        </li>
      </ul>
    </nav>
  );
}
