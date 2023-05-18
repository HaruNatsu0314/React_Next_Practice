import styles from 'styles/container.module.css'

export default function Container ({children, large = false}){
    return (
    <header>
        <div className={large?styles.large:styles.default}>
        {children}
        </div>
    </header>
    )

}