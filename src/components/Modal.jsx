import { ModalContainer } from "../stylesComponent/StyleModal";

function Modal({openModal, closeModal, children}) {

    if(!openModal) {
        return null;
    }
  return (
    <ModalContainer>
        <article>
          <section>
          <div className="Modal-button-container">
            <button onClick={closeModal}>X</button>
          </div>
          <div className="Modal-content-container">
            {children}
          </div>
          </section>
        </article>
    </ModalContainer>
  )}

export default Modal;