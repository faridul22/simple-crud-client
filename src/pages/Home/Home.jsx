import { Link } from "react-router-dom";
import SimpleForm from "../../components/SimpleForm";

const Home = () => {
    return (
        <div>
            <SimpleForm></SimpleForm>
            <Link to='/users'><button>View All Users</button></Link>
        </div>
    );
};

export default Home;