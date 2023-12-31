# Foro

Pequeña API para un foro que permite a los usuarios crear topicos y comentarios.

## Descripción

Este proyecto fue creado con el propósito de practicar.

## Tecnologías y Dependencias:

- **Node.js**: v18.16.1
- **Dotenv**: v16.3.1
- **Express**: v4.18.2
- **Bcrypt**: v5.1.1
- **Nodemon**: v3.0.1
- **Herramientas de Prueba**: Postman para el manejo de endpoints

## Instalación:

1. Clona este repositorio
2. Instala las dependencias con `npm install`
3. Ejecuta el proyecto con `npm run dev` o `npm start`

## Rutas / Acciones

### /users
- Registro de Usuario
- Inicio de Sesión

#### Middlewares

    Validar carga de datos del usuario en el registro
    Validar correo y usuario unicos
    Validar que las contraseñas coinciden en el registro
    Validar carga de datos del usuario en el login
    Validar credenciales del usuario

---

### /topics
- Mostrar todos los topicos
- Agregar nuevo topico
- Mostrar un topico
- Modificar un topico (del usuario)
- Eliminar un topico (del usuario)

#### Middlewares

    Validar que el usuario este autenticado para acceder a los topicos
    Validar existencia del topico pasado por parametro
    Validar carga de datos del topico
    Validar que el topico pertenezca al usuario

---

### /comments
- Mostrar todos los comentarios (del usuario)
- Agregar nuevo comentario
- Modificar un comentario (del usuario)
- Eliminar un comentario (del usuario)

#### Middlewares

    Validar carga de datos del comentario
    Validar existencia del comentario pasado por parametro
    Validar que el comentario pertenezca al usuario

## Estado

El proyecto se encuentra en su fase final, faltando solamente la documentación.

## Próximos Pasos

- Añadir documentación completa
- Integrar base de datos
