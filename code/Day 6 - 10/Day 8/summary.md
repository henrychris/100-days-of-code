# tsconfig.json and Per-Environment settings

1. Create a folder to hold code: ```code/``` in this example.
2. Run ```npm init -y``` to create a ```package.json``` file
3. Create a ```tsconfig.base.json``` file. This will contain the settings common to both environments.
4. Create a tsconfig for development and production: ```ts.dev.json``` and ```tsconfig.prod.json```
5. Install TS in dev environment, if necessary.
6. Include this line, 
``` 
"extends": "./tsconfig.base.json",
```
in ```ts.dev.json``` and ```tsconfig.prod.json```. Make sure it appears before ```compilerOptions```.  
7. In ```package.json``` file, add these in the scripts section:
```
"dev": "tsc --project tsconfig.dev.json && node dist/",
    "prod": "tsc --project tsconfig.prod.json && node dist/"
  ```
The idea is the tsconfig outputs js files into the ```dist/``` folder. This script would apply the compiler settings for that environment as specified in tsconfig.json.