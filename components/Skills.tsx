import Icons from './Icons';

const groups = [
    { name: 'Languages', items: 'C++, Python, TypeScript, JavaScript, SQL, Java, HTML, CSS' },
    { name: 'HMI & embedded', items: 'Qt, QML, OPC UA, embedded Linux displays, Tkinter, CMake, Protocol Buffers' },
    { name: 'Web & mobile', items: 'React, Next.js, React Native, Node, Express, Angular, Vue, Tailwind, Phaser' },
    { name: 'Databases', items: 'PostgreSQL, MongoDB, SQLite, Oracle, Sequelize, Mongoose' },
    { name: 'Cloud & DevOps', items: 'Azure (DevOps pipelines, Kubernetes), Docker, Linux, CI/CD, Git, Vercel, Firebase, AWS' },
    { name: 'Testing & automation', items: 'Qt Test, Jest, Cypress, Puppeteer, Selenium, hardware-in-the-loop test plans' },
    { name: 'Data & visualization', items: 'Power BI, Tableau, Pandas, NumPy, Matplotlib, Open3D, Three.js' },
    { name: 'Design & other', items: 'Figma, Photoshop, technical documentation, release coordination' },
];

export default function Skills() {
    return (
        <section id="skills" className="mx-auto max-w-6xl px-4 py-12">
            <h2 className="mb-2 text-center text-3xl font-bold text-gray-900 dark:text-white">Skills & tools</h2>
            <Icons />
            <dl className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2">
                {groups.map((g) => (
                    <div key={g.name} className="rounded-2xl border border-white/60 bg-white/70 p-5 dark:border-gray-700/60 dark:bg-gray-800/60">
                        <dt className="font-bold text-gray-900 dark:text-white">{g.name}</dt>
                        <dd className="mt-1 text-sm text-gray-600 dark:text-gray-300">{g.items}</dd>
                    </div>
                ))}
            </dl>
        </section>
    );
}
