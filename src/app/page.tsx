"use client"

import styles from "./page.module.css";
import {useState} from 'react';

export default function Home() {
    const [link, setLink] = useState<string>('')

    const handleShortify = async () => {
        try {
            const response = await fetch( 'http://localhost:3001/short',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    originalUrl: link
                })
            });

            const result = await response.json();
            console.log(result);
            alert(result.url);
        } catch (error) {
         console.log(error.message)
            alert(error);
        }
    }

    return (
        <main>
            <form className={styles.root} onSubmit={handleShortify}>
                <input className={styles.linkInput} onChange={(e) => setLink(e.currentTarget.value)}/>
                {/*<button className={styles.button} onSubmit={handleShortify}>Shortify</button>*/}
                <input className={styles.button} type="submit" value={'Shortify'}/>

            </form>
        </main>
    );
}
