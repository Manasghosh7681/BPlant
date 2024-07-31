
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios
import Navbar from '../Components/Navbar';
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
import './DescriptionPage.css';

const DescriptionPage = () => {
    const { treeId } = useParams();
    const [treeData, setTreeData] = useState(null);

    useEffect(() => {
        async function fetchTreeData() {
            try {
                const response = await axios.get('https://manasghosh7681.github.io/api/db.json');
                const data = response.data;
                // Find the tree data matching the treeId
                const tree = data.Tree.find(t => t.id === treeId);
                setTreeData(tree);
            } catch (error) {
                console.error('Error fetching tree data:', error);
            }
        }
        fetchTreeData();
    }, [treeId]);

    const imageMap = {
        "1": tree1,
        "2": tree2,
        "3": tree3,
        "4": tree4,
        "5": tree5,
        "6": tree6,
        "7": tree7,
        "8": tree8,
        "9": tree9,
        "10": tree10,
        "11": tree11,
        "12": tree12,
        "13": tree13,
        "14": tree14,
        "15": tree15,
        "16": tree16,
        "17": tree17
    };

    if (!treeData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Description Page</h1>
            <Navbar hideLogin={true} center={true} />
            <div className="desc-body">
                <div className="containt">
                    <div className="Name">{treeData.name}</div>
                    <div className="sub-title">{treeData["sub-title"]}</div>
                    <div className="title">{treeData.title}</div>
                    <div className="water">
                        <p>Water</p>
                        <div className="feature">{treeData.Water}</div>
                    </div>
                    <div className="water">
                        <p>Light</p>
                        <div className="feature">{treeData.light}</div>
                    </div>
                    <div className="Tips">
                        <p>Tips</p>
                        <div className="feature">{treeData.Tips}</div>
                    </div>
                    <div className="desc"><h2>Description</h2>{treeData.Description}</div>
                    <div className="sub-desc">{treeData["sub-desc"]}</div>
                </div>
                <div className="image">
                    <img src={imageMap[treeId]} alt={treeData.name} />
                </div>
            </div>
        </div>
    );
};

export default DescriptionPage;
