import React from 'react';
import { Card, CardImg, CardSubtitle, CardTitle, Col, Row, Container, Spinner } from 'reactstrap';
import { useSelector } from 'react-redux';

import * as Bi from 'react-icons/bi';

const Gallery = () => {
  const images = useSelector((state) => state.images.images.hits);
  const loading = useSelector((state) => state.images.loading);

  return (
    <div className="mt-2">
      <Container>
        <Row>
          {images === undefined ? (
            <div className="d-flex justify-content-center mt-3">
              <Spinner color="primary" children=""></Spinner>
            </div>
          ) : loading ? (
            <div className="d-flex justify-content-center mt-3">
              <Spinner color="primary" children=""></Spinner>
            </div>
          ) : (
            images.map((image) => {
              return (
                <>
                  <Col md={3} xs={12} className="mb-2">
                    <Card>
                      <CardImg src={image.webformatURL} alt="test" />

                      <div className="icons">
                        <div className="likes-icon">
                          <span>
                            <Bi.BiLike size="20" />
                          </span>
                          <span>{image.likes}</span>
                        </div>
                        <span className="bookmark-icon">
                          {image.comments}
                          <Bi.BiComment size="20" />
                        </span>
                      </div>

                      <div className="card-title">
                        <CardTitle>{image.user}</CardTitle>
                      </div>
                      <CardSubtitle>
                        {[image.tags].map((tag) => {
                          return (
                            <>
                              <span className="tags">{tag}</span>
                            </>
                          );
                        })}
                      </CardSubtitle>
                    </Card>
                  </Col>
                </>
              );
            })
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;
