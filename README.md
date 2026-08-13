# Ejercicio realizado en 2ºDAW

### Para ver la página en la nube, usa este enlace https://ejercicioevaluativo3.onrender.com (Tardará un poco en iniciar el servidor)

Aplicación web desarrollada como ejercicio evaluativo y desplegada en **Render**.

La aplicación está disponible públicamente en:

```text
https://ejercicioevaluativo3.onrender.com/
```

## Tecnologías utilizadas

### Java

El proyecto utiliza **Java** como lenguaje principal para desarrollar la lógica de la aplicación.

Java permite implementar la estructura del backend, gestionar los datos y definir el comportamiento de los diferentes componentes del sistema.

---

### Spring Boot

Se utiliza **Spring Boot** como framework principal para el desarrollo del backend.

Spring Boot facilita la creación de aplicaciones web en Java y proporciona una configuración sencilla para desarrollar y desplegar la aplicación.

Entre sus principales funciones dentro del proyecto se encuentran:

* Gestión de las peticiones HTTP.
* Creación de controladores.
* Organización de la lógica de la aplicación.
* Integración con otras tecnologías del ecosistema Spring.

---

### Spring Web

El proyecto utiliza **Spring Web** para gestionar las peticiones realizadas desde el navegador.

Permite definir rutas y controladores mediante anotaciones como:

```java
@GetMapping
@PostMapping
@PutMapping
@DeleteMapping
```

Gracias a estas herramientas, la aplicación puede recibir peticiones HTTP y devolver las respuestas correspondientes.

---

### HTML

**HTML** se utiliza para definir la estructura de las páginas de la aplicación.

Permite crear elementos como:

* Títulos.
* Formularios.
* Botones.
* Tablas.
* Listas.
* Campos de entrada.
* Enlaces.

---

### CSS

**CSS** se utiliza para definir el aspecto visual de la aplicación.

Mediante CSS se puede modificar:

* Colores.
* Tamaños.
* Márgenes.
* Espaciados.
* Fuentes.
* Distribución de los elementos.
* Diseño general de las páginas.

---

### JavaScript

**JavaScript** puede utilizarse en el lado del cliente para añadir comportamiento dinámico a las páginas web.

Permite, entre otras cosas:

* Gestionar eventos.
* Modificar elementos de la página.
* Validar información.
* Realizar peticiones al servidor.
* Mejorar la interacción del usuario con la aplicación.

---

### Maven

El proyecto utiliza **Maven** como herramienta de gestión de dependencias y construcción.

La configuración principal de Maven se encuentra en el archivo:

```text
pom.xml
```

Este archivo contiene las dependencias necesarias para ejecutar el proyecto.

Algunos comandos habituales son:

```bash
mvn clean
mvn compile
mvn test
mvn spring-boot:run
```

---

### Git

Se utiliza **Git** como sistema de control de versiones.

Git permite mantener un historial de los cambios realizados en el proyecto y trabajar con diferentes versiones del código.

Algunos de los comandos más utilizados son:

```bash
git status
git add .
git commit -m "mensaje"
git push
```

---

### GitHub

El código fuente puede almacenarse en **GitHub** para disponer de un repositorio remoto.

GitHub permite:

* Mantener una copia del proyecto en la nube.
* Consultar el historial de cambios.
* Gestionar distintas versiones.
* Compartir el código.
* Integrar el proyecto con plataformas de despliegue como Render.

---

### Render

La aplicación está desplegada utilizando **Render**.

Render es una plataforma de alojamiento en la nube que permite publicar aplicaciones web directamente desde un repositorio Git.

La versión desplegada del proyecto se encuentra disponible en:

```text
https://ejercicioevaluativo3.onrender.com/
```

Render se encarga de:

* Descargar el código del repositorio.
* Construir la aplicación.
* Ejecutar el proyecto.
* Exponerlo mediante una URL pública.
* Volver a desplegar la aplicación cuando se actualiza el repositorio configurado.

---

## Resumen de tecnologías

| Tecnología  | Uso                             |
| ----------- | ------------------------------- |
| Java        | Lenguaje principal del proyecto |
| Spring Boot | Framework del backend           |
| Spring Web  | Gestión de peticiones HTTP      |
| HTML        | Estructura de las páginas       |
| CSS         | Diseño y estilos                |
| JavaScript  | Interactividad en el navegador  |
| Maven       | Gestión de dependencias         |
| Git         | Control de versiones            |
| GitHub      | Repositorio remoto              |
| Render      | Despliegue de la aplicación     |

## Arquitectura general

La aplicación sigue de forma general una estructura similar a:

```text
Usuario
   |
   v
Navegador
   |
   | HTTP
   v
Spring Boot
   |
   v
Controllers
   |
   v
Lógica de la aplicación
   |
   v
Respuesta HTML / JSON
```

El usuario accede a la aplicación mediante el navegador y realiza peticiones al servidor.

Spring Boot recibe estas peticiones, ejecuta la lógica correspondiente y devuelve una respuesta al navegador.

## Requisitos

Para ejecutar el proyecto de manera local es necesario disponer de:

* Java.
* Maven.
* Git.
* Un IDE compatible con Java.

Por ejemplo:

* Eclipse.
* IntelliJ IDEA.
* Visual Studio Code.

## Ejecución local

Después de clonar el repositorio, se debe acceder a la carpeta del proyecto:

```bash
cd ejercicioEvaluativo3
```

A continuación se puede ejecutar la aplicación con:

```bash
mvn spring-boot:run
```

También puede iniciarse directamente desde el IDE ejecutando la clase principal de Spring Boot.

Una vez iniciada, la aplicación estará disponible normalmente en:

```text
http://localhost:8080
```

## Despliegue

La aplicación se encuentra desplegada en **Render**.

URL de producción:

```text
https://ejercicioevaluativo3.onrender.com/
```

Esto permite acceder a la aplicación desde cualquier dispositivo con conexión a Internet sin necesidad de ejecutar el proyecto de forma local.
