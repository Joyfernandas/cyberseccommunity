"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, Search, Filter, ArrowUpDown, Eye, MessageSquare, Bookmark, Tag } from "lucide-react";

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "Understanding Buffer Overflow Attacks: A Comprehensive Guide",
    excerpt: "Buffer overflow attacks remain one of the most common and dangerous vulnerabilities in software. This guide explains how they work and how to prevent them.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Vulnerability Research",
    tags: ["Buffer Overflow", "Memory Safety", "Exploit Development"],
    author: {
      name: "Alex Chen",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    date: "May 15, 2025",
    readTime: "12 min read",
    views: 4328,
    comments: 87
  },
  {
    id: 2,
    title: "Implementing OAuth 2.0: Best Practices for Secure Authentication",
    excerpt: "OAuth 2.0 is the industry standard for authorization. Learn how to implement it correctly to secure your applications and APIs.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Authentication",
    tags: ["OAuth", "API Security", "Authentication"],
    author: {
      name: "Samantha Wong",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    date: "May 12, 2025",
    readTime: "15 min read",
    views: 3752,
    comments: 63
  },
  {
    id: 3,
    title: "Kubernetes Security: Protecting Your Container Orchestration",
    excerpt: "As Kubernetes adoption grows, so do the security challenges. This article covers essential security practices for your Kubernetes clusters.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    category: "Cloud Security",
    tags: ["Kubernetes", "Container Security", "DevSecOps"],
    author: {
      name: "Michael Johnson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    date: "May 10, 2025",
    readTime: "18 min read",
    views: 2981,
    comments: 42
  },
  {
    id: 4,
    title: "Reverse Engineering Malware: Tools and Techniques",
    excerpt: "Reverse engineering is a critical skill for malware analysis. This guide introduces the essential tools and methodologies for effective malware analysis.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Malware Analysis",
    tags: ["Reverse Engineering", "Malware", "Threat Analysis"],
    author: {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    date: "May 8, 2025",
    readTime: "20 min read",
    views: 3245,
    comments: 51
  },
  {
    id: 5,
    title: "Web Application Firewall (WAF) Bypass Techniques",
    excerpt: "Web Application Firewalls are a common security control, but they can be bypassed. Learn about common evasion techniques and how to strengthen your defenses.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1034&q=80",
    category: "Web Security",
    tags: ["WAF", "Bypass", "Web Security"],
    author: {
      name: "Emily Rodriguez",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
    },
    date: "May 5, 2025",
    readTime: "14 min read",
    views: 2876,
    comments: 39
  },
  {
    id: 6,
    title: "Secure Code Review: Finding Vulnerabilities Before They Reach Production",
    excerpt: "Code review is a critical security practice. This article provides a systematic approach to identifying security flaws during the review process.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Secure Coding",
    tags: ["Code Review", "SAST", "Secure Development"],
    author: {
      name: "James Wilson",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    date: "May 3, 2025",
    readTime: "16 min read",
    views: 2543,
    comments: 47
  },
  {
    id: 7,
    title: "Threat Hunting with OSINT: Techniques for Proactive Security",
    excerpt: "Open Source Intelligence (OSINT) is a powerful tool for threat hunting. Learn how to use publicly available information to identify potential threats.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Threat Intelligence",
    tags: ["OSINT", "Threat Hunting", "Intelligence"],
    author: {
      name: "Olivia Martinez",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
    },
    date: "May 1, 2025",
    readTime: "13 min read",
    views: 2187,
    comments: 35
  },
  {
    id: 8,
    title: "Hardware Security Modules (HSMs): Protecting Cryptographic Keys",
    excerpt: "HSMs provide the highest level of security for cryptographic operations. This guide explains how they work and when to use them in your security architecture.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Cryptography",
    tags: ["HSM", "Cryptography", "Key Management"],
    author: {
      name: "Robert Chang",
      avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    date: "April 28, 2025",
    readTime: "17 min read",
    views: 1932,
    comments: 29
  }
];

// Categories for filtering
const categories = [
  "All Categories",
  "Vulnerability Research",
  "Authentication",
  "Cloud Security",
  "Malware Analysis",
  "Web Security",
  "Secure Coding",
  "Threat Intelligence",
  "Cryptography"
];

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("latest");

  // Filter and sort blogs
  const filteredBlogs = blogPosts
    .filter(blog => {
      // Filter by search query
      const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Filter by category
      const matchesCategory = selectedCategory === "All Categories" || blog.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      // Sort by selected option
      if (sortBy === "latest") {
        // Assuming newer posts have higher IDs
        return b.id - a.id;
      } else if (sortBy === "popular") {
        return b.views - a.views;
      } else if (sortBy === "comments") {
        return b.comments - a.comments;
      }
      return 0;
    });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Cybersecurity Blog</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore in-depth articles, tutorials, and analyses on the latest cybersecurity topics from experts and community members.
        </p>
      </div>

      {/* Filters and Search */}
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input 
            placeholder="Search articles..." 
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-4">
          <div className="w-48">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="w-40">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">Latest</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="comments">Most Discussed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Blog Categories Tabs */}
      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="w-full max-w-md mx-auto flex justify-between overflow-x-auto">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
          <TabsTrigger value="analysis">Analysis</TabsTrigger>
          <TabsTrigger value="research">Research</TabsTrigger>
          <TabsTrigger value="opinion">Opinion</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Blog Posts Grid */}
      {filteredBlogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * (index % 3) }}
            >
              <Card className="overflow-hidden h-full flex flex-col group">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground flex items-center">
                      <Clock className="h-3 w-3 mr-1" /> 
                      {post.readTime}
                    </span>
                  </div>
                  <Link href={`/blogs/${post.id}`}>
                    <CardTitle className="mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </Link>
                  <CardDescription className="line-clamp-3 mb-4">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="flex items-center gap-1 text-xs">
                        <Tag className="h-3 w-3" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="px-6 py-4 border-t mt-auto">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full overflow-hidden">
                        <Image 
                          src={post.author.avatar} 
                          alt={post.author.name} 
                          width={32} 
                          height={32} 
                        />
                      </div>
                      <span className="text-sm font-medium">{post.author.name}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <span className="text-xs flex items-center">
                        <Eye className="h-3 w-3 mr-1" /> 
                        {post.views.toLocaleString()}
                      </span>
                      <span className="text-xs flex items-center">
                        <MessageSquare className="h-3 w-3 mr-1" /> 
                        {post.comments}
                      </span>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">No articles found</h3>
          <p className="text-muted-foreground mb-6">Try adjusting your search or filter criteria</p>
          <Button onClick={() => {
            setSearchQuery("");
            setSelectedCategory("All Categories");
          }}>
            Reset Filters
          </Button>
        </div>
      )}

      {/* Pagination */}
      {filteredBlogs.length > 0 && (
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" disabled>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </Button>
            <Button variant="outline" className="w-10 h-10 p-0 bg-primary text-primary-foreground">1</Button>
            <Button variant="outline" className="w-10 h-10 p-0">2</Button>
            <Button variant="outline" className="w-10 h-10 p-0">3</Button>
            <Button variant="outline" className="w-10 h-10 p-0">4</Button>
            <Button variant="outline" className="w-10 h-10 p-0">5</Button>
            <Button variant="outline" size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}