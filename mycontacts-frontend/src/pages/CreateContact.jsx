import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateContact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSaveContact = () => {
        const data = {
            name,
            email,
            phone,
        };
        setLoading(true);
        axios
            .post(`http://localhost:5001/api/contacts/`, data)
            .then(() => {
                setLoading(false);
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                alert('An error happened. Please check console.');
                console.log(error);
            });
    }

    return (
        <div className='p-4'>
            <BackButton/>
            <h1 className='text-3xl my-4'>Create Contact</h1>
            {loading ? <Spinner/> : ''}
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Name</label>
                    <input 
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Email</label>
                    <input 
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Phone</label>
                    <input 
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <button className='p-2 bg-sky-300 m-8' onClick={handleSaveContact}>
                    Save
                </button>
            </div>
        </div>
    )
}

export default CreateContact;