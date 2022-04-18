import Image from "next/image";
import { useState } from "react";
import uuid from 'react-uuid'
import ThreeDButton from "../threeDButton/ThreeDButton";

export function DicebearAvatarGenerator() {
    const [type, setType] = useState("micah");
    const [seed, setSeed] = useState(uuid());

    const types = ["adventurer", "adventurer-neutral", "avataaars", "big-ears", "big-ears-neutral", "big-smile", "bottts", "croodles", "croodles-neutral", "identicon", "initials", "micah", "miniavs", "open-peeps", "personas", "pixel-art", "pixel-art-neutral"];

    const randomize = () => {
        setType(types[Math.floor(Math.random()*types.length)]);
        setSeed(uuid());
    };

    return (
        <div className="dicebear-avatars">
            <ThreeDButton action={randomize} text="Show me something else!"/>
            <Image width={300} height={300} alt="" src={`https://avatars.dicebear.com/api/${type}/${seed}.svg`}></Image>
        </div>
    )
}