
import './style.css';


function ModalDelete({ show, message, handleConfirm, setShow }) {
    return (

        <>
            {show &&
                <div className='confirm-delete'>
                    <div className='arrow-up'></div>
                    <span>{message}</span>
                    <button className='btn-confirm blue' onClick={() => handleConfirm()}>Sim</button>
                    <button className='btn-confirm red' onClick={() => setShow()}>Não</button>
                </div>
            }
        </>

    )
};

export default ModalDelete;