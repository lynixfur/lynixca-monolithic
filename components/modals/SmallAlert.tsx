"use client";

import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';

export default function SmallAlert() {
    return (
        <div className="bg-red-800 py-2 px-5 font-semibold -ml-1 md:mt-0 md:px-24">
            <i className="fa-solid fa-triangle-exclamation mr-2" /> Critical Alert: Please be aware that lynix.ca may experience possible downtime due to server power issues on October 23rd 2024. Thank you for your understanding.
        </div>
    )
}
