import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, TrendingUp, Newspaper, Users, ArrowRight, Clock, Eye, MessageSquare, Bookmark } from "lucide-react";
import FeaturedArticles from "@/components/home/featured-articles";
import TrendingTopics from "@/components/home/trending-topics";
import NewsSection from "@/components/home/news-section";
import HeroAnimation from "@/components/home/hero-animation";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <HeroAnimation />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <Badge className="px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20 mb-4">
                The Future of Cybersecurity
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Stay Secure in a <span className="text-primary">Connected</span> World
              </h1>
              <p className="text-xl text-muted-foreground">
                Discover the latest cybersecurity news, trends, and insights from experts and the community.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="gap-2">
                  Explore Articles
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  Join Community
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden bg-muted">
                      <Image 
                        src={`https://source.unsplash.com/random/100x100?face=${i}`} 
                        alt="Community member" 
                        width={40} 
                        height={40} 
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-medium">Join 10,000+ security professionals</p>
                  <div className="flex items-center text-yellow-500">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                    <span className="ml-1 text-sm">4.9/5</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Cybersecurity" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <Badge className="bg-primary text-primary-foreground mb-2">Featured</Badge>
                    <h3 className="text-xl font-bold">The Rise of AI in Cybersecurity Defense</h3>
                    <p className="text-white/80 mt-1">How artificial intelligence is revolutionizing threat detection</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-background rounded-lg shadow-lg p-4 border w-48">
                <div className="flex items-center gap-2">
                  <Shield className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-medium">Trusted Source</p>
                    <p className="text-xs text-muted-foreground">Verified content</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="featured" className="w-full">
            <div className="flex justify-between items-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="featured" className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  <span>Featured</span>
                </TabsTrigger>
                <TabsTrigger value="news" className="flex items-center gap-2">
                  <Newspaper className="h-4 w-4" />
                  <span>Latest News</span>
                </TabsTrigger>
                <TabsTrigger value="community" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>Community</span>
                </TabsTrigger>
              </TabsList>
              <Button variant="ghost" className="hidden md:flex items-center gap-2">
                View All Articles
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <TabsContent value="featured" className="mt-0">
              <FeaturedArticles />
            </TabsContent>

            <TabsContent value="news" className="mt-0">
              <NewsSection />
            </TabsContent>

            <TabsContent value="community" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="overflow-hidden group">
                    <CardHeader className="p-0">
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image 
                          src={`https://source.unsplash.com/random/600x400?hacker,security,cyber=${i}`} 
                          alt="Article thumbnail" 
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline">Community</Badge>
                        <span className="text-xs text-muted-foreground flex items-center">
                          <Clock className="h-3 w-3 mr-1" /> 
                          {Math.floor(Math.random() * 10) + 1} days ago
                        </span>
                      </div>
                      <CardTitle className="mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {[
                          "How I Found a Critical Vulnerability in a Major Banking App",
                          "Implementing Zero Trust Architecture in Your Organization",
                          "The Future of Ransomware: Trends and Predictions",
                          "Securing Your Home Network: A Complete Guide",
                          "Ethical Hacking: Getting Started with Bug Bounty Programs",
                          "Understanding OWASP Top 10 and How to Mitigate Risks"
                        ][i - 1]}
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        {[
                          "I discovered a serious security flaw that could have exposed millions of users' financial data. Here's how I found it and what we can learn.",
                          "Zero Trust is more than a buzzword. Learn how to implement this security model effectively in your organization with practical steps.",
                          "Ransomware attacks continue to evolve. This analysis looks at emerging trends and what organizations should prepare for.",
                          "Your home network can be vulnerable to attacks. Follow this comprehensive guide to secure all your connected devices.",
                          "Want to start your journey in bug bounty hunting? This guide covers everything from tools to methodology.",
                          "The OWASP Top 10 represents the most critical web application security risks. Learn how to protect your applications."
                        ][i - 1]}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="px-6 py-4 border-t flex justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full overflow-hidden bg-muted">
                          <Image 
                            src={`https://source.unsplash.com/random/100x100?portrait=${i}`} 
                            alt="Author" 
                            width={32} 
                            height={32} 
                          />
                        </div>
                        <span className="text-sm font-medium">
                          {[
                            "Alex Morgan",
                            "Jamie Chen",
                            "Sam Wilson",
                            "Taylor Reed",
                            "Jordan Smith",
                            "Casey Jones"
                          ][i - 1]}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <span className="text-xs flex items-center">
                          <Eye className="h-3 w-3 mr-1" /> 
                          {Math.floor(Math.random() * 900) + 100}
                        </span>
                        <span className="text-xs flex items-center">
                          <MessageSquare className="h-3 w-3 mr-1" /> 
                          {Math.floor(Math.random() * 50)}
                        </span>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Bookmark className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <Button className="md:hidden">View All Community Articles</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Trending Topics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold">Trending Topics</h2>
              <p className="text-muted-foreground mt-2">Stay updated with the hottest cybersecurity topics</p>
            </div>
            <Button variant="outline" className="hidden md:flex items-center gap-2">
              View All Topics
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          
          <TrendingTopics />
          
          <div className="flex justify-center mt-8">
            <Button className="md:hidden">View All Topics</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/3 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Join Our Cybersecurity Community</h2>
              <p className="text-primary-foreground/80 text-lg">
                Connect with security professionals, share your knowledge, and stay ahead of threats.
                Get exclusive access to resources, tools, and expert insights.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="secondary" className="gap-2">
                  Sign Up Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="lg:w-1/3 flex justify-center">
              <div className="relative w-64 h-64">
                <Shield className="w-full h-full text-primary-foreground/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-5xl font-bold">10K+</p>
                    <p className="text-primary-foreground/80">Community Members</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}