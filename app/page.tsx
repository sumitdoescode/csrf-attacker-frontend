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

    useEffect(() => {
        logout();
    }, []);

    return (
        <div>
            <h1>Hey there!!</h1>
        </div>
    );
};

export default page;
