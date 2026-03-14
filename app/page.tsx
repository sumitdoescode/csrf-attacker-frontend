"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const page = () => {
    // const logout = async () => {
    //     try {
    //         const { data } = await axios.get("https://csrf-backend.sumitdoescode.me/api/users/logout", {
    //             withCredentials: true,
    //         });
    //         console.log(data);
    //     } catch (error: any) {
    //         console.log(error.response.data);
    //     }
    // };

    // const createTodo = async () => {
    //     try {
    //         const { data } = await axios.post(
    //             "https://csrf-backend.sumitdoescode.me/api/todos",
    //             {
    //                 title: "todo by hacker",
    //                 description: "description of todo by hacker",
    //             },
    //             {
    //                 withCredentials: true,
    //             },
    //         );
    //         console.log(data);
    //     } catch (error: any) {
    //         console.log(error.response.data);
    //     }
    // };

    return (
        <div>
            <a href="https://csrf-backend.sumitdoescode.me/api/users/logout" className="bg-black text-white p-2 rounded-md">
                Logout
            </a>
            {/* <button onClick={createTodo} className="bg-black text-white p-2 rounded-md">
                Create Todo (via axios)
            </button>
            <form action="https://csrf-backend.sumitdoescode.me/api/todos" method="POST" encType="multipart/form-data">
                <input type="text" hidden name="title" defaultValue="todo by hacker" />
                <input type="text" hidden name="description" defaultValue="description of todo by hacker" />
                <button type="submit">Create Todo (via form)</button>
            </form> */}
        </div>
    );
};

export default page;
