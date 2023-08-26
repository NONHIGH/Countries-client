import ListCard from "./ListCard";
import { MainApp } from "../stylesComponent/StyleApp";
import SectionFilters from "./SectionFilters";
import { setCurrentPage, setOrder } from "../redux/features/country/countrySlice";
import { useDispatch, useSelector } from "react-redux";




function MainPage() {
  const currentPage = useSelector((state) => state.countries.currentPage);
  const dispatch = useDispatch();


  const changePage = (numPage) => {
    dispatch(setCurrentPage(numPage));
  };
  const changeOrder = (by, order) => {
    dispatch(setOrder({by, order}));
  };
  

  return (
    <MainApp>
      <SectionFilters changeOrder={changeOrder}></SectionFilters>
      <ListCard changePage={changePage} currentPage={currentPage}></ListCard>
    </MainApp>
  );
}

export default MainPage;
