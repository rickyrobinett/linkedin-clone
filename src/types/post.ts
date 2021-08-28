export interface Post {
  id: string;
  message: string;
  displayName: string;
  email: string;
  photoURL: string | null;
  timestamp: Date;
}
