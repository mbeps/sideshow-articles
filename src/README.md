The `src` directory is where the main source code for a Next.js project resides. This directory contains sub-directories that organize the different types of code in the project.

# **Subdirectories**
## **`components`**
The `components` directory contains the UI components used across the application. These components are reusable building blocks that encapsulate the logic and functionality of a particular part of the user interface. Using components in a React project modularizes the codebase, promotes code reuse, and makes it easier to manage and maintain the application.

## **`pages`**
The `pages` directory contains page routes representing the different pages in the site. Next.js uses the file system as the router, so any `.js`, `.jsx`, `.ts`, or `.tsx` file inside this directory will be treated as a page route. Pages are the building blocks of Next.js applications, and each page is associated with a URL that can be navigated to in the browser.

## **`database`**
The `database` directory contains the schema for the relational database in Supabase. The different entities would be represented here in their own tables. Each entity would also have its policies describing what can and cannot be done. 