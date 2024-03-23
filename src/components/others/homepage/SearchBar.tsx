import { InputText } from "@/components/shared/Input"
import Loading from "@/components/shared/Loading"
import { Button } from "@nextui-org/react"
import { Search } from "lucide-react"
import { Suspense } from "react"
import AddPost from "./AddPost"

const SearchBar = () => {
  return (
    <div className="w-full flex items-center justify-between gap-2">
      <div className="w-full flex rounded-lg border-2 border-primary">
        <InputText
          className="rounded-none outline-none ring-0 border-none rounded-l-lg"
          placeholder="Search... 🔎🔎🔎"
        />
        <Button isIconOnly color="primary" radius="none">
          <Search />
        </Button>
      </div>
      <Suspense fallback={<Loading />}>
        <AddPost />
      </Suspense>
    </div>
  )
}

export default SearchBar
