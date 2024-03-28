import type { District, Division, Upazilla } from "@/@types/geo-locations.type"
import type { Address } from "@/@types/profile"
import districts from "@/assets/geo-locations-json/districts.json"
import divisions from "@/assets/geo-locations-json/divisions.json"
import unions from "@/assets/geo-locations-json/unions.json"
import upazilas from "@/assets/geo-locations-json/upazilas.json"
import { Select, SelectItem } from "@nextui-org/react"
import { useState, type Dispatch, type SetStateAction } from "react"

const SelectLocation = ({
  setAddress,
}: {
  setAddress: Dispatch<SetStateAction<Address | null>>
}) => {
  // States
  const [division, setDivision] = useState<Division | null>(null)
  const [district, setDistrict] = useState<District | null>(null)
  const [upazila, setUpazila] = useState<Upazilla | null>(null)

  // Select Functions
  const selectDivisions = (index: string) => {
    const _division = divisions?.find((item) => item?.id === index)
    setDivision(_division || null)
  }

  const selectDistrict = (index: string) => {
    const _district = districts?.find((item) => item?.id === index)
    setDistrict(_district || null)
  }

  const selectUpazila = (index: string) => {
    const _upazila = upazilas?.find((item) => item?.id === index)
    setUpazila(_upazila || null)
  }

  const selectUnion = (index: string) => {
    const _union = unions?.find((item) => item?.id === index)

    setAddress({
      addressState: division?.bn_name ?? "",
      addressCity: district?.bn_name ?? "",
      addressUpazila: upazila?.bn_name ?? "",
      addressUnion: _union?.bn_name ?? "",
    })
  }

  return (
    <>
      <Select
        label="বিভাগ"
        placeholder="বিভাগ নির্বাচণ করুন"
        scrollShadowProps={{
          isEnabled: false,
        }}
        className="font-bangla"
        onChange={(e) => selectDivisions(e.target?.value)}
        isRequired
        color="primary"
      >
        {divisions?.map((division) => (
          <SelectItem key={division?.id}>{division?.bn_name}</SelectItem>
        ))}
      </Select>

      <Select
        label="জেলা"
        placeholder="জেলা নির্বাচণ করুন"
        scrollShadowProps={{
          isEnabled: false,
        }}
        className="font-bangla"
        onChange={(e) => selectDistrict(e.target?.value)}
        isRequired
        color="primary"
      >
        {districts
          ?.filter((item) => item?.division_id === division?.id)
          .map((district) => (
            <SelectItem key={district.id}>{district.bn_name}</SelectItem>
          ))}
      </Select>

      <Select
        label="উপজেলা"
        placeholder="উপজেলা নির্বাচণ করুন"
        scrollShadowProps={{
          isEnabled: false,
        }}
        className="font-bangla"
        onChange={(e) => selectUpazila(e.target?.value)}
        isRequired
        color="primary"
      >
        {upazilas
          ?.filter((item) => item?.district_id === district?.id)
          .map((upazila) => (
            <SelectItem key={upazila.id}>{upazila.bn_name}</SelectItem>
          ))}
      </Select>

      <Select
        label="ইউনিয়ন"
        placeholder="ইউনিয়ন নির্বাচণ করুন"
        scrollShadowProps={{
          isEnabled: false,
        }}
        className="font-bangla"
        onChange={(e) => selectUnion(e.target?.value)}
        isRequired
        color="primary"
      >
        {unions
          ?.filter((item) => item?.upazilla_id === upazila?.id)
          .map((union) => (
            <SelectItem key={union.id}>{union.bn_name}</SelectItem>
          ))}
      </Select>
    </>
  )
}

export default SelectLocation
