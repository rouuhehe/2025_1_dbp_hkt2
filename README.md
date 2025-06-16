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
- Mostrar resumen mensual de gastos por categoría usando:  <code>GET /expenses/summary?month=YYYY-MM</code>
- Al hacer clic en una categoría, cargar los gastos individuales con: <code>GET /expenses?month=YYYY-MM&category=nombre</code>

- Crear, editar y eliminar gastos (CRUD)

### 🎯 Metas de ahorro
- Crear y visualizar metas mensuales de ahorro

---

## 🧠 Principio clave: **Consumo eficiente de APIs**

> El frontend **debe mostrar primero solo la información agregada**.  
> La información detallada se mostrará **solo bajo demanda** (por ejemplo, al hacer clic en una categoría).

🚫 **Está prohibido cargar todos los gastos desde el inicio.**

✅ Esto será evaluado en la rúbrica.

---

## 💻 Tecnologías requeridas

- React + TypeScript
- React Router (mínimo para login / dashboard)
- Fetch, Axios o similar para llamadas a la API
- Tailwind CSS u otro sistema de estilos

---

## 🧪 Rúbrica de evaluación (20 pts)

| Criterio | Detalle | Puntos |
|---------|---------|--------|
| 🔐 Login + registro | JWT, rutas protegidas, manejo correcto de sesión | 5 pts |
| 💰 CRUD de gastos y metas | Funcional, validado, con feedback | 5 pts |
| 📊 Agrupación y visualización | Por mes y categoría, totales claros | 5 pts |
| 🚀 Eficiencia de API | Solo carga lo necesario, llamadas progresivas | 3 pts |
| 💡 Código limpio y modular | Tipado, componentes, claridad visual | 2 pts |

---

## 📎 Recursos disponibles

- Documentación de la API
- JSON de ejemplo
- Starter template con autenticación básica (opcional)

---

## 🏁 Entrega

- Sube tu proyecto a GitHub y comparte el enlace
- Asegúrate de que se pueda hacer `npm install && npm run dev` sin errores
- La app debe correr localmente

---

