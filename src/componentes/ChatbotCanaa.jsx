import React, { useState } from 'react';
import axios from 'axios';

export default function ChatbotCanaa() {
  const [input, setInput] = useState('');
  const [responses, setResponses] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setResponses([...responses, { type: 'user', text: input }]);

    const apiKey = process.env.REACT_APP_GEMINI_API_KEY; // Acesse a API Key aqui

    try {
      const response = await axios.post('https://api.gemini.com/v1/chat', {
        prompt: input,
      }, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      });

      const data = response.data;
      setResponses([...responses, { type: 'user', text: input }, { type: 'bot', text: data.response }]);

    } catch (error) {
      console.error('Erro ao chamar a API:', error);
    }

    setInput('');
  };

  return (
    <div>
      <div>
        {responses.map((resp, index) => (
          <div key={index} className={resp.type === 'user' ? 'user-message' : 'bot-message'}>
            {resp.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite sua pergunta"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
