import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider, signInWithPopup } from '../firebase';
import { FcGoogle } from 'react-icons/fc';
import { HiShieldCheck, HiLockClosed, HiSparkles } from 'react-icons/hi';

const Login = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/dashboard');
    } catch (err) {
      setError('Google login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    {
      icon: <HiShieldCheck className="text-2xl text-green-500" />,
      title: "Secure Authentication",
      description: "Protected by Google's enterprise security"
    },
    {
      icon: <HiLockClosed className="text-2xl text-blue-500" />,
      title: "Privacy First",
      description: "Your data is encrypted and protected"
    },
    {
      icon: <HiSparkles className="text-2xl text-purple-500" />,
      title: "Instant Access",
      description: "Get started in seconds, no setup required"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-blue-400/30 rounded-full animate-float-particle-${i + 1}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Welcome Content */}
        <div className={`text-center lg:text-left transform transition-all duration-1000 ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
        }`}>
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-200/50">
              <HiSparkles className="text-lg" />
              <span>Welcome Back</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                Sign in to
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Your Account
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Access your dashboard and continue your journey with our advanced platform.
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`flex items-center space-x-4 transform transition-all duration-700 delay-${index * 200} ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center">
                  {feature.icon}
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className={`flex justify-center lg:justify-end transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
        }`}>
          <div className="bg-white/80 backdrop-blur-xl p-8 lg:p-12 rounded-3xl shadow-2xl max-w-md w-full border border-white/20 relative overflow-hidden">
            {/* Card Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/30 rounded-3xl"></div>
            
            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform duration-300">
                  <HiLockClosed className="text-2xl text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
                <p className="text-gray-600">Sign in with your Google account</p>
              </div>

              {/* Google Login Button */}
              <button
                onClick={handleGoogleLogin}
                disabled={isLoading}
                className="group relative w-full bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-blue-300 text-gray-700 p-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-3"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <FcGoogle className="text-2xl group-hover:scale-110 transition-transform duration-200" />
                    <span>Continue with Google</span>
                  </>
                )}
                
                {/* Button Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/10 group-hover:via-purple-600/10 group-hover:to-pink-600/10 transition-all duration-300"></div>
              </button>

              {/* Error Message */}
              {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <p className="text-red-600 text-sm text-center">{error}</p>
                </div>
              )}

              {/* Security Notice */}
              <div className="mt-8 p-4 bg-blue-50/50 rounded-xl border border-blue-200/50">
                <div className="flex items-center space-x-2 text-blue-700">
                  <HiShieldCheck className="text-lg flex-shrink-0" />
                  <p className="text-sm">
                    Your login is secured with enterprise-grade encryption and Google's advanced security protocols.
                  </p>
                </div>
              </div>

              {/* Terms */}
              <p className="text-xs text-gray-500 text-center mt-6">
                By signing in, you agree to our{' '}
                <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float-particle-1 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-40px) translateX(-5px); }
          75% { transform: translateY(-20px) translateX(-10px); }
        }
        
        @keyframes float-particle-2 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-30px) translateX(-15px); }
          66% { transform: translateY(-15px) translateX(20px); }
        }
        
        @keyframes float-particle-3 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-25px) translateX(15px); }
        }
        
        @keyframes float-particle-4 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-15px) translateX(-20px); }
          50% { transform: translateY(-35px) translateX(10px); }
          75% { transform: translateY(-10px) translateX(25px); }
        }
        
        @keyframes float-particle-5 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          40% { transform: translateY(-20px) translateX(30px); }
          80% { transform: translateY(-40px) translateX(-10px); }
        }
        
        @keyframes float-particle-6 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          30% { transform: translateY(-25px) translateX(-25px); }
          60% { transform: translateY(-10px) translateX(15px); }
        }
        
        .animate-float-particle-1 { animation: float-particle-1 8s ease-in-out infinite; }
        .animate-float-particle-2 { animation: float-particle-2 10s ease-in-out infinite; }
        .animate-float-particle-3 { animation: float-particle-3 6s ease-in-out infinite; }
        .animate-float-particle-4 { animation: float-particle-4 12s ease-in-out infinite; }
        .animate-float-particle-5 { animation: float-particle-5 9s ease-in-out infinite; }
        .animate-float-particle-6 { animation: float-particle-6 7s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Login;

