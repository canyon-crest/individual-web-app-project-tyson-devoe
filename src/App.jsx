import './App.css'
import Message from './Message';
import Card from './Card';


function App() {
    return (
        <div>
            <Message greeting="Your Shopping Cart" name="Tyson" />
            <Card name="Apple" description="A fresh red apple" />
            <Card name="Banana" description="A ripe yellow banana" />
            <Card name="Orange" description="A juicy orange" />
        </div>
    );
}

export default App;
