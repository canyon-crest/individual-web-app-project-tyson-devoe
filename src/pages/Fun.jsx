import { useState } from 'react'

function Fun() {
    const [dogImage, setDogImage] = useState('');
    const [joke, setJoke] = useState('');

    const fetchDog = async () => {
        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            const data = await response.json();
            setDogImage(data.message);
        } catch (error) {
            console.error('Error fetching dog image:', error);
        }
    };

    const fetchJoke = async () => {
        try {
            const response = await fetch('https://v2.jokeapi.dev/joke/Any?safe-mode');
            const data = await response.json();
            if (data.type === 'single') {
                setJoke(data.joke);
            } else {
                setJoke(data.setup + ' ... ' + data.delivery);
            }
        } catch (error) {
            console.error('Error fetching joke:', error);
        }
    };

    return (
        <div>
            <h2>Fun</h2>

            <div className="api-section">
                <h3>Random Dog</h3>
                <button onClick={fetchDog}>Get a Dog Pic</button>
                {dogImage && <img src={dogImage} alt="Random Dog" style={{ maxWidth: '300px', marginTop: '1rem', borderRadius: '8px' }} />}
            </div>

            <div className="api-section" style={{ marginTop: '2rem' }}>
                <h3>Random Joke</h3>
                <button onClick={fetchJoke}>Tell Me a Joke</button>
                {joke && <p style={{ marginTop: '1rem', fontSize: '1.1rem' }}>{joke}</p>}
            </div>
        </div>
    )
}

export default Fun
