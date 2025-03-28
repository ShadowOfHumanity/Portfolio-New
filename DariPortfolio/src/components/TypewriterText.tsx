import { Typewriter } from 'react-simple-typewriter'

interface TypewriterTextProps {
  titles: string[];
  size?: "small" | "medium" | "large";
}

const TypewriterText = ({ titles, size = "large" }: TypewriterTextProps) => {
  return (
    <div className={`text-${size} font-bold text-primary-500`}>
      <Typewriter
        words={titles}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </div>
  );
};

export default TypewriterText;
