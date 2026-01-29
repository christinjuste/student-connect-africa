<<<<<<< HEAD
# Student Connect Africa - Belgium

A community platform for African students studying in Belgium to connect, share experiences, and help each other navigate life abroad.

## Features

- **User Profiles**: Create and customize your profile with information about your university, program, and interests
- **Forum**: Discuss topics, ask questions, and share knowledge with the community
- **Announcements**: Post and find housing, job opportunities, and local events
- **Direct Messages**: Connect with other students privately
- **Community Support**: Help each other navigate student life in Belgium

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: SQLite
- **Authentication**: JWT + bcryptjs
- **Styling**: Tailwind CSS

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Initialize the database:
```bash
npm run dev
```

The database will be created automatically when the server starts.

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment on Vercel

### Prerequisites
- A Vercel account (free at [vercel.com](https://vercel.com))
- The domain `studentconnect.africa` registered and configured

### Steps to Deploy

1. **Push your code to GitHub** (if not already done):
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/student-connect-africa
git push -u origin main
```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Select "Next.js" as the framework
   - Click "Deploy"

3. **Configure your domain**:
   - In Vercel Project Settings → Domains
   - Add `studentconnect.africa`
   - Point your domain registrar's nameservers to Vercel's nameservers (instructions will be shown)

4. **Environment Variables** (if needed):
   - Go to Settings → Environment Variables
   - Add any required environment variables

5. **Your site will be live at**: `https://studentconnect.africa`

### Alternative: Deploy Manually with Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Link to domain
vercel domains add studentconnect.africa
```

## Project Structure

```
├── app/
│   ├── api/              # API routes
│   │   └── auth/         # Authentication endpoints
│   ├── dashboard/        # Dashboard page
│   ├── login/            # Login page
│   ├── signup/           # Sign up page
│   └── page.tsx          # Home page
├── lib/
│   ├── auth.ts           # Authentication utilities
│   └── database.ts       # Database initialization
└── public/               # Static files
```

## Database Schema

### Users Table
- `id`, `username`, `email`, `password`, `firstName`, `lastName`, `country`, `university`, `program`, `bio`, `avatar`, `createdAt`, `updatedAt`

### Forum Posts Table
- `id`, `userId`, `title`, `content`, `category`, `createdAt`, `updatedAt`

### Comments Table
- `id`, `postId`, `userId`, `content`, `createdAt`

### Announcements Table
- `id`, `userId`, `title`, `description`, `type`, `location`, `price`, `contact`, `image`, `createdAt`

### Messages Table
- `id`, `senderId`, `recipientId`, `content`, `isRead`, `createdAt`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Future Features

- [ ] Advanced search and filtering
- [ ] Event calendar and RSVP system
- [ ] File uploads for announcements
- [ ] Real-time notifications
- [ ] Integration with social media
- [ ] Multi-language support

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues.

## License

MIT License - feel free to use this project for your own purposes.

## Support

For questions or issues, please open an issue on GitHub.

---

**Happy studying in Belgium! 🌍**
