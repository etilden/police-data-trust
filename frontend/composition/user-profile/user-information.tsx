import styles from './user-information.module.css'
export default function UserInformation() {
    const { displayLeft, displayRight, headerContainer } = styles
    const firstName: string = 'Bob'
    const lastName: string = 'Boberton'
    const phoneNumber: string = '234-567-8901'
    const emailAddress: string = 'bobb64@fmail.com'
    const password: string = 'securePassword123'

    const securePassword = (): string => password.split('').map(c => '*').join('')
    return (
        <div>
            <div className={headerContainer}>
                <h2 className={displayLeft}>User Information</h2>
                <button className={displayRight}>Edit Profile</button>
            </div>
            <div>
                <p>First Name</p>
                <p>{firstName}</p>
                <p>Last Name</p>
                <p>{lastName}</p>
                <p>Phone Number</p>
                <p>{phoneNumber}</p>
                <p>Email Address</p>
                <p>{emailAddress}</p>
                <p>Password</p>
                <p>{securePassword()}</p>
            </div>
        </div>
    )
}