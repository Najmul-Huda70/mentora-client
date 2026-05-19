import CourseCard from "@/components/CourseCard";
import CoursesHeader from "@/components/CoursesHeader";
import { Button } from "@heroui/react";
import { BookOpen, Filter } from "lucide-react";
const fetchCourses = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/courses`);
  const data = res.json();
  return data || [];
};
const CoursesPage = async ({ searchParams }) => {
  // console.log(searchParams);
  const sParams = await searchParams;
  // console.log(sParams);

  const courses = await fetchCourses(sParams?.searchTerm || "");

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <CoursesHeader />

      <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            All Courses
          </h2>
          <Button
            variant="flat"
            startContent={<Filter className="w-4 h-4" />}
            className="rounded-full font-bold"
          >
            Filters
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses?.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default CoursesPage;
