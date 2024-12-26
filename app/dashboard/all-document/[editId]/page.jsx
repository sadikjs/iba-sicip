import EditRegister from "./_components/Edit";
import { getRegisterById } from "@/queries";
import  dbConnect  from "@/service/dbConnect";
import { getAllUsers } from "@/queries";
const EditPage = async ({ params}) => {
    await dbConnect(); 
    const {editId} = await params
    const initailData = await getRegisterById(editId)
    return (
        <div>
            <EditRegister getUser={initailData}
            editId={editId}/>
        </div>
    );
}

export default EditPage