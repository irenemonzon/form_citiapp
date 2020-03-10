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
      <section >
        <div >
          <p className="title">Datos Bancarios</p>
          <label className="name">Nombre y Apellido</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
          <br />
          <label className="Rut">RUT</label>
          <input
            type="number"
            value={rut}
            onChange={(e) => setRut(e.currentTarget.value)}
          />
          <br />
          <label className="Email">Correo Electronico</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <br />
          <label className="field-description">Banco</label>
          <input
            type="text"
            value={bank}
            onChange={(e) => setBank(e.currentTarget.value)}
          />
          <br />
          <label className="Typeaccount">Tipo de cuenta</label>
          <input
            type="text"
            value={typeAccount}
            onChange={(e) => setTypeAccount(e.currentTarget.value)}
          />
          <br />
          <label className="NumberAccount">Numero de cuenta</label>
          <input
            type="number"
            value={numberAccount}
            onChange={(e) => setNumberAccount(e.currentTarget.value)}
          />
          <br />
        </div>
      </section>
      <br />
      <button> Enviar</button>
    </form>
  );
};
export default AddForm;

