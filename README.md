# To-do list

## Desplegado
Actualmente la aplicación se encuentra desplegada [Aquí](https://www.bastianparedes.com/todolist)

## Cómo está hecho
La información se guarda en una base de datos relacional mysql para evitar la repetición de datos y estabvlecer una consistencia en la estructura de la data.
Para acceder a la base de datos se utilizar el ORM Prisma, por lo que no se requiere escribir código sql, sino objetos (o diccionarios según el lenguaj de programación).
Como frontend se utilizó la librería React, por lo que cada parte de la página visible por el usuario utiliza componentes funcionales.
Como backend se utilizó el Framework Next.js para mantener un solo lenguaje de programación a lo largo de la plataforma y para mantener consistencia con React.

## Instalación
1. Instala NODE en su versión 18.17.0. [Ir a la página](https://nodejs.org/en)
2. Genera una base de de datos mysql en local. [Ir a la página de descarga de mysql](https://dev.mysql.com/downloads/installer/)
3. Genera un archivo ".env" con el acceso a la base de datos, por ejemplo "DATABASE_URL='mysql://root:12345678@localhost/database'".
4. Ejecuta "npm ci" en la terminal para instalar las dependencias
5. Establece los esquemas de la base de datos ejecutando "npx prisma db push" en la terminal.

## Levantar en local
1. Ejecuta "npm run dev" en la terminal
2. En el navegador abre "http://localhost:3000" o el puerto que te entregue la terminal
