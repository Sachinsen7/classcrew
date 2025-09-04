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
      <div className="flex items-center justify-between">
        <h2 className="flex items-center justify-start gap-2 text-[36px] font-extrabold text-[var(--primary)] mb-6 animate-fade-in">
          {title}
          <img src="/images/up-arrow.png" alt="" className="w-8 h-8" />
        </h2>
        <h2 className="text-lg font-medium text-gray-500">전체 CLASS</h2>{" "}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch">
        {courses.map((course, index) => (
          <CourseCard
            key={course.id}
            course={course}
            highlighted={title === "POPULAR" && index === 2}
          />
        ))}
      </div>

      {title !== "ALL" && (
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-2">
            <img src="/images/left-arrow.png" alt="" className="w-12 h-12" />
            <img
              src="/images/right-black-arrow.png"
              alt=""
              className="w-12 h-12"
            />{" "}
          </div>
        </div>
      )}
    </section>
  );
}
