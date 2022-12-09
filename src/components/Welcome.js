import { Link } from 'react-router-dom';
export default function Welcome(){
    return(
        <>
        <div>Welcome</div>
        <div><Link to="/form">Fill Form</Link></div> 
        </>
    );
}