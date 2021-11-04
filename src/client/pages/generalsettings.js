import React from "react";
import {
  Container,
  Form,
  Button,
  Accordion,
  Col,
  Row,
  Table,
} from "react-bootstrap";

class GeneralSettings extends React.Component {
  render() {
    return (
      <Container fluid className="p-0">
        <Row>
          <Col className="col-lg-6 col-12 mb-3">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <div className="float-right">Employee Type </div>
                  <div className="float-left">
                    <Button>Add</Button>{" "}
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <Table responsive striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Larry the Bird</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col className="col-lg-6 col-12 mb-3">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

export default GeneralSettings;
