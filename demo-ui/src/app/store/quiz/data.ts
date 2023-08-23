type QuestionType = {
  id: number;
  question: string;
  answers: string[];
};

const Questions: QuestionType[] = [
  {
    id: 1,
    question: "How do you primarily use your pen?",
    answers: [
      "Taking notes and writing in a planner/journal",
      "Drawing or sketching",
      "Signing documents or official papers",
      "Everyday writing tasks (e.g., to-do lists, letters)",
    ],
  },
  {
    id: 2,
    question: "Which tip size do you prefer?",
    answers: [
      "Fine tip (0.5mm or less) for precise writing",
      "Medium tip (0.7mm) for a balance of precision and smoothness",
      "Bold tip (1.0mm or more) for a smooth and bold writing experience",
    ],
  },
  {
    id: 3,
    question: "What type of grip do you find most comfortable?",
    answers: [
      "Rubberized grip for a soft and cushioned feel",
      "Textured grip for added control and grip",
      "Standard plastic/metal grip without additional cushioning",
    ],
  },
  {
    id: 4,
    question: "How important is the pen's overall design to you?",
    answers: [
      "Very important - I prefer stylish and elegant designs",
      "Moderately important - It should look good, but functionality matters more",
      "Not important - Functionality matters the most, regardless of the design",
    ],
  },
  {
    id: 5,
    question: "Are you left-handed or right-handed?",
    answers: ["Left-handed", "Right-handed"],
  },
  {
    id: 6,
    question: "How much do you value smoothness when writing?",
    answers: [
      "It's essential - I want the pen to glide effortlessly on paper",
      "Moderately important - A balance of smoothness and feedback is ideal",
      "Not a priority - Smoothness is nice, but other factors matter more",
    ],
  },
  {
    id: 7,
    question: "What kind of ink do you prefer?",
    answers: [
      "Gel ink for vibrant colors and smooth writing",
      "Ballpoint ink for long-lasting and reliable use",
      "Rollerball ink for a liquid ink feel with less smudging",
    ],
  },
  {
    id: 8,
    question: "What is your budget for a pen?",
    answers: ["Low - Under $5", "Moderate - $5 to $15", "High - $15 or more"],
  },
  {
    id: 9,
    question: "How important is it for the pen to be refillable?",
    answers: [
      "Very important - I want a pen I can use for a long time",
      "Moderately important - Refillable is nice, but not a deal-breaker",
      "Not important - I'm fine with disposable pens",
    ],
  },
  {
    id: 10,
    question: "Do you have any specific brand preferences for pens?",
    answers: [
      "Yes, I have a preferred brand(s).",
      "No, I'm open to trying different brands.",
    ],
  },
];

export { Questions };
export type { QuestionType };
