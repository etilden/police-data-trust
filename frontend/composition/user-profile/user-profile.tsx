import styles from './user-profile.module.css'
import { AccountPanel, SavedPanel } from "./index";

export default function UserProfile() {
	const { header, accountPanel, savedPanel, userProfile, theWholeDangThing } = styles
	return (
		<div className={theWholeDangThing}>
			<p className={header} >
				Header :) 
			</p>
			<div className={userProfile}>
				<AccountPanel />
				<SavedPanel />
			</div>
		</div>
	)
}