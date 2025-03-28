import Link from "next/link";
import { Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">CyberSecHub</span>
            </div>
            <p className="text-muted-foreground">
              A secure, fast & interactive cybersecurity blog with the latest news and community articles.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
              <li><Link href="/blogs" className="text-muted-foreground hover:text-foreground transition-colors">Blogs</Link></li>
              <li><Link href="/news" className="text-muted-foreground hover:text-foreground transition-colors">News</Link></li>
              <li><Link href="/forum" className="text-muted-foreground hover:text-foreground transition-colors">Forum</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/resources/guides" className="text-muted-foreground hover:text-foreground transition-colors">Cybersecurity Guides</Link></li>
              <li><Link href="/resources/tools" className="text-muted-foreground hover:text-foreground transition-colors">Tools & Resources</Link></li>
              <li><Link href="/resources/learning" className="text-muted-foreground hover:text-foreground transition-colors">Learning Paths</Link></li>
              <li><Link href="/resources/ctf" className="text-muted-foreground hover:text-foreground transition-colors">CTF Challenges</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</Link></li>
              <li><a href="https://twitter.com/cybersechub" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">Twitter</a></li>
              <li><a href="https://github.com/cybersechub" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">GitHub</a></li>
              <li><a href="https://discord.gg/cybersechub" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">Discord</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CyberSecHub. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}