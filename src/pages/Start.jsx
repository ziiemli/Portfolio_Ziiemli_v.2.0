import React, {useEffect, useState} from "react"
import {Helmet, HelmetProvider} from "react-helmet-async"
import sanityClient from "../client"
import {useParams, Link} from "react-router-dom"
import {urlFor} from "../client"

const Start = () => {
    //recover lang by url
    const {lang} = useParams()
    const [start, setStart] = useState(null)

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type=="start"]{
    title,
    description,
    start_logo,
    jobs,
    button,
    start_background,
    start_alt_background,
    }`
            )
            .then((data) => setStart(data[0]))
            .catch(console.error)
    }, [])

    if (!start) return <div>Loading...</div>

    return (
        <main className="start">
            <HelmetProvider>
                <Helmet>
                    <title>{start.title[lang]}</title>
                    <meta name="description" content={start.description[lang]} />
                    <link rel="canonical" href="/" />
                </Helmet>
            </HelmetProvider>
            <div className="start__content">
                <h1>{start.start_logo && <img src={urlFor(start.start_logo).url()} alt="Ziiemli Logo" />}</h1>
                <h2 className="start__content__h2">Zilin Moulin</h2>
                <ul>
                    {start.jobs.map((job, index) => (
                        <li key={index}>{job[lang]}</li>
                    ))}
                </ul>
            </div>
            <div className="start__button">
                <div className="start__button__line start__line1"></div>
                <Link to={"home"}>
                    <h2 className="start__button__start">{start.button[lang]}</h2>
                </Link>
                <div className="start__button__line"></div>
            </div>
            <div className="start__background">
                {start.start_background && <img className="start_photography_background" src={urlFor(start.start_background).url()} alt={start.start_alt_background[lang]} loading="lazy" />}
            </div>
            <div className="start__line"></div>
            <div className="start__line2"></div>
        </main>
    )
}

export default Start
