import React, { useState ,useEffect } from 'react'
import axiox from 'axios'

const ChatsPage = () => {
  
  const [chats, setChats] = useState([]);
  const fetchChats = async ()=>{
      const {data} = await axiox.get('/api/chat');
      setChats(data);
  }  

  useEffect(() => {
      fetchChats();
  },[]);

  return (
    <div>
      {chats.map((chat) => 
        <div key={chat._id}>
            {chat.chatName}
        </div>
      )}
    </div>
  )
}

export default ChatsPage