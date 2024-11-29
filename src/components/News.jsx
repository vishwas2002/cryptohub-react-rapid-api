import React, { useState } from 'react';
import { Row, Col, Card, Typography, Button } from 'antd';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const { Title, Paragraph } = Typography;

const demoImage ="http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg" 

const News = ({ simplified }) => {
  const { data: cryptoNews, isLoading } = useGetCryptoNewsQuery("cryptocurrency", simplified ? 6 : 12);

  const [showAll, setShowAll] = useState(false);

  // If the data is loading, show a loading state
  if (isLoading) return <div>Loading...</div>;

  // If no data is available
  if (!cryptoNews) return <div>No data available.</div>;

  const source = cryptoNews.coincu; // Choose your desired source like 'cointelegraph', 'coindesk', etc.
  if (!source || source.length === 0) return <div>No news available.</div>;

  // Determine how many items to show based on simplified state or button click
  const visibleNews = showAll ? source : source.slice(0, simplified ? 6 : 12);  // Show the first 12 or 6 items based on `simplified`

  return (
    <div>
      {/* Display the cards */}
      <Row gutter={[24, 24]}>
        {visibleNews.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card
              hoverable
              className="news-card"
              style={{
                borderRadius: '10px',
                padding: '20px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s ease-in-out',
                backgroundColor: '#fff',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <a href={news.url} target="_blank" rel="noopener noreferrer">
                <div style={{ marginBottom: '15px' }}>
                  <Title level={4} style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#333' }}>
                    {news.title}
                  </Title>
                  <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                  <p
                    style={{
                      fontSize: '1rem',
                      color: '#555',
                      lineHeight: '1.5',
                      marginBottom: '10px',
                      whiteSpace: 'normal',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      maxHeight: '3.5em',  // Limit the paragraph height
                    }}
                  >
                    {news.description}
                  </p>
                 
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Show button for loading more news */}
      {!showAll && (
        <Button
          type="primary"
          onClick={() => setShowAll(true)}
          style={{
            marginTop: '20px',
            display: 'block',
            width: '100%',
            backgroundColor: '#0078d4',
            borderColor: '#0078d4',
          }}
        >
          Show More News
        </Button>
      )}

      {/* If user opts to view more news, show the rest */}
      {showAll && (
        <Row gutter={[24, 24]}>
          {source.slice(12).map((news, i) => (
            <Col xs={24} sm={12} lg={8} key={i}>
              <Card
                hoverable
                className="news-card"
                style={{
                  borderRadius: '10px',
                  padding: '20px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.2s ease-in-out',
                  backgroundColor: '#fff',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <a href={news.url} target="_blank" rel="noopener noreferrer">
                  <div style={{ marginBottom: '15px' }}>
                    <Title level={4} style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#333' }}>
                      {news.title}
                    </Title>
                    <Paragraph
                      style={{
                        fontSize: '1rem',
                        color: '#555',
                        lineHeight: '1.5',
                        marginBottom: '10px',
                        whiteSpace: 'normal',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        maxHeight: '3.5em',
                      }}
                    >
                      {news.description}
                    </Paragraph>
                  </div>
                </a>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default News;

