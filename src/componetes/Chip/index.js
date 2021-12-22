import './style.css';
import soma from '../../assests/soma.svg';
import xis from '../../assests/xis.svg';


function Chip({ title, selected, handleSelected }) {
    return (
        <div className={`container-chip ${selected && 'selected-chip'}`}
            onClick={() => handleSelected(title)}
        >
            <span>{title}</span>
            <img className='icon-chip' src={selected ? xis : soma} alt='chip Icon' />
        </div>
    )
};

export default Chip;