import css from "./Searchbar.module.css";
import { IoSearchSharp } from "react-icons/io5";


export const Searchbar = () => {

    return (
        <header className = {css.Searchbar}>
  <form className={css.SearchForm}>
    <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
            <IoSearchSharp style={{ height: '30px', width: '30px' }}/>
    </button>

    <input
      className={css.SearchFormInput}
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
        </header>
    )
}