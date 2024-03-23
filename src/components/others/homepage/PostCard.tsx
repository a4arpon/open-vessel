import type { BloodPost } from "@/@types/posts.type"
import { Avatar, Card, CardBody, CardHeader } from "@nextui-org/react"
import {
  CalendarDays,
  Clock,
  Droplet,
  HeartHandshake,
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
          <p className="flex flex-row gap-2 font-bold text-lg">
            <HeartHandshake /> <span>{item?.hospital}</span>
          </p>
          <p className="flex flex-row gap-2">
            <Phone />
            <span className="underline">{item?.phone}</span>
          </p>
          <p className="flex flex-row gap-2">
            <Droplet />
            <span className="font-bold">{item?.blood}</span>
          </p>
          <p className="flex flex-row gap-2">
            <User />
            <span>{item?.gender}</span>
          </p>
          <p className="flex flex-row gap-2">
            <Podcast />
            <span>{item?.situation}</span>
          </p>
          <p className="flex flex-row gap-2">
            <CalendarDays />
            <span>{new Date(item?.date).toLocaleDateString()}</span>
          </p>
          <p className="flex flex-row gap-2">
            <Clock />
            <span>{item?.time}</span>
          </p>
        </div>
      </CardBody>
    </Card>
  )
}

export default PostCard
