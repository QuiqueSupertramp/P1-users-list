import BtnIcon from '../BtnIcon/BtnIcon';
import NextArrow from '../icons/NextArrow';
import PrevArrow from '../icons/PrevArrow';
import style from './Pagination.module.css';

const Pagination = ({ totalPages, pagination, paginationSetters }) => {
   const { currentPage, steps } = pagination;
   const { setCurrentPage, setSteps } = paginationSetters;

   return (
      <footer className={style.footer}>
         <div className={style.steps}>
            <div className={style.select}>
               <select
                  value={steps}
                  onChange={e => {
                     setCurrentPage(1);
                     setSteps(e.target.value);
                  }}>
                  <option value={4}>4</option>
                  <option value={6}>6</option>
                  <option value={8}>8</option>
               </select>
            </div>
            <label>usuarios por página</label>
         </div>
         <div className={style.pagination}>
            <BtnIcon
               Icon={PrevArrow}
               disabled={currentPage === 1}
               onClick={() => setCurrentPage(currentPage - 1)}
            />
            <span>
               Página {currentPage} de {totalPages}
            </span>
            <BtnIcon
               Icon={NextArrow}
               disabled={currentPage === totalPages}
               onClick={() => setCurrentPage(currentPage + 1)}
            />
         </div>
      </footer>
   );
};

export default Pagination;
