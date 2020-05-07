# Instrucciones de despliegue (en orden)

# BBDD
La base de datos se arranca de la manera habitual, abriendo un shell y ejecutando java -jar con la ruta de la base de datos H2.

# Backend
Al ser el servidor de naturaleza estática, no está preparado para que un cliente lo abra directamente. Para poder cargar la base de datos adecuadamente, y que el servidor acepte las peticiones CORS, tenemos que abrir el proyecto con Eclipse y realizar los siguientes pasos:

1.-)En el proyecto ISST-20backend, abrir UploadBBDD. Sustituir en las líneas 51, 78, 100, 124 y 145 la string del estilo "C:/Users/Gonzalo/Desktop/Data/......." por la ruta de la carpeta Data que también se presenta en este repositorio.

2.-)Aunque se ha proporcionado una carpeta Servers que contiene el proyecto con el servidor Tomcat debidamente configurado, si se prefiriera no importarlo, se puede utilizar un servidor Tomcat 9.0 normal, pero sustituyendo el fichero web.xml por el que aquí se proporciona. Es el mismo que el de un servidor normal pero permitiendo peticiones CORS, para así poder conectar con el front-end de React.

3.-)Ejecutar el proyecto ISST-20backend con Run as Server... y seleccionando el servidor apropiado. 

# Frontend
Desde un bash, cambiar al directorio raíz del front-end y ejecutar npm start.

# Inicializar BBDD

Para inicializar la BBDD si está vacía, entrar en Database y pulsar el botón "Reset BBDD". Ojo, la operación tarda en ejecutarse, por lo que se recomienda esperar 20-30 segundos y actualizar la página.


-------------------------------------------------------------------------------------------------------------------





# ISST-Grupo06-ELab
Proyecto Electolab para ISST 2019-2020
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
