export default {
  newsItems: [],
  myChat: [
    {
      title:
        'Hey there. I´m Alex. Nice to meet you and welcome to my Journal! Cheers! 🍸',
      description:
        'I am your personal Newscaster. What are you interested in right now? Just select a topic from below. ',
      sender: 'alex',
    },
  ],
  newsMessageIndex: 0,
  status: 'start',
  buttonText: [
    'I would like to see some News!',
    'Show me something else',
    'Okay bye',
  ],
  myHeadlines: [],
  buttonLink: '',
  categories: [
    { id: 'general', text: 'General' },
    { id: 'business', text: 'Business' },
    { id: 'technology', text: 'Tech' },
    { id: 'health', text: 'Health' },
    { id: 'science', text: 'Science' },
    { id: 'sport', text: 'Sport' },
    { id: 'entertainment', text: 'Entertainment' },
  ],
  selectedCategory: 'general',
}
