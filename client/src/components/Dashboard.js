import React from 'react'
import Sidebar from './Sidebar'
import Openconversation from './Openconversation'
import { useConversations } from '../context/ConversationsProvider'
export default function Dashboard({id}) {

    const{selectedConversation}=useConversations();

  return (
    <div className='d-flex' style={{height:"100vh"}}>
        <Sidebar id={id}/>
        {selectedConversation&& < Openconversation />}
    </div>
  )
}
