"use client";
import { Button } from "@heroui/react";
import { ArrowRight, Star, Play } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:pt-24 md:pb-32  from-blue-50 via-slate-50 to-slate-50">
      <Swiper
        navigation
        pagination={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 rounded-full border border-blue-600/20 text-blue-600 font-bold text-sm animate-bounce-slow">
                  <Star className="w-4 h-4 fill-blue-600" />
                  <span>Trusted by 10,000+ Students Worldwide</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                  Master New Skills with{" "}
                  <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-blue-800">
                    Expert-Led
                  </span>{" "}
                  Courses
                </h1>
                <p className="text-xl text-slate-500 leading-relaxed max-w-xl">
                  Unlock your potential with over 1,000+ high-quality courses
                  taught by industry professionals. Start your learning journey
                  today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    href="/courses"
                    color="primary"
                    size="lg"
                    className="h-14 px-10 text-lg font-bold rounded-full shadow-2xl shadow-blue-600/30 group"
                  >
                    Explore Courses{" "}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    variant="bordered"
                    size="lg"
                    className="h-14 px-8 text-lg font-bold rounded-full group"
                  >
                    <Play className="mr-2 fill-slate-900 group-hover:scale-110 transition-transform" />{" "}
                    Watch Demo
                  </Button>
                </div>
                <div className="flex items-center gap-6 pt-6 grayscale opacity-60">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
                    alt="Google"
                    width={60}
                    height={24}
                    className="h-6 w-auto"
                  />
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png"
                    alt="LinkedIn"
                    width={100}
                    height={24}
                    className="h-6 w-auto"
                  />
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png"
                    alt="YouTube"
                    width={100}
                    height={24}
                    className="h-6 w-auto"
                  />
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-linear-to-r from-primary to-blue-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-white p-2 rounded-[2.5rem] shadow-2xl overflow-hidden aspect-video lg:aspect-square">
                  <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                    alt="Learning"
                    fill
                    className="rounded-[2rem] object-cover transform transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-8 left-8 right-8 bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-2xl">
                    <div className="flex items-center gap-4">
                      <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map((i) => (
                          <Image
                            key={i}
                            src={`https://i.pravatar.cc/100?img=${i + 10}`}
                            width={40}
                            height={40}
                            className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                            alt="avatar"
                          />
                        ))}
                      </div>
                      <div>
                        <p className="font-bold text-sm">Join the community</p>
                        <p className="text-xs text-slate-500">
                          500+ new enrollments today
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 rounded-full border border-blue-600/20 text-blue-600 font-bold text-sm animate-bounce-slow">
                  <Star className="w-4 h-4 fill-blue-600" />
                  <span>Trusted by 10,000+ Students Worldwide</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                  Master New Skills with{" "}
                  <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-blue-800">
                    Expert-Led
                  </span>{" "}
                  Courses
                </h1>
                <p className="text-xl text-slate-500 leading-relaxed max-w-xl">
                  Unlock your potential with over 1,000+ high-quality courses
                  taught by industry professionals. Start your learning journey
                  today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    href="/courses"
                    color="primary"
                    size="lg"
                    className="h-14 px-10 text-lg font-bold rounded-full shadow-2xl shadow-blue-600/30 group"
                  >
                    Explore Courses{" "}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    variant="bordered"
                    size="lg"
                    className="h-14 px-8 text-lg font-bold rounded-full group"
                  >
                    <Play className="mr-2 fill-slate-900 group-hover:scale-110 transition-transform" />{" "}
                    Watch Demo
                  </Button>
                </div>
                <div className="flex items-center gap-6 pt-6 grayscale opacity-60">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
                    alt="Google"
                    width={60}
                    height={24}
                    className="h-6 w-auto"
                  />
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png"
                    alt="LinkedIn"
                    width={100}
                    height={24}
                    className="h-6 w-auto"
                  />
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png"
                    alt="YouTube"
                    width={100}
                    height={24}
                    className="h-6 w-auto"
                  />
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-linear-to-r from-primary to-blue-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-white p-2 rounded-[2.5rem] shadow-2xl overflow-hidden aspect-video lg:aspect-square">
                  <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                    alt="Learning"
                    fill
                    className="rounded-[2rem] object-cover transform transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-8 left-8 right-8 bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-2xl">
                    <div className="flex items-center gap-4">
                      <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map((i) => (
                          <Image
                            key={i}
                            src={`https://i.pravatar.cc/100?img=${i + 10}`}
                            width={40}
                            height={40}
                            className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                            alt="avatar"
                          />
                        ))}
                      </div>
                      <div>
                        <p className="font-bold text-sm">Join the community</p>
                        <p className="text-xs text-slate-500">
                          500+ new enrollments today
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 rounded-full border border-blue-600/20 text-blue-600 font-bold text-sm animate-bounce-slow">
                  <Star className="w-4 h-4 fill-blue-600" />
                  <span>Trusted by 10,000+ Students Worldwide</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                  Master New Skills with{" "}
                  <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-blue-800">
                    Expert-Led
                  </span>{" "}
                  Courses
                </h1>
                <p className="text-xl text-slate-500 leading-relaxed max-w-xl">
                  Unlock your potential with over 1,000+ high-quality courses
                  taught by industry professionals. Start your learning journey
                  today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    href="/courses"
                    color="primary"
                    size="lg"
                    className="h-14 px-10 text-lg font-bold rounded-full shadow-2xl shadow-blue-600/30 group"
                  >
                    Explore Courses{" "}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    variant="bordered"
                    size="lg"
                    className="h-14 px-8 text-lg font-bold rounded-full group"
                  >
                    <Play className="mr-2 fill-slate-900 group-hover:scale-110 transition-transform" />{" "}
                    Watch Demo
                  </Button>
                </div>
                <div className="flex items-center gap-6 pt-6 grayscale opacity-60">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
                    alt="Google"
                    width={60}
                    height={24}
                    className="h-6 w-auto"
                  />
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png"
                    alt="LinkedIn"
                    width={100}
                    height={24}
                    className="h-6 w-auto"
                  />
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png"
                    alt="YouTube"
                    width={100}
                    height={24}
                    className="h-6 w-auto"
                  />
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-linear-to-r from-primary to-blue-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-white p-2 rounded-[2.5rem] shadow-2xl overflow-hidden aspect-video lg:aspect-square">
                  <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                    alt="Learning"
                    fill
                    className="rounded-[2rem] object-cover transform transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-8 left-8 right-8 bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-2xl">
                    <div className="flex items-center gap-4">
                      <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map((i) => (
                          <Image
                            key={i}
                            src={`https://i.pravatar.cc/100?img=${i + 10}`}
                            width={40}
                            height={40}
                            className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                            alt="avatar"
                          />
                        ))}
                      </div>
                      <div>
                        <p className="font-bold text-sm">Join the community</p>
                        <p className="text-xs text-slate-500">
                          500+ new enrollments today
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
