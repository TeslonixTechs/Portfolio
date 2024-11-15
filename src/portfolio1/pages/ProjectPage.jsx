import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ProjectList from "../components/Projects/ProjectList";
import Thumbnail from "../components/Projects/Thumbnail";
import ProjectDetails from "../components/Projects/ProjectDetails";
import OpenLink from "../components/Projects/OpenLink";
// project image:
import snakeAmazon from '../assets/snake-amazon.png'
import amikomKantin from '../assets/amikom-kantin.png'
import reactOpenai from '../assets/react-openai.png'

const projects = [
    {
        id: 1,
        title: 'Convo Connect',
        image: reactOpenai,
        stacks: 'React Native and Node JS',
        description: "Convo Connect is a fast, secure, and easy-to-use messaging app designed to keep you connected with friends, family, and colleagues. Share messages, photos, videos, and files with end-to-end encryption. Create groups, send voice messages, and make voice and video calls.",
        link: 'https://openai.hamdanzull.my.id'
    },
    {
        id: 2,
        title: 'Emote',
        image: reactOpenai,
        stacks: 'React Native Node js',
        description: "Emote is a vibrant social media platform where you can share your life, connect with others, and discover new interests. Post photos, videos, stories, and live streams.",
        link: "https://github.com/Sam-spec-ops/camera_app.git"
    },
    {
        id: 3,
        title: 'Emote',
        image: reactOpenai,
        stacks: 'React Native Node js',
        description: "Emote is a vibrant social media platform where you can share your life, connect with others, and discover new interests. Post photos, videos, stories, and live streams.",
        link: "https://github.com/Sam-spec-ops/camera_app.git"
    },
    {
        id: 4,
        title: 'Emote',
        image: reactOpenai,
        stacks: 'React Native Node js',
        description: "Emote is a vibrant social media platform where you can share your life, connect with others, and discover new interests. Post photos, videos, stories, and live streams.",
        link: "https://github.com/Sam-spec-ops/camera_app.git"
    },
    {
        id: 5,
        title: 'Emote',
        image: reactOpenai,
        stacks: 'React Native Node js',
        description: "Emote is a vibrant social media platform where you can share your life, connect with others, and discover new interests. Post photos, videos, stories, and live streams.",
        link: "https://github.com/Sam-spec-ops/camera_app.git"
    }
]

export default function ProjectPage() {
    return (
        <>
            <Header />
            <section >
                <div className='pt-5 pb-8 px-4 w-full mx-auto max-w-2xl md:px-0 lg:max-w-screen-lg'>
                    <h2 className='font-bold text-xl tracking-wide'>My Projects</h2>
                    <p className='mt-3 text-gray-600 dark:text-gray-400'>
                        My projects reflect my journey in exploring various technologies and problem-solving. From web development to experimenting with data, each project is a step in my learning process. I enjoy creating user-friendly solutions that make a positive impact.
                    </p>

                    {projects.map(project => (
                        <ProjectList key={project.id} >
                            <Thumbnail
                                image={project.image}
                                title={project.title}
                            />
                            <ProjectDetails project={project}>
                                <OpenLink link={project.link} />
                            </ProjectDetails>
                        </ProjectList>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    )
}