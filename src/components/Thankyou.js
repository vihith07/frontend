import { useLocation } from "react-router-dom";
export default function Thankyou(){
    const dets=useLocation();
    const dets1=dets.state;
    return(
        <div>
            Thank You For Applying for {dets1.job} Mr.{dets1.app_name}
        </div>
    );
}