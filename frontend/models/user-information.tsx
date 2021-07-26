export enum UserInformationFormElements {
    firstName = 'firstName',
    lastName = 'lastName',
    phoneNumber = 'phoneNumber',
    emailAddress = 'emailAddress',
    password = 'password'
}

export interface IUserInformation {
    firstName: string,
    lastName: string,
    phoneNumber: string,
    emailAddress: string,
    password: string
}