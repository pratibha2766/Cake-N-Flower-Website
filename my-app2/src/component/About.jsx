import React from 'react'
import { Container, Card, CardGroup } from 'react-bootstrap'

const About = () => {
    return (
        <>
            <div className="bg" style={{ backgroundImage: 'url(assets/about.jpg)' }}>
                <Container style={{ marginTop: '25px' }}>
                    <h1 className="hdng" style={{color: '#3d5c5c',fontFamily: 'avenir'}}>About </h1>
                    <p className='hdng' style={{fontFamily:'avenir'}}>Welcome to The Cake and Flowers Shop, Belgavi’s best bake and flower shop.
                        The Shop is a family owned and operated business in Belgavi.
                        We carefully select our ingredients for their freshness, flavor and natural value.
                        We choose organic, locally grown products when available.
                        Everything we make embodies our commitment to consistency and excellence.
                        The heart of the bakery is a small, dedicated group of hard working bakers.
                        We are grateful to our amazing staff, loyal customers, and the most supportive local community
                        who allow us to do the work we love every day.
                        <br /><br />
                        <h1 className="hdng" style={{color: '#3d5c5c', fontFamily: 'avenir'}} >Our Team</h1>
                        <CardGroup>
                            <Card className='cd bg-light' style={{ width: '18rem', paddingRight: "10px" }}>
                                <Card.Img className="card h-100" variant="top" src="./assets/sneha.jpg" />
                                <Card.Body className="us mb-5">
                                    <Card.Title>Sneha Odugaudar</Card.Title>
                                    <Card.Text>
                                        contact details:12345
                                        Email id:Sneha@.co.in
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card className='cd bg-light' style={{ width: '18rem', paddingRight: "10px" }}>
                                <Card.Img className="card h-100" variant="top" src="./assets/shreys.jpg" />
                                <Card.Body className="us mb-5">
                                    <Card.Title>Shreyas Lalge</Card.Title>
                                    <Card.Text>
                                        contact details:12345
                                        Email id:Shreyas@.co.in
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card className='cd bg-light' style={{ width: '18rem', paddingRight: "10px" }}>
                                <Card.Img className="card h-100" variant="top" src="./assets/pb.jpg" />
                                <Card.Body className="us mb-5">
                                    <Card.Title>Pratibha Borode</Card.Title>
                                    <Card.Text>
                                        contact details:12345
                                        Email id:Pratibha@.co.in
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card className='cd bg-light' style={{ width: '18rem', paddingRight: "10px" }}>
                                <Card.Img className="card h-100" variant="top" src="./assets/rashmi.jpeg" />
                                <Card.Body className="us mb-5">
                                    <Card.Title>Rashmi Inamdar</Card.Title>
                                    <Card.Text>
                                        contact details:12345
                                        Email id:Rashmi@.co.in
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card className='cd bg-light' style={{ width: '18rem' }}>
                                <Card.Img className="card h-100" variant="top" src="./assets/rakesh.jpg" />
                                <Card.Body className="us mb-5">
                                    <Card.Title>Raksesh Sonnagi</Card.Title>
                                    <Card.Text>
                                        contact details:12345
                                        Email id:Rakesh@.co.in
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </CardGroup>
                        {/* <ListGroup>
                <ListGroup.Item>Pratibha Borode</ListGroup.Item>
                <ListGroup.Item>Sneha Odugaudar</ListGroup.Item>
                <ListGroup.Item>Shreyas Lalge</ListGroup.Item>
                <ListGroup.Item>Rashmi Inamdar</ListGroup.Item>
                <ListGroup.Item>Rakesh Sonnagi</ListGroup.Item>
                
            </ListGroup> */}
                        {/* <ul >
                <li>Pratibha Borode</li>
                <li>Sneha Odugaudar</li>
                <li>Shreyas Lalge</li>
                <li>Rashmi Inamdar</li>
                <li>Rakesh Sonnagi</li>
            </ul> */}
                    </p>

                </Container>
            </div>
        </>
    )
}

export default About
