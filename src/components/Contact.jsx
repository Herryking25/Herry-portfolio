import React from 'react'

const Contact = () => {

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Optional: Perform any form validation or processing here

        // Trigger the file download
        const link = document.createElement('a');
        link.href = 'images/my cv.pdf';  // Replace with the actual path to your file
        link.download = 'Bolatito Heritage cv.pdf';  // Replace with the desired download file name
        link.click();

        // Submit the form programmatically if needed
        event.target.form.submit();
    };

  return (
    <div className='max-w-[1200px] mx-auto bg-black sm:py-20 p-5' id='contact'>
      <div className='text-center'>
            <h2 className='text-4xl font-bold leading-tight primary-color'>
                Contact
            </h2>
      </div>
      <div className='max-w-[800px] mx-auto'>
            <div className='mt-6 bg-[#161616] rounded-xl'>
                <div className='p-10'>
                    <form action="https://getform.io/f/bdrylxpb" method='POST'>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4'>
                            <div>
                                <div className='mt-2.5'>
                                    <input type="text" name="name" id='fullname' placeholder='Your Name' 
                                    className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border
                                    border-gray-700 rounded-md focus:outline-none focus:border-pink-600'/>
                                </div>
                            </div>

                            <div>
                                <div className='mt-2.5'>
                                    <input type="email" name="email" id='mail' placeholder='Your E-mail' 
                                    className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border
                                    border-gray-700 rounded-md focus:outline-none focus:border-pink-600'/>
                                </div>
                            </div>

                            <div className='sm:col-span-2'>
                                <div>
                                    <div className='mt-2.5'>
                                        <textarea name="text" id='message' placeholder='Your Message' 
                                            className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border
                                            border-gray-700 rounded-md focus:outline-none focus:border-pink-600' rows="4">
                                        </textarea>
                                    </div>
                                </div>

                            </div>
                            <div className="sm:col-span-2">
                                {/* <a href="images/devon staff schedule 2024">
                                </a> */}
                                 <button 
                                    type="submit" 
                                    className="text-xl w-full p-4 m-2 font-semibold text-white bg-primary-color rounded-md"
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </button>
                            </div>

                        </div>    
                    </form>
                </div>
            </div>

            </div>
      </div>
  )
}

export default Contact
