# Bender Site
Source code and assets for https://benderbot.co. **New & improved using Next.js with app routing!**

If for some reason you want to host a copy of the site, setup is simple:

- Clone the repo

- Run `npm i`

- In `constants.ts`, modify `LOCAL_API_URL` to be the same as `API_BASE_URL` as you won't have direct access

- Run `npm run build` (or `npx next build`)

- Run `npm start` (or `npx next start`)