import { useNavigate } from "react-router-dom";
export default function Form(props){
    const navigate = useNavigate();
    const Handleform=(event)=>{
        event.preventDefault();
        let title=document.getElementById("title").innerHTML;
        let name=document.getElementById("name").value;
        let email=document.getElementById("email").value;
        let deg=document.getElementById("deg").value;
        fetch("http://localhost:9000/" ,{
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ JOB: title,nam:name })
        }).then(response =>response.json()).then(data=>{console.log(data)});

        // fetch("http://localhost:9000/",{
        //     method: 'GET',
        //     headers: { 
        //         'Content-Type': 'application/json',
        //     }
        // }).then(response =>response.json()).then(data=>{console.log(data)});

        // navigate("/end",{state:{job:title,app_name:name}});
    }
    let arr=["name","email","College"];
    let arr1=["Enter Name","Enter Email","Enter College Name"];
    return(
        <form onSubmit={Handleform}>
        <div className="p-2 bg-slate-200 mt-20 mx-auto w-11/12 lg:w-3/4 lg:grid flex flex-col lg:grid-cols-2">
            <div className="col-span-2 text-center p-3 text-3xl font-bold" id="title">{props.name}</div>
            {
            arr.map((det,index)=>{
                return(
                <div className="col-span-1 p-1" ><input id={det} placeholder={arr1[index]} className="w-full bg-slate-100 p-2 text-lg font-semibold" type="text" /></div>);
            })
            }
            <div className="col-span-1 p-1" ><input id="CGPA" placeholder="Enter CGPA" className="w-full bg-slate-100 p-2 text-lg font-semibold" type="text" /></div>
            <div className="col-span-2 p-1">
                <select id="deg" className="font-bold bg-slate-100 w-full p-2">
                    <option>UG</option>
                    <option>PG</option>
                </select>
            </div>
            <div className="col-span-2 text-center p-2">
                <input className="text-white rounded-lg font-semibold opacity-70 hover:opacity-100 bg-indigo-600 p-4 text-xl" type="submit" />
            </div>
        </div>
        </form>
    );
}