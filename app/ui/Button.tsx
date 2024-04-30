
const Button = ({lable,color}:{lable:string,color:string})=>{
    return(
        <button
        style={{color}}
        type="submit"
        className={`bg-${color}-600 text-gray-400 border-2 py-2 px-4 rounded-md hover:bg-${color}-600 focus:outline-none focus:ring focus:border-${color}-300`}
        >
            {lable}
        </button>
    )
}

export default Button;