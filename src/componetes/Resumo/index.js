
import './style.css';


function Resume() {
    return (
        <div className='container-resume'>
            <h3>Resumo</h3>
            <div >
                <span>Entradas</span>
                <strong className='in'>R$</strong>

            </div>
            <div>
                <span>Saidas</span>
                <strong className='out'>R$</strong>

            </div>
            <div className='horizontal-line'></div>
            <div>
                <span>Saldo</span>
                <strong className='balance'>R$</strong>

            </div>
        </div>

    )
};

export default Resume;