
import './style.css';


function ModalDelete({ show, message, handleConfirm, setShow }) {
    return (

        <>
            {show &&
                <div>
                    <div></div>
                    <span>{message}</span>
                    <button onClick={() => handleConfirm()}>Sim</button>
                    <button onClick={() => setShow(false)}>Não</button>
                </div>
            }
        </>

    )
};

export default ModalDelete;