import './style.css';
import close from '../../assests/closeBtn.svg';
import { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { formateWeekDay } from '../../utils/formater';


const defaultValuesForm = {
    value: 0,
    category: '',
    date: '',
    description: ''
}


function ModalRegister({ open, setOpen }) {
    const [active, setActive] = useState('debit');
    const [form, setForm] = useState(defaultValuesForm);

    useEffect(() => {
        if (open) {
            setForm(defaultValuesForm);
        }
    }, [open]);

    function handleChange(target) {
        setForm({ ...form, [target.name]: target.value })
    }
    async function handleRegister(event) {
        event.preventDefault();

        const [day, month, year] = form.date.split('/');
        const select = new Date(`${month}/${day}/${year}`);
        const post = {
            date: select,
            week_day: formateWeekDay(select),
            description: form.description,
            value: form.value,
            category: form.category,
            type: active
        }
        const response = await fetch('http://localhost:3333/transactions', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post),
        });

        await response.json();
        setOpen(false);
    }

    return (
        <div className='backdrop' style={{ display: !open && 'none' }}>
            <div className='modal-container modal-storage' alt='close'><img src={close} className='close-icon' onClick={() => setOpen(false)} />
                <h2>Adcionar Registro</h2>
                <div className='container-buttons'>
                    <button className={`btn-ent ${active === 'credit' && 'credit'}`} onClick={() => setActive('credit')}>Entrada</button>
                    <button className={`btn-ent ${active === 'debit' && 'debit'}`} onClick={() => setActive('debit')}>Saída</button>
                </div>
                <form onSubmit={handleRegister}>
                    <div>
                        <label htmlFor='valor'>Valor</label>
                        <input
                            id='valor'
                            type='number'
                            name='value'
                            value={form.value}
                            onChange={(event) => handleChange(event.target)} />
                    </div>
                    <div>
                        <label htmlFor='categoria'>Categoria</label>
                        <input
                            id='categoria'
                            type='text'
                            name='category'
                            value={form.category}
                            onChange={(event) => handleChange(event.target)}
                        />
                    </div>
                    <div>
                        <label htmlFor='data'>Data</label>
                        <InputMask
                            mask='99/99/9999'
                            id='data'
                            type='text'
                            name='date'
                            value={form.date}
                            onChange={(event) => handleChange(event.target)}
                        />
                    </div>
                    <div>
                        <label htmlFor='descricao'>Descrição</label>
                        <input
                            id='descricao'
                            type='text'
                            name='description'
                            value={form.description}
                            onChange={(event) => handleChange(event.target)}
                        />
                    </div>
                    <div className='container-btn-insert'>
                        <button className='confirm-insert'>Confirmar</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default ModalRegister;