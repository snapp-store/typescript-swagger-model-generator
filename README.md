
## Introduction
As a developer immersed in React and Next.js projects, I've encountered numerous challenges dealing with multiple APIs, varying URLs, and the complexities of microservices. One of the most pressing issues was the struggle to generate accurate response and payload models. Often, backend updates led to modifications in their models, leaving us grappling with the task of understanding and integrating these changes. With an infrastructure relying on manually generated models and API calls, adapting to backend model updates became an arduous process.

This challenge prompted exploration into solutions that could streamline backend model generation. This article delves into my journey, leveraging Swagger, Axios, and related tools, to tackle this problem. The objective was to create a seamless system where generating and integrating models into our project becomes a straightforward process, even in the face of frequent backend updates.

### I. Understanding the Need for Automated Model Generation
I've faced the common challenges developers encounter:
- **API Variability:** Diverse endpoints, URLs, and response structures across services led to inconsistencies in managing models.
- **Microservices Complexity:** Managing uniform models for microservices' varied response/request structures was a constant hurdle.
- **Backend Model Updates:** Frequent modifications led to complexities in adapting and understanding these changes within the project's infrastructure.

### II. Tools Utilized

#### A. swagger-typescript-api
One of the primary tools utilized in this process is Swagger-Typescript-Api, a versatile library that simplifies the generation of models and API requests from Swagger specifications. With this tool, you can easily generate your payload models and response models and also generate all services with Axios or fetch automatically.

##### Features and Capabilities
- **Generation via Swagger Scheme:** This library enables the generation of API modules based on Swagger schemes.
- **Supports Various Swagger Versions:** It seamlessly supports OpenAPI 3.0, 2.0, JSON, and YAML formats.
- **Choice of Request Libraries:** Offers the flexibility to generate API modules that utilize either the Fetch API or Axios for making requests.

##### Installation
```bash
npm i swagger-typescript-api
```

##### Usage Example for One URL Swagger Models
To generate models and Axios interceptor for a single Swagger URL, execute the following command:

```bash
npx swagger-typescript-api -p https://example.com/swagger/docs/v1/order -o ./src -n myModels.ts --axios
```
- `-p` specifies the Swagger URL for which models and API requests need generation.
- `-o` defines the output directory for the generated file (./src in this instance).
- `-n` sets the name of the generated file (myModels.ts here).
- `--axios` specifies the usage of Axios for API service calls.

##### Generated File Content
Upon execution, the command generates a file (myModels.ts) in the specified output directory (./src). Within this file, you'll find the generated request and response models corresponding to the Swagger specification. Additionally, the library auto-generates all Axios service calls for easy integration into your project.

##### Integration into Project
Once you have the generated file (myModels.ts), you can utilize the Axios instance and services in your application:
```javascript
import { Api } from '../models/myModels';

const appApi = new Api({
    baseURL: BASE_API_URL,
    headers: {
        'Accept-Language': 'fa-IR',
    },
});

appApi.instance.interceptors.request.use(
    async (config) => {
        // Handle token in the header
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

appApi.instance.interceptors.response.use(
    (response) => response,
    async (error) => {
        // Handle response errors (e.g., 401 unauthorized)
        return Promise.reject(error);
    }
);

export { appApi };
```
By exporting the appApi, you can now easily import and use it in your components for making requests:

```javascript
import { appApi } from
```
```javascript
'../services/myService';

const getOrders = async (params: GetOrdersParams) => {
    // Utilize the generated service method
    return await appApi.ordersList(params);
};
```
In this service call (getOrders), you can fetch the ordersList and retrieve data without the need to manually configure Axios requests, and the response model utilized is an exact representation of the backend response. This configuration and utilization of Axios interceptor alongside the generated services simplify API handling and integration within your React/Next.js application.

#### B. Merging Swagger Definitions
Addressing the Challenge of Varied Swagger Definitions:
In the last example, we generate models and services from one swagger URL. In a dynamic backend environment where APIs frequently change and microservices lead to multiple Swagger definition files, managing and consolidating these diverse definitions becomes a cumbersome task. Each service might introduce its Swagger specification, resulting in several fragmented API definitions across different endpoints.

##### The Challenge
This diversity of Swagger definitions often poses challenges in integrating them into a unified Axios instance and creating a single interceptor to manage all API requests efficiently. Manually merging and organizing these varied definitions to ensure consistency and ease of use within the project becomes time-consuming and error-prone.

### The Solution: OpenAPI-Merge-CLI
To address this challenge, the OpenAPI-Merge-CLI library proves to be a powerful tool. This library specializes in merging multiple Swagger or OpenAPI specification files into a unified, coherent JSON file, simplifying the process of consolidating varied definitions into a single cohesive API structure.

##### Why Use OpenAPI-Merge-CLI?
- Merging Swagger Definitions: OpenAPI-Merge-CLI seamlessly combines multiple Swagger JSON or YAML files into one.
- Simplifying Integration: It streamlines the process of integrating diverse Swagger definitions from different services or endpoints into a single file.
- Preparation for Swagger-Typescript-API: This merged file becomes the foundation for Swagger-Typescript-API, allowing for the generation of unified models, payloads, commands, and API service calls effortlessly.

##### Utilizing Merged Swagger Definitions
After utilizing OpenAPI-Merge-CLI to consolidate the varied Swagger definitions into a unified JSON or YAML file, the resulting output serves as the basis for further processing with Swagger-Typescript-API.

##### Generating Unified Models and API Service Calls
Feed this merged JSON or YAML file into Swagger-Typescript-API to generate unified models, payloads, API service calls, and commands. This simplifies the process of creating a single Axios instance and using one interceptor to handle all API requests across different services or microservices.

##### Facilitating Consistency and Efficiency
With a single Axios instance generated from the merged Swagger definitions, handling changes in APIs or microservices becomes more manageable, ensuring consistency and efficiency within the project.

##### Installation
```bash
npm i openapi-merge-cli
```
##### Configuration for Multiple Swagger URLs
Create a JSON configuration file specifying multiple Swagger URLs to merge. For instance:

```javascript
{
  "inputs": [
    {
      "inputURL": "https://example.com/swagger/docs/v1/identity",
      "pathModification": {
        "prepend": "/api-identity"
      }
    },
    {
      "inputURL": "https://example.com/swagger/docs/v1/order"
    }
  ],
  "output":
  "./swagger.output.json"
}
```
##### Generating Merged Swagger File
Execute OpenAPI-Merge-CLI using the configuration file to generate a merged output:

```bash
npx openapi-merge-cli --config ./swagger/swagger.config.json
```
### Generating Models and Axios Service Calls
Use Swagger-Typescript-API to generate models, payloads, and Axios service calls from the merged Swagger output:

```bash
npx swagger-typescript-api -p ./swagger/swagger.output.json -o ./src -n myModel.ts --axios
```
##### Integration into the Application
As previously discussed, create Axios instances and interceptors using the generated APIs. However, when dealing with multiple definitions, Swagger-Typescript-API generates separate objects (instances) for each URL. To consolidate these into a single object for application use:

```javascript
import { Api } from '../myModel';

const appApi = new Api({
    baseURL: BASE_API_URL,
    headers: {
        'Accept-Language': 'fa-IR',
    },
});

// Merge generated APIs into a single object for use in components
export const appRequest = {
    ...appApi.identity,
    ...appApi.order,
    // Add other APIs as needed
};
```
The appRequest object consolidates all services and can be conveniently used across components for making API requests.

##### Example Usage
```javascript
import { appRequest } from '@services/axios';

const getDailyInfoReports = async (params: DailyReportParams) => {
    const response = await appRequest.reportsOrderstatisticsList(params);
    return response.data;
};
```

In this code snippet, appRequest consolidates the Axios services, enabling efficient API requests across your application.

Package.json Commands
You can create commands in package.json and run 'update:myModel', update your model:

```json
"scripts": {
    "merge:swagger": "npx openapi-merge-cli --config ./swagger/swagger.config.json",
    "generate:sdk": "npx swagger-typescript-api -p ./swagger/swagger.output.json -o ./models -n myModel.ts --axios",
    "update:myModel": "npm run merge:swagger & npm run generate:sdk"
}
```
### Conclusion and Considerations
While leveraging Swagger, TypeScript, Axios, and related tools offers significant advantages in automating backend model generation and API integration within React/Next.js projects, there are certain considerations and potential drawbacks to bear in mind.

##### Dependency and Maintenance
One notable consideration is the dependency that arises between the backend and frontend due to the reliance on Swagger specifications. The generated models and services are intricately tied to the structure and definitions outlined in these specifications. Any alterations or updates to the backend APIs must be reflected promptly in the Swagger documentation to ensure the generated code remains accurate and functional.

##### Continuous Swagger Updates
Maintaining alignment between backend changes and the Swagger definitions becomes crucial. Any discrepancies or lag in updating Swagger specifications can lead to mismatches between the generated models and the actual API responses. This necessitates continuous synchronization and communication between backend and frontend teams to ensure seamless integration and avoid inconsistencies.

##### Rigidity in Adoption
Moreover, while these tools streamline development processes, they might introduce a level of rigidity in adoption. Developers may find themselves constrained by the limitations of the generated code, especially in scenarios where customization or deviations from the standard specifications are necessary.

##### Conclusion
In conclusion, while the approach outlined here significantly enhances development efficiency and consistency, it's important to remain vigilant about the dependency on Swagger, the need for consistent updates, and the potential limitations in flexibility. It's crucial to strike a balance between automation and adaptability,
understanding that these tools serve as aids but might not cover all use cases or evolving requirements without occasional manual intervention.

By acknowledging these considerations and proactively managing the dependencies and updates, developers can effectively utilize these tools to build robust, maintainable, and scalable

[OpenAPI-Merge-CLI](https://www.npmjs.com/package/openapi-merge-cli)
[Swagger-Typescript-API](https://www.npmjs.com/package/swagger-typescript-api)


