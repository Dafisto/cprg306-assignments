
export default function Item(props){
    

return(
    <div className="w-25 h-25">
        <ol className="bg-green-800 border-2 border-blue-800 px-4 py-5 mx-5 my-10">
            <li className="font-bold text-black">Name: {props.name}</li>
            <li className="text-red-600">Quantity: {props.quantity}</li>
            <li className="text-blue-400">Category: {props.category}</li>
        </ol>    
    </div>
    );
}