import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      console.log('Login form submitted:', formData);
      setIsLoading(false);
      alert('Login berhasil! Anda akan dialihkan.');
      window.location.href = '/';
    }, 2000);
  };

  return (
    <>
    <main 
      className="h-screen w-screen bg-cover bg-center font-lato" 
      style={{backgroundImage: "url('./assets/image/background login.png')"}}
    >
      <div className="flex items-center justify-center h-full p-6 sm:p-4 md:p-8">
        <div className="bg-primary/70 text-white p-6 sm:p-6 md:p-8 rounded-2xl w-full max-w-md shadow-lg">
          <div className="text-center mb-4 sm:mb-6">
            {/* Logo RAYFILM */}
            <div className="text-2xl sm:text-3xl font-extrabold flex items-center justify-center gap-2 mb-2">
              <div>
                <svg width="40" height="35" viewBox="0 0 50 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-10 sm:h-10">
                  <path d="M43.4167 3.99658L35.2292 5.42658L40.9375 11.9166L45.0417 11.1832L43.4167 3.99658ZM29.1042 6.48992L25 7.20492L30.7292 13.6766L34.8125 12.9616L29.1042 6.48992ZM18.8958 8.24992L14.7917 9.00158L20.5208 15.4732L24.6042 14.7582L18.8958 8.24992ZM8.66665 10.0832L6.62498 10.4316C5.54245 10.6219 4.58999 11.1825 3.97674 11.9903C3.36348 12.7981 3.13957 13.787 3.35415 14.7399L4.16665 18.3332L14.375 16.5549L8.66665 10.0832ZM4.16665 18.3332V36.6666C4.16665 38.7016 6.04165 40.3333 8.33332 40.3333H41.6667C43.9792 40.3333 45.8333 38.7016 45.8333 36.6666V18.3332H4.16665Z" fill="white"/>
                </svg>
              </div>
              <p>RAYFILM</p>
            </div>
            {/* /Logo RAYFILM */}
            <h2 className="text-lg sm:text-xl font-semibold">Masuk</h2>
            <p className="text-xs sm:text-sm text-gray-300">Selamat datang kembali!</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="mb-3 sm:mb-4">
              <label className="block text-sm font-medium mb-2 " htmlFor="username">Username</label>
              <input 
                id="username" 
                name="username"
                type="text" 
                placeholder="Masukkan username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full px-3 py-2 sm:px-4 sm:py-2 rounded-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-50 text-black" 
              />
            </div>

            <div className="mb-3 sm:mb-4">
              <label className="block mb-1 text-sm" htmlFor="password">Kata Sandi</label>
              <div className="relative">
                <input 
                  id="password" 
                  name="password"
                  type={showPassword ? "text" : "password"} 
                  placeholder="Masukkan kata sandi"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 sm:px-4 sm:py-2 rounded-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 pr-8 sm:pr-10 text-black" 
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-2 sm:right-3 flex items-center text-gray-400 cursor-pointer"
                >
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.8585 8L12.5002 10.6333C12.5002 10.5917 12.5002 10.5417 12.5002 10.5C12.5002 9.83696 12.2368 9.20107 11.7679 8.73223C11.2991 8.26339 10.6632 8 10.0002 8C9.95016 8 9.9085 8 9.8585 8ZM6.27516 8.66667L7.56683 9.95833C7.52516 10.1333 7.50016 10.3083 7.50016 10.5C7.50016 11.163 7.76356 11.7989 8.2324 12.2678C8.70124 12.7366 9.33712 13 10.0002 13C10.1835 13 10.3668 12.975 10.5418 12.9333L11.8335 14.225C11.2752 14.5 10.6585 14.6667 10.0002 14.6667C8.89509 14.6667 7.83529 14.2277 7.05388 13.4463C6.27248 12.6649 5.8335 11.6051 5.8335 10.5C5.8335 9.84167 6.00016 9.225 6.27516 8.66667ZM1.66683 4.05833L3.56683 5.95833L3.94183 6.33333C2.56683 7.41667 1.4835 8.83333 0.833496 10.5C2.27516 14.1583 5.8335 16.75 10.0002 16.75C11.2918 16.75 12.5252 16.5 13.6502 16.05L14.0085 16.4L16.4418 18.8333L17.5002 17.775L2.72516 3M10.0002 6.33333C11.1052 6.33333 12.165 6.77232 12.9464 7.55372C13.7278 8.33512 14.1668 9.39493 14.1668 10.5C14.1668 11.0333 14.0585 11.55 13.8668 12.0167L16.3085 14.4583C17.5585 13.4167 18.5585 12.05 19.1668 10.5C17.7252 6.84167 14.1668 4.25 10.0002 4.25C8.8335 4.25 7.71683 4.45833 6.66683 4.83333L8.47516 6.625C8.95016 6.44167 9.4585 6.33333 10.0002 6.33333Z" fill="#9D9EA1"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex justify-between text-xs sm:text-sm mb-4 sm:mb-6">
              <Link to="/register" className="text-gray-400 hover:underline">Belum punya akun? <span className="text-gray-200">Daftar</span>
              </Link>
              <button type="button" className="text-gray-200 hover:underline bg-transparent border-none p-0 m-0 cursor-pointer">Lupa kata sandi?</button>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-main hover:bg-purple-700 text-white py-2 border border-gray-400 rounded-full transition text-sm sm:text-base"
              >
                {isLoading ? 'Loading...' : 'Masuk'}
              </button>
            </div>
            <div className="text-center text-xs sm:text-sm text-gray-300 my-3 sm:my-4">Atau</div>
            <button className="w-full flex justify-center items-center gap-1 sm:gap-2 md:gap-4 border border-gray-400 text-gray-200 py-2 rounded-full shadow-md hover:bg-gray-700 transition text-sm sm:text-base">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-4 h-4 sm:w-5 sm:h-5" />
              Masuk dengan Google
            </button>
          </form>        
        </div>
      </div>

      
    </main>
    </>
  );
};

export default LoginPage;
