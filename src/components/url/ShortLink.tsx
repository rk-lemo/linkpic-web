import styles from './ShortLink.module.css';
export default function ShortLink({shortLink} : {shortLink: string}) {
    return (
        <div className={styles.shortLink}>
            <a href={shortLink }>{shortLink}</a>
        </div>
    )
}
