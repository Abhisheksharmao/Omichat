import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useRef } from 'react'
import {v4 as uuidv4} from 'uuid'

export default function Login({onIdSubmit}) {

    function createnewid(){
        onIdSubmit(uuidv4())
    }

    function handelsubmit(e) {
        e.preventDefault();
        onIdSubmit(idRef.current.value)
    }

    const idRef = useRef();
    return (
        <Container className='align-items-center d-flex' style={{ height: "100vh" }}>
            <Form onSubmit={handelsubmit}>
                <Form.Group>
                    <Form.Label>Enter your id</Form.Label>
                    <Form.Control type='text' ref={idRef}></Form.Control>
                </Form.Group>
                <Button type='submit'>Login</Button>
                <Button onClick={createnewid} variant='secondary'>Create a new id</Button>
            </Form>
        </Container>
    )
}
