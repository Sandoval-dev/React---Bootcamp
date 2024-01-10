import {useSelector} from 'react-redux'
const Home = () => {
    // const navigate=useNavigate();
    const {model}=useSelector(state => state.model)


    console.log(model)


    return (
        
        <div>
          Home Page
        </div>
    )
}

export default Home