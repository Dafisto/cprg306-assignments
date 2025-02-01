import ItemList from "./item-list.js"

export default function Page(){
return(
        <main>
            <h1 className="border-4 border-blue-800 px-10 mx-2 py-10 my-4 text-xl font-bold text-center text-red-300 bg-slate-800">Shopping List</h1>
            <ItemList />
        </main>
    );
}