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
          <div className="mx-auto max-w-7xl px-6 py-5">
            <nav className="flex items-center justify-center gap-6">
              <Link to="/" className="font-semibold tracking-tight text-3xl hover:opacity-70 lowercase">berry</Link>
              <Link to="/product" className="rounded-full px-6 py-3 text-xl font-medium hover:bg-neutral-100 transition lowercase">product</Link>
              <Link to="/about" className="rounded-full px-6 py-3 text-xl font-medium hover:bg-neutral-100 transition lowercase">about</Link>
              <Link to="/community" className="rounded-full px-6 py-3 text-xl font-medium hover:bg-neutral-100 transition lowercase">community</Link>
              <Link to="/blog" className="rounded-full px-6 py-3 text-xl font-medium hover:bg-neutral-100 transition lowercase">blog</Link>
              <a href="/#join" className="inline-flex items-center rounded-full bg-neutral-900 text-white px-8 py-3.5 text-xl font-medium hover:bg-neutral-800 transition lowercase">get early access</a>
            </nav>
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
            <div className="flex items-center gap-5 text-xl">
              <Link to="/product" className="hover:opacity-70 lowercase">product</Link>
              <Link to="/about" className="hover:opacity-70 lowercase">about</Link>
              <Link to="/community" className="hover:opacity-70 lowercase">community</Link>
              <a href="/#join" className="hover:opacity-70 lowercase">join waitlist</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}