import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
export default function AboutUs() {
    const navigate = useNavigate();  //useNavigate() returns a function that lets you navigate programmatically in the browser in response to user interactions or effects.

    const doSomethingAndGoToHome=()=>{
        console.log('Execute Some Logic...');
        navigate('/home')
    }
  return (
    <>
        <h2>This is AboutUs Component</h2>
        <a href="/home">Go To Home (Whole page is refreshing)</a>
        <p>
            <Link to="/home">Go to Home (Whole page is not refreshing)</Link>
        </p>
        <p>
            <button onClick={doSomethingAndGoToHome}>Do Something & go to Home</button>
        </p>
        <p>
            <button onClick={() => navigate(-1)}>Go Back</button>
             <button onClick={() => navigate(1)}>Go Next</button>
        </p>

    </>
    
  )
}
