import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import ContactModal from './ContactModal';

function ContactSingleCard({ contact }) {
    const [showModal, setShowModal] = useState(false);

    return (            
        <div
            className="border-2 border-gray-500 rounded-lg px04 py-2 m-4 relative hover:shadow-xl"
        >
            <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
                {contact.name}
            </h2>
            <h4 className="mx-1 my-2 text-gray-500">{contact._id}</h4>
            <div className="mx-1 flex justify-start items-center gap-x-2">
                <BiUserCircle className="text-red-300 text-2xl" />
                <h2 className="my-1">{contact.email}</h2>
            </div>
            <div className="mx-1 flex justify-start items-center gap-x-2">
                <PiBookOpenTextLight className="text-red-300 text-2xl" />
                <h2 className="my-1">{contact.phone}</h2>
            </div>
            <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
                <BiShow
                    className='text-3xl text-blue-800 hover:text-black cursor-pointer'
                    onClick={() => setShowModal(true)}
                />
                <Link to={`/contacts/details/${contact._id}`}>
                    <BsInfoCircle className="text-2xl text-green-800" />
                </Link>
                <Link to={`/contacts/edit/${contact._id}`}>
                    <AiOutlineEdit className="text-2xl text-yellow-600" />
                </Link>
                <Link to={`/contacts/delete/${contact._id}`}>
                    <MdOutlineDelete className="text-2xl text-red-600" />
                </Link>
            </div>
            {
                showModal && (
                    <ContactModal contact={contact} onClose={() => setShowModal(false)}/>
                )
            }
        </div>
    )
}

export default ContactSingleCard;