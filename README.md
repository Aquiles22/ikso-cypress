# Cypress FRAMEWORK

## Requisitos

Es necesario tener instalado:

* [NodeJS](https://nodejs.org/en/download/)

## IDE

En el caso de Cypress se pueden utilizar otros IDE como “IntelliJ”, pero detectamos que cuenta con algunas limitaciones en su uso, por lo que recomendamos utilizar Visual Studio Code:

* [Descargar Visual Studio Code](https://code.visualstudio.com/download)

## Plugins requeridos para el IDE VSCode

* [Cypress Helper](https://marketplace.visualstudio.com/items?itemName=Shelex.vscode-cy-helper)
* [Run Cypress](https://marketplace.visualstudio.com/items?itemName=coreylight.run-cy)
* [Cucumber (Gherkin) Full Support](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete)

## Instalación

Cypress es un framework impulsado por el motor NPM. Solo se requiere ejecitar el
siguiente comando:

```
$ npm install
```
## Ejecución

Ahora, realizados todos los pasos anteriores, podemos ejecutar de la siguiente forma:
```
$ npx cypress {Cypress Option} -e TAGS='{Tags}',configFile={Ambiente} {Browser}
```

### Cypress Option <a name="cypress-option"></a>


| Comando | Descripción                                                   |
| :-----: | :------------------------------------------------------------ |
| run     | Ejecutas la pruebas en background                             |
| open    | Abre la interfaz de cypress para pruebas de script y debugger |

### Ambiente <a name="ambiente"></a>


| Comando     | Archivo de configuración                                   | Descripción                    |
| :---------: | :--------------------------------------------------------- | :----------------------------- |
| qa          | [qa-cypress.json](cypress/enviroments/qa-cypress.json)     | Para ambiente de pruebas QA    |
| dev         | [dev-cypress.json](cypress/enviroments/dev-cypress.json)   | Para pruebas locales           |

### Tags <a name="tags"></a>

| Comando | Ejemplo                         | Descripción                                                                       |
| :-----: | :-----------------------------: | :-------------------------------------------------------------------------------- |
| not     | TAGS='@full not @ignore'        | Se ejecutarian todos los scripts con el tag full pero no si tienen el tag ignore  |
| and     | TAGS='@smokeTest and @login'    | Se ejecutan los scripts con tag smoTtest y los que tengan el tag login            |
| or      | TAGS='@login1 or @login2'       | Se ejecutan scrips que tengan el tag login1 o el tag login2                       |

### Browser <a name="browser"></a>

| Comando   | Descripción                                                                                                        |
| :-------: | :----------------------------------------------------------------------------------------------------------------- |
| chrome    | Ejecuta las pruebas en chrome. Si esta la opción `open` de cypress se activara por default la opción de debbuger   |
| firefox   | Ejecuta las pruebas en Firefox                                                                                     |
| electron  | Ejecuta las pruebas en Electron. Esta opción es el navegador por default en caso de no poner el comando `--browser` |

Por ejemplo, usando los datos en las tablas, podriamos tener el siguiente comando:
```
$ npx cypress run -e TAGS='@full',configFile=dev --browser chrome
```
## Docker

Para ejecutar el proyecto en docker bastaria con el siguiente comando:
```
$ docker-compose up cypress  
```
Si es necesario modificar la ejecución en docker podemos hacerlo en el siguiente apartado dentro del archivo [docker-compose.yml](docker-compose.yml)

```
    ...
    image: "cypress/included:8.7.0"
    command: {Comando}
    working_dir: /e2e
    ...
```

Nota: Cuando el framework se ejecuta en docker es posible que se necesite aplicar un comnado extra para generar el reporte, esto solo en caso que no se genere el archivo `cucumber_report/cucumber-report.html`

Genración de reporte:

```
$ npm run merge:reports 
```

## Estructura del proyecto

```
├── cypress
│   ├── enviroments
│   │   ├── # Aqui se agregaran los archivos de ambiente. Se definen URL, ENDPOINTS y conección para la BD
│   ├── fixtures
│   ├── integration
│   │   ├── api
│   │   ├── mobile
│   │   ├── web
│   ├── plugins # Librerias y plugins de NodeJS
│   │   └── index.js # Archivo de configuración de plugins
│   ├── support
│   │   ├── commands.js     # Comandos de funciones generales del framework
│   │   ├── index.js        # Archivo de configuración de comandos para Cypress
├── cucumber_report # Carpeta en donde se generan
├── cypress.json # Configuración general de Cypress
├── docker-compose.yml 
└── package.json # Archivo instalación de Cypress. Contiene librerias y los scripts de ejecución
```