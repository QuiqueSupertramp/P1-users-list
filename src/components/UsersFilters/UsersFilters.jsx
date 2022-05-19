import { SELECT_OPTIONS } from '@/lib/constants/selectOptions';
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
                  <option value={SELECT_OPTIONS.DEFAULT}>Por defecto</option>
                  <option value={SELECT_OPTIONS.ROLE}>Por rol</option>
                  <option value={SELECT_OPTIONS.NAME}>
                     Por orden alfabético
                  </option>
                  {!onlyActiveUsers && (
                     <option value={SELECT_OPTIONS.ACTIVE}>Por activos</option>
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
                     id='actives'
                     checked={onlyActiveUsers}
                     onChange={() => setOnlyActiveUsers(!onlyActiveUsers)}
                  />
               </div>
               <label htmlFor='actives'>Mostrar sólo activos</label>
            </div>
            <Button text='Añadir usuario' />
         </div>
      </header>
   );
};

export default UsersFilters;
