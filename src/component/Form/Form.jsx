import React, { useState } from 'react';
import db from '../../firebase-config';

const account = [{ id: 0, name: "Cuenta Corriente" }, { id: 1, name: "Chequera electronica" }, { id: 2, name: "Cuenta de ahorro" }, { id: 3, name: "Cuenta Vista" }, { id: 4, name: "Cuenta Rut" }];

const databank = [{ id: 0, name: "Bancoestado" }, { id: 1, name: "Coopeuch" }, { id: 2, name: "Banco BBVA" }, { id: 3, name: "Banco Consorcio" }, { id: 4, name: "Banco Ripley" }, { id: 5, name: "Banco Falabella" }, { id: 6, name: "Banco Segurity" }, { id: 7, name: "Banco Itau" }, { id: 8, name: "Banco Santander" }, { id: 9, name: "Scotiabank Chile" }];

const AddForm = () => {
  const [name, setName] = useState('');
  const [rut, setRut] = useState('');
  const [email, setEmail] = useState('');
  const [bank, setBank] = useState(-1);
  const [typeAccount, setTypeAccount] = useState(-1);
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
            type="text"
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
          <br />
          <h3 className="H3">Banco</h3>
          <select className="input" value={bank}
            onChange={(e) => setBank((e.currentTarget.value))}>

            <option value={-1}>Seleccione Banco</option>
            {
              databank.map(item => (
                <option key={item.id} value={item.name}>{item.name}
                </option>
              ))
            }
          </select>
          <br />
          <h3 className="H3">Tipo de cuenta</h3>
          <select className="input" value={typeAccount}
            onChange={(e) => setTypeAccount((e.currentTarget.value))}>
            <option value={-1}>Seleccione tipo de Cuenta</option>
            {
              account.map(item => (
                <option key={item.id} value={item.name}>{item.name}</option>
              ))
            }
          </select>
          <br />
          <h3 className="H3">Número de cuenta</h3>
          <input
            className="input"
            type="text"
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

//firebase deploy --only hosting:citi-app, datos-bancarios