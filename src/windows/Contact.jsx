import windowWrapper from "#hoc/WindowWrapper.jsx";
import {socials} from "#components/constants/index.js";
import WindowControls from "#components/WindowControls.jsx";

const Contact = () => {
    return (
        <>
           <div id="window-header">
               <WindowControls target="contact"/>
               <h2>Contact Me</h2>
           </div>

            <div className="p-5 space-y-5">
                <img
                    src="/images/tanmay.jpg"
                    alt="Tanmay"
                    className="w-20 rounded-full"
                />

                <h3>Let's Connect..🔗</h3>
                <p>Let’s start a conversation and create something meaningful. Feel free to reach out for work, collaboration, or discussion.</p>
                <p>tanmaypc001@gmail.com</p>

                <ul>
                    {socials.map(({ id, bg, link, icon, text }) => (
                        <li key={id} style={{ backgroundColor: bg }}>
                            <a
                                href={link}
                                target="blank"
                                rel="noopener noreferrer"
                                title={text}
                            >
                                <img
                                    src={icon}
                                    alt={text}
                                    className="size-5"
                                />
                                <p>{text}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

const ContactWindow = windowWrapper(Contact, "contact");

export default ContactWindow;
