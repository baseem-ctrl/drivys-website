import React, { useEffect, useState } from "react";

const AnimatedText = ({ text, speed = 500, cursorStyle = "|" }) => {
  const [visibleSentences, setVisibleSentences] = useState([]);

  useEffect(() => {
    setVisibleSentences([]);
    const sentences = text.split(/([.!?]\s+|\n)/g).filter(s => s.trim());

    sentences.forEach((sentence, index) => {
      setTimeout(() => {
        setVisibleSentences(prev => [...prev, sentence]);
      }, index * speed);
    });
  }, [text, speed]);

  return (
    <div style={styles.container}>
      <p style={styles.text}>
        {visibleSentences.map((sentence, idx) => (
          <span
            key={idx}
            style={{
              animation: 'fadeIn 0.6s ease-out forwards',
              opacity: 0,
            }}
          >
            {sentence}
          </span>
        ))}
      </p>
      <style>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            filter: blur(4px);
          }
          100% {
            opacity: 1;
            filter: blur(0);
          }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          50.01%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  text: {
    fontFamily: "'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    fontSize: '18px',
    color: 'white',
    lineHeight: '1.6',
    whiteSpace: 'pre-wrap',
    margin: 0,
    width: '100%',
    textAlign: 'left',
  },
  cursor: {
    display: 'inline-block',
    marginLeft: '2px',
    width: '2px',
    height: '1.2em',
    backgroundColor: 'white',
    verticalAlign: 'text-bottom',
  }
};

// Demo Component
export default function App() {
  const [currentText, setCurrentText] = useState(0);

  const textExamples = [
    "Hello! This is a typing animation effect with smooth fading. Watch how each character gently appears on the screen.",
    "The animation creates a beautiful fade-in effect as the text types out. Each letter materializes with a subtle blur that gradually sharpens.\nIt even preserves line breaks and handles longer paragraphs gracefully!",
    "You can customize the speed and cursor style too! This text is longer to demonstrate how the animation works with extended content. Notice how smoothly each character fades into view, creating a pleasant reading experience. ✨",
    "This is the fourth example with even more content to test the animation thoroughly. The fading effect remains consistent regardless of text length. Every character appears with the same smooth transition, maintaining visual coherence throughout the entire typing sequence. Pretty cool, right?"
  ];

  return (
    <div style={{ width: '100%', height: '100vh', margin: 0, padding: 0 }}>
      <AnimatedText
        text={textExamples[currentText]}
        speed={300}
        cursorStyle="|"
      />
    </div>
  );
}