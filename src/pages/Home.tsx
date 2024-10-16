
export const Home = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='text-center'>
            <p className="text-4xl font-bold mb-5">Welcome to the Todo App - Demo for SE347.P12</p>
            <p className="text-2xl text-center">This is a simple todo app built with React and Tailwind CSS</p>
            <p className="text-2xl text-center gap-3">
              <span className="font-bold">API Demo: </span><a href="https://dummyjson.com/docs/todos" className="underline">https://dummyjson.com/docs/todos</a>
            </p>
        </div>
    </div>
  )
}
