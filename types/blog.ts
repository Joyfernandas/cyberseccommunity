import { User } from "./user";

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  views: number;
  comments: number;
  likes: number;
}

export interface BlogComment {
  id: number;
  content: string;
  author: User;
  date: string;
  likes: number;
  replies?: BlogComment[];
}