
import profile from '../../images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center  max-w-screen-xl mx-auto py-4 border-b-2'>
              <h1 className='bg-blue-800 font-bold text-3xl'>Knowlege Cafe</h1>
              <img src={profile} alt="" />
            
        </div>
    );
};

export default Header;