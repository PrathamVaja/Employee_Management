

const CreateTask = () => {
  return (
    <div>
         <form className="flex flex-wrap w-full mt-10 p-5 bg-[#1c1c1c] items-start justify-evenly" >
        <div className="w-1/3">
            <div>
                <h3>Task Title</h3>
                <input className="bg-transparent border rounded-md w-full mb-3 px-4 py-1  placeholder:text-wrap"   type="text" placeholder="Make a UI design" />
            </div>
            <div>
                <h3>Date</h3>
                <input  className="bg-transparent border rounded-md w-full mb-3 px-4 py-1" type="date" />
            </div>
            <div>
                <h3>Asign to</h3>
                <input  className="bg-transparent border rounded-md w-full mb-3 px-4 py-1" type="text" placeholder="Employee Name" />
            </div>
            <div>
                <h3>Category</h3>
                <input  className="bg-transparent border rounded-md w-full mb-3 px-4 py-1" type="text" placeholder="design, dev, etc" />
            </div>
        </div>

      <div className="flex flex-col ">        
            <div>
                <h3 className="w-1/2">Description</h3>
                <textarea className="bg-transparent border rounded-md mt-2" name="" id="" cols="50" rows="8"></textarea>
            </div>
        
            <button className="bg-green-500 py-1 rounded-md">Create Task</button>
      </div>
      </form>
    </div>
  )
}

export default CreateTask
