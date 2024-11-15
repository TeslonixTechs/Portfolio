/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useTypewriter, Cursor } from 'react-simple-typewriter'

export const text = [`Hi everyone 👋\nI'm Samuel Oni, a seasoned Full Stack Web and Mobile Developer with 4+ years of experience in crafting innovative digital solutions. With a strong passion for staying updated with the latest technologies, I specialize in developing scalable, secure, and user-friendly applications that meet diverse needs.`]

export function AboutContent({ aboutToggle }) {
    const [typing] = useTypewriter({
        words: text,
        loop: 0,
        typeSpeed: 20,
        deleteSpeed: 20,
        delaySpeed: 3000
    })
    return (
        <>
            <p className='whitespace-pre-line mt-2 leading-6'>
                {aboutToggle ? typing : 'See you 👋'}
                <Cursor />
            </p>
        </>
    )
}