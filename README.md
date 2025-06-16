# # 🧠 Hackathon: Ahorrista (Frontend Challenge)

## 🕑 Duración: 2 horas  
## 📍 Modalidad: Grupal  
## 🧪 Tema: Desarrollo frontend en React + TypeScript

---

## 🎯 Contexto

Tu desafío es construir la interfaz de **Ahorrista**, una app web que ayuda a jóvenes a visualizar y controlar sus gastos personales.

La aplicación debe conectarse a una API que ya está disponible, y presentar la información de manera clara, eficiente y progresiva. **No se permite cargar todos los datos desde el inicio.**

---

## 🛠️ Objetivo

Construir una **SPA (Single Page App)** usando React + TypeScript que permita:

- Registrarse e iniciar sesión (JWT)
- Registrar y ver gastos mensuales
- Establecer metas de ahorro por mes
- Mostrar los gastos **agrupados por categoría y mes**
- Acceder al detalle de cada categoría **solo cuando el usuario lo solicita**

---

## 🧩 Requisitos funcionales

### 🔐 Autenticación
- Registro e inicio de sesión con token JWT
- Almacenar el token en localStorage o sessionStorage
- Proteger las rutas privadas

### 💰 Gastos
- Mostrar resumen mensual de gastos por categoría usando:  GET /expenses/summary?month=YYYY-MM
- Al hacer clic en una categoría, cargar los gastos individuales con: <code>GET /expenses?month=YYYY-MM&category=nombre</code>


