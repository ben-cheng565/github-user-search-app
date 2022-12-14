export const sortRepos = (repos) => {
  if (Object.keys(repos).length === 0) return;

  let data = repos;
  data.sort(function (a, b) {
    return (
      b.forks_count - a.forks_count ||
      b.stargazers_count - a.stargazers_count ||
      new Date(b.pushed_at) - new Date(a.pushed_at)
    );
  });

  return data;
};
