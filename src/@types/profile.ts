
export type Profile = {
  name: string
  address: Address
  phone: string
  profession: string
}

export type Address = {
  street: string
  area: string
  city: string
  state: string
  zip?: string
}
