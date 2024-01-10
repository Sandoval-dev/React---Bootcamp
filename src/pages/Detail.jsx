import {useParams} from 'react-router-dom';


const Detail = () => {
    const {id}=useParams();

  return (
    <div>
        <div>
              detail page
              {id}
        </div>
    </div>

  )
}

export default Detail