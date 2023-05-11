Welcome to the Article Posting Web Project! This project provides a simple platform for users to post, view, edit, and delete articles. Users can sign up, sign in, and perform various actions related to articles.

# **Requirements**
These are the requirements needed to run the project:
- Node 18 LTS
- Next.JS 12
- Supabase V2

# **Features**
## **Authentication and Account Management**
- **User Sign Up**: Users can create an account by signing up with their credentials.
- **User Sign In**: Registered users can sign in to access their accounts and perform actions.
- **User Reset Password**: Users can reset their password if they are unable to sign in. 

## **Articles**
- **View Articles**: Users can browse and view all posted articles.
- **Create Articles**: Signed-in users can create new articles by providing a title and content.
- **Edit Articles**: Users can edit their own articles by updating the title and content.
- **Delete Articles**: Users have the ability to delete their own articles.

# **Stack**
These are the main technologies that were used in this project:
- [**TypeScript**](https://www.typescriptlang.org/): TypeScript is a superset of JavaScript that adds optional static typing and other features to make the development of large-scale JavaScript applications easier and more efficient. TypeScript enables developers to catch errors earlier in the development process, write more maintainable code, and benefit from advanced editor support.
- [**Next.js**](https://nextjs.org/): Next.js is a popular React framework for building server-side rendered (SSR) and statically generated web applications. It provides a set of tools and conventions that make it easy to build modern, performant web applications that can be easily deployed to a variety of hosting environments.
- [**NextUI**](https://nextui.org/): NextUI is a UI component library built specifically for Next.js applications. It offers a collection of customizable and reusable components that follow the principles of minimalism, simplicity, and accessibility. NextUI provides a consistent and delightful user experience while promoting efficient development practices.
- [**Supabase**](https://supabase.io/): Supabase is an open-source Firebase alternative that provides a backend-as-a-service platform. It combines the power of a PostgreSQL database with a set of RESTful APIs and authentication services. Supabase offers real-time data syncing, user authentication, and authorization, making it a suitable choice for building modern web applications with a scalable and secure backend.

# **Running Application Locally**
These are simple steps to run the application locally. For more detail instructions:

## 1. **Clone the repository**

```
git clone https://github.com/mbeps/sideshow-articles.git
```

## 2. **Navigate to the project directory**

```
cd article-posting-web-project
```

## 3. **Install dependencies**

```
npm install
```

## 4. **Set up the environment variables**
   - Create a `.env.local` file in the project root directory.
   - Define the following environment variables in the `.env.local` file from Supabase:

```
NEXT_PUBLIC_SUPABASE_URL = ''
NEXT_PUBLIC_SUPABASE_ANON_KEY = ''
NEXT_PUBLIC_DATABASE_PASSWORD = ''
```

## 5. **Start the development server**

```
npm run dev
```

This should run the project on `localhost:3000`
