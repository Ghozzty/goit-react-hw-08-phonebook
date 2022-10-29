import css from './Filter.module.css'
import PropTypes from "prop-types";

export const Filter = ({value , changeFilter}) => {
    return(
        <label className={css.findForm}>
            <p className={css.title}>Find contacts by name</p> 
            <input 
            type = "text"
            value = {value}
            onChange = {changeFilter}
            className = {css.input} />
        </label>
    )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    changeFilter:PropTypes.func.isRequired,
  };