# ShopHub - MERN E-Commerce Platform

A modern, full-stack e-commerce platform built with Next.js, React, Supabase, and Stripe.

## Features

### Customer Features
- **Product Catalog** - Browse products with search, filtering, and sorting
- **Shopping Cart** - Add/remove items, update quantities, persistent storage
- **Wishlist** - Save favorite items for later
- **Secure Checkout** - Stripe embedded checkout with payment processing
- **User Authentication** - Email/password signup and login with Supabase
- **Order Tracking** - View order history and status

### Admin Features
- **Dashboard** - Overview with key metrics (orders, products, customers, revenue)
- **Product Management** - Add, edit, and delete products
- **Order Management** - View and track all orders with status updates
- **Customer Analytics** - View customer information and purchase history

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS v4, shadcn/ui components
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Payments**: Stripe
- **Storage**: LocalStorage for cart/wishlist, PostgreSQL for persistent data
- **Deployment**: Vercel

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account
- Stripe account

### Installation

1. Clone the repository
\`\`\`bash
git clone https://github.com/yourusername/shophub.git
cd shophub
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
\`\`\`

3. Set up environment variables
\`\`\`bash
cp .env.example .env.local
\`\`\`

Fill in your environment variables:
- Supabase URL and keys
- Stripe publishable and secret keys

4. Run database migrations (via Supabase dashboard or using the provided SQL scripts)

5. Start the development server
\`\`\`bash
npm run dev
\`\`\`

Visit `http://localhost:3000` to see the application.

## Project Structure

\`\`\`
shophub/
├── app/
│   ├── auth/              # Authentication pages (login, signup)
│   ├── cart/              # Shopping cart page
│   ├── checkout/          # Checkout page with Stripe
│   ├── dashboard/         # Admin dashboard
│   ├── product/           # Product detail pages
│   ├── wishlist/          # Wishlist page
│   ├── page.tsx           # Homepage
│   └── layout.tsx         # Root layout
├── components/
│   ├── admin/             # Admin dashboard components
│   ├── product-*.tsx      # Product-related components
│   ├── navbar.tsx         # Navigation bar
│   ├── footer.tsx         # Footer
│   └── ui/                # shadcn/ui components
├── lib/
│   ├── cart-context.tsx   # Cart and wishlist state
│   ├── products.ts        # Product data
│   ├── stripe.ts          # Stripe configuration
│   └── supabase/          # Supabase client setup
├── scripts/
│   └── 001_create_tables.sql  # Database schema
└── public/                # Static assets
\`\`\`

## Key Features Explained

### Shopping Cart & Wishlist
- State managed with React Context
- Data persists using browser LocalStorage
- Real-time updates across components
- Seamless cart-to-checkout flow

### Stripe Integration
- Server-side price validation
- Embedded checkout UI
- No client-side price manipulation
- Secure payment processing

### Authentication
- Email/password authentication via Supabase
- Protected dashboard routes with middleware
- Row-level security on all tables
- Email verification required for new accounts

### Admin Dashboard
- Real-time metrics and analytics
- Product management interface
- Order status tracking
- Customer insights

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
\`\`\`bash
git push origin main
\`\`\`

2. Connect your GitHub repository to Vercel
- Visit vercel.com and sign in
- Click "New Project" and select your repository
- Add environment variables from `.env.example`
- Click "Deploy"

3. Set up database
- Create a Supabase project
- Run the migration scripts from `/scripts`
- Add Supabase credentials to Vercel environment

4. Configure Stripe
- Add Stripe keys to Vercel environment
- Set up Stripe webhooks (optional)

## Performance Optimizations

- React Compiler enabled for optimized builds
- Image optimization with Next.js Image component
- Dynamic imports for code splitting
- Tailwind CSS v4 for smaller bundle size
- Server-side rendering for better SEO
- LocalStorage caching for cart/wishlist

## Security

- Row-level security on all Supabase tables
- Server-side price validation for checkout
- Environment variables for sensitive data
- Protected admin routes with middleware
- HTTPS enforced in production

## API Routes

All checkout and payment processing is handled through server actions for security.

## License

MIT License - see LICENSE file for details

## Support

For issues or questions, please open an issue on GitHub or contact support@shophub.com

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.
