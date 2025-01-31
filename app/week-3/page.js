import ItemList from "./item-list.js"

export default function Page(){
return(
        <main>
            <h1 className="border border-blue-800 px-2 mx-2 py-4 my-4 text-xl font-bold text-center text-red-300 bg-slate-800">Shopping List</h1>            
            <ItemList />
        </main>
    );
}