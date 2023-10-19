# GameHub

GameHub is a video game discovery web app that helps you find new and interesting games to play. With GameHub, you can search for games by platform, genre, and more. The api endpoints are obatined from RAWG websites API documentation.

## Screen captures

<img src="./src/assets/screen_captures/capture_game_hub_screen.gif" alt="screen captures" >

## Features

- Listing games
- Inifnite scrolling implemented
- Obtaining more detail about a game by clicking on it
- Game details include : attributes, video trailer and screenshots
- Navigation in light or dark mode
- searching games via the search field
- Filter games by genre
- Filter games by platform
- Filter games by relevance

## Packages/Technologies

- REACT
- TypeScript
- Chakra-ui
- Tanstack - React Query
- ms
- React Router Dom
- Zustand (state management)

## Installation

1. Clone the repository :

   ```bash
   git clone https://github.com/btboubacar/rawg-game-hub-improved

   ```

2. enter the app directory :
   ```bash
   cd rawg-game-hub-improved
   ```
3. Install the dependencies:
   ```bash
   npm install
   # or
   yarn
   ```
4. Before running the application :

   - You need to get an API-Key from Rawg website. A registration in Rawg website will be necessary.
   - In "api-client.ts" under "services" directory, change the "key" property in axiosInstance variable to your obtained API key

5. Launch the application
   ```bash
   npm run dev
   # or
   yarn dev
   ```
