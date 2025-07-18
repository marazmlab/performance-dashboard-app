export async function fetchPageData(url, apiKey) {
  const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&key=${apiKey}`;
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error('Failed to fetch PageSpeed data');
  }
  return response.json();
}