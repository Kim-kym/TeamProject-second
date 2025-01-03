// import React from "react";
// import CustomModal from "../components/topping/CustomModal";
// import SetMenuModal from "../components/topping/SetMenuModal";
// import OptionSelectionModal from "../components/topping/OptionSelectionModal";

// const ModalManager = ({
//   modalType,
//   selectedItem,
//   isOpen,
//   modalConfig,
//   addToCart,
//   formatPrice,
//   onClose,
//   handleOptionModalOpen,
//   handleOptionConfirm,
//   setSelectedTopping,
//   selectedTopping,
//   menuDatas,
// }) => {
//   console.log("ModalManager: isOpen:", isOpen, "Modal Type:", modalType);

//   if (!isOpen) {
//     console.log("Modal is not open, skipping rendering.");
//     return null;
//   }

//   switch (modalType) {
//     case "custom":
//       console.log("Rendering Custom Modal with selectedItem:", selectedItem);
//       return (
//         <CustomModal
//           isOpen={isOpen} // 수정: `isopen` → `isOpen`
//           onClose={onClose}
//           selectedItem={selectedItem}
//           addToCart={addToCart}
//           productMenuData={menuDatas.product}
//           formatPrice={formatPrice}
//         />
//       );

//     case "setMenu":
//       return (
//         <SetMenuModal
//           isOpen={isOpen}
//           onClose={onClose}
//           selectedItem={selectedItem}
//           addToCart={addToCart}
//           sideMenuData={menuDatas.side}
//           drinkMenuData={menuDatas.drink}
//           productMenuData={menuDatas.product}
//           formatPrice={formatPrice}
//         />
//       );

//     case "optionSelection":
//       return (
//         <OptionSelectionModal
//           isOpen={isOpen}
//           onClose={onClose}
//           title={modalConfig.title}
//           options={modalConfig.options}
//           selectedOptions={modalConfig.selectedOptions}
//           onConfirm={handleOptionConfirm}
//         />
//       );
// //
//     default:
//       console.error("Unknown modal type:", modalType);
//       return null;
//   }
// };

// export default ModalManager;
