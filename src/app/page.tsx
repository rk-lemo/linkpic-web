"use client"

import styles from "./page.module.css";
import {useState} from 'react';

export default function Home() {
    const [link, setLink] = useState<string>('')

    const handleShortify = async () => {
        alert(link)
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
