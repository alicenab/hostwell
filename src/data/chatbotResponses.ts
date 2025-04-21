interface ChatResponse {
  keywords: string[];
  response: string;
}

export const chatResponses: ChatResponse[] = [
  {
    keywords: ['stay', 'include', 'included', 'accommodation', 'service'],
    response: 'Our stays typically include accommodation in the host\'s property, daily breakfast, Wi-Fi, and basic amenities. Many hosts also offer optional add-ons like guided local tours, traditional cooking lessons, or transportation services. Each listing specifies exactly what\'s included, so you can choose the experience that best fits your needs.'
  },
  {
    keywords: ['pay', 'payment', 'credit card', 'cash', 'how to pay'],
    response: 'You can pay for your booking using major credit cards (Visa, Mastercard) through our secure payment system. We also offer PayPal as a payment option. The full amount is charged at the time of booking, with 95% going to your host and 5% as our platform fee. For questions about payment, please contact our support team.'
  },
  {
    keywords: ['eat', 'food', 'restaurant', 'dining', 'cuisine'],
    response: 'Each region in Azerbaijan offers unique culinary experiences. We provide recommendations for local restaurants in every region, from traditional tea houses to upscale dining. Many hosts can also provide home-cooked meals or direct you to the best local food markets. Check the "Regional Recommendations" section for specific suggestions in your destination area.'
  },
  {
    keywords: ['transport', 'transportation', 'get around', 'travel'],
    response: 'Transportation options vary by region. In Baku, public transportation and ride-sharing services are readily available. In other regions, local taxis are common, and some hosts offer private transportation services. We recommend discussing transportation needs with your host before arrival, as they can provide the best local advice for getting around efficiently.'
  },
  {
    keywords: ['booking', 'reserve', 'reservation', 'cancel', 'cancellation'],
    response: 'To make a booking, select your desired dates and click "Book Now" on the host\'s profile. Our standard cancellation policy allows free cancellation up to 7 days before your stay. Cancellations within 7 days are eligible for a 50% refund. Some hosts may have different policies, which will be clearly marked on their listings.'
  },
  {
    keywords: ['culture', 'tradition', 'customs', 'local'],
    response: 'Azerbaijan has a rich cultural heritage blending Eastern and Western influences. Our hosts can guide you through local customs and traditions. Respecting local customs is appreciated: dress modestly when visiting religious sites, remove shoes when entering homes, and accept tea when offered as it\'s an important hospitality gesture.'
  },
  {
    keywords: ['weather', 'climate', 'season', 'when to visit'],
    response: 'Azerbaijan\'s climate varies by region. Baku has hot summers and mild winters, while mountain areas like Quba have cooler temperatures year-round. The best time to visit is generally spring (April-June) and fall (September-October) for pleasant temperatures and less crowded attractions. Lankaran in the south has a subtropical climate with mild winters.'
  },
  {
    keywords: ['safety', 'safe', 'security'],
    response: 'Azerbaijan is generally considered a safe country for travelers with low crime rates. Our platform verifies all hosts to ensure safety standards. We recommend standard travel precautions like securing valuables and being aware of your surroundings. For any safety concerns during your stay, you can contact both your host and our 24/7 support team.'
  },
  {
    keywords: ['host', 'become a host', 'hosting'],
    response: 'To become a host on our platform, you need to be a US-educated Azerbaijani alumnus. You can sign up through our "Become a Host" page, where you\'ll provide details about your accommodation, availability, and pricing. Our team will review your application and help you set up your profile. Hosts typically earn 95% of the booking amount, with 5% going to platform fees.'
  },
  {
    keywords: ['hello', 'hi', 'hey', 'greetings'],
    response: 'Hello! Welcome to our Azerbaijan host-guest platform. How can I help you today? You can ask me about accommodations, payment options, regional information, or anything else related to your stay in Azerbaijan.'
  }
];

export const fallbackResponse = "I'm not sure I understand your question. You can ask me about what's included in stays, payment methods, dining options in each region, or other travel-related questions about Azerbaijan.";