"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ShieldAlert, 
  Zap, 
  Lock, 
  Cloud, 
  Code, 
  Database, 
  Smartphone, 
  Network, 
  Bot, 
  FileCode, 
  ArrowRight 
} from "lucide-react";

const trendingTopics = [
  {
    id: 1,
    title: "Ransomware",
    icon: ShieldAlert,
    color: "bg-red-500/10 text-red-500 border-red-500/20",
    articles: 128,
    trending: true
  },
  {
    id: 2,
    title: "Zero-Day Exploits",
    icon: Zap,
    color: "bg-amber-500/10 text-amber-500 border-amber-500/20",
    articles: 94,
    trending: true
  },
  {
    id: 3,
    title: "Zero Trust",
    icon: Lock,
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    articles: 112,
    trending: true
  },
  {
    id: 4,
    title: "Cloud Security",
    icon: Cloud,
    color: "bg-sky-500/10 text-sky-500 border-sky-500/20",
    articles: 87,
    trending: false
  },
  {
    id: 5,
    title: "Secure Coding",
    icon: Code,
    color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    articles: 76,
    trending: false
  },
  {
    id: 6,
    title: "Data Privacy",
    icon: Database,
    color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    articles: 103,
    trending: true
  },
  {
    id: 7,
    title: "Mobile Security",
    icon: Smartphone,
    color: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20",
    articles: 68,
    trending: false
  },
  {
    id: 8,
    title: "Network Security",
    icon: Network,
    color: "bg-teal-500/10 text-teal-500 border-teal-500/20",
    articles: 91,
    trending: false
  },
  {
    id: 9,
    title: "AI Security",
    icon: Bot,
    color: "bg-pink-500/10 text-pink-500 border-pink-500/20",
    articles: 82,
    trending: true
  },
  {
    id: 10,
    title: "Vulnerability Research",
    icon: FileCode,
    color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    articles: 74,
    trending: false
  }
];

export default function TrendingTopics() {
  const [hoveredTopic, setHoveredTopic] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {trendingTopics.map((topic, index) => {
        const Icon = topic.icon;
        
        return (
          <motion.div
            key={topic.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 * index }}
            onMouseEnter={() => setHoveredTopic(topic.id)}
            onMouseLeave={() => setHoveredTopic(null)}
          >
            <Link href={`/topics/${topic.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <Card className={`h-full transition-all duration-300 ${
                hoveredTopic === topic.id ? "border-primary shadow-md" : ""
              }`}>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${topic.color}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{topic.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{topic.articles} articles</p>
                  {topic.trending && (
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      Trending
                    </Badge>
                  )}
                  <div className={`mt-4 transition-opacity duration-300 ${
                    hoveredTopic === topic.id ? "opacity-100" : "opacity-0"
                  }`}>
                    <Button variant="ghost" size="sm" className="gap-1">
                      Explore
                      <ArrowRight className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}