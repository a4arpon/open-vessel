import type { BloodPost } from "@/@types/posts.type"
import { Avatar, Card, CardBody, CardHeader } from "@nextui-org/react"
import {
  CalendarDays,
  Clock,
  Droplet,
  HeartHandshake,
  MapPinned,
  Map as Mapp,
  Phone,
  Podcast,
  User,
} from "lucide-react"

const PostCard = ({ item }: { item: BloodPost }) => {
  return (
    <Card className="z-0 w-full">
      <CardHeader className="justify-between z-0">
        <div className="flex gap-5 z-0">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src="/avatars/avatar-1.png"
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              User
            </h4>
          </div>
        </div>
      </CardHeader>
      <CardBody className="p-3 z-0">
        <div className="flex flex-col gap-2">
          <p className="flex flex-row gap-2 font-bold text-lg items-center">
            <HeartHandshake /> <span>{item?.hospital}</span>
          </p>
          <div className="grid grid-cols-2 gap-2">
            <p className="flex flex-row gap-2 items-center">
              <Phone />
              <span className="underline">{item?.phone}</span>
            </p>
            <p className="flex flex-row gap-2 items-center">
              <Droplet />
              <span className="font-bold">{item?.blood}</span>
            </p>
            <p className="flex flex-row gap-2 items-center">
              <User />
              <span>{item?.gender}</span>
            </p>
            <p className="flex flex-row gap-2 items-center">
              <Podcast />
              <span>{item?.situation}</span>
            </p>
          </div>
          <p className="flex flex-row gap-2 items-center">
            <CalendarDays />
            <span>{new Date(item?.date).toLocaleDateString()}</span>
          </p>
          <p className="flex flex-row gap-2 items-center">
            <Clock />
            <span>{item?.time}</span>
          </p>
          <p className="flex flex-row gap-2 items-center">
            <Mapp />
            <span>{item?.addressStreet ?? "Not Available"}</span>
          </p>
          <div className="flex items-start gap-2">
            <MapPinned />
            <p>
              {item?.addressUnion ?? "Not Available"},{" "}
              {item?.addressUpazila ?? "Not Available"},{" "}
              {item?.addressCity ?? "Not Available"},{" "}
              {item?.addressState ?? "Not Available"}
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default PostCard
