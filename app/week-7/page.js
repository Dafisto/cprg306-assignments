import ItemList from "./item-list.js"
import NewItem from "./new-item.js"
import items from "./items.json"

export default function Page(){
return(
        <main className="bg-gray-400">
            <h1 className="border-4 border-blue-800 px-10 mx-2 py-10 my-4 text-xl font-bold text-center text-white-300 bg-slate-800">Shopping List</h1>
            <ItemList />
        </main>
    );
}