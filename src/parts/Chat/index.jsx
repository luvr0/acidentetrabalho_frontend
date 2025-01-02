import chatbotImage from '../../assets/images/chatbot_3.png'
import React, { useState, useEffect } from 'react';
import './style.css';

function Chat() {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [isBotTyping, setIsBotTyping] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleSendMessage = async () => {
        if (message.trim() !== '') {

            setMessages(prevMessages => [
                ...prevMessages,
                { role: 'user', parts: [{ text: message }] }
            ]);
            setMessage('');
            await sendMessageToBot(message);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    const sendMessageToBot = async (message) => {
        setIsBotTyping(true);

        setTimeout(async () => {
            try {

                const response = await fetch('https://testando-back.vercel.app/ask', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        message: message,
                        history: messages.map(msg => ({
                            role: msg.role,
                            parts: msg.parts
                        }))
                    }),
                });

                const data = await response.json();
                let botResponse = data.reply;

                if (botResponse.toLowerCase().includes("transferindo")) {
                    window.open(`https://api.whatsapp.com/send?1=pt_BR&phone=55035992185459&text=${encodeURIComponent(botResponse.replace("Transferindo.", "").trim())}`, "_blank");
                    botResponse = "Ok, muito obrigada. Irei lhe transferir para a Doutora Letícia Carvalho no WhatsApp para resolver seu problema."
                }

                setMessages(prevMessages => [
                    ...prevMessages,
                    { role: 'model', parts: [{ text: botResponse }] }
                ]);
                setIsBotTyping(false);
            } catch (error) {
                console.error('Erro ao enviar mensagem:', error);
                setIsBotTyping(false);
            }
        }, 2000);
    };

    useEffect(() => {
        if (isOpen) {
            setMessages([
                { role: "user", parts: [{ text: "Oi, tenho algumas dúvidas!" }] },
                { role: "model", parts: [{ text: "Como posso te ajudar?" }] },
            ]);
        }
    }, [isOpen]);

    return (
        <>
            <div className="chat-icon" onClick={toggleChat}>
                <img src={chatbotImage} alt="Chatbot" />
            </div>

            {isOpen && (
                <div className="chat-box" id="chat-box">
                    <div className="chat-header">
                        <h3>Converse Comigo</h3>
                        <button className="close-chat" onClick={toggleChat}>X</button>
                    </div>
                    <div className="chat-body">
                        <div className="messages">
                            {messages.map((msg, index) => (
                                <div key={index} className={`message ${msg.role}`}>
                                    {msg.parts.map((part, i) => (
                                        <div key={i}>{part.text}</div>
                                    ))}
                                </div>
                            ))}
                            {isBotTyping && (
                                <div className="typing-indicator">
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="chat-footer">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Digite sua dúvida..."
                            maxLength="203"
                        />
                        <button onClick={handleSendMessage}>Enviar</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Chat;
