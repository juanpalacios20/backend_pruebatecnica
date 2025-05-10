# Backend - Stylos App 💈🛠️

Este es el backend de **Stylos**, una aplicación que permite a los usuarios encontrar las mejores peluquerías cerca de su ubicación. Este servidor maneja la lógica de negocio, autenticación, base de datos y API REST. Está construido con **Node.js**, **Express** y utiliza **SQLite** como base de datos ligera para entornos locales o de prueba.

---

## 🚀 Requisitos Previos

Antes de empezar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (v18 o superior recomendado)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/) (opcional para despliegue)
- [Git](https://git-scm.com/)

---

## 🛠️ Instalación y Ejecución Local

bash
# 1. Clona el repositorio
git clone https://github.com/juanpalacios20/backend_pruebatecnica/.git
cd backend_pt

2. Instala las dependencias
npm install

3. Inicia el servidor
npx nodemon index.js

Esto correra la app en localhost:3000

Para que funcione con docker se realiza lo siguiente
1. Construir la imagen
docker-compose build

2. Levantar el contenedor
docker-compose up

Actualmente la app ya esta en un host en la dirección https://backend-pruebatecnica-2cuj.onrender.com

