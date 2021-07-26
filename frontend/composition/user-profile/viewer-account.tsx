import styles from './viewer-account.module.css'

export default function ViewerAccount() {
    const { profileType, textContent, verticalSpacing, viewerAccount } = styles
    return (
        <div>
            <h1 className={ profileType }>Profile Type</h1>
            <h2 className={ viewerAccount }>Viewer Account</h2>
            <p className={ textContent }>
                A Viewer account allows you to see data that is publicly available.<br />To apply to see legally protected data...
            </p>
            <a className={ verticalSpacing } href="javascript:void(0)">Register for a Passport Account</a>
        </div>
    )
}