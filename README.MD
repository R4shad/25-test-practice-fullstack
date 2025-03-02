# 📌 Prueba Fullstack: Gestión de Notas de Estudiantes

## 🎯 Objetivo

Desarrollar una pequeña API REST y una interfaz web para gestionar notas de estudiantes, demostrando habilidades en:

- ✅ Diseño de API REST con Express y Sequelize.
- ✅ Manejo de base de datos con MySQL.
- ✅ Consumo de API en React con TypeScript.
- ✅ Buenas prácticas en código y Git.

🕒 **Duración**: 3 horas

## 📌 Requisitos

### **Backend (1 hora 30 min)** → API con Express, Sequelize y MySQL

Desarrollar una API REST con los siguientes endpoints:

- **POST** `/students` → Crear estudiante (nombre y email).
- **GET** `/students` → Obtener lista de estudiantes.
- **POST** `/grades` → Registrar nota (studentId, subject, grade).
- **GET** `/grades/:studentId` → Obtener notas de un estudiante.

**Base de datos en MySQL** con las siguientes tablas:

- **Students** (`id`, `name`, `email`, `createdAt`, `updatedAt`)
- **Grades** (`id`, `studentId`, `subject`, `grade`, `createdAt`, `updatedAt`)

### **Frontend (1 hora 15 min)** → React con TypeScript

Desarrollar una interfaz web con las siguientes características:

- 📌 **Pantalla principal** → Lista de estudiantes y formulario para agregar uno nuevo.
- 📌 **Pantalla de notas** → Lista de notas de un estudiante y formulario para agregar nota.
- 📌 **Consumo de API** con `fetch` o `axios`.

### **Git y Documentación (15 min)**

- **Repositorio en GitHub** (usar SSH).
- **Commits frecuentes** con mensajes descriptivos (`git commit -m "Crear modelo Student"`, etc.).
- **README.md** con instrucciones de instalación y uso.

## 📝 Criterios de Evaluación

- ✅ Código organizado y limpio (buenas prácticas).
- ✅ Uso correcto de Sequelize y MySQL.
- ✅ Componentes en React bien estructurados.
- ✅ Consumo de API funcional.
- ✅ Uso correcto de Git (commits frecuentes).
- ✅ Tiempo de entrega dentro de las 3 horas.

## 🚀 Recomendaciones

- No agregues dependencias innecesarias para no perder tiempo.
- Prueba cada parte antes de seguir.
- Haz commits cada vez que termines una parte.
- Si algo no funciona, revisa logs y errores antes de modificar todo.

## 📦 Instalación y Uso

### **1️⃣ Clonar el repositorio**

```sh
git clone git@github.com:tu_usuario/tu_repositorio.git
cd tu_repositorio
```

### **2️⃣ Configurar el Backend**

```sh
cd backend
npm install
cp .env.example .env # Configurar credenciales de MySQL
npm run dev # Iniciar servidor
```

### **3️⃣ Configurar el Frontend**

```sh
cd frontend
npm install
npm start # Iniciar aplicación React
```

## 🎯 Entrega Final

- 🔹 **Código subido a GitHub** con instrucciones en un `README.md`.
- 🔹 **Demo funcional en localhost** (`npm start` o `node server.js`).

¡Listo para el reto! 🚀
