
# 🛒 Omahi Hub

**Your Community Marketplace — Bringing the market closer to you.**

Omahi Hub is a community-driven marketplace platform connecting buyers and sellers across campus and city. From campus stalls to city shops, Omahi Hub makes it easy to discover trusted vendors nearby or grow your business beyond your corner.

> 🚀 Currently in pre-launch phase — accepting early vendor and buyer registrations.

---

## 📌 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 📖 About the Project

Omahi Hub was built to solve a real problem — people on campus and in cities often don't know what's available near them, and small vendors struggle to reach buyers beyond their immediate area.

Omahi Hub bridges that gap with a simple, mobile-friendly platform where:
- **Buyers** can discover trusted vendors by category and location
- **Vendors** can list their products/services and reach more customers
- **Communities** grow stronger through local commerce

The platform is starting at university campuses in Ibadan, Nigeria and expanding to the wider city market.

---

## ✨ Features

### Phase 1 — Landing Page (Live)
- [x] Hero section with buyer email waitlist signup
- [x] Animated category marquee
- [x] How It Works section
- [x] Vendor registration form
- [x] Google Sheets backend integration for leads
- [x] Fully mobile responsive
- [x] Scroll reveal animations

### Phase 2 — Full Platform (In Development)
- [ ] User authentication (Email & Google Sign-in)
- [ ] Vendor dashboard — manage listings, profile, and orders
- [ ] Product listings with image uploads
- [ ] Buyer browse & search with category/location filters
- [ ] Real-time messaging between buyers and vendors
- [ ] Ratings & reviews system
- [ ] Paystack payment integration

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Language | TypeScript |
| Database | Firebase Firestore |
| Authentication | Firebase Auth |
| File Storage | Firebase Storage |
| Payments | Paystack |
| Hosting | Vercel |
| Lead Capture | Google Sheets + Apps Script |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

```bash
node --version   # v18 or higher
npm --version    # v9 or higher
```

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/omahihub.git
cd omahihub
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Then fill in your Firebase credentials (see [Environment Variables](#environment-variables) below).

4. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
omahihub/
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── (auth)/           # Auth routes (login, signup)
│   │   ├── dashboard/        # Vendor dashboard
│   │   ├── browse/           # Buyer browse & search
│   │   └── page.tsx          # Landing page
│   ├── components/           # Reusable UI components
│   │   ├── ui/               # Base components (buttons, inputs)
│   │   ├── vendor/           # Vendor-specific components
│   │   └── buyer/            # Buyer-specific components
│   ├── lib/                  # Utility functions
│   │   ├── firebase.ts       # Firebase config & initialization
│   │   └── utils.ts          # Helper functions
│   ├── hooks/                # Custom React hooks
│   └── types/                # TypeScript type definitions
├── public/                   # Static assets
├── .env.local                # Environment variables (not committed)
├── .env.example              # Example environment variables
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── package.json
```

---

## 🔑 Environment Variables

Create a `.env.local` file and add the following:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Paystack
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=your_paystack_public_key

# Google Sheets (Lead capture)
NEXT_PUBLIC_SHEET_URL=your_google_apps_script_url
```

> ⚠️ Never commit your `.env.local` file. It is already included in `.gitignore`.

---

## 🗺 Roadmap

### ✅ Phase 1 — Pre-Launch (Complete)
- Landing page with waitlist and vendor registration
- Google Sheets integration for lead capture
- Mobile-responsive design
- Deployed on Vercel

### 🔄 Phase 2 — Core Platform (In Progress)
- Firebase authentication (email + Google)
- Vendor onboarding flow and dashboard
- Product listing with image uploads
- Buyer browse, search and filter

### 🔜 Phase 3 — Engagement
- Real-time buyer-vendor messaging
- Ratings and reviews

### 🔜 Phase 4 — Monetisation
- Paystack payment integration
- Vendor subscription tiers
- Analytics dashboard

---

## 🤝 Contributing

Contributions are welcome! If you have suggestions or want to report a bug:

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

Please make sure your code follows the existing style and includes relevant comments.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 📬 Contact

**Omahi Hub Team**

- 🌐 Website: [omahihub.com](https://omahihub.com)
- 📧 Email: hello@omahihub.com
- 🐦 Instagram: [@omahihub](https://instagram.com/omahihub)

---

<p align="center">Built with ❤️ in Ibadan, Nigeria</p>
