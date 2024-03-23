import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Select,
  SelectItem,
  useDisclosure,
} from "@nextui-org/react"

import type { BloodPost } from "@/@types/posts.type"
import type { Address } from "@/@types/profile"
import bloodPostService from "@/services/blood-post.service"
import { HeartHandshake, X } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import SelectLocation from "../extras/SelectLocation"

const AddPost = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const { register, handleSubmit } = useForm<BloodPost>()
  const [address, setAddress] = useState<Address | null>(null)

  const handleFormAddPost = async (data: BloodPost) => {
    const packet = {
      ...data,
    }
    await bloodPostService.createPost(packet).then((_res) => {
      toast.success("Posted")
      onOpenChange()
    })
  }
  return (
    <>
      <div>
        <Button onPress={onOpen}>Add Post</Button>
      </div>
      <Modal
        size="2xl"
        isOpen={isOpen}
        scrollBehavior="inside"
        hideCloseButton={true}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Ask For Blood 🩸
              </ModalHeader>
              <ModalBody>
                <form
                  onSubmit={handleSubmit(handleFormAddPost)}
                  className="grid lg:grid-cols-2 gap-3"
                >
                  <div className="lg:col-span-2 flex flex-col gap-3">
                    <Input
                      color="primary"
                      variant="underlined"
                      label="Hospital Name"
                      {...register("hospital")}
                    />
                    <div className="flex flex-row gap-3">
                      <Input
                        color="primary"
                        variant="underlined"
                        label="Date"
                        type="date"
                        {...register("date")}
                      />
                      <Input
                        color="primary"
                        variant="underlined"
                        label="Time"
                        type="time"
                        {...register("time")}
                      />
                    </div>
                  </div>

                  <Input
                    color="primary"
                    variant="underlined"
                    label="Contact Number"
                    {...register("phone")}
                  />

                  <Select
                    label="অবস্থা"
                    placeholder="রোগীর অবস্থা"
                    className="font-bangla"
                    color="primary"
                    isRequired
                    {...register("situation")}
                  >
                    {["জরুরী", "সাধারণ"]?.map((situation) => (
                      <SelectItem key={situation}>{situation}</SelectItem>
                    ))}
                  </Select>

                  <Select
                    label="রক্তের গ্রূপ"
                    placeholder="রোগীর রক্তের গ্রূপ নির্বাচন করুন"
                    className="font-bangla"
                    color="primary"
                    isRequired
                    {...register("blood")}
                  >
                    {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]?.map(
                      (blood) => (
                        <SelectItem key={blood}>{blood}</SelectItem>
                      )
                    )}
                  </Select>
                  <Select
                    label="রোগী"
                    placeholder="রোগীর লিঙ্গ"
                    className="font-bangla"
                    color="primary"
                    isRequired
                    {...register("gender")}
                  >
                    {["পুরুষ", "মহিলা"]?.map((gender) => (
                      <SelectItem key={gender}>{gender}</SelectItem>
                    ))}
                  </Select>
                  <div className="lg:col-span-2">
                    <Input
                      color="primary"
                      variant="underlined"
                      label="Describe Area"
                    />
                  </div>
                  <SelectLocation setAddress={setAddress} />
                  <div className="flex justify-end lg:col-span-2 gap-3">
                    <Button
                      color="default"
                      className="uppercase font-bold"
                      onClick={() => onClose()}
                    >
                      Close
                      <X />
                    </Button>
                    <Button
                      color="primary"
                      type="submit"
                      className="uppercase font-bold"
                    >
                      Post
                      <HeartHandshake />
                    </Button>
                  </div>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddPost
