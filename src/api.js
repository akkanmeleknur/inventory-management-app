import axios from 'axios';

const API_URL = 'http://localhost:5000/items';

// Ürünleri almak (Read)
export const getItems = () => {
  return axios.get(API_URL);  // GET isteği
};

// Yeni ürün eklemek (Create)
export const addItem = (newItem) => {
  return axios.post(API_URL, newItem);  // POST isteği
};

// Ürün güncellemek (Update)
export const updateItem = (id, updatedItem) => {
  return axios.put(`${API_URL}/${id}`, updatedItem);  // PUT isteği
};

// Ürün silmek (Delete)
export const deleteItem = (id) => {
  return axios.delete(`${API_URL}/${id}`);  // DELETE isteği
};
