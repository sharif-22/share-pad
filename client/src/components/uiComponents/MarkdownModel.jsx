export default function Modal({ open, onClose, children }) {
  return (
    // backdrop
    <div
      onClick={onClose}
      className={`fixed z-10 inset-0 flex justify-center bg-primaryBlack/55 items-center overflow-y-auto w-full h-full ${
        open ? "visible" : "invisible"
      }`}
    >
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()} // e.stopPropagation() is used stop event bubling
        className={`
            rounded-xl shadow transition-all min-w-80 max-w-7xl h-3/4
            ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
          `}
      >
        <div className="w-4/5 relative mx-auto h-1/2">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 size-8 rounded-full bg-primaryBlack hover:bg-accentBlack hover:text-white"
          >
            X
          </button>
          <div className="pb-14">{children}</div>
        </div>
      </div>
    </div>
  );
}
