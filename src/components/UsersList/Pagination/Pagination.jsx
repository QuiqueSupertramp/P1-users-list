import IconButton from '@/components/Buttons/IconButton';
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
               <option value={4}>4</option>
               <option value={6}>6</option>
               <option value={8}>8</option>
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
