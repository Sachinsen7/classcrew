import CourseCard from "@/components/home/CourseCard/page";
import type { Course } from "@/types/course";
import Button from "@/components/ui/Button";

interface CourseSectionProps {
  title: string;
  courses: Course[];
}

export default function CourseSection({ title, courses }: CourseSectionProps) {
  return (
    <section className="py-8 px-6 max-w-7xl mx-auto">
      <h2 className="flex items-center justify-start gap-2 text-[36px] font-extrabold text-[var(--primary)] mb-6 animate-fade-in">
        {title}
        <img src="/images/up-arrow.png" alt="" className="w-8 h-8" />
      </h2>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-8">
        <img src="/images/left-arrow.png" alt="" className="h-20" />
        <img src="/images/right-black-arrow.png" alt="" className="h-20" />
      </div>
    </section>
  );
}
