// Import React hooks and Firebase functionality
import { useEffect, useState } from 'react';
import { db, auth, provider } from './firebase';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs, addDoc } from 'firebase/firestore';

function GoogleLogin() {
    // State to hold the logged-in user
    const [user, setUser] = useState(null);
    // State to hold messages from Firestore
    const [messages, setMessages] = useState([]);
    // State to hold the input text
    const [input, setInput] = useState('');

    // Monitor authentication status (e.g., login/logout) in real time
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    // Handle Google login using a popup window
    const handleLogin = async () => {
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    // Handle logout for the authenticated user
    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
        } catch (error) {
            console.error('Logout failed', error);
        }
    };

    // Fetch all messages from the "messages" collection in Firestore
    const fetchMessages = async () => {
        const snapshot = await getDocs(collection(db, 'messages'));
        const list = snapshot.docs.map(doc => doc.data());
        setMessages(list);
    };

    // Add a new message to Firestore
    const sendMessage = async () => {
        if (!input.trim()) return;
        await addDoc(collection(db, 'messages'), {
            text: input,
            name: user.displayName,
            timestamp: Date.now()
        });
        setInput('');
        fetchMessages();
    };

    // Re-fetch messages any time the user logs in
    useEffect(() => {
        if (user) {
            fetchMessages();
        }
    }, [user]);

    // UI rendering
    return (
        <div className="google-login" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {user ? (
                <>
                    <span style={{ color: '#e0e0e0', fontSize: '0.9rem' }}>{user.displayName}</span>
                    <button onClick={handleLogout} style={{ padding: '0.3em 0.8em', fontSize: '0.85rem' }}>Log Out</button>
                </>
            ) : (
                <button onClick={handleLogin} style={{ padding: '0.3em 0.8em', fontSize: '0.85rem' }}>Sign in with Google</button>
            )}
        </div>
    );
}

export default GoogleLogin;
