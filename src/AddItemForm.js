import React, { useState } from "react";
import './AddItemForm.css';

const AddItemForm = ({ newItem, setNewItem, addItem }) => {
  const [error, setError] = useState('');

  const handleNameChange = (e) => {
    const name = e.target.value;
    if (name.length <= 20) {  
      setNewItem({ ...newItem, name });
    }
  };

  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value);
    if (quantity >= 1 && quantity <= 5) {
      setNewItem({ ...newItem, quantity });
    }
  };

  const handleStockChange = (e) => {
    const stock = parseInt(e.target.value);
    setNewItem({ ...newItem, stock });
  };

  const handleAddItem = () => {
    if (!newItem.name.trim()) {
      setError('Burayı boş geçemezsiniz.');
      document.getElementById('name').focus(); // Odaklanma işlemi
      return;
    }

    setError(''); // Hata mesajını sıfırlama
    addItem(); // Eğer hata yoksa, ürün ekleme
  };

  return (
    <div className="add-item-form">
      <div className="form-group">
        <label htmlFor="name">Ürün Adı</label>
        <input
          id="name"
          type="text"
          placeholder="Ürün adı girin"
          value={newItem.name}
          onChange={handleNameChange} // Uzunluk kontrolü
          className="form-input"
          style={{ width: 220 }}
        />
        {error && <div className="error-message">{error}</div>}
      </div>
      
      <div className="form-group">
        <label htmlFor="quantity">Kalite Durumu</label>
        <input
          id="quantity"
          type="number"
          value={newItem.quantity}
          onChange={handleQuantityChange}
          className="form-input"
          min="1"
          max="5"
          style={{ width: 40 }}
        />
        <span className="text"> Kalite 1-5 arasındadır.</span>
      </div>

      <div className="form-group">
        <label htmlFor="stock">Stok Sayısı</label>
        <input
          id="stock"
          type="number"
          placeholder="Stok Sayısı"
          value={newItem.stock}
          onChange={handleStockChange}
          className="form-input"
          style={{ width: 200 }}
        />
      </div>

      
      <button onClick={handleAddItem} className="btn btn-add" >Ekle</button>
    </div>
  );
};

export default AddItemForm;
