
const item = () => {
    return (
        <div>

        <div className="w-full flex items-center justify-center font-sans">
            <div className="bg-purple-200 rounded shadow p-6 m-4 flex w-full lg:w-3/4">
                <li>
                <input
                    type="checkbox"
                    value=""
                />
                <span>
                    item.quantity 
                </span>
                <button>❌</button>
                </li>
            
            </div>
            
        </div>

        <button className=" bg-violet-500 active:bg-violet-700 focus:outline-none p-2 rounded-sm mt-16 flex mx-auto">
                Clear List
        </button>
            
        </div>
    );
};

export default item;