import femaleProfile from './images/femaleProfile.jpg'
import maleProfile from './images/maleProfile.jpg'
import Teams from './Teams'
const Employees = ({employees,selectedTeam,handleEmployeeCardClick,handleTeamChange}) =>{
    
    return (
        <main className="container">
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-6">
                    <Teams handleTeamChange={handleTeamChange} selectedTeam={selectedTeam}/>
                </div>
                <div className="col-8">
                <div className="card-collection">
            {
            employees.map((employee)=>(
                <div key={employee.id}  id={employee.id} className={(employee.teamName===selectedTeam? "crad m-2 standout":"crad m-2")} style={{cursor: "pointer"}} onClick={handleEmployeeCardClick}>
                    {(employee.gender==='female')?<img src={femaleProfile} className="card-img-top"/>:<img src={maleProfile} className="card-img-top"/>}
                    
                <div className="card-body">
                <h5 className="card-title">Full Name: {employee.fullName}</h5>
                <p><b>Designation: </b> {employee.designation}</p>
                </div>
                </div>
            ))
           }
           </div>
           </div>
           </div>
        </main>
    )
}

export default Employees;