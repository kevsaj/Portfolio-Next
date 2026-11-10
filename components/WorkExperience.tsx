import Link from 'next/link';
import CompactPointCloudDemo from './CompactPointCloudDemo';

const maclean = [
    <>Develop <strong>operator HMIs for underground mining machines</strong>, including a battery-electric grader: in-cab displays in <strong>C++ and Qt/QML</strong> on embedded Linux, built from a shared library of gauges, indicators and status bars.</>,
    <>Built the data layer that connects the display to the machine&apos;s controller over <strong>OPC UA</strong>, so live machine signals such as speed, steering, battery and faults reach the screen reliably.</>,
    <>Designed <strong>battery status and health screens</strong> for an electric machine, working with controls engineers to get the right signals and units from the controller.</>,
    <>Found and fixed a <strong>crash in the live-data subscription code</strong>, then added a regression test that reproduces the fault so it cannot come back unnoticed.</>,
    <>Write release <strong>test plans</strong> with QA and controls engineers and run them on hardware simulation boards, catching defects before software reaches a machine.</>,
    <>Maintain <strong>Python remote-control software</strong> on rugged Linux tablets, with live camera feeds, machine status and fault codes in English and Spanish, packaged with Docker through an automated pipeline.</>,
    <>Earlier: a <strong>3D point cloud analysis tool</strong> (Python, Open3D), <strong>React</strong> dashboards for machine data, and <strong>Node.js and PostgreSQL REST APIs</strong> deployed on Azure Kubernetes with Jest and Cypress tests.</>,
    <>Coordinate releases across several applications on a team that has <strong>grown from 4 to 12 developers</strong>, helping newer developers get up to speed.</>,
];

const deloitte = [
    <>Automated <strong>document linking and data entry</strong> with Puppeteer, cutting manual effort and errors.</>,
    <>Audited invoices and tax returns to find discrepancies and resolve client and vendor disputes.</>,
    <>Supported financial analysis and compliance reviews across several advisory engagements.</>,
];

function Job({ title, company, dates, bullets, tech, children }: {
    title: string; company: string; dates: string; bullets: React.ReactNode[]; tech: string[]; children?: React.ReactNode;
}) {
    return (
        <article className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-lg dark:border-gray-700/60 dark:bg-gray-800/70">
            <div className="mb-4 flex flex-col md:flex-row md:items-start md:justify-between">
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h3>
                    <p className="text-xl font-semibold text-purple-700 dark:text-purple-300">{company}</p>
                </div>
                <p className="font-medium text-gray-600 dark:text-gray-400">{dates}</p>
            </div>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                {bullets.map((b, i) => (
                    <li key={i} className="flex items-start">
                        <span className="mr-2 mt-1 text-pink-500" aria-hidden="true">▶</span>
                        <p>{b}</p>
                    </li>
                ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
                {tech.map((t) => (
                    <span key={t} className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 dark:bg-purple-900/40 dark:text-purple-200">{t}</span>
                ))}
            </div>
            {children}
        </article>
    );
}

export default function WorkExperience() {
    return (
        <section id="experience" className="mx-auto max-w-5xl px-4 py-12">
            <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 dark:text-white">Work experience</h2>
            <div className="space-y-8">
                <Job
                    title="Software Developer"
                    company="MacLean Engineering"
                    dates="July 2021 – Present"
                    bullets={maclean}
                    tech={['C++', 'Qt / QML', 'Python', 'OPC UA', 'Embedded Linux', 'React', 'Node.js', 'PostgreSQL', 'Docker', 'Azure DevOps']}
                >
                    <p className="mt-6">
                        <Link href="/hmi" className="font-semibold text-pink-600 underline-offset-4 hover:underline dark:text-pink-400">
                            Read the case study: building operator screens for heavy machines →
                        </Link>
                    </p>
                    <details className="mt-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black p-6 text-white">
                        <summary className="cursor-pointer font-semibold">Interactive demo: 3D point cloud viewer</summary>
                        <div className="mt-4">
                            <CompactPointCloudDemo />
                            <p className="mt-4 text-sm text-gray-300">A small browser version of the kind of point cloud clustering and reporting tool I built in Python with Open3D. Sample data only.</p>
                        </div>
                    </details>
                </Job>
                <Job
                    title="Financial Advisory & Tax Technician"
                    company="Deloitte"
                    dates="February 2019 – July 2021"
                    bullets={deloitte}
                    tech={['Puppeteer', 'Process automation', 'Financial analysis', 'Tax compliance']}
                />
            </div>
        </section>
    );
}
