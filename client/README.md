- [Root README file](../README.md)
# **Client Notes**
### Steps to setup the react project
- [React Project installation docs](https://ui.shadcn.com/docs/installation/vite)
- `npm create vite@latest my-project`
- `cd my-project`
- `npm install tailwindcss @tailwindcss/vite`
- 'npm install -D tailwindcss@3 postcss autoprefixer'
- 'npx tailwindcss init -p' → this command is used to generate the tailwind.config.js
- Configure the Vite plugin   in the vite.config.ts add this line  `import tailwindcss from '@tailwindcss/vite'`
![tailwind instruction image](./src/assets/image.png)
- import this statement in index.css `@import "tailwindcss";`
- vite.config.ts configures your build environment, while tailwind.config.ts configures your actual CSS design system

- 

