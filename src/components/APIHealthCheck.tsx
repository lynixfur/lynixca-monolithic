"use client";

import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';

export default function APIHealthCheck() {


    const [apiStatus, setApiStatus] = useState(true);

    useEffect(() => {
        fetch('https://api.lynix.ca/')
            .then((response) => {
                if (response.ok) {
                    setApiStatus(true);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                setApiStatus(false);
            });
    }, []);

    return (
        <div>
            {apiStatus == false &&<a href="#"><div className="bg-red-900 py-2 px-5 font-semibold -ml-1 md:mt-0 md:px-24">
                <i className="fa-solid fa-triangle-exclamation mr-2" /> Lynix API is currently offline some functions of the website may not function!
            </div></a>}
        </div>
    );
}
