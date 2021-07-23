import styles from './account-panel.module.css'
import { ViewerAccount, UserInformation } from './index'

export default function AccountPanel() {
    const { accountPanel, separatingLine } = styles

    return (
        <div className={accountPanel}>
            <ViewerAccount />
            <hr className={separatingLine} />
            <UserInformation />
        </div>
    )
}