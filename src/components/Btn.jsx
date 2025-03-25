import styles from "./css/Btn.module.css";

const Btn = ({ type, mode, onClick, text }) => {
    return (
        <button
            type={type}
            className={styles[`${mode}Btn`]}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default Btn;
