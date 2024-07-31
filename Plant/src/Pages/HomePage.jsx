
import React, { useState } from 'react';
import Navbar from "../Components/Navbar";
import './HomePage.css';
import flower1 from '../assets/Hero.png';
import flower2 from '../assets/hero image 2.png';
import tree1 from '../assets/image 1.png';
import tree2 from '../assets/image 2.png';
import tree3 from '../assets/image 3.png';
import tree4 from '../assets/image 4.png';
import tree5 from '../assets/image 5.png';
import tree6 from '../assets/image 6.png';
import tree7 from '../assets/image 7.png';
import tree8 from '../assets/image 8.png';
import tree9 from '../assets/image 9.png';
import tree10 from '../assets/image 10.png';
import tree11 from '../assets/image 11.png';
import tree12 from '../assets/image 12.png';
import tree13 from '../assets/image 13.png';
import tree14 from '../assets/image 14.png';
import tree15 from '../assets/image 15.png';
import tree16 from '../assets/image 16.png';
import tree17 from '../assets/image 17.png';
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    // All tree images (could be fetched from an API or another source)
    const trees = [
        tree1, tree2, tree3, tree4, tree5, tree6, tree7, tree8, tree9, tree10,
        tree11, tree12, tree13, tree14, tree15, tree16, tree17
    ];

    const totalPages = Math.ceil(trees.length / itemsPerPage);

    const handleImageClick = (treeId) => {
        navigate(`/description/${treeId}`);
    };

    const handlePageChange = (direction) => {
        if (direction === 'next' && currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        } else if (direction === 'prev' && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = trees.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <>
            <div className="home">
                <h1>HomePage</h1>
                <div className="body">
                    <Navbar />
                    <div className="inner">
                        <div className="heading">
                            <h1>'Heading'</h1>
                        </div>
                        <div className="flower">
                            <div className="flower2">
                                <img src={flower2} alt="hero" />
                            </div>
                            <div className="flower1">
                                <img src={flower1} alt="hero" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product">
                <h3>Featured Product</h3>
                <div className="tree">
                    {currentItems.map((tree, index) => (
                        <div
                            key={index + indexOfFirstItem + 1}
                            onClick={() => handleImageClick(index + indexOfFirstItem + 1)}
                            className="grid"
                        >
                            <img src={tree} alt={`Tree ${index + indexOfFirstItem + 1}`} />
                            Tree{index + indexOfFirstItem + 1}
                        </div>
                    ))}
                    <div className="pagination">
                        <button
                            onClick={() => handlePageChange('prev')}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <span>Page {currentPage} of {totalPages}</span>
                        <button
                            onClick={() => handlePageChange('next')}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
