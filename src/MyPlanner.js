import { AiFillEdit, AiOutlineDelete } from "react-icons/ai" 
 
export const MyPlanner = ( {text, updatingInput, deletePlanner}) => {
    return( 
        <div>
            <p>{text}</p>
            <AiFillEdit onClick={updatingInput} ></AiFillEdit>
            <AiOutlineDelete onClick={deletePlanner} ></AiOutlineDelete>
        </div>
    )
}