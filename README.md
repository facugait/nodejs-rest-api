# Api REST 

Practicing rest api with Nodejs, Express and MongoDB.

## Architectural Style
```
├── src
│   ├── application
│   │   ├── controller
│   │   │    ├── catsController.js
│   │   │    └── dogsController.js
│   │   └── routes
│   │       ├── catRoutes.js
│   │       ├── dogRoutes.js
│   │       └── index.js
│   └── domain
│       ├── BL
│       │   ├── cat.bl.js
│       │   └── dog.bl.js
│       ├── models
│       │   ├── cat.model.js
│       │   └── dog.model.js
│       └── schemas
│           ├── cat.schema.js
│           └── dog.schema.js
├── database.js
├── index.js
└── keys.js
```

`database.js`: File with the connection to our MongoDB database<br/>
`index.js`: File with all the settings and configurations to run our API<br/>
`keys.js`: File with our MongoDB database URL<br/>
`src/application/controllers`: Contains the code for our controllers<br/>
`src/application/routes`: Contains the code with the API routing<br/>
`src/domain/BL`: Contains the code for our API's business logic<br/>
`src/domain/models`: Contains each model representing the structure of data<br/>
`src/domain/schemas`: Contains each schema to validate the data<br/>

## Stack used
- Node.js
- Express
- Mongoose
- @hapi/joi
- Winston
- Moment
