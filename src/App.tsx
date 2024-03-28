import React, { useEffect, useState } from "react";
import ArticleCard from "./components/ArticleCard";

interface Article {
  id: number;
  title: string;
  url: string;
  image_url: string;
}

const App: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await fetch("https://api.spaceflightnewsapi.net/v4/articles");
      const data = await response.json();
      setArticles(data.results);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  return (
    <div className="app">
      <h1>Spaceflight News</h1>
      <div className="article-list">
        {articles.map((article) => (
          <ArticleCard
            key={article.id.toString()}
            article={{
              id: article.id.toString(),
              title: article.title,
              url: article.url,
              imageUrl: article.image_url,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
