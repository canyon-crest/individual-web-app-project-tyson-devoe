import './App.css'
import { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
import Nav from './Navbar'
import Footer from './Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
    const [page, setPage] = useState("home");
    const [items, setItems] = useState([]);
    const [input, setInput] = useState('');

    const fetchItems = async () => {
        const snapshot = await getDocs(collection(db, 'items'));
        setItems(snapshot.docs.map(doc => doc.data()));
    };

    const addItem = async () => {
        if (!input.trim()) return;
        await addDoc(collection(db, 'items'), {
            text: input,
            createdAt: serverTimestamp()
        });
        setInput('');
        fetchItems();
    };

    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <>
            <Nav setPage={setPage} />
            <div>
                <h1>Firestore Items</h1>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Add an item"
                />
                <button onClick={addItem}>Add Item</button>
                <ul>
                    {items.map((item, i) => (
                        <li key={i}>{item.text}</li>
                    ))}
                </ul>
            </div>
            {page === "home" && <Home />}
            {page === "about" && <About />}
            {page === "contact" && <Contact />}
            <Footer />
        </>
    );
}

export default App;
