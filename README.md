# MEN API

The MEN API is inspired on MEAN architecture but this is the part for only api, very simple.

## How to starting men-api?
    git clone git@github.com:luizstacio/men-api.git
    cd ./men-api
    npm install

## Start api
    npm start

## Create modules
    cd ./tools
    gulp generate --module <name of model>

## Routes.json
Config routes url and path module. If you use the generator, it create for you.
    
    {
      "url": "/api/users",
      "path": "./modules/users/routes"
    }

## Directory Layout
    men-api
    │   
    ├─┬ bin -->> starts express api
    │ └── www -->> contains the file bases
    │
    ├─┬ core                -->> contains the file bases        
    │ ├── app.js              -->> app configs          
    │ ├── connection.js       -->> configs of connection moongoose              
    │ ├── controller.js       -->> controller base of Schemas              
    │ ├── model.js            -->> model base            
    │ ├── routes.js           -->> generate routes       
    │ ├── validator.js        -->> common validators          
    │ └── cb_default.js       -->> callback default        
    │
    ├─┬ modules             -->> modules of api. It is the more important of api
    │ └─┬ <module>  
    │   ├── controller.js     -->> controllers of CRUD 
    │   ├── model.js          -->> model config schema of mongoodb
    │   └── routes.js         -->> routes of accessing controllers methods
    │
    ├─┬ tools               -->> tools for help you to create the modules
    │ ├─┬ base                -->> base files for modules
    │ │ ├── controller.js   
    │ │ ├── model.js  
    │ │ └── routes.js   
    │ └── gulpfiles.js        -->> gulpfile contains scripts of generating
    │
    ├── package.json        -->> npm configs
    └── routes.json         -->> routes configs

## License
MIT
