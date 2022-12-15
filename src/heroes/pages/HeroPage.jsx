import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  /**
   * useParams devuleve el path actual y el nombre que recibe del <Route/> previo (/hero/:heroId)
   */
  const {heroId} = useParams();
  const navigate = useNavigate();
  /**
   * Utilizar useMemo para memorizar el estado y evitar renderizar todo si el 'heroId' es el mismo
   */
  const hero = useMemo( () => getHeroById(heroId), [heroId] );

  const onNavigateBack = () =>{
    navigate(-1);
  }
  useMemo

  if(!hero){
    return <Navigate to="/marvel" />
  }

  return (
    <>
    <div className="row mt-5">
        <div className="col-4">
            <img src={`/assets/heroes/${hero.id}.jpg`} alt={`${hero.superhero}`} className="img-thumbnail animate__animated animate__fadeInLeft"/>
        </div>
        <div className="col-8">
            <h3>{hero.superhero}</h3>
            <ul className="list-group list-group-flush" >
              <li className="list-group-item"> <b>Alter Ego: </b> {hero.alter_ego} </li>
              <li className="list-group-item"> <b>Publisher: </b> {hero.publisher} </li>
              <li className="list-group-item"> <b>Primera aparición: </b> {hero.first_appearance} </li>
            </ul>
            <h5 className="mt-3" > Characters </h5>
            <p> {hero.characters} </p>
            <button className="btn btn-success" onClick={ onNavigateBack }>
              Volver
            </button>
        </div>



    </div>
    </>
    
  )
}
