
export default function Item(props){
    

return(
    <section>
    <ol className="bg-green-800 border border-blue-800 p-4 m-4">
        <li className="font-bold text-black">Name: {props.name}</li>
        <li className="text-red-600">Quantity: {props.quantity}</li>
        <li className="text-blue-400">Category: {props.category}</li>
    </ol>    
    </section>
    );
}