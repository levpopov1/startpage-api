# Node boilerplate for simple API

Nodejs, express and mongoose API starter template

To get started just clone and `npm install`, then `npm run dev` to start the dev server.

Using Prisma

https://www.prisma.io/docs/reference/api-reference/command-reference

- npx prisma db seed => (add randomly generated data into db)
- npx prisma generate => (generate new version of prisma client, after making changes to schema)
- npm prisma format => (fixes the formatting in the .prisma schema file)
- npx prisma db push => (prototype schema changes without generating a migration)
- npx prisma migrate dev => (generate migration once schema changes are finalised)
- npx prisma migrate deploy => (apply migrations in prod)
- npx prisma migrate reset => (deletes and re-creates the database)
- npx prisma studio => (run db gui)
