import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Password dan konfirmasi password tidak cocok!');
      return;
    }
    
    setIsLoading(true);
    
    setTimeout(() => {
      console.log('Register form submitted:', formData);
      setIsLoading(false);
      alert('Registrasi berhasil! Silahkan login.');
      window.location.href = '/login';
    }, 2000);
  };

  return (
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
            <h2 className="text-lg sm:text-xl font-semibold">Daftar</h2>
            <p className="text-xs sm:text-sm text-gray-300">Selamat datang!!</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div>
              <label htmlFor="username" className="block text-sm font-medium mb-2">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                value={formData.username}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-full bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Pilih username"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Kata Sandi
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-full bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Masukkan kata sandi"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 px-3 flex items-center text-sm"
                >
                  {showPassword ? "Sembunyikan" : "Tampilkan"}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                Konfirmasi Kata Sandi
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-full bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Konfirmasi kata sandi"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 px-3 flex items-center text-sm"
                >
                  {showConfirmPassword ? "Sembunyikan" : "Tampilkan"}
                </button>
              </div>
            </div>

            <div className="flex justify-between text-xs sm:text-sm mb-4 sm:mb-6">
              <Link to="/login" className="text-gray-400 hover:underline">Sudah punya akun? <span className="text-gray-200">Masuk</span>
              </Link>
              <button type="button" className="text-gray-200 hover:underline bg-transparent border-none p-0 m-0 cursor-pointer">Lupa kata sandi?</button>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-main hover:bg-purple-700 text-white py-2 rounded-full border border-gray-400 transition text-sm sm:text-base"
              >
                {isLoading ? 'Loading...' : 'Daftar'}
              </button>
            </div>
            <div className="text-center text-xs sm:text-sm text-gray-300 my-3 sm:my-4">Atau</div>
            <button className="w-full flex justify-center items-center gap-1 sm:gap-2 md:gap-4 border border-gray-400 text-gray-200 py-2 rounded-full shadow-md hover:bg-gray-700 transition text-sm sm:text-base">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-4 h-4 sm:w-5 sm:h-5" />
              Daftar dengan Google
            </button>
          </form>

        </div>
      </div>

      {/* Right column - Image */}
      <div className="hidden md:block md:w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('/assets/image/background login.png')" }}>
        <div className="h-full w-full flex flex-col justify-center items-center bg-black bg-opacity-40 p-12">
          <img src="/assets/icon/Logo.svg" alt="Rayfilm Logo" className="h-16 mb-8" />
          <h2 className="text-4xl font-bold mb-4 text-center">Bergabunglah Dengan Rayfilm</h2>
          <p className="text-xl text-center text-gray-200">
            Akses ribuan film dan serial TV favoritmu kapan saja dan di mana saja
          </p>
        </div>
      </div>
    </main>
  );
};

export default Register;
