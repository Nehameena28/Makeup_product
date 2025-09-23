import { useState, useEffect } from 'react';
import { Mic, MicOff, Volume2 } from 'lucide-react';
import { useSpeechSynthesis, useSpeechRecognition } from 'react-speech-kit';
import { toast } from 'react-toastify';

const VoiceSearch = ({ onSearch, onVoiceCommand }) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  
  const { speak, cancel, speaking } = useSpeechSynthesis();
  const { listen, stop, supported } = useSpeechRecognition({
    onResult: (result) => {
      setTranscript(result);
      handleVoiceResult(result);
    },
    onError: (error) => {
      console.error('Speech recognition error:', error);
      toast.error('Voice recognition failed. Please try again.');
      setIsListening(false);
    },
    onEnd: () => {
      setIsListening(false);
    }
  });

  const handleVoiceResult = (result) => {
    const command = result.toLowerCase();
    
    // Voice commands
    if (command.includes('search for') || command.includes('find')) {
      const searchTerm = command.replace(/search for|find/g, '').trim();
      onSearch(searchTerm);
      speak(`Searching for ${searchTerm}`);
    } else if (command.includes('go to cart') || command.includes('open cart')) {
      onVoiceCommand('cart');
      speak('Opening your cart');
    } else if (command.includes('go home') || command.includes('home page')) {
      onVoiceCommand('home');
      speak('Going to home page');
    } else if (command.includes('show products') || command.includes('view products')) {
      onVoiceCommand('products');
      speak('Showing all products');
    } else {
      // Default search
      onSearch(result);
      speak(`Searching for ${result}`);
    }
  };

  const toggleListening = () => {
    if (isListening) {
      stop();
      setIsListening(false);
    } else {
      if (supported) {
        listen({ continuous: false, interimResults: false });
        setIsListening(true);
        speak('I am listening. What would you like to search for?');
      } else {
        toast.error('Voice recognition is not supported in your browser');
      }
    }
  };

  const speakWelcome = () => {
    speak('Welcome to our beauty store! You can search by voice or ask me to navigate.');
  };

  if (!supported) {
    return null;
  }

  return (
    <div className="flex items-center gap-2 bg-gradient-to-r from-pink-50 to-purple-50 p-3 rounded-lg border border-pink-200">
      <button
        onClick={toggleListening}
        className={`p-2 rounded-full transition-all duration-300 ${
          isListening 
            ? 'bg-red-500 text-white animate-pulse' 
            : 'bg-pink-500 text-white hover:bg-pink-600'
        }`}
        title={isListening ? 'Stop listening' : 'Start voice search'}
      >
        {isListening ? <MicOff size={20} /> : <Mic size={20} />}
      </button>
      
      <button
        onClick={speakWelcome}
        className="p-2 rounded-full bg-purple-500 text-white hover:bg-purple-600 transition-colors"
        title="Voice assistant"
        disabled={speaking}
      >
        <Volume2 size={20} />
      </button>
      
      <div className="flex-1">
        <p className="text-sm text-gray-600">
          {isListening ? (
            <span className="text-red-600 font-medium">🎤 Listening...</span>
          ) : (
            'Click mic to search by voice'
          )}
        </p>
        {transcript && (
          <p className="text-xs text-purple-600 mt-1">"{transcript}"</p>
        )}
      </div>
    </div>
  );
};

export default VoiceSearch;