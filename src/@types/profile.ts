export type Profile = {
  name: string
  address: Address
  phone: string
  profession: string
}

export type Address = {
  street?: string
  union: { id: string; name: string } // ইউনিয়ন
  upazila: { id: string; name: string } // উপজেলা
  city: { id: string; name: string } // জেলা
  state: { id: string; name: string } // বিভাগ
}
