async function getRepos(inputValue) {
  const response = await fetch(
    'https://api.github.com/search/repositories?q=' + inputValue
  );
  if (response.ok) {
    const data = await response.json();
    return data.items;
  }
  throw new Error('error while fetching data');
}

export default getRepos;
