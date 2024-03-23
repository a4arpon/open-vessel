export type Division = {
  id: string
  name: string
  bn_name: string
  url: string
}

export type District = {
  id: string
  division_id: string
  name: string
  bn_name: string
  lat: string
  lon: string
  url: string
}

export type Upazilla = {
  id: string
  district_id: string
  name: string
  bn_name: string
  url: string
}

export type Union = {
  id: string
  upazilla_id: string
  name: string
  bn_name: string
  url: string
}
