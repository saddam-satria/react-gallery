import { useSelector } from 'react-redux';
import { Col, Container, Row, Spinner } from 'reactstrap';
import * as Fc from 'react-icons/fc';
import * as Fa from 'react-icons/fa';
import * as Ai from 'react-icons/ai';

const Gallery = () => {
  const images = useSelector((state) => state.images.images.hits);
  const loading = useSelector((state) => state.images.loading);

  const downloadHandler = (e, url) => {
   window.location.replace(url)
  };
  return (
    <div className="gallery-component">
      <Container>
        <Row>
          {images < 1 || images === undefined ? (
            <div className="spinner-container">
              <Spinner color="primary" children=""></Spinner>
            </div>
          ) : loading ? (
            <div className="spinner-container">
              <Spinner color="primary" children=""></Spinner>
            </div>
          ) : (
            images.map((image) => {
              return (
                <>
                  <Col md={4} className="mb-2">
                    <div className="gallery" onClick={(e) => downloadHandler(e, image.largeImageURL)} style={{ backgroundImage: `url(${image.webformatURL})` }}>
                      <div className="gallery-text">
                        <span>
                          <Fc.FcLike /> {image.likes}
                        </span>
                        <div className="ms-auto">
                          <span>
                            <Fa.FaCommentAlt /> {image.comments}
                          </span>
                        </div>
                      </div>
                      <div className="gallery-user">
                        <span>
                          <Ai.AiFillCamera /> {image.user}
                        </span>
                      </div>
                    </div>
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
