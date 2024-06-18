"use client";
import React, { useState, useRef, useEffect } from 'react';
import projectsData from "./projects_data";

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [maxIndex, setMaxIndex] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (carouselRef.current) {
                const visibleCards = Math.floor(carouselRef.current.offsetWidth / 320);
                const newMaxIndex = Math.max(projectsData.length - visibleCards, 0);
                setMaxIndex(newMaxIndex);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [currentIndex, projectsData.length]);

    useEffect(() => {
        // Reset scroller position when showing/hiding projects
        if (isVisible) setCurrentIndex(0);
    }, [isVisible]);

    const scrollLeft = () => {
        setCurrentIndex(prevIndex => prevIndex > 0 ? prevIndex - 1 : projectsData.length - 1);  // Wrap to last item if at start
    };

    const scrollRight = () => {
        setCurrentIndex(prevIndex => prevIndex < projectsData.length - 1 ? prevIndex + 1 : 0);  // Wrap to first item if at end
    };

    return (
        <section className="section projects">
            <h2 className="section__title">
                <input type="checkbox" id="toggle-projects" className="toggle-projects" hidden />
                <label 
                    htmlFor="toggle-projects" 
                    className="toggle-label"
                    onClick={() => setIsVisible(!isVisible)}
                >
                    {isVisible ? 'Hide Projects' : 'View Projects'}
                </label>
            </h2>
            {isVisible && (
                <div className="section__content">
                    <button className="carousel-control left" onClick={scrollLeft}>&#10094;</button>
                    <div className="carousel-container" ref={carouselRef}>
                        <div className="carousel" style={{ transform: `translateX(-${currentIndex * 320}px)` }}>
                            {projectsData.map((project) => (
                                <article className="project-card" key={project.id}>
                                    <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                                        <img src={project.imageUrl || 'path/to/default-image.jpg'} alt={project.title} className="project-image" />
                                        <div className="project-info">
                                            <h3>{project.title}</h3>
                                            <p>{project.technologies}</p>
                                            <p>Year: {project.year}</p>
                                            {project.description && <div>{project.description}</div>}
                                        </div>
                                    </a>
                                </article>
                            ))}
                        </div>
                    </div>
                    <button className="carousel-control right" onClick={scrollRight}>&#10095;</button>
                </div>
            )}
        </section>
    );
};

export default Projects;
