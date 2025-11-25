import React, { useState } from 'react';

const RiddleModal = ({ onClose, founder }) => {
  const [ans, setAns] = useState('');
  const [res, setRes] = useState('');

  const check = () => {
    if (ans.toLowerCase().trim() === 'сервер' || ans.toLowerCase().trim() === 'server') {
      setRes('Правильно! Ви молодець!');
      setTimeout(onClose, 2000);
    } else {
      setRes('Спробуйте ще раз!');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h3>Загадка від {founder}</h3>
        <p>Що це таке: воно зберігає всі ваші дані, але не має рук ні ніг, і завжди працює тихо?</p>
        <input className="form-control" value={ans} onChange={e=>setAns(e.target.value)} placeholder="Відповідь..." />
        <br /><br />
        <button onClick={check} style={{padding:'5px 10px', background:'#001f3f', color:'#fff'}}>Перевірити</button>
        {res && <p style={{marginTop:'10px', fontWeight:'bold'}}>{res}</p>}
      </div>
    </div>
  );
};

export default RiddleModal;