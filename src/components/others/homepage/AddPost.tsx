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

import type { Address } from "@/@types/profile"
import { useState } from "react"
import { useForm } from "react-hook-form"
import SelectLocation from "../extras/SelectLocation"

type FormType = {
  hospital: string
  date: string
  time: string
  blood: string
  situation: string
  address: Address
}

const AddPost = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const { register, handleSubmit } = useForm<FormType>()
  const [address, setAddress] = useState<Address | null>(null)

  const handleFormAddPost = (data: FormType) => {
    const packet = {
      ...data,
      address,
    }
    console.log(packet)
  }
  return (
    <>
      <div>
        <Button onPress={onOpen}>Add Post</Button>
      </div>
      <Modal size="2xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Ask For Blood 🩸
              </ModalHeader>
              <ModalBody>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
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
                  <div className="lg:col-span-2">
                    <Input
                      color="primary"
                      variant="underlined"
                      label="Describe Area"
                      {...register("address.street")}
                    />
                  </div>

                  <Select
                    label="রক্তের গ্রূপ"
                    placeholder="আপনার রক্তের গ্রূপ নির্বাচন করুন"
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
                    label="অবস্থা"
                    placeholder="রোগীর অবস্থা"
                    className="font-bangla"
                    color="primary"
                    isRequired
                    {...register("situation")}
                  >
                    {["জরুরি", "সাধারণ", "কম জরুরি"]?.map((situation) => (
                      <SelectItem key={situation}>{situation}</SelectItem>
                    ))}
                  </Select>
                  <SelectLocation setAddress={setAddress} />
                  <div className="flex justify-end lg:col-span-2">
                    <Button color="primary" type="submit">
                      Submit
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
