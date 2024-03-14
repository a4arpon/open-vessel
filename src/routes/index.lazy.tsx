import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider
} from "@nextui-org/react"
import { Link, createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/")({
  component: () => (
    <>
      <section className="lg:col-span-8">
        <p>Hello /!</p>
        <div>
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-md">NextUI</p>
                <p className="text-small text-default-500">nextui.org</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>
                Make beautiful websites regardless of your design experience.
              </p>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link to="/" href="https://github.com/nextui-org/nextui">
                Visit source code on GitHub.
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>
    </>
  ),
})
