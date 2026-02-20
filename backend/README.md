## BITACORA DEL PROYECTO

# Herramientas del Backend

Gestor: MySQL - MariaDB
Express: Framework node js => Gestionar APIS usando protocolo http
Node.js: Js standalone - instalado en mi pc ---> En console se verifica version con: node -v
Nodemon: Plugin para usar en desarrollo - No se usa en produccion - Se usa para refrescar automaticamente el servidor (no se necesita refrescar para ver los cambios)
MySQL2: Gestionar las interacciones con la BD - orm (sequelize)
Cors: Plugin para la gestion de CORS (Permite que la IP 'Ejemplos de IP, no se usan estas especificamente' "192.168.7.12" pueda acceder a la ip "200.3.4.75", basicamente permite el acceso a direcciones ip desconocidas )
Env: Variables globales del proyecto (Credenciales, rutas)

# Herramientas del Frontend

CSS: Framework bootstrap
Empaquetador / bundler: Vite -- (webpack)
Vanilla JS

## Paso a Paso backend

- Iniciar el proyecto con nodeJS - npm init
- Instalar los paquetes requeridos - npm i nodemon MySQL2 cors env express
- Configurar el control de versiones del codigo: Crear el .gitignore
- Iniciar el seguimiento del repositorio: git init, git add .
- Creamos el repo en la nube
- Conectamos el repo de la nube con el repo local: git remote add origin "Ruta de git"
- Hacemos la primer actualizacion local y remota:
  local: git commit -m "Inicio del proyecto"
  remota: git push -u origin master
- Revision del package.json: Verificar las dependencias
- Modificamos el package.json para ejecucion del proyecto:
  "start": "node index.js", este es modo produccion o despliegue
  "dev": "nodemon index.js", este es modo desarrollo o development

## Codificacion del proyecto

- Crear el archivo principal: index.js
- Configurar los plugins: nodemon, cors, hacer la primer prueba
  npm run dev (modo desarrollador) npm start (modo produccion)

## Creacion de modulo conexion a la base de datos

- Importamos la libreria MySQL2 y hacemos la conexion de acuerdo al ejemplo


## codificacion del modulo ciudadano

## Implementacion de arquitectura por capas (N-TIER)
CONTROLLER: Controlador del modulo, maneja la logica de peticiones y respuestas
ROUTES: Se encarga de construir los endpoints o rutas de la api, en ella podemos inyectar los middlewares
MODELS: Se encarga de la interaccion (consultas) con el SGBD, implementa la logica del negocio
MIDDLEWARE: Capa intermedia entre el cliente y la API (ejemplo validar token, validar IP por CORS)
HELPERS: Ayudas, ayudantes, clases o funciones reusables del sistema, por ejemplo, un sistema de errores

## Configuracion de variables de entorno

Sirven para mejorar la confidencialidad, mejor mantenibilidad
En node.js : variables .env 
Instalar el paquete dotenv y configurarlo (Nota: Node.js ya lo implementa nativamente)
- npm i dotenv 
- Crear archivo .env