import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "./Cards.css";

const Cards = () => {
    return (
        <div>
            <Row xs={1} md={2} className="g-4">
                    <Col>
                        <Card className="card">
                            <Card.Body>
                                {/* <Card.Title>Card title  </Card.Title> */}
                                <Card.Text>
                                    No of Tickets: 0
                                </Card.Text>
                                {/* <Button variant="primary">3M Likes</Button> */}
                                <div>
                                    {/* <FavoriteBorderIcon /> */}
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="card">
                            <Card.Body>
                                {/* <Card.Title>Card title  </Card.Title> */}
                                <Card.Text>
                                    No of Tickets: 0
                                </Card.Text>
                                {/* <Button variant="primary">3M Likes</Button> */}
                                <div>
                                    {/* <FavoriteBorderIcon /> */}
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="card">
                            <Card.Body>
                                {/* <Card.Title>Card title  </Card.Title> */}
                                <Card.Text>
                                    No of Tickets: 0
                                </Card.Text>
                                {/* <Button variant="primary">3M Likes</Button> */}
                                <div>
                                    {/* <FavoriteBorderIcon /> */}
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
            </Row>
        </div>
    );
}

export default Cards; 