import React, { createContext, useContext, useState } from 'react';

// Create the context
const ChatbotContext = createContext();

// Export the context
export { ChatbotContext };

// Custom hook to use the chatbot context
export const useChatbot = () => {
  const context = useContext(ChatbotContext);
  if (!context) {
    throw new Error('useChatbot must be used within a ChatbotProvider');
  }
  return context;
};

// Provider component
export const ChatbotProvider = ({ children }) => {
  const [chatbotState, setChatbotState] = useState({
    isOpen: false,
    isMinimized: false,
    messages: [
      {
        id: 1,
        type: 'bot',
        content:
          'Namaste! I am your Ayurvedic Health Assistant. I can help you with diet recommendations, health queries, and treatment suggestions based on Ayurvedic principles. How can I assist you today?',
        timestamp: new Date()
      }
    ],
    isTyping: false
  });

  const ayurvedicResponses = {
    diet: [
      'Based on Ayurvedic principles, your diet should balance your doshas (Vata, Pitta, Kapha).',
      'Consider warm, cooked foods if you have Vata imbalance.',
      'Cooling foods like cucumber and mint help with Pitta imbalance.',
      'Light, spicy foods can help balance Kapha dosha.'
    ],
    health: [
      'Ayurveda emphasizes prevention through proper diet, lifestyle, and seasonal routines.',
      'Daily oil massage (Abhyanga) can improve circulation and reduce stress.',
      'Practice Pranayama (breathing exercises) for better mental clarity.',
      'Adequate sleep during Kapha time (6-10 PM) is crucial for health.'
    ],
    treatment: [
      'Ayurvedic treatments are personalized based on your constitution.',
      'Panchakarma therapy can help detoxify and rejuvenate the body.',
      'Herbal formulations should be taken under professional guidance.',
      'Yoga asanas should be chosen based on your dosha balance.'
    ],
    food: [
      'Ghee is considered a sacred food in Ayurveda for its healing properties.',
      'Turmeric (haldi) has powerful anti-inflammatory properties.',
      'Ashwagandha helps in stress management and immunity.',
      'Triphala is excellent for digestive health and detoxification.'
    ],
    dosha: [
      'Vata dosha governs movement and is balanced by warm, grounding foods.',
      'Pitta dosha governs metabolism and is balanced by cooling foods.',
      'Kapha dosha governs structure and is balanced by light, stimulating foods.'
    ],
    emergency: [
      'For medical emergencies, please consult a qualified healthcare professional immediately.',
      'Ayurveda works best as a complementary approach alongside modern medicine.',
      'If you experience severe symptoms, seek immediate medical attention.'
    ],
    protein: [
      'One boiled egg has about 6 grams of protein.',
      '100g of paneer (cottage cheese) provides roughly 18 grams of protein.',
      '100g of cooked lentils (dal) provide around 9 grams of protein.',
      '100g of chicken breast contains about 31 grams of protein.',
      '100g of almonds provides about 21 grams of protein.'
    ],
    exercise: [
      'Surya Namaskar (Sun Salutation) is a complete Ayurvedic exercise for flexibility and strength.',
      'Walking early in the morning during Vata time (2-6 AM) improves energy and digestion.',
      'Yoga poses like Trikonasana and Bhujangasana help balance doshas.',
      'Pranayama breathing exercises improve lung capacity and reduce stress.',
      'Strength training can be combined with yoga for balanced fitness.'
    ],
    // New, more specific categories
    symptoms: [
        'Symptoms like constipation, dry skin, and anxiety often indicate a Vata imbalance. You can help balance this by adding warm, oily foods to your diet and maintaining a regular routine.',
        'Symptoms like acid reflux, irritability, and skin rashes are often signs of a Pitta imbalance. Try incorporating more cooling foods and activities like swimming to cool down.',
        'If you feel sluggish, have sinus congestion, or gain weight easily, it may be a Kapha imbalance. Consider adding more stimulating spices and more vigorous exercise to your routine.'
    ],
    lifestyle: [
        'Ayurveda emphasizes daily routines (Dinacharya) like tongue scraping and oil pulling to maintain oral and digestive health.',
        'To improve sleep, try to go to bed before 10 PM. A warm glass of milk with a pinch of nutmeg can also help.',
        'The practice of mindful eating—chewing slowly and focusing on your meal—is a key Ayurvedic principle for better digestion.'
    ],
    gutHealth: [
        'A strong digestive fire (Agni) is the key to gut health in Ayurveda. It helps in proper nutrient absorption and prevents the buildup of toxins (Ama).',
        'Herbs like ginger, fennel, and cumin are excellent for supporting Agni.',
        'Ayurveda recommends avoiding cold drinks and heavy foods, especially in the evening, to maintain healthy digestion.'
    ],
    general: [
        "I'm here to help with Ayurvedic diet, exercise, and health guidance. You can ask me about doshas, treatments, specific foods, or common symptoms.",
        "What aspect of Ayurveda are you curious about today? I can provide information on diet, lifestyle, or even specific herbs."
    ]
  };

  const getAyurvedicResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

    // Check for specific questions first
    if (message.includes('emergency') || message.includes('urgent') || message.includes('help')) {
      return ayurvedicResponses.emergency[Math.floor(Math.random() * ayurvedicResponses.emergency.length)];
    } else if (message.includes('symptoms') || message.includes('feel') || message.includes('my body')) {
      return ayurvedicResponses.symptoms[Math.floor(Math.random() * ayurvedicResponses.symptoms.length)];
    } else if (message.includes('sleep') || message.includes('routine') || message.includes('stress') || message.includes('lifestyle')) {
      return ayurvedicResponses.lifestyle[Math.floor(Math.random() * ayurvedicResponses.lifestyle.length)];
    } else if (message.includes('gut') || message.includes('digestion') || message.includes('stomach') || message.includes('agni')) {
      return ayurvedicResponses.gutHealth[Math.floor(Math.random() * ayurvedicResponses.gutHealth.length)];
    }
    // Then check for broader categories
    else if (message.includes('dosha') || message.includes('vata') || message.includes('pitta') || message.includes('kapha')) {
      return ayurvedicResponses.dosha[Math.floor(Math.random() * ayurvedicResponses.dosha.length)];
    } else if (message.includes('diet') || message.includes('food') || message.includes('eat')) {
      return ayurvedicResponses.diet[Math.floor(Math.random() * ayurvedicResponses.diet.length)];
    } else if (message.includes('health') || message.includes('wellness')) {
      return ayurvedicResponses.health[Math.floor(Math.random() * ayurvedicResponses.health.length)];
    } else if (message.includes('treatment') || message.includes('therapy') || message.includes('medicine')) {
      return ayurvedicResponses.treatment[Math.floor(Math.random() * ayurvedicResponses.treatment.length)];
    } else if (message.includes('herb') || message.includes('spice') || message.includes('ayurvedic food')) {
      return ayurvedicResponses.food[Math.floor(Math.random() * ayurvedicResponses.food.length)];
    } else if (message.includes('protein') || message.includes('nutrient') || message.includes('nutrition')) {
      return ayurvedicResponses.protein[Math.floor(Math.random() * ayurvedicResponses.protein.length)];
    } else if (message.includes('exercise') || message.includes('workout') || message.includes('yoga') || message.includes('fitness')) {
      return ayurvedicResponses.exercise[Math.floor(Math.random() * ayurvedicResponses.exercise.length)];
    } else {
      // Fallback for general or unrecognized queries
      return ayurvedicResponses.general[Math.floor(Math.random() * ayurvedicResponses.general.length)];
    }
  };

  const addMessage = (message) => {
    setChatbotState((prev) => ({
      ...prev,
      messages: [...prev.messages, message]
    }));
  };

  const setTyping = (typing) => {
    setChatbotState((prev) => ({
      ...prev,
      isTyping: typing
    }));
  };

  const toggleChat = () => {
    setChatbotState((prev) => ({
      ...prev,
      isOpen: !prev.isOpen,
      isMinimized: false
    }));
  };

  const minimizeChat = () => {
    setChatbotState((prev) => ({
      ...prev,
      isMinimized: !prev.isMinimized
    }));
  };

  const sendMessage = (content) => {
    const userMessage = {
      id: chatbotState.messages.length + 1,
      type: 'user',
      content: content,
      timestamp: new Date()
    };

    addMessage(userMessage);
    setTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const botResponse = {
        id: chatbotState.messages.length + 2,
        type: 'bot',
        content: getAyurvedicResponse(content),
        timestamp: new Date()
      };

      addMessage(botResponse);
      setTyping(false);
    }, 1500);
  };

  const clearMessages = () => {
    setChatbotState((prev) => ({
      ...prev,
      messages: [
        {
          id: 1,
          type: 'bot',
          content:
            'Namaste! I am your Ayurvedic Health Assistant. I can help you with diet recommendations, health queries, and treatment suggestions based on Ayurvedic principles. How can I assist you today?',
          timestamp: new Date()
        }
      ]
    }));
  };

  const value = {
    chatbotState,
    toggleChat,
    minimizeChat,
    sendMessage,
    clearMessages,
    addMessage,
    setTyping
  };

  return (
    <ChatbotContext.Provider value={value}>
      {children}
    </ChatbotContext.Provider>
  );
};