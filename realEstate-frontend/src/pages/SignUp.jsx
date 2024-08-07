import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [errors, setErrors] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset errors
    setErrors({ username: '', email: '', password: '' });

    let hasError = false;
    const newErrors = {};

    // Validate fields
    if (!formData.username) {
      newErrors.username = 'Username is required';
      hasError = true;
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
      hasError = true;
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    try {
      setLoading(true);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/sign-in');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className='p-6'>
      <div className='p-3 max-w-lg mx-auto border-2 border-solid border-black'>
        <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
          <div>
            <input
              type='text'
              placeholder='username'
              className={`border p-3 rounded-lg w-full ${errors.username ? 'border-red-500' : ''}`}
              id='username'
              onChange={handleChange}
            />
            {errors.username && <p className='text-red-500 text-sm'>{errors.username}</p>}
          </div>
          <div>
            <input
              type='email'
              placeholder='email'
              className={`border p-3 rounded-lg w-full ${errors.email ? 'border-red-500' : ''}`}
              id='email'
              onChange={handleChange}
            />
            {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
          </div>
          <div>
            <input
              type='password'
              placeholder='password'
              className={`border p-3 rounded-lg w-full ${errors.password ? 'border-red-500' : ''}`}
              id='password'
              onChange={handleChange}
            />
            {errors.password && <p className='text-red-500 text-sm'>{errors.password}</p>}
          </div>
          <button
            disabled={loading}
            className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
          >
            {loading ? 'Loading...' : 'Sign Up'}
          </button>
        </form>

        <div className='flex gap-2 mt-4'>
          <p>Already Have An Account?</p>
          <Link to={'/sign-in'}>
            <span className='text-blue-700'>Sign in</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
