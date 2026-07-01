import { useEffect, useState } from "react";
import {type GithubProfile } from "../types/types";

export function useGithubProfile (username: string) {
  const [profile, setProfile] =
    useState<GithubProfile | null>(null);

  const [loading, setLoading] =
    useState<boolean>(false);

  const [error, setError] =
    useState<string>("");  

  useEffect(() => {
    if (!username) return;

    const fetchProfile = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://api.github.com/users/${username}`
        );

        if (!response.ok) {
          throw new Error("User Not Found");
        }

        const data: GithubProfile =
          await response.json();

        setProfile(data);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Something went wrong"
        );
        setProfile(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [username]);

  return {
    profile,
    loading,
    error,
  };
}