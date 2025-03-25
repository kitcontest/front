import styles from './css/Inpt.module.css';

const Inpt = ({ title, error, onchange }) => {
    return (
        <div className={styles.inptContainer}
        >
            <p className={styles.inptTitle}
            >
                {title}
            </p>
            <input
                className={styles.inptInput}
                onChange={e => onchange(e.target.value)}
            />
            { error && <p className={styles.inptError}>{error}</p> }
        </div>
    )
}

export default Inpt;