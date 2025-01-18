import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddArticle() {
  const navigate = useNavigate();

  const [reference, setReference] = useState('');
  const [designation, setDesignation] = useState('');
  const [marque, setMarque] = useState('');
  const [prixAchat, setPrixAchat] = useState('');
  const [prixVente, setPrixVente] = useState('');
  const [qtestock, setQtestock] = useState('');
  const [imageartpetitf, setImageartpetitf] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      reference,
      designation,
      marque,
      prixAchat,
      prixVente,
      qtestock,
      imageartpetitf,
    };

    // Faire le add dans la BD
    axios
      .post('http://localhost:3001/produits', newProduct)
      .then((res) => {
        console.log(res);
        navigate('/articles');
      })
      .catch((error) => {
        console.log(error);
        alert('Erreur ! Insertion non effectuée');
      });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="grid gap-3">
          <div className="col-sm-5 p-2 g-col-6">
            <input
              className="form-control"
              placeholder="Référence"
              type="text"
              value={reference}
              onChange={(e) => setReference(e.target.value)}
              style={{ border: '2px solid rgb(193, 153, 173)'}}
            />
          </div>
          <div className="col-sm-5 p-2 g-col-6">
            <input
              className="form-control"
              placeholder="Désignation"
              name="designation"
              type="text"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              style={{ border: '2px solid rgb(193, 153, 173)' }}
            />
          </div>
          <div className="col-sm-5 p-2 g-col-6">
            <input
              className="form-control"
              placeholder="Marque"
              type="text"
              value={marque}
              onChange={(e) => setMarque(e.target.value)}
              style={{ border: '2px solid rgb(193, 153, 173)'}}
            />
          </div>
          <div className="col-sm-5 p-2 g-col-6">
            <input
              className="form-control"
              placeholder="Prix Achat"
              type="number"
              value={prixAchat}
              onChange={(e) => setPrixAchat(e.target.value)}
              style={{ border: '2px solid rgb(193, 153, 173)'}}
            />
          </div>
          <div className="col-sm-5 p-2 g-col-6">
            <input
              className="form-control"
              placeholder="Prix Vente"
              name="prixVente"
              type="number"
              value={prixVente}
              onChange={(e) => setPrixVente(e.target.value)}
              style={{ border: '2px solid rgb(193, 153, 173)' }}
            />
          </div>
          <div className="col-sm-5 p-2 g-col-6">
            <input
              className="form-control"
              placeholder="Quantité"
              type="number"
              value={qtestock}
              onChange={(e) => setQtestock(e.target.value)}
              style={{ border: '2px solid rgb(193, 153, 173)'}}
            />
          </div>
          <div className="col-sm-5 p-2 g-col-6">
            <input
              className="form-control"
              placeholder="Image"
              type="text"
              value={imageartpetitf}
              onChange={(e) => setImageartpetitf(e.target.value)}
              style={{ border: '2px solid rgb(193, 153, 173)'}}
            />
          </div>
          <div>{imageartpetitf ? <img src={imageartpetitf} alt="" width="70" /> : null}</div>
          <div>
          <button style={{ 
                backgroundColor: 'rgb(193, 153, 173)',
                color: '#f8f9fa', 
                fontWeight: 'bold', 
                border: '12px', 
                height: '30px', 
                fontSize: '18px', 
                width: '116px', 
                marginLeft: 'auto', 
                marginRight: 'auto',
                marginTop:'45px',
                }}>
  Valider
</button>

          </div>
        </div>
      </form>
    </div>
  );
}

export default AddArticle;






