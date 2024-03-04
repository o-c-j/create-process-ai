import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src="https://github.com/o-c-j.png" />
                    <div className={styles.authorInfo}>
                        <strong>Osvaldo C Junior</strong>
                        <span>Web developer</span>
                    </div>
                </div>

                <time dateTime="2024-03-04 23:00:00" title="04/03/2024 23:00">Published at 1 hour ago</time>
            </header>

            <div className={styles.content}> 
                <p>content</p>
                <p><a href="">link 1</a></p>
            </div>
        </article>
    )
}