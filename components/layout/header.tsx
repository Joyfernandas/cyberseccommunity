"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { 
  Shield, 
  Menu, 
  X, 
  Search, 
  Bell, 
  User,
  LogIn
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const mainNavItems = [
  { title: "Home", href: "/" },
  { title: "Blogs", href: "/blogs" },
  { title: "News", href: "/news" },
  { title: "Forum", href: "/forum" },
  { title: "About", href: "/about" },
];

const resourcesItems = [
  {
    title: "Cybersecurity Guides",
    href: "/resources/guides",
    description: "Comprehensive guides on various cybersecurity topics",
  },
  {
    title: "Tools & Resources",
    href: "/resources/tools",
    description: "Curated list of cybersecurity tools and resources",
  },
  {
    title: "Learning Paths",
    href: "/resources/learning",
    description: "Structured learning paths for cybersecurity professionals",
  },
  {
    title: "CTF Challenges",
    href: "/resources/ctf",
    description: "Practice your skills with Capture The Flag challenges",
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-200",
      isScrolled 
        ? "bg-background/80 backdrop-blur-md border-b shadow-sm" 
        : "bg-background"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">CyberSecHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                {mainNavItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink 
                        className={navigationMenuTriggerStyle()}
                        active={pathname === item.href}
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {resourcesItems.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <ModeToggle />
              <Button variant="outline" className="flex items-center gap-2">
                <LogIn className="h-4 w-4" />
                <span>Login</span>
              </Button>
              <Button>Sign Up</Button>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden">
            <ModeToggle />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {mainNavItems.map((item) => (
              <Link 
                key={item.title} 
                href={item.href}
                className={cn(
                  "block rounded-md px-3 py-2 text-base font-medium",
                  pathname === item.href
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-accent hover:text-accent-foreground"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <div className="pt-4 pb-3 border-t">
              <div className="flex items-center px-3">
                <div className="flex-shrink-0">
                  <User className="h-10 w-10 rounded-full bg-primary/10 p-2" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium">Account</div>
                  <div className="text-sm text-muted-foreground">Sign in to access all features</div>
                </div>
              </div>
              <div className="mt-3 space-y-1 px-2">
                <Button variant="outline" className="w-full justify-start" onClick={() => setIsMenuOpen(false)}>
                  <LogIn className="mr-2 h-4 w-4" />
                  Login
                </Button>
                <Button className="w-full justify-start" onClick={() => setIsMenuOpen(false)}>
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}