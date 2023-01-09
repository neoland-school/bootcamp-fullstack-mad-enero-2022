import './style.css';
import { Link } from 'react-router-dom';

// 1. crear el diseño de la card

function PokeCard(props) {
    return (
        <Link to={`detail/${props.id}`} state={props}>
            <div className='card__container'>
                <div className='img'>
                    <img src={props.img} alt="" />
                </div>
                <div className='info__container'>
                    <h3 className='pokemon__name'>{props.name}</h3>
                    <div className='type__container'>
                        {props.type[0].map((v, i) => <h4 className={`type__${v.type.name}`}>{v.type.name}</h4>)}
                    </div>
                    <h4 className='pokemon__number'>{props.id}</h4>
                </div>


            </div>
        </Link>

    )
}

export default PokeCard;