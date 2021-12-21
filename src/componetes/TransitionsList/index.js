import editIcon from '../../assests/lapis.svg';
import deleteIcon from '../../assests/lixeira.svg';
import HeaderList from './HeaderList';
import './style.css';
import { formate, formatDate, formarterWord } from '../../utils/formater';
import ModalDelete from '../ConfirmDelete';
import { useState } from 'react';




function List({ transactions, setCurrentUser }) {

    const [idDelete, setIdDelete] = useState(null);

    function handleDelete() {


    }

    return (
        <div className='table'><HeaderList />
            <div className='table-body'>
                {transactions.map((item) => (
                    <div className='table-line' key={item.id}>
                        <div className='line-items'>{formatDate(item.date)}</div>
                        <div className='line-items'>{formarterWord(item.week_day)}</div>
                        <div className='line-items'>{item.category}</div>
                        <div
                            className='line-items value-font'
                            style={{ color: item.type === 'credit' ? ' #7B61FF' : '#FA8C10' }}
                        >
                            {formate(item.value)}

                        </div>
                        <div className='line-items'></div>
                        <img src={editIcon} className='button-action'
                            onClick={() => setCurrentUser(item)}
                        />
                        <img src={deleteIcon} className='button-action'
                            onClick={() => setIdDelete(item.id)}
                        />
                        <ModalDelete show={item.id === idDelete} setShow={() => setIdDelete(null)} message='Apagar item?' handleConfirm={() => handleDelete()} />
                    </div>
                ))}
            </div>
        </div>
    )

};

export default List;