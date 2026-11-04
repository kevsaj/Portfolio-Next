const services = [
    { icon: '🌐', title: 'Website design & development', body: 'Fast, mobile-friendly sites for businesses, portfolios and events, built to be easy to update.' },
    { icon: '📱', title: 'Web & mobile app development', body: 'Custom apps with logins, dashboards and payments, from first prototype to launch.' },
    { icon: '🛍️', title: 'Shopify & e-commerce stores', body: 'Store setup, themes, product imports and integrations so you can start selling online.' },
    { icon: '🎮', title: 'Game development & interactive', body: 'Browser games, 3D and interactive experiences that get people to stay and play.' },
    { icon: '🔌', title: 'API development & integrations', body: 'REST APIs and connections between the tools you already use, so data moves on its own.' },
    { icon: '🗄️', title: 'Database design & migration', body: 'Design, clean-up and migration for PostgreSQL, MongoDB and more, built to grow with you.' },
    { icon: '🖥️', title: 'Desktop software & GUIs', body: 'Internal tools, Python desktop apps and machine HMIs that turn a manual process into a button click.' },
    { icon: '⚙️', title: 'Automation & scripting', body: 'Scripts and bots for data entry, scraping and repetitive tasks that eat up your week.' },
    { icon: '📊', title: 'Reports & dashboards', body: 'Power BI and custom dashboards that show what is happening in your business at a glance.' },
    { icon: '🔍', title: 'Data analysis', body: 'Turn spreadsheets and raw data into clear answers, forecasts and next steps.' },
    { icon: '🎨', title: 'Branding & design', body: 'Logos, colours, UI design and a consistent look across your site and socials.' },
    { icon: '📣', title: 'SEO & online presence', body: 'SEO, Google Business, analytics and social setup so the right people actually find you.' },
];

export { services };

export default function Services() {
    return (
        <section id="services" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-20">
            <div className="mx-auto mb-12 max-w-2xl text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-pink-600 dark:text-pink-400">Web development services</p>
                <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">If it lives online, I can help build it</h2>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                    Pick one thing or mix and match. Most projects touch a few of these, and you only deal with one person for all of it.
                </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((s) => (
                    <div key={s.title} className="group rounded-2xl border border-white/60 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-gray-700/60 dark:bg-gray-800/60">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-100 to-purple-100 text-2xl dark:from-pink-900/40 dark:to-purple-900/40" aria-hidden="true">{s.icon}</div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{s.title}</h3>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{s.body}</p>
                    </div>
                ))}
            </div>
            <p className="mt-10 text-center text-gray-700 dark:text-gray-300">
                Don&apos;t see it here?{' '}
                <a href="#contact" className="font-semibold text-pink-600 underline-offset-4 hover:underline dark:text-pink-400">Ask anyway</a>, the answer is usually yes.
            </p>
        </section>
    );
}
