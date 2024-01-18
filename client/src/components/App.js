import React from "react";
import Login from "./Login";
import Uselocalstorage from "../hooks/uselocalstorage";
import Dashboard from "./Dashboard";
import { ContactsProvider } from "../context/ContactsProvider";
import { ConversationsProvider } from "../context/ConversationsProvider";
import { SocketProvider } from "../context/SocketProvider";

function App() {
  const [id, setId] = Uselocalstorage('id')

  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  )


  return (
    <>
      {id ? dashboard : <Login onIdSubmit={setId} />}

    </>
  );
}

export default App;
