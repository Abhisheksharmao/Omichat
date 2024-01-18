import React, {  useState,  useCallback } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'
import { useConversations } from '../context/ConversationsProvider';



export default function Openconversation() {

    const [text, setText] = useState("");
    const { sendMessage, selectedConversation } = useConversations();
    const setRef = useCallback(node => {
        if (node) {
            node.scrollIntoView({ smooth: true })
        }
    }, []);

    function handelsubmit(e) {
        e.preventDefault();

        sendMessage(
            selectedConversation.recipients.map(r => r.id), text)
        setText("")
    }


    return (
        <div className='d-flex flex-column flex-grow-1' >Openconversation
            <div className='flex-grow-1 overflow-auto'>
                <div className=' d-flex flex-column align-item-start justofu-content-end px-3'>
                    {selectedConversation.messages.map((message, index) => {
                        const lastMessage = selectedConversation.messages.length - 1 === index
                        return (
                            <div
                                ref={lastMessage ? setRef : null}
                                key={index}
                                className={`d-flex my-1 flex-column ${message.fromMe ? 'align-self-end' : ''} `}
                            >
                                <div className={`rounded px-2 py-1 ${message.fromMe ? 'bg-primary text-white' : 'border'} `}>
                                    {message.text}
                                </div>
                                <div className={`text-muted small ${message.fromMe ? 'text-right' : ''}`}>
                                    {message.fromMe ? 'You' : message.senderName}
                                </div>
                            </div>
                        )
                    })}



                </div>
            </div>
            <Form onSubmit={handelsubmit}>
                <Form.Group className='m-2'>
                    <InputGroup>
                        <Form.Control
                            as='textarea'
                            required
                            value={text}
                            onChange={e => setText(e.target.value)}
                            style={{ height: "75px", resize: "none" }}
                        />
                        <Button type='submit'>Send</Button>
                    </InputGroup>
                </Form.Group>
            </Form>
        </div>
    )
}
