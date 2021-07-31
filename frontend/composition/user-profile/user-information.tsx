import { useState } from 'react'

import styles from './user-information.module.css'
import { UserInformationFormElements } from '../../models/index'

const defaultFirstName: string = 'Bob'
const defaultLastName: string = 'Boberton'
const defaultPhoneNumber: string = '234-567-8901'
const defaultEmailAddress: string = 'bobb64@fmail.com'
const defaultPassword: string = 'securePassword123'

export default function UserInformation() {
    const { 
        displayLeft, 
        displayRight, 
        editProfileButton, 
        formSection,
        headerContainer, 
        label, 
        userInformation 
    } = styles
    
    const [isEditing, setIsEditing] = useState(false)
    const [firstName, setFirstName] = useState(defaultFirstName)
    const [lastName, setLastName] = useState(defaultLastName)
    const [phoneNumber, setPhoneNumber] = useState(defaultPhoneNumber)
    const [emailAddress, setEmailAddress] = useState(defaultEmailAddress)
    const [password, setPassword] = useState(defaultPassword)
    const [initialUserInfo, setInitialUserInfo] = useState({ firstName, lastName, phoneNumber, emailAddress, password })

    const securePassword = (): string => defaultPassword.split('').map(c => '*').join('');

    const toggleEditStatus = (): void => { 
        if (!isEditing) setInitialUserInfo({ firstName, lastName, phoneNumber, emailAddress, password });
        setIsEditing(!isEditing) 
    }

    const saveChanges = (): void => {
        toggleEditStatus()
    }

    const cancelChanges = (): void => {
        setFirstName(initialUserInfo.firstName)
        setLastName(initialUserInfo.lastName)
        setPhoneNumber(initialUserInfo.phoneNumber)
        setEmailAddress(initialUserInfo.emailAddress)
        setPassword(initialUserInfo.password)

        toggleEditStatus()
    }

    const updateValue = (stateElement: UserInformationFormElements, newValue: string): void => {
        switch (stateElement) {
            case UserInformationFormElements.firstName: 
                setFirstName(newValue); 
                break;
            case UserInformationFormElements.lastName: 
                setLastName(newValue);
                break;
            case UserInformationFormElements.phoneNumber: 
                setPhoneNumber(newValue);
                break;
            case UserInformationFormElements.emailAddress: 
                setEmailAddress(newValue);
                break;
            case UserInformationFormElements.password: 
                setPassword(newValue);
                break;
        }
    }

    return (
        <div>
            <div className={ headerContainer }>
                <h2 className={ `${ displayLeft } ${ userInformation }` }>User Information</h2>
                { isEditing ? 
                    <div>
                        <button onClick={ () => saveChanges() }>Save</button>
                        <button onClick={ () => cancelChanges() }>Cancel</button>
                    </div> :
                    <button 
                        className={ `${ displayRight } ${ editProfileButton }` }
                        onClick={ () => toggleEditStatus() }
                    >Edit Profile</button>
                }
            </div>
            <form>
                <div className={formSection}>
                    <label className={ label }>First Name</label>
                    { 
                        isEditing ? 
                            <input 
                                type="text" 
                                value={firstName}
                                onChange={(event) => updateValue(UserInformationFormElements.firstName, event.target.value)}
                            ></input> : 
                            <p>{ firstName }</p>
                    } 
                </div>
                <div className={formSection}>
                    <label className={ label }>Last Name</label>
                    {
                        isEditing ? 
                            <input 
                                type="text" 
                                value={lastName}
                                onChange={(event) => updateValue(UserInformationFormElements.lastName, event.target.value)}
                            ></input> : 
                            <p>{ lastName }</p>
                    } 
                </div>
                <div className={formSection}>
                    <label className={ label }>Phone Number</label>
                    {
                        isEditing ? 
                            <input 
                                type="text" 
                                value={phoneNumber}
                                onChange={(event) => updateValue(UserInformationFormElements.phoneNumber, event.target.value)}
                            ></input> : 
                            <p>{ phoneNumber }</p>
                    } 
                </div>
                <div className={formSection}>
                    <label className={ label }>Email Address</label>
                    {
                        isEditing ? 
                            <input 
                                type="text" 
                                value={emailAddress}
                                onChange={(event) => updateValue(UserInformationFormElements.emailAddress, event.target.value)}
                            ></input> : 
                            <p>{ emailAddress }</p>
                    } 
                </div>
                <div className={formSection}>
                    <label className={ label }>Password</label>
                    {
                        isEditing ? 
                            <input 
                                type="text" 
                                value={password}
                                onChange={(event) => updateValue(UserInformationFormElements.password, event.target.value)}
                            ></input> : 
                            <p>{ securePassword() }</p>
                    } 
                </div>
            </form>
        </div>
    )
}