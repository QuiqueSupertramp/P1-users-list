import Button from '../Button/Button';
import Check from '../icons/Check';
import SearchIcon from '../icons/SearchIcon';
import style from './UsersFilters.module.css';

const UsersFilters = ({ filters, filtersSetters }) => {
   const { searchValue, onlyActiveUsers, sortBy } = filters;
   const { setSearchValue, setOnlyActiveUsers, setSortBy } = filtersSetters;

   return (
      <header className={style.filters}>
         <div className={style.filtersRowOne}>
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
         <div className={style.filtersRowTwo}>
            <div className={style.active}>
               <div className={style.checkbox}>
                  {onlyActiveUsers ? <Check /> : null}
                  <input
                     type='checkbox'
                     checked={onlyActiveUsers}
                     onChange={() => setOnlyActiveUsers(!onlyActiveUsers)}
                  />
               </div>
               <label>Mostrar sólo activos</label>
            </div>
            <Button text='Añadir usuario' />
         </div>
      </header>
   );
};

export default UsersFilters;
