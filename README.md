# P.ai FullStack Test - Front-end & Back-end

### The Challenge
Both Front end & Back end tasks have been completed

#### BE Task
 - Chosen stack
    - Node.JS/Express and TypeScript
 - Chosen method for fetching and aggregating data
    - Axios used for HTTP Client for ease of use
    - Copied over the original interfaces from the LickAPI of the FE
    - Created Rick and Morty interfaces API json to type infer data from API
    - Used a Data Transfer Object (DTO) class to create the desired format
 - Used path aliases for TS

#### FE Task
 - Chosen stack
    - NextJS/TypeScript: Added/Edited current NextJS project instead of recreating everything from scratch
 - Layout is based on wireframes provided
 - Mockdata has be used
 - Styled components used for template literals and Tailwindcss used for all other layout
 - Fully responsive both home characters page and single character page
 - Used path aliases for TS

Instructions to install and run projects are below:

#### Install node modules
```bash
npm install
```

#### Run BE application
```bash
npm run backend
```

#### Run FE application
```bash
npm run frontend
```

#### Backend localhost
```bash
http://localhost:8080/character/get-characters
```
Or add other character name and status

```bash
http://localhost:8080/character/get-characters/[name]/[status]
```

#### Frontend localhost
```bash
http://localhost:3000
```