// AI Service for product recommendations and chatbot
class AIService {
  constructor() {
    this.apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    this.baseURL = 'https://api.openai.com/v1';
  }

  async generateProductRecommendations(userPreferences, currentProduct = null) {
    try {
      const prompt = currentProduct 
        ? `Based on the product "${currentProduct.name}" in cosmetics category, recommend 3 similar products with reasons.`
        : `Recommend 5 trending cosmetic products for someone interested in: ${userPreferences.join(', ')}`;

      const response = await fetch(`${this.baseURL}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'You are a beauty expert AI assistant for an e-commerce cosmetics store.'
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          max_tokens: 300,
          temperature: 0.7,
        }),
      });

      const data = await response.json();
      return data.choices[0]?.message?.content || 'No recommendations available';
    } catch (error) {
      console.error('AI Recommendation Error:', error);
      return 'Unable to generate recommendations at the moment';
    }
  }

  async chatWithAI(message, context = []) {
    try {
      const response = await fetch(`${this.baseURL}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'You are a helpful beauty consultant for an e-commerce cosmetics store. Provide concise, friendly advice about makeup, skincare, and product recommendations.'
            },
            ...context,
            {
              role: 'user',
              content: message
            }
          ],
          max_tokens: 200,
          temperature: 0.8,
        }),
      });

      const data = await response.json();
      return data.choices[0]?.message?.content || 'I apologize, I cannot assist with that right now.';
    } catch (error) {
      console.error('AI Chat Error:', error);
      return 'Sorry, I am having trouble connecting right now. Please try again later.';
    }
  }

  async analyzeSentiment(text) {
    try {
      const response = await fetch(`${this.baseURL}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'Analyze the sentiment of the following text and return only: positive, negative, or neutral'
            },
            {
              role: 'user',
              content: text
            }
          ],
          max_tokens: 10,
          temperature: 0.1,
        }),
      });

      const data = await response.json();
      return data.choices[0]?.message?.content?.toLowerCase().trim() || 'neutral';
    } catch (error) {
      console.error('Sentiment Analysis Error:', error);
      return 'neutral';
    }
  }
}

export default new AIService();