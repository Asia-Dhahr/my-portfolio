import { Dialog } from "@headlessui/react";
import { useRef } from "react";

export function Modal({ onClose = () => {}, children }) {
  let overlayRef = useRef();

  return (
    <Dialog
      static
      open={true}
      onClose={onClose}
      initialFocus={overlayRef}
      className="fixed inset-0 z-10 flex items-center justify-center"
    >
      <Dialog.Overlay
        ref={overlayRef}
        className="fixed inset-0 bg-gray-900/60"
      />
      <div className="relative flex items-center justify-center w-[300px] lg:w-[500px] md:w-[280px] sm:w-[260px]">
        {children}
      </div>
    </Dialog>
  );
}
