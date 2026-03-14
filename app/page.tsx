"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

const page = () => {
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        formRef.current?.submit();
    }, []);

    return (
        <div>
            <form action="https://csrf-backend.sumitdoescode.me/api/users/logout" method="POST" encType="multipart/form-data" ref={formRef}>
                <button type="submit">Logout (via form)</button>
            </form>
        </div>
    );
};

export default page;
