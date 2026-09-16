import { useState, useEffect } from 'react';
import type { GithubRepo } from '../types';
import { GITHUB_CONFIG, fallbackRepositories } from '../data/github';

interface GithubDataState {
  repos: GithubRepo[];
  totalStars: number;
  totalRepos: number;
  loading: boolean;
  error: string | null;
}

export function useGithub() {
  const [state, setState] = useState<GithubDataState>({
    repos: fallbackRepositories,
    totalStars: GITHUB_CONFIG.totalStars,
    totalRepos: GITHUB_CONFIG.totalRepos,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;
    const cacheKey = `gh_cache_${GITHUB_CONFIG.username}`;

    async function fetchGithubData() {
      // Check session cache first
      try {
        const cached = sessionStorage.getItem(cacheKey);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (isMounted) {
            setState({
              repos: parsed.repos,
              totalStars: parsed.totalStars,
              totalRepos: parsed.totalRepos,
              loading: false,
              error: null,
            });
            return;
          }
        }
      } catch {
        // Cache read error ignored
      }

      try {
        const userRes = await fetch(`https://api.github.com/users/${GITHUB_CONFIG.username}`);
        if (!userRes.ok) {
          throw new Error(`GitHub API returned status ${userRes.status}`);
        }
        const userData = await userRes.json();

        const reposRes = await fetch(
          `https://api.github.com/users/${GITHUB_CONFIG.username}/repos?sort=updated&per_page=6`
        );
        if (!reposRes.ok) {
          throw new Error(`GitHub Repos API returned status ${reposRes.status}`);
        }
        const reposData = await reposRes.json();

        if (Array.isArray(reposData) && reposData.length > 0) {
          const transformedRepos: GithubRepo[] = reposData.map((r: { name: string; description: string | null; language: string | null; stargazers_count: number; html_url: string; updated_at: string }) => ({
            name: r.name,
            description: r.description || 'Public repository by Shubham Pattewar.',
            language: r.language || 'Code',
            stars: r.stargazers_count || 0,
            url: r.html_url,
            updatedAt: r.updated_at ? r.updated_at.substring(0, 7) : '2025',
          }));

          const totalStars = transformedRepos.reduce((acc, curr) => acc + curr.stars, 0);
          const dataToCache = {
            repos: transformedRepos,
            totalStars: totalStars || GITHUB_CONFIG.totalStars,
            totalRepos: userData.public_repos || GITHUB_CONFIG.totalRepos,
          };

          try {
            sessionStorage.setItem(cacheKey, JSON.stringify(dataToCache));
          } catch {
            // Cache write error ignored
          }

          if (isMounted) {
            setState({
              repos: transformedRepos,
              totalStars: dataToCache.totalStars,
              totalRepos: dataToCache.totalRepos,
              loading: false,
              error: null,
            });
          }
        } else {
          // Fallback if no public repos returned
          if (isMounted) {
            setState({
              repos: fallbackRepositories,
              totalStars: GITHUB_CONFIG.totalStars,
              totalRepos: GITHUB_CONFIG.totalRepos,
              loading: false,
              error: null,
            });
          }
        }
      } catch (err) {
        if (isMounted) {
          setState({
            repos: fallbackRepositories,
            totalStars: GITHUB_CONFIG.totalStars,
            totalRepos: GITHUB_CONFIG.totalRepos,
            loading: false,
            error: err instanceof Error ? err.message : 'GitHub fetch error',
          });
        }
      }
    }

    fetchGithubData();

    return () => {
      isMounted = false;
    };
  }, []);

  return state;
}
