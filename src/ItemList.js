import React from 'react';
import './ItemList.css';

const ItemList = ({ items, deleteItem, updateItem }) => {
  return (
    <ul className="item-list">
      {items.map((item) => (
        <li key={item.id} className="item">
          <div className="item-info">
            <span className="item-name">Ürün Adı : {item.name}</span>
            <span className="item-quantity">Kalite Durumu : {item.quantity}</span>
            <span className="item-stock">Stok Sayısı : {item.stock}</span>
          </div>
          <div className="item-actions">
          <button
              className="btn btn-stock-increase"
              onClick={() =>
                updateItem(item.id, {
                  ...item,
                  stock: item.stock + 1,
                })
              }
            >
              +
            </button>
            <button
              className="btn btn-stock-decrease"
              onClick={() =>
                updateItem(item.id, {
                  ...item,
                  stock: item.stock > 0 ? item.stock - 1 : 0,
                })
              }
            >
              -
            </button>
            
            <button
              className="btn btn-increase"
              onClick={() =>
                updateItem(item.id, {
                  ...item,
                  quantity: item.quantity < 5 ? item.quantity + 1 : item.quantity,
                })
              }
            >
              Kalite Arttır
            </button>
            <button
              className="btn btn-decrease"
              onClick={() =>
                updateItem(item.id, {
                  ...item,
                  quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
                })
              }
            >
              Kalite Azalt
            </button>

            <button
              className="btn btn-delete"
              onClick={() => deleteItem(item.id)}
            >
              Sil
            </button>
            
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
