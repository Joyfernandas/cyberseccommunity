"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Eye, MessageSquare, Bookmark, Share2 } from "lucide-react";

const featuredArticles = [
  {
    id: 1,
    title: "The Evolution of Ransomware: From WannaCry to Today's Threats",
    excerpt: "Ransomware has evolved significantly since the WannaCry attack in 2017. This article explores the technical evolution, new attack vectors, and defense strategies.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Threat Analysis",
    author: {
      name: "Dr. Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    date: "May 15, 2025",
    readTime: "12 min read",
    views: 4328,
    comments: 87
  },
  {
    id: 2,
    title: "Zero-Day Vulnerabilities: Detection, Exploitation, and Mitigation",
    excerpt: "Zero-day vulnerabilities represent some of the most dangerous security threats. Learn how they're discovered, exploited, and how organizations can protect themselves.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1034&q=80",
    category: "Vulnerability Research",
    author: {
      name: "Marcus Johnson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    date: "May 10, 2025",
    readTime: "15 min read",
    views: 3752,
    comments: 63
  },
  {
    id: 3,
    title: "Implementing NIST Cybersecurity Framework in Critical Infrastructure",
    excerpt: "The NIST Cybersecurity Framework provides essential guidelines for protecting critical infrastructure. This comprehensive guide walks through implementation steps.",
    image: "https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Compliance & Standards",
    author: {
      name: "Alicia Washington",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
    },
    date: "May 8, 2025",
    readTime: "18 min read",
    views: 2981,
    comments: 42
  },
  {
    id: 4,
    title: "Advanced Persistent Threats: Nation-State Hacking Techniques",
    excerpt: "APTs represent sophisticated, long-term hacking operations often conducted by nation-states. This analysis examines their techniques, tools, and objectives.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Threat Intelligence",
    author: {
      name: "James Rodriguez",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    date: "May 5, 2025",
    readTime: "14 min read",
    views: 3245,
    comments: 51
  }
];

export default function FeaturedArticles() {
  const [hoveredArticle, setHoveredArticle] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Main Featured Article */}
      <motion.div 
        className="lg:row-span-2 relative group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative h-[600px] rounded-xl overflow-hidden">
          <Image 
            src={featuredArticles[0].image} 
            alt={featuredArticles[0].title} 
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                <Badge variant="outline" className="text-white border-white/20">{featuredArticles[0].category}</Badge>
                <span className="text-xs text-white/80 flex items-center">
                  <Clock className="h-3 w-3 mr-1" /> 
                  {featuredArticles[0].readTime}
                </span>
              </div>
              <Link href={`/blogs/${featuredArticles[0].id}`}>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 hover:text-primary transition-colors">
                  {featuredArticles[0].title}
                </h3>
              </Link>
              <p className="text-white/80 mb-6 line-clamp-3">
                {featuredArticles[0].excerpt}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image 
                      src={featuredArticles[0].author.avatar} 
                      alt={featuredArticles[0].author.name} 
                      width={40} 
                      height={40} 
                    />
                  </div>
                  <div>
                    <p className="text-white font-medium">{featuredArticles[0].author.name}</p>
                    <p className="text-xs text-white/70">{featuredArticles[0].date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white/80">
                  <span className="text-xs flex items-center">
                    <Eye className="h-3 w-3 mr-1" /> 
                    {featuredArticles[0].views.toLocaleString()}
                  </span>
                  <span className="text-xs flex items-center">
                    <MessageSquare className="h-3 w-3 mr-1" /> 
                    {featuredArticles[0].comments}
                  </span>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:text-primary hover:bg-white/10">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:text-primary hover:bg-white/10">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Secondary Featured Articles */}
      <div className="grid grid-cols-1 gap-6">
        {featuredArticles.slice(1, 3).map((article, index) => (
          <motion.div 
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            onMouseEnter={() => setHoveredArticle(article.id)}
            onMouseLeave={() => setHoveredArticle(null)}
          >
            <Card className="overflow-hidden h-full">
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-2/5 relative h-48 md:h-auto">
                  <Image 
                    src={article.image} 
                    alt={article.title} 
                    fill
                    className={`object-cover transition-transform duration-500 ${
                      hoveredArticle === article.id ? "scale-105" : "scale-100"
                    }`}
                  />
                </div>
                <div className="md:w-3/5 p-6 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline">{article.category}</Badge>
                    <span className="text-xs text-muted-foreground flex items-center">
                      <Clock className="h-3 w-3 mr-1" /> 
                      {article.readTime}
                    </span>
                  </div>
                  <Link href={`/blogs/${article.id}`}>
                    <h3 className="text-xl font-bold mb-2 line-clamp-2 hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground line-clamp-2 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="mt-auto flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full overflow-hidden">
                        <Image 
                          src={article.author.avatar} 
                          alt={article.author.name} 
                          width={32} 
                          height={32} 
                        />
                      </div>
                      <span className="text-sm font-medium">{article.author.name}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <span className="text-xs flex items-center">
                        <Eye className="h-3 w-3 mr-1" /> 
                        {article.views.toLocaleString()}
                      </span>
                      <span className="text-xs flex items-center">
                        <MessageSquare className="h-3 w-3 mr-1" /> 
                        {article.comments}
                      </span>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Additional Featured Article */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        onMouseEnter={() => setHoveredArticle(featuredArticles[3].id)}
        onMouseLeave={() => setHoveredArticle(null)}
      >
        <Card className="overflow-hidden h-full">
          <div className="flex flex-col h-full">
            <div className="relative h-48">
              <Image 
                src={featuredArticles[3].image} 
                alt={featuredArticles[3].title} 
                fill
                className={`object-cover transition-transform duration-500 ${
                  hoveredArticle === featuredArticles[3].id ? "scale-105" : "scale-100"
                }`}
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="outline">{featuredArticles[3].category}</Badge>
                <span className="text-xs text-muted-foreground flex items-center">
                  <Clock className="h-3 w-3 mr-1" /> 
                  {featuredArticles[3].readTime}
                </span>
              </div>
              <Link href={`/blogs/${featuredArticles[3].id}`}>
                <h3 className="text-xl font-bold mb-2 line-clamp-2 hover:text-primary transition-colors">
                  {featuredArticles[3].title}
                </h3>
              </Link>
              <p className="text-muted-foreground line-clamp-3 mb-4">
                {featuredArticles[3].excerpt}
              </p>
              <div className="mt-auto flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <Image 
                      src={featuredArticles[3].author.avatar} 
                      alt={featuredArticles[3].author.name} 
                      width={32} 
                      height={32} 
                    />
                  </div>
                  <span className="text-sm font-medium">{featuredArticles[3].author.name}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <span className="text-xs flex items-center">
                    <Eye className="h-3 w-3 mr-1" /> 
                    {featuredArticles[3].views.toLocaleString()}
                  </span>
                  <span className="text-xs flex items-center">
                    <MessageSquare className="h-3 w-3 mr-1" /> 
                    {featuredArticles[3].comments}
                  </span>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}