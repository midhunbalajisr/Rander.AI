export interface Feedback {
  _id?: string;
  name: string;
  rating: number;
  feedback: string;
}

export const fallbackTestimonials: Feedback[] = [
  {
    _id: '1',
    name: 'Midhun Balaji',
    rating: 5,
    feedback: 'Rander.AI transformed our debugging process. Fixed complex issues in minutes that would have taken hours manually.'
  },
  {
    _id: '2',
    name: 'Ajay Kumar',
    rating: 5,
    feedback: 'The AI understands context perfectly. Production-ready fixes with zero hallucinations.'
  },
  {
    _id: '3',
    name: 'Arivu Mathin',
    rating: 4,
    feedback: 'Great for startup teams. Saved us weeks of debugging time already.',
  },
  {
    _id: '4',
    name: 'Philips Raj',
    rating: 5,
    feedback: 'Enterprise-grade reliability. Integrates seamlessly with our CI/CD pipeline.'
  },
  {
    _id: '5',
    name: 'Subash S',
    rating: 5,
    feedback: 'Best investment for any dev team. The automation features are game-changing.'
  }
];
