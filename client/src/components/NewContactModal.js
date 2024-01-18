import React, { useRef } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { useContacts } from '../context/ContactsProvider'

export default function NewContactModal({ closeModal }) {
    const idRef = useRef()
    const NameRef = useRef()
    const{ createContact} = useContacts()

    function handelsubmit(e) {
        e.preventDefault()
        createContact(idRef.current.value, NameRef.current.value)
        closeModal()
    }

    return (
        <>
            <Modal.Header closeButton>Create Contact</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handelsubmit}>
                    <Form.Group>
                        <Form.Label>id</Form.Label>
                        <Form.Control type='text' ref={idRef}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' ref={NameRef}></Form.Control>
                    </Form.Group>
                    <Button onClick={handelsubmit}>Submit</Button>
                </Form>
            </Modal.Body>
        </>
    )
}
