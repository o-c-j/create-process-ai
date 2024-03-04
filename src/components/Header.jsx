import styles from './Header.module.css'

import appLogo from '../assets/appLogo.png'

console.log(styles);
export function Header(){
    return (
        <header className={styles.header}>
            <img src={appLogo} alt="Logotipo do app" />
            <strong>Create Process AI</strong>
        </header> 
    );
}