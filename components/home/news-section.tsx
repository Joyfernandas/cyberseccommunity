"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { Clock, ExternalLink, RefreshCw } from "lucide-react";

// Mock data for news sources
const newsItems = {
  "hacker-news": [
    {
      id: "hn1",
      title: "Critical Vulnerability Found in Popular JavaScript Library",
      url: "https://example.com/news/1",
      source: "Hacker News",
      time: "2 hours ago",
      points: 342,
      comments: 127,
      excerpt: "Researchers have discovered a critical vulnerability in a widely-used JavaScript library that could allow attackers to execute arbitrary code. The library, used by millions of websites, has released an emergency patch."
    },
    {
      id: "hn2",
      title: "New Open Source Tool for Network Traffic Analysis Released",
      url: "https://example.com/news/2",
      source: "Hacker News",
      time: "5 hours ago",
      points: 218,
      comments: 43,
      excerpt: "A new open-source tool for analyzing network traffic has been released, offering advanced capabilities for security researchers and network administrators. The tool uses machine learning to detect anomalies."
    },
    {
      id: "hn3",
      title: "Major Cloud Provider Experiences Global Outage",
      url: "https://example.com/news/3",
      source: "Hacker News",
      time: "8 hours ago",
      points: 587,
      comments: 231,
      excerpt: "A major cloud service provider is currently experiencing a global outage affecting thousands of websites and services. The company has acknowledged the issue and is working on a resolution."
    },
    {
      id: "hn4",
      title: "Researchers Demonstrate New Side-Channel Attack on CPUs",
      url: "https://example.com/news/4",
      source: "Hacker News",
      time: "12 hours ago",
      points: 176,
      comments: 58,
      excerpt: "Security researchers have demonstrated a new side-channel attack that can extract sensitive data from modern CPUs. The attack exploits a previously unknown vulnerability in the way processors handle speculative execution."
    }
  ],
  "bleeping-computer": [
    {
      id: "bc1",
      title: "Ransomware Group Claims Responsibility for Hospital System Attack",
      url: "https://example.com/news/5",
      source: "BleepingComputer",
      time: "3 hours ago",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      excerpt: "A notorious ransomware group has claimed responsibility for the cyberattack on a major hospital system that has disrupted operations across multiple facilities. The group is demanding a $20 million ransom."
    },
    {
      id: "bc2",
      title: "Microsoft Releases Emergency Patch for Windows Zero-Day",
      url: "https://example.com/news/6",
      source: "BleepingComputer",
      time: "6 hours ago",
      image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80",
      excerpt: "Microsoft has released an emergency out-of-band security update to address a critical zero-day vulnerability in Windows that is being actively exploited in the wild. Users are urged to update immediately."
    },
    {
      id: "bc3",
      title: "New Phishing Campaign Targets Financial Institutions",
      url: "https://example.com/news/7",
      source: "BleepingComputer",
      time: "9 hours ago",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      excerpt: "A sophisticated phishing campaign is targeting employees at major financial institutions with convincing emails that appear to come from trusted partners. The campaign uses advanced evasion techniques to bypass security filters."
    },
    {
      id: "bc4",
      title: "Critical Infrastructure Organizations Warned of Increased Cyber Threats",
      url: "https://example.com/news/8",
      source: "BleepingComputer",
      time: "14 hours ago",
      image: "https://images.unsplash.com/photo-1473621038790-b778b4750efe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      excerpt: "Government agencies have issued an alert warning critical infrastructure organizations about increased cyber threats from state-sponsored actors. The advisory includes specific indicators of compromise and mitigation strategies."
    }
  ]
};

export default function NewsSection() {
  const [activeTab, setActiveTab] = useState("hacker-news");
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1500);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <Tabs defaultValue="hacker-news" onValueChange={setActiveTab} className="w-full max-w-md">
          <TabsList>
            <TabsTrigger value="hacker-news">Hacker News</TabsTrigger>
            <TabsTrigger value="bleeping-computer">BleepingComputer</TabsTrigger>
          </TabsList>
        </Tabs>
        <Button 
          variant="outline" 
          size="sm" 
          className="gap-2"
          onClick={handleRefresh}
          disabled={isRefreshing}
        >
          <RefreshCw className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
          Refresh
        </Button>
      </div>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  {activeTab === "bleeping-computer" && (
                    <div className="md:w-1/4 bg-muted">
                      <Skeleton className="h-48 md:h-full w-full" />
                    </div>
                  )}
                  <div className={`p-6 ${activeTab === "bleeping-computer" ? "md:w-3/4" : "w-full"}`}>
                    <div className="flex items-center gap-2 mb-3">
                      <Skeleton className="h-5 w-20" />
                      <Skeleton className="h-5 w-24" />
                    </div>
                    <Skeleton className="h-7 w-full mb-3" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-5/6 mb-2" />
                    <Skeleton className="h-4 w-4/6" />
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {newsItems[activeTab as keyof typeof newsItems].map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:border-primary transition-colors">
                  <div className="flex flex-col md:flex-row">
                    {activeTab === "bleeping-computer" && item.image && (
                      <div className="md:w-1/4 relative h-48 md:h-auto">
                        <Image 
                          src={item.image} 
                          alt={item.title} 
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className={`p-6 ${activeTab === "bleeping-computer" && item.image ? "md:w-3/4" : "w-full"}`}>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline">{item.source}</Badge>
                        <span className="text-xs text-muted-foreground flex items-center">
                          <Clock className="h-3 w-3 mr-1" /> 
                          {item.time}
                        </span>
                        {activeTab === "hacker-news" && (
                          <Badge variant="secondary" className="text-xs">
                            {item.points} points
                          </Badge>
                        )}
                      </div>
                      <a 
                        href={item.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                          {item.title}
                          <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                      </a>
                      <p className="text-muted-foreground mb-4">
                        {item.excerpt}
                      </p>
                      <div className="flex justify-between items-center">
                        <Button variant="outline" size="sm" asChild>
                          <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            Read Full Article
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </Button>
                        {activeTab === "hacker-news" && (
                          <span className="text-sm text-muted-foreground">
                            {item.comments} comments
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}