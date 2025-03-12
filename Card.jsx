import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Card = () => {
    const [country, setCountry] = useState("");
    const [lang, setLang] = useState(""); 
    const [category, setCategory] = useState("");
    const [data, setData] = useState([]);

    const getNews = async () => {
        try {
            const response = await axios.get(
                `https://gnews.io/api/v4/search?q=${category}&lang=${lang}&country=${country}&max=25&apikey=5eb8e55438d3fabc693a23e8950988af`
            );
            setData(response.data.articles);
            console.log(response.data.articles);
          
        } catch (error) {
            alert("enter requirement elemnets", error);
        }
    };

      
    return (
        <div> 
            <div className="header">
                <div className="relative h-[400px] bg-gradient-to-tr from-indigo-600 via-indigo-700 to-violet-800">
                    <div className="flex flex-col gap-4 justify-center items-center w-full h-full px-3 md:px-0">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">News</h1>
                        <p className="text-gray-300">Search by country / category</p>
                        <div className="srcbar">
                            <input 
                                type="text" 
                                className="rounded-md w-full p-3 border border-gray-200"
                                value={country} 
                                onChange={(e) => setCountry(e.target.value)} 
                                placeholder="Country Code"
                            />
                            <input 
                                type="text" 
                                className="rounded-md w-full p-3 border border-gray-200"
                                value={category} 
                                onChange={(e) => setCategory(e.target.value)} 
                                placeholder="politics , politics"
                            />
                            <input 
                                type="text" 
                                className="rounded-md w-full p-3 border border-gray-200"
                                value={lang} 
                                onChange={(e) => setLang(e.target.value)} 
                                placeholder="hindi,english"
                            />
                          
                            <button 
                                onClick={getNews} 
                                className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>    

            {/* News Display Section */}
            <div className="blogs grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
                {data.map((elem, idx) => (
                    <div className="news bg-white rounded-lg shadow-md p-4" key={idx}>
                        <a href={elem.url} target="_blank" rel="noopener noreferrer">
                            <img 
                                src={elem.image} 
                                alt={elem.title} 
                                target = "_blank"
                                className="w-full h-48 object-cover rounded-md"
                            />
                        </a>
                        <div className="mt-3">
                            <a href={elem.url} className="text-indigo-600 font-bold text-xl hover:underline">
                                {elem.title} 
                            </a>
                            <p className="text-gray-700 mt-2">{elem.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;
