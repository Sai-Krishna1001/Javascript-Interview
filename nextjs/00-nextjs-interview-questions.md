# Next.js Interview Questions and Answers

1. **What is Next.js?**
   - A React framework for building server-rendered or statically generated web applications.

2. **What is the difference between SSR and SSG in Next.js?**
   - SSR renders pages on each request (`getServerSideProps`), while SSG pre-renders pages at build time (`getStaticProps`).

3. **What are API Routes in Next.js?**
   - API routes allow you to create serverless functions within a Next.js app for handling backend logic.

4. **How does file-based routing work in Next.js?**
   - Pages are automatically routed based on their file name in the `pages` directory.

5. **What is `getStaticProps` used for?**
   - It fetches data at build time for static generation of a page.

6. **What is `getServerSideProps` used for?**
   - It fetches data on each request for server-side rendering.

7. **What is the purpose of the `next/image` component?**
   - It optimizes images with automatic resizing, lazy loading, and modern format serving.

8. **How do you enable Incremental Static Regeneration (ISR) in Next.js?**
   - Use `revalidate` in `getStaticProps` to regenerate static pages after a set period.

9. **How can you implement dynamic routing in Next.js?**
   - By using dynamic route segments like `[id].js` in the `pages` directory.

10. **What is the role of `next/link` in Next.js?**
    - It provides client-side navigation to improve page transitions in a Next.js app.

11. **How do you handle environment variables in Next.js?**
    - By using `.env` files like `.env.local` for storing environment-specific variables.

12. **What is the use of the `next/head` component?**
    - It allows you to modify the document head, including meta tags and titles, for each page.

13. **What is `getStaticPaths` used for?**
    - It generates paths for dynamic routes at build time in static generation.

14. **How do you create a custom 404 page in Next.js?**
    - By adding a `404.js` file in the `pages` directory.

15. **What is the purpose of `pages/_app.js`?**
    - It allows you to override the default App component and persist layout across pages.

16. **What is Middleware in Next.js?**
    - Code that runs before a request is processed, typically used for authentication or logging.

17. **How can you perform a redirect in Next.js?**
    - By configuring redirects in the `next.config.js` file or using the `useRouter` hook.

18. **What is Static Export in Next.js?**
    - Exporting a Next.js app as a fully static site using the `next export` command.

19. **What are the benefits of using TypeScript with Next.js?**
    - Type safety, better tooling, and improved maintainability in your Next.js applications.

20. **How does Next.js improve SEO?**
    - Through server-side rendering and static site generation, ensuring that content is available for search engines.
