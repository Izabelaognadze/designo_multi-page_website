# Designo multi-page website - React + TypeScript + Vite

![Design preview for the Designo Agency Website Challenge coding challenge](./assets/preview.jpg)

Welcome! 👋

## Table of contents

- [Overview](#overview)
  
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Start the app](#Start-the-app)

- [My process](#my-process)
  
  - [Built with](#built-with)

- [Author](#author)

- [Expanding the ESLint configuration](#Expanding-the-ESLint-configuration)

## Overview

### The challenge

My challenge is to build out this multi-page website and get it looking as close to the design as possible.

My users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Receive an error message when the contact form is submitted if:
  - The Name, Email Address, or Your Message fields are empty should show "Can't be empty"
  - The Email Address is not formatted correctly should show "Please use a valid email address"
- View actual locations on the locations page maps
- See visible focus states for interactive elements when navigating by keyboard
- Understand and be able to navigate page content while using assistive technology
- Access the website without JavaScript

### Links

- Solution URL: [solution URL here](https://github.com/Izabelaognadze/designo_multi-page_website)
- Live Site URL: [live URL here](https://izabelaognadze.github.io/designo_multi-page_website/)

### Start the app

In the project directory, you can run:

## My process

### Built with

- Semantic HTML5 markup
- Tailwind Css
- Flexbox
- Grid
- Mobile-first workflow
- TypeScript
- React
- Vite
- TanStack Router

## Author

Feel free to contact me.

- Github - [Izabelaognadze](https://github.com/Izabelaognadze)
- Linkedin - [izabela-ognadze](https://www.linkedin.com/in/izabela-ognadze/)
- Frontend Mentor - [Izabelaognadze](https://www.frontendmentor.io/profile/Izabelaognadze)
- Facebook - [izabelaa21](https://www.facebook.com/izabelaa21)
- Gmail - [isabella.ognadze@gmail.com](mailto:isabella.ognadze@gmail.com)

## Expanding the ESLint configuration

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
