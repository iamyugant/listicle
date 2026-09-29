# WEB103 Project 2 - *Hollow Knight Bosses*

Submitted by: **Yugant Nagralawala**

About this web app: **A listicle of Hollow Knight bosses for players who are tired of being repeatedly defeated. The home page lists each boss as a card with its sprite, name, location, and Hunter's Journal description; clicking a card opens a detail page with every field. All boss data is served from a PostgreSQL database hosted on Render.**

Time spent: **X** hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->
- [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured database table for the list items**
  - [ ] **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  - [ ]  **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command 'SELECT * FROM tablename;' to display your table contents.**

The following **optional** features are implemented:

- [ ] The user can search for items by a specific attribute

The following **additional** features are implemented:

- [x] Unknown boss slugs (e.g. `/bosses/nope`) are checked against the database and return a real HTTP 404
- [x] `npm run reset` rebuilds and reseeds the table from a single seed file
- [x] Cards lift and the boss sprite tilts on hover
- [x] Responsive layout that collapses to a single column on phones

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  GIF tool here
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Database

Table `bosses`:

```sql
CREATE TABLE bosses (
  id          SERIAL PRIMARY KEY,
  slug        VARCHAR(50) UNIQUE NOT NULL,
  name        VARCHAR(100) NOT NULL,
  location    VARCHAR(100) NOT NULL,
  health      INTEGER NOT NULL,
  reward      VARCHAR(100) NOT NULL,
  image       TEXT NOT NULL,
  description TEXT NOT NULL
);
```

| Route | Response |
| --- | --- |
| `GET /` | home page listing every boss |
| `GET /bosses` | all rows as JSON |
| `GET /bosses/:slug` | detail page, or 404 if the slug isn't in the table |

## Running locally

```bash
cd server && npm install
cp .env.example .env     # then paste your Render External Database URL
npm run reset            # creates and seeds the bosses table

cd ../client && npm install && npm run build
cd ../server && npm start
```

Then open http://localhost:3001. The client source lives in `client/`; `npm run build` copies it into `server/public`, which Express serves.

## Notes

The frontend needed no changes when the data moved to PostgreSQL, because `/bosses` returns the same JSON shape the static array did. Column names were chosen to match the keys the pages already read.

Pico v2 scales its root font size up to 21px on wide screens, which inflated rem-based card spacing and pushed long boss names out of their cards, so card internals use fixed pixel sizes and the grid is capped at three columns.

The boss sprites are hotlinked from the Hollow Knight wiki, which blocks requests that carry a referrer, so images are loaded with `referrerpolicy="no-referrer"`.

## License

Copyright 2026 Yugant Nagralawala

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
