import { useState } from 'react';
import { traverseTwoPhase } from 'react-dom/cjs/react-dom-test-utils.production.min';
import { useEffect } from 'react/cjs/react.development';
import setaDown from '../../../assests/setaBaxio.svg';
import setaUp from '../../../assests/setaFiltro.svg';
import './style.css';


function HeaderList({ handlreOrderTransactions, transactions }) {
    const [filter, setFilter] = useState('date');
    const [order, setOrder] = useState('asc');

    useEffect(() => {
        if (order === 'desc') {
            orderAllTransiDesc();
            return;
        }
        orderAllTransiAsc();
    }, [filter, order]);

    function orderAllTransiAsc() {
        const localTransaction = [...transactions];

        localTransaction.sort((a, b) => {

        })
    }

    function orderAllTransiDesc() {

    }

    function handleCahngeFiulter(type) {
        if (filter === type) {
            setOrder(order === 'asc' ? 'desc' : 'asc');

            return;
        }
        setFilter(type);
    }
    return (
        <div className="table-head"

        >
            <div className="column-title cursor-pointer"
                onClick={() => handleCahngeFiulter('date')}
            >
                <span>Data</span>
                {filter === 'date' &&
                    <img src={order === 'asc' ? setaUp : setaDown} alt="seta-filtro" />
                }

            </div>
            <div className="column-title cursor-pointer"
                onClick={() => handleCahngeFiulter('weekDay')}
            >
                <span>Dia da semana</span>
                {filter === 'weekDay' &&
                    <img src={order === 'asc' ? setaUp : setaDown} alt="seta-filtro" />
                }
            </div>
            <div className="column-title">
                <span>Categoria</span>
            </div>
            <div className="column-title cursor-pointer"
                onClick={() => handleCahngeFiulter('value')}
            >
                <span> Valor</span>
                {filter === 'value' &&
                    <img src={order === 'asc' ? setaUp : setaDown} alt="seta-filtro" />
                }
            </div>
            <div className="column-title"></div>
        </div>
    )

};

export default HeaderList;