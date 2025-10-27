DeckScaff - Scaffolding Materials Website
Overview
DeckScaff is a modern, responsive website for a scaffolding materials company that showcases their inventory of rental and sale equipment. Built with Next.js, React, and Tailwind CSS, the website provides an intuitive user experience for browsing scaffolding products and contacting the company.

Features
🏗️ Product Catalog
Comprehensive Inventory: Display of various scaffolding systems and accessories

Dual Options: Materials available for both rental and purchase

Categorization: Organized by scaffolding types, accessories, fittings, and safety equipment

Status Tracking: Real-time availability status (Available, Limited Stock, Coming Soon)

🔍 Advanced Filtering
Type Filters: Filter by "All Materials", "For Rent", or "For Sale"

Category Filters: Dropdown selection for specific product categories

Real-time Updates: Instant filtering without page reloads

📱 User Experience
Responsive Design: Optimized for desktop, tablet, and mobile devices

Interactive Cards: Hover effects and smooth animations

Visual Status Indicators: Color-coded availability badges

Feature Highlights: Key product features with checkmark icons

💬 Contact Integration
Microsoft Teams Integration:

Join Teams meetings via web

Start direct Teams chats

Desktop app deep linking

Multiple Contact Options: Meeting joins, direct messaging, and phone calls

Technology Stack
Frontend
Next.js 14 - React framework with App Router

TypeScript - Type-safe development

Tailwind CSS - Utility-first CSS framework

React Hooks - State management (useState)

Design Features
Modern UI/UX - Clean, professional scaffolding industry design

Orange Color Scheme - Brand-appropriate coloring

Card-based Layout - Consistent product presentation

Gradient Backgrounds - Visual appeal and depth

Product Categories
Scaffolding Systems
Kwikstage Scaffolding System

Cuplock Scaffolding

Mobile Tower Scaffolds

Structural Components
Scaffolding Tubes

Scaffolding Couplers

Safety & Accessories
Safety Guardrails

Scaffolding Boards

Formwork Systems (Coming Soon)



Project Structure
text
deckscaff/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx           # Homepage component
│   └── favicon.ico        # Website favicon
├── components/
│   └── Materials.tsx      # Main materials component
├── public/                # Static assets
└── package.json
Getting Started
Prerequisites
Node.js 18+

npm or yarn

Installation
Clone the repository

Install dependencies:

bash
npm install
Run the development server:

bash
npm run dev
Open http://localhost:3000 in your browser

Building for Production
bash
npm run build
npm start
Customization
Updating Products
Edit the materials array in Materials.tsx to:

Add new products

Update pricing and availability

Modify categories and features

Styling
Modify Tailwind classes in components

Update color scheme in utility classes

Adjust responsive breakpoints as needed

Contact Information
Update Teams links and phone numbers in the contact section:

Replace Teams meeting URLs

Update chat links with actual email

Modify phone numbers for your region

Key Components
Materials Component
Product grid display

Filtering logic

Status management

Contact modal

Product Cards
Image/icon display

Feature lists

Action buttons

Status badges

Business Benefits
For Customers
Easy Browsing: Intuitive product discovery

Quick Filtering: Find relevant materials fast

Clear Pricing: Rental vs purchase options

Direct Contact: Multiple ways to reach the company

For the Business
Professional Presence: Modern online showcase

Lead Generation: Clear call-to-action buttons

Inventory Management: Visual stock status

Competitive Edge: Tech-forward approach in traditional industry

Future Enhancements
Planned Features
Shopping cart functionality

Online booking system

Customer account portal

Inventory management dashboard

Integration with CRM systems

Multi-language support

Advanced search functionality

Support
For technical support or questions about this website:

Contact the development team

Refer to Next.js and Tailwind CSS documentation

Check browser console for any errors

License
This project is built for DeckScaff company. All rights reserved