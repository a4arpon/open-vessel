export type Profile = {
  name: string
  phone: string
  profession: string
} & Address

export type Address = {
  addressStreet?: string
  addressUnion?: string
  addressUpazila: string
  addressCity: string
  addressState: string
}
