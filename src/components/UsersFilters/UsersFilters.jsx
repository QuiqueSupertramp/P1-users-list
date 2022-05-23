import { SELECT_OPTIONS } from '@/lib/constants/selectOptions';
import Checkbox from '../Inputs/Checkbox';
import InputSearch from '../Inputs/InputSearch';
import Select from '../Inputs/Select';
import style from './UsersFilters.module.css';

const UsersFilters = ({ filters, filtersSetters, slot }) => {
   const { searchValue, onlyActiveUsers, sortBy } = filters;
   const { setSearchValue, setOnlyActiveUsers, setSortBy } = filtersSetters;

   const toggleOnlyActiveUsers = () => setOnlyActiveUsers(!onlyActiveUsers);

   return (
      <header className={style.filters}>
         <div className={style.filtersRowOne}>
            <InputSearch
               placeholder='Buscar...'
               value={searchValue}
               onChange={e => setSearchValue(e.target.value)}
            />
            <Select value={sortBy} onChange={e => setSortBy(e.target.value)}>
               <option value={SELECT_OPTIONS.DEFAULT}>Por defecto</option>
               <option value={SELECT_OPTIONS.ROLE}>Por rol</option>
               <option value={SELECT_OPTIONS.NAME}>Por orden alfabético</option>
               {!onlyActiveUsers && (
                  <option value={SELECT_OPTIONS.ACTIVE}>Por activos</option>
               )}
            </Select>
         </div>
         <div className={style.filtersRowTwo}>
            <Checkbox
               label='Mostrar sólo activos'
               checked={onlyActiveUsers}
               onChange={toggleOnlyActiveUsers}
            />
            {slot}
         </div>
      </header>
   );
};

export default UsersFilters;
