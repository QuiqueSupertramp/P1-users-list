import IconButton from '@/components/Buttons/IconButton';
import PAGINATION from '@/lib/constants/pagination';
import NextArrow from '../../icons/NextArrow';
import PrevArrow from '../../icons/PrevArrow';
import Select from '../../Inputs/Select';
import style from './Pagination.module.css';

const Pagination = ({ totalPages, pagination, paginationSetters }) => {
   // Destructuring props
   const { currentPage, steps } = pagination;
   const { setCurrentPage, setSteps } = paginationSetters;

   return (
      <footer className={style.footer}>
         <div className={style.steps}>
            <Select value={steps} onChange={e => setSteps(e.target.value)}>
               <option value={PAGINATION.SMALL_STEPS}>{PAGINATION.SMALL_STEPS}</option>
               <option value={PAGINATION.MEDIUM_STEPS}>{PAGINATION.MEDIUM_STEPS}</option>
               <option value={PAGINATION.LARGE_STEPS}>{PAGINATION.LARGE_STEPS}</option>
            </Select>
            <span>usuarios por página</span>
         </div>
         <div className={style.pagination}>
            <IconButton
               icon={PrevArrow}
               disabled={currentPage === 1}
               onClick={() => setCurrentPage(currentPage - 1)}
            />
            <span>
               Página {currentPage} de {totalPages}
            </span>
            <IconButton
               icon={NextArrow}
               disabled={currentPage === totalPages}
               onClick={() => setCurrentPage(currentPage + 1)}
            />
         </div>
      </footer>
   );
};

export default Pagination;
