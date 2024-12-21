import React, { useState, useEffect } from "react";
import { getItems, addItem, updateItem, deleteItem } from './api';
import ItemList from "./ItemList";
import AddItemForm from "./AddItemForm";
import './App.css'; 

const App = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", quantity: 1, stock: 0 });  // Stock eklendi

  useEffect(() => {
    getItems()
      .then((response) => {
        setItems(response.data);  // API'den gelen veriyi state'e ekleyin
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleAddItem = () => {
    const maxId = items.length > 0 ? Math.max(...items.map((item) => parseInt(item.id))) : 0;
    const id = (maxId + 1).toString();
    const newItemWithId = { ...newItem, id };

    addItem(newItemWithId)
      .then((response) => {
        setItems([...items, response.data]);  // Yeni öğeyi state'e ekle
        setNewItem({ name: "", quantity: 1, stock: 0 });  // Formu sıfırla
      })
      .catch((error) => {
        console.error("Error adding item:", error);
      });
  };

  const handleUpdateItem = (id, updatedItem) => {
    updateItem(id, updatedItem)
      .then(() => {
        setItems(items.map((item) => (item.id === id ? updatedItem : item)));
      })
      .catch((error) => {
        console.error("Error updating item:", error);
      });
  };

  const handleDeleteItem = (id) => {
    deleteItem(id)
      .then(() => {
        setItems(items.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
  };

  return (
    <div className="app-container">
      <h1>Ürün Yönetim Uygulaması</h1>

      <AddItemForm newItem={newItem} setNewItem={setNewItem} addItem={handleAddItem} />

      <ItemList items={items} deleteItem={handleDeleteItem} updateItem={handleUpdateItem} />
    </div>
  );
};

export default App;
