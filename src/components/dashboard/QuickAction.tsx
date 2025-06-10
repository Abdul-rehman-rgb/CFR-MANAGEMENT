import { FiPlus } from "react-icons/fi";
import ColorFull from "../ui/button/ColorFull";
import HeadingFour from "../ui/heading/HeadingFour";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../ui/modal";
// import MultiProductSelection from "./MultiProductSelection";
import Button from "../ui/button/Button";
// import ProductTableModal from "./ProductTableModal";
// import ShippingTableModal from "./ShippingTableModal";
import ConfitmDelivery from "./ConfrimDeliveryModal";

export default function QuickAction() {

  const { isOpen, openModal, closeModal } = useModal();
    const handleSave = () => {
      // Handle save logic here
      console.log("Saving changes...");
      closeModal();
    };
  return (
    <div className="QuickActionMain px-4 py-4">

      <HeadingFour text="Quick Actions" />

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {/* Quick Action Buttons */}
        <ColorFull
          text="Add new order"
          bgColor="bg-[#5D5FEF]"
          textColor="text-white"
          fontSize="text-[12px]"
          icon={FiPlus}
          onClick={openModal}
        />
        <ColorFull
          text="Add new order"
          bgColor="bg-[#5D5FEF]"
          textColor="text-white"
          fontSize="text-[12px]"
          icon={FiPlus}
          onClick={openModal}
        />
        <ColorFull
          text="Add new order"
          bgColor="bg-[#5D5FEF]"
          textColor="text-white"
          fontSize="text-[12px]"
          icon={FiPlus}
          onClick={openModal}
        />

        <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[725px] m-4">
       
        {/* <MultiProductSelection/>
        <ProductTableModal/> */}
        {/* <ShippingTableModal/> */}
        <ConfitmDelivery/>

         <div className="flex items-center gap-3 px-2 mt-0 mb-4 lg:justify-end">
            
           <Button className="w-full bg:hover-red mx-5 my-1" size="sm" onClick={handleSave}>
              Next
            </Button>
          </div>  

         
      </Modal>

      </div>
    </div>
  );
}
