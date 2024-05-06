import React from 'react'

export default function Delete({ visible, onClose, onDelete }) {
    const handleOnClose= () => {
        onClose();
    };

    const handleConfirmDelete = async () => {
        onDelete();
        onClose();  // Close the Delete modal after delete
    };

    if (!visible) return null;

    return (
        <div
            onClick={handleOnClose} 
            className='fixed inset-0 bg-accent bg-opacity-20 backdrop-blur-sm
            flex justify-center items-center'>
            <div className='bg-box3 h-28 w-60 p-2 rounded'>
                <div className='font-bold text-boxf flex justify-center text-2xl pt-2 pb-4'>Confirm Delete?</div>
                <div className='flex justify-between gap-3 '>
                    <button onClick={handleConfirmDelete} class="bg-accent h-full w-full font-bold rounded-full py-2 text-background
                    transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-2xl hover:bg-background hover:text-accent  duration-300">Confirm</button>
                    <button className="bg-boxf h-full w-full font-bold rounded-full py-2 text-background 
                    transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-2xl hover:bg-background hover:text-boxf  duration-300">Decline</button>
                </div>
            </div>
        </div>
    )
}

