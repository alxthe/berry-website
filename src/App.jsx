import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import CommunityPage from "./pages/CommunityPage";
import BlogPage from "./pages/BlogPage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-50 text-neutral-900">
        {/* Navigation - Updated with new buttons */}
        <header className="sticky top-0 z-40 backdrop-blur bg-neutral-50/80 border-b border-neutral-200">
          <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
            <Link to="/" className="font-semibold tracking-tight text-3xl hover:opacity-70">berry</Link>
            <nav className="hidden md:flex items-center gap-4">
              <Link to="/product" className="rounded-full px-5 py-3 text-lg font-medium hover:bg-neutral-100 transition">Product</Link>
              <Link to="/about" className="rounded-full px-5 py-3 text-lg font-medium hover:bg-neutral-100 transition">About</Link>
              <Link to="/community" className="rounded-full px-5 py-3 text-lg font-medium hover:bg-neutral-100 transition">Community</Link>
              <Link to="/blog" className="rounded-full px-5 py-3 text-lg font-medium hover:bg-neutral-100 transition">Blog</Link>
            </nav>
            <a href="/#join" className="inline-flex items-center rounded-full bg-neutral-900 text-white px-7 py-3.5 text-lg font-medium hover:bg-neutral-800 transition">Get Early Access</a>
          </div>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>

        {/* Footer - Shared across all pages */}
        <footer className="border-t border-neutral-200">
          <div className="mx-auto max-w-7xl px-6 py-12 text-lg text-neutral-600 flex flex-col md:flex-row gap-3 items-center justify-between">
            <div>© {new Date().getFullYear()} berry labs. all rights reserved.</div>
            <div className="flex items-center gap-5 text-lg">
              <Link to="/product" className="hover:opacity-70">Product</Link>
              <Link to="/about" className="hover:opacity-70">About</Link>
              <Link to="/community" className="hover:opacity-70">Community</Link>
              <a href="/#join" className="hover:opacity-70">Join Waitlist</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}