"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const page = () => {
    const logout = async () => {
        const { data } = await axios.get("https://csrf-backend.sumitdoescode.me/logout", {
            withCredentials: true,
        });
        console.log(data);
    };

    return (
        <div>
            <button onClick={logout} className="bg-black text-white p-2 rounded-md">
                Click here to claim prize
            </button>
        </div>
    );
};

export default page;
