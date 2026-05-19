import FeaturedCourses from "@/components/FeaturedCourses";
import Features from "@/components/Features";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      <FeaturedCourses />
      <Features />
    </div>
  );
}
