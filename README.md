![a banner image showcasing the collection of resources at design index](https://designindex.xyz/preview.png)
# Design Index
![Website](https://img.shields.io/website?url=https%3A%2F%2Fdesignindex.xyz&up_message=all%20systems%20normal&up_color=%231F53FF&down_message=we%20are%20currently%20working%20on%20the%20issue&down_color=%23FF1F39&label=status&labelColor=%239625F8)

## About
I started this directory because I know what it’s like to be an average designer with big ideas and limited resources. I spent hours searching for high-quality mockups, fonts, illustrations, icons, and color tools — most of them scattered, overpriced, or hard to find.
But over time, I discovered a world of free and underrated resources that helped me improve my work dramatically.This site is my way of giving back — a curated collection of design tools, inspiration, and assets that are:

* Handpicked for Quality
* Mostly free or freemium
* Built to help you grow as a designer

Whether you're just starting out or already working on client projects, I hope these resources help you save time, learn faster, and create better work.

## Tech stack
* ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white) - efficient processing of search queries.
* ![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white) - uses R2 object storage to store images
* __Zustand__ - managing global state
* __Tanstack Virtualization__ - efficient loading of elements
* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)  - website is built using react
* ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) - handles routing for the webpage
* ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) - simiplified styling on our webpage
* ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=whi) - website is hosted on vercel

## Mermaid diagram
```mermaid
flowchart TD
    %% Client Layer
    subgraph "Client"
        BROWSER["Web Browser"]:::client
    end

    %% CDN & Hosting Layer
    subgraph "CDN & Hosting"
        VERCELCDN["Vercel CDN & Edge Network"]:::hosting
        VERCELHOST["Vercel Hosting"]:::hosting
    end

    %% Serverless Functions Layer
    subgraph "Serverless Functions"
        SITEMAP["sitemap.js (Edge Function)"]:::function
    end

    %% Data & Storage Layer
    subgraph "Data & Storage"
        SUPABASE["Supabase Service"]:::storage
        PG["PostgreSQL Database"]:::database
        R2["Cloudflare R2 Storage"]:::storage
    end

    %% SPA Application Components
    subgraph "SPA (Vite + React + Tailwind + Zustand + Virtualization)" 
        SPA["SPA Application"]:::client
        MAIN["main.jsx"]:::client
        APP["App.jsx"]:::client
        CMPS["components/"]:::client
        STORE["zustand-global-storage.js"]:::client
        SBCLIENT["supabaseClient.js"]:::client
        ASSETS["assets/"]:::client
        STYLE["index.css"]:::client
        DBJSON["database.json"]:::client
    end

    %% Connections
    BROWSER -->|"GET /index.html, CSS, JS"| VERCELCDN
    VERCELCDN -->|"serve SPA files"| SPA

    SPA -->|"mounts"| MAIN
    MAIN -->|"defines routes"| APP
    APP -->|"renders UI components"| CMPS
    SPA -->|"state management"| STORE
    SPA -->|"API client"| SBCLIENT
    SPA -->|"loads static assets"| ASSETS
    SPA -->|"loads styles"| STYLE
    SPA -->|"dev stub data"| DBJSON

    SPA -->|"GET /resources?query=..."| SUPABASE
    SPA -->|"fetch asset URL"| R2

    BROWSER -->|"GET /api/sitemap"| VERCELHOST
    VERCELHOST -->|"executes"| SITEMAP
    SITEMAP -->|"query or template"| SUPABASE
    VERCELHOST -->|"cache assets"| R2

    SUPABASE -->|"stores data"| PG

    %% Click Events
    click SPA "https://github.com/atharv-rem/design-index/tree/main/design-directory/src/"
    click MAIN "https://github.com/atharv-rem/design-index/blob/main/design-directory/src/main.jsx"
    click APP "https://github.com/atharv-rem/design-index/blob/main/design-directory/src/App.jsx"
    click CMPS "https://github.com/atharv-rem/design-index/tree/main/design-directory/src/components/"
    click STORE "https://github.com/atharv-rem/design-index/blob/main/design-directory/src/zustand-global-storage.js"
    click SBCLIENT "https://github.com/atharv-rem/design-index/blob/main/design-directory/src/supabaseClient.js"
    click ASSETS "https://github.com/atharv-rem/design-index/tree/main/design-directory/src/assets/"
    click STYLE "https://github.com/atharv-rem/design-index/blob/main/design-directory/src/index.css"
    click DBJSON "https://github.com/atharv-rem/design-index/blob/main/design-directory/src/database.json"
    click VERCELCDN "https://github.com/atharv-rem/design-index/tree/main/design-directory/public/"
    click SITEMAP "https://github.com/atharv-rem/design-index/blob/main/design-directory/api/sitemap.js"
    click VITE "https://github.com/atharv-rem/design-index/blob/main/design-directory/vite.config.js"
    click VERCELHOST "https://github.com/atharv-rem/design-index/blob/main/design-directory/vercel.json"
    click PKG "https://github.com/atharv-rem/design-index/blob/main/design-directory/package.json"

    %% Styles
    classDef client fill:#cce5ff,stroke:#004085,stroke-width:1px;
    classDef hosting fill:#d4edda,stroke:#155724,stroke-width:1px;
    classDef function fill:#fff3cd,stroke:#856404,stroke-width:1px;
    classDef storage fill:#d1ecf1,stroke:#0c5460,stroke-width:1px;
    classDef database fill:#bee5eb,stroke:#0c4147,stroke-width:1px;
```

## Guidelines
> [!IMPORTANT]
> Please read this licence before contributing or cloning this github repo

> [!CAUTION]
> cloning of this repo might not give you expected results as the database is held in supabase

