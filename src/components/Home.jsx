import { Link } from "react-router-dom";
import { MainLanding } from "../stylesComponent/StyleApp.js";
import { getAllCountries } from "../redux/features/country/actions";
import { useDispatch } from 'react-redux'
function Home() {

  const dispatch = useDispatch();

  const callApi = ()=>{
    dispatch(getAllCountries());
  }


  
  return (
    <MainLanding>
      <section>
        <h1>Welcome to the Countries Page!</h1>
        <p>
          Explore relevant information about the different countries of the
          world
        </p>
      </section>
      <section>
        <div>
          <Link to={"/home"} onClick={callApi}>Get start!</Link>
        </div>
      </section>
    </MainLanding>
  );
}

export default Home;
