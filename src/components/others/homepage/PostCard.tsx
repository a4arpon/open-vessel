import { Avatar, Card, CardBody, CardHeader } from "@nextui-org/react"

const PostCard = () => {
  return (
    <Card className="lg:w-3/5 z-0">
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
              Zoey Lang
            </h4>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-2 text-small z-0">
        <p>
          Frontend developer and UI/UX enthusiast. Join me on this coding
          adventure! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eveniet natus sunt ex maxime nemo repellendus aliquid aperiam
          excepturi architecto tenetur? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Natus deleniti est doloremque voluptas provident aut
          aliquam facere ab tempora perferendis! Animi, tempore harum.
          Dignissimos quasi similique itaque vero dolor autem!\
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
