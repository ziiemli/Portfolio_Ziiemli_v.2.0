import React from "react"
import {Helmet,HelmetProvider} from "react-helmet-async"

const Start = () => {
    return (
        <main className="start">
            <HelmetProvider>
                <Helmet>
                    <title>Ziiemli - Start</title>
                    <meta name="description" content="Zilin Moulin, alias Ziiemli is a freelancer illustrator, concept artist and visual designer based in Lyon." />
                    <link rel="canonical" href="/" />
                </Helmet>
            </HelmetProvider>
            <h1>HELLO</h1>
        </main>
    )
}

export default Start
