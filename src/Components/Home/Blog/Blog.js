import React from 'react';
import BlogDetails from './BlogDetails';
import blog1 from '../../../images/client (1).png';
import blog2 from '../../../images/client (2).png';
import blog3 from '../../../images/client (3).png';

const BlogData = [
    {
        id: '1',
        title: 'Check a doctor atleast a year for your teeth',
        doctor: 'Dr. Rasheda Kabir',
        date: '22 Aug 2018',
        img: blog1
    }, {
        id: '2',
        title: 'Two times of brush in a day can keep you healthy',
        doctor: 'Dr. Ibna Helal',
        date: '23 Aug 2019',
        img: blog2
    }, {
        id: '3',
        title: 'Tooth Cancer is taking a challenge',
        doctor: 'Dr. Kylie Jenner',
        date: '24 Aug 2020',
        img: blog3
    },
]

const Blog = () => {
    return (
        <div className="container" style={{marginTop: '100px'}}>
            <div className="text-center mb-5">
                <h5 className="primary-color text-uppercase">Our blogs</h5>
                <h2>From Our Blog News</h2>
            </div>
         
            <div className="row">
            {
                BlogData.map(data => <BlogDetails data={data} key={data.id}></BlogDetails>)
            }
            </div>
       
        </div>
    );
};

export default Blog;