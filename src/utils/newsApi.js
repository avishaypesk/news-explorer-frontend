const API_KEY = 'cfba2fec87f0451f974d12c07e028c0a';

const getNews = async (keyword) => {

  const today = new Date();
  const sevenDaysAgo = new Date(today.getTime() - (1000 * 60 * 60 * 24 * 7));

  const from = sevenDaysAgo.toISOString();
  const to = today.toISOString();

  const encodedKeyword = encodeURIComponent(keyword);

  const url = `https://https://nomoreparties.co/v2/everything?q=${encodedKeyword}&apiKey=${API_KEY}&from=${from}&to=${to}&pageSize=100`;

  const response = await fetch(url);

  if (!response.ok) {
    const errorData = await response.json();
    console.log('Error data:', errorData);
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  const articles = data.articles.map(article => ({
    ...article,
    keyword: keyword,  
  }));

  return articles;
};

export default getNews;
