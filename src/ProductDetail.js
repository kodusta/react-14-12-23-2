import React from 'react';
import {Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ getProductBySlug }) => {
    const { slug } = useParams();



    const product = getProductBySlug(slug);
    console.log(product);
    if (!product) {
        return <div>Ürün bulunamadı.</div>;
    }
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <Card>
                        <CardImg top width="100%" src={"../" + product.image} alt={product.productName} />
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">{product.productName}</CardTitle>
                            <CardText>{product.desc}</CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;
