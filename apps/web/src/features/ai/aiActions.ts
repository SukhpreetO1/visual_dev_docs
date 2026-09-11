/**
 * Server action for AI explanation and streaming chat responses.
 */
'use server';

export async function triggerExplainAction(concept: string) {
  return {
    success: true,
    concept,
    explanation: `Here is a clear breakdown of **${concept}**: It simplifies complex control flows into step-by-step state changes.`,
  };
}

export async function generateQuizAction(topic: string) {
  return {
    success: true,
    topic,
    questions: [
      {
        question: `What is the primary function of ${topic}?`,
        options: ['State management', 'Network routing', 'Visual simulation', 'File storage'],
        answer_index: 2,
      },
    ],
  };
}
