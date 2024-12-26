import { getAllUsers } from "@/queries";
import dbConnect from "@/service/dbConnect";
import Document from "./_components/document";
const TanstackPage = async()=>{
    await dbConnect()
    const data = await getAllUsers(); ;
    return(
        <div className="w-full">
            <Document allData={data} />
        </div>
    );
} 

export default TanstackPage