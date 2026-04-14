import { coursesData } from '@/lib/coursesData';

export async function generateMetadata({ params }) {
  const { id } = await params;
  const courseId = Number(id);
  const course = coursesData.ar.find((item) => item.id === courseId);

  if (!course) {
    return {
      title: 'كورس غير موجود | معلم اللغة الإنجليزية',
      description: 'الكورس المطلوب غير متوفر.',
    };
  }

  return {
    title: `${course.name} - حجز كورس | معلم اللغة الإنجليزية`,
    description: course.desc,
    openGraph: {
      title: `${course.name} - حجز كورس`,
      description: course.desc,
      images: [course.image],
    },
  };
}