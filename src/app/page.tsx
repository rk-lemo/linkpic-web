"use client"

import styles from "./page.module.css";
import {useState} from 'react';
import ShortLink from '@/components/url/ShortLink';

export default function Home() {
    const [link, setLink] = useState<string>('')
    const [shortLink, setShortLink] = useState<string>('')

    const handleShortify = async () => {
        try {
            console.log('1')
            const response = await fetch('http://localhost:3001/short', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    originalUrl: link
                })
            });

            console.log('2')

            const result = await response.json();

            console.log(result)

            setShortLink(result.url);
        } catch (error: any) {
            console.log(error?.message)
            alert(error);
        }
    }

    return (
        <main>
            <div className={styles.container}>
                <div className={styles.form}>
                    <input className={styles.linkInput} onChange={(e) => setLink(e.currentTarget.value)}/>
                    <button className={styles.button} onClick={handleShortify}>Shortify</button>
                </div>
                {shortLink && <ShortLink shortLink={shortLink}/>}
            </div>
        </main>
);
}
