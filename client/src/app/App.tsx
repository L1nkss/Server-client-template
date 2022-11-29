import { FC } from "react"
import axios from "axios";

const App: FC = () => {
    const handleClickButton = async () => {
        const response = await axios.get('http://localhost:3001')
        console.log('test', response)
    };

    return (
        <div>
            {" "}
            <h1 className='text-3xl font-bold underline'>Hello world!</h1>
            <button onClick={handleClickButton}>Click</button>
        </div>
    )
}

export { App }