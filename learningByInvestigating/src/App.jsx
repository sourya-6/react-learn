import { useState, useEffect } from 'react';
import ProfileCard from '../components/ProfileCard';
import Card from '../components/Card';
import Button from '../components/Button';
import ConditionalRendering from '../components/ConditionalRendering';
import './App.css';
import RenderingList from '../components/RenderingList';
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
      <div className="min-h-screen p-6 bg-white text-black dark:bg-gray-900 dark:text-white transition-all">
        <button
          onClick={magic}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-4"
        >
          Click to see Magic
        </button>

        <p className="text-xl">Hey: {greeting}</p>

        <ProfileCard name="Sourya" rollNo={666} />

        <Card>
          <h2 className="text-2xl font-bold">This is inside a card</h2>
          <p className="text-gray-500 dark:text-gray-300">
            Reusable layout with children!
          </p>
        </Card>

        <Card>
          {/* <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
            Click Me
          </button> */}
          <h1>Hey Guys</h1>
          <div>Hey</div>
        </Card>

        <h2 className="text-lg mt-6 font-medium">Current Theme: {theme}</h2>

        <Button theme={theme} setTheme={setTheme} />
          <ConditionalRendering />
          <RenderingList/>
      </div>
    </div>
  );
}

export default App;
