'use client';

import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { Features } from "@/components/sections/Features";
import { VideoReel } from "@/components/sections/VideoReel";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-deep">
      <Navbar />
      <Hero />
      <TrustBadges />
      <Features />
      <VideoReel />
      <Footer />
    </main>
  );
}
