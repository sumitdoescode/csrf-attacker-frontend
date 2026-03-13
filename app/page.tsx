"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const page = () => {
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get("https://csrf-backend.sumitdoescode.me/dashboard", {
                withCredentials: true,
            });
            console.log(data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <button className="bg-black text-white p-2 rounded-md">Click to claim your prize</button>
        </div>
    );
};

export default page;
