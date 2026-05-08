# School Youth Parliament Website

Deployable Next.js website for a school Youth Parliament event.

## Run Locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## Main Pages

- `/ruling-party`
- `/opposition`
- `/media`
- `/speaker`
- `/table-officer`
- `/gallery`
- `/about-us`

## Edit Members

Change minister/member names, roles, ideology lines, and photo file names in:

```txt
app/members-edit-here.js
```

Put real member photos in:

```txt
public/members/
```

Then set that member's `image` value to just the file name:

```js
image: "tejas-bansal.jpg"
```

If `image` is empty, the website will show the default placeholder.

Party colors and page text are still in:

```txt
app/data.js
```

## Deploy

This project is ready for GitHub Pages. The workflow is in:

```txt
.github/workflows/deploy.yml
```

After pushing to `main`, open the GitHub repository, go to `Settings > Pages`, and set the source to `GitHub Actions` if GitHub asks.

Expected GitHub Pages URL for the current remote:

```txt
https://aoresta.github.io/Youth-Parliament-Website/
```

Build check:

```bash
npm run build
```
