export async function fetchGithubStats(username: string, pat?: string) {
    const headers: Record<string, string> = {
        Accept: "application/vnd.github.v3+json",
    };
    if (pat) {
        headers.Authorization = `Bearer ${pat}`;
    }

    const [userRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${username}`, { headers }),
        fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, { headers })
    ]);

    if (!userRes.ok || !reposRes.ok) throw new Error("Failed to fetch from GitHub");

    const user = await userRes.json();
    const repos = await reposRes.json();

    let totalStars = 0;
    const languageCounts: Record<string, number> = {};

    for (const repo of repos) {
        totalStars += repo.stargazers_count || 0;
        if (repo.language) {
            languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
        }
    }

    const topLanguages = Object.entries(languageCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([name, count]) => ({ name, count }));

    return {
        followers: user.followers as number,
        publicRepos: user.public_repos as number,
        totalStars,
        topLanguages,
    };
}

export async function fetchLeetCodeStats(username: string) {
    const res = await fetch(`https://alfa-leetcode-api.onrender.com/${username}/solved`);
    if (!res.ok) throw new Error("Failed to fetch LeetCode data");
    return await res.json();
}
