"use client";

import React from "react";
import Button from "../Button";
import Image from 'next/image';

interface DownloadCVProps {
    fileUrl: string;
    fileName: string;
}

const DownloadCV: React.FC<DownloadCVProps> = ({ fileUrl, fileName }) => {
    return (
        <Button
            title="My CV"
            icon={<Image src="/assets/download.svg" alt="Download icon" width={24} height={24} />}
            position="right"
            handleClick={() => {
                const link = document.createElement("a");
                link.href = fileUrl;
                link.download = fileName;
                link.click();
            }}
        />
    );
};

export default DownloadCV;
