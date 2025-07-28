import { useState, useEffect } from 'react';
import ProfileCard from '../components/ProfileCard';
import Card from '../components/Card';
import Button from '../components/Button';
import ConditionalRendering from '../components/ConditionalRendering';
import RenderingList from '../components/RenderingList';
import InputBox from '../components/InputBox';
import './App.css';
import Todo from '../components/Todo';
import Stopwatch from '../components/Stopwatch';
import FocusInput from '../hooks/useRef/FocusInput';

function App() {
  const [greeting, setGreeting] = useState(0);
  const [theme, setTheme] = useState('light');

  const magic = () => {
    setGreeting((ct) => ct + 1);
    setGreeting((ct) => ct + 1);
    console.log("Clicked! greeting is still:", greeting);
  };

  useEffect(() => {
    console.log("Updated greeting value:", greeting);
  }, [greeting]);

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''}`}>
      <div className="min-h-screen px-4 py-10 bg-white text-black dark:bg-gray-900 dark:text-white transition-all duration-300">
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          
          {/* Greeting Section */}
          <div className="flex flex-col items-center gap-2">
            <button
              onClick={magic}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:brightness-110 transition"
            >
              ✨ Click to see Magic
            </button>
            <p className="text-2xl font-semibold">Hey: {greeting}</p>
          </div>

          {/* Profile */}
          <section className="mt-4">
            <ProfileCard name="Sourya" rollNo={666} />
          </section>

          {/* Card Section */}
          <section className="grid md:grid-cols-2 gap-6 mt-6">
            <Card>
              <h2 className="text-xl font-bold mb-2">This is inside a card</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Reusable layout with children!
              </p>
            </Card>
            <Card>
              <h1 className="text-lg font-semibold">Hey Guys</h1>
              <div>Welcome to the card layout!</div>
            </Card>
          </section>

          {/* Theme Switch */}
          <div className="flex items-center justify-between mt-6">
            <h2 className="text-lg font-medium">Current Theme: <span className="font-bold">{theme}</span></h2>
            <Button theme={theme} setTheme={setTheme} />
          </div>

          {/* Other Components */}
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <ConditionalRendering />
            <RenderingList />
          </div>

          <div className="mt-6">
            <InputBox />
          </div>
          <Todo/>
          <Stopwatch/>
          <FocusInput/>
        </div>
      </div>
    </div>
  );
}

export default App;
