import styles from './saved-panel.module.css'

export default function SavedPanel() {
    const { savedPanel } = styles
    return (
        <div className={savedPanel}>
            <h1>Saved Panel </h1>
            <p>Right Top portion</p>
            <p>Right Bottom portion</p>
        </div>
    )
}