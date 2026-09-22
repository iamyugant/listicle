# WEB103 Project 1 - *Hollow Knight Bosses*

Submitted by: **Yugant Nagralawala**

About this web app: **A listicle of Hollow Knight bosses for players who are tired of being repeatedly defeated. The home page lists each boss as a card with its sprite, name, location, and Hunter's Journal description; clicking a card opens a detail page with every field, including health and reward.**

Time spent: **X** hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->
- [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [x] **The web app displays a title**
- [x] **The web app displays at least five unique list items, each with at least three displayed attributes (such as title, text, and image)**
- [x] **The user can click on each item in the list to see a detailed view of it, including all database fields**
  - [x] **Each detail view should be a unique endpoint, such as as `localhost:3000/bosses/crystalguardian` and `localhost:3000/mantislords`**
  - [ ] *Note: When showing this feature in the video walkthrough, please show the unique URL for each detailed view. We will not be able to give points if we cannot see the implementation* 
- [x] **The web app serves an appropriate 404 page when no matching route is defined**
- [x] **The web app is styled using Picocss**

The following **optional** features are implemented:

- [x] The web app displays items in a unique format, such as cards rather than lists or animated list items

The following **additional** features are implemented:

- [x] Cards lift and the boss sprite tilts on hover
- [x] Unknown boss slugs (e.g. `/bosses/nope`) return a real HTTP 404 from the server, not just a client-side message
- [x] Responsive layout that collapses to a single column on phones

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  Add GIF tool here
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Running locally

```bash
cd client && npm install && npm run build
cd ../server && npm install && npm start
```

Then open http://localhost:3001. The client source lives in `client/`; `npm run build` copies it into `server/public`, which Express serves.

## Notes

Pico v2 scales its root font size up to 21px on wide screens, which inflated rem-based card spacing and pushed long boss names out of their cards. The card internals now use fixed pixel sizes and the grid is capped at three columns.

The boss sprites are hotlinked from the Hollow Knight wiki, which blocks requests that carry a referrer, so images are loaded with `referrerpolicy="no-referrer"`.

## License

Copyright 2026 Yugant Nagralawala

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
