export interface SignupForm{
  fullName:string,
  email:string,
  password:string,
  confirmPassword:string,
  acceptedTerms:boolean
}

export interface SignupErrors{
   fullName?: string;

    email?: string;

    password?: string;

    confirmPassword?: string;

    acceptedTerms?: string;
}