import React from "react";
import { Card, Button } from "react-bootstrap";

interface Article {
  id: string;
  title: string;
  url: string;
  imageUrl: string;
}

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={article.imageUrl} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>
          {/* Aggiungi qui un riepilogo o un estratto dell'articolo, se necessario */}
        </Card.Text>
        <Button variant="primary" href={article.url} target="_blank" rel="noopener noreferrer">
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ArticleCard;
