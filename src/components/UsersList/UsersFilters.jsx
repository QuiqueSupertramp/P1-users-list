import style from './UsersFilters.module.css';
import SELECT_OPTIONS from '@/lib/constants/selectOptions';
import Checkbox from '@/components/Inputs/Checkbox';
import InputSearch from '@/components/Inputs/InputSearch';
import Select from '@/components/Inputs/Select';
import Button from '@/components/Buttons/Button';
import { useContext } from 'react';
import { UsersFormsContext } from '@/lib/contexts/UsersFormsContext';
import USERS_FORMS from '@/lib/constants/usersForms';

const UsersFilters = ({ filters, filtersSetters }) => {
   const { setCreateForm, currentForm } = useContext(UsersFormsContext);

   if (currentForm !== USERS_FORMS.FILTERS) return null;

   // Destructuring props
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
               {!onlyActiveUsers && <option value={SELECT_OPTIONS.ACTIVE}>Por activos</option>}
            </Select>
         </div>
         <div className={style.filtersRowTwo}>
            <Checkbox
               label='Mostrar sólo activos'
               checked={onlyActiveUsers}
               onChange={toggleOnlyActiveUsers}
            />
            <Button onClick={setCreateForm}>Añadir usuario</Button>
         </div>
      </header>
   );
};

export default UsersFilters;
