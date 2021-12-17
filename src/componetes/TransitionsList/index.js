import editIcon from '../../assests/lapis.svg';
import deleteIcon from '../../assests/lixeira.svg';
import HeaderList from './HeaderList';
import './style.css';


function List() {
    return (
        <div className='table'><HeaderList />
            <div className='table-body'>
                <div className='table-line'>
                    <div className='line-items'>Conteudo</div>
                    <div className='line-items'>Conteudo</div>
                    <div className='line-items'>Conteudo</div>
                    <div className='line-items'>Conteudo</div>
                    <div className='line-items'></div>



                    <img src={editIcon} className='edit-icon' />
                    <img src={deleteIcon} className='delete-icon' />

                </div>

            </div>



        </div>
    )

};

export default List;