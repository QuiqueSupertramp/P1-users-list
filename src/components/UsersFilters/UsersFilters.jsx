import SearchIcon from '../icons/SearchIcon';
import style from './UsersFilters.module.css';

const UsersFilters = ({
   setSearchValue,
   setActiveFilter,
   setSortBy,
   filters,
}) => {
   const { searchValue, onlyActiveUsers, sortBy } = filters;
   return (
      <header className={style.filters}>
         <div className={style.filtersOne}>
            <div className={style.inputSearch}>
               <SearchIcon />
               <input
                  type='text'
                  placeholder='Buscar...'
                  value={searchValue}
                  onChange={e => setSearchValue(e.target.value)}
               />
            </div>
            <div className={style.select}>
               <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                  <option value='defecto'>Por defecto</option>
                  <option value='rol'>Por rol</option>
                  <option value='alfabeticamente'>Por orden alfabético</option>
                  {!onlyActiveUsers && (
                     <option value='activos'>Por activos</option>
                  )}
               </select>
            </div>
         </div>
         <div className={style.filtersTwo}>
            <div className={style.checkbox}>
               <input
                  type='checkbox'
                  checked={onlyActiveUsers}
                  onChange={() => setActiveFilter(!onlyActiveUsers)}
               />
               <label htmlFor=''>Mostrar sólo activos</label>
            </div>
            <button className={style.btnNewUser}>Añadir Usuario</button>
         </div>
      </header>
   );
};

export default UsersFilters;
