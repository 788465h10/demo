import {MenuOutlined, FolderViewOutlined, CloseOutlined,HomeOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useBoolean } from '../hooks/useBoolean';

export const NavBar = () => {
    const { value, toggle } = useBoolean(false);

  return (
    <div>
        <div className='bg-slate-600 h-20 flex flex-row justify-start items-center'>
            <MenuOutlined style={{ fontSize: '30px', color: 'cyan'}} onClick={toggle} className='ml-[2%]'/>
        </div>
        <div className={`bg-slate-600 w-[10%] h-full flex justify-center fixed top-0 ${value ? "left-0" : "left-[-100%]"}`}>
            <ul>
                <div className='flex justify-center items-center mt-10'>
                    <li>
                        <CloseOutlined style={{ fontSize: '30px', color: 'cyan'}} onClick={toggle}/>
                    </li>
                </div>
                <div className='flex flex-col justify-center items-center h-full gap-32'>
                        <li>
                        <Link to="/" className='flex flex-col gap-2 text-cyan-400 font-bold justify-center items-center uppercase'><HomeOutlined style={{ fontSize: '50px', color: 'cyan'}}/>Home</Link>
                    </li>
                    <li>
                        <Link to="/view" className='flex flex-col gap-2 text-cyan-400 font-bold justify-center items-center uppercase'><FolderViewOutlined style={{ fontSize: '50px', color: 'cyan'}} />View todo</Link>
                    </li>
                </div>
            </ul>
        </div>
    </div>
  )
}
