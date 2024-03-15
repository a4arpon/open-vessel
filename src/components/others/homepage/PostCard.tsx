import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader
} from "@nextui-org/react"

const PostCard = () => {
  return (
    <Card className="w-3/5">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src="/avatars/avatar-1.png"
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              Zoey Lang
            </h4>
            <h5 className="text-small tracking-tight ">@zoeylang</h5>
          </div>
        </div>
        <Button
          className="bg-transparent text-foreground border-default-200"
          color="primary"
          radius="full"
          size="sm"
          variant={"bordered"}
        >
          "Unfollow"
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-2 text-small ">
        <p>
          Frontend developer and UI/UX enthusiast. Join me on this coding
          adventure!
        </p>
        <span className="pt-2">
          #FrontendWithZoey
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
    </Card>
  )
}

export default PostCard
