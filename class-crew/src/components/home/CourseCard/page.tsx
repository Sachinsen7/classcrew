import type { Course } from "@/types/course";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div
      className="bg-white border border-[var(--primary)] rounded-lg p-4 
                 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105
                 flex flex-col h-full"
      role="article"
      aria-labelledby={`course-title-${course.id}`}
    >
      <div className="flex-1">
        <div className="flex justify-between">
          <span
            className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${course.tagColor}`}
          >
            {course.tagText}
          </span>
          <span className="block text-xs text-[var(--text)] mt-2">
            {course.category}
          </span>
        </div>

        <h3
          id={`course-title-${course.id}`}
          className="text-base font-bold text-[var(--primary)] mt-2"
        >
          {course.title}
        </h3>

        <p className="text-sm text-[var(--text)] mt-2 line-clamp-2">
          {course.description}
        </p>

        <div className="flex flex-wrap gap-1 mt-3">
          {course.tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-[var(--primary)] text-[var(--secondary)] text-xs px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 border-t border-[var(--secondary)] pt-2 flex justify-between text-sm font-bold text-[var(--primary)]">
        <span>{course.date}</span>
        <span>{course.price}</span>
      </div>
    </div>
  );
}
