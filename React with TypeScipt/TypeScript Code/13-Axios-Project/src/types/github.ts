export interface GitHubProfileData {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

export interface GithubUserData {
  id: number;
  name: string | null;
  login: string;
  avatar_url: string;
  followers_url: string;
  bio: string | null;
  followers: number;
  following: number;
  public_repos: number;
  html_url: string;
}

export interface FollowersData {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

export interface FollowingData {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

export interface RepositoryData {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  forks_count: number;
  stargazers_count: number;
  language: string | null;
}