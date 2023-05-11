The `pages` directory in a Next.js application is a crucial part of its file-based routing system. Each file or folder inside the `pages` directory corresponds to a route within the application. By default, Next.js automatically generates routes based on the file and folder structure within the `pages` directory. Components within these files are treated as top-level components that represent individual pages of the application. These components are responsible for rendering content, managing state, and handling logic specific to their respective pages.

This directory contains the main components that represent individual pages of the application. Each file or folder in the directory corresponds to a route within the application. These components are responsible for rendering and managing the logic for each page. They may import and utilize other components from various locations within the application to build the complete UI for each page. The `index.tsx` pages are the root pages for each directory and subdirectory.  

# **Pages**
## **`_app.tsx`**
Defines the root _app.tsx component of a Next.js application, integrating Recoil for state management and Chakra UI for styling.

## **`_document.tsx`**
Defines a custom `_document.tsx` component in a Next.js application, which is used to augment the application's HTML structure and includes essential elements such as language, head, and body.

## **Home: `index.tsx`**
Defines the Home component in a Next.js application. 

## **Main Feed: `mainFeed/index.tsx`**
It displays a home feed of articles that have been created by various users. 

## **Authentication Page: `login/index.tsx`**
Displays a log in form where the user can log in. There are links to create a new account or reset the password. This is fully handled by Supabase. 

## **Create Article Page: `createArticle/index.tsx`**
Displays the page where a logged in user would be able to create an article. If the user is not logged in, they are redirected to the sign in page. 

## **Single Article Page: `article/index.tsx`**
Displays the page where the user would be able to view an article. The user would be directed to this page after clicking on a respective article. Each article would have its own page. If the viewer of the article if the creator of the the article, then additional actions (delete and edit) would be shown. 

## **Article Editing Page: `editArticle/index.tsx`**
Displays the page where the user who created the article would be able to edit the article. 

