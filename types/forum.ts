import { User } from "./user";

export interface ForumDiscussion {
  id: number;
  title: string;
  category: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  date: string;
  replies: number;
  views: number;
  likes: number;
  isLocked: boolean;
  isPinned: boolean;
  lastReply: {
    author: string;
    date: string;
  };
  excerpt: string;
}

export interface ForumPost {
  id: number;
  content: string;
  author: User;
  date: string;
  likes: number;
  isAccepted?: boolean;
}