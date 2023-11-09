
import { useState } from 'react';
import styles from './chatinput.module.css';

export default function ChatInput({onClick}) {
    const [inputValue, setInputValue] = useState('');

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            console.log(`User typed: ${inputValue}`);
            setInputValue('');
            if (onClick) onClick(); 
        }
    }

    const handleOnClick = () => {

        if (onClick) onClick(); 
    }

    return (
        <div className="mx-auto max-w-4xl pt-5 pb-2">
            <div className="sm:flex items-center p-5 sm:p-0 rounded-xl justify-between bg-lightgrey sm:rounded-full">
                <div className={styles.ChatInput}>
                    <input
                        type="text"
                        className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:rounded-full bg-lightgrey pl-1 focus:outline-none bg-emailbg focus:text-black"
                        placeholder="Type your question"
                        autoComplete="off"
                        value={inputValue}
                        onChange={(event) => setInputValue(event.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                </div>
                <div className="sm:mr-3">
                    <button
                        onClick={handleOnClick}
                        type="submit"
                        className="joinButton w-full sm:w-0 text-xl text-white font-semibold text-center rounded-xl sm:rounded-full bg-blue hover:bg-btnblue"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}