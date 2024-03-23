import { InputText } from "@/components/shared/Input"
import { Button } from "@nextui-org/react"
import { Search } from "lucide-react"

const SearchBar = () => {
  return (
    <div className="w-full flex rounded-lg border-2 border-primary">
      <InputText
        className="rounded-none outline-none ring-0 border-none rounded-l-lg"
        placeholder="Search... 🔎🔎🔎"
      />
      <Button isIconOnly color="primary" radius="none">
        <Search />
      </Button>
    </div>
  )
}

export default SearchBar
