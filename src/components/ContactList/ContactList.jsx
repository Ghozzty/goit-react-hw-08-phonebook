import css from './ContactList.module.css'
import PropTypes from "prop-types"

export const ContactList = ({contacts, deleteCont}) => {
    return(

        <ul className={css.list}>
            {contacts.map(cont => (
                <li key={cont.id} className={css.item}>{cont.name}: 
                <span className={css.number}>{cont.number}</span> 
                <button id={cont.id}
                 onClick={deleteCont} className={css.delBtn}>Delete</button>
                </li>
            ))}
        </ul>
       
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
    deleteCont:PropTypes.func.isRequired,
  };
