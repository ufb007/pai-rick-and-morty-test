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
 - Front end Rick and Morty data is requested from backend (Not using Mockdata)
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

#### Run Both BE and FE from one npm command - FE needs BE to run for it to work
```bash
npm run both
```

#### Backend localhost
```bash
http://localhost:8080/api/get-characters
```
Or add other character name and status

```bash
http://localhost:8080/api/get-characters/[name]/[status]
```

#### Frontend localhost
```bash
http://localhost:3000
```