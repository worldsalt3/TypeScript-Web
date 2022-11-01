import axios, { AxiosResponse } from 'axios'

interface Userprops {
  id?: number
  name?: string
  age?: number
}



export class User {
 
  constructor(private data: Userprops) {}

  get(propName: string): number | string {
    return this.data[propName]
  }

  set(update: Userprops): void {
    Object.assign(this.data, update)
  }


  fetch(): void {
    axios
      .get(`http://localhost:3000/user/${this.get('id')}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data)
      })
  }

  save(): void {
    const getID = this.get('id')
    if (getID) {
      axios.put(`http://localhost:3000/user/${getID}`, this.data)
    } else {
      axios.post(`http://localhost:3000/user`, this.data)
    }
  }
}
