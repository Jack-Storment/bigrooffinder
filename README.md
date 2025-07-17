# Big Roof Finder 🏠

An advanced GIS-powered web application that helps roofing contractors, solar installers, and other professionals identify large commercial roofs in their area. Using cutting-edge technology to analyze roof types, conditions, and generate qualified leads.

![Next.js](https://img.shields.io/badge/Next.js-15.4.1-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.3-38B2AC?style=for-the-badge&logo=tailwind-css)
![Supabase](https://img.shields.io/badge/Supabase-Auth-3ECF8E?style=for-the-badge&logo=supabase)

## 🚀 Features

- **GIS Mapping Integration** - Advanced geospatial analysis to identify large commercial roofs
- **Instant Analysis** - Real-time roof analysis with shingle type detection
- **Lead Generation** - Generate qualified leads for roofing professionals
- **User Authentication** - Secure authentication with Supabase
- **Responsive Design** - Beautiful, modern UI that works on all devices
- **Real-time Updates** - Live data updates and notifications

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Authentication:** [Supabase Auth](https://supabase.com/auth)
- **Database:** [Supabase](https://supabase.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Forms:** [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 18.0 or later
- npm or yarn package manager
- A Supabase account (free tier available)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/BigRoofFinder.git
   cd BigRoofFinder
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Set up Supabase**
   
   a. Create a new project at [supabase.com](https://supabase.com)
   
   b. Go to Settings → API and copy your project URL and anon key
   
   c. Configure authentication:
      - Go to Authentication → Settings
      - Enable Email provider
      - Add your site URL and redirect URLs:
        - Site URL: `https://bigrooffinder.com`
        - Redirect URLs: `https://bigrooffinder.com/*`
        - For development, also add: `http://localhost:3000/*`
   
   d. (Optional) Run the SQL in `supabase-setup.sql` to create user profiles table

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser for local development.

## 📁 Project Structure

```
BigRoofFinder/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── sections/          # Page sections
│   │   ├── Navigation.tsx # Auth navigation
│   │   ├── Hero.tsx       # Landing hero
│   │   ├── Features.tsx   # Features section
│   │   └── ...
│   └── ui/                # Reusable UI components
├── lib/                   # Utility functions
│   ├── supabase.ts       # Supabase client & auth
│   └── utils.ts          # Helper functions
├── hooks/                 # Custom React hooks
├── public/               # Static assets
└── ...config files       # Various configuration files
```

## 🚀 Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Key Features Implementation

1. **Authentication Flow**
   - Sign up with email/password
   - Email confirmation required
   - Persistent sessions
   - Secure sign out

2. **Database Schema**
   - User profiles linked to auth.users
   - Contact form submissions
   - Email subscriptions
   - Row Level Security (RLS) enabled

3. **UI Components**
   - Built with shadcn/ui for consistency
   - Fully typed with TypeScript
   - Accessible and responsive

## 🌐 Deployment

### Production Deployment

The application is deployed at [https://bigrooffinder.com](https://bigrooffinder.com).

For production deployment:

1. **Update environment variables** in your hosting platform:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

2. **Update Supabase settings**:
   - Go to Authentication → URL Configuration
   - Set Site URL to: `https://bigrooffinder.com`
   - Add to Redirect URLs: `https://bigrooffinder.com/*`

3. **Deploy to your hosting platform** (Vercel, Netlify, etc.)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon key | Yes |

## 🔒 Security

- All API keys should be kept in `.env.local` and never committed
- Supabase Row Level Security (RLS) is enabled for all tables
- Authentication is handled securely by Supabase
- User passwords are never stored in plain text

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Supabase](https://supabase.com/) for authentication and database
- [shadcn/ui](https://ui.shadcn.com/) for beautiful components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling

## 📞 Support

For support, email support@bigrooffinder.com or visit [https://bigrooffinder.com](https://bigrooffinder.com).

---

Built with ❤️ by the Big Roof Finder team 