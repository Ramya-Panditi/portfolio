import React from 'react';

const Grid2 = ()=>{
    return <>
       <div className='col-lg-3 grid-black col-md-6 col-sm-12 d-flex flex-row align-items-center rounded py-3 justify-content-center flex-wrap'>
        <div className='small-box border border-light rounded d-flex flex-column align-items-center justify-content-center col-lg-6 '>
            <h5 className='m-2'>Reach me</h5>
            <ul className='d-flex  flex-wrap align-items-center  gap-4'>
                <li><a href='https://www.linkedin.com/in/ramya-panditi/' target='_blank'><i className="fa-brands fa-linkedin fa-2xl"></i></a></li>
                <li><a href='https://github.com/Ramya-panditi' target='_blank'><i className="fa-brands fa-github fa-2xl ms-3" ></i></a></li>
                <li><a href='https://leetcode.com/Ramya1102/' target='_blank'><i className="fa-solid fa-code fa-2xl" ></i></a></li>
                <li><a href='mailto:ramyapanditi@gmail.com' target='_blank'><i className="fa-solid fa-envelope fa-2xl" ></i></a></li>
            </ul>
        </div>
        <div className='small-box  col-lg-6'>
           
        </div>
        <div className='small-box   col-lg-6'>
           
        </div>
        <div className=' small-box border border-light rounded d-flex flex-column align-items-center justify-content-center col-lg-6 mt-2'>
            <h5 className='m-1'>Interests</h5>
            <ul className='d-flex flex-wrap align-items-start flex-column justify-content-center'>
                <li>Editing</li>
                <li>Literature</li>
                <li>Videography</li>
                
            </ul>
        </div>
        
     </div>
    </>
}
export default Grid2;
