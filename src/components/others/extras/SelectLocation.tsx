import type { District, Division } from "@/@types/geo-locations.type"
import districts from "@/assets/geo-locations-json/districts.json"
import divisions from "@/assets/geo-locations-json/divisions.json"
import { Select, SelectItem } from "@nextui-org/react"
import { useState } from "react"

const SelectLocation = () => {
  // States
  const [division, setDivision] = useState<Division | null>(null)
  const [district, setDistrict] = useState<District | null>(null)

  // Select Functions
  const selectDivisions = (index: string) => {
    const _division = divisions?.find((item) => item?.id === index)
    setDivision(_division || null)
  }

  const selectDistrict = (index: string) => {
    const _district = districts?.find((item) => item?.id === index)
    setDistrict(_district || null)
  }

  return (
    <>
      <Select
        label="বিভাগ"
        placeholder="আপনার বিভাগ নির্বাচণ করুন"
        scrollShadowProps={{
          isEnabled: false,
        }}
        className="font-bangla"
        onChange={(e) => selectDivisions(e.target?.value)}
      >
        {divisions?.map((division) => (
          <SelectItem key={division?.id}>{division?.bn_name}</SelectItem>
        ))}
      </Select>

      <Select
        label="জেলা"
        placeholder="আপনার জেলা নির্বাচণ করুন"
        scrollShadowProps={{
          isEnabled: false,
        }}
        className="font-bangla"
        onChange={(e) => selectDistrict(e.target?.value)}
      >
        {districts
          ?.filter((item) => item?.division_id === division?.id)
          .map((district) => (
            <SelectItem key={district.id}>{district.bn_name}</SelectItem>
          ))}
      </Select>
    </>
  )
}

export default SelectLocation
