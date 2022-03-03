# SEVENACADEMY-NOTICE-BOARD

This is an opensource project used to manage school notice-board.

## intallation process

- git clone https://github.com/chad-vic/7-notice-board.git
- cd 7-notice-board
- npm install
- set up all environment variables(.env) look example from .env.example
- npm run start
- working on client side
  - cd client
  - npm install
  - npm run serve

## API urLs and http methods

1. Users Registration , Login and Logout.

   - POST /api/auth/staff/register
   - POST /api/auth/student/register
   - POST /api/auth/login
   - POST /api/auth/login?staff=true
     - query parameter ?staff=true is required to login as staff member.
   - GET /api/auth/logout.

2. Get all Staff,update,delete members

   - GET /api/staff
   - GET,PATCH,DELETE ( /api/staff/:id)

3. Get all Students,update,delete

   - GET /api/student
   - GET,PATCH,DELETE ( /api/students/:id)

4. Create,update,delete,get all posts and public posts
   - GET /api/posts
   - POST /api/posts
   - GET,PATCH,DELETE ( /api/posts/:id)
   - GET /api/posts/public/all
