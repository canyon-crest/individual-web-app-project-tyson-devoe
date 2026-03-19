import { useState, useEffect } from 'react'
import { db } from '../firebase'
import { collection, addDoc, getDocs, serverTimestamp } from 'firebase/firestore'

function Guestbook() {
    const [inputText, setInputText] = useState('');
    const [items, setItems] = useState([]);

    const loadItems = async () => {
        const snapshot = await getDocs(collection(db, 'guestbook'));
        const loaded = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setItems(loaded);
    };

    useEffect(() => {
        loadItems();
    }, []);

    const handleAdd = async () => {
        if (inputText.trim() === '') return;
        await addDoc(collection(db, 'guestbook'), {
            text: inputText,
            createdAt: serverTimestamp()
        });
        setInputText('');
        loadItems();
    };

    return (
        <div>
            <h2>Guestbook</h2>
            <p>Leave a message.</p>
            <input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Write something..."
            />
            <button onClick={handleAdd}>Post</button>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
                {items.map((item) => (
                    <li key={item.id} style={{ padding: '0.5rem 0', borderBottom: '1px solid #ccc' }}>
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Guestbook
