import Message from '../Message'
import Card from '../Card'

function Store({ storeName, ownerName }) {
    return (
        <div>
            <Message greeting={storeName} name={ownerName} />
            <Card name="Hoodie" description="A black hoodie for everyday wear." price="$45" />
            <Card name="Sticker Pack" description="A pack of 10 vinyl stickers." price="$12" />
            <Card name="Poster" description="A matte poster for your wall." price="$20" />
        </div>
    )
}

export default Store
