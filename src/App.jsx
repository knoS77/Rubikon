import React, { useState } from 'react';
import './App.css'; // Импорт стилей

const DealComponent = () => {
  const [deal, setDeal] = useState({ title: '', budget: '', tags: '', customFields: {} });
  const [contacts, setContacts] = useState([]);
  const [isCopyMode, setIsCopyMode] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDeal({ ...deal, [name]: value });
  };

  const addContact = (contactName) => {
    setContacts([...contacts, contactName]);
  };

  const copyDeal = () => {
    const newDeal = { ...deal, contacts: [...contacts] };
    console.log('Скопированная сделка:', newDeal);
  };

  return (
    <div className="deal-container">
      <h2 className="deal-title">Создание Сделки</h2>
      <input className="input-field" name="title" placeholder="Название сделки" onChange={handleInputChange} />
      <input className="input-field" name="budget" placeholder="Бюджет" onChange={handleInputChange} />
      <input className="input-field" name="tags" placeholder="Теги" onChange={handleInputChange} />
      <button className="button" onClick={() => addContact(prompt('Введите имя контакта:'))}>Добавить контакт</button>
      <div className="contacts">
        <h3>Контакты:</h3>
        {contacts.map((contact, index) => (
          <div key={index} className="contact-item">{contact}</div>
        ))}
      </div>
      <button className="button" onClick={() => setIsCopyMode(true)}>Копирование сделок</button>
      {isCopyMode && (
        <div>
          <button className="button" onClick={copyDeal}>Скопировать</button>
          <button className="button" onClick={() => setIsCopyMode(false)}>Отмена</button>
        </div>
      )}
    </div>
  );
}

export default DealComponent;

