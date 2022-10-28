export interface IUser{
    id: number,
    name: string,
    surname: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode:string,
      geo: {
        lat: string,
        lng: string
      }
    },
    phone: string,
    website: string,
    company:{
      name: string,
      cathPhrase: string,
      bs: string
    }
}

export interface IPost{
  userId: number,
  id: number,
  title: string,
  body: string
}

export interface IComments{
  postId: number,
  id: number,
  name: string,
  email : string,
  body: string
}

export interface ITodos{
  userId: number,
  id: number,
  title: string,
  completed: boolean
}


