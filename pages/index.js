import Head from "next/head";
import Seo from "../components/Seo";

export default function Home(){
    return (
        <div>
            <Seo title={"Home"} />
            <h1>Welcome :)</h1>
        </div>
    )
}