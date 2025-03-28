export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'writer' | 'user';
  avatar?: string;
}