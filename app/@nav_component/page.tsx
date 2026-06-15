import Link from "next/link";
import React from "react";

const page = () => {
    return (
        <div>
            <ul>
                <Link href="/">
                    <li>Home</li>
                </Link>
                <Link href="/about">
                    <li>About</li>
                </Link>
                <Link href="/contact">
                    <li>Contact</li>
                </Link>
            </ul>
        </div>
    );
};

export default page;
