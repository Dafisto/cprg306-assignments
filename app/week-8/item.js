
export default function Item( {name, category, quantity, onSelect} ) {

return(
    <ol
        onClick={() => onSelect({name})}
        className="h-[175px] w-[190px] cursor-pointer flex-1 bg-slate-800 border-3 rounded-md border-blue-800 px-4 py-5 mx-5 my-7"
    >
        <li className="font-bold text-white">Name: {name}</li>
        <li className="text-red-600">Buy {quantity} in {category}</li>
    </ol>
    );
}