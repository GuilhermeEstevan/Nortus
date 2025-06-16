export interface UserProfile {
  id: number;
  name: string;
  avatar: string;
  role: string;
  permissions: string[];
  settings: {
    theme: string;
    language: string;
  };
}
