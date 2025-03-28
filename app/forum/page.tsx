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
import { 
  Clock, 
  Search, 
  Filter, 
  MessageSquare, 
  Eye, 
  ThumbsUp, 
  User, 
  Users, 
  Lock, 
  PlusCircle,
  ArrowUpRight
} from "lucide-react";

// Mock data for forum discussions
const forumDiscussions = [
  {
    id: 1,
    title: "How to properly implement CSRF protection in a React application?",
    category: "Web Security",
    author: {
      name: "Alex Chen",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      role: "Security Engineer"
    },
    date: "2 hours ago",
    replies: 8,
    views: 124,
    likes: 15,
    isLocked: false,
    isPinned: true,
    lastReply: {
      author: "Jamie Wilson",
      date: "15 minutes ago"
    },
    excerpt: "I'm building a React application with a Node.js backend and I'm looking for the best approach to implement CSRF protection. I've read about using the double submit cookie pattern, but I'm not sure if that's the best approach for a SPA. Any recommendations?"
  },
  {
    id: 2,
    title: "Detecting and preventing XSS in user-generated content",
    category: "Vulnerability Research",
    author: {
      name: "Samantha Wong",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      role: "Security Researcher"
    },
    date: "5 hours ago",
    replies: 12,
    views: 187,
    likes: 23,
    isLocked: false,
    isPinned: false,
    lastReply: {
      author: "David Kim",
      date: "30 minutes ago"
    },
    excerpt: "We're building a platform that allows users to submit content with rich text formatting. What are the best practices for preventing XSS attacks while still allowing some HTML tags? Are there any libraries you recommend for sanitizing user input?"
  },
  {
    id: 3,
    title: "Best practices for securing AWS Lambda functions",
    category: "Cloud Security",
    author: {
      name: "Michael Johnson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      role: "Cloud Security Architect"
    },
    date: "8 hours ago",
    replies: 6,
    views: 142,
    likes: 18,
    isLocked: false,
    isPinned: false,
    lastReply: {
      author: "Emily Rodriguez",
      date: "1 hour ago"
    },
    excerpt: "I'm working on a serverless application using AWS Lambda and I want to ensure I'm following security best practices. Specifically, I'm concerned about IAM roles, environment variables, and dependency vulnerabilities. What approaches do you recommend?"
  },
  {
    id: 4,
    title: "Implementing proper authentication for a mobile app",
    category: "Mobile Security",
    author: {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      role: "Mobile Developer"
    },
    date: "12 hours ago",
    replies: 9,
    views: 156,
    likes: 12,
    isLocked: false,
    isPinned: false,
    lastReply: {
      author: "Alex Chen",
      date: "2 hours ago"
    },
    excerpt: "I'm developing a mobile app that requires user authentication. I'm considering using OAuth 2.0 with PKCE, but I'm not sure if that's the best approach. What are the security considerations for mobile authentication, and are there any best practices I should follow?"
  },
  {
    id: 5,
    title: "How to properly secure API keys in a JavaScript application?",
    category: "API Security",
    author: {
      name: "Emily Rodriguez",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      role: "Frontend Developer"
    },
    date: "1 day ago",
    replies: 14,
    views: 203,
    likes: 27,
    isLocked: false,
    isPinned: false,
    lastReply: {
      author: "Michael Johnson",
      date: "3 hours ago"
    },
    excerpt: "I'm building a JavaScript application that needs to use several third-party APIs. I'm concerned about how to properly secure the API keys. I know they shouldn't be included directly in the client-side code, but what's the best approach for a purely frontend application?"
  },
  {
    id: 6,
    title: "Securing Docker containers in production",
    category: "Container Security",
    author: {
      name: "James Wilson",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      role: "DevOps Engineer"
    },
    date: "2 days ago",
    replies: 11,
    views: 178,
    likes: 21,
    isLocked: true,
    isPinned: false,
    lastReply: {
      author: "Samantha Wong",
      date: "6 hours ago"
    },
    excerpt: "We're deploying our application using Docker containers in a production environment. I'm looking for comprehensive security guidelines for hardening our containers. Specifically, I'm interested in runtime security, image scanning, and privilege management."
  },
  {
    id: 7,
    title: "Implementing a secure password reset flow",
    category: "Authentication",
    author: {
      name: "Olivia Martinez",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
      role: "Security Consultant"
    },
    date: "3 days ago",
    replies: 7,
    views: 132,
    likes: 16,
    isLocked: false,
    isPinned: false,
    lastReply: {
      author: "James Wilson",
      date: "1 day ago"
    },
    excerpt: "I'm designing a password reset flow for our application and want to ensure it's secure. I'm particularly concerned about token expiration, email security, and preventing account enumeration. What are the current best practices for implementing a secure password reset mechanism?"
  },
  {
    id: 8,
    title: "Securing GraphQL APIs against common vulnerabilities",
    category: "API Security",
    author: {
      name: "Robert Chang",
      avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      role: "Backend Developer"
    },
    date: "4 days ago",
    replies: 5,
    views: 119,
    likes: 14,
    isLocked: false,
    isPinned: false,
    lastReply: {
      author: "Olivia Martinez",
      date: "2 days ago"
    },
    excerpt: "We're implementing a GraphQL API for our application and I'm researching security best practices. I'm particularly concerned about query complexity attacks, introspection risks, and proper authorization. What security measures should we implement to protect our GraphQL API?"
  }
];

// Categories for filtering
const categories = [
  "All Categories",
  "Web Security",
  "Vulnerability Research",
  "Cloud Security",
  "Mobile Security",
  "API Security",
  "Container Security",
  "Authentication",
  "Network Security"
];

export default function ForumPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [activeTab, setActiveTab] = useState("all");

  // Filter discussions
  const filteredDiscussions = forumDiscussions
    .filter(discussion => {
      // Filter by search query
      const matchesSearch = discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           discussion.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Filter by category
      const matchesCategory = selectedCategory === "All Categories" || discussion.category === selectedCategory;
      
      // Filter by tab
      const matchesTab = 
        activeTab === "all" || 
        (activeTab === "pinned" && discussion.isPinned) ||
        (activeTab === "locked" && discussion.isLocked) ||
        (activeTab === "unanswered" && discussion.replies === 0);
      
      return matchesSearch && matchesCategory && matchesTab;
    });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Community Forum</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Join discussions with cybersecurity professionals, ask questions, and share your knowledge.
        </p>
      </div>

      {/* Filters and Search */}
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input 
            placeholder="Search discussions..." 
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
          <Button className="gap-2">
            <PlusCircle className="h-4 w-4" />
            New Discussion
          </Button>
        </div>
      </div>

      {/* Forum Tabs */}
      <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveTab}>
        <TabsList className="w-full max-w-md mx-auto flex justify-between overflow-x-auto">
          <TabsTrigger value="all">All Discussions</TabsTrigger>
          <TabsTrigger value="pinned">Pinned</TabsTrigger>
          <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
          <TabsTrigger value="locked">Locked</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Forum Discussions */}
      {filteredDiscussions.length > 0 ? (
        <div className="space-y-4">
          {filteredDiscussions.map((discussion, index) => (
            <motion.div
              key={discussion.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 * index }}
            >
              <Card className={`overflow-hidden transition-all hover:border-primary ${discussion.isPinned ? 'border-primary/50 bg-primary/5' : ''}`}>
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="hidden md:block">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <Image 
                          src={discussion.author.avatar} 
                          alt={discussion.author.name} 
                          width={48} 
                          height={48} 
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {discussion.isPinned && (
                          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                            Pinned
                          </Badge>
                        )}
                        {discussion.isLocked && (
                          <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/20">
                            <Lock className="h-3 w-3 mr-1" />
                            Locked
                          </Badge>
                        )}
                        <Badge variant="outline">{discussion.category}</Badge>
                      </div>
                      <Link href={`/forum/${discussion.id}`}>
                        <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors flex items-center gap-2">
                          {discussion.title}
                          <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                      </Link>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {discussion.excerpt}
                      </p>
                      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{discussion.author.name}</span>
                          <span className="text-xs bg-muted px-1.5 py-0.5 rounded ml-1">
                            {discussion.author.role}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{discussion.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-4 w-4" />
                          <span>{discussion.replies} replies</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span>{discussion.views} views</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="h-4 w-4" />
                          <span>{discussion.likes} likes</span>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block text-right">
                      <div className="bg-muted p-3 rounded-lg">
                        <p className="text-sm font-medium">Last reply</p>
                        <p className="text-xs text-muted-foreground">{discussion.lastReply.author}</p>
                        <p className="text-xs text-muted-foreground">{discussion.lastReply.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">No discussions found</h3>
          <p className="text-muted-foreground mb-6">Try adjusting your search or filter criteria</p>
          <Button onClick={() => {
            setSearchQuery("");
            setSelectedCategory("All Categories");
            setActiveTab("all");
          }}>
            Reset Filters
          </Button>
        </div>
      )}

      {/* Pagination */}
      {filteredDiscussions.length > 0 && (
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