"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const page = () => {
    const logout = async () => {
        try {
            const { data } = await axios.get("https://csrf-backend.sumitdoescode.me/api/users/logout", {
                withCredentials: true,
            });
            console.log(data);
        } catch (error: any) {
            console.log(error.response.data);
        }
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
