import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react"

import SelectLocation from "../extras/SelectLocation"

const AddPost = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

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
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </div>
                <div className="grid lg:grid-cols-2 gap-2">
                  <SelectLocation />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddPost
