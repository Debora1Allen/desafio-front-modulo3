import './style.css';
import filtro from '../../assests/filtro.svg'
import { useEffect, useState } from 'react/cjs/react.development';
import Chip from '../Chip';


function Filters() {
    const [open, setOpen] = useState(false);
    return (
        <div className='container-filter' >
            <button className='btn-filter' onClick={() => setOpen(!open)}>
                <img src={filtro} alt='filter' />
                <strong>Filtrar</strong>
            </button>
            {open &&
                <div className='content-filters'>
                    <div className='separator'></div>
                    <div className='items-filter'>
                        <strong>Dia da Semana</strong>
                        <Chip title='Segunda' selected handleSelected={() => { }} />
                    </div>
                    <div className='separator'></div>
                    <div className='items-filter'>
                        <strong>Categoria</strong>
                    </div>
                    <div className='separator'></div>
                    <div className='items-filter'>
                        <strong>Valor</strong>
                    </div>
                    <div className='container-action-buttons'>
                        <button className='btn-clear'>Limpar filtros</button>
                        <button className='btn-add-filters'>Aplicar Filtros</button>
                    </div>

                </div>

            }


        </div>

    )
};

export default Filters;