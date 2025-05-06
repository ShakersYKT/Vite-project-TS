// const express = require('express');
import express from "express";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Массив для хранения данных
let products = [];

// Обработка POST-запросов
app.post("/data", (req, res) => {
  const newProduct = req.body;
  products.push(newProduct); // Сохраняем данные в массив
  res.status(201).json(newProduct); // Отправляем ответ с новыми данными
});

//Метод GET
app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from server!", title: "Яблоко" });
});

//http://localhost:5000/api/data

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});