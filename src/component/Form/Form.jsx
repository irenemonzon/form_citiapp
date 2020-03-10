import React, { useState } from 'react';
import db from '../../firebase-config';


const AddForm = () => {
  const [name, setName] = useState('');
  const [rut, setRut] = useState('');
  const [email, setEmail] = useState('');
  const [bank, setBank] = useState('');
  const [typeAccount, setTypeAccount] = useState('');
  const [numberAccount, setNumberAccount] = useState('');

  function addform(e) {
    e.preventDefault();
    db.collection('Form ')
      .add({
        name,
        rut,
        email,
        bank,
        typeAccount,
        numberAccount,
      })
      .then(() => {
        setName('');
        setRut('');
        setEmail('');
        setBank('');
        setTypeAccount('');
        setNumberAccount('');
      });
  }

  return (
    <form className="bankform" onSubmit={addform}>
      <section>
        <div>
          <p className="title">Por favor, ingresa tus datos bancarios</p>
          <h3 className="H3">Nombre y Apellido</h3>
          <input
            className="input"
            type="text"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
          <h3 className="H3">Rut</h3>
          <input
            className="input"
            type="number"
            value={rut}
            onChange={(e) => setRut(e.currentTarget.value)}
          />
          <h3 className="H3">Correo electrónico</h3>
          <input
            className="input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <h3 className="H3">Banco</h3>
          <input
            className="input"
            type="text"
            value={bank}
            onChange={(e) => setBank(e.currentTarget.value)}
          />
          <h3 className="H3">Tipo de cuenta</h3>
          <input
            className="input"
            type="text"
            value={typeAccount}
            onChange={(e) => setTypeAccount(e.currentTarget.value)}
          />
          <h3 className="H3">Número de cuenta</h3>
          <input
            className="input"
            type="number"
            value={numberAccount}
            onChange={(e) => setNumberAccount(e.currentTarget.value)}
          />
        </div>
      </section>
      <br />
      <button className="Btn">Enviar</button>
    </form>
  );
};
export default AddForm;

