import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';

const About = () => {

    const [member, setMember] = useState<any>();

  useEffect(() => {
    axios.get('/api/member').then((res) => setMember(res))
    .catch(e => console.log(e));
  }, []);

  // dom
//   const memberList = member.map((m: any) => <p>{m.name}</p>);
  
    return (
        <div>
            {/* { JSON.stringify(member.data) } */}
            <Form>
                {/* ID */}
        <InputGroup>
          <InputGroup.Text id="pwd">ID</InputGroup.Text>
          <Form.Control
            placeholder="hyunchoi"
            aria-label="hyunchoi"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        {/* PWD */}
        <InputGroup>
          <InputGroup.Text id="pwd">PWD</InputGroup.Text>
          <Form.Control
            placeholder="1234"
            aria-label="1234"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Form>
            about
            <Button variant="primary">TEST</Button>
            <Button variant="secondary">TEST</Button>
            <Button variant="success">TEST</Button>
            <Button variant="warning">TEST</Button>
            <Button variant="danger">TEST</Button>
            <Button variant="info">TEST</Button>
            <Button variant="light">TEST</Button>
            <Button variant="dark">TEST</Button>
            <Button variant="link">TEST</Button>
        </div>
    );
};

export default About;