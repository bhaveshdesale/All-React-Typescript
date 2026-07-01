import { githubApi } from "../api/axios";
import type {
  GitHubProfileData,
  GithubUserData,
  FollowersData,
  FollowingData,
  RepositoryData,
} from "../types/github";

export const getUsers = async (): Promise<GitHubProfileData[]> => {
  const response = await githubApi.get("/users");
  return response.data;
};

export const getProfile = async (username: string): Promise<GithubUserData> => {
  const response = await githubApi.get(`/users/${username}`);
  return response.data;
};

export const getFollowers = async (username: string): Promise<FollowersData[]> => {
  const response = await githubApi.get(`/users/${username}/followers`);
  return response.data;
};

export const getFollowing = async (username: string): Promise<FollowingData[]> => {
  const response = await githubApi.get(`/users/${username}/following`);
  return response.data;
};

export const getRepositories = async (username: string): Promise<RepositoryData[]> => {
  const response = await githubApi.get(`/users/${username}/repos`);
  return response.data;
};