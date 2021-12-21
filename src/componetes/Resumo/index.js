
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import './style.css';
import { formate } from '../../utils/formater';
import format from 'date-fns/format';


function Resume({ transactions }) {
    const [resume, setResume] = useState({ credit: 0, debit: 0, balance: 0 });

    useEffect(() => {
        const somaCredit = transactions.reduce((acum, item) => {
            return item.type === 'credit' ? acum + item.value : acum + 0;
        }, 0);

        const somaDebit = transactions.reduce((acum, item) => {
            return item.type === 'debit' ? acum + new Number(item.value) : acum + 0;
        }, 0)
        setResume({ credit: somaCredit, debit: somaDebit, balance: somaCredit - somaDebit });
    }, [transactions]);


    return (
        <div className='container-resume'>
            <h3>Resumo</h3>
            <div >
                <span>Entradas</span>
                <strong className='in'>{formate(resume.credit)}</strong>

            </div>
            <div>
                <span>Saidas</span>
                <strong className='out'>{formate(resume.debit)}</strong>

            </div>
            <div className='horizontal-line'></div>
            <div>
                <span>Saldo</span>
                <strong className='balance'>{formate(resume.balance)}</strong>

            </div>
        </div>

    )
};

export default Resume;