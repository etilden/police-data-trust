import styles from './user-profile.module.css'
import { AccountPanel, SavedPanel } from "./index";

export default function UserProfile() {
	const { header, userProfile } = styles
	return (
		<>
			<p className={header} >
				Header :) 
			</p>
			<div className={userProfile}>
				<AccountPanel />
				<SavedPanel />
			</div>
		</>
	)
}