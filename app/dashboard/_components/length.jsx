import { getStudentLength } from "@/queries";
const TotalLength = async()=>{
    const students = await getStudentLength()
    return(
        <div>{students.total}</div>
    );
}

export default TotalLength