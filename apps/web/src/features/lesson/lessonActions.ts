/**
 * Server action for lesson progression & completions.
 */
'use server';

export async function markLessonCompleteAction(lessonId: string) {
  if (!lessonId) throw new Error('Lesson ID is required');
  return {
    success: true,
    lesson_id: lessonId,
    status: 'COMPLETED',
    completed_at: new Date().toISOString(),
  };
}

export async function updateProgressAction(lessonId: string, percentage: number) {
  return {
    success: true,
    lesson_id: lessonId,
    progress_percentage: percentage,
  };
}
