# OpenD NFT Market

OpenD is a decentralized NFT marketplace built on the Internet Computer.

The project combines Motoko canisters with a React frontend to handle NFT creation, ownership, listings, and marketplace interactions. The frontend communicates with Internet Computer canisters through the DFINITY agent libraries.

## What It Does

OpenD provides the basic pieces needed for an NFT marketplace:

* Mint NFTs
* Store NFT ownership on-chain
* List NFTs for sale
* View marketplace listings
* Buy and sell NFTs
* Connect the frontend to Internet Computer canisters
* Work with NFT and token canisters
* Run the complete application locally using DFX

The project is designed around the Internet Computer's canister architecture rather than a traditional centralized backend.

## Tech Stack

### Blockchain

* Internet Computer
* Motoko
* DFX

### Frontend

* React
* React Router
* React Bootstrap
* Bootstrap
* TypeScript
* Webpack

### Internet Computer Integration

* `@dfinity/agent`
* `@dfinity/auth-client`
* `@dfinity/identity`
* `@dfinity/principal`
* Candid-generated canister declarations

## Project Architecture

The application is split into three main canisters.

```text
OpenD-NFT-Market
│
├── opend
│   └── NFT marketplace canister
│
├── nft
│   └── NFT canister
│
└── opend_assets
    └── React frontend / static assets
```

The canister configuration is defined in `dfx.json`. The `opend_assets` canister depends on the `opend` canister and serves the frontend application.

## How the Application Works

The frontend communicates with the Motoko canisters through the DFINITY agent.

A typical marketplace flow is:

```text
User
 │
 ▼
React Frontend
 │
 ▼
DFINITY Agent
 │
 ├──────────────► OpenD Canister
 │                    │
 │                    ├── Mint
 │                    ├── List
 │                    ├── Buy
 │                    └── Ownership
 │
 └──────────────► NFT / Token Canister
```

NFT information and marketplace operations are handled by the canisters, while the React application provides the interface users interact with.

## Project Structure

```text
OpenD-NFT-Market/
│
├── src/
│   ├── opend/
│   │   └── main.mo
│   │
│   ├── NFT/
│   │   └── nft.mo
│   │
│   └── opend_assets/
│       ├── assets/
│       └── src/
│           ├── index.html
│           └── ...
│
├── dfx.json
├── package.json
├── package-lock.json
├── tsconfig.json
├── webpack.config.js
├── .gitignore
└── README.md
```

## Requirements

Before running the project locally, install:

* Node.js
* npm
* DFX
* Git

The project currently declares DFX `0.9.3` in `dfx.json`.

## Installation

Clone the repository:

```bash
git clone https://github.com/ArreyRankKing01/OpenD-NFT-Market.git
```

Move into the project:

```bash
cd OpenD-NFT-Market
```

Install the frontend dependencies:

```bash
npm install
```

## Run the Internet Computer Locally

Start the local Internet Computer replica:

```bash
dfx start --clean
```

In another terminal, deploy the canisters:

```bash
dfx deploy
```

After deployment, start the frontend development server:

```bash
npm start
```

The project's frontend script uses Webpack Dev Server, while the `copy:types` script prepares the generated canister declarations used by the frontend.

## Local Development

Once the local replica and frontend are running, the application can be accessed through the local development URL provided by the frontend server.

To see the deployed canisters:

```bash
dfx canister status opend
dfx canister status nft
dfx canister status opend_assets
```

To get a canister ID:

```bash
dfx canister id opend
```

## NFT Marketplace Flow

The basic NFT workflow is:

### 1. Mint

An NFT is created through the NFT canister and assigned to an owner.

### 2. List

The owner can create a marketplace listing for the NFT.

### 3. Browse

The frontend reads marketplace data from the canister and displays available NFTs.

### 4. Buy

A buyer interacts with the marketplace through the frontend to purchase a listed NFT.

### 5. Ownership

After a successful transaction, ownership of the NFT is updated on-chain.

## Frontend and Canisters

The frontend uses DFINITY's JavaScript libraries to communicate with the Internet Computer.

The project includes:

```text
@dfinity/agent
@dfinity/auth-client
@dfinity/identity
@dfinity/principal
```

along with React, React Router, React-Bootstrap, TypeScript, and Webpack.

The frontend can therefore interact with deployed canisters without requiring a traditional REST API or centralized backend.

## Build

To create a production frontend build:

```bash
npm run build
```

The build process also prepares the generated canister declarations required by the frontend.

## Development Notes

This repository is configured primarily for local Internet Computer development.

The project uses:

```text
DFX
Motoko
React
Webpack
```

and keeps the blockchain logic inside Internet Computer canisters rather than a conventional Node.js backend.

## Current Status

OpenD is a working development project focused on learning and implementing NFT marketplace functionality on the Internet Computer.

The repository is still suitable for further development, including improvements to the marketplace interface, transaction handling, wallet/authentication flow, and deployment configuration.

## Possible Next Steps

Some areas that can be expanded include:

* Improved NFT discovery and filtering
* Collection pages
* User profiles
* Transaction history
* Marketplace search
* Better wallet integration
* NFT metadata management
* Production deployment
* Improved transaction feedback
* Marketplace analytics
* Additional token/payment integration

## Author

**Arrey Franky**

GitHub:
https://github.com/ArreyRankKing01
