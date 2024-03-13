import React from "react";
import NavBar from "./NavBar";
import { Header, Divider } from "semantic-ui-react";
import { motion } from "framer-motion";
import selfPortrait from "./assets/me.jpg";

const About = () => {
    const label = {
        fontWeight: "bold",
        fontFamily: "Quicksand, sans-serif",
        color: "#54ffff",
        margin: "8px",
        padding: "8px",
        paddingLeft: "12px",
        paddingRight: "12px",
        outline: "1px solid",
        borderRadius: "5px",
    };
    return (
        <>
            <NavBar />
            <motion.div
                className="absCtr"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opcaity: 0 }}
            >
                <Divider
                    inverted
                    horizontal
                    style={{ paddingLeft: "6vw", paddingRight: "6vw" }}
                >
                    <h1 className="header" style={{ fontSize: "10vh" }}>
                        ABOUT ME
                    </h1>
                </Divider>

                <Divider />
                <p className="about-txt">
                    Welcome to my portfolio! I'm{" "}
                    <span
                        style={{
                            color: "#54ffff",
                            textDecoration: "underline",
                        }}
                    >
                        Andrew Hawileh
                    </span>
                    , a passionate and dedicated full stack web developer with a
                    drive for creating innovative and efficient digital
                    solutions. With a combined three years of experience
                    stemming from my educational background, I've honed my
                    skills and expertise to excel in the dynamic field of
                    software engineering. As a lifelong learner, I recognize the
                    importance of staying ahead in this fast-paced industry. I
                    actively seek out opportunities to enhance my capabilities
                    and maintain a competitive edge. This commitment led me to
                    participate in a high-intensity software engineering
                    bootcamp, where I further refined my skills and gained
                    valuable insights into cutting-edge technologies.
                </p>
                <br />
                <p className="about-txt">
                    My journey in software engineering has equipped me with a
                    robust understanding of both front-end and back-end
                    development, allowing me to craft seamless and user-friendly
                    web applications. Whether it's designing intuitive user
                    interfaces or optimizing database performance, I thrive on
                    tackling challenges and delivering high-quality solutions
                    that exceed expectations. Driven by a passion for technology
                    and a desire to make a meaningful impact, I am constantly
                    exploring new avenues for growth and innovation. With a
                    collaborative mindset and a relentless pursuit of
                    excellence, I am excited to leverage my skills to contribute
                    to transformative projects and drive positive change in the
                    digital landscape. Thank you for visiting my portfolio, and
                    I look forward to the opportunity to collaborate and create
                    something extraordinary together.
                </p>
                <br />
                <img
                    src={selfPortrait}
                    style={{ borderRadius: "50%", width: "10vw" }}
                    alt="self portrait"
                />
                <Divider />
                <Header
                    as="h1"
                    style={{
                        fontSize: "3vh",
                        fontStyle: "italic",
                        fontWeight: "lighter",
                    }}
                    inverted={true}
                >
                    Skills
                </Header>
                <div
                    style={{
                        display: "flex",
                        width: "50%",
                        justifyContent: "center",
                        flexWrap: "wrap",
                    }}
                >
                    <span style={label}>JavaScript</span>
                    <span style={label}>React.js</span>
                    <span style={label}>Express.js</span>
                    <span style={label}>PostgreSQL</span>
                    <span style={label}>Python</span>
                    <span style={label}>Dokku</span>
                    <span style={label}>Tailwind</span>
                    <span style={label}>Object-Relational Mapping</span>
                </div>
            </motion.div>
        </>
    );
};

export default About;
