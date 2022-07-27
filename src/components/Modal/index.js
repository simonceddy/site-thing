function Modal({ children, active, onClose }) {
  return active ? (
    <div
      role="presentation"
      onClick={onClose}
      className="absolute top-0 bottom-0 left-0 right-0 bg-slate-700 bg-opacity-50 z-30 flex flex-col justify-center items-center"
    >
      {children}
    </div>
  ) : null;
}

export default Modal;
